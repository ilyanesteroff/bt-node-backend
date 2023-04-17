import { Handler } from 'express'


let cpu: NodeJS.CpuUsage | null
let mem: NodeJS.MemoryUsage | null


export const measureStart: Handler = (_, res) => {
  const _cpu = process.cpuUsage(cpu!)
  const _mem = process.memoryUsage()

  cpu = _cpu
  mem = _mem

  return res.status(201).json({})
}


export const measureStop: Handler = (_, res) => {
  const _cpu = process.cpuUsage(cpu!)
  const _mem = process.memoryUsage()

  const data = {
    cpu: (_cpu!.system + _cpu.user),
    mem: ((_mem.heapUsed - mem!.heapUsed) / (1024 * 1024))
  }

  cpu = null
  mem = null

  return res.status(201).json(data)
}