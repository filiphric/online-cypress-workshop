const { resetDatabase } = require('../../todomvc/resetDatabase')

module.exports = (on, config) => {

  on('task', {
    resetDatabase
  })

};