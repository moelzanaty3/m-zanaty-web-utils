import fse from 'fs-extra'
import path from 'path'
import Frameworks from '../interfaces/frameworks.interface'

const getConfigFiles = async (dirPath: string): Promise<Frameworks | undefined> => {
  const configFiles: Frameworks = {
    node: '',
    react: '',
    nextjs: ''
  }
  try {
    const files = await fse.readdir(dirPath)
    files.map((file: string): void => {
      // framework name is situated between 2 dots eg- react between 2 '.'(s)
      const framework = file.split('.')[1]
      configFiles[framework as keyof Frameworks] = path.join(dirPath, file)
      return undefined
    })
    return configFiles as Frameworks
  } catch (error) {
    console.log((error as Error).message)
  }
  return undefined
}
export default {
  getConfigFiles
}
