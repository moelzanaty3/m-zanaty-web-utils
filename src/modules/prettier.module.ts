import chalk from 'chalk'
import fse from 'fs-extra'
import path from 'path'
import { execSync } from 'child_process'
import constants from '../constants'

const { blue, bold, cyan } = chalk

const createPrettierFile = async (): Promise<void> => {
  console.info(
    cyan(
      `Sir, ${blue(
        bold(`${constants.username}`)
      )}... 🙋🏻 FYI to use prerttier, I will need to install prettier package for you... so relax and 🤌🏻`
    )
  )
  // path of the tsconfig in your project
  const prettierrc: string = path.join(process.cwd(), '.prettierrc')
  const prettierignore: string = path.join(process.cwd(), '.prettierignore')

  const prettierrcConfig = JSON.stringify(
    {
      semi: false,
      singleQuote: true,
      printWidth: 100,
      bracketSpacing: true,
      tabWidth: 2,
      trailingComma: 'none'
    },
    null,
    2
  )
  await fse.writeFile(prettierrc, prettierrcConfig)
  await fse.writeFile(prettierignore, 'build')

  await execSync('npm install --save-dev prettier@^2.5.1')
  await execSync('npm set-script format "prettier --write \'src/**/*.{ts,tsx,js,jsx}\'"')

  console.group(`I am finished Sir, and Here's Prettier Report`)
  console.log(
    '✅ .prettierrc / .prettierignore files successfully created, feel free to play with rules'
  )
  console.log('✅ prettier package installed in devDependencies.')
  console.log('✅ prettier format script added successfully to package.json.')
  console.groupEnd()
}

export default createPrettierFile
