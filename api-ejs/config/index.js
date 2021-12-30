module.exports = (app) => {
  require('./cors')(app)

  require('./body-parser')(app)
  require('./files')(app)

  require('./session')(app)
}
