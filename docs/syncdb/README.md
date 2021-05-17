# SyncDB

## Overview

PHP library to assist with syncing database data across multiple environments.

## Development
Pull requests are welcome. There has been a major refactor since the 0.9.x releases and many aspects of the library have been completely rewritten to be more maintainable, extensible, and consistent.

## Requirements

* Unix/Linux Hosts (Windows is not supported)
* PHP ^7.2
* PostgreSQL >= ^9.0 or MySQL ^5.6 || ^8.0

## Installation

To use this library in your project, install via composer:
```
$ composer require unionco/syncdb:^0.10
```

## Configuration

See [Configuration](/docs/syncdb/config.md)

## Usage

This library will dump, archive, download, and restore a database from a *remote* environment to a *local* environment.

## How It Works
Using established SSH connectivity, this library will determine database credententials using the `.env` file on both remote and local hosts. Based on the selected database driver, the appropriate steps to sync the database are generated automatically. If an error occurs during the sync, the library will attempt to undo any setup steps performed to that point.

## Getting Started

In addition to the concrete software requirements, below, it is critical to establish key-based SSH connectivity between hosts. See [Connectivity](/docs/syncdb/connectivity.md)

## Host Requirements
### Remote Host:
* SQL Dump Utilities
  * For MySQL Hosts:
    * `mysqldump`
  * For PostgreSQL Hosts:
    * `pg_dump`
* `tar` command (BSD or GNU) with bzip2 support

### Local Host:
* SSH
* SCP
* `tar` command (BSD or GNU) with bzip2 support
* SQL Utilities
  * For MySQL Hosts:
    * `mysql` client
  * For PostgreSQL Hosts:
      * `createdb`
      * `dropdb`
      * `pg_restore`


This library can be used with any PHP project that meets the following criteria:
* Uses a `.env` file for DB connection



For an example, see the implementation in [unionco/craft-sync-db](/craft-sync-db/)

## Source

Source code is available on [Github](https://github.com/unionco/syncdb)
