[CmdletBinding(DefaultParameterSetName = 'Database')]
param(
    [string]$Server = '127.0.0.1\DB3TSOFT',
    [Parameter(Mandatory = $true, ParameterSetName = 'Database')]
    [ValidateNotNullOrEmpty()]
    [string]$Database,
    [Parameter(Mandatory = $true, ParameterSetName = 'List')]
    [switch]$ListDatabases,
    [Parameter(ParameterSetName = 'Database')]
    [switch]$Schema,
    [string]$Username,
    [System.Management.Automation.PSCredential]$Credential,
    [switch]$IntegratedSecurity,
    [switch]$EmptyPassword,
    [string]$PasswordEnvironmentVariable = 'THREESOFT_SQL_PASSWORD',
    [ValidateRange(1, 120)]
    [int]$ConnectTimeout = 5
)

$ErrorActionPreference = 'Stop'
$connection = $null
$plainPassword = $null
$builder = $null
try {
    if ($IntegratedSecurity -and ($Username -or $Credential -or $EmptyPassword)) {
        throw 'Choose Windows authentication OR SQL authentication.'
    }
    if ($Credential -and ($Username -or $EmptyPassword)) {
        throw 'Use Credential alone, without Username or EmptyPassword.'
    }
    if (-not $IntegratedSecurity -and -not $Credential -and -not $Username) {
        throw 'SQL authentication requires Username or Credential.'
    }

    # Indexer keys avoid PowerShell property-adapter issues on this builder.
    $builder = New-Object System.Data.SqlClient.SqlConnectionStringBuilder
    $builder['Data Source'] = $Server
    $builder['Initial Catalog'] = if ($ListDatabases) { 'master' } else { $Database }
    $builder['Connect Timeout'] = $ConnectTimeout
    $builder['Application Name'] = 'Codex3TSoftReadOnly'
    $builder['ApplicationIntent'] = 'ReadOnly'
    $builder['Persist Security Info'] = $false
    $builder['Integrated Security'] = [bool]$IntegratedSecurity
    if (-not $IntegratedSecurity) {
        if ($Credential) {
            $builder['User ID'] = $Credential.UserName
            $plainPassword = $Credential.GetNetworkCredential().Password
        } else {
            $builder['User ID'] = $Username
            if ($EmptyPassword) {
                $plainPassword = ''
            } else {
                $plainPassword = [Environment]::GetEnvironmentVariable($PasswordEnvironmentVariable, 'Process')
                if ([string]::IsNullOrEmpty($plainPassword)) {
                    $securePassword = Read-Host 'SQL password (hidden; use -EmptyPassword for blank)' -AsSecureString
                    $inputCredential = New-Object System.Management.Automation.PSCredential($Username, $securePassword)
                    $plainPassword = $inputCredential.GetNetworkCredential().Password
                    if ([string]::IsNullOrEmpty($plainPassword)) {
                        throw 'Blank password requires explicit EmptyPassword.'
                    }
                }
            }
        }
        $builder['Password'] = $plainPassword
    }

    $connection = New-Object System.Data.SqlClient.SqlConnection($builder.ConnectionString)
    $connection.Open()
    $command = $connection.CreateCommand()
    $command.CommandTimeout = 30
    if ($ListDatabases) {
        $command.CommandText = @'
SELECT name AS DatabaseName, state_desc AS State
FROM sys.databases
WHERE database_id > 4 AND HAS_DBACCESS(name) = 1
ORDER BY name;
'@
    } else {
        if (-not [string]::Equals($connection.Database, $Database, [StringComparison]::OrdinalIgnoreCase)) {
            throw 'Connected database does not match the requested database.'
        }
        $command.CommandText = @'
SELECT DB_NAME() AS DatabaseName,
       HAS_PERMS_BY_NAME(DB_NAME(), 'DATABASE', 'SELECT') AS HasDatabaseSelect,
       (SELECT COUNT(*) FROM sys.tables WHERE is_ms_shipped = 0) AS VisibleUserTables;
SELECT SCHEMA_NAME(schema_id) AS SchemaName, name AS TableName
FROM sys.tables
WHERE name IN ('DmDvcs','DmTk','DmDt','SoCaiKT','CdKT','CdKT0','SoCaiCN')
ORDER BY name;
'@
        if ($Schema) {
            $command.CommandText += @'

SELECT SCHEMA_NAME(t.schema_id) AS SchemaName, t.name AS TableName,
       c.name AS ColumnName, ty.name AS DataType
FROM sys.tables t
JOIN sys.columns c ON t.object_id = c.object_id
JOIN sys.types ty ON c.user_type_id = ty.user_type_id
WHERE t.name IN ('DmTk','DmDt','SoCaiKT','CdKT','CdKT0','SoCaiCN')
   OR (t.name = 'DmDvcs' AND c.name IN ('Ma_Dvcs','Ten_Dvcs','Ms_Thue'))
ORDER BY t.name, c.column_id;
'@
        }
    }

    $adapter = New-Object System.Data.SqlClient.SqlDataAdapter($command)
    $dataset = New-Object System.Data.DataSet
    [void]$adapter.Fill($dataset)
    $resultSets = @()
    foreach ($table in $dataset.Tables) {
        $rows = @()
        foreach ($row in $table.Rows) {
            $item = [ordered]@{}
            foreach ($column in $table.Columns) {
                $value = $row[$column.ColumnName]
                if ($value -is [DBNull]) { $value = $null }
                $item[$column.ColumnName] = $value
            }
            $rows += [pscustomobject]$item
        }
        $resultSets += [pscustomobject]@{ Rows = $rows }
    }
    [pscustomobject]@{
        Server = $Server
        Database = $connection.Database
        Mode = if ($ListDatabases) { 'ListDatabases' } else { 'Probe' }
        ResultSets = $resultSets
    } | ConvertTo-Json -Depth 8
} catch {
    # Never echo the connection string or parameter/credential objects.
    $rootError = $_.Exception
    while ($rootError.InnerException) { $rootError = $rootError.InnerException }
    if ($rootError -is [System.Data.SqlClient.SqlException]) {
        [Console]::Error.WriteLine('SQL connection/read failed (SQL error {0}). Check server, database, authentication and SELECT permissions.', $rootError.Number)
    } else {
        [Console]::Error.WriteLine('Connection check failed: {0}', $rootError.Message)
    }
    exit 1
} finally {
    if ($connection) { $connection.Dispose() }
    if ($builder) { $builder.Clear() }
    $plainPassword = $null
    $inputCredential = $null
    $securePassword = $null
}
