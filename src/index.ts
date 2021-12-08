#!/usr/bin/env node
import chalk from 'chalk'
import { prompt } from 'inquirer'

import constants from './constants'
import questions from './utils/questions'
import createTypeScriptFile from './modules/typescript.module'
import createPrettierFile from './modules/prettier.module'
import createEslintConfiguration from './modules/eslint.module'
import createCombo from './modules/node-ts-combo.module'

// eslint-disable-next-line import/newline-after-import
const run = async () => {
  const { blue, bold, green, red } = chalk
  console.log(
    `- Hey Sir, ${blue(bold(`${constants.username}`))}... here's ${green(
      'Younes'
    )} How can I serve you? 👨🏻‍💻`
  )
  console.log(
    `- Sir, Sorry but ${bold(
      `Do not you think, it's a suitable time to stop ${green.italic(
        'being lazy'
      )} and ${green.italic('never use me again ?!!')}`
    )} 🤔🤨 `
  )
  console.log(`- .... ${red('😡😡😡😡')}, no Younes`)
  console.log(`- no problem Sir, tell me how can I help you`)
  try {
    const { isCombo, isUsingPrettier, isUsingTypeScript, framework, isUsingEslint } = await prompt(
      questions
    )
    if (isCombo) {
      await createCombo()
    } else {
      if (isUsingTypeScript) {
        await createTypeScriptFile(framework as string)
      }
      if (isUsingPrettier) {
        await createPrettierFile()
      }
      if (isUsingEslint) {
        await createEslintConfiguration(framework as string)
      }
      if (!isUsingTypeScript && !isUsingPrettier && !isUsingEslint) {
        console.log(red(`Sir, ${blue(bold(`${constants.username}`))}...I wish to help you 😂💔 `))
      }
    }
  } catch (error) {
    console.log(
      red(
        `Whoops!, Sir, ${blue(bold(`${constants.username}`))}... 😂💔 but ${
          (error as Error).message
        }`
      )
    )
  }
}

run()
