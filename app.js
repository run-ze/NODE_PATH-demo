const chalk = require('chalk')
const colors = require('colors')

console.log(chalk.green('NODE_PATH works!'))
console.log(chalk.yellow('module.paths:'))
console.log(module.paths)
console.log(colors.trap('also supports local node_modules as fallback!'))
