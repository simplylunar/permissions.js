# Home
## About
Permissions is all about making your user management as easy as possible!
You can create your own groups and roles. Add users to them for simple but highly customizable permissions and access management for any services.
Need some tips? [Check Out Here](https://permissions.js.org/examples)

## Installation

Installing Permissions.JS is simple as can be!
```
$ npm install --save permissions
```

## Configuration
```js
const PermsJS = require('permissions.js')
const Permissions = new PermsJS({
    storageSystem: 'json', // or sqlite (sqlite is reccomended)
    storageFile: 'permissions.json', // file or database name
    autoSave: true, // or false
    prefix: '', // prefix for nodes (prefix.)admin.ban
})
```

## Usage
For advanced usage please visit our [documentation](http://permissions.js.org/docs/latest/get_started.md).
The following is just for quick reference.

### Declaring Permissions Requirement
```js
const permissions = require('permissions.js');
const permissionsToAdd = ["a", "b"];
const permissionsFile = 'permissions.json';
permissions.savePermissions(permissionsToAdd, permissionsFile);
```
