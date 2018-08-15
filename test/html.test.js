const path = require('path')
const HTML = path.join(__dirname, '../src/index.html')

const timeout = 5000

describe.skip(
  'GET / (Home Page)',
  () => {
    let page

    beforeAll(async () => {
      console.log(HTML)

      page = await global.__BROWSER__.newPage()
      await page.setContent(HTML)
      await page.goto(HTML)
    }, timeout)

    it('should load without error', async () => {
      const content = await page.$eval('#title', e => e.innerText)
      expect(content).toBe('Code Test Client')
    })
  },
  timeout
)
