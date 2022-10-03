const request = require('request')
const jsdom = require('jsdom');

function este(thUrl,extart) {
    request(thUrl, function (
        error,
        response,
        body
    ) {
      const { window: { document } } = new jsdom.JSDOM(body);
      // Seleccionamos los títulos y lo mostramos en consola
      var pp=[]
      document.querySelectorAll(extart)
        .forEach(element => {
          pp.push(element.textContent);
        });
        return pp;
    })
}

module.exports.este = este;