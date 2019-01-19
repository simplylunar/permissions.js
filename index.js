/**
 * @description PermissionsJS Master System
 * @author Daniel Newell
 * @author Samuel Voeller
 * @class PermsissionJS
 */
class PermsissionJS {
/**
     *Creates an instance of PermsissionJS.
     * @author Daniel Newell
     * @author Samuel Voeller
     * @param {object} [opts={
     *         storageSystem: 'json',
     *         storageFile: 'permissions.json',
     *         autoSave: true,
     *         prefix: ''
     *     }]
     * @memberof PermsissionJS
     */
    constructor(opts = {
        storage: { system: 'json', perms: 'groups.json', users: 'users.json' },
        autoSave: true,
        prefix: ''
    }) {
        // Place Resources to Scope
        this.opts = opts
        this.system = null
        this.logger = new EventEmitter()
        // Initialize Selected Storage System
        switch(this.opts.storage.system) {
            case 'json': {
                // TODO: Create JSON Subsystem
                this.logger.emit('warning', 'Use of JSON is not reccomended. JSON is prone to corruption.')
                this.system = new JSONSystem(this.opts)
                break
            }
            case 'sqlite': {
                // TODO: Create SQLITE Subsystem
                this.system = new SQLiteSystem(this.opts)
                break
            }
            default: {
                throw new Error('unsupported storage type')
            }
        }

        // Return Selected System after Initialization
        return this.system
    }
}

class JSONSystem {
    constructor(opts) {
        this.opts = opts
    }
}

class SQLiteSystem {
    constructor(opts) {
        this.opts = opts
    }
}
