# SyncDB

## Overview

PHP library to assist with syncing database data across multiple environments.

## Requirements

PHP >= 7.0

## Installation

To use this library in your project, install via composer:
```
$ composer require unionco/syncdb:^0.6.1
```

## Usage

```
<?php
// ...
use unionco\syncdb\SyncDb;
// ...
$projectBasePath = __DIR__;
$projectStoragePath = __DIR__ . '/storage';
$projectConfigPath = __DIR__ . '/config';

$syncDb = new SyncDb([
    // Path the project root
    'baseDir' => $projectBasePath,
    
    // Path where SQL files should be stored (temporary)
    'storagePath' => $projectStoragePath,
    
    // Path to the environments file
    'environments' => $projectConfigPath . '/syncdb.php',
    
    // The command the run on the remote server
    'remoteDumpCommand' => 'craft ' . self::CONSOLE_PREFIX . self::DUMP_COMMAND,
]);

// ...

$syncDb->sync(null, $verbosityLevel, 'production');

```

For an example, see the implementation in [unionco/craft-sync-db](/craft-sync-db/)

## Source

Source code is available on [Github](https://github.com/unionco/syncdb)