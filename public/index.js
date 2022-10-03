var references = [
  {
    "Name": "Nature (Journal)",
    "url": "https://www.nature.com/search?q=",
    "punto": "a.c-card__link"
  },
  {
    "Name": "Arxiv (Cornell University Repository)",
    "url": "https://www.cornell.edu/search/?q=",
    "punto": "a.gs-title"
  },
  {
    "Name": "harvard open repository",
    "url": "https://dash.harvard.edu/discover?rpp=10&etal=0&query=",
    "punto": "div.artifact-description a"
  },
  {
    "Name": " MIT Open Access Articles Repository",
    "url": "https://dspace.mit.edu/discover?scope=%2F&query=",
    "punto": "div.artifact-description div a"
  },
  {
    "Name": "University of Toronto Digital Repository",
    "url": "https://learn.library.torontomu.ca/srch.php?q=",
    "punto": "span.s-srch-result-guide a"
  },
  {
    "Name": "Stanford Digital Library",
    "url": "https://library.stanford.edu/all/?q=",
    "punto": "h3.result-title a"
  },
  {
    "Name": " Princeton University Repository",
    "url": "https://oar.princeton.edu/simple-search?location=88435%2Fpr1159p&query=",
    "punto": "td.evenRowOddCol a"
  },
  {
    "Name": "Reviews of Modern (Journal)",
    "url": "https://search.aps.org/?q=",
    "punto": "h2.text-xl a"
  },
  {
    "Name": "Columbia University Repository",
    "url": "https://academiccommons.columbia.edu/search?utf8=%E2%9C%93&search_field=all_fields&q=",
    "punto": "h3.index_title document-title-heading col-md-12 a"
  },
  {
    "Name": "Pennsylvania University Repository",
    "url": "https://repository.upenn.edu/do/search/?q=",
    "punto": "span.title a"
  },
  {
    "Name": "University College London Repository ",
    "url": "https://search2.ucl.ac.uk/s/search.html?query=",
    "punto": "li a"
  },
  {
    "Name": "Oxford Repository",
    "url": "https://ora.ox.ac.uk/?utf8=%E2%9C%93&q=",
    "punto": "h3.index_title document-title-heading col-md-12 a"
  },
  {
    "Name": " Cambridge Repository",
    "url": "https://www.repository.cam.ac.uk/discover?scope=%2F&query=",
    "punto": "div.community-browser-row odd-community-browser-row a"
  },
  {
    "Name": "The University of Manchester Repository",
    "url": "https://figshare.manchester.ac.uk/search?q=",
    "punto": "div._1GxLx _1sRSS a"
  }
]

var referencesResponse = []


// FUNCIONES 200
function responsesF(e) {
  e = JSON.parse(e)
  console.log(e)
  document.getElementById("list-links").innerHTML = ""
  e.forEach(element => {
    document.getElementById("list-links").innerHTML += `<p>${element}</p>`
  });
  optenerTitulo()
}

function extraerTitulo(e) {
  e = JSON.parse(e)
  console.log(e)
  optenerQueryForSite(e[0])
}

function agregarAListDeReferencias(e) {
  e = JSON.parse(e)
  console.log(e)

  const referencesJSON = document.getElementById('referencesJSON')

  let pLinks

  for (i = 0; i < e.length; i++) {
    pLinks = `
    <a href=${e[i]} style="background-color:black;color:white">- ${e[i]}</a>
  `
    referencesJSON.innerHTML += pLinks

  }

  referencesResponse.push(e)
}


// FUNCION HTTP
function HttpRequestApi(dato, selectorCSS, funcionrespuesta) {
  theUrl = "https://joorkar.github.io/api";

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      funcionrespuesta(xmlhttp.responseText)
    }
  }
  xmlhttp.open("POST", theUrl);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send(JSON.stringify({ url: dato, selc: selectorCSS }));
}



// FUNCIONES REQUEST
function optenerURL() {
  Url = document.getElementById("textURL").value;
  selector = "p"
  HttpRequestApi(Url, selector, responsesF);
}

function optenerTitulo() {
  Url = document.getElementById("textURL").value;
  selector = "title"
  HttpRequestApi(Url, selector, extraerTitulo);
}

//-------------------- Complemento
function optenerReferenciasDeLink(u, s) {
  Url = u;
  selector = s;
  HttpRequestApi(Url, selector, agregarAListDeReferencias);
}
//--------------------

function optenerQueryForSite(buscar) {
  references.forEach((element) => {
    optenerReferenciasDeLink(element["url"] + buscar, element["punto"])
  })
}