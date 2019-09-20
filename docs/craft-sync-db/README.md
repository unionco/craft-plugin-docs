# Craft SyncDB

<img src="../../resources/sync-db.png" height="160px"/>

## Overview 

Craft 3 plugin to sync database across environments

craft-sync-db uses [`unionco/syncdb`](/syncdb/) to perform database synchronization across your different environments. Both MySQL and PostgreSQL databases are supported.

The plugin works by 

Source code is available on [Github](https://github.com/unionco/craft-sync-db)

## Requirements

This plugin requires Craft CMS 3.0.0-beta.23 or later.

- Ability to connect to remote servers via SSH using SSH

## Installation

To install the plugin, follow these instructions.

1. Open your terminal and go to your Craft project:

        `cd /path/to/project`

2. Then tell Composer to load the plugin:

        `composer require unionco/craft-sync-db`

3. In the Control Panel, go to Settings → Plugins and click the “Install” button for craft-sync-db.


## Configuration

Only remote servers (production, staging, etc) should be configured in the configuration file. The local environment is determined by your `.env` file.

To connect to remote server, you should add your SSH public key to the server so no password is needed to authenticate. The `ssh-copy-id` utility makes this simple:

```bash
ssh-copy-id <user>@<host>
```

Since version 0.7.0, configuration is stored as a YAML file in `<CRAFT_BASE_PATH>/config/syncdb.yaml`. Configuration can be edited manually or using the CP settings interface.

### Global Configuration

| name | handle | description |
|---|---|--|
| Skip Tables | `skipTables` | Tables to ignore in the database export/import |

### Environment Configuration

| name | handle | description |
|---|---|--|
| Name | name | handle for this environment |
| SSH User | username | SSH/server username |
| SSH Host | host | SSH/server hostname or IP |
| SSH Port | port | SSH port |
| Project Root | root | Path of the Craft installation on the server |
| Temporary Backup Dir | backupDirectory | Path where database backups will be created on the remote server |
| PHP Executable | phpPath | Path to `php` executable |
| DB Dump Client Executable | dbDumpClientPath | Path to `mysqldump` or `pg_dump` executable |
| Log Verbosity | verbosity | Log level |
| Environment | environment | Determines the environment, e.g. dev, staging, production. Used so that lower environments are never synced into higher environments |
| UID | uid | Automatically generated unique identifier. If omitted, this will be automatically generated |

## Usage

NOTE: `craft-sync-db` plugin must be installed on the project on the remote server as well.

As of version v0.5.0, `craft-sync-db` provides a CP user interface.

To use `craft-sync-db` on the command line:
`php craft sync-db/sync <remote_key> [log_level]`, where `<remote_key>` is an array key in your configuration file and `[log_level]` (optional) is one of: `verbose`, `normal`, or `quiet` .

Brought to you by [UNION](github.com/unionco)
