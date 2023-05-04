import { promisify } from 'util'
import { Handler } from 'express'
import { randomBytes } from 'crypto'
import { readFile, writeFile } from 'fs'
import { FILENAME } from '../config'


const read = promisify(readFile)


const write = promisify(writeFile)


const DIR = process.env.NODE_ENV === 'production'
  ? '/tmp/'
  : './tmp/'


export const filesystem: Handler = async (_, res) => {
  const content = (await read(FILENAME)).toString('utf-8')

  let json = JSON.parse(content)

  const key = randomBytes(8).toString('hex')

  const value = new Date().getTime()

  json = { ...json, [key]: value }

  await write(`${DIR}/${key}.json`, JSON.stringify(json))

  return res.status(201).json(json)
}



// const memstart = process.memoryUsage()
// const cpustart = process.cpuUsage()

// const memend = process.memoryUsage()
// const cpuend = process.cpuUsage()

// console.log(memend.rss - memstart.rss, memend.external - memstart.external, cpuend)
