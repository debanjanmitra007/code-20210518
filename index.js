const puppeteer= require('puppeteer');

(async () => {
    let contractUrl='https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020';
   
    let browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.goto(contractUrl, { waitUntil :'load', timeout: 0});
    let data =  await page.evaluate(() =>{

        var k=document.querySelector('#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span').childNodes;
        let  PublicationDate = k[0].innerText;
        let BiddingDate = k[18].innerText;
        let Object = k[5].innerText;

        return{
            PublicationDate,
            BiddingDate,
            Object
        }
    });
    console.log(data);

    await browser.close();
})();
