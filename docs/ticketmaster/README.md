# Craft Ticketmaster

<img src="../../resources/craft-ticketmaster-plugin.png" style="maxheight:160px;"/>

## Overview

PHP library to assist with syncing venues and events from the Ticketmaster API

## Requirements

- PHP >= 7.2
- Craft CMS 3.0.0-beta.23 or later

## Installation

To install the plugin, follow these instructions.

1. Open your terminal and go to your Craft project:

        cd /path/to/project

2. Then tell Composer to load the plugin:

        composer require unionco/ticketmaster

3. In the Control Panel, go to Settings → Plugins and click the “Install” button for Ticketmaster.

---
## Ticketmaster Settings
### Consumer Key
Ticketmaster consumer key variable located in your `.env` file
### Consumer Secret

Ticketmaster consumer secret variable located in your `.env` file

>Note: For the two fields above, begin typing the environment variable names located in your `.env` file and the field will automatically populate the values
### Section

Section to map the ticketmaster events when published

### Entry Type

Entry Type to map the ticketmaster events when published

### Enable when published

When you publish an event, should the entry be enabled by default or not. Keep in mind that if you have other custom required fields, enabling this feature will cause problems.


---
## Fields

### Event Search

### Venue Search

___
## Usage

### Dashboard

The plugin dashboard is where you can get a high level view of your venues and a breakdown of all of the events by their current status.

#### New Events
Events yet to be published that have been returned from the Ticketmaster API

#### Updated Events
Published events that have been updated in Ticketmaster since they were published on your site

#### Published Events
The number of events currently published on your site.

### Creating Venues
- wip

### Publishing Events
- wip

### Updating events
- wip
---
## Models

wip

---

## Plugin Event Hooks

wip
___
## Dependencies

wip

---
## Ticketmaster Roadmap

wip

### Matrix Support

wip

___


Brought to you by [Union](https://union.co)
