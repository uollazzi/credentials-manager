#!/usr/bin/env node

const program = require('commander');

program
  .command('add')
  .description('add entry')
  .action(require('./commands/add'));

program
  .command('update [name]')
  .description('update entry')
  .action(require('./commands/update'));

program
  .command('del [name]')
  .description('delete entry')
  .action(require('./commands/delete'));

program
  .command('search [query]', {
    isDefault: true
  })
  .description('search entries by name or by tag')
  .action(require('./commands/search'));

program.parse(process.argv);