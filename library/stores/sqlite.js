class Loader {
    constructor(opts) {
      this.opts = opts
    }
    async initialize () {
      this.users = await fetchUsers(this.opts.userFile || 'users.sqlite')
      this.groups = await fetchGroups(this.opts.groupFile || 'groups.sqlite')
    }
}
module.exports = Loader
