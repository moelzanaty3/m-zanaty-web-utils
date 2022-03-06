import chalk from 'chalk'
import fse from 'fs-extra'
import path from 'path'
import { execSync } from 'child_process'
import constants from '../constants'

const { blue, bold, cyan } = chalk

const createIndexFile = async (): Promise<void> => {
  console.info(
    cyan(
      `Sir, ${blue(
        bold(`${constants.username}`)
      )}... Project Initialization is cooking now 👨🏻‍💻········`
    )
  )

  await fse.mkdirSync('src')
  // Create Server Init
  await execSync('npm init -y')
  const index: string = path.join(process.cwd(), 'src', 'index.ts')
  const dotenvFile: string = path.join(process.cwd(), '.env')
  // write starter code
  const configFolderPath = path.join(constants.appRoot, 'config')
  const startCodeBuffer: Buffer = await fse.readFile(path.join(configFolderPath, 'start-ts.ts'))
  await fse.writeFile(index, startCodeBuffer.toString())
  await fse.writeFile(dotenvFile, 'PORT=3000')
  // install needed packages
  await execSync('npm install express@^4.17.1 morgan@^1.10.0 dotenv@^10.0.0')
  await execSync(
    'npm install --save-dev @types/express@^4.17.13 @types/morgan@^1.9.3 @types/node@^16.11.12 nodemon@^2.0.15 rimraf@^3.0.2 ts-node@^10.4.0 typescript@^4.5.2'
  )
  await execSync('npm set-script dev "nodemon ./src/index.ts"')
  await execSync('npm set-script clean "rimraf build/"')
  await execSync('npm set-script build "yarn clean && npx tsc"')
  await execSync('npm set-script start "npm run build && nodemon build/index.js"')

  console.group(`I am finished Sir, and Here's what I did:- `)
  console.log('✅ starter files successfully created, feel free to play with it')
  console.log('✅ typescript and needed scripts added.')
  console.log(`✅ u can use ${blue('npm run dev')} to start dev`)
  console.groupEnd()
}

export default createIndexFile
