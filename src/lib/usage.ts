import { readFile } from 'fs'


export const getUsage = (): Promise<number> => {
  return new Promise((res, rej) => {
    readFile("/proc/" + process.pid + "/stat", function (err, data) {
      console.log(err, data)
      var elems = data.toString('hex').split(' ')
      var utime = parseInt(elems[13])
      var stime = parseInt(elems[14])

      res(utime + stime)
    })
  })
}