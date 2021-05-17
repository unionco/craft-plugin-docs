# Configuration

## Overview

Configuration is meant to be flexible to accommodate various server arrangements, database drivers, SSH ports, Docker containers, etc.

Each top-level array key represents an environment, with a few special cases:
* Every user-defined environment will inherit from the `common` environment
* `local` describes the local environment

| Key | Description |
|---|---|
| `driver` | `mysql` or `pgsql` |
| `remoteWorkingDir` | The base directory on the remote server. This is where the `.env` file should exist |
| `localWorkingDir` | The base directory on the local server. This is where the `.env` file should exist |
| `ignoreTables` | Tables to omit during the database sync |
| `user` | SSH user. Can be ommited if a valid ssh configuration exists for the remote host. |
| `host` | SSH remote host. Required |
| `identity` | SSH private key path. Can be ommited if a valid ssh configuration exists for the remote host. |
| `port` | SSH port. Defaults to 22 |
| `extends` | Inherit config from another environment |
| `docker` | Flag to indicate environment uses Docker |
| `dockerDatabase` | Array with database options to override the credentials found in `.env`|

# Examples

The best way to explain the configuration is with code samples

## Example - Simple MySQL

This scenario is for a Craft CMS site (using MySQL).

```php
<?php

return [
    'common' => [
        'driver' => 'mysql',
        'remoteWorkingDir' => '/var/www/cms/',
        'localWorkingDir' => '$HOME/Sites/cms/',
        'ignoreTables' => [
            "craft_templatecaches",
            "craft_templatecachequeries",
            "craft_templatecacheelements",
            "craft_sessions",
            "craft_cache",
        ],
    ],
    'production' => [
        'user' => 'sshUser',
        'host' => 'www.remote.com',
        'identity' => '$HOME/.ssh/id_rsa'
    ],
];
```

## Example - MySQL with Inheritence and Non-Standard SSH
```php
<?php

return [
    'common' => [
        'driver' => 'mysql',
        'remoteWorkingDir' => '/var/www/cms/',
        'localWorkingDir' => '$HOME/Sites/cms/',
    ],
    'aws' => [
        'port' => 8822,
        'user' => 'sshUser',
        'identity' => '$HOME/.ssh/id_rsa',
    ],
    'staging' => [
        'extends' => 'aws',
        'host' => 'staging.remote.com',
    ]
    'production' => [
        'extends' => 'aws',
        'host' => 'www.remote.com',
    ],
];
```

This example defines an 'environment', `aws`, which does not represent an actual environment, but establishes some common configuration between both `staging` and `production`.

## Example - Simple Postgres
```php
<?php

return [
    'common' => [
        'driver' => 'pgsql',
        'remoteWorkingDir' => '/var/www/cms/',
        'localWorkingDir' => '$HOME/Sites/cms/',
    ],
    'production' => [
        'user' => 'sshUser',
        'host' => 'www.remote.com',
        'identity' => '$HOME/.ssh/id_rsa'
    ],
];
```

# Example - MySQL with Docker Containers

```php
<?php

return [
    'common' => [
        'remoteWorkingDir' => '/var/www/cms/',
        'localWorkingDir' => '/app',
        'ignoreTables' => [
            "craft_templatecaches",
            "craft_templatecachequeries",
            "craft_templatecacheelements",
            "craft_sessions",
            "craft_cache",
        ],
        'driver' => 'mysql',
        'port' => 22,
    ],
    'local' => [
        'docker' => true,
        'dockerDatabase' => [
            'port' => 3336,
            'host' => '127.0.0.1',
        ],
    ],
    'production' => [
        'docker' => true,
        'user' => 'sshUser',
        'host' => 'www.remote.com',
        'identity' => '$HOME/.ssh/id_rsa',
        'driver' => 'mysql',
        'dockerDatabase' => [
            'port' => 3336,
            'host' => '127.0.0.1',
        ],
    ],
];
```

This configuration would allow connection to the MySQL container using its exposed port, `3336`, rather than the default `3306`

```yaml
version: "3.7"

services:
  php-fpm:
    # ...
  nginx:
    # ...
console:
    # ...
  mysql:
    image: mysql:5.7
    ports:
      - 3336:3306
    # ...
```
