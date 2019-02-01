class Loader {
  constructor(opts) {
    this.opts = opts
  }
  async initialize () {
    this.users = await fetchUsers(this.opts.userFile || 'users.json')
    this.groups = await fetchGroups(this.opts.groupFile || 'groups.json')
  }
}
module.exports = Loader

async function fetchUsers (userFile) {
  return new Promise((resolve, reject) => {
    try {
      var users = JSON.parse(require('fs').readdirSync(`./${userFile}`))
      if(!users) users = require('../defaults/users.json')
      return resolve({ users })
    } catch (err) {
      if(err.message.indexOf('ENOENT') > -1) {
        var users = require('../defaults/users.json')
        return resolve({ users })
      }
      return reject(err)
    }
  })
}

async function fetchGroups(groupFile) {
  return new Promise((resolve, reject) => {
    try {
      var groups = JSON.parse(require('fs').readdirSync(`./${groupFile}`))
      if(!groups) groups = require('../defaults/groups.json')
      return resolve({ groups })
    } catch (err) {
      if(err.message.indexOf('ENOENT') > -1) {
        var groups = require('../defaults/groups.json')
        return resolve({ groups })
      }
      return reject(err)
    }
  })
}
async function fetchPerms(permFile) {
  return new Promise((resolve, reject) => {
    try {
      var perms = JSON.prse(require('fs').readdirSync(`./${permFile}))
      if(!perms) perms = require('../defaults/perms.json')
      return resolve({ perms })
    }
    catch (err) {
      if(err.message.indexOf('ENOENT') > -1) {
        var perms = require('../defaults/perms.json')
        return resolve({ perms })
      }
      return reject(err)
    }
  })
}
