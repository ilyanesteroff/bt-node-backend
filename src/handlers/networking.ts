import axios from 'axios'
import { Handler } from 'express'


const makeReq = async (url: string) => {
  try {
    const options = { validateStatus: () => true }

    const res = await axios.get(url, options)

    return !res.status.toString().startsWith('4')
  } catch {
    return false
  }
}


export const networking: Handler = async (_, res) => {
  const urls = [
    'https://www.google.com/',
    'https://www.airbnb.com/',
    'https://www.deel.com/'
  ]

  let successfull = 0
  let failed = 0

  for (let url of urls) {
    const res = await makeReq(url)

    res
      ? successfull += 1
      : failed += 1
  }

  return res.status(201).json({ successfull, failed })
}