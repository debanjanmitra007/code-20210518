const puppeteer= require('puppeteer');

(async () => {
    let contractUrl='https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020';
   
    let browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.goto(contractUrl, { waitUntil :'load', timeout: 0});
  
    await browser.close();
})();
