const fs = require('fs')
const EventEmitter = require('events')

/**
 *
 */

class JSONStore {
    constructor(opts = {
        autoSave: true,
        users: 'users.json',
        groups: 'groups.json'
    }) {
        this.opts = opts
        this.logger = new EventEmitter()

        try {
            this.groups = JSON.parse(fs.readdirSync(`./${this.opts.groups}`))
            // log loading of data and groupcount, etc
        } catch (err) {
            this.users = require('./groups.json')
            // log creation of data
        }

        try {
            this.users = JSON.parse(fs.readdirSync(`./${this.opts.users}`))
            // log loading of users and usercount, etc
        } catch (err) {
            this.users = require('./users.json')
            // log creation of users
        }

        saveAll().then(() => {
            // log complete on initial save
        }).catch((err) => {
            // log error on initial save
        })
    }

    async reloadPermissions () {
        return new Promise(async (resolve, reject) => {
            try {
                this.groups = await JSON.parse(await fs.readdirSync(`./${this.opts.groups}`))
                return resolve()
            } catch (err) {
                return reject(err)
            }
        })
    }

    async reloadUsers () {
        return new Promise(async (resolve, reject) => {
            try {
                this.users = await JSON.parse(await fs.readdirSync(`./${this.opts.users}`))
                return resolve()
            } catch (err) {
                return reject(err)
            }
        })
    }

    async saveAll () {
        return new Promise(async (resolve, reject) => {
            try {
                await fs.writeFileSync(`./${this.opts.groups}`, await JSON.stringify(this.groups, null, 2))
                await fs.writeFileSync(`./${this.opts.users}`, await JSON.stringify(this.users, null, 2))
                return resolve()
            } catch (err) {
                return reject(err)
            }
        })
    }
}
