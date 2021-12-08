import chalk from 'chalk'
import fse from 'fs-extra'
import path from 'path'
import { execSync } from 'child_process'
import constants from '../constants'

const { blue, bold, cyan } = chalk

const createJasmineConfiguration = async (): Promise<void> => {
  console.info(
    cyan(
      `Sir, ${blue(
        bold(`${constants.username}`)
      )}... 🙋🏻 install needed Dependencies for jasmine and add configuration... so relax and 🤌🏻`
    )
  )
  // install needed Dependencies
  await execSync('npm install supertest@^6.1.6 jasmine-spec-reporter@^7.0.0 jasmine@^3.10.0')
  await execSync('npm install --save-dev @types/jasmine@3.10.2 @types/supertest@^2.0.11')
  await execSync('npm set-script test "npx tsc && jasmine"')
  // created needed directory
  const configFolderPath = path.join(constants.appRoot, 'config')

  await fse.mkdirSync('spec/support', { recursive: true })
  const jasmineFilePath: string = path.join(process.cwd(), 'spec', 'support', 'jasmine.json')
  const jasmineConfigBuffer: Buffer = await fse.readFile(
    path.join(configFolderPath, 'jasmine.json')
  )
  await fse.writeFile(jasmineFilePath, jasmineConfigBuffer.toString())

  await fse.mkdirSync('src/tests/helpers', { recursive: true })
  const jasmineReporterFilePath: string = path.join(
    process.cwd(),
    'src',
    'tests',
    'helpers',
    'reporter.ts'
  )
  const jasmineReporterConfigBuffer: Buffer = await fse.readFile(
    path.join(configFolderPath, 'reporter.ts')
  )
  await fse.writeFile(jasmineReporterFilePath, jasmineReporterConfigBuffer.toString())

  const baseTestFilePath: string = path.join(process.cwd(), 'src', 'tests', 'index.spec.ts')
  const baseTestConfigBuffer: Buffer = await fse.readFile(
    path.join(configFolderPath, 'index.spec.ts')
  )
  await fse.writeFile(baseTestFilePath, baseTestConfigBuffer.toString())

  console.group(`I am finished Sir from adding jasmine configuration, and Here's what I did:- `)
  console.log('✅ starter files successfully created, feel free to play with it')
  console.log(`✅ u can use ${blue('npm run test')} to start testing I created simple one for you`)
  console.groupEnd()
}

export default createJasmineConfiguration
