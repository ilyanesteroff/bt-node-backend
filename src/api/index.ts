import { Express } from 'express'
import { networking, filesystem, measureStart, measureStop, crypto } from '../handlers'


export const api = (app: Express) => {
  app.post('/measure/start', measureStart)
  app.post('/measure/stop', measureStop)

  app.post('/networking', networking)
  app.post('/crypto', crypto)
  app.post('/fs', filesystem)
}