import { writeFileSync } from 'fs'
import { FILENAME } from '../config'


export const setup = async () => {
  writeFileSync(FILENAME, '{}')
}