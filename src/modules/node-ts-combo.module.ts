import chalk from 'chalk'
import fse from 'fs-extra'

import constants from '../constants'
import createPrettierFile from './prettier.module'
import createEslintConfiguration from './eslint.module'
import createTypeScriptFile from './typescript.module'
import createIndexFile from './server-ts.module'

const { blue, bold, cyan } = chalk

const createCombo = async (): Promise<void> => {
  console.info(
    cyan(
      `Sir, ${blue(
        bold(`${constants.username}`)
      )}... 🙋🏻 Combo take time as  This meal contain \n ✅  Node with Type Script integrated \n ✅  Prettier \n ✅  Eslint \n ✅  Environment variable integrated \n ✅  Testing using jest configuration \n ✅  Basic Endpoint Route  I will install some packages for you... so relax and 🤌🏻`
    )
  )
  if (!fse.existsSync('DEMO')) {
    await fse.mkdirSync('DEMO')
    await createPrettierFile()
    await createEslintConfiguration('node')
    await createTypeScriptFile('node')
    await createIndexFile()
  }
}

export default createCombo
