import { extends } from '~/commitlint.config'
import type { Command } from './Command'

export class SetVeryImportantValueCommand implements Command {
  type = 'setVeryImportantValue'

  constructor({veryImportantValue}: )
}

export type SetVeryImportantValueCommandData = 
