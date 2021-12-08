import chalk from 'chalk'

import constants from '../constants'
import createPrettierFile from './prettier.module'
import createEslintConfiguration from './eslint.module'
import createTypeScriptFile from './typescript.module'
import createIndexFile from './server-ts.module'
import createJasmineConfiguration from './testing-jasmine.module'

const { blue, bold, cyan } = chalk

const createCombo = async (): Promise<void> => {
  console.info(
    cyan(
      `Sir, ${blue(
        bold(`${constants.username}`)
      )}... 🙋🏻 Combo take time as  This meal contain \n ✅  Node with Type Script integrated \n ✅  Prettier \n ✅  Eslint \n ✅  Environment variable integrated \n ✅  Testing using jasmine configuration \n ✅  Basic Endpoint Route  I will install some packages for you... so relax and 🤌🏻`
    )
  )
  await createPrettierFile()
  await createEslintConfiguration('node')
  await createTypeScriptFile('node')
  await createIndexFile()
  await createIndexFile()
  await createJasmineConfiguration()
}

export default createCombo
