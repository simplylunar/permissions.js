class PermissionsJS {
  constructor(opts = {
    type: 'json'
  }) {
    this.opts = opts
  }
  async initialize () {
    return new Promise(async (resolve, reject) => {
      try {
        // Load Selected Database Store
        this.LoaderRaw = await require(`./library/stores/${this.opts.type}.js`)
        this.raw = new this.LoaderRaw(this.opts)
        await this.raw.initialize()

        // Apply Database Accessers
        this.reload = this.raw.reload
        this.save = this.raw.save

        return resolve()
      } catch (err) {
        return reject(err)
      }
    })
  }
}
module.exports = PermissionsJS
