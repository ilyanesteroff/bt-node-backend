import { Express } from 'express'
import { networking, filesystem, measureStart, measureStop, jwt } from '../handlers'


export const api = (app: Express) => {
  app.post('/measure/start', measureStart)
  app.post('/measure/stop', measureStop)

  app.post('/networking', networking)
  app.post('/fs', filesystem)
  app.post('/jwt', jwt)
}