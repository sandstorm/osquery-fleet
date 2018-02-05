OSQUERY_SCHEMA = 
{
  "acpi_tables": {
    "text": "acpi_tables",
    "displayText": "acpi_tables - Firmware ACPI functional table common metadata and content.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - ACPI table name"
      },
      {
        "text": "size",
        "displayText": "size (integer) - Size of compiled table data"
      },
      {
        "text": "md5",
        "displayText": "md5 (text) - MD5 hash of table content"
      }
    ]
  },
  "ad_config": {
    "text": "ad_config",
    "displayText": "ad_config - OS X Active Directory configuration.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - The OS X-specific configuration name"
      },
      {
        "text": "domain",
        "displayText": "domain (text) - Active Directory trust domain"
      },
      {
        "text": "option",
        "displayText": "option (text) - Canonical name of option"
      },
      {
        "text": "value",
        "displayText": "value (text) - Variable typed option value"
      }
    ]
  },
  "alf": {
    "text": "alf",
    "displayText": "alf - OS X application layer firewall (ALF) service details.",
    "columns": [
      {
        "text": "allow_signed_enabled",
        "displayText": "allow_signed_enabled (integer) - 1 If allow signed mode is enabled else 0"
      },
      {
        "text": "firewall_unload",
        "displayText": "firewall_unload (integer) - 1 If firewall unloading enabled else 0"
      },
      {
        "text": "global_state",
        "displayText": "global_state (integer) - 1 If the firewall start by default else 0"
      },
      {
        "text": "logging_enabled",
        "displayText": "logging_enabled (integer) - 1 If logging mode is enabled else 0"
      },
      {
        "text": "logging_option",
        "displayText": "logging_option (integer) - Firewall logging option"
      },
      {
        "text": "stealth_enabled",
        "displayText": "stealth_enabled (integer) - 1 If stealth mode is enabled else 0"
      },
      {
        "text": "version",
        "displayText": "version (text) - Application Layer Firewall version"
      }
    ]
  },
  "alf_exceptions": {
    "text": "alf_exceptions",
    "displayText": "alf_exceptions - OS X application layer firewall (ALF) service exceptions.",
    "columns": [
      {
        "text": "path",
        "displayText": "path (text) - Path to the executable that is excepted"
      },
      {
        "text": "state",
        "displayText": "state (integer) - Firewall exception state"
      }
    ]
  },
  "alf_explicit_auths": {
    "text": "alf_explicit_auths",
    "displayText": "alf_explicit_auths - ALF services explicitly allowed to perform networking.",
    "columns": [
      {
        "text": "process",
        "displayText": "process (text) - Process name explicitly allowed"
      }
    ]
  },
  "alf_services": {
    "text": "alf_services",
    "displayText": "alf_services - OS X application layer firewall (Firewall) services.",
    "columns": [
      {
        "text": "service",
        "displayText": "service (text) - Firewalled service name"
      },
      {
        "text": "process",
        "displayText": "process (text) - Process name"
      },
      {
        "text": "state",
        "displayText": "state (integer) - Firewall service state"
      }
    ]
  },
  "app_schemes": {
    "text": "app_schemes",
    "displayText": "app_schemes - OS X application schemes and handlers (e.g., http, file, mailto).",
    "columns": [
      {
        "text": "scheme",
        "displayText": "scheme (text) - Name of the scheme/protocol"
      },
      {
        "text": "handler",
        "displayText": "handler (text) - Application label for the handler"
      },
      {
        "text": "enabled",
        "displayText": "enabled (integer) - 1 if this handler is the OS default, else 0"
      },
      {
        "text": "external",
        "displayText": "external (integer) - 1 if this handler does NOT exist on OS X by default, else 0"
      },
      {
        "text": "protected",
        "displayText": "protected (integer) - 1 if this handler is protected (reserved) by OS X, else 0"
      }
    ]
  },
  "appcompat_shims": {
    "text": "appcompat_shims",
    "displayText": "appcompat_shims - Application Compatibility shims are a way to persist malware. This table presents the AppCompat Shim information from the registry in a nice format. See http://files.brucon.org/2015/Tomczak_and_Ballenthin_Shims_for_the_Win.pdf for more details.",
    "columns": [
      {
        "text": "executable",
        "displayText": "executable (text) - Name of the executable that is being shimmed. This is pulled from the registry."
      },
      {
        "text": "path",
        "displayText": "path (text) - This is the path to the SDB database."
      },
      {
        "text": "description",
        "displayText": "description (text) - Description of the SDB."
      },
      {
        "text": "install_time",
        "displayText": "install_time (integer) - Install time of the SDB"
      },
      {
        "text": "type",
        "displayText": "type (text) - Type of the SDB database."
      },
      {
        "text": "sdb_id",
        "displayText": "sdb_id (text) - Unique GUID of the SDB."
      }
    ]
  },
  "apps": {
    "text": "apps",
    "displayText": "apps - OS X applications installed in known search paths (e.g., /Applications).",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Name of the Name.app folder"
      },
      {
        "text": "path",
        "displayText": "path (text) - Absolute and full Name.app path"
      },
      {
        "text": "bundle_executable",
        "displayText": "bundle_executable (text) - Info properties CFBundleExecutable label"
      },
      {
        "text": "bundle_identifier",
        "displayText": "bundle_identifier (text) - Info properties CFBundleIdentifier label"
      },
      {
        "text": "bundle_name",
        "displayText": "bundle_name (text) - Info properties CFBundleName label"
      },
      {
        "text": "bundle_short_version",
        "displayText": "bundle_short_version (text) - Info properties CFBundleShortVersionString label"
      },
      {
        "text": "bundle_version",
        "displayText": "bundle_version (text) - Info properties CFBundleVersion label"
      },
      {
        "text": "bundle_package_type",
        "displayText": "bundle_package_type (text) - Info properties CFBundlePackageType label"
      },
      {
        "text": "environment",
        "displayText": "environment (text) - Application-set environment variables"
      },
      {
        "text": "element",
        "displayText": "element (text) - Does the app identify as a background agent"
      },
      {
        "text": "compiler",
        "displayText": "compiler (text) - Info properties DTCompiler label"
      },
      {
        "text": "development_region",
        "displayText": "development_region (text) - Info properties CFBundleDevelopmentRegion label"
      },
      {
        "text": "display_name",
        "displayText": "display_name (text) - Info properties CFBundleDisplayName label"
      },
      {
        "text": "info_string",
        "displayText": "info_string (text) - Info properties CFBundleGetInfoString label"
      },
      {
        "text": "minimum_system_version",
        "displayText": "minimum_system_version (text) - Minimum version of OS X required for the app to run"
      },
      {
        "text": "category",
        "displayText": "category (text) - The UTI that categorizes the app for the App Store"
      },
      {
        "text": "applescript_enabled",
        "displayText": "applescript_enabled (text) - Info properties NSAppleScriptEnabled label"
      },
      {
        "text": "copyright",
        "displayText": "copyright (text) - Info properties NSHumanReadableCopyright label"
      },
      {
        "text": "last_opened_time",
        "displayText": "last_opened_time (double) - The time that the app was last used"
      }
    ]
  },
  "apt_sources": {
    "text": "apt_sources",
    "displayText": "apt_sources - Current list of APT repositories or software channels.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Repository name"
      },
      {
        "text": "base_uri",
        "displayText": "base_uri (text) - Repository base URI"
      },
      {
        "text": "package_cache_file",
        "displayText": "package_cache_file (text) - Repository cache file"
      },
      {
        "text": "release",
        "displayText": "release (text) - Release name"
      },
      {
        "text": "component",
        "displayText": "component (text) - Repository component"
      },
      {
        "text": "version",
        "displayText": "version (text) - Repository source version"
      },
      {
        "text": "maintainer",
        "displayText": "maintainer (text) - Repository maintainer"
      },
      {
        "text": "site",
        "displayText": "site (text) - Repository site"
      }
    ]
  },
  "arp_cache": {
    "text": "arp_cache",
    "displayText": "arp_cache - Address resolution cache, both static and dynamic (from ARP, NDP).",
    "columns": [
      {
        "text": "address",
        "displayText": "address (text) - IPv4 address target"
      },
      {
        "text": "mac",
        "displayText": "mac (text) - MAC address of broadcasted address"
      },
      {
        "text": "interface",
        "displayText": "interface (text) - Interface of the network for the MAC"
      },
      {
        "text": "permanent",
        "displayText": "permanent (text) - 1 for true, 0 for false"
      }
    ]
  },
  "asl": {
    "text": "asl",
    "displayText": "asl - Queries the Apple System Log data structure for system events.",
    "columns": [
      {
        "text": "time",
        "displayText": "time (integer) - Unix timestamp.  Set automatically"
      },
      {
        "text": "time_nano_sec",
        "displayText": "time_nano_sec (integer) - Nanosecond time."
      },
      {
        "text": "host",
        "displayText": "host (text) - Sender's address (set by the server)."
      },
      {
        "text": "sender",
        "displayText": "sender (text) - Sender's identification string.  Default is process name."
      },
      {
        "text": "facility",
        "displayText": "facility (text) - Sender's facility.  Default is 'user'."
      },
      {
        "text": "pid",
        "displayText": "pid (integer) - Sending process ID encoded as a string.  Set automatically."
      },
      {
        "text": "gid",
        "displayText": "gid (bigint) - GID that sent the log message (set by the server)."
      },
      {
        "text": "uid",
        "displayText": "uid (bigint) - UID that sent the log message (set by the server)."
      },
      {
        "text": "level",
        "displayText": "level (integer) - Log level number.  See levels in asl.h."
      },
      {
        "text": "message",
        "displayText": "message (text) - Message text."
      },
      {
        "text": "ref_pid",
        "displayText": "ref_pid (integer) - Reference PID for messages proxied by launchd"
      },
      {
        "text": "ref_proc",
        "displayText": "ref_proc (text) - Reference process for messages proxied by launchd"
      },
      {
        "text": "extra",
        "displayText": "extra (text) - Extra columns, in JSON format. Queries against this column are performed entirely in SQLite, so do not benefit from efficient querying via asl.h."
      }
    ]
  },
  "augeas": {
    "text": "augeas",
    "displayText": "augeas - Configuration files parsed by augeas.",
    "columns": [
      {
        "text": "node",
        "displayText": "node (text) - The node path of the configuration item"
      },
      {
        "text": "value",
        "displayText": "value (text) - The value of the configuration item"
      },
      {
        "text": "label",
        "displayText": "label (text) - The label of the configuration item"
      },
      {
        "text": "path",
        "displayText": "path (text) - The path to the configuration file"
      }
    ]
  },
  "authenticode": {
    "text": "authenticode",
    "displayText": "authenticode - File (executable, bundle, installer, disk) code signing status.",
    "columns": [
      {
        "text": "path",
        "displayText": "path (text) - Must provide a path or directory"
      },
      {
        "text": "original_program_name",
        "displayText": "original_program_name (text) - The original program name that the publisher has signed"
      },
      {
        "text": "serial_number",
        "displayText": "serial_number (text) - The certificate serial number"
      },
      {
        "text": "issuer_name",
        "displayText": "issuer_name (text) - The certificate issuer name"
      },
      {
        "text": "subject_name",
        "displayText": "subject_name (text) - The certificate subject name"
      },
      {
        "text": "result",
        "displayText": "result (text) - The signature check result"
      }
    ]
  },
  "authorization_mechanisms": {
    "text": "authorization_mechanisms",
    "displayText": "authorization_mechanisms - OS X Authorization mechanisms database.",
    "columns": [
      {
        "text": "label",
        "displayText": "label (text) - Label of the authorization right"
      },
      {
        "text": "plugin",
        "displayText": "plugin (text) - Authorization plugin name"
      },
      {
        "text": "mechanism",
        "displayText": "mechanism (text) - Name of the mechanism that will be called"
      },
      {
        "text": "privileged",
        "displayText": "privileged (text) - If privileged it will run as root, else as an anonymous user"
      },
      {
        "text": "entry",
        "displayText": "entry (text) - The whole string entry"
      }
    ]
  },
  "authorizations": {
    "text": "authorizations",
    "displayText": "authorizations - OS X Authorization rights database.",
    "columns": [
      {
        "text": "label",
        "displayText": "label (text) - Item name, usually in reverse domain format"
      },
      {
        "text": "modified",
        "displayText": "modified (text) - Label top-level key"
      },
      {
        "text": "allow_root",
        "displayText": "allow_root (text) - Label top-level key"
      },
      {
        "text": "timeout",
        "displayText": "timeout (text) - Label top-level key"
      },
      {
        "text": "version",
        "displayText": "version (text) - Label top-level key"
      },
      {
        "text": "tries",
        "displayText": "tries (text) - Label top-level key"
      },
      {
        "text": "authenticate_user",
        "displayText": "authenticate_user (text) - Label top-level key"
      },
      {
        "text": "shared",
        "displayText": "shared (text) - Label top-level key"
      },
      {
        "text": "comment",
        "displayText": "comment (text) - Label top-level key"
      },
      {
        "text": "created",
        "displayText": "created (text) - Label top-level key"
      },
      {
        "text": "class",
        "displayText": "class (text) - Label top-level key"
      },
      {
        "text": "session_owner",
        "displayText": "session_owner (text) - Label top-level key"
      }
    ]
  },
  "authorized_keys": {
    "text": "authorized_keys",
    "displayText": "authorized_keys - A line-delimited authorized_keys table.",
    "columns": [
      {
        "text": "uid",
        "displayText": "uid (bigint) - The local owner of authorized_keys file"
      },
      {
        "text": "algorithm",
        "displayText": "algorithm (text) - algorithim of key"
      },
      {
        "text": "key",
        "displayText": "key (text) - parsed authorized keys line"
      },
      {
        "text": "key_file",
        "displayText": "key_file (text) - Path to the authorized_keys file"
      }
    ]
  },
  "autoexec": {
    "text": "autoexec",
    "displayText": "autoexec - Aggregate of executables that will automatically execute on the target machine. This is an amalgamation of other tables like services, scheduled tasks, startup_items and more.",
    "columns": [
      {
        "text": "path",
        "displayText": "path (text) - Path to the executable"
      },
      {
        "text": "name",
        "displayText": "name (text) - Name of the program"
      },
      {
        "text": "source",
        "displayText": "source (text) - Source table of the autoexec item"
      }
    ]
  },
  "block_devices": {
    "text": "block_devices",
    "displayText": "block_devices - Block (buffered access) device file nodes: disks, ramdisks, and DMG containers.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Block device name"
      },
      {
        "text": "parent",
        "displayText": "parent (text) - Block device parent name"
      },
      {
        "text": "vendor",
        "displayText": "vendor (text) - Block device vendor string"
      },
      {
        "text": "model",
        "displayText": "model (text) - Block device model string identifier"
      },
      {
        "text": "size",
        "displayText": "size (bigint) - Block device size in blocks"
      },
      {
        "text": "block_size",
        "displayText": "block_size (integer) - Block size in bytes"
      },
      {
        "text": "uuid",
        "displayText": "uuid (text) - Block device Universally Unique Identifier"
      },
      {
        "text": "type",
        "displayText": "type (text) - Block device type string"
      },
      {
        "text": "label",
        "displayText": "label (text) - Block device label string"
      }
    ]
  },
  "browser_plugins": {
    "text": "browser_plugins",
    "displayText": "browser_plugins - All C/NPAPI browser plugin details for all users.",
    "columns": [
      {
        "text": "uid",
        "displayText": "uid (bigint) - The local user that owns the plugin"
      },
      {
        "text": "name",
        "displayText": "name (text) - Plugin display name"
      },
      {
        "text": "identifier",
        "displayText": "identifier (text) - Plugin identifier"
      },
      {
        "text": "version",
        "displayText": "version (text) - Plugin short version"
      },
      {
        "text": "sdk",
        "displayText": "sdk (text) - Build SDK used to compile plugin"
      },
      {
        "text": "description",
        "displayText": "description (text) - Plugin description text"
      },
      {
        "text": "development_region",
        "displayText": "development_region (text) - Plugin language-localization"
      },
      {
        "text": "native",
        "displayText": "native (integer) - Plugin requires native execution"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path to plugin bundle"
      },
      {
        "text": "disabled",
        "displayText": "disabled (integer) - Is the plugin disabled. 1 = Disabled"
      }
    ]
  },
  "carbon_black_info": {
    "text": "carbon_black_info",
    "displayText": "carbon_black_info - Returns info about a Carbon Black sensor install.",
    "columns": [
      {
        "text": "sensor_id",
        "displayText": "sensor_id (integer) - Sensor ID of the Carbon Black sensor"
      },
      {
        "text": "config_name",
        "displayText": "config_name (text) - Sensor group"
      },
      {
        "text": "collect_store_files",
        "displayText": "collect_store_files (integer) - If the sensor is configured to send back binaries to the Carbon Black server"
      },
      {
        "text": "collect_module_loads",
        "displayText": "collect_module_loads (integer) - If the sensor is configured to capture module loads"
      },
      {
        "text": "collect_module_info",
        "displayText": "collect_module_info (integer) - If the sensor is configured to collect metadata of binaries"
      },
      {
        "text": "collect_file_mods",
        "displayText": "collect_file_mods (integer) - If the sensor is configured to collect file modification events"
      },
      {
        "text": "collect_reg_mods",
        "displayText": "collect_reg_mods (integer) - If the sensor is configured to collect registry modification events"
      },
      {
        "text": "collect_net_conns",
        "displayText": "collect_net_conns (integer) - If the sensor is configured to collect network connections"
      },
      {
        "text": "collect_processes",
        "displayText": "collect_processes (integer) - If the sensor is configured to process events"
      },
      {
        "text": "collect_cross_processes",
        "displayText": "collect_cross_processes (integer) - If the sensor is configured to cross process events"
      },
      {
        "text": "collect_emet_events",
        "displayText": "collect_emet_events (integer) - If the sensor is configured to EMET events"
      },
      {
        "text": "collect_data_file_writes",
        "displayText": "collect_data_file_writes (integer) - If the sensor is configured to collect non binary file writes"
      },
      {
        "text": "collect_process_user_context",
        "displayText": "collect_process_user_context (integer) - If the sensor is configured to collect the user running a process"
      },
      {
        "text": "collect_sensor_operations",
        "displayText": "collect_sensor_operations (integer) - Unknown"
      },
      {
        "text": "log_file_disk_quota_mb",
        "displayText": "log_file_disk_quota_mb (integer) - Event file disk quota in MB"
      },
      {
        "text": "log_file_disk_quota_percentage",
        "displayText": "log_file_disk_quota_percentage (integer) - Event file disk quota in a percentage"
      },
      {
        "text": "protection_disabled",
        "displayText": "protection_disabled (integer) - If the sensor is configured to report tamper events"
      },
      {
        "text": "sensor_ip_addr",
        "displayText": "sensor_ip_addr (text) - IP address of the sensor"
      },
      {
        "text": "sensor_backend_server",
        "displayText": "sensor_backend_server (text) - Carbon Black server"
      },
      {
        "text": "event_queue",
        "displayText": "event_queue (integer) - Size in bytes of Carbon Black event files on disk"
      },
      {
        "text": "binary_queue",
        "displayText": "binary_queue (integer) - Size in bytes of binaries waiting to be sent to Carbon Black server"
      }
    ]
  },
  "carves": {
    "text": "carves",
    "displayText": "carves - Forensic Carves.",
    "columns": [
      {
        "text": "time",
        "displayText": "time (bigint) - Time at which the carve was kicked off"
      },
      {
        "text": "sha256",
        "displayText": "sha256 (text) - A SHA256 sum of the carved archive"
      },
      {
        "text": "size",
        "displayText": "size (integer) - Size of the carved archive"
      },
      {
        "text": "path",
        "displayText": "path (text) - The path of the requested carve"
      },
      {
        "text": "status",
        "displayText": "status (text) - Status of the carve, can be STARTING, PENDING, SUCCESS, or FAILED"
      },
      {
        "text": "carve_guid",
        "displayText": "carve_guid (text) - Identifying value of the carve session"
      },
      {
        "text": "carve",
        "displayText": "carve (integer) - Set this value to '1' to start a file carve"
      }
    ]
  },
  "certificates": {
    "text": "certificates",
    "displayText": "certificates - Certificate Authorities installed in Keychains/ca-bundles.",
    "columns": [
      {
        "text": "common_name",
        "displayText": "common_name (text) - Certificate CommonName"
      },
      {
        "text": "subject",
        "displayText": "subject (text) - Certificate distinguished name"
      },
      {
        "text": "issuer",
        "displayText": "issuer (text) - Certificate issuer distinguished name"
      },
      {
        "text": "ca",
        "displayText": "ca (integer) - 1 if CA: true (certificate is an authority) else 0"
      },
      {
        "text": "self_signed",
        "displayText": "self_signed (integer) - 1 if self-signed, else 0"
      },
      {
        "text": "not_valid_before",
        "displayText": "not_valid_before (text) - Lower bound of valid date"
      },
      {
        "text": "not_valid_after",
        "displayText": "not_valid_after (text) - Certificate expiration data"
      },
      {
        "text": "signing_algorithm",
        "displayText": "signing_algorithm (text) - Signing algorithm used"
      },
      {
        "text": "key_algorithm",
        "displayText": "key_algorithm (text) - Key algorithm used"
      },
      {
        "text": "key_strength",
        "displayText": "key_strength (text) - Key size used for RSA/DSA, or curve name"
      },
      {
        "text": "key_usage",
        "displayText": "key_usage (text) - Certificate key usage and extended key usage"
      },
      {
        "text": "subject_key_id",
        "displayText": "subject_key_id (text) - SKID an optionally included SHA1"
      },
      {
        "text": "authority_key_id",
        "displayText": "authority_key_id (text) - AKID an optionally included SHA1"
      },
      {
        "text": "sha1",
        "displayText": "sha1 (text) - SHA1 hash of the raw certificate contents"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path to Keychain or PEM bundle"
      }
    ]
  },
  "chocolatey_packages": {
    "text": "chocolatey_packages",
    "displayText": "chocolatey_packages - Chocolatey packages installed in a system.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Package display name"
      },
      {
        "text": "version",
        "displayText": "version (text) - Package-supplied version"
      },
      {
        "text": "summary",
        "displayText": "summary (text) - Package-supplied summary"
      },
      {
        "text": "author",
        "displayText": "author (text) - Optional package author"
      },
      {
        "text": "license",
        "displayText": "license (text) - License under which package is launched"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path at which this package resides"
      }
    ]
  },
  "chrome_extensions": {
    "text": "chrome_extensions",
    "displayText": "chrome_extensions - Chrome browser extensions.",
    "columns": [
      {
        "text": "uid",
        "displayText": "uid (bigint) - The local user that owns the extension"
      },
      {
        "text": "name",
        "displayText": "name (text) - Extension display name"
      },
      {
        "text": "identifier",
        "displayText": "identifier (text) - Extension identifier"
      },
      {
        "text": "version",
        "displayText": "version (text) - Extension-supplied version"
      },
      {
        "text": "description",
        "displayText": "description (text) - Extension-optional description"
      },
      {
        "text": "locale",
        "displayText": "locale (text) - Default locale supported by extension"
      },
      {
        "text": "update_url",
        "displayText": "update_url (text) - Extension-supplied update URI"
      },
      {
        "text": "author",
        "displayText": "author (text) - Optional extension author"
      },
      {
        "text": "persistent",
        "displayText": "persistent (integer) - 1 If extension is persistent across all tabs else 0"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path to extension folder"
      }
    ]
  },
  "cpu_time": {
    "text": "cpu_time",
    "displayText": "cpu_time - Displays information from /proc/stat file about the time the cpu cores spent in different parts of the system.",
    "columns": [
      {
        "text": "core",
        "displayText": "core (integer) - Name of the cpu (core)"
      },
      {
        "text": "user",
        "displayText": "user (bigint) - Time spent in user mode"
      },
      {
        "text": "nice",
        "displayText": "nice (bigint) - Time spent in user mode with low priority (nice)"
      },
      {
        "text": "system",
        "displayText": "system (bigint) - Time spent in system mode"
      },
      {
        "text": "idle",
        "displayText": "idle (bigint) - Time spent in the idle task"
      },
      {
        "text": "iowait",
        "displayText": "iowait (bigint) - Time spent waiting for I/O to complete"
      },
      {
        "text": "irq",
        "displayText": "irq (bigint) - Time spent servicing interrupts"
      },
      {
        "text": "softirq",
        "displayText": "softirq (bigint) - Time spent servicing softirqs"
      },
      {
        "text": "steal",
        "displayText": "steal (bigint) - Time spent in other operating systems when running in a virtualized environment"
      },
      {
        "text": "guest",
        "displayText": "guest (bigint) - Time spent running a virtual CPU for a guest OS under the control of the Linux kernel"
      },
      {
        "text": "guest_nice",
        "displayText": "guest_nice (bigint) - Time spent running a niced guest "
      }
    ]
  },
  "cpuid": {
    "text": "cpuid",
    "displayText": "cpuid - Useful CPU features from the cpuid ASM call.",
    "columns": [
      {
        "text": "feature",
        "displayText": "feature (text) - Present feature flags"
      },
      {
        "text": "value",
        "displayText": "value (text) - Bit value or string"
      },
      {
        "text": "output_register",
        "displayText": "output_register (text) - Register used to for feature value"
      },
      {
        "text": "output_bit",
        "displayText": "output_bit (integer) - Bit in register value for feature value"
      },
      {
        "text": "input_eax",
        "displayText": "input_eax (text) - Value of EAX used"
      }
    ]
  },
  "crashes": {
    "text": "crashes",
    "displayText": "crashes - Application, System, and Mobile App crash logs.",
    "columns": [
      {
        "text": "type",
        "displayText": "type (text) - Type of crash log"
      },
      {
        "text": "pid",
        "displayText": "pid (bigint) - Process (or thread) ID of the crashed process"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path to the crashed process"
      },
      {
        "text": "crash_path",
        "displayText": "crash_path (text) - Location of log file"
      },
      {
        "text": "identifier",
        "displayText": "identifier (text) - Identifier of the crashed process"
      },
      {
        "text": "version",
        "displayText": "version (text) - Version info of the crashed process"
      },
      {
        "text": "parent",
        "displayText": "parent (bigint) - Parent PID of the crashed process"
      },
      {
        "text": "responsible",
        "displayText": "responsible (text) - Process responsible for the crashed process"
      },
      {
        "text": "uid",
        "displayText": "uid (integer) - User ID of the crashed process"
      },
      {
        "text": "datetime",
        "displayText": "datetime (text) - Date/Time at which the crash occurred"
      },
      {
        "text": "crashed_thread",
        "displayText": "crashed_thread (bigint) - Thread ID which crashed"
      },
      {
        "text": "stack_trace",
        "displayText": "stack_trace (text) - Most recent frame from the stack trace"
      },
      {
        "text": "exception_type",
        "displayText": "exception_type (text) - Exception type of the crash"
      },
      {
        "text": "exception_codes",
        "displayText": "exception_codes (text) - Exception codes from the crash"
      },
      {
        "text": "exception_notes",
        "displayText": "exception_notes (text) - Exception notes from the crash"
      },
      {
        "text": "registers",
        "displayText": "registers (text) - The value of the system registers"
      }
    ]
  },
  "crontab": {
    "text": "crontab",
    "displayText": "crontab - Line parsed values from system and user cron/tab.",
    "columns": [
      {
        "text": "event",
        "displayText": "event (text) - The job @event name (rare)"
      },
      {
        "text": "minute",
        "displayText": "minute (text) - The exact minute for the job"
      },
      {
        "text": "hour",
        "displayText": "hour (text) - The hour of the day for the job"
      },
      {
        "text": "day_of_month",
        "displayText": "day_of_month (text) - The day of the month for the job"
      },
      {
        "text": "month",
        "displayText": "month (text) - The month of the year for the job"
      },
      {
        "text": "day_of_week",
        "displayText": "day_of_week (text) - The day of the week for the job"
      },
      {
        "text": "command",
        "displayText": "command (text) - Raw command string"
      },
      {
        "text": "path",
        "displayText": "path (text) - File parsed"
      }
    ]
  },
  "curl": {
    "text": "curl",
    "displayText": "curl - Perform an http request and return stats about it.",
    "columns": [
      {
        "text": "url",
        "displayText": "url (text) - The url for the request"
      },
      {
        "text": "method",
        "displayText": "method (text) - The HTTP method for the request"
      },
      {
        "text": "user_agent",
        "displayText": "user_agent (text) - The user-agent string to use for the request"
      },
      {
        "text": "response_code",
        "displayText": "response_code (integer) - The HTTP status code for the response"
      },
      {
        "text": "round_trip_time",
        "displayText": "round_trip_time (bigint) - Time taken to complete the request"
      },
      {
        "text": "bytes",
        "displayText": "bytes (bigint) - Number of bytes in the response"
      },
      {
        "text": "result",
        "displayText": "result (text) - The HTTP response body"
      }
    ]
  },
  "curl_certificate": {
    "text": "curl_certificate",
    "displayText": "curl_certificate - Inspect TLS certificates by connecting to input hostnames.",
    "columns": [
      {
        "text": "hostname",
        "displayText": "hostname (text) - Hostname (domain[:port]) to CURL"
      },
      {
        "text": "common_name",
        "displayText": "common_name (text) - Common name of company issued to"
      },
      {
        "text": "organization",
        "displayText": "organization (text) - Organization issued to"
      },
      {
        "text": "organization_unit",
        "displayText": "organization_unit (text) - Organization unit issued to"
      },
      {
        "text": "serial_number",
        "displayText": "serial_number (text) - Certificate serial number"
      },
      {
        "text": "issuer_common_name",
        "displayText": "issuer_common_name (text) - Issuer common name"
      },
      {
        "text": "issuer_organization",
        "displayText": "issuer_organization (text) - Issuer organization"
      },
      {
        "text": "issuer_organization_unit",
        "displayText": "issuer_organization_unit (text) - Issuer organization unit"
      },
      {
        "text": "valid_from",
        "displayText": "valid_from (text) - Period of validity start date"
      },
      {
        "text": "valid_to",
        "displayText": "valid_to (text) - Period of validity end date"
      },
      {
        "text": "sha256_fingerprint",
        "displayText": "sha256_fingerprint (text) - SHA-256 fingerprint"
      },
      {
        "text": "sha1_fingerprint",
        "displayText": "sha1_fingerprint (text) - SHA1 fingerprint"
      }
    ]
  },
  "deb_packages": {
    "text": "deb_packages",
    "displayText": "deb_packages - The installed DEB package database.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Package name"
      },
      {
        "text": "version",
        "displayText": "version (text) - Package version"
      },
      {
        "text": "source",
        "displayText": "source (text) - Package source"
      },
      {
        "text": "size",
        "displayText": "size (bigint) - Package size in bytes"
      },
      {
        "text": "arch",
        "displayText": "arch (text) - Package architecture"
      },
      {
        "text": "revision",
        "displayText": "revision (text) - Package revision"
      }
    ]
  },
  "device_file": {
    "text": "device_file",
    "displayText": "device_file - Similar to the file table, but use TSK and allow block address access.",
    "columns": [
      {
        "text": "device",
        "displayText": "device (text) - Absolute file path to device node"
      },
      {
        "text": "partition",
        "displayText": "partition (text) - A partition number"
      },
      {
        "text": "path",
        "displayText": "path (text) - A logical path within the device node"
      },
      {
        "text": "filename",
        "displayText": "filename (text) - Name portion of file path"
      },
      {
        "text": "inode",
        "displayText": "inode (bigint) - Filesystem inode number"
      },
      {
        "text": "uid",
        "displayText": "uid (bigint) - Owning user ID"
      },
      {
        "text": "gid",
        "displayText": "gid (bigint) - Owning group ID"
      },
      {
        "text": "mode",
        "displayText": "mode (text) - Permission bits"
      },
      {
        "text": "size",
        "displayText": "size (bigint) - Size of file in bytes"
      },
      {
        "text": "block_size",
        "displayText": "block_size (integer) - Block size of filesystem"
      },
      {
        "text": "atime",
        "displayText": "atime (bigint) - Last access time"
      },
      {
        "text": "mtime",
        "displayText": "mtime (bigint) - Last modification time"
      },
      {
        "text": "ctime",
        "displayText": "ctime (bigint) - Creation time"
      },
      {
        "text": "hard_links",
        "displayText": "hard_links (integer) - Number of hard links"
      },
      {
        "text": "type",
        "displayText": "type (text) - File status"
      }
    ]
  },
  "device_firmware": {
    "text": "device_firmware",
    "displayText": "device_firmware - A best-effort list of discovered firmware versions.",
    "columns": [
      {
        "text": "type",
        "displayText": "type (text) - Type of device"
      },
      {
        "text": "device",
        "displayText": "device (text) - The device name"
      },
      {
        "text": "version",
        "displayText": "version (text) - Firmware version"
      }
    ]
  },
  "device_hash": {
    "text": "device_hash",
    "displayText": "device_hash - Similar to the hash table, but use TSK and allow block address access.",
    "columns": [
      {
        "text": "device",
        "displayText": "device (text) - Absolute file path to device node"
      },
      {
        "text": "partition",
        "displayText": "partition (text) - A partition number"
      },
      {
        "text": "inode",
        "displayText": "inode (bigint) - Filesystem inode number"
      },
      {
        "text": "md5",
        "displayText": "md5 (text) - MD5 hash of provided inode data"
      },
      {
        "text": "sha1",
        "displayText": "sha1 (text) - SHA1 hash of provided inode data"
      },
      {
        "text": "sha256",
        "displayText": "sha256 (text) - SHA256 hash of provided inode data"
      }
    ]
  },
  "device_partitions": {
    "text": "device_partitions",
    "displayText": "device_partitions - Use TSK to enumerate details about partitions on a disk device.",
    "columns": [
      {
        "text": "device",
        "displayText": "device (text) - Absolute file path to device node"
      },
      {
        "text": "partition",
        "displayText": "partition (integer) - A partition number or description"
      },
      {
        "text": "label",
        "displayText": "label (text) - "
      },
      {
        "text": "type",
        "displayText": "type (text) - "
      },
      {
        "text": "offset",
        "displayText": "offset (bigint) - "
      },
      {
        "text": "blocks_size",
        "displayText": "blocks_size (bigint) - Byte size of each block"
      },
      {
        "text": "blocks",
        "displayText": "blocks (bigint) - Number of blocks"
      },
      {
        "text": "inodes",
        "displayText": "inodes (bigint) - Number of meta nodes"
      },
      {
        "text": "flags",
        "displayText": "flags (integer) - "
      }
    ]
  },
  "disk_encryption": {
    "text": "disk_encryption",
    "displayText": "disk_encryption - Disk encryption status and information.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Disk name"
      },
      {
        "text": "uuid",
        "displayText": "uuid (text) - Disk Universally Unique Identifier"
      },
      {
        "text": "encrypted",
        "displayText": "encrypted (integer) - 1 If encrypted: true (disk is encrypted), else 0"
      },
      {
        "text": "type",
        "displayText": "type (text) - Description of cipher type and mode if available"
      },
      {
        "text": "uid",
        "displayText": "uid (text) - Currently authenticated user if available (Apple)"
      },
      {
        "text": "user_uuid",
        "displayText": "user_uuid (text) - UUID of authenticated user if available (Apple)"
      }
    ]
  },
  "disk_events": {
    "text": "disk_events",
    "displayText": "disk_events - Track DMG disk image events (appearance/disappearance) when opened.",
    "columns": [
      {
        "text": "action",
        "displayText": "action (text) - Appear or disappear"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path of the DMG file accessed"
      },
      {
        "text": "name",
        "displayText": "name (text) - Disk event name"
      },
      {
        "text": "device",
        "displayText": "device (text) - Disk event BSD name"
      },
      {
        "text": "uuid",
        "displayText": "uuid (text) - UUID of the volume inside DMG if available"
      },
      {
        "text": "size",
        "displayText": "size (bigint) - Size of partition in bytes"
      },
      {
        "text": "ejectable",
        "displayText": "ejectable (integer) - 1 if ejectable, 0 if not"
      },
      {
        "text": "mountable",
        "displayText": "mountable (integer) - 1 if mountable, 0 if not"
      },
      {
        "text": "writable",
        "displayText": "writable (integer) - 1 if writable, 0 if not"
      },
      {
        "text": "content",
        "displayText": "content (text) - Disk event content"
      },
      {
        "text": "media_name",
        "displayText": "media_name (text) - Disk event media name string"
      },
      {
        "text": "vendor",
        "displayText": "vendor (text) - Disk event vendor string"
      },
      {
        "text": "filesystem",
        "displayText": "filesystem (text) - Filesystem if available"
      },
      {
        "text": "checksum",
        "displayText": "checksum (text) - UDIF Master checksum if available (CRC32)"
      },
      {
        "text": "time",
        "displayText": "time (bigint) - Time of appearance/disappearance in UNIX time"
      },
      {
        "text": "eid",
        "displayText": "eid (text) - Event ID"
      }
    ]
  },
  "dns_resolvers": {
    "text": "dns_resolvers",
    "displayText": "dns_resolvers - Resolvers used by this host.",
    "columns": [
      {
        "text": "id",
        "displayText": "id (integer) - Address type index or order"
      },
      {
        "text": "type",
        "displayText": "type (text) - Address type: sortlist, nameserver, search"
      },
      {
        "text": "address",
        "displayText": "address (text) - Resolver IP/IPv6 address"
      },
      {
        "text": "netmask",
        "displayText": "netmask (text) - Address (sortlist) netmask length"
      },
      {
        "text": "options",
        "displayText": "options (bigint) - Resolver options"
      }
    ]
  },
  "docker_container_labels": {
    "text": "docker_container_labels",
    "displayText": "docker_container_labels - Docker container labels.",
    "columns": [
      {
        "text": "id",
        "displayText": "id (text) - Container ID"
      },
      {
        "text": "key",
        "displayText": "key (text) - Label key"
      },
      {
        "text": "value",
        "displayText": "value (text) - Optional label value"
      }
    ]
  },
  "docker_container_mounts": {
    "text": "docker_container_mounts",
    "displayText": "docker_container_mounts - Docker container mounts.",
    "columns": [
      {
        "text": "id",
        "displayText": "id (text) - Container ID"
      },
      {
        "text": "type",
        "displayText": "type (text) - Type of mount (bind, volume)"
      },
      {
        "text": "name",
        "displayText": "name (text) - Optional mount name"
      },
      {
        "text": "source",
        "displayText": "source (text) - Source path on host"
      },
      {
        "text": "destination",
        "displayText": "destination (text) - Destination path inside container"
      },
      {
        "text": "driver",
        "displayText": "driver (text) - Driver providing the mount"
      },
      {
        "text": "mode",
        "displayText": "mode (text) - Mount options (rw, ro)"
      },
      {
        "text": "rw",
        "displayText": "rw (integer) - 1 if read/write. 0 otherwise"
      },
      {
        "text": "propagation",
        "displayText": "propagation (text) - Mount propagation"
      }
    ]
  },
  "docker_container_networks": {
    "text": "docker_container_networks",
    "displayText": "docker_container_networks - Docker container networks.",
    "columns": [
      {
        "text": "id",
        "displayText": "id (text) - Container ID"
      },
      {
        "text": "name",
        "displayText": "name (text) - Network name"
      },
      {
        "text": "network_id",
        "displayText": "network_id (text) - Network ID"
      },
      {
        "text": "endpoint_id",
        "displayText": "endpoint_id (text) - Endpoint ID"
      },
      {
        "text": "gateway",
        "displayText": "gateway (text) - Gateway"
      },
      {
        "text": "ip_address",
        "displayText": "ip_address (text) - IP address"
      },
      {
        "text": "ip_prefix_len",
        "displayText": "ip_prefix_len (integer) - IP subnet prefix length"
      },
      {
        "text": "ipv6_gateway",
        "displayText": "ipv6_gateway (text) - IPv6 gateway"
      },
      {
        "text": "ipv6_address",
        "displayText": "ipv6_address (text) - IPv6 address"
      },
      {
        "text": "ipv6_prefix_len",
        "displayText": "ipv6_prefix_len (integer) - IPv6 subnet prefix length"
      },
      {
        "text": "mac_address",
        "displayText": "mac_address (text) - MAC address"
      }
    ]
  },
  "docker_container_ports": {
    "text": "docker_container_ports",
    "displayText": "docker_container_ports - Docker container ports.",
    "columns": [
      {
        "text": "id",
        "displayText": "id (text) - Container ID"
      },
      {
        "text": "type",
        "displayText": "type (text) - Protocol (tcp, udp)"
      },
      {
        "text": "port",
        "displayText": "port (integer) - Port inside the container"
      },
      {
        "text": "host_ip",
        "displayText": "host_ip (text) - Host IP address on which public port is listening"
      },
      {
        "text": "host_port",
        "displayText": "host_port (integer) - Host port"
      }
    ]
  },
  "docker_container_processes": {
    "text": "docker_container_processes",
    "displayText": "docker_container_processes - Docker container processes.",
    "columns": [
      {
        "text": "id",
        "displayText": "id (text) - Container ID"
      },
      {
        "text": "pid",
        "displayText": "pid (bigint) - Process ID"
      },
      {
        "text": "name",
        "displayText": "name (text) - The process path or shorthand argv[0]"
      },
      {
        "text": "cmdline",
        "displayText": "cmdline (text) - Complete argv"
      },
      {
        "text": "state",
        "displayText": "state (text) - Process state"
      },
      {
        "text": "uid",
        "displayText": "uid (bigint) - User ID"
      },
      {
        "text": "gid",
        "displayText": "gid (bigint) - Group ID"
      },
      {
        "text": "euid",
        "displayText": "euid (bigint) - Effective user ID"
      },
      {
        "text": "egid",
        "displayText": "egid (bigint) - Effective group ID"
      },
      {
        "text": "suid",
        "displayText": "suid (bigint) - Saved user ID"
      },
      {
        "text": "sgid",
        "displayText": "sgid (bigint) - Saved group ID"
      },
      {
        "text": "wired_size",
        "displayText": "wired_size (bigint) - Bytes of unpagable memory used by process"
      },
      {
        "text": "resident_size",
        "displayText": "resident_size (bigint) - Bytes of private memory used by process"
      },
      {
        "text": "total_size",
        "displayText": "total_size (bigint) - Total virtual memory size"
      },
      {
        "text": "start_time",
        "displayText": "start_time (bigint) - Process start in seconds since boot (non-sleeping)"
      },
      {
        "text": "parent",
        "displayText": "parent (bigint) - Process parent's PID"
      },
      {
        "text": "pgroup",
        "displayText": "pgroup (bigint) - Process group"
      },
      {
        "text": "threads",
        "displayText": "threads (integer) - Number of threads used by process"
      },
      {
        "text": "nice",
        "displayText": "nice (integer) - Process nice level (-20 to 20, default 0)"
      },
      {
        "text": "user",
        "displayText": "user (text) - User name"
      },
      {
        "text": "time",
        "displayText": "time (text) - Cumulative CPU time. [DD-]HH:MM:SS format"
      },
      {
        "text": "cpu",
        "displayText": "cpu (double) - CPU utilization as percentage"
      },
      {
        "text": "mem",
        "displayText": "mem (double) - Memory utilization as percentage"
      }
    ]
  },
  "docker_container_stats": {
    "text": "docker_container_stats",
    "displayText": "docker_container_stats - Docker container statistics. Queries on this table take at least one second.",
    "columns": [
      {
        "text": "id",
        "displayText": "id (text) - Container ID"
      },
      {
        "text": "name",
        "displayText": "name (text) - Container name"
      },
      {
        "text": "pids",
        "displayText": "pids (integer) - Number of processes"
      },
      {
        "text": "read",
        "displayText": "read (bigint) - UNIX time when stats were read"
      },
      {
        "text": "preread",
        "displayText": "preread (bigint) - UNIX time when stats were last read"
      },
      {
        "text": "interval",
        "displayText": "interval (bigint) - Difference between read and preread in nano-seconds"
      },
      {
        "text": "disk_read",
        "displayText": "disk_read (bigint) - Total disk read bytes"
      },
      {
        "text": "disk_write",
        "displayText": "disk_write (bigint) - Total disk write bytes"
      },
      {
        "text": "num_procs",
        "displayText": "num_procs (integer) - Number of processors"
      },
      {
        "text": "cpu_total_usage",
        "displayText": "cpu_total_usage (bigint) - Total CPU usage"
      },
      {
        "text": "cpu_kernelmode_usage",
        "displayText": "cpu_kernelmode_usage (bigint) - CPU kernel mode usage"
      },
      {
        "text": "cpu_usermode_usage",
        "displayText": "cpu_usermode_usage (bigint) - CPU user mode usage"
      },
      {
        "text": "system_cpu_usage",
        "displayText": "system_cpu_usage (bigint) - CPU system usage"
      },
      {
        "text": "online_cpus",
        "displayText": "online_cpus (integer) - Online CPUs"
      },
      {
        "text": "pre_cpu_total_usage",
        "displayText": "pre_cpu_total_usage (bigint) - Last read total CPU usage"
      },
      {
        "text": "pre_cpu_kernelmode_usage",
        "displayText": "pre_cpu_kernelmode_usage (bigint) - Last read CPU kernel mode usage"
      },
      {
        "text": "pre_cpu_usermode_usage",
        "displayText": "pre_cpu_usermode_usage (bigint) - Last read CPU user mode usage"
      },
      {
        "text": "pre_system_cpu_usage",
        "displayText": "pre_system_cpu_usage (bigint) - Last read CPU system usage"
      },
      {
        "text": "pre_online_cpus",
        "displayText": "pre_online_cpus (integer) - Last read online CPUs"
      },
      {
        "text": "memory_usage",
        "displayText": "memory_usage (bigint) - Memory usage"
      },
      {
        "text": "memory_max_usage",
        "displayText": "memory_max_usage (bigint) - Memory maximum usage"
      },
      {
        "text": "memory_limit",
        "displayText": "memory_limit (bigint) - Memory limit"
      },
      {
        "text": "network_rx_bytes",
        "displayText": "network_rx_bytes (bigint) - Total network bytes read"
      },
      {
        "text": "network_tx_bytes",
        "displayText": "network_tx_bytes (bigint) - Total network bytes transmitted"
      }
    ]
  },
  "docker_containers": {
    "text": "docker_containers",
    "displayText": "docker_containers - Docker containers information.",
    "columns": [
      {
        "text": "id",
        "displayText": "id (text) - Container ID"
      },
      {
        "text": "name",
        "displayText": "name (text) - Container name"
      },
      {
        "text": "image",
        "displayText": "image (text) - Docker image (name) used to launch this container"
      },
      {
        "text": "image_id",
        "displayText": "image_id (text) - Docker image ID"
      },
      {
        "text": "command",
        "displayText": "command (text) - Command with arguments"
      },
      {
        "text": "created",
        "displayText": "created (bigint) - Time of creation as UNIX time"
      },
      {
        "text": "state",
        "displayText": "state (text) - Container state (created, restarting, running, removing, paused, exited, dead)"
      },
      {
        "text": "status",
        "displayText": "status (text) - Container status information"
      }
    ]
  },
  "docker_image_labels": {
    "text": "docker_image_labels",
    "displayText": "docker_image_labels - Docker image labels.",
    "columns": [
      {
        "text": "id",
        "displayText": "id (text) - Image ID"
      },
      {
        "text": "key",
        "displayText": "key (text) - Label key"
      },
      {
        "text": "value",
        "displayText": "value (text) - Optional label value"
      }
    ]
  },
  "docker_images": {
    "text": "docker_images",
    "displayText": "docker_images - Docker images information.",
    "columns": [
      {
        "text": "id",
        "displayText": "id (text) - Image ID"
      },
      {
        "text": "created",
        "displayText": "created (bigint) - Time of creation as UNIX time"
      },
      {
        "text": "size_bytes",
        "displayText": "size_bytes (bigint) - Size of image in bytes"
      },
      {
        "text": "tags",
        "displayText": "tags (text) - Comma-separated list of repository tags"
      }
    ]
  },
  "docker_info": {
    "text": "docker_info",
    "displayText": "docker_info - Docker system information.",
    "columns": [
      {
        "text": "id",
        "displayText": "id (text) - Docker system ID"
      },
      {
        "text": "containers",
        "displayText": "containers (integer) - Total number of containers"
      },
      {
        "text": "containers_running",
        "displayText": "containers_running (integer) - Number of containers currently running"
      },
      {
        "text": "containers_paused",
        "displayText": "containers_paused (integer) - Number of containers in paused state"
      },
      {
        "text": "containers_stopped",
        "displayText": "containers_stopped (integer) - Number of containers in stopped state"
      },
      {
        "text": "images",
        "displayText": "images (integer) - Number of images"
      },
      {
        "text": "storage_driver",
        "displayText": "storage_driver (text) - Storage driver"
      },
      {
        "text": "memory_limit",
        "displayText": "memory_limit (integer) - 1 if memory limit support is enabled. 0 otherwise"
      },
      {
        "text": "swap_limit",
        "displayText": "swap_limit (integer) - 1 if swap limit support is enabled. 0 otherwise"
      },
      {
        "text": "kernel_memory",
        "displayText": "kernel_memory (integer) - 1 if kernel memory limit support is enabled. 0 otherwise"
      },
      {
        "text": "cpu_cfs_period",
        "displayText": "cpu_cfs_period (integer) - 1 if CPU Completely Fair Scheduler (CFS) period support is enabled. 0 otherwise"
      },
      {
        "text": "cpu_cfs_quota",
        "displayText": "cpu_cfs_quota (integer) - 1 if CPU Completely Fair Scheduler (CFS) quota support is enabled. 0 otherwise"
      },
      {
        "text": "cpu_shares",
        "displayText": "cpu_shares (integer) - 1 if CPU share weighting support is enabled. 0 otherwise"
      },
      {
        "text": "cpu_set",
        "displayText": "cpu_set (integer) - 1 if CPU set selection support is enabled. 0 otherwise"
      },
      {
        "text": "ipv4_forwarding",
        "displayText": "ipv4_forwarding (integer) - 1 if IPv4 forwarding is enabled. 0 otherwise"
      },
      {
        "text": "bridge_nf_iptables",
        "displayText": "bridge_nf_iptables (integer) - 1 if bridge netfilter iptables is enabled. 0 otherwise"
      },
      {
        "text": "bridge_nf_ip6tables",
        "displayText": "bridge_nf_ip6tables (integer) - 1 if bridge netfilter ip6tables is enabled. 0 otherwise"
      },
      {
        "text": "oom_kill_disable",
        "displayText": "oom_kill_disable (integer) - 1 if Out-of-memory kill is disabled. 0 otherwise"
      },
      {
        "text": "logging_driver",
        "displayText": "logging_driver (text) - Logging driver"
      },
      {
        "text": "cgroup_driver",
        "displayText": "cgroup_driver (text) - Control groups driver"
      },
      {
        "text": "kernel_version",
        "displayText": "kernel_version (text) - Kernel version"
      },
      {
        "text": "os",
        "displayText": "os (text) - Operating system"
      },
      {
        "text": "os_type",
        "displayText": "os_type (text) - Operating system type"
      },
      {
        "text": "architecture",
        "displayText": "architecture (text) - Hardware architecture"
      },
      {
        "text": "cpus",
        "displayText": "cpus (integer) - Number of CPUs"
      },
      {
        "text": "memory",
        "displayText": "memory (bigint) - Total memory"
      },
      {
        "text": "http_proxy",
        "displayText": "http_proxy (text) - HTTP proxy"
      },
      {
        "text": "https_proxy",
        "displayText": "https_proxy (text) - HTTPS proxy"
      },
      {
        "text": "no_proxy",
        "displayText": "no_proxy (text) - Comma-separated list of domain extensions proxy should not be used for"
      },
      {
        "text": "name",
        "displayText": "name (text) - Name of the docker host"
      },
      {
        "text": "server_version",
        "displayText": "server_version (text) - Server version"
      },
      {
        "text": "root_dir",
        "displayText": "root_dir (text) - Docker root directory"
      }
    ]
  },
  "docker_network_labels": {
    "text": "docker_network_labels",
    "displayText": "docker_network_labels - Docker network labels.",
    "columns": [
      {
        "text": "id",
        "displayText": "id (text) - Network ID"
      },
      {
        "text": "key",
        "displayText": "key (text) - Label key"
      },
      {
        "text": "value",
        "displayText": "value (text) - Optional label value"
      }
    ]
  },
  "docker_networks": {
    "text": "docker_networks",
    "displayText": "docker_networks - Docker networks information.",
    "columns": [
      {
        "text": "id",
        "displayText": "id (text) - Network ID"
      },
      {
        "text": "name",
        "displayText": "name (text) - Network name"
      },
      {
        "text": "driver",
        "displayText": "driver (text) - Network driver"
      },
      {
        "text": "created",
        "displayText": "created (bigint) - Time of creation as UNIX time"
      },
      {
        "text": "enable_ipv6",
        "displayText": "enable_ipv6 (integer) - 1 if IPv6 is enabled on this network. 0 otherwise"
      },
      {
        "text": "subnet",
        "displayText": "subnet (text) - Network subnet"
      },
      {
        "text": "gateway",
        "displayText": "gateway (text) - Network gateway"
      }
    ]
  },
  "docker_version": {
    "text": "docker_version",
    "displayText": "docker_version - Docker version information.",
    "columns": [
      {
        "text": "version",
        "displayText": "version (text) - Docker version"
      },
      {
        "text": "api_version",
        "displayText": "api_version (text) - API version"
      },
      {
        "text": "min_api_version",
        "displayText": "min_api_version (text) - Minimum API version supported"
      },
      {
        "text": "git_commit",
        "displayText": "git_commit (text) - Docker build git commit"
      },
      {
        "text": "go_version",
        "displayText": "go_version (text) - Go version"
      },
      {
        "text": "os",
        "displayText": "os (text) - Operating system"
      },
      {
        "text": "arch",
        "displayText": "arch (text) - Hardware architecture"
      },
      {
        "text": "kernel_version",
        "displayText": "kernel_version (text) - Kernel version"
      },
      {
        "text": "build_time",
        "displayText": "build_time (text) - Build time"
      }
    ]
  },
  "docker_volume_labels": {
    "text": "docker_volume_labels",
    "displayText": "docker_volume_labels - Docker volume labels.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Volume name"
      },
      {
        "text": "key",
        "displayText": "key (text) - Label key"
      },
      {
        "text": "value",
        "displayText": "value (text) - Optional label value"
      }
    ]
  },
  "docker_volumes": {
    "text": "docker_volumes",
    "displayText": "docker_volumes - Docker volumes information.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Volume name"
      },
      {
        "text": "driver",
        "displayText": "driver (text) - Volume driver"
      },
      {
        "text": "mount_point",
        "displayText": "mount_point (text) - Mount point"
      },
      {
        "text": "type",
        "displayText": "type (text) - Volume type"
      }
    ]
  },
  "drivers": {
    "text": "drivers",
    "displayText": "drivers - Details for in-use Windows device drivers. This does not display installed but unused drivers.",
    "columns": [
      {
        "text": "device_id",
        "displayText": "device_id (text) - Device ID"
      },
      {
        "text": "device_name",
        "displayText": "device_name (text) - Device name"
      },
      {
        "text": "image",
        "displayText": "image (text) - Path to driver image file"
      },
      {
        "text": "description",
        "displayText": "description (text) - Driver description"
      },
      {
        "text": "service",
        "displayText": "service (text) - Driver service name, if one exists"
      },
      {
        "text": "service_key",
        "displayText": "service_key (text) - Driver service registry key"
      },
      {
        "text": "version",
        "displayText": "version (text) - Driver version"
      },
      {
        "text": "inf",
        "displayText": "inf (text) - Associated inf file"
      },
      {
        "text": "class",
        "displayText": "class (text) - Device/driver class name"
      },
      {
        "text": "provider",
        "displayText": "provider (text) - Driver provider"
      },
      {
        "text": "manufacturer",
        "displayText": "manufacturer (text) - Device manufacturer"
      },
      {
        "text": "driver_key",
        "displayText": "driver_key (text) - Driver key"
      },
      {
        "text": "date",
        "displayText": "date (bigint) - Driver date"
      }
    ]
  },
  "ec2_instance_metadata": {
    "text": "ec2_instance_metadata",
    "displayText": "ec2_instance_metadata - EC2 instance metadata.",
    "columns": [
      {
        "text": "instance_id",
        "displayText": "instance_id (text) - EC2 instance ID"
      },
      {
        "text": "instance_type",
        "displayText": "instance_type (text) - EC2 instance type"
      },
      {
        "text": "architecture",
        "displayText": "architecture (text) - Hardware architecture of this EC2 instance"
      },
      {
        "text": "region",
        "displayText": "region (text) - AWS region in which this instance launched"
      },
      {
        "text": "availability_zone",
        "displayText": "availability_zone (text) - Availability zone in which this instance launched"
      },
      {
        "text": "local_hostname",
        "displayText": "local_hostname (text) - Private IPv4 DNS hostname of the first interface of this instance"
      },
      {
        "text": "local_ipv4",
        "displayText": "local_ipv4 (text) - Private IPv4 address of the first interface of this instance"
      },
      {
        "text": "mac",
        "displayText": "mac (text) - MAC address for the first network interface of this EC2 instance"
      },
      {
        "text": "security_groups",
        "displayText": "security_groups (text) - Comma separated list of security group names"
      },
      {
        "text": "iam_arn",
        "displayText": "iam_arn (text) - If there is an IAM role associated with the instance, contains instance profile ARN"
      },
      {
        "text": "ami_id",
        "displayText": "ami_id (text) - AMI ID used to launch this EC2 instance"
      },
      {
        "text": "reservation_id",
        "displayText": "reservation_id (text) - ID of the reservation"
      },
      {
        "text": "account_id",
        "displayText": "account_id (text) - AWS account ID which owns this EC2 instance"
      },
      {
        "text": "ssh_public_key",
        "displayText": "ssh_public_key (text) - SSH public key. Only available if supplied at instance launch time"
      }
    ]
  },
  "ec2_instance_tags": {
    "text": "ec2_instance_tags",
    "displayText": "ec2_instance_tags - EC2 instance tag key value pairs.",
    "columns": [
      {
        "text": "instance_id",
        "displayText": "instance_id (text) - EC2 instance ID"
      },
      {
        "text": "key",
        "displayText": "key (text) - Tag key"
      },
      {
        "text": "value",
        "displayText": "value (text) - Tag value"
      }
    ]
  },
  "etc_hosts": {
    "text": "etc_hosts",
    "displayText": "etc_hosts - Line-parsed /etc/hosts.",
    "columns": [
      {
        "text": "address",
        "displayText": "address (text) - IP address mapping"
      },
      {
        "text": "hostnames",
        "displayText": "hostnames (text) - Raw hosts mapping"
      }
    ]
  },
  "etc_protocols": {
    "text": "etc_protocols",
    "displayText": "etc_protocols - Line-parsed /etc/protocols.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Protocol name"
      },
      {
        "text": "number",
        "displayText": "number (integer) - Protocol number"
      },
      {
        "text": "alias",
        "displayText": "alias (text) - Protocol alias"
      },
      {
        "text": "comment",
        "displayText": "comment (text) - Comment with protocol description"
      }
    ]
  },
  "etc_services": {
    "text": "etc_services",
    "displayText": "etc_services - Line-parsed /etc/services.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Service name"
      },
      {
        "text": "port",
        "displayText": "port (integer) - Service port number"
      },
      {
        "text": "protocol",
        "displayText": "protocol (text) - Transport protocol (TCP/UDP)"
      },
      {
        "text": "aliases",
        "displayText": "aliases (text) - Optional space separated list of other names for a service"
      },
      {
        "text": "comment",
        "displayText": "comment (text) - Optional comment for a service."
      }
    ]
  },
  "event_taps": {
    "text": "event_taps",
    "displayText": "event_taps - Returns information about installed event taps.",
    "columns": [
      {
        "text": "enabled",
        "displayText": "enabled (integer) - Is the Event Tap enabled"
      },
      {
        "text": "event_tap_id",
        "displayText": "event_tap_id (integer) - Unique ID for the Tap"
      },
      {
        "text": "event_tapped",
        "displayText": "event_tapped (text) - The mask that identifies the set of events to be observed."
      },
      {
        "text": "process_being_tapped",
        "displayText": "process_being_tapped (integer) - The process ID of the target application"
      },
      {
        "text": "tapping_process",
        "displayText": "tapping_process (integer) - The process ID of the application that created the event tap."
      }
    ]
  },
  "example": {
    "text": "example",
    "displayText": "example - This is an example table spec.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Description for name column"
      },
      {
        "text": "points",
        "displayText": "points (integer) - This is a signed SQLite int column"
      },
      {
        "text": "size",
        "displayText": "size (bigint) - This is a signed SQLite bigint column"
      },
      {
        "text": "action",
        "displayText": "action (text) - Action performed in generation"
      },
      {
        "text": "id",
        "displayText": "id (integer) - An index of some sort"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path of example"
      }
    ]
  },
  "extended_attributes": {
    "text": "extended_attributes",
    "displayText": "extended_attributes - Returns the extended attributes for files (similar to Windows ADS).",
    "columns": [
      {
        "text": "path",
        "displayText": "path (text) - Absolute file path"
      },
      {
        "text": "directory",
        "displayText": "directory (text) - Directory of file(s)"
      },
      {
        "text": "key",
        "displayText": "key (text) - Name of the value generated from the extended attribute"
      },
      {
        "text": "value",
        "displayText": "value (text) - The parsed information from the attribute"
      },
      {
        "text": "base64",
        "displayText": "base64 (integer) - 1 if the value is base64 encoded else 0"
      }
    ]
  },
  "fan_speed_sensors": {
    "text": "fan_speed_sensors",
    "displayText": "fan_speed_sensors - Fan speeds.",
    "columns": [
      {
        "text": "fan",
        "displayText": "fan (text) - Fan number"
      },
      {
        "text": "name",
        "displayText": "name (text) - Fan name"
      },
      {
        "text": "actual",
        "displayText": "actual (integer) - Actual speed"
      },
      {
        "text": "min",
        "displayText": "min (integer) - Minimum speed"
      },
      {
        "text": "max",
        "displayText": "max (integer) - Maximum speed"
      },
      {
        "text": "target",
        "displayText": "target (integer) - Target speed"
      }
    ]
  },
  "fbsd_kmods": {
    "text": "fbsd_kmods",
    "displayText": "fbsd_kmods - Loaded FreeBSD kernel modules.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Module name"
      },
      {
        "text": "size",
        "displayText": "size (integer) - Size of module content"
      },
      {
        "text": "refs",
        "displayText": "refs (integer) - Module reverse dependencies"
      },
      {
        "text": "address",
        "displayText": "address (text) - Kernel module address"
      }
    ]
  },
  "file": {
    "text": "file",
    "displayText": "file - Interactive filesystem attributes and metadata.",
    "columns": [
      {
        "text": "path",
        "displayText": "path (text) - Absolute file path"
      },
      {
        "text": "directory",
        "displayText": "directory (text) - Directory of file(s)"
      },
      {
        "text": "filename",
        "displayText": "filename (text) - Name portion of file path"
      },
      {
        "text": "inode",
        "displayText": "inode (bigint) - Filesystem inode number"
      },
      {
        "text": "uid",
        "displayText": "uid (bigint) - Owning user ID"
      },
      {
        "text": "gid",
        "displayText": "gid (bigint) - Owning group ID"
      },
      {
        "text": "mode",
        "displayText": "mode (text) - Permission bits"
      },
      {
        "text": "device",
        "displayText": "device (bigint) - Device ID (optional)"
      },
      {
        "text": "size",
        "displayText": "size (bigint) - Size of file in bytes"
      },
      {
        "text": "block_size",
        "displayText": "block_size (integer) - Block size of filesystem"
      },
      {
        "text": "atime",
        "displayText": "atime (bigint) - Last access time"
      },
      {
        "text": "mtime",
        "displayText": "mtime (bigint) - Last modification time"
      },
      {
        "text": "ctime",
        "displayText": "ctime (bigint) - Last status change time"
      },
      {
        "text": "btime",
        "displayText": "btime (bigint) - (B)irth or (cr)eate time"
      },
      {
        "text": "hard_links",
        "displayText": "hard_links (integer) - Number of hard links"
      },
      {
        "text": "symlink",
        "displayText": "symlink (integer) - 1 if the path is a symlink, otherwise 0"
      },
      {
        "text": "type",
        "displayText": "type (text) - File status"
      }
    ]
  },
  "file_events": {
    "text": "file_events",
    "displayText": "file_events - Track time/action changes to files specified in configuration data.",
    "columns": [
      {
        "text": "target_path",
        "displayText": "target_path (text) - The path associated with the event"
      },
      {
        "text": "category",
        "displayText": "category (text) - The category of the file defined in the config"
      },
      {
        "text": "action",
        "displayText": "action (text) - Change action (UPDATE, REMOVE, etc)"
      },
      {
        "text": "transaction_id",
        "displayText": "transaction_id (bigint) - ID used during bulk update"
      },
      {
        "text": "inode",
        "displayText": "inode (bigint) - Filesystem inode number"
      },
      {
        "text": "uid",
        "displayText": "uid (bigint) - Owning user ID"
      },
      {
        "text": "gid",
        "displayText": "gid (bigint) - Owning group ID"
      },
      {
        "text": "mode",
        "displayText": "mode (text) - Permission bits"
      },
      {
        "text": "size",
        "displayText": "size (bigint) - Size of file in bytes"
      },
      {
        "text": "atime",
        "displayText": "atime (bigint) - Last access time"
      },
      {
        "text": "mtime",
        "displayText": "mtime (bigint) - Last modification time"
      },
      {
        "text": "ctime",
        "displayText": "ctime (bigint) - Last status change time"
      },
      {
        "text": "md5",
        "displayText": "md5 (text) - The MD5 of the file after change"
      },
      {
        "text": "sha1",
        "displayText": "sha1 (text) - The SHA1 of the file after change"
      },
      {
        "text": "sha256",
        "displayText": "sha256 (text) - The SHA256 of the file after change"
      },
      {
        "text": "hashed",
        "displayText": "hashed (integer) - 1 if the file was hashed, 0 if not, -1 if hashing failed"
      },
      {
        "text": "time",
        "displayText": "time (bigint) - Time of file event"
      },
      {
        "text": "eid",
        "displayText": "eid (text) - Event ID"
      }
    ]
  },
  "firefox_addons": {
    "text": "firefox_addons",
    "displayText": "firefox_addons - Firefox browser extensions, webapps, and addons.",
    "columns": [
      {
        "text": "uid",
        "displayText": "uid (bigint) - The local user that owns the addon"
      },
      {
        "text": "name",
        "displayText": "name (text) - Addon display name"
      },
      {
        "text": "identifier",
        "displayText": "identifier (text) - Addon identifier"
      },
      {
        "text": "creator",
        "displayText": "creator (text) - Addon-supported creator string"
      },
      {
        "text": "type",
        "displayText": "type (text) - Extension, addon, webapp"
      },
      {
        "text": "version",
        "displayText": "version (text) - Addon-supplied version string"
      },
      {
        "text": "description",
        "displayText": "description (text) - Addon-supplied description string"
      },
      {
        "text": "source_url",
        "displayText": "source_url (text) - URL that installed the addon"
      },
      {
        "text": "visible",
        "displayText": "visible (integer) - 1 If the addon is shown in browser else 0"
      },
      {
        "text": "active",
        "displayText": "active (integer) - 1 If the addon is active else 0"
      },
      {
        "text": "disabled",
        "displayText": "disabled (integer) - 1 If the addon is application-disabled else 0"
      },
      {
        "text": "autoupdate",
        "displayText": "autoupdate (integer) - 1 If the addon applies background updates else 0"
      },
      {
        "text": "native",
        "displayText": "native (integer) - 1 If the addon includes binary components else 0"
      },
      {
        "text": "location",
        "displayText": "location (text) - Global, profile location"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path to plugin bundle"
      }
    ]
  },
  "gatekeeper": {
    "text": "gatekeeper",
    "displayText": "gatekeeper - OS X Gatekeeper Details.",
    "columns": [
      {
        "text": "assessments_enabled",
        "displayText": "assessments_enabled (integer) - 1 If a Gatekeeper is enabled else 0"
      },
      {
        "text": "dev_id_enabled",
        "displayText": "dev_id_enabled (integer) - 1 If a Gatekeeper allows execution from identified developers else 0"
      },
      {
        "text": "version",
        "displayText": "version (text) - Version of Gatekeeper's gke.bundle"
      },
      {
        "text": "opaque_version",
        "displayText": "opaque_version (text) - Version of Gatekeeper's gkopaque.bundle"
      }
    ]
  },
  "gatekeeper_approved_apps": {
    "text": "gatekeeper_approved_apps",
    "displayText": "gatekeeper_approved_apps - Gatekeeper apps a user has allowed to run.",
    "columns": [
      {
        "text": "path",
        "displayText": "path (text) - Path of executable allowed to run"
      },
      {
        "text": "requirement",
        "displayText": "requirement (text) - Code signing requirement language"
      },
      {
        "text": "ctime",
        "displayText": "ctime (double) - Last change time"
      },
      {
        "text": "mtime",
        "displayText": "mtime (double) - Last modification time"
      }
    ]
  },
  "groups": {
    "text": "groups",
    "displayText": "groups - Local system groups.",
    "columns": [
      {
        "text": "gid",
        "displayText": "gid (bigint) - Unsigned int64 group ID"
      },
      {
        "text": "gid_signed",
        "displayText": "gid_signed (bigint) - A signed int64 version of gid"
      },
      {
        "text": "groupname",
        "displayText": "groupname (text) - Canonical local group name"
      },
      {
        "text": "group_sid",
        "displayText": "group_sid (text) - Unique group ID"
      },
      {
        "text": "comment",
        "displayText": "comment (text) - Remarks or comments associated with the group"
      }
    ]
  },
  "hardware_events": {
    "text": "hardware_events",
    "displayText": "hardware_events - Hardware (PCI/USB/HID) events from UDEV or IOKit.",
    "columns": [
      {
        "text": "action",
        "displayText": "action (text) - Remove, insert, change properties, etc"
      },
      {
        "text": "path",
        "displayText": "path (text) - Local device path assigned (optional)"
      },
      {
        "text": "type",
        "displayText": "type (text) - Type of hardware and hardware event"
      },
      {
        "text": "driver",
        "displayText": "driver (text) - Driver claiming the device"
      },
      {
        "text": "vendor",
        "displayText": "vendor (text) - Hardware device vendor"
      },
      {
        "text": "vendor_id",
        "displayText": "vendor_id (text) - Hex encoded Hardware vendor identifier"
      },
      {
        "text": "model",
        "displayText": "model (text) - Hardware device model"
      },
      {
        "text": "model_id",
        "displayText": "model_id (text) - Hex encoded Hardware model identifier"
      },
      {
        "text": "serial",
        "displayText": "serial (text) - Device serial (optional)"
      },
      {
        "text": "revision",
        "displayText": "revision (text) - Device revision (optional)"
      },
      {
        "text": "time",
        "displayText": "time (bigint) - Time of hardware event"
      },
      {
        "text": "eid",
        "displayText": "eid (text) - Event ID"
      }
    ]
  },
  "hash": {
    "text": "hash",
    "displayText": "hash - Filesystem hash data.",
    "columns": [
      {
        "text": "path",
        "displayText": "path (text) - Must provide a path or directory"
      },
      {
        "text": "directory",
        "displayText": "directory (text) - Must provide a path or directory"
      },
      {
        "text": "md5",
        "displayText": "md5 (text) - MD5 hash of provided filesystem data"
      },
      {
        "text": "sha1",
        "displayText": "sha1 (text) - SHA1 hash of provided filesystem data"
      },
      {
        "text": "sha256",
        "displayText": "sha256 (text) - SHA256 hash of provided filesystem data"
      }
    ]
  },
  "homebrew_packages": {
    "text": "homebrew_packages",
    "displayText": "homebrew_packages - The installed homebrew package database.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Package name"
      },
      {
        "text": "path",
        "displayText": "path (text) - Package install path"
      },
      {
        "text": "version",
        "displayText": "version (text) - Current 'linked' version"
      }
    ]
  },
  "ie_extensions": {
    "text": "ie_extensions",
    "displayText": "ie_extensions - Internet Explorer browser extensions.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Extension display name"
      },
      {
        "text": "registry_path",
        "displayText": "registry_path (text) - Extension identifier"
      },
      {
        "text": "version",
        "displayText": "version (text) - Version of the executable"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path to executable"
      }
    ]
  },
  "intel_me_info": {
    "text": "intel_me_info",
    "displayText": "intel_me_info - Intel ME/CSE Info.",
    "columns": [
      {
        "text": "version",
        "displayText": "version (text) - Intel ME version"
      }
    ]
  },
  "interface_addresses": {
    "text": "interface_addresses",
    "displayText": "interface_addresses - Network interfaces and relevant metadata.",
    "columns": [
      {
        "text": "interface",
        "displayText": "interface (text) - Interface name"
      },
      {
        "text": "address",
        "displayText": "address (text) - Specific address for interface"
      },
      {
        "text": "mask",
        "displayText": "mask (text) - Interface netmask"
      },
      {
        "text": "broadcast",
        "displayText": "broadcast (text) - Broadcast address for the interface"
      },
      {
        "text": "point_to_point",
        "displayText": "point_to_point (text) - PtP address for the interface"
      },
      {
        "text": "type",
        "displayText": "type (text) - Type of address. One of dhcp, manual, auto, other"
      },
      {
        "text": "friendly_name",
        "displayText": "friendly_name (text) - The friendly display name of the interface."
      }
    ]
  },
  "interface_details": {
    "text": "interface_details",
    "displayText": "interface_details - Detailed information and stats of network interfaces.",
    "columns": [
      {
        "text": "interface",
        "displayText": "interface (text) - Interface name"
      },
      {
        "text": "mac",
        "displayText": "mac (text) - MAC of interface (optional)"
      },
      {
        "text": "type",
        "displayText": "type (integer) - Interface type (includes virtual)"
      },
      {
        "text": "mtu",
        "displayText": "mtu (integer) - Network MTU"
      },
      {
        "text": "metric",
        "displayText": "metric (integer) - Metric based on the speed of the interface"
      },
      {
        "text": "flags",
        "displayText": "flags (integer) - Flags (netdevice) for the device"
      },
      {
        "text": "ipackets",
        "displayText": "ipackets (bigint) - Input packets"
      },
      {
        "text": "opackets",
        "displayText": "opackets (bigint) - Output packets"
      },
      {
        "text": "ibytes",
        "displayText": "ibytes (bigint) - Input bytes"
      },
      {
        "text": "obytes",
        "displayText": "obytes (bigint) - Output bytes"
      },
      {
        "text": "ierrors",
        "displayText": "ierrors (bigint) - Input errors"
      },
      {
        "text": "oerrors",
        "displayText": "oerrors (bigint) - Output errors"
      },
      {
        "text": "idrops",
        "displayText": "idrops (bigint) - Input drops"
      },
      {
        "text": "odrops",
        "displayText": "odrops (bigint) - Output drops"
      },
      {
        "text": "collisions",
        "displayText": "collisions (bigint) - Packet Collisions detected"
      },
      {
        "text": "last_change",
        "displayText": "last_change (bigint) - Time of last device modification (optional)"
      },
      {
        "text": "friendly_name",
        "displayText": "friendly_name (text) - The friendly display name of the interface."
      },
      {
        "text": "description",
        "displayText": "description (text) - Short description of the object—a one-line string."
      },
      {
        "text": "manufacturer",
        "displayText": "manufacturer (text) - Name of the network adapter's manufacturer."
      },
      {
        "text": "connection_id",
        "displayText": "connection_id (text) - Name of the network connection as it appears in the Network Connections Control Panel program."
      },
      {
        "text": "connection_status",
        "displayText": "connection_status (text) - State of the network adapter connection to the network."
      },
      {
        "text": "enabled",
        "displayText": "enabled (integer) - Indicates whether the adapter is enabled or not."
      },
      {
        "text": "physical_adapter",
        "displayText": "physical_adapter (integer) - Indicates whether the adapter is a physical or a logical adapter."
      },
      {
        "text": "speed",
        "displayText": "speed (integer) - Estimate of the current bandwidth in bits per second."
      },
      {
        "text": "dhcp_enabled",
        "displayText": "dhcp_enabled (integer) - If TRUE, the dynamic host configuration protocol (DHCP) server automatically assigns an IP address to the computer system when establishing a network connection."
      },
      {
        "text": "dhcp_lease_expires",
        "displayText": "dhcp_lease_expires (text) - Expiration date and time for a leased IP address that was assigned to the computer by the dynamic host configuration protocol (DHCP) server."
      },
      {
        "text": "dhcp_lease_obtained",
        "displayText": "dhcp_lease_obtained (text) - Date and time the lease was obtained for the IP address assigned to the computer by the dynamic host configuration protocol (DHCP) server."
      },
      {
        "text": "dhcp_server",
        "displayText": "dhcp_server (text) - IP address of the dynamic host configuration protocol (DHCP) server."
      },
      {
        "text": "dns_domain",
        "displayText": "dns_domain (text) - Organization name followed by a period and an extension that indicates the type of organization, such as 'microsoft.com'."
      },
      {
        "text": "dns_domain_suffix_search_order",
        "displayText": "dns_domain_suffix_search_order (text) - Array of DNS domain suffixes to be appended to the end of host names during name resolution."
      },
      {
        "text": "dns_host_name",
        "displayText": "dns_host_name (text) - Host name used to identify the local computer for authentication by some utilities."
      },
      {
        "text": "dns_server_search_order",
        "displayText": "dns_server_search_order (text) - Array of server IP addresses to be used in querying for DNS servers."
      }
    ]
  },
  "iokit_devicetree": {
    "text": "iokit_devicetree",
    "displayText": "iokit_devicetree - The IOKit registry matching the DeviceTree plane.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Device node name"
      },
      {
        "text": "class",
        "displayText": "class (text) - Best matching device class (most-specific category)"
      },
      {
        "text": "id",
        "displayText": "id (bigint) - IOKit internal registry ID"
      },
      {
        "text": "parent",
        "displayText": "parent (bigint) - Parent device registry ID"
      },
      {
        "text": "device_path",
        "displayText": "device_path (text) - Device tree path"
      },
      {
        "text": "service",
        "displayText": "service (integer) - 1 if the device conforms to IOService else 0"
      },
      {
        "text": "busy_state",
        "displayText": "busy_state (integer) - 1 if the device is in a busy state else 0"
      },
      {
        "text": "retain_count",
        "displayText": "retain_count (integer) - The device reference count"
      },
      {
        "text": "depth",
        "displayText": "depth (integer) - Device nested depth"
      }
    ]
  },
  "iokit_registry": {
    "text": "iokit_registry",
    "displayText": "iokit_registry - The full IOKit registry without selecting a plane.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Default name of the node"
      },
      {
        "text": "class",
        "displayText": "class (text) - Best matching device class (most-specific category)"
      },
      {
        "text": "id",
        "displayText": "id (bigint) - IOKit internal registry ID"
      },
      {
        "text": "parent",
        "displayText": "parent (bigint) - Parent registry ID"
      },
      {
        "text": "busy_state",
        "displayText": "busy_state (integer) - 1 if the node is in a busy state else 0"
      },
      {
        "text": "retain_count",
        "displayText": "retain_count (integer) - The node reference count"
      },
      {
        "text": "depth",
        "displayText": "depth (integer) - Node nested depth"
      }
    ]
  },
  "iptables": {
    "text": "iptables",
    "displayText": "iptables - Linux IP packet filtering and NAT tool.",
    "columns": [
      {
        "text": "filter_name",
        "displayText": "filter_name (text) - Packet matching filter table name."
      },
      {
        "text": "chain",
        "displayText": "chain (text) - Size of module content."
      },
      {
        "text": "policy",
        "displayText": "policy (text) - Policy that applies for this rule."
      },
      {
        "text": "target",
        "displayText": "target (text) - Target that applies for this rule."
      },
      {
        "text": "protocol",
        "displayText": "protocol (integer) - Protocol number identification."
      },
      {
        "text": "src_port",
        "displayText": "src_port (text) - Protocol source port(s)."
      },
      {
        "text": "dst_port",
        "displayText": "dst_port (text) - Protocol destination port(s)."
      },
      {
        "text": "src_ip",
        "displayText": "src_ip (text) - Source IP address."
      },
      {
        "text": "src_mask",
        "displayText": "src_mask (text) - Source IP address mask."
      },
      {
        "text": "iniface",
        "displayText": "iniface (text) - Input interface for the rule."
      },
      {
        "text": "iniface_mask",
        "displayText": "iniface_mask (text) - Input interface mask for the rule."
      },
      {
        "text": "dst_ip",
        "displayText": "dst_ip (text) - Destination IP address."
      },
      {
        "text": "dst_mask",
        "displayText": "dst_mask (text) - Destination IP address mask."
      },
      {
        "text": "outiface",
        "displayText": "outiface (text) - Output interface for the rule."
      },
      {
        "text": "outiface_mask",
        "displayText": "outiface_mask (text) - Output interface mask for the rule."
      },
      {
        "text": "match",
        "displayText": "match (text) - Matching rule that applies."
      },
      {
        "text": "packets",
        "displayText": "packets (integer) - Number of matching packets for this rule."
      },
      {
        "text": "bytes",
        "displayText": "bytes (integer) - Number of matching bytes for this rule."
      }
    ]
  },
  "kernel_extensions": {
    "text": "kernel_extensions",
    "displayText": "kernel_extensions - OS X's kernel extensions, both loaded and within the load search path.",
    "columns": [
      {
        "text": "idx",
        "displayText": "idx (integer) - Extension load tag or index"
      },
      {
        "text": "refs",
        "displayText": "refs (integer) - Reference count"
      },
      {
        "text": "size",
        "displayText": "size (bigint) - Bytes of wired memory used by extension"
      },
      {
        "text": "name",
        "displayText": "name (text) - Extension label"
      },
      {
        "text": "version",
        "displayText": "version (text) - Extension version"
      },
      {
        "text": "linked_against",
        "displayText": "linked_against (text) - Indexes of extensions this extension is linked against"
      },
      {
        "text": "path",
        "displayText": "path (text) - Optional path to extension bundle"
      }
    ]
  },
  "kernel_info": {
    "text": "kernel_info",
    "displayText": "kernel_info - Basic active kernel information.",
    "columns": [
      {
        "text": "version",
        "displayText": "version (text) - Kernel version"
      },
      {
        "text": "arguments",
        "displayText": "arguments (text) - Kernel arguments"
      },
      {
        "text": "path",
        "displayText": "path (text) - Kernel path"
      },
      {
        "text": "device",
        "displayText": "device (text) - Kernel device identifier"
      }
    ]
  },
  "kernel_integrity": {
    "text": "kernel_integrity",
    "displayText": "kernel_integrity - Various Linux kernel integrity checked attributes.",
    "columns": [
      {
        "text": "sycall_addr_modified",
        "displayText": "sycall_addr_modified (integer) - 0 or 1, for whether a syscall table pointer is modified"
      },
      {
        "text": "text_segment_hash",
        "displayText": "text_segment_hash (text) - Hash value for the kernel's .text memory segment"
      }
    ]
  },
  "kernel_modules": {
    "text": "kernel_modules",
    "displayText": "kernel_modules - Linux kernel modules both loaded and within the load search path.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Module name"
      },
      {
        "text": "size",
        "displayText": "size (text) - Size of module content"
      },
      {
        "text": "used_by",
        "displayText": "used_by (text) - Module reverse dependencies"
      },
      {
        "text": "status",
        "displayText": "status (text) - Kernel module status"
      },
      {
        "text": "address",
        "displayText": "address (text) - Kernel module address"
      }
    ]
  },
  "kernel_panics": {
    "text": "kernel_panics",
    "displayText": "kernel_panics - System kernel panic logs.",
    "columns": [
      {
        "text": "path",
        "displayText": "path (text) - Location of log file"
      },
      {
        "text": "time",
        "displayText": "time (text) - Formatted time of the event"
      },
      {
        "text": "registers",
        "displayText": "registers (text) - A space delimited line of register:value pairs"
      },
      {
        "text": "frame_backtrace",
        "displayText": "frame_backtrace (text) - Backtrace of the crashed module"
      },
      {
        "text": "module_backtrace",
        "displayText": "module_backtrace (text) - Modules appearing in the crashed module's backtrace"
      },
      {
        "text": "dependencies",
        "displayText": "dependencies (text) - Module dependencies existing in crashed module's backtrace"
      },
      {
        "text": "name",
        "displayText": "name (text) - Process name corresponding to crashed thread"
      },
      {
        "text": "os_version",
        "displayText": "os_version (text) - Version of the operating system"
      },
      {
        "text": "kernel_version",
        "displayText": "kernel_version (text) - Version of the system kernel"
      },
      {
        "text": "system_model",
        "displayText": "system_model (text) - Physical system model, for example 'MacBookPro12,1 (Mac-E43C1C25D4880AD6)'"
      },
      {
        "text": "uptime",
        "displayText": "uptime (bigint) - System uptime at kernel panic in nanoseconds"
      },
      {
        "text": "last_loaded",
        "displayText": "last_loaded (text) - Last loaded module before panic"
      },
      {
        "text": "last_unloaded",
        "displayText": "last_unloaded (text) - Last unloaded module before panic"
      }
    ]
  },
  "keychain_acls": {
    "text": "keychain_acls",
    "displayText": "keychain_acls - Applications that have ACL entries in the keychain.",
    "columns": [
      {
        "text": "keychain_path",
        "displayText": "keychain_path (text) - The path of the keychain"
      },
      {
        "text": "authorizations",
        "displayText": "authorizations (text) - A space delimited set of authorization attributes"
      },
      {
        "text": "path",
        "displayText": "path (text) - The path of the authorized application"
      },
      {
        "text": "description",
        "displayText": "description (text) - The description included with the ACL entry"
      },
      {
        "text": "label",
        "displayText": "label (text) - An optional label tag that may be included with the keychain entry"
      }
    ]
  },
  "keychain_items": {
    "text": "keychain_items",
    "displayText": "keychain_items - Generic details about keychain items.",
    "columns": [
      {
        "text": "label",
        "displayText": "label (text) - Generic item name"
      },
      {
        "text": "description",
        "displayText": "description (text) - Optional item description"
      },
      {
        "text": "comment",
        "displayText": "comment (text) - Optional keychain comment"
      },
      {
        "text": "created",
        "displayText": "created (text) - Data item was created"
      },
      {
        "text": "modified",
        "displayText": "modified (text) - Date of last modification"
      },
      {
        "text": "type",
        "displayText": "type (text) - Keychain item type (class)"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path to keychain containing item"
      }
    ]
  },
  "known_hosts": {
    "text": "known_hosts",
    "displayText": "known_hosts - A line-delimited known_hosts table.",
    "columns": [
      {
        "text": "uid",
        "displayText": "uid (bigint) - The local user that owns the known_hosts file"
      },
      {
        "text": "key",
        "displayText": "key (text) - parsed authorized keys line"
      },
      {
        "text": "key_file",
        "displayText": "key_file (text) - Path to known_hosts file"
      }
    ]
  },
  "last": {
    "text": "last",
    "displayText": "last - System logins and logouts.",
    "columns": [
      {
        "text": "username",
        "displayText": "username (text) - Entry username"
      },
      {
        "text": "tty",
        "displayText": "tty (text) - Entry terminal"
      },
      {
        "text": "pid",
        "displayText": "pid (integer) - Process (or thread) ID"
      },
      {
        "text": "type",
        "displayText": "type (integer) - Entry type, according to ut_type types (utmp.h)"
      },
      {
        "text": "time",
        "displayText": "time (integer) - Entry timestamp"
      },
      {
        "text": "host",
        "displayText": "host (text) - Entry hostname"
      }
    ]
  },
  "launchd": {
    "text": "launchd",
    "displayText": "launchd - LaunchAgents and LaunchDaemons from default search paths.",
    "columns": [
      {
        "text": "path",
        "displayText": "path (text) - Path to daemon or agent plist"
      },
      {
        "text": "name",
        "displayText": "name (text) - File name of plist (used by launchd)"
      },
      {
        "text": "label",
        "displayText": "label (text) - Daemon or agent service name"
      },
      {
        "text": "program",
        "displayText": "program (text) - Path to target program"
      },
      {
        "text": "run_at_load",
        "displayText": "run_at_load (text) - Should the program run on launch load"
      },
      {
        "text": "keep_alive",
        "displayText": "keep_alive (text) - Should the process be restarted if killed"
      },
      {
        "text": "on_demand",
        "displayText": "on_demand (text) - Deprecated key, replaced by keep_alive"
      },
      {
        "text": "disabled",
        "displayText": "disabled (text) - Skip loading this daemon or agent on boot"
      },
      {
        "text": "username",
        "displayText": "username (text) - Run this daemon or agent as this username"
      },
      {
        "text": "groupname",
        "displayText": "groupname (text) - Run this daemon or agent as this group"
      },
      {
        "text": "stdout_path",
        "displayText": "stdout_path (text) - Pipe stdout to a target path"
      },
      {
        "text": "stderr_path",
        "displayText": "stderr_path (text) - Pipe stderr to a target path"
      },
      {
        "text": "start_interval",
        "displayText": "start_interval (text) - Frecuency of running in seconds"
      },
      {
        "text": "program_arguments",
        "displayText": "program_arguments (text) - Command line arguments passed to program"
      },
      {
        "text": "watch_paths",
        "displayText": "watch_paths (text) - Key that launches daemon or agent if path is modified"
      },
      {
        "text": "queue_directories",
        "displayText": "queue_directories (text) - Similar to watch_paths but only with non-empty directories"
      },
      {
        "text": "inetd_compatibility",
        "displayText": "inetd_compatibility (text) - Run this daemon or agent as it was launched from inetd"
      },
      {
        "text": "start_on_mount",
        "displayText": "start_on_mount (text) - Run daemon or agent every time a filesystem is mounted"
      },
      {
        "text": "root_directory",
        "displayText": "root_directory (text) - Key used to specify a directory to chroot to before launch"
      },
      {
        "text": "working_directory",
        "displayText": "working_directory (text) - Key used to specify a directory to chdir to before launch"
      },
      {
        "text": "process_type",
        "displayText": "process_type (text) - Key describes the intended purpose of the job"
      }
    ]
  },
  "launchd_overrides": {
    "text": "launchd_overrides",
    "displayText": "launchd_overrides - Override keys, per user, for LaunchDaemons and Agents.",
    "columns": [
      {
        "text": "label",
        "displayText": "label (text) - Daemon or agent service name"
      },
      {
        "text": "key",
        "displayText": "key (text) - Name of the override key"
      },
      {
        "text": "value",
        "displayText": "value (text) - Overriden value"
      },
      {
        "text": "uid",
        "displayText": "uid (bigint) - User ID applied to the override, 0 applies to all"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path to daemon or agent plist"
      }
    ]
  },
  "listening_ports": {
    "text": "listening_ports",
    "displayText": "listening_ports - Processes with listening (bound) network sockets/ports.",
    "columns": [
      {
        "text": "pid",
        "displayText": "pid (integer) - Process (or thread) ID"
      },
      {
        "text": "port",
        "displayText": "port (integer) - Transport layer port"
      },
      {
        "text": "protocol",
        "displayText": "protocol (integer) - Transport protocol (TCP/UDP)"
      },
      {
        "text": "family",
        "displayText": "family (integer) - Network protocol (IPv4, IPv6)"
      },
      {
        "text": "address",
        "displayText": "address (text) - Specific address for bind"
      }
    ]
  },
  "lldp_neighbors": {
    "text": "lldp_neighbors",
    "displayText": "lldp_neighbors - LLDP neighbors of interfaces.",
    "columns": [
      {
        "text": "interface",
        "displayText": "interface (text) - Interface name"
      },
      {
        "text": "rid",
        "displayText": "rid (integer) - Neighbor chassis index"
      },
      {
        "text": "chassis_id_type",
        "displayText": "chassis_id_type (text) - Neighbor chassis ID type"
      },
      {
        "text": "chassis_id",
        "displayText": "chassis_id (text) - Neighbor chassis ID value"
      },
      {
        "text": "chassis_sysname",
        "displayText": "chassis_sysname (text) - CPU brand string, contains vendor and model"
      },
      {
        "text": "chassis_sys_description",
        "displayText": "chassis_sys_description (integer) - Max number of CPU physical cores"
      },
      {
        "text": "chassis_bridge_capability_available",
        "displayText": "chassis_bridge_capability_available (integer) - Chassis bridge capability availability"
      },
      {
        "text": "chassis_bridge_capability_enabled",
        "displayText": "chassis_bridge_capability_enabled (integer) - Is chassis bridge capability enabled."
      },
      {
        "text": "chassis_router_capability_available",
        "displayText": "chassis_router_capability_available (integer) - Chassis router capability availability"
      },
      {
        "text": "chassis_router_capability_enabled",
        "displayText": "chassis_router_capability_enabled (integer) - Chassis router capability enabled"
      },
      {
        "text": "chassis_repeater_capability_available",
        "displayText": "chassis_repeater_capability_available (integer) - Chassis repeater capability availability"
      },
      {
        "text": "chassis_repeater_capability_enabled",
        "displayText": "chassis_repeater_capability_enabled (integer) - Chassis repeater capability enabled"
      },
      {
        "text": "chassis_wlan_capability_available",
        "displayText": "chassis_wlan_capability_available (integer) - Chassis wlan capability availability"
      },
      {
        "text": "chassis_wlan_capability_enabled",
        "displayText": "chassis_wlan_capability_enabled (integer) - Chassis wlan capability enabled"
      },
      {
        "text": "chassis_tel_capability_available",
        "displayText": "chassis_tel_capability_available (integer) - Chassis telephone capability availability"
      },
      {
        "text": "chassis_tel_capability_enabled",
        "displayText": "chassis_tel_capability_enabled (integer) - Chassis telephone capability enabled"
      },
      {
        "text": "chassis_docsis_capability_available",
        "displayText": "chassis_docsis_capability_available (integer) - Chassis DOCSIS capability availability"
      },
      {
        "text": "chassis_docsis_capability_enabled",
        "displayText": "chassis_docsis_capability_enabled (integer) - Chassis DOCSIS capability enabled"
      },
      {
        "text": "chassis_station_capability_available",
        "displayText": "chassis_station_capability_available (integer) - Chassis station capability availability"
      },
      {
        "text": "chassis_station_capability_enabled",
        "displayText": "chassis_station_capability_enabled (integer) - Chassis station capability enabled"
      },
      {
        "text": "chassis_other_capability_available",
        "displayText": "chassis_other_capability_available (integer) - Chassis other capability availability"
      },
      {
        "text": "chassis_other_capability_enabled",
        "displayText": "chassis_other_capability_enabled (integer) - Chassis other capability enabled"
      },
      {
        "text": "chassis_mgmt_ips",
        "displayText": "chassis_mgmt_ips (text) - Comma delimited list of chassis management IPS"
      },
      {
        "text": "port_id_type",
        "displayText": "port_id_type (text) - Port ID type"
      },
      {
        "text": "port_id",
        "displayText": "port_id (text) - Port ID value"
      },
      {
        "text": "port_description",
        "displayText": "port_description (text) - Port description"
      },
      {
        "text": "port_ttl",
        "displayText": "port_ttl (bigint) - Age of neighbor port"
      },
      {
        "text": "port_mfs",
        "displayText": "port_mfs (bigint) - Port max frame size"
      },
      {
        "text": "port_aggregation_id",
        "displayText": "port_aggregation_id (text) - Port aggregation ID"
      },
      {
        "text": "port_autoneg_supported",
        "displayText": "port_autoneg_supported (integer) - Auto negotiation supported"
      },
      {
        "text": "port_autoneg_enabled",
        "displayText": "port_autoneg_enabled (integer) - Is auto negotiation enabled"
      },
      {
        "text": "port_mau_type",
        "displayText": "port_mau_type (text) - MAU type"
      },
      {
        "text": "port_autoneg_10baset_hd_enabled",
        "displayText": "port_autoneg_10baset_hd_enabled (integer) - 10Base-T HD auto negotiation enabled"
      },
      {
        "text": "port_autoneg_10baset_fd_enabled",
        "displayText": "port_autoneg_10baset_fd_enabled (integer) - 10Base-T FD auto negotiation enabled"
      },
      {
        "text": "port_autoneg_100basetx_hd_enabled",
        "displayText": "port_autoneg_100basetx_hd_enabled (integer) - 100Base-TX HD auto negotiation enabled"
      },
      {
        "text": "port_autoneg_100basetx_fd_enabled",
        "displayText": "port_autoneg_100basetx_fd_enabled (integer) - 100Base-TX FD auto negotiation enabled"
      },
      {
        "text": "port_autoneg_100baset2_hd_enabled",
        "displayText": "port_autoneg_100baset2_hd_enabled (integer) - 100Base-T2 HD auto negotiation enabled"
      },
      {
        "text": "port_autoneg_100baset2_fd_enabled",
        "displayText": "port_autoneg_100baset2_fd_enabled (integer) - 100Base-T2 FD auto negotiation enabled"
      },
      {
        "text": "port_autoneg_100baset4_hd_enabled",
        "displayText": "port_autoneg_100baset4_hd_enabled (integer) - 100Base-T4 HD auto negotiation enabled"
      },
      {
        "text": "port_autoneg_100baset4_fd_enabled",
        "displayText": "port_autoneg_100baset4_fd_enabled (integer) - 100Base-T4 FD auto negotiation enabled"
      },
      {
        "text": "port_autoneg_1000basex_hd_enabled",
        "displayText": "port_autoneg_1000basex_hd_enabled (integer) - 1000Base-X HD auto negotiation enabled"
      },
      {
        "text": "port_autoneg_1000basex_fd_enabled",
        "displayText": "port_autoneg_1000basex_fd_enabled (integer) - 1000Base-X FD auto negotiation enabled"
      },
      {
        "text": "port_autoneg_1000baset_hd_enabled",
        "displayText": "port_autoneg_1000baset_hd_enabled (integer) - 1000Base-T HD auto negotiation enabled"
      },
      {
        "text": "port_autoneg_1000baset_fd_enabled",
        "displayText": "port_autoneg_1000baset_fd_enabled (integer) - 1000Base-T FD auto negotiation enabled"
      },
      {
        "text": "power_device_type",
        "displayText": "power_device_type (text) - Dot3 power device type"
      },
      {
        "text": "power_mdi_supported",
        "displayText": "power_mdi_supported (integer) - MDI power supported"
      },
      {
        "text": "power_mdi_enabled",
        "displayText": "power_mdi_enabled (integer) - Is MDI power enabled"
      },
      {
        "text": "power_paircontrol_enabled",
        "displayText": "power_paircontrol_enabled (integer) - Is power pair control enabled"
      },
      {
        "text": "power_pairs",
        "displayText": "power_pairs (text) - Dot3 power pairs"
      },
      {
        "text": "power_class",
        "displayText": "power_class (text) - Power class"
      },
      {
        "text": "power_8023at_enabled",
        "displayText": "power_8023at_enabled (integer) - Is 802.3at enabled"
      },
      {
        "text": "power_8023at_power_type",
        "displayText": "power_8023at_power_type (text) - 802.3at power type"
      },
      {
        "text": "power_8023at_power_source",
        "displayText": "power_8023at_power_source (text) - 802.3at power source"
      },
      {
        "text": "power_8023at_power_priority",
        "displayText": "power_8023at_power_priority (text) - 802.3at power priority"
      },
      {
        "text": "power_8023at_power_allocated",
        "displayText": "power_8023at_power_allocated (text) - 802.3at power allocated"
      },
      {
        "text": "power_8023at_power_requested",
        "displayText": "power_8023at_power_requested (text) - 802.3at power requested"
      },
      {
        "text": "med_device_type",
        "displayText": "med_device_type (text) - Chassis MED type"
      },
      {
        "text": "med_capability_capabilities",
        "displayText": "med_capability_capabilities (integer) - Is MED capabilities enabled"
      },
      {
        "text": "med_capability_policy",
        "displayText": "med_capability_policy (integer) - Is MED policy capability enabled"
      },
      {
        "text": "med_capability_location",
        "displayText": "med_capability_location (integer) - Is MED location capability enabled"
      },
      {
        "text": "med_capability_mdi_pse",
        "displayText": "med_capability_mdi_pse (integer) - Is MED MDI PSE capability enabled"
      },
      {
        "text": "med_capability_mdi_pd",
        "displayText": "med_capability_mdi_pd (integer) - Is MED MDI PD capability enabled"
      },
      {
        "text": "med_capability_inventory",
        "displayText": "med_capability_inventory (integer) - Is MED inventory capability enabled"
      },
      {
        "text": "med_policies",
        "displayText": "med_policies (text) - Comma delimited list of MED policies"
      },
      {
        "text": "vlans",
        "displayText": "vlans (text) - Comma delimited list of vlan ids"
      },
      {
        "text": "pvid",
        "displayText": "pvid (text) - Primary VLAN id"
      },
      {
        "text": "ppvids_supported",
        "displayText": "ppvids_supported (text) - Comma delimited list of supported PPVIDs"
      },
      {
        "text": "ppvids_enabled",
        "displayText": "ppvids_enabled (text) - Comma delimited list of enabled PPVIDs"
      },
      {
        "text": "pids",
        "displayText": "pids (text) - Comma delimited list of PIDs"
      }
    ]
  },
  "load_average": {
    "text": "load_average",
    "displayText": "load_average - Displays information about the system wide load averages.",
    "columns": [
      {
        "text": "period",
        "displayText": "period (text) - Period over which the average is calculated."
      },
      {
        "text": "average",
        "displayText": "average (text) - Load average over the specified period."
      }
    ]
  },
  "logged_in_users": {
    "text": "logged_in_users",
    "displayText": "logged_in_users - Users with an active shell on the system.",
    "columns": [
      {
        "text": "type",
        "displayText": "type (text) - Login type"
      },
      {
        "text": "user",
        "displayText": "user (text) - User login name"
      },
      {
        "text": "tty",
        "displayText": "tty (text) - Device name"
      },
      {
        "text": "host",
        "displayText": "host (text) - Remote hostname"
      },
      {
        "text": "time",
        "displayText": "time (integer) - Time entry was made"
      },
      {
        "text": "pid",
        "displayText": "pid (integer) - Process (or thread) ID"
      }
    ]
  },
  "logical_drives": {
    "text": "logical_drives",
    "displayText": "logical_drives - Details for logical drives on the system. A logical drive generally represents a single partition.",
    "columns": [
      {
        "text": "device_id",
        "displayText": "device_id (text) - The drive id, usually the drive name, e.g., 'C:'."
      },
      {
        "text": "type",
        "displayText": "type (text) - The type of disk drive this logical drive represents."
      },
      {
        "text": "free_space",
        "displayText": "free_space (bigint) - The amount of free space, in bytes, of the drive."
      },
      {
        "text": "size",
        "displayText": "size (bigint) - The total amount of space, in bytes, of the drive."
      },
      {
        "text": "file_system",
        "displayText": "file_system (text) - The file system of the drive."
      },
      {
        "text": "boot_partition",
        "displayText": "boot_partition (integer) - True if Windows booted from this drive."
      }
    ]
  },
  "magic": {
    "text": "magic",
    "displayText": "magic - Magic number recognition library table.",
    "columns": [
      {
        "text": "path",
        "displayText": "path (text) - Absolute path to target file"
      },
      {
        "text": "data",
        "displayText": "data (text) - Magic number data from libmagic"
      },
      {
        "text": "mime_type",
        "displayText": "mime_type (text) - MIME type data from libmagic"
      },
      {
        "text": "mime_encoding",
        "displayText": "mime_encoding (text) - MIME encoding data from libmagic"
      }
    ]
  },
  "managed_policies": {
    "text": "managed_policies",
    "displayText": "managed_policies - The managed configuration policies from AD, MDM, MCX, etc.",
    "columns": [
      {
        "text": "domain",
        "displayText": "domain (text) - System or manager-chosen domain key"
      },
      {
        "text": "uuid",
        "displayText": "uuid (text) - Optional UUID assigned to policy set"
      },
      {
        "text": "name",
        "displayText": "name (text) - Policy key name"
      },
      {
        "text": "value",
        "displayText": "value (text) - Policy value"
      },
      {
        "text": "username",
        "displayText": "username (text) - Policy applies only this user"
      },
      {
        "text": "manual",
        "displayText": "manual (integer) - 1 if policy was loaded manually, otherwise 0"
      }
    ]
  },
  "md_devices": {
    "text": "md_devices",
    "displayText": "md_devices - Software RAID array settings.",
    "columns": [
      {
        "text": "device_name",
        "displayText": "device_name (text) - md device name"
      },
      {
        "text": "status",
        "displayText": "status (text) - Current state of the array"
      },
      {
        "text": "raid_level",
        "displayText": "raid_level (integer) - Current raid level of the array"
      },
      {
        "text": "size",
        "displayText": "size (bigint) - size of the array in blocks"
      },
      {
        "text": "chunk_size",
        "displayText": "chunk_size (bigint) - chunk size in bytes"
      },
      {
        "text": "raid_disks",
        "displayText": "raid_disks (integer) - Number of configured RAID disks in array"
      },
      {
        "text": "nr_raid_disks",
        "displayText": "nr_raid_disks (integer) - Number of partitions or disk devices to comprise the array"
      },
      {
        "text": "working_disks",
        "displayText": "working_disks (integer) - Number of working disks in array"
      },
      {
        "text": "active_disks",
        "displayText": "active_disks (integer) - Number of active disks in array"
      },
      {
        "text": "failed_disks",
        "displayText": "failed_disks (integer) - Number of active disks in array"
      },
      {
        "text": "spare_disks",
        "displayText": "spare_disks (integer) - Number of active disks in array"
      },
      {
        "text": "superblock_state",
        "displayText": "superblock_state (text) - State of the superblock"
      },
      {
        "text": "superblock_version",
        "displayText": "superblock_version (text) - Version of the superblock"
      },
      {
        "text": "superblock_update_time",
        "displayText": "superblock_update_time (bigint) - Unix timestamp of last update"
      },
      {
        "text": "bitmap_on_mem",
        "displayText": "bitmap_on_mem (text) - Pages allocated in in-memory bitmap, if enabled"
      },
      {
        "text": "bitmap_chunk_size",
        "displayText": "bitmap_chunk_size (text) - Bitmap chunk size"
      },
      {
        "text": "bitmap_external_file",
        "displayText": "bitmap_external_file (text) - External referenced bitmap file"
      },
      {
        "text": "recovery_progress",
        "displayText": "recovery_progress (text) - Progress of the recovery activity"
      },
      {
        "text": "recovery_finish",
        "displayText": "recovery_finish (text) - Estimated duration of recovery activity"
      },
      {
        "text": "recovery_speed",
        "displayText": "recovery_speed (text) - Speed of recovery activity"
      },
      {
        "text": "resync_progress",
        "displayText": "resync_progress (text) - Progress of the resync activity"
      },
      {
        "text": "resync_finish",
        "displayText": "resync_finish (text) - Estimated duration of resync activity"
      },
      {
        "text": "resync_speed",
        "displayText": "resync_speed (text) - Speed of resync activity"
      },
      {
        "text": "reshape_progress",
        "displayText": "reshape_progress (text) - Progress of the reshape activity"
      },
      {
        "text": "reshape_finish",
        "displayText": "reshape_finish (text) - Estimated duration of reshape activity"
      },
      {
        "text": "reshape_speed",
        "displayText": "reshape_speed (text) - Speed of reshape activity"
      },
      {
        "text": "check_array_progress",
        "displayText": "check_array_progress (text) - Progress of the resync activity"
      },
      {
        "text": "check_array_finish",
        "displayText": "check_array_finish (text) - Estimated duration of resync activity"
      },
      {
        "text": "check_array_speed",
        "displayText": "check_array_speed (text) - Speed of resync activity"
      },
      {
        "text": "unused_devices",
        "displayText": "unused_devices (text) - Unused devices"
      },
      {
        "text": "other",
        "displayText": "other (text) - Other information associated with array from /proc/mdstat"
      }
    ]
  },
  "md_drives": {
    "text": "md_drives",
    "displayText": "md_drives - Drive devices used for Software RAID.",
    "columns": [
      {
        "text": "md_device_name",
        "displayText": "md_device_name (text) - md device name"
      },
      {
        "text": "drive_name",
        "displayText": "drive_name (text) - Drive device name"
      },
      {
        "text": "slot",
        "displayText": "slot (integer) - Slot position of disk"
      },
      {
        "text": "state",
        "displayText": "state (text) - State of the drive"
      }
    ]
  },
  "md_personalities": {
    "text": "md_personalities",
    "displayText": "md_personalities - Software RAID setting supported by the kernel.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Name of personality supported by kernel"
      }
    ]
  },
  "memory_info": {
    "text": "memory_info",
    "displayText": "memory_info - Main memory information in bytes.",
    "columns": [
      {
        "text": "memory_total",
        "displayText": "memory_total (bigint) - Total amount of physical RAM, in bytes"
      },
      {
        "text": "memory_free",
        "displayText": "memory_free (bigint) - The amount of physical RAM, in bytes, left unused by the system"
      },
      {
        "text": "buffers",
        "displayText": "buffers (bigint) - The amount of physical RAM, in bytes, used for file buffers"
      },
      {
        "text": "cached",
        "displayText": "cached (bigint) - The amount of physical RAM, in bytes, used as cache memory"
      },
      {
        "text": "swap_cached",
        "displayText": "swap_cached (bigint) - The amount of swap, in bytes, used as cache memory"
      },
      {
        "text": "active",
        "displayText": "active (bigint) - The total amount of buffer or page cache memory, in bytes, that is in active use"
      },
      {
        "text": "inactive",
        "displayText": "inactive (bigint) - The total amount of buffer or page cache memory, in bytes, that are free and available"
      },
      {
        "text": "swap_total",
        "displayText": "swap_total (bigint) - The total amount of swap available, in bytes"
      },
      {
        "text": "swap_free",
        "displayText": "swap_free (bigint) - The total amount of swap free, in bytes"
      }
    ]
  },
  "memory_map": {
    "text": "memory_map",
    "displayText": "memory_map - OS memory region map.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Region name"
      },
      {
        "text": "start",
        "displayText": "start (text) - Start address of memory region"
      },
      {
        "text": "end",
        "displayText": "end (text) - End address of memory region"
      }
    ]
  },
  "mounts": {
    "text": "mounts",
    "displayText": "mounts - System mounted devices and filesystems (not process specific).",
    "columns": [
      {
        "text": "device",
        "displayText": "device (text) - Mounted device"
      },
      {
        "text": "device_alias",
        "displayText": "device_alias (text) - Mounted device alias"
      },
      {
        "text": "path",
        "displayText": "path (text) - Mounted device path"
      },
      {
        "text": "type",
        "displayText": "type (text) - Mounted device type"
      },
      {
        "text": "blocks_size",
        "displayText": "blocks_size (bigint) - Block size in bytes"
      },
      {
        "text": "blocks",
        "displayText": "blocks (bigint) - Mounted device used blocks"
      },
      {
        "text": "blocks_free",
        "displayText": "blocks_free (bigint) - Mounted device free blocks"
      },
      {
        "text": "blocks_available",
        "displayText": "blocks_available (bigint) - Mounted device available blocks"
      },
      {
        "text": "inodes",
        "displayText": "inodes (bigint) - Mounted device used inodes"
      },
      {
        "text": "inodes_free",
        "displayText": "inodes_free (bigint) - Mounted device free inodes"
      },
      {
        "text": "flags",
        "displayText": "flags (text) - Mounted device flags"
      }
    ]
  },
  "msr": {
    "text": "msr",
    "displayText": "msr - Various pieces of data stored in the model specific register per processor. NOTE: the msr kernel module must be enabled, and osquery must be run as root.",
    "columns": [
      {
        "text": "processor_number",
        "displayText": "processor_number (bigint) - The processor number as reported in /proc/cpuinfo"
      },
      {
        "text": "turbo_disabled",
        "displayText": "turbo_disabled (bigint) - Whether the turbo feature is disabled."
      },
      {
        "text": "turbo_ratio_limit",
        "displayText": "turbo_ratio_limit (bigint) - The turbo feature ratio limit."
      },
      {
        "text": "platform_info",
        "displayText": "platform_info (bigint) - Platform information."
      },
      {
        "text": "perf_ctl",
        "displayText": "perf_ctl (bigint) - Performance setting for the processor."
      },
      {
        "text": "perf_status",
        "displayText": "perf_status (bigint) - Performance status for the processor."
      },
      {
        "text": "feature_control",
        "displayText": "feature_control (bigint) - Bitfield controling enabled features."
      },
      {
        "text": "rapl_power_limit",
        "displayText": "rapl_power_limit (bigint) - Run Time Average Power Limiting power limit."
      },
      {
        "text": "rapl_energy_status",
        "displayText": "rapl_energy_status (bigint) - Run Time Average Power Limiting energy status."
      },
      {
        "text": "rapl_power_units",
        "displayText": "rapl_power_units (bigint) - Run Time Average Power Limiting power units."
      }
    ]
  },
  "nfs_shares": {
    "text": "nfs_shares",
    "displayText": "nfs_shares - NFS shares exported by the host.",
    "columns": [
      {
        "text": "share",
        "displayText": "share (text) - Filesystem path to the share"
      },
      {
        "text": "options",
        "displayText": "options (text) - Options string set on the export share"
      },
      {
        "text": "readonly",
        "displayText": "readonly (integer) - 1 if the share is exported readonly else 0"
      }
    ]
  },
  "nvram": {
    "text": "nvram",
    "displayText": "nvram - Apple NVRAM variable listing.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Variable name"
      },
      {
        "text": "type",
        "displayText": "type (text) - Data type (CFData, CFString, etc)"
      },
      {
        "text": "value",
        "displayText": "value (text) - Raw variable data"
      }
    ]
  },
  "opera_extensions": {
    "text": "opera_extensions",
    "displayText": "opera_extensions - Opera browser extensions.",
    "columns": [
      {
        "text": "uid",
        "displayText": "uid (bigint) - The local user that owns the extension"
      },
      {
        "text": "name",
        "displayText": "name (text) - Extension display name"
      },
      {
        "text": "identifier",
        "displayText": "identifier (text) - Extension identifier"
      },
      {
        "text": "version",
        "displayText": "version (text) - Extension-supplied version"
      },
      {
        "text": "description",
        "displayText": "description (text) - Extension-optional description"
      },
      {
        "text": "locale",
        "displayText": "locale (text) - Default locale supported by extension"
      },
      {
        "text": "update_url",
        "displayText": "update_url (text) - Extension-supplied update URI"
      },
      {
        "text": "author",
        "displayText": "author (text) - Optional extension author"
      },
      {
        "text": "persistent",
        "displayText": "persistent (integer) - 1 If extension is persistent across all tabs else 0"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path to extension folder"
      }
    ]
  },
  "os_version": {
    "text": "os_version",
    "displayText": "os_version - A single row containing the operating system name and version.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Distribution or product name"
      },
      {
        "text": "version",
        "displayText": "version (text) - Pretty, suitable for presentation, OS version"
      },
      {
        "text": "major",
        "displayText": "major (integer) - Major release version"
      },
      {
        "text": "minor",
        "displayText": "minor (integer) - Minor release version"
      },
      {
        "text": "patch",
        "displayText": "patch (integer) - Optional patch release"
      },
      {
        "text": "build",
        "displayText": "build (text) - Optional build-specific or variant string"
      },
      {
        "text": "platform",
        "displayText": "platform (text) - OS Platform or ID"
      },
      {
        "text": "platform_like",
        "displayText": "platform_like (text) - Closely related platforms"
      },
      {
        "text": "codename",
        "displayText": "codename (text) - OS version codename"
      }
    ]
  },
  "osquery_events": {
    "text": "osquery_events",
    "displayText": "osquery_events - Information about the event publishers and subscribers.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Event publisher or subscriber name"
      },
      {
        "text": "publisher",
        "displayText": "publisher (text) - Name of the associated publisher"
      },
      {
        "text": "type",
        "displayText": "type (text) - Either publisher or subscriber"
      },
      {
        "text": "subscriptions",
        "displayText": "subscriptions (integer) - Number of subscriptions the publisher received or subscriber used"
      },
      {
        "text": "events",
        "displayText": "events (integer) - Number of events emitted or received since osquery started"
      },
      {
        "text": "refreshes",
        "displayText": "refreshes (integer) - Publisher only: number of runloop restarts"
      },
      {
        "text": "active",
        "displayText": "active (integer) - 1 if the publisher or subscriber is active else 0"
      }
    ]
  },
  "osquery_extensions": {
    "text": "osquery_extensions",
    "displayText": "osquery_extensions - List of active osquery extensions.",
    "columns": [
      {
        "text": "uuid",
        "displayText": "uuid (bigint) - The transient ID assigned for communication"
      },
      {
        "text": "name",
        "displayText": "name (text) - Extension's name"
      },
      {
        "text": "version",
        "displayText": "version (text) - Extenion's version"
      },
      {
        "text": "sdk_version",
        "displayText": "sdk_version (text) - osquery SDK version used to build the extension"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path of the extenion's domain socket or library path"
      },
      {
        "text": "type",
        "displayText": "type (text) - SDK extension type: extension or module"
      }
    ]
  },
  "osquery_flags": {
    "text": "osquery_flags",
    "displayText": "osquery_flags - Configurable flags that modify osquery's behavior.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Flag name"
      },
      {
        "text": "type",
        "displayText": "type (text) - Flag type"
      },
      {
        "text": "description",
        "displayText": "description (text) - Flag description"
      },
      {
        "text": "default_value",
        "displayText": "default_value (text) - Flag default value"
      },
      {
        "text": "value",
        "displayText": "value (text) - Flag value"
      },
      {
        "text": "shell_only",
        "displayText": "shell_only (integer) - Is the flag shell only?"
      }
    ]
  },
  "osquery_info": {
    "text": "osquery_info",
    "displayText": "osquery_info - Top level information about the running version of osquery.",
    "columns": [
      {
        "text": "pid",
        "displayText": "pid (integer) - Process (or thread/handle) ID"
      },
      {
        "text": "uuid",
        "displayText": "uuid (text) - Unique ID provided by the system"
      },
      {
        "text": "instance_id",
        "displayText": "instance_id (text) - Unique, long-lived ID per instance of osquery"
      },
      {
        "text": "version",
        "displayText": "version (text) - osquery toolkit version"
      },
      {
        "text": "config_hash",
        "displayText": "config_hash (text) - Hash of the working configuration state"
      },
      {
        "text": "config_valid",
        "displayText": "config_valid (integer) - 1 if the config was loaded and considered valid, else 0"
      },
      {
        "text": "extensions",
        "displayText": "extensions (text) - osquery extensions status"
      },
      {
        "text": "build_platform",
        "displayText": "build_platform (text) - osquery toolkit build platform"
      },
      {
        "text": "build_distro",
        "displayText": "build_distro (text) - osquery toolkit platform distribution name (os version)"
      },
      {
        "text": "start_time",
        "displayText": "start_time (integer) - UNIX time in seconds when the process started"
      },
      {
        "text": "watcher",
        "displayText": "watcher (integer) - Process (or thread/handle) ID of optional watcher process"
      }
    ]
  },
  "osquery_packs": {
    "text": "osquery_packs",
    "displayText": "osquery_packs - Information about the current query packs that are loaded in osquery.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - The given name for this query pack"
      },
      {
        "text": "platform",
        "displayText": "platform (text) - Platforms this query is supported on"
      },
      {
        "text": "version",
        "displayText": "version (text) - Minimum osquery version that this query will run on"
      },
      {
        "text": "shard",
        "displayText": "shard (integer) - Shard restriction limit, 1-100, 0 meaning no restriction"
      },
      {
        "text": "discovery_cache_hits",
        "displayText": "discovery_cache_hits (integer) - The number of times that the discovery query used cached values since the last time the config was reloaded"
      },
      {
        "text": "discovery_executions",
        "displayText": "discovery_executions (integer) - The number of times that the discovery queries have been executed since the last time the config was reloaded"
      },
      {
        "text": "active",
        "displayText": "active (integer) - Whether this pack is active (the version, platform and discovery queries match) yes=1, no=0."
      }
    ]
  },
  "osquery_registry": {
    "text": "osquery_registry",
    "displayText": "osquery_registry - List the osquery registry plugins.",
    "columns": [
      {
        "text": "registry",
        "displayText": "registry (text) - Name of the osquery registry"
      },
      {
        "text": "name",
        "displayText": "name (text) - Name of the plugin item"
      },
      {
        "text": "owner_uuid",
        "displayText": "owner_uuid (integer) - Extension route UUID (0 for core)"
      },
      {
        "text": "internal",
        "displayText": "internal (integer) - 1 If the plugin is internal else 0"
      },
      {
        "text": "active",
        "displayText": "active (integer) - 1 If this plugin is active else 0"
      }
    ]
  },
  "osquery_schedule": {
    "text": "osquery_schedule",
    "displayText": "osquery_schedule - Information about the current queries that are scheduled in osquery.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - The given name for this query"
      },
      {
        "text": "query",
        "displayText": "query (text) - The exact query to run"
      },
      {
        "text": "interval",
        "displayText": "interval (integer) - The interval in seconds to run this query, not an exact interval"
      },
      {
        "text": "executions",
        "displayText": "executions (bigint) - Number of times the query was executed"
      },
      {
        "text": "last_executed",
        "displayText": "last_executed (bigint) - UNIX time stamp in seconds of the last completed execution"
      },
      {
        "text": "blacklisted",
        "displayText": "blacklisted (integer) - 1 if the query is blacklisted else 0"
      },
      {
        "text": "output_size",
        "displayText": "output_size (bigint) - Total number of bytes generated by the query"
      },
      {
        "text": "wall_time",
        "displayText": "wall_time (bigint) - Total wall time spent executing"
      },
      {
        "text": "user_time",
        "displayText": "user_time (bigint) - Total user time spent executing"
      },
      {
        "text": "system_time",
        "displayText": "system_time (bigint) - Total system time spent executing"
      },
      {
        "text": "average_memory",
        "displayText": "average_memory (bigint) - Average private memory left after executing"
      }
    ]
  },
  "package_bom": {
    "text": "package_bom",
    "displayText": "package_bom - OS X package bill of materials (BOM) file list.",
    "columns": [
      {
        "text": "filepath",
        "displayText": "filepath (text) - Package file or directory"
      },
      {
        "text": "uid",
        "displayText": "uid (integer) - Expected user of file or directory"
      },
      {
        "text": "gid",
        "displayText": "gid (integer) - Expected group of file or directory"
      },
      {
        "text": "mode",
        "displayText": "mode (integer) - Expected permissions"
      },
      {
        "text": "size",
        "displayText": "size (bigint) - Expected file size"
      },
      {
        "text": "modified_time",
        "displayText": "modified_time (integer) - Timestamp the file was installed"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path of package bom"
      }
    ]
  },
  "package_install_history": {
    "text": "package_install_history",
    "displayText": "package_install_history - OS X package install history.",
    "columns": [
      {
        "text": "package_id",
        "displayText": "package_id (text) - Label packageIdentifiers"
      },
      {
        "text": "time",
        "displayText": "time (integer) - Label date as UNIX timestamp"
      },
      {
        "text": "name",
        "displayText": "name (text) - Package display name"
      },
      {
        "text": "version",
        "displayText": "version (text) - Package display version"
      },
      {
        "text": "source",
        "displayText": "source (text) - Install source: usually the installer process name"
      },
      {
        "text": "content_type",
        "displayText": "content_type (text) - Package content_type (optional)"
      }
    ]
  },
  "package_receipts": {
    "text": "package_receipts",
    "displayText": "package_receipts - OS X package receipt details.",
    "columns": [
      {
        "text": "package_id",
        "displayText": "package_id (text) - Package domain identifier"
      },
      {
        "text": "package_filename",
        "displayText": "package_filename (text) - Filename of original .pkg file"
      },
      {
        "text": "version",
        "displayText": "version (text) - Installed package version"
      },
      {
        "text": "location",
        "displayText": "location (text) - Optional relative install path on volume"
      },
      {
        "text": "install_time",
        "displayText": "install_time (double) - Timestamp of install time"
      },
      {
        "text": "installer_name",
        "displayText": "installer_name (text) - Name of installer process"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path of receipt plist"
      }
    ]
  },
  "patches": {
    "text": "patches",
    "displayText": "patches - Lists all the patches applied. Note: This does not include patches applied via MSI or downloaded from Windows Update (e.g. Service Packs).",
    "columns": [
      {
        "text": "csname",
        "displayText": "csname (text) - The name of the host the patch is installed on."
      },
      {
        "text": "hotfix_id",
        "displayText": "hotfix_id (text) - The KB ID of the patch."
      },
      {
        "text": "caption",
        "displayText": "caption (text) - Short description of the patch."
      },
      {
        "text": "description",
        "displayText": "description (text) - Fuller description of the patch."
      },
      {
        "text": "fix_comments",
        "displayText": "fix_comments (text) - Additional comments about the patch."
      },
      {
        "text": "installed_by",
        "displayText": "installed_by (text) - The system context in which the patch as installed."
      },
      {
        "text": "install_date",
        "displayText": "install_date (text) - Indicates when the patch was installed. Lack of a value does not indicate that the patch was not installed."
      },
      {
        "text": "installed_on",
        "displayText": "installed_on (text) - The date when the patch was installed."
      }
    ]
  },
  "pci_devices": {
    "text": "pci_devices",
    "displayText": "pci_devices - PCI devices active on the host system.",
    "columns": [
      {
        "text": "pci_slot",
        "displayText": "pci_slot (text) - PCI Device used slot"
      },
      {
        "text": "pci_class",
        "displayText": "pci_class (text) - PCI Device class"
      },
      {
        "text": "driver",
        "displayText": "driver (text) - PCI Device used driver"
      },
      {
        "text": "vendor",
        "displayText": "vendor (text) - PCI Device vendor"
      },
      {
        "text": "vendor_id",
        "displayText": "vendor_id (text) - Hex encoded PCI Device vendor identifier"
      },
      {
        "text": "model",
        "displayText": "model (text) - PCI Device model"
      },
      {
        "text": "model_id",
        "displayText": "model_id (text) - Hex encoded PCI Device model identifier"
      }
    ]
  },
  "physical_disk_performance": {
    "text": "physical_disk_performance",
    "displayText": "physical_disk_performance - Provides provides raw data from performance counters that monitor hard or fixed disk drives on the system.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Name of the physical disk"
      },
      {
        "text": "avg_disk_bytes_per_read",
        "displayText": "avg_disk_bytes_per_read (bigint) - Average number of bytes transferred from the disk during read operations"
      },
      {
        "text": "avg_disk_bytes_per_write",
        "displayText": "avg_disk_bytes_per_write (bigint) - Average number of bytes transferred to the disk during write operations"
      },
      {
        "text": "avg_disk_read_queue_length",
        "displayText": "avg_disk_read_queue_length (bigint) - Average number of read requests that were queued for the selected disk during the sample interval"
      },
      {
        "text": "avg_disk_write_queue_length",
        "displayText": "avg_disk_write_queue_length (bigint) - Average number of write requests that were queued for the selected disk during the sample interval"
      },
      {
        "text": "avg_disk_sec_per_read",
        "displayText": "avg_disk_sec_per_read (integer) - Average time, in seconds, of a read operation of data from the disk"
      },
      {
        "text": "avg_disk_sec_per_write",
        "displayText": "avg_disk_sec_per_write (integer) - Average time, in seconds, of a write operation of data to the disk"
      },
      {
        "text": "current_disk_queue_length",
        "displayText": "current_disk_queue_length (integer) - Number of requests outstanding on the disk at the time the performance data is collected"
      },
      {
        "text": "percent_disk_read_time",
        "displayText": "percent_disk_read_time (bigint) - Percentage of elapsed time that the selected disk drive is busy servicing read requests"
      },
      {
        "text": "percent_disk_write_time",
        "displayText": "percent_disk_write_time (bigint) - Percentage of elapsed time that the selected disk drive is busy servicing write requests"
      },
      {
        "text": "percent_disk_time",
        "displayText": "percent_disk_time (bigint) - Percentage of elapsed time that the selected disk drive is busy servicing read or write requests"
      },
      {
        "text": "percent_idle_time",
        "displayText": "percent_idle_time (bigint) - Percentage of time during the sample interval that the disk was idle"
      }
    ]
  },
  "pipes": {
    "text": "pipes",
    "displayText": "pipes - Named and Anonymous pipes.",
    "columns": [
      {
        "text": "pid",
        "displayText": "pid (bigint) - Process ID of the process to which the pipe belongs"
      },
      {
        "text": "name",
        "displayText": "name (text) - Name of the pipe"
      },
      {
        "text": "instances",
        "displayText": "instances (integer) - Number of instances of the named pipe"
      },
      {
        "text": "max_instances",
        "displayText": "max_instances (integer) - The maximum number of instances creatable for this pipe"
      },
      {
        "text": "flags",
        "displayText": "flags (text) - The flags indicating whether this pipe connection is a server or client end, and if the pipe for sending messages or bytes"
      }
    ]
  },
  "pkg_packages": {
    "text": "pkg_packages",
    "displayText": "pkg_packages - pkgng packages that are currently installed on the host system.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Package name"
      },
      {
        "text": "version",
        "displayText": "version (text) - Package version"
      },
      {
        "text": "flatsize",
        "displayText": "flatsize (bigint) - Package size in bytes"
      },
      {
        "text": "arch",
        "displayText": "arch (text) - Architecture(s) supported"
      }
    ]
  },
  "platform_info": {
    "text": "platform_info",
    "displayText": "platform_info - Information about EFI/UEFI/ROM and platform/boot.",
    "columns": [
      {
        "text": "vendor",
        "displayText": "vendor (text) - Platform code vendor"
      },
      {
        "text": "version",
        "displayText": "version (text) - Platform code version"
      },
      {
        "text": "date",
        "displayText": "date (text) - Self-reported platform code update date"
      },
      {
        "text": "revision",
        "displayText": "revision (text) - BIOS major and minor revision"
      },
      {
        "text": "address",
        "displayText": "address (text) - Relative address of firmware mapping"
      },
      {
        "text": "size",
        "displayText": "size (text) - Size in bytes of firmware"
      },
      {
        "text": "volume_size",
        "displayText": "volume_size (integer) - (Optional) size of firmware volume"
      },
      {
        "text": "extra",
        "displayText": "extra (text) - Platform-specific additional information"
      }
    ]
  },
  "plist": {
    "text": "plist",
    "displayText": "plist - Read and parse a plist file.",
    "columns": [
      {
        "text": "key",
        "displayText": "key (text) - Preference top-level key"
      },
      {
        "text": "subkey",
        "displayText": "subkey (text) - Intemediate key path, includes lists/dicts"
      },
      {
        "text": "value",
        "displayText": "value (text) - String value of most CF types"
      },
      {
        "text": "path",
        "displayText": "path (text) - (optional) read preferences from a plist"
      }
    ]
  },
  "portage_keywords": {
    "text": "portage_keywords",
    "displayText": "portage_keywords - A summary about portage configurations like keywords, mask and unmask.",
    "columns": [
      {
        "text": "package",
        "displayText": "package (text) - Package name"
      },
      {
        "text": "version",
        "displayText": "version (text) - The version which are affected by the use flags, empty means all"
      },
      {
        "text": "keyword",
        "displayText": "keyword (text) - The keyword applied to the package"
      },
      {
        "text": "mask",
        "displayText": "mask (integer) - If the package is masked"
      },
      {
        "text": "unmask",
        "displayText": "unmask (integer) - If the package is unmasked"
      }
    ]
  },
  "portage_packages": {
    "text": "portage_packages",
    "displayText": "portage_packages - List of currently installed packages.",
    "columns": [
      {
        "text": "package",
        "displayText": "package (text) - Package name"
      },
      {
        "text": "version",
        "displayText": "version (text) - The version which are affected by the use flags, empty means all"
      },
      {
        "text": "slot",
        "displayText": "slot (text) - The slot used by package"
      },
      {
        "text": "build_time",
        "displayText": "build_time (bigint) - Unix time when package was built"
      },
      {
        "text": "repository",
        "displayText": "repository (text) - From which repository the ebuild was used"
      },
      {
        "text": "eapi",
        "displayText": "eapi (bigint) - The eapi for the ebuild"
      },
      {
        "text": "size",
        "displayText": "size (bigint) - The size of the package"
      },
      {
        "text": "world",
        "displayText": "world (integer) - If package is in the world file"
      }
    ]
  },
  "portage_use": {
    "text": "portage_use",
    "displayText": "portage_use - List of enabled portage USE values for specific package.",
    "columns": [
      {
        "text": "package",
        "displayText": "package (text) - Package name"
      },
      {
        "text": "version",
        "displayText": "version (text) - The version of the installed package"
      },
      {
        "text": "use",
        "displayText": "use (text) - USE flag which has been enabled for package"
      }
    ]
  },
  "power_sensors": {
    "text": "power_sensors",
    "displayText": "power_sensors - Machine power (currents, voltages, wattages, etc) sensors.",
    "columns": [
      {
        "text": "key",
        "displayText": "key (text) - The SMC key on OS X"
      },
      {
        "text": "category",
        "displayText": "category (text) - The sensor category: currents, voltage, wattage"
      },
      {
        "text": "name",
        "displayText": "name (text) - Name of power source"
      },
      {
        "text": "value",
        "displayText": "value (text) - Power in Watts"
      }
    ]
  },
  "preferences": {
    "text": "preferences",
    "displayText": "preferences - OS X defaults and managed preferences.",
    "columns": [
      {
        "text": "domain",
        "displayText": "domain (text) - Application ID usually in com.name.product format"
      },
      {
        "text": "key",
        "displayText": "key (text) - Preference top-level key"
      },
      {
        "text": "subkey",
        "displayText": "subkey (text) - Intemediate key path, includes lists/dicts"
      },
      {
        "text": "value",
        "displayText": "value (text) - String value of most CF types"
      },
      {
        "text": "forced",
        "displayText": "forced (integer) - 1 if the value is forced/managed, else 0"
      },
      {
        "text": "username",
        "displayText": "username (text) - (optional) read preferences for a specific user"
      },
      {
        "text": "host",
        "displayText": "host (text) - 'current' or 'any' host, where 'current' takes precedence"
      }
    ]
  },
  "process_envs": {
    "text": "process_envs",
    "displayText": "process_envs - A key/value table of environment variables for each process.",
    "columns": [
      {
        "text": "pid",
        "displayText": "pid (integer) - Process (or thread) ID"
      },
      {
        "text": "key",
        "displayText": "key (text) - Environment variable name"
      },
      {
        "text": "value",
        "displayText": "value (text) - Environment variable value"
      }
    ]
  },
  "process_events": {
    "text": "process_events",
    "displayText": "process_events - Track time/action process executions.",
    "columns": [
      {
        "text": "pid",
        "displayText": "pid (bigint) - Process (or thread) ID"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path of executed file"
      },
      {
        "text": "mode",
        "displayText": "mode (text) - File mode permissions"
      },
      {
        "text": "cmdline",
        "displayText": "cmdline (text) - Command line arguments (argv)"
      },
      {
        "text": "cmdline_size",
        "displayText": "cmdline_size (bigint) - Actual size (bytes) of command line arguments"
      },
      {
        "text": "env",
        "displayText": "env (text) - Environment variables delimited by spaces"
      },
      {
        "text": "env_count",
        "displayText": "env_count (bigint) - Number of environment variables"
      },
      {
        "text": "env_size",
        "displayText": "env_size (bigint) - Actual size (bytes) of environment list"
      },
      {
        "text": "cwd",
        "displayText": "cwd (text) - The process current working directory"
      },
      {
        "text": "auid",
        "displayText": "auid (bigint) - Audit User ID at process start"
      },
      {
        "text": "uid",
        "displayText": "uid (bigint) - User ID at process start"
      },
      {
        "text": "euid",
        "displayText": "euid (bigint) - Effective user ID at process start"
      },
      {
        "text": "gid",
        "displayText": "gid (bigint) - Group ID at process start"
      },
      {
        "text": "egid",
        "displayText": "egid (bigint) - Effective group ID at process start"
      },
      {
        "text": "owner_uid",
        "displayText": "owner_uid (bigint) - File owner user ID"
      },
      {
        "text": "owner_gid",
        "displayText": "owner_gid (bigint) - File owner group ID"
      },
      {
        "text": "atime",
        "displayText": "atime (bigint) - File last access in UNIX time"
      },
      {
        "text": "mtime",
        "displayText": "mtime (bigint) - File modification in UNIX time"
      },
      {
        "text": "ctime",
        "displayText": "ctime (bigint) - File last metadata change in UNIX time"
      },
      {
        "text": "btime",
        "displayText": "btime (bigint) - File creation in UNIX time"
      },
      {
        "text": "overflows",
        "displayText": "overflows (text) - List of structures that overflowed"
      },
      {
        "text": "parent",
        "displayText": "parent (bigint) - Process parent's PID"
      },
      {
        "text": "time",
        "displayText": "time (bigint) - Time of execution in UNIX time"
      },
      {
        "text": "uptime",
        "displayText": "uptime (bigint) - Time of execution in system uptime"
      },
      {
        "text": "status",
        "displayText": "status (bigint) - OpenBSM Attribute: Status of the process"
      },
      {
        "text": "eid",
        "displayText": "eid (text) - Event ID"
      }
    ]
  },
  "process_file_events": {
    "text": "process_file_events",
    "displayText": "process_file_events - Process file events (open and close) from kernel extension.",
    "columns": [
      {
        "text": "action",
        "displayText": "action (text) - The action taken on the file (OPEN, CLOSED, or CLOSED_MODIFIED)"
      },
      {
        "text": "pid",
        "displayText": "pid (bigint) - Process ID of the process using the file"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path of file"
      },
      {
        "text": "parent",
        "displayText": "parent (bigint) - Parent process ID of the process using the file"
      },
      {
        "text": "uid",
        "displayText": "uid (bigint) - Real user ID of the user process using the file"
      },
      {
        "text": "euid",
        "displayText": "euid (bigint) - Effective user ID of the process using the file"
      },
      {
        "text": "gid",
        "displayText": "gid (bigint) - Real group ID of the process using the file"
      },
      {
        "text": "egid",
        "displayText": "egid (bigint) - Effective group ID of the processs using the file"
      },
      {
        "text": "mode",
        "displayText": "mode (bigint) - Indicates the mode of the file"
      },
      {
        "text": "owner_uid",
        "displayText": "owner_uid (bigint) - User ID of the owner of the file"
      },
      {
        "text": "owner_gid",
        "displayText": "owner_gid (bigint) - Group ID of the owner of the file"
      },
      {
        "text": "atime",
        "displayText": "atime (bigint) - Time of last access in UNIX epoch time"
      },
      {
        "text": "mtime",
        "displayText": "mtime (bigint) - Time of last modification in UNIX epoch time"
      },
      {
        "text": "ctime",
        "displayText": "ctime (bigint) - Time of last status change"
      },
      {
        "text": "time",
        "displayText": "time (bigint) - Time of event in UNIX epoch time"
      },
      {
        "text": "uptime",
        "displayText": "uptime (bigint) - Time of event in system uptime"
      },
      {
        "text": "eid",
        "displayText": "eid (text) - Event ID"
      }
    ]
  },
  "process_memory_map": {
    "text": "process_memory_map",
    "displayText": "process_memory_map - Process memory mapped files and pseudo device/regions.",
    "columns": [
      {
        "text": "pid",
        "displayText": "pid (integer) - Process (or thread) ID"
      },
      {
        "text": "start",
        "displayText": "start (text) - Virtual start address (hex)"
      },
      {
        "text": "end",
        "displayText": "end (text) - Virtual end address (hex)"
      },
      {
        "text": "permissions",
        "displayText": "permissions (text) - r=read, w=write, x=execute, p=private (cow)"
      },
      {
        "text": "offset",
        "displayText": "offset (bigint) - Offset into mapped path"
      },
      {
        "text": "device",
        "displayText": "device (text) - MA:MI Major/minor device ID"
      },
      {
        "text": "inode",
        "displayText": "inode (integer) - Mapped path inode, 0 means uninitialized (BSS)"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path to mapped file or mapped type"
      },
      {
        "text": "pseudo",
        "displayText": "pseudo (integer) - 1 If path is a pseudo path, else 0"
      }
    ]
  },
  "process_open_files": {
    "text": "process_open_files",
    "displayText": "process_open_files - File descriptors for each process.",
    "columns": [
      {
        "text": "pid",
        "displayText": "pid (bigint) - Process (or thread) ID"
      },
      {
        "text": "fd",
        "displayText": "fd (bigint) - Process-specific file descriptor number"
      },
      {
        "text": "path",
        "displayText": "path (text) - Filesystem path of descriptor"
      }
    ]
  },
  "process_open_sockets": {
    "text": "process_open_sockets",
    "displayText": "process_open_sockets - Processes which have open network sockets on the system.",
    "columns": [
      {
        "text": "pid",
        "displayText": "pid (integer) - Process (or thread) ID"
      },
      {
        "text": "fd",
        "displayText": "fd (bigint) - Socket file descriptor number"
      },
      {
        "text": "socket",
        "displayText": "socket (bigint) - Socket handle or inode number"
      },
      {
        "text": "family",
        "displayText": "family (integer) - Network protocol (IPv4, IPv6)"
      },
      {
        "text": "protocol",
        "displayText": "protocol (integer) - Transport protocol (TCP/UDP)"
      },
      {
        "text": "local_address",
        "displayText": "local_address (text) - Socket local address"
      },
      {
        "text": "remote_address",
        "displayText": "remote_address (text) - Socket remote address"
      },
      {
        "text": "local_port",
        "displayText": "local_port (integer) - Socket local port"
      },
      {
        "text": "remote_port",
        "displayText": "remote_port (integer) - Socket remote port"
      },
      {
        "text": "path",
        "displayText": "path (text) - For UNIX sockets (family=AF_UNIX), the domain path"
      }
    ]
  },
  "processes": {
    "text": "processes",
    "displayText": "processes - All running processes on the host system.",
    "columns": [
      {
        "text": "pid",
        "displayText": "pid (bigint) - Process (or thread) ID"
      },
      {
        "text": "name",
        "displayText": "name (text) - The process path or shorthand argv[0]"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path to executed binary"
      },
      {
        "text": "cmdline",
        "displayText": "cmdline (text) - Complete argv"
      },
      {
        "text": "state",
        "displayText": "state (text) - Process state"
      },
      {
        "text": "cwd",
        "displayText": "cwd (text) - Process current working directory"
      },
      {
        "text": "root",
        "displayText": "root (text) - Process virtual root directory"
      },
      {
        "text": "uid",
        "displayText": "uid (bigint) - Unsigned user ID"
      },
      {
        "text": "gid",
        "displayText": "gid (bigint) - Unsigned group ID"
      },
      {
        "text": "euid",
        "displayText": "euid (bigint) - Unsigned effective user ID"
      },
      {
        "text": "egid",
        "displayText": "egid (bigint) - Unsigned effective group ID"
      },
      {
        "text": "suid",
        "displayText": "suid (bigint) - Unsigned saved user ID"
      },
      {
        "text": "sgid",
        "displayText": "sgid (bigint) - Unsigned saved group ID"
      },
      {
        "text": "on_disk",
        "displayText": "on_disk (integer) - The process path exists yes=1, no=0, unknown=-1"
      },
      {
        "text": "wired_size",
        "displayText": "wired_size (bigint) - Bytes of unpagable memory used by process"
      },
      {
        "text": "resident_size",
        "displayText": "resident_size (bigint) - Bytes of private memory used by process"
      },
      {
        "text": "total_size",
        "displayText": "total_size (bigint) - Total virtual memory size"
      },
      {
        "text": "user_time",
        "displayText": "user_time (bigint) - CPU time spent in user space"
      },
      {
        "text": "system_time",
        "displayText": "system_time (bigint) - CPU time spent in kernel space"
      },
      {
        "text": "start_time",
        "displayText": "start_time (bigint) - Process start in seconds since boot (non-sleeping)"
      },
      {
        "text": "parent",
        "displayText": "parent (bigint) - Process parent's PID"
      },
      {
        "text": "pgroup",
        "displayText": "pgroup (bigint) - Process group"
      },
      {
        "text": "threads",
        "displayText": "threads (integer) - Number of threads used by process"
      },
      {
        "text": "nice",
        "displayText": "nice (integer) - Process nice level (-20 to 20, default 0)"
      }
    ]
  },
  "programs": {
    "text": "programs",
    "displayText": "programs - Represents products as they are installed by Windows Installer. A product generally correlates to one installation package on Windows. Some fields may be blank as Windows installation details are left to the discretion of the product author.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Commonly used product name."
      },
      {
        "text": "version",
        "displayText": "version (text) - Product version information."
      },
      {
        "text": "install_location",
        "displayText": "install_location (text) - The installation location directory of the product."
      },
      {
        "text": "install_source",
        "displayText": "install_source (text) - The installation source of the product."
      },
      {
        "text": "language",
        "displayText": "language (text) - The language of the product."
      },
      {
        "text": "publisher",
        "displayText": "publisher (text) - Name of the product supplier."
      },
      {
        "text": "uninstall_string",
        "displayText": "uninstall_string (text) - Path and filename of the uninstaller."
      },
      {
        "text": "install_date",
        "displayText": "install_date (text) - Date that this product was installed on the system. "
      },
      {
        "text": "identifying_number",
        "displayText": "identifying_number (text) - Product identification such as a serial number on software, or a die number on a hardware chip."
      }
    ]
  },
  "prometheus_metrics": {
    "text": "prometheus_metrics",
    "displayText": "prometheus_metrics - Network interfaces and relevant metadata.",
    "columns": [
      {
        "text": "target_name",
        "displayText": "target_name (text) - Address of prometheus target"
      },
      {
        "text": "metric_name",
        "displayText": "metric_name (text) - Name of collected Prometheus metric"
      },
      {
        "text": "metric_value",
        "displayText": "metric_value (double) - Value of collected Prometheus metric"
      },
      {
        "text": "timestamp_ms",
        "displayText": "timestamp_ms (bigint) - Unix timestamp of collected data in MS"
      }
    ]
  },
  "python_packages": {
    "text": "python_packages",
    "displayText": "python_packages - Python packages installed in a system.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Package display name"
      },
      {
        "text": "version",
        "displayText": "version (text) - Package-supplied version"
      },
      {
        "text": "summary",
        "displayText": "summary (text) - Package-supplied summary"
      },
      {
        "text": "author",
        "displayText": "author (text) - Optional package author"
      },
      {
        "text": "license",
        "displayText": "license (text) - License under which package is launched"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path at which this module resides"
      }
    ]
  },
  "quicklook_cache": {
    "text": "quicklook_cache",
    "displayText": "quicklook_cache - Files and thumbnails within OS X's Quicklook Cache.",
    "columns": [
      {
        "text": "path",
        "displayText": "path (text) - Path of file"
      },
      {
        "text": "rowid",
        "displayText": "rowid (integer) - Quicklook file rowid key"
      },
      {
        "text": "fs_id",
        "displayText": "fs_id (text) - Quicklook file fs_id key"
      },
      {
        "text": "volume_id",
        "displayText": "volume_id (integer) - Parsed volume ID from fs_id"
      },
      {
        "text": "inode",
        "displayText": "inode (integer) - Parsed file ID (inode) from fs_id"
      },
      {
        "text": "mtime",
        "displayText": "mtime (integer) - Parsed version date field"
      },
      {
        "text": "size",
        "displayText": "size (bigint) - Parsed version size field"
      },
      {
        "text": "label",
        "displayText": "label (text) - Parsed version 'gen' field"
      },
      {
        "text": "last_hit_date",
        "displayText": "last_hit_date (integer) - Apple date format for last thumbnail cache hit"
      },
      {
        "text": "hit_count",
        "displayText": "hit_count (text) - Number of cache hits on thumbnail"
      },
      {
        "text": "icon_mode",
        "displayText": "icon_mode (bigint) - Thumbnail icon mode"
      },
      {
        "text": "cache_path",
        "displayText": "cache_path (text) - Path to cache data"
      }
    ]
  },
  "registry": {
    "text": "registry",
    "displayText": "registry - All of the Windows registry hives.",
    "columns": [
      {
        "text": "key",
        "displayText": "key (text) - Name of the key to search for"
      },
      {
        "text": "path",
        "displayText": "path (text) - Full path to the value"
      },
      {
        "text": "name",
        "displayText": "name (text) - Name of the registry value entry"
      },
      {
        "text": "type",
        "displayText": "type (text) - Type of the registry value, or 'subkey' if item is a subkey"
      },
      {
        "text": "data",
        "displayText": "data (text) - Data content of registry value"
      },
      {
        "text": "mtime",
        "displayText": "mtime (bigint) - timestamp of the most recent registry write"
      }
    ]
  },
  "routes": {
    "text": "routes",
    "displayText": "routes - The active route table for the host system.",
    "columns": [
      {
        "text": "destination",
        "displayText": "destination (text) - Destination IP address"
      },
      {
        "text": "netmask",
        "displayText": "netmask (text) - Netmask length"
      },
      {
        "text": "gateway",
        "displayText": "gateway (text) - Route gateway"
      },
      {
        "text": "source",
        "displayText": "source (text) - Route source"
      },
      {
        "text": "flags",
        "displayText": "flags (integer) - Flags to describe route"
      },
      {
        "text": "interface",
        "displayText": "interface (text) - Route local interface"
      },
      {
        "text": "mtu",
        "displayText": "mtu (integer) - Maximum Transmission Unit for the route"
      },
      {
        "text": "metric",
        "displayText": "metric (integer) - Cost of route. Lowest is preferred"
      },
      {
        "text": "type",
        "displayText": "type (text) - Type of route"
      }
    ]
  },
  "rpm_package_files": {
    "text": "rpm_package_files",
    "displayText": "rpm_package_files - RPM packages that are currently installed on the host system.",
    "columns": [
      {
        "text": "package",
        "displayText": "package (text) - RPM package name"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path name"
      },
      {
        "text": "username",
        "displayText": "username (text) - File default username from info DB"
      },
      {
        "text": "groupname",
        "displayText": "groupname (text) - File default groupname from info DB"
      },
      {
        "text": "mode",
        "displayText": "mode (text) - File permissions mode from info DB"
      },
      {
        "text": "size",
        "displayText": "size (bigint) - Expected file size in bytes from RPM info DB"
      },
      {
        "text": "sha256",
        "displayText": "sha256 (text) - SHA256 file digest from RPM info DB"
      }
    ]
  },
  "rpm_packages": {
    "text": "rpm_packages",
    "displayText": "rpm_packages - RPM packages that are currently installed on the host system.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - RPM package name"
      },
      {
        "text": "version",
        "displayText": "version (text) - Package version"
      },
      {
        "text": "release",
        "displayText": "release (text) - Package release"
      },
      {
        "text": "source",
        "displayText": "source (text) - Source RPM package name (optional)"
      },
      {
        "text": "size",
        "displayText": "size (bigint) - Package size in bytes"
      },
      {
        "text": "sha1",
        "displayText": "sha1 (text) - SHA1 hash of the package contents"
      },
      {
        "text": "arch",
        "displayText": "arch (text) - Architecture(s) supported"
      }
    ]
  },
  "safari_extensions": {
    "text": "safari_extensions",
    "displayText": "safari_extensions - Safari browser extension details for all users.",
    "columns": [
      {
        "text": "uid",
        "displayText": "uid (bigint) - The local user that owns the extension"
      },
      {
        "text": "name",
        "displayText": "name (text) - Extension display name"
      },
      {
        "text": "identifier",
        "displayText": "identifier (text) - Extension identifier"
      },
      {
        "text": "version",
        "displayText": "version (text) - Extension long version"
      },
      {
        "text": "sdk",
        "displayText": "sdk (text) - Bundle SDK used to compile extension"
      },
      {
        "text": "update_url",
        "displayText": "update_url (text) - Extension-supplied update URI"
      },
      {
        "text": "author",
        "displayText": "author (text) - Optional extension author"
      },
      {
        "text": "developer_id",
        "displayText": "developer_id (text) - Optional developer identifier"
      },
      {
        "text": "description",
        "displayText": "description (text) - Optional extension description text"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path to extension XAR bundle"
      }
    ]
  },
  "sandboxes": {
    "text": "sandboxes",
    "displayText": "sandboxes - OS X application sandboxes container details.",
    "columns": [
      {
        "text": "label",
        "displayText": "label (text) - UTI-format bundle or label ID"
      },
      {
        "text": "user",
        "displayText": "user (text) - Sandbox owner"
      },
      {
        "text": "enabled",
        "displayText": "enabled (integer) - Application sandboxings enabled on container"
      },
      {
        "text": "build_id",
        "displayText": "build_id (text) - Sandbox-specific identifier"
      },
      {
        "text": "bundle_path",
        "displayText": "bundle_path (text) - Application bundle used by the sandbox"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path to sandbox container directory"
      }
    ]
  },
  "scheduled_tasks": {
    "text": "scheduled_tasks",
    "displayText": "scheduled_tasks - Lists all of the tasks in the Windows task scheduler.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Name of the scheduled task"
      },
      {
        "text": "action",
        "displayText": "action (text) - Actions executed by the scheduled task"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path to the executable to be run"
      },
      {
        "text": "enabled",
        "displayText": "enabled (integer) - Whether or not the scheduled task is enabled"
      },
      {
        "text": "state",
        "displayText": "state (text) - State of the scheduled task"
      },
      {
        "text": "hidden",
        "displayText": "hidden (integer) - Whether or not the task is visible in the UI"
      },
      {
        "text": "last_run_time",
        "displayText": "last_run_time (integer) - Timestamp the task last ran"
      },
      {
        "text": "next_run_time",
        "displayText": "next_run_time (integer) - Timestamp the task is scheduled to run next"
      },
      {
        "text": "last_run_message",
        "displayText": "last_run_message (text) - Exit status message of the last task run"
      },
      {
        "text": "last_run_code",
        "displayText": "last_run_code (text) - Exit status code of the last task run"
      }
    ]
  },
  "services": {
    "text": "services",
    "displayText": "services - Lists all installed Windows services and their relevant data.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Service name"
      },
      {
        "text": "service_type",
        "displayText": "service_type (text) - Service Type: OWN_PROCESS, SHARE_PROCESS and maybe Interactive (can interact with the desktop)"
      },
      {
        "text": "display_name",
        "displayText": "display_name (text) - Service Display name"
      },
      {
        "text": "status",
        "displayText": "status (text) - Service Current status: STOPPED, START_PENDING, STOP_PENDING, RUNNING, CONTINUE_PENDING, PAUSE_PENDING, PAUSED"
      },
      {
        "text": "pid",
        "displayText": "pid (integer) - the Process ID of the service"
      },
      {
        "text": "start_type",
        "displayText": "start_type (text) - Service start type: BOOT_START, SYSTEM_START, AUTO_START, DEMAND_START, DISABLED"
      },
      {
        "text": "win32_exit_code",
        "displayText": "win32_exit_code (integer) - The error code that the service uses to report an error that occurs when it is starting or stopping"
      },
      {
        "text": "service_exit_code",
        "displayText": "service_exit_code (integer) - The service-specific error code that the service returns when an error occurs while the service is starting or stopping"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path to Service Executable"
      },
      {
        "text": "module_path",
        "displayText": "module_path (text) - Path to ServiceDll"
      },
      {
        "text": "description",
        "displayText": "description (text) - Service Description"
      },
      {
        "text": "user_account",
        "displayText": "user_account (text) - The name of the account that the service process will be logged on as when it runs. This name can be of the form Domain\\UserName. If the account belongs to the built-in domain, the name can be of the form .\\UserName."
      }
    ]
  },
  "shadow": {
    "text": "shadow",
    "displayText": "shadow - Local system users encrypted passwords and related information.",
    "columns": [
      {
        "text": "password_status",
        "displayText": "password_status (text) - Password status"
      },
      {
        "text": "hash_alg",
        "displayText": "hash_alg (text) - Password hashing algorithm"
      },
      {
        "text": "last_change",
        "displayText": "last_change (bigint) - Date of last password change (starting from UNIX epoch date)"
      },
      {
        "text": "min",
        "displayText": "min (bigint) - Minimal number of days between password changes"
      },
      {
        "text": "max",
        "displayText": "max (bigint) - Maximum number of days between password changes"
      },
      {
        "text": "warning",
        "displayText": "warning (bigint) - Number of days before password expires to warn user about it"
      },
      {
        "text": "inactive",
        "displayText": "inactive (bigint) - Number of days after password expires until account is blocked"
      },
      {
        "text": "expire",
        "displayText": "expire (bigint) - Number of days since UNIX epoch date until account is disabled"
      },
      {
        "text": "flag",
        "displayText": "flag (bigint) - Reserved"
      },
      {
        "text": "username",
        "displayText": "username (text) - Username"
      }
    ]
  },
  "shared_folders": {
    "text": "shared_folders",
    "displayText": "shared_folders - Folders available to others via SMB or AFP.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - The shared name of the folder as it appears to other users"
      },
      {
        "text": "path",
        "displayText": "path (text) - Absolute path of shared folder on the local system"
      }
    ]
  },
  "shared_memory": {
    "text": "shared_memory",
    "displayText": "shared_memory - OS shared memory regions.",
    "columns": [
      {
        "text": "shmid",
        "displayText": "shmid (integer) - Shared memory segment ID"
      },
      {
        "text": "owner_uid",
        "displayText": "owner_uid (bigint) - User ID of owning process"
      },
      {
        "text": "creator_uid",
        "displayText": "creator_uid (bigint) - User ID of creator process"
      },
      {
        "text": "pid",
        "displayText": "pid (bigint) - Process ID to last use the segment"
      },
      {
        "text": "creator_pid",
        "displayText": "creator_pid (bigint) - Process ID that created the segment"
      },
      {
        "text": "atime",
        "displayText": "atime (bigint) - Attached time"
      },
      {
        "text": "dtime",
        "displayText": "dtime (bigint) - Detached time"
      },
      {
        "text": "ctime",
        "displayText": "ctime (bigint) - Changed time"
      },
      {
        "text": "permissions",
        "displayText": "permissions (text) - Memory segment permissions"
      },
      {
        "text": "size",
        "displayText": "size (bigint) - Size in bytes"
      },
      {
        "text": "attached",
        "displayText": "attached (integer) - Number of attached processes"
      },
      {
        "text": "status",
        "displayText": "status (text) - Destination/attach status"
      },
      {
        "text": "locked",
        "displayText": "locked (integer) - 1 if segment is locked else 0"
      }
    ]
  },
  "shared_resources": {
    "text": "shared_resources",
    "displayText": "shared_resources - Displays shared resources on a computer system running Windows. This may be a disk drive, printer, interprocess communication, or other sharable device.",
    "columns": [
      {
        "text": "description",
        "displayText": "description (text) - A textual description of the object"
      },
      {
        "text": "install_date",
        "displayText": "install_date (text) - Indicates when the object was installed. Lack of a value does not indicate that the object is not installed."
      },
      {
        "text": "status",
        "displayText": "status (text) - String that indicates the current status of the object."
      },
      {
        "text": "allow_maximum",
        "displayText": "allow_maximum (integer) - Number of concurrent users for this resource has been limited. If True, the value in the MaximumAllowed property is ignored."
      },
      {
        "text": "maximum_allowed",
        "displayText": "maximum_allowed (integer) - Limit on the maximum number of users allowed to use this resource concurrently. The value is only valid if the AllowMaximum property is set to FALSE."
      },
      {
        "text": "name",
        "displayText": "name (text) - Alias given to a path set up as a share on a computer system running Windows."
      },
      {
        "text": "path",
        "displayText": "path (text) - Local path of the Windows share."
      },
      {
        "text": "type",
        "displayText": "type (integer) - Type of resource being shared. Types include: disk drives, print queues, interprocess communications (IPC), and general devices."
      }
    ]
  },
  "sharing_preferences": {
    "text": "sharing_preferences",
    "displayText": "sharing_preferences - OS X Sharing preferences.",
    "columns": [
      {
        "text": "screen_sharing",
        "displayText": "screen_sharing (integer) - 1 If screen sharing is enabled else 0"
      },
      {
        "text": "file_sharing",
        "displayText": "file_sharing (integer) - 1 If file sharing is enabled else 0"
      },
      {
        "text": "printer_sharing",
        "displayText": "printer_sharing (integer) - 1 If printer sharing is enabled else 0"
      },
      {
        "text": "remote_login",
        "displayText": "remote_login (integer) - 1 If remote login is enabled else 0"
      },
      {
        "text": "remote_management",
        "displayText": "remote_management (integer) - 1 If remote management is enabled else 0"
      },
      {
        "text": "remote_apple_events",
        "displayText": "remote_apple_events (integer) - 1 If remote apple events are enabled else 0"
      },
      {
        "text": "internet_sharing",
        "displayText": "internet_sharing (integer) - 1 If internet sharing is enabled else 0"
      },
      {
        "text": "bluetooth_sharing",
        "displayText": "bluetooth_sharing (integer) - 1 If bluetooth sharing is enabled for any user else 0"
      },
      {
        "text": "disc_sharing",
        "displayText": "disc_sharing (integer) - 1 If CD or DVD sharing is enabled else 0"
      }
    ]
  },
  "shell_history": {
    "text": "shell_history",
    "displayText": "shell_history - A line-delimited (command) table of per-user .*_history data.",
    "columns": [
      {
        "text": "uid",
        "displayText": "uid (bigint) - Shell history owner"
      },
      {
        "text": "time",
        "displayText": "time (integer) - Entry timestamp"
      },
      {
        "text": "command",
        "displayText": "command (text) - Unparsed date/line/command history line"
      },
      {
        "text": "history_file",
        "displayText": "history_file (text) - Path to the .*_history for this user"
      }
    ]
  },
  "signature": {
    "text": "signature",
    "displayText": "signature - File (executable, bundle, installer, disk) code signing status.",
    "columns": [
      {
        "text": "path",
        "displayText": "path (text) - Must provide a path or directory"
      },
      {
        "text": "signed",
        "displayText": "signed (integer) - 1 If the file is signed else 0"
      },
      {
        "text": "identifier",
        "displayText": "identifier (text) - The signing identifier sealed into the signature"
      },
      {
        "text": "cdhash",
        "displayText": "cdhash (text) - SHA1 hash of the application Code Directory"
      },
      {
        "text": "team_identifier",
        "displayText": "team_identifier (text) - The team signing identifier sealed into the signature"
      },
      {
        "text": "authority",
        "displayText": "authority (text) - Certificate Common Name"
      }
    ]
  },
  "sip_config": {
    "text": "sip_config",
    "displayText": "sip_config - Apple's System Integrity Protection (rootless) status.",
    "columns": [
      {
        "text": "config_flag",
        "displayText": "config_flag (text) - The System Integrity Protection config flag"
      },
      {
        "text": "enabled",
        "displayText": "enabled (integer) - 1 if this configuration is enabled, otherwise 0"
      },
      {
        "text": "enabled_nvram",
        "displayText": "enabled_nvram (integer) - 1 if this configuration is enabled, otherwise 0"
      }
    ]
  },
  "smbios_tables": {
    "text": "smbios_tables",
    "displayText": "smbios_tables - BIOS (DMI) structure common details and content.",
    "columns": [
      {
        "text": "number",
        "displayText": "number (integer) - Table entry number"
      },
      {
        "text": "type",
        "displayText": "type (integer) - Table entry type"
      },
      {
        "text": "description",
        "displayText": "description (text) - Table entry description"
      },
      {
        "text": "handle",
        "displayText": "handle (integer) - Table entry handle"
      },
      {
        "text": "header_size",
        "displayText": "header_size (integer) - Header size in bytes"
      },
      {
        "text": "size",
        "displayText": "size (integer) - Table entry size in bytes"
      },
      {
        "text": "md5",
        "displayText": "md5 (text) - MD5 hash of table entry"
      }
    ]
  },
  "smc_keys": {
    "text": "smc_keys",
    "displayText": "smc_keys - Apple's system management controller keys.",
    "columns": [
      {
        "text": "key",
        "displayText": "key (text) - 4-character key"
      },
      {
        "text": "type",
        "displayText": "type (text) - SMC-reported type literal type"
      },
      {
        "text": "size",
        "displayText": "size (integer) - Reported size of data in bytes"
      },
      {
        "text": "value",
        "displayText": "value (text) - A type-encoded representation of the key value"
      },
      {
        "text": "hidden",
        "displayText": "hidden (integer) - 1 if this key is normally hidden, otherwise 0"
      }
    ]
  },
  "socket_events": {
    "text": "socket_events",
    "displayText": "socket_events - Track network socket opens and closes.",
    "columns": [
      {
        "text": "action",
        "displayText": "action (text) - The socket action (bind, listen, close)"
      },
      {
        "text": "pid",
        "displayText": "pid (bigint) - Process (or thread) ID"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path of executed file"
      },
      {
        "text": "fd",
        "displayText": "fd (text) - The file description for the process socket"
      },
      {
        "text": "auid",
        "displayText": "auid (bigint) - Audit User ID"
      },
      {
        "text": "success",
        "displayText": "success (integer) - The socket open attempt status"
      },
      {
        "text": "family",
        "displayText": "family (integer) - The Internet protocol family ID"
      },
      {
        "text": "protocol",
        "displayText": "protocol (integer) - The network protocol ID"
      },
      {
        "text": "local_address",
        "displayText": "local_address (text) - Local address associated with socket"
      },
      {
        "text": "remote_address",
        "displayText": "remote_address (text) - Remote address associated with socket"
      },
      {
        "text": "local_port",
        "displayText": "local_port (integer) - Local network protocol port number"
      },
      {
        "text": "remote_port",
        "displayText": "remote_port (integer) - Remote network protocol port number"
      },
      {
        "text": "socket",
        "displayText": "socket (text) - The local path (UNIX domain socket only)"
      },
      {
        "text": "time",
        "displayText": "time (bigint) - Time of execution in UNIX time"
      },
      {
        "text": "uptime",
        "displayText": "uptime (bigint) - Time of execution in system uptime"
      },
      {
        "text": "eid",
        "displayText": "eid (text) - Event ID"
      }
    ]
  },
  "startup_items": {
    "text": "startup_items",
    "displayText": "startup_items - Applications and binaries set as user/login startup items.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Name of startup item"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path of startup item"
      },
      {
        "text": "args",
        "displayText": "args (text) - Arguments provided to startup executable"
      },
      {
        "text": "type",
        "displayText": "type (text) - Startup Item or Login Item"
      },
      {
        "text": "source",
        "displayText": "source (text) - Directory or plist containing startup item"
      },
      {
        "text": "status",
        "displayText": "status (text) - Startup status; either enabled or disabled"
      },
      {
        "text": "username",
        "displayText": "username (text) - The user associated with the startup item"
      }
    ]
  },
  "sudoers": {
    "text": "sudoers",
    "displayText": "sudoers - Rules for running commands as other users via sudo.",
    "columns": [
      {
        "text": "header",
        "displayText": "header (text) - Symbol for given rule"
      },
      {
        "text": "rule_details",
        "displayText": "rule_details (text) - Rule definition"
      }
    ]
  },
  "suid_bin": {
    "text": "suid_bin",
    "displayText": "suid_bin - suid binaries in common locations.",
    "columns": [
      {
        "text": "path",
        "displayText": "path (text) - Binary path"
      },
      {
        "text": "username",
        "displayText": "username (text) - Binary owner username"
      },
      {
        "text": "groupname",
        "displayText": "groupname (text) - Binary owner group"
      },
      {
        "text": "permissions",
        "displayText": "permissions (text) - Binary permissions"
      }
    ]
  },
  "syslog_events": {
    "text": "syslog_events",
    "displayText": "syslog_events - ",
    "columns": [
      {
        "text": "time",
        "displayText": "time (bigint) - Current unix epoch time"
      },
      {
        "text": "datetime",
        "displayText": "datetime (text) - Time known to syslog"
      },
      {
        "text": "host",
        "displayText": "host (text) - Hostname configured for syslog"
      },
      {
        "text": "severity",
        "displayText": "severity (integer) - Syslog severity"
      },
      {
        "text": "facility",
        "displayText": "facility (text) - Syslog facility"
      },
      {
        "text": "tag",
        "displayText": "tag (text) - The syslog tag"
      },
      {
        "text": "message",
        "displayText": "message (text) - The syslog message"
      },
      {
        "text": "eid",
        "displayText": "eid (text) - Event ID"
      }
    ]
  },
  "system_controls": {
    "text": "system_controls",
    "displayText": "system_controls - sysctl names, values, and settings information.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Full sysctl MIB name"
      },
      {
        "text": "oid",
        "displayText": "oid (text) - Control MIB"
      },
      {
        "text": "subsystem",
        "displayText": "subsystem (text) - Subsystem ID, control type"
      },
      {
        "text": "current_value",
        "displayText": "current_value (text) - Value of setting"
      },
      {
        "text": "config_value",
        "displayText": "config_value (text) - The MIB value set in /etc/sysctl.conf"
      },
      {
        "text": "type",
        "displayText": "type (text) - Data type"
      }
    ]
  },
  "system_info": {
    "text": "system_info",
    "displayText": "system_info - System information for identification.",
    "columns": [
      {
        "text": "hostname",
        "displayText": "hostname (text) - Network hostname including domain"
      },
      {
        "text": "uuid",
        "displayText": "uuid (text) - Unique ID provided by the system"
      },
      {
        "text": "cpu_type",
        "displayText": "cpu_type (text) - CPU type"
      },
      {
        "text": "cpu_subtype",
        "displayText": "cpu_subtype (text) - CPU subtype"
      },
      {
        "text": "cpu_brand",
        "displayText": "cpu_brand (text) - CPU brand string, contains vendor and model"
      },
      {
        "text": "cpu_physical_cores",
        "displayText": "cpu_physical_cores (integer) - Max number of CPU physical cores"
      },
      {
        "text": "cpu_logical_cores",
        "displayText": "cpu_logical_cores (integer) - Max number of CPU logical cores"
      },
      {
        "text": "physical_memory",
        "displayText": "physical_memory (bigint) - Total physical memory in bytes"
      },
      {
        "text": "hardware_vendor",
        "displayText": "hardware_vendor (text) - Hardware or board vendor"
      },
      {
        "text": "hardware_model",
        "displayText": "hardware_model (text) - Hardware or board model"
      },
      {
        "text": "hardware_version",
        "displayText": "hardware_version (text) - Hardware or board version"
      },
      {
        "text": "hardware_serial",
        "displayText": "hardware_serial (text) - Device or board serial number"
      },
      {
        "text": "computer_name",
        "displayText": "computer_name (text) - Friendly computer name (optional)"
      },
      {
        "text": "local_hostname",
        "displayText": "local_hostname (text) - Local hostname (optional)"
      }
    ]
  },
  "temperature_sensors": {
    "text": "temperature_sensors",
    "displayText": "temperature_sensors - Machine's temperature sensors.",
    "columns": [
      {
        "text": "key",
        "displayText": "key (text) - The SMC key on OS X"
      },
      {
        "text": "name",
        "displayText": "name (text) - Name of temperature source"
      },
      {
        "text": "celsius",
        "displayText": "celsius (double) - Temperature in Celsius"
      },
      {
        "text": "fahrenheit",
        "displayText": "fahrenheit (double) - Temperature in Fahrenheit"
      }
    ]
  },
  "time": {
    "text": "time",
    "displayText": "time - Track current date and time in the system.",
    "columns": [
      {
        "text": "weekday",
        "displayText": "weekday (text) - Current weekday in the system"
      },
      {
        "text": "year",
        "displayText": "year (integer) - Current year in the system"
      },
      {
        "text": "month",
        "displayText": "month (integer) - Current month in the system"
      },
      {
        "text": "day",
        "displayText": "day (integer) - Current day in the system"
      },
      {
        "text": "hour",
        "displayText": "hour (integer) - Current hour in the system"
      },
      {
        "text": "minutes",
        "displayText": "minutes (integer) - Current minutes in the system"
      },
      {
        "text": "seconds",
        "displayText": "seconds (integer) - Current seconds in the system"
      },
      {
        "text": "timezone",
        "displayText": "timezone (text) - Current timezone in the system"
      },
      {
        "text": "local_time",
        "displayText": "local_time (integer) - Current local UNIX time in the system"
      },
      {
        "text": "local_timezone",
        "displayText": "local_timezone (text) - Current local timezone in the system"
      },
      {
        "text": "unix_time",
        "displayText": "unix_time (integer) - Current UNIX time in the system, converted to UTC if --utc enabled"
      },
      {
        "text": "timestamp",
        "displayText": "timestamp (text) - Current timestamp (log format) in the system"
      },
      {
        "text": "datetime",
        "displayText": "datetime (text) - Current date and time (ISO format) in the system"
      },
      {
        "text": "iso_8601",
        "displayText": "iso_8601 (text) - Current time (ISO format) in the system"
      }
    ]
  },
  "time_machine_backups": {
    "text": "time_machine_backups",
    "displayText": "time_machine_backups - Backups to drives using TimeMachine.",
    "columns": [
      {
        "text": "destination_id",
        "displayText": "destination_id (text) - Time Machine destination ID"
      },
      {
        "text": "backup_date",
        "displayText": "backup_date (integer) - Backup Date"
      }
    ]
  },
  "time_machine_destinations": {
    "text": "time_machine_destinations",
    "displayText": "time_machine_destinations - Locations backed up to using Time Machine.",
    "columns": [
      {
        "text": "alias",
        "displayText": "alias (text) - Human readable name of drive"
      },
      {
        "text": "destination_id",
        "displayText": "destination_id (text) - Time Machine destination ID"
      },
      {
        "text": "consistency_scan_date",
        "displayText": "consistency_scan_date (integer) - Consistency scan date"
      },
      {
        "text": "root_volume_uuid",
        "displayText": "root_volume_uuid (text) - Root UUID of backup volume"
      },
      {
        "text": "bytes_available",
        "displayText": "bytes_available (integer) - Bytes available on volume"
      },
      {
        "text": "bytes_used",
        "displayText": "bytes_used (integer) - Bytes used on volume"
      },
      {
        "text": "encryption",
        "displayText": "encryption (text) - Last known encrypted state"
      }
    ]
  },
  "uptime": {
    "text": "uptime",
    "displayText": "uptime - Track time passed since last boot.",
    "columns": [
      {
        "text": "days",
        "displayText": "days (integer) - Days of uptime"
      },
      {
        "text": "hours",
        "displayText": "hours (integer) - Hours of uptime"
      },
      {
        "text": "minutes",
        "displayText": "minutes (integer) - Minutes of uptime"
      },
      {
        "text": "seconds",
        "displayText": "seconds (integer) - Seconds of uptime"
      },
      {
        "text": "total_seconds",
        "displayText": "total_seconds (bigint) - Total uptime seconds"
      }
    ]
  },
  "usb_devices": {
    "text": "usb_devices",
    "displayText": "usb_devices - USB devices that are actively plugged into the host system.",
    "columns": [
      {
        "text": "usb_address",
        "displayText": "usb_address (integer) - USB Device used address"
      },
      {
        "text": "usb_port",
        "displayText": "usb_port (integer) - USB Device used port"
      },
      {
        "text": "vendor",
        "displayText": "vendor (text) - USB Device vendor string"
      },
      {
        "text": "vendor_id",
        "displayText": "vendor_id (text) - Hex encoded USB Device vendor identifier"
      },
      {
        "text": "version",
        "displayText": "version (text) - USB Device version number"
      },
      {
        "text": "model",
        "displayText": "model (text) - USB Device model string"
      },
      {
        "text": "model_id",
        "displayText": "model_id (text) - Hex encoded USB Device model identifier"
      },
      {
        "text": "serial",
        "displayText": "serial (text) - USB Device serial connection"
      },
      {
        "text": "class",
        "displayText": "class (text) - USB Device class"
      },
      {
        "text": "subclass",
        "displayText": "subclass (text) - USB Device subclass"
      },
      {
        "text": "protocol",
        "displayText": "protocol (text) - USB Device protocol"
      },
      {
        "text": "removable",
        "displayText": "removable (integer) - 1 If USB device is removable else 0"
      }
    ]
  },
  "user_events": {
    "text": "user_events",
    "displayText": "user_events - Track user events from the audit framework.",
    "columns": [
      {
        "text": "uid",
        "displayText": "uid (bigint) - User ID"
      },
      {
        "text": "auid",
        "displayText": "auid (bigint) - Audit User ID"
      },
      {
        "text": "pid",
        "displayText": "pid (bigint) - Process (or thread) ID"
      },
      {
        "text": "message",
        "displayText": "message (text) - Message from the event"
      },
      {
        "text": "type",
        "displayText": "type (integer) - The file description for the process socket"
      },
      {
        "text": "path",
        "displayText": "path (text) - Supplied path from event"
      },
      {
        "text": "address",
        "displayText": "address (text) - The Internet protocol address or family ID"
      },
      {
        "text": "terminal",
        "displayText": "terminal (text) - The network protocol ID"
      },
      {
        "text": "time",
        "displayText": "time (bigint) - Time of execution in UNIX time"
      },
      {
        "text": "uptime",
        "displayText": "uptime (bigint) - Time of execution in system uptime"
      },
      {
        "text": "eid",
        "displayText": "eid (text) - Event ID"
      }
    ]
  },
  "user_groups": {
    "text": "user_groups",
    "displayText": "user_groups - Local system user group relationships.",
    "columns": [
      {
        "text": "uid",
        "displayText": "uid (bigint) - User ID"
      },
      {
        "text": "gid",
        "displayText": "gid (bigint) - Group ID"
      }
    ]
  },
  "user_interaction_events": {
    "text": "user_interaction_events",
    "displayText": "user_interaction_events - Track user interaction events from macOS' event tapping framework.",
    "columns": [
      {
        "text": "time",
        "displayText": "time (bigint) - Time"
      }
    ]
  },
  "user_ssh_keys": {
    "text": "user_ssh_keys",
    "displayText": "user_ssh_keys - Returns the private keys in the users ~/.ssh directory and whether or not they are encrypted.",
    "columns": [
      {
        "text": "uid",
        "displayText": "uid (bigint) - The local user that owns the key file"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path to key file"
      },
      {
        "text": "encrypted",
        "displayText": "encrypted (integer) - 1 if key is encrypted, 0 otherwise"
      }
    ]
  },
  "users": {
    "text": "users",
    "displayText": "users - Local system users.",
    "columns": [
      {
        "text": "uid",
        "displayText": "uid (bigint) - User ID"
      },
      {
        "text": "gid",
        "displayText": "gid (bigint) - Group ID (unsigned)"
      },
      {
        "text": "uid_signed",
        "displayText": "uid_signed (bigint) - User ID as int64 signed (Apple)"
      },
      {
        "text": "gid_signed",
        "displayText": "gid_signed (bigint) - Default group ID as int64 signed (Apple)"
      },
      {
        "text": "username",
        "displayText": "username (text) - Username"
      },
      {
        "text": "description",
        "displayText": "description (text) - Optional user description"
      },
      {
        "text": "directory",
        "displayText": "directory (text) - User's home directory"
      },
      {
        "text": "shell",
        "displayText": "shell (text) - User's configured default shell"
      },
      {
        "text": "uuid",
        "displayText": "uuid (text) - User's UUID (Apple)"
      },
      {
        "text": "type",
        "displayText": "type (text) - Whether the account is roaming (domain), local, or a system profile"
      }
    ]
  },
  "virtual_memory_info": {
    "text": "virtual_memory_info",
    "displayText": "virtual_memory_info - Darwin Virtual Memory statistics.",
    "columns": [
      {
        "text": "free",
        "displayText": "free (bigint) - Total number of free pages."
      },
      {
        "text": "active",
        "displayText": "active (bigint) - Total number of active pages."
      },
      {
        "text": "inactive",
        "displayText": "inactive (bigint) - Total number of inactive pages."
      },
      {
        "text": "speculative",
        "displayText": "speculative (bigint) - Total number of speculative pages."
      },
      {
        "text": "throttled",
        "displayText": "throttled (bigint) - Total number of throttled pages."
      },
      {
        "text": "wired",
        "displayText": "wired (bigint) - Total number of wired down pages."
      },
      {
        "text": "purgeable",
        "displayText": "purgeable (bigint) - Total number of purgeable pages."
      },
      {
        "text": "faults",
        "displayText": "faults (bigint) - Total number of calls to vm_faults."
      },
      {
        "text": "copy",
        "displayText": "copy (bigint) - Total number of copy-on-write pages."
      },
      {
        "text": "zero_fill",
        "displayText": "zero_fill (bigint) - Total number of zero filled pages."
      },
      {
        "text": "reactivated",
        "displayText": "reactivated (bigint) - Total number of reactivated pages."
      },
      {
        "text": "purged",
        "displayText": "purged (bigint) - Total number of purged pages."
      },
      {
        "text": "file_backed",
        "displayText": "file_backed (bigint) - Total number of file backed pages."
      },
      {
        "text": "anonymous",
        "displayText": "anonymous (bigint) - Total number of anonymous pages."
      },
      {
        "text": "uncompressed",
        "displayText": "uncompressed (bigint) - Total number of uncompressed pages."
      },
      {
        "text": "compressor",
        "displayText": "compressor (bigint) - The number of pages used to store compressed VM pages."
      },
      {
        "text": "decompressed",
        "displayText": "decompressed (bigint) - The total number of pages that have been decompressed by the VM compressor."
      },
      {
        "text": "compressed",
        "displayText": "compressed (bigint) - The total number of pages that have been compressed by the VM compressor."
      },
      {
        "text": "page_ins",
        "displayText": "page_ins (bigint) - The total number of requests for pages from a pager."
      },
      {
        "text": "page_outs",
        "displayText": "page_outs (bigint) - Total number of pages paged out."
      },
      {
        "text": "swap_ins",
        "displayText": "swap_ins (bigint) - The total number of compressed pages that have been swapped out to disk."
      },
      {
        "text": "swap_outs",
        "displayText": "swap_outs (bigint) - The total number of compressed pages that have been swapped back in from disk."
      }
    ]
  },
  "wifi_networks": {
    "text": "wifi_networks",
    "displayText": "wifi_networks - OS X known/remembered Wi-Fi networks list.",
    "columns": [
      {
        "text": "ssid",
        "displayText": "ssid (text) - SSID octets of the network"
      },
      {
        "text": "network_name",
        "displayText": "network_name (text) - Name of the network"
      },
      {
        "text": "security_type",
        "displayText": "security_type (text) - Type of security on this network"
      },
      {
        "text": "last_connected",
        "displayText": "last_connected (integer) - Last time this netword was connected to as a unix_time"
      },
      {
        "text": "passpoint",
        "displayText": "passpoint (integer) - 1 if Passpoint is supported, 0 otherwise"
      },
      {
        "text": "possibly_hidden",
        "displayText": "possibly_hidden (integer) - 1 if network is possibly a hidden network, 0 otherwise"
      },
      {
        "text": "roaming",
        "displayText": "roaming (integer) - 1 if roaming is supported, 0 otherwise"
      },
      {
        "text": "roaming_profile",
        "displayText": "roaming_profile (text) - Describe the roaming profile, usually one of Single, Dual  or Multi"
      },
      {
        "text": "captive_portal",
        "displayText": "captive_portal (integer) - 1 if this network has a captive portal, 0 otherwise"
      },
      {
        "text": "auto_login",
        "displayText": "auto_login (integer) - 1 if auto login is enabled, 0 otherwise"
      },
      {
        "text": "temporarily_disabled",
        "displayText": "temporarily_disabled (integer) - 1 if this network is temporarily disabled, 0 otherwise"
      },
      {
        "text": "disabled",
        "displayText": "disabled (integer) - 1 if this network is disabled, 0 otherwise"
      }
    ]
  },
  "wifi_status": {
    "text": "wifi_status",
    "displayText": "wifi_status - OS X current WiFi status.",
    "columns": [
      {
        "text": "interface",
        "displayText": "interface (text) - Name of the interface"
      },
      {
        "text": "ssid",
        "displayText": "ssid (text) - SSID octets of the network"
      },
      {
        "text": "bssid",
        "displayText": "bssid (text) - The current basic service set identifier"
      },
      {
        "text": "network_name",
        "displayText": "network_name (text) - Name of the network"
      },
      {
        "text": "country_code",
        "displayText": "country_code (text) - The country code (ISO/IEC 3166-1:1997) for the network"
      },
      {
        "text": "security_type",
        "displayText": "security_type (text) - Type of security on this network"
      },
      {
        "text": "rssi",
        "displayText": "rssi (integer) - The current received signal strength indication (dbm)"
      },
      {
        "text": "noise",
        "displayText": "noise (integer) - The current noise measurement (dBm)"
      },
      {
        "text": "channel",
        "displayText": "channel (integer) - Channel number"
      },
      {
        "text": "channel_width",
        "displayText": "channel_width (integer) - Channel width"
      },
      {
        "text": "channel_band",
        "displayText": "channel_band (integer) - Channel band"
      },
      {
        "text": "transmit_rate",
        "displayText": "transmit_rate (text) - The current transmit rate"
      },
      {
        "text": "mode",
        "displayText": "mode (text) - The current operating mode for the Wi-Fi interface"
      }
    ]
  },
  "wifi_survey": {
    "text": "wifi_survey",
    "displayText": "wifi_survey - Scan for nearby WiFi networks.",
    "columns": [
      {
        "text": "interface",
        "displayText": "interface (text) - Name of the interface"
      },
      {
        "text": "ssid",
        "displayText": "ssid (text) - SSID octets of the network"
      },
      {
        "text": "bssid",
        "displayText": "bssid (text) - The current basic service set identifier"
      },
      {
        "text": "network_name",
        "displayText": "network_name (text) - Name of the network"
      },
      {
        "text": "country_code",
        "displayText": "country_code (text) - The country code (ISO/IEC 3166-1:1997) for the network"
      },
      {
        "text": "rssi",
        "displayText": "rssi (integer) - The current received signal strength indication (dbm)"
      },
      {
        "text": "noise",
        "displayText": "noise (integer) - The current noise measurement (dBm)"
      },
      {
        "text": "channel",
        "displayText": "channel (integer) - Channel number"
      },
      {
        "text": "channel_width",
        "displayText": "channel_width (integer) - Channel width"
      },
      {
        "text": "channel_band",
        "displayText": "channel_band (integer) - Channel band"
      }
    ]
  },
  "windows_crashes": {
    "text": "windows_crashes",
    "displayText": "windows_crashes - Extracted information from Windows crash logs (Minidumps).",
    "columns": [
      {
        "text": "datetime",
        "displayText": "datetime (text) - Timestamp (log format) of the crash"
      },
      {
        "text": "module",
        "displayText": "module (text) - Path of the crashed module within the process"
      },
      {
        "text": "path",
        "displayText": "path (text) - Path of the executable file for the crashed process"
      },
      {
        "text": "pid",
        "displayText": "pid (bigint) - Process ID of the crashed process"
      },
      {
        "text": "tid",
        "displayText": "tid (bigint) - Thread ID of the crashed thread"
      },
      {
        "text": "version",
        "displayText": "version (text) - File version info of the crashed process"
      },
      {
        "text": "process_uptime",
        "displayText": "process_uptime (bigint) - Uptime of the process in seconds"
      },
      {
        "text": "stack_trace",
        "displayText": "stack_trace (text) - Multiple stack frames from the stack trace"
      },
      {
        "text": "exception_code",
        "displayText": "exception_code (text) - The Windows exception code"
      },
      {
        "text": "exception_message",
        "displayText": "exception_message (text) - The NTSTATUS error message associated with the exception code"
      },
      {
        "text": "exception_address",
        "displayText": "exception_address (text) - Address (in hex) where the exception occurred"
      },
      {
        "text": "registers",
        "displayText": "registers (text) - The values of the system registers"
      },
      {
        "text": "command_line",
        "displayText": "command_line (text) - Command-line string passed to the crashed process"
      },
      {
        "text": "current_directory",
        "displayText": "current_directory (text) - Current working directory of the crashed process"
      },
      {
        "text": "username",
        "displayText": "username (text) - Username of the user who ran the crashed process"
      },
      {
        "text": "machine_name",
        "displayText": "machine_name (text) - Name of the machine where the crash happened"
      },
      {
        "text": "major_version",
        "displayText": "major_version (integer) - Windows major version of the machine"
      },
      {
        "text": "minor_version",
        "displayText": "minor_version (integer) - Windows minor version of the machine"
      },
      {
        "text": "build_number",
        "displayText": "build_number (integer) - Windows build number of the crashing machine"
      },
      {
        "text": "type",
        "displayText": "type (text) - Type of crash log"
      },
      {
        "text": "crash_path",
        "displayText": "crash_path (text) - Path of the log file"
      }
    ]
  },
  "windows_events": {
    "text": "windows_events",
    "displayText": "windows_events - Windows Event logs.",
    "columns": [
      {
        "text": "time",
        "displayText": "time (bigint) - Timestamp the event was received"
      },
      {
        "text": "datetime",
        "displayText": "datetime (text) - System time at which the event occurred"
      },
      {
        "text": "source",
        "displayText": "source (text) - Source or channel of the event"
      },
      {
        "text": "provider_name",
        "displayText": "provider_name (text) - Provider name of the event"
      },
      {
        "text": "provider_guid",
        "displayText": "provider_guid (text) - Provider guid of the event"
      },
      {
        "text": "eventid",
        "displayText": "eventid (integer) - Event ID of the event"
      },
      {
        "text": "task",
        "displayText": "task (integer) - Task value associated with the event"
      },
      {
        "text": "level",
        "displayText": "level (integer) - The severity level associated with the event"
      },
      {
        "text": "keywords",
        "displayText": "keywords (bigint) - A bitmask of the keywords defined in the event"
      },
      {
        "text": "data",
        "displayText": "data (text) - Data associated with the event"
      },
      {
        "text": "eid",
        "displayText": "eid (text) - Event ID"
      }
    ]
  },
  "wmi_cli_event_consumers": {
    "text": "wmi_cli_event_consumers",
    "displayText": "wmi_cli_event_consumers - WMI CommandLineEventConsumer, which can be used for persistance on Windows. See https://www.blackhat.com/docs/us-15/materials/us-15-Graeber-Abusing-Windows-Management-Instrumentation-WMI-To-Build-A-Persistent%20Asynchronous-And-Fileless-Backdoor-wp.pdf for more details.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Unique name of a consumer."
      },
      {
        "text": "command_line_template",
        "displayText": "command_line_template (text) - Standard string template that specifies the process to be started. This property can be NULL, and the ExecutablePath property is used as the command line."
      },
      {
        "text": "executable_path",
        "displayText": "executable_path (text) - Module to execute. The string can specify the full path and file name of the module to execute, or it can specify a partial name. If a partial name is specified, the current drive and current directory are assumed."
      },
      {
        "text": "class",
        "displayText": "class (text) - The name of the class."
      },
      {
        "text": "relative_path",
        "displayText": "relative_path (text) - Relative path to the class or instance."
      }
    ]
  },
  "wmi_event_filters": {
    "text": "wmi_event_filters",
    "displayText": "wmi_event_filters - Lists WMI event filters.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Unique identifier of an event filter."
      },
      {
        "text": "query",
        "displayText": "query (text) - Windows Management Instrumentation Query Language (WQL) event query that specifies the set of events for consumer notification, and the specific conditions for notification."
      },
      {
        "text": "query_language",
        "displayText": "query_language (text) - Query language that the query is written in."
      },
      {
        "text": "class",
        "displayText": "class (text) - The name of the class."
      },
      {
        "text": "relative_path",
        "displayText": "relative_path (text) - Relative path to the class or instance."
      }
    ]
  },
  "wmi_filter_consumer_binding": {
    "text": "wmi_filter_consumer_binding",
    "displayText": "wmi_filter_consumer_binding - Lists the relationship between event consumers and filters.",
    "columns": [
      {
        "text": "consumer",
        "displayText": "consumer (text) - Reference to an instance of __EventConsumer that represents the object path to a logical consumer, the recipient of an event."
      },
      {
        "text": "filter",
        "displayText": "filter (text) - Reference to an instance of __EventFilter that represents the object path to an event filter which is a query that specifies the type of event to be received."
      },
      {
        "text": "class",
        "displayText": "class (text) - The name of the class."
      },
      {
        "text": "relative_path",
        "displayText": "relative_path (text) - Relative path to the class or instance."
      }
    ]
  },
  "wmi_script_event_consumers": {
    "text": "wmi_script_event_consumers",
    "displayText": "wmi_script_event_consumers - WMI ActiveScriptEventConsumer, which can be used for persistance on Windows. See https://www.blackhat.com/docs/us-15/materials/us-15-Graeber-Abusing-Windows-Management-Instrumentation-WMI-To-Build-A-Persistent%20Asynchronous-And-Fileless-Backdoor-wp.pdf for more details.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Unique identifier for the event consumer. "
      },
      {
        "text": "scripting_engine",
        "displayText": "scripting_engine (text) - Name of the scripting engine to use, for example, 'VBScript'. This property cannot be NULL."
      },
      {
        "text": "script_file_name",
        "displayText": "script_file_name (text) - Name of the file from which the script text is read, intended as an alternative to specifying the text of the script in the ScriptText property."
      },
      {
        "text": "script_text",
        "displayText": "script_text (text) - Text of the script that is expressed in a language known to the scripting engine. This property must be NULL if the ScriptFileName property is not NULL."
      },
      {
        "text": "class",
        "displayText": "class (text) - The name of the class."
      },
      {
        "text": "relative_path",
        "displayText": "relative_path (text) - Relative path to the class or instance."
      }
    ]
  },
  "xprotect_entries": {
    "text": "xprotect_entries",
    "displayText": "xprotect_entries - Database of the machine's XProtect signatures.",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Description of XProtected malware"
      },
      {
        "text": "launch_type",
        "displayText": "launch_type (text) - Launch services content type"
      },
      {
        "text": "identity",
        "displayText": "identity (text) - XProtect identity (SHA1) of content"
      },
      {
        "text": "filename",
        "displayText": "filename (text) - Use this file name to match"
      },
      {
        "text": "filetype",
        "displayText": "filetype (text) - Use this file type to match"
      },
      {
        "text": "optional",
        "displayText": "optional (integer) - Match any of the identities/patterns for this XProtect name"
      },
      {
        "text": "uses_pattern",
        "displayText": "uses_pattern (integer) - Uses a match pattern instead of identity"
      }
    ]
  },
  "xprotect_meta": {
    "text": "xprotect_meta",
    "displayText": "xprotect_meta - Database of the machine's XProtect browser-related signatures.",
    "columns": [
      {
        "text": "identifier",
        "displayText": "identifier (text) - Browser plugin or extension identifier"
      },
      {
        "text": "type",
        "displayText": "type (text) - Either plugin or extension"
      },
      {
        "text": "developer_id",
        "displayText": "developer_id (text) - Developer identity (SHA1) of extension"
      },
      {
        "text": "min_version",
        "displayText": "min_version (text) - The minimum allowed plugin version."
      }
    ]
  },
  "xprotect_reports": {
    "text": "xprotect_reports",
    "displayText": "xprotect_reports - Database of XProtect matches (if user generated/sent an XProtect report).",
    "columns": [
      {
        "text": "name",
        "displayText": "name (text) - Description of XProtected malware"
      },
      {
        "text": "user_action",
        "displayText": "user_action (text) - Action taken by user after prompted"
      },
      {
        "text": "time",
        "displayText": "time (text) - Quarantine alert time"
      }
    ]
  },
  "yara": {
    "text": "yara",
    "displayText": "yara - Track YARA matches for files or PIDs.",
    "columns": [
      {
        "text": "path",
        "displayText": "path (text) - The path scanned"
      },
      {
        "text": "matches",
        "displayText": "matches (text) - List of YARA matches"
      },
      {
        "text": "count",
        "displayText": "count (integer) - Number of YARA matches"
      },
      {
        "text": "sig_group",
        "displayText": "sig_group (text) - Signature group used"
      },
      {
        "text": "sigfile",
        "displayText": "sigfile (text) - Signature file used"
      },
      {
        "text": "strings",
        "displayText": "strings (text) - Matching strings"
      },
      {
        "text": "tags",
        "displayText": "tags (text) - Matching tags"
      }
    ]
  },
  "yara_events": {
    "text": "yara_events",
    "displayText": "yara_events - Track YARA matches for files specified in configuration data.",
    "columns": [
      {
        "text": "target_path",
        "displayText": "target_path (text) - The path scanned"
      },
      {
        "text": "category",
        "displayText": "category (text) - The category of the file"
      },
      {
        "text": "action",
        "displayText": "action (text) - Change action (UPDATE, REMOVE, etc)"
      },
      {
        "text": "transaction_id",
        "displayText": "transaction_id (bigint) - ID used during bulk update"
      },
      {
        "text": "matches",
        "displayText": "matches (text) - List of YARA matches"
      },
      {
        "text": "count",
        "displayText": "count (integer) - Number of YARA matches"
      },
      {
        "text": "strings",
        "displayText": "strings (text) - Matching strings"
      },
      {
        "text": "tags",
        "displayText": "tags (text) - Matching tags"
      },
      {
        "text": "time",
        "displayText": "time (bigint) - Time of the scan"
      },
      {
        "text": "eid",
        "displayText": "eid (text) - Event ID"
      }
    ]
  }
}
;
