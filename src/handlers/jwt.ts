import { promisify } from 'util'
import { Handler } from 'express'
import { randomBytes } from 'crypto'
import { sign, verify } from 'jsonwebtoken'


export const signJWT = promisify(sign)
export const verifyJWT = promisify(verify)


export const jwt: Handler = async (_, res) => {
  const username = randomBytes(8).toString('hex')
  const email = randomBytes(10).toString('hex')

  const secret = randomBytes(24).toString('hex')

  const token = await signJWT({ username, email }, secret) as string

  const getPayload = async (): Promise<any> => {
    return new Promise((resolve, reject) => {
      verify(token, secret, (err: any, decoded: any) => {
        err && !decoded
          ? reject()
          : resolve(decoded)
      })
    })
  }

  const payload = await getPayload()

  return res.status(201).json({ token, payload })
}