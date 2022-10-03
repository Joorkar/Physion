const express = require("express")
const bodyParser = require("body-parser");
const app = express()
const path = require("path")
const { Curl } = require("node-libcurl");

const PUERTO = process.env.PORT || 3000;
app.set('port', PUERTO)



// Escabrindependecen

const request = require('request')
const jsdom = require('jsdom');



//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Minddleware 
app.use(express.static(path.join(__dirname, "public")))

// routers

//----------------------------------------------------------------------------------------
app.post('/api', async (req, res) => { //Optine informacion de las paginas
  if (!req.body || !req.body.url) {
    // Lanzar exception 400
  }

  const url = req.body.url;
  const selector = req.body.selc;

try {
  downloadPage(url).then((body) => {
    const elements = forHtml(body,selector);
    res.send(elements);
  });

} catch (error) {
  res.send([]);
}

})
//----------------------------------------------------------------------------------------



function downloadPage(url) {
  try {
    return new Promise((resolve, reject) => {
      request(url, (error, response, body) => {
        if (error) reject(error);
        if (response.statusCode != 200) {
          reject('Invalid status code <' + response.statusCode + '>');
        }
        resolve(body);
      });
    });
  } catch (error) {
    return "";
  }
  
}

function forHtml(body,elemento) {
  try {
    let elements = [];
  const { window: { document } } = new jsdom.JSDOM(body);
  document.querySelectorAll(elemento).forEach(element => elements.push(element.textContent));
  return elements;
  } catch (error) {
    return [];
  }
}


app.listen(app.get("port"), () => {
  console.log(`Aplicacion corendo en el puerto ${app.get("port")}`)
})