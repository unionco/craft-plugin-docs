# Craft SyncDB

<img src="../../resources/sync-db.png" height="160px"/>

## Overview

Craft 3 plugin to sync database across environments

craft-sync-db uses [`unionco/syncdb`](/syncdb/) to perform database synchronization across your different environments. Both MySQL and PostgreSQL databases are supported.

The plugin works by setting up an SSH session to your configured remote servers. Once connected to the server, it uses that environment's `.env` file to determine the database configuration.

Source code is available on [Github](https://github.com/unionco/craft-sync-db)

::: warning
This is a total rewrite from the 0.9.x release. There are numerous breaking changes, including the configuration file.
:::

## Requirements

This plugin requires Craft CMS 3.0.0-beta.23 or later.

- Ability to connect to remote servers via SSH using SSH

## Installation

To install the plugin, follow these instructions.

1. Open your terminal and go to your Craft project:

        `cd /path/to/project`

2. Install the package with Composer:

        `composer require -W unionco/craft-sync-db`

3. In the Control Panel, go to Settings → Plugins and click the “Install” button for craft-sync-db.


## Configuration

Only remote servers (production, staging, etc) should be configured in the configuration file. The local environment is determined by your `.env` file.

To connect to remote server, you should add your SSH public key to the server so no password is needed to authenticate. The `ssh-copy-id` utility makes this simple:

```bash
ssh-copy-id <user>@<host>
```

## Configuration File

A PHP configuration file will automatically be created at `<craft-site>/config/syncdb.php`. JSON and YAML formats are also supported (with the appropriate extensions), but PHP is preferred and used in the documentation.

For all configuration options, see [SyncDB Configuration](/craft-plugin-docs/syncdb/#configuration)

## Usage


Brought to you by [UNION](github.com/unionco)
