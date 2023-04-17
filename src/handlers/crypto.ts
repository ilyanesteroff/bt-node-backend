import { promisify } from 'util'
import { Handler } from 'express'
import { randomBytes, createHash, pbkdf2 } from 'crypto'


const pbkdf2async = promisify(pbkdf2)


export const crypto: Handler = async (_, res) => {
  const password = randomBytes(8).toString('hex')

  const key = await pbkdf2async(password, 'salt', 10000, 24, 'sha-256') as Buffer

  const str = key.toString('hex')

  const hash = createHash('sha256').update(str).digest('hex')

  return res.status(201).json({ hash, key: str })
}