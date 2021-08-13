const puppeteer = require('puppeteer');
app = async (click) => {
  const browser = await puppeteer.launch();
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const page = await browser.newPage();
  page.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36")
  await page.goto('https://popcat.click/');

  await delay(2000);  
  console.log('ready!');
  for (let i = 0; i < click ; i ++ ){
    await delay(Math.random() * 90);  
    await page.click('[id="app"]');
    console.log(`meow ~ x ${i}`);
    if (i % 800 === 0) {
      await delay(3000);
      await page.screenshot({path: `screenshot${i}.png`});
    }
  }
  await page.screenshot({path: `screenshot.png`});
  await browser.close();
}

app(9999);
