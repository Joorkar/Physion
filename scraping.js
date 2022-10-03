//Webscraping
const puppeteer = require('puppeteer');
const jsdom = require('jsdom');

function GetPageContent(thUrl,extart) {

(async () => {
    try {
      // Abrimos una instancia del puppeteer y accedemos a la url de google
      const browser = await puppeteer.launch() ;
      const page = await browser.newPage();
      const response = await page.goto(thUrl);
      const body = await response.text();
  
      // Creamos una instancia del resultado devuelto por puppeter para parsearlo con jsdom
      const { window: { document } } = new jsdom.JSDOM(body);
      // Seleccionamos los títulos y lo mostramos en consola
      var pp=[]
      document.querySelectorAll(extart)
        .forEach(element => {
          pp.push(element.textContent);
          console.log("val")
        });



      // Cerramos el puppeteer
      await browser.close();
      return "pp[0]";
    } catch (error) {
      console.error(error);
    }
  })();
  
  
  }

module.exports.GetPageContent = GetPageContent;