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

>**Note**: For the two fields above, begin typing the environment variable names located in your `.env` file and the field will automatically populate the values
### Section

Section to map the ticketmaster events when published

### Entry Type

Entry Type to map the ticketmaster events when published

### Enable when published

When you publish an event, should the entry be enabled by default or not. Keep in mind that if you have other custom required fields, enabling this feature will cause problems.


---
## Fields

### Venue Search
Dynamic field where you can search for your specific venue. Once a venue is selected, the venue data from Ticketmaster will be populated below.

### Event Search
Like the Venue Search field, this will also let you search for a specific event from Ticketmaster and automatically populate a field set based on the data returned.

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
Add the Venue Search field to the desired Element from the Craft Settings Menu. Once the field has been added, search for your venue, select it, and save the Element. Once the Element has been saved, the Venue will appear in the sidebar of the Events section of the plugin.

### Updating events
Once your Venue has been added via the Venue Search field, you can fetch events for that venue from the "Events" section of the plugin. Select your Venue from the sidebar and use the "Fetch" dropdown for that venue. The plugin will fetch all current and new events from Ticketmaster and update their status on your site accordingly.

### Publishing Events
To publish the Ticketmaster event to the desired Section/Entry Type specified in the settings, simply select one or more events from the Events section of the plugin and select "Publish" from the Action dropdown. Publishing can also be accomplished from the Event Detail page by using the Save Event dropdown and selecting "Publish Event".

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
