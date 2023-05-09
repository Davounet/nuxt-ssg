export default defineEventHandler(async event => {
  return { alive: true, date: new Date().toISOString() }
})
