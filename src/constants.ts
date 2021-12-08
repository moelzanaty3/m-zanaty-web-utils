import os from 'os'
import path from 'path'

const { username } = os.userInfo()

const appRoot = path.dirname(require.main?.filename as string)

export default {
  username,
  appRoot
}
