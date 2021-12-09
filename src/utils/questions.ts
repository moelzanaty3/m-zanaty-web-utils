import chalk from 'chalk'

const { bold, green } = chalk

interface Answer {
  isUsingTypeScript?: string
  isUsingPrettier?: string
  isUsingHusky?: string
  isUsingEslint?: string
  framework?: string
  isCombo?: string
  isUsingJasmine?: string
}

const questions = [
  {
    type: 'confirm',
    message: `${bold('Sir')}, ${green('Do you need Node with TypeScript Starter Combo ⁉️')}`,
    default: true,
    name: 'isCombo'
  },
  {
    type: 'confirm',
    message: `${bold('Sir')}, ${green('Do you need prettier ⁉️')}`,
    default: true,
    name: 'isUsingPrettier',
    when: (answers: Answer) => !answers.isCombo
  },
  // {
  //   type: 'confirm',
  //   message: `${bold('Sir')},  ${green(
  //     'Do you need husky to improve your commits and more 🐶 woof!⁉️'
  //   )}`,
  //   default: false,
  //   name: 'isUsingHusky'
  // },
  {
    type: 'confirm',
    message: `${bold('Sir')}, ${green('Do you use typescript ⁉️')}`,
    default: false,
    name: 'isUsingTypeScript',
    when: (answers: Answer) => !answers.isCombo
  },
  {
    type: 'list',
    message: `${bold('Sir')}, ${green('Pick the framework to generate tsconfig.json for you: ⁉️')}`,
    name: 'framework',
    choices: ['react', 'node', 'nextjs'],
    when: (answers: Answer) => answers.isUsingTypeScript
  },
  {
    type: 'confirm',
    message: `${bold('Sir')}, ${green('Do you need jasmine for testing configuration ⁉️')}`,
    name: 'isUsingJasmine',
    when: (answers: Answer) => !answers.isCombo
  },
  {
    type: 'confirm',
    message: `${bold('Sir')}, ${green('Do you need eslint configuration ⁉️')}`,
    name: 'isUsingEslint',
    when: (answers: Answer) => answers.framework === 'node'
  }
]

export default questions
