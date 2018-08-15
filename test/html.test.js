const path = require('path')
const fs = require('fs')

const HTML_PATH = path.join(__dirname, '../src/index.html')
const HTML_STRING = fs.readFileSync(HTML_PATH, 'utf8')

const timeout = 5000

describe(
  'GET / (Home Page)',
  () => {
    let page

    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.setContent(HTML_STRING)
    }, timeout)

    it('should load without error', async () => {
      const content = await page.$eval('#title', e => e.innerText)
      expect(content).toBe('Code Test Client')
    })
  },
  timeout
)
