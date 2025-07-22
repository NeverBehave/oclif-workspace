import {Args, Command, Flags} from '@oclif/core'
import { libFunction } from '@oclif-workspace/lib/src/index'

export default class FooBar extends Command {
  static override args = {}
  static override description = 'foobar function'
  static override examples = []
  static override flags = {}

  public async run(): Promise<void> {
    this.log('Calling lib function...')
    const result = libFunction()
    this.log('Result from lib function:', result)
  }
}
