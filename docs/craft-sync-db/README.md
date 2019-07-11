# Craft SyncDB

<img src="../../resources/sync-db.png" height="160px"/>

## Overview 

Craft 3 plugin to sync database across environments

craft-sync-db uses [`unionco/syncdb`](/syncdb/) to perform database synchronization across your different environments. Both MySQL and PostgreSQL databases are supported.

Source code is available on [Github](https://github.com/unionco/craft-sync-db)

## Requirements

This plugin requires Craft CMS 3.0.0-beta.23 or later.

## Installation

To install the plugin, follow these instructions.

1. Open your terminal and go to your Craft project:

        cd /path/to/project

2. Then tell Composer to load the plugin:

        composer require unionco/craft-sync-db

3. In the Control Panel, go to Settings → Plugins and click the “Install” button for craft-sync-db.


## Configuration

 Configuration of remote servers is done via config file `<CRAFT_ROOT>/config/syncdb.php`. This file should be copied into your `config/` directory automatically. If it is deleted, you can copy it from `vendor/unionco/craft-sync-db/config/default.php`.

 There are several properties needed for each environment. Given the example config:

```
<?php

use Symfony\Component\Console\Output\Output;
use unionco\craftsyncdb\services\CpService;

/**
 *  This is the default configuration that will be copied into your Craft
 *  config path, if it does not exist. Any changes to this file will be
 *  overwritten
 **/

 return [
    'globals' => [
        // Array of tables to ignore in dump (currently only supported for MySQL)
        'ignoredTables' => [
            'craft_templatecaches',
            'craft_templatecachequeries',
            'craft_templatecacheelements',
        ],
    ],
    'remotes' => [
        'production' => [
            'username' => 'user',
            'host' => 'example.com',
            'root' => '/home/user/Sites/craft-project/',
            'backupDirectory' => '/home/user/Sites/craft-project/storage/backups/databases/',
            'port' => 22,
            'phpPath' => '/usr/bin/php',
            'dbDumpClientPath' => '/usr/bin/mysqldump', // Use pg_dump for Postgres
            'verbosity' => Output::VERBOSITY_DEBUG, // See Symfony\Component\Console\Output\Output for verbosity options
            'environment' => CpService::ENV_PRODUCTION,
        ],
        // 'staging' => [
        // ...
        // ],
    ],
];

```

Each environment requires the following properties:

| property | description |
|---|---|
| username | SSH/server username |
| host | SSH/server hostname or IP |
| root | Path of the Craft installation on the server |
| backupDirectory | Path where database backups will be created on the remote server |
| port | SSH port |
| phpPath | Path to `php` executable |
| dbDumpClientPath | Path to `mysqldump` or `pg_dump` executable |
| verbosity | Log level |
| environment | Determines the environment, e.g. dev, staging, production. Used so that lower environments are never synced into higher environments |

## Usage

NOTE: `craft-sync-db` plugin must be installed on the project on the remote server as well.

As of version v0.5.0, `craft-sync-db` provides a CP user interface.

To use `craft-sync-db` on the command line:
`php craft sync-db/sync <remote_key> [log_level]`, where `<remote_key>` is an array key in your configuration file and `[log_level]` (optional) is one of: `verbose`, `normal`, or `quiet` .

## Roadmap

Some things to do, and ideas for potential features:

* Release it

Brought to you by [UNION](github.com/unionco)
