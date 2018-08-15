const URL = process.env.URL || 'http://localhost:8080'

const timeout = 5000

describe.only(
  'GET / (Home Page)',
  () => {
    let page

    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.goto(URL)
    }, timeout)

    it('should load without error', async () => {
      const content = await page.$eval('#title', e => e.innerText)
      expect(content).toBe('Code Test Client')
    })
  },
  timeout
)
