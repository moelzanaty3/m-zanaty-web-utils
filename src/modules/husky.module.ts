import chalk from 'chalk'
import { execSync } from 'child_process'
import constants from '../constants'

const { blue, bold, cyan } = chalk

const createHuskyConfiguration = async (): Promise<void> => {
  console.info(
    cyan(
      `Sir, ${blue(
        bold(`${constants.username}`)
      )}... 🙋🏻 FYI to use husky, I will install husky package for you... so relax and 🤌🏻`
    )
  )
  await execSync('npm install --save-dev husky pretty-quick')
  await execSync('npx husky install')
  await execSync('npm set-script prepare "husky install"')
  await execSync('npm set-script format:quick "pretty-quick --staged"')
  await execSync('npx husky add .husky/pre-commit "npm run format:quick"')

  console.group(`I am finished Sir, and Here's Husky Report`)
  console.log('✅ Husky / pretty-quick packages installed')
  console.log('✅ Edit package.json > prepare script and run prepare script once')
  console.log('✅ Add a hook: for pre-commit')
  console.groupEnd()
}

export default createHuskyConfiguration
