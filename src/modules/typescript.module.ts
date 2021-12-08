import chalk from 'chalk'
import fse from 'fs-extra'
import path from 'path'
import Frameworks from '../interfaces/frameworks.interface'
import utils from '../utils/get-config-files'
import constants from '../constants'

const { blue, bold, cyan } = chalk

// interface UpdateConfigInterface {
//   allowSyntheticDefaultImports: boolean
//   lib: string[]
//   module: string
//   moduleResolution: string
//   target: string
// }

const createTypeScriptConfiguration = async (framework: string) => {
  console.info(
    cyan(
      `Sir, ${blue(
        bold(`${constants.username}`)
      )}... 🙋🏻 one second and you will find tsconfig.json file in your project.. so relax and 🤌🏻`
    )
  )

  const configFolderPath = path.join(constants.appRoot, 'config')
  // get path's for all frameworks typescript config
  const frameworksConfigFiles: Frameworks =
    (await utils.getConfigFiles(configFolderPath)) || ({} as Frameworks)
  // get target typescript framework configuration
  const targetFrameworkConfigBuffer: Buffer = await fse.readFile(
    frameworksConfigFiles[framework as keyof Frameworks]
  )
  const tsconfig: string = path.join(process.cwd(), 'tsconfig.json')
  // let targetFrameworkConfig: string = targetFrameworkConfigBuffer.toString()
  // path of the tsconfig in your project

  // if (framework === 'node') {
  //   const version = parseInt(process.versions.node.split('.')[0], 10)

  //   if (version >= 14) {
  //     // Optimal config for Node v14.0.0 (full ES2020)
  //     const updateConfig = {
  //       allowSyntheticDefaultImports: true,
  //       lib: ['es2020'],
  //       module: 'es2020',
  //       moduleResolution: 'node',
  //       target: 'es2020'
  //     }

  //     const configObj = Object.keys(updateConfig).reduce(
  //       (prev, curr) => ({
  //         ...prev,
  //         compilerOptions: {
  //           ...prev.compilerOptions,
  //           [curr]: updateConfig[curr as keyof UpdateConfigInterface]
  //         }
  //       }),
  //       JSON.parse(targetFrameworkConfig.toString())
  //     )

  //     targetFrameworkConfig = JSON.stringify(configObj, null, 2)
  //   }
  // }

  await fse.writeFile(tsconfig, targetFrameworkConfigBuffer.toString())

  console.log(
    blue(
      `😋😋 Sir, ${blue(
        bold(`${constants.username}`)
      )}... ✅ tsconfig.json successfully created 😋😋`
    )
  )
}

export default createTypeScriptConfiguration
