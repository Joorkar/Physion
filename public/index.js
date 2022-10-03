

function responsesF(e) {
  e = JSON.parse(e)
  console.log(e)
  //document.getElementById("list-links").innerHTML = ""
  e.forEach(element => {
    document.getElementById("list-links").innerHTML += `<p>${element}</p>`
  });
}

function HttpRequestApi(dato) {
  theUrl = "http://localhost:3000/api";

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      responsesF(xmlhttp.responseText)
    }
  }
  xmlhttp.open("POST", theUrl);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send(JSON.stringify({ url: dato }));
}

let references = [
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

const listLinks = document.getElementById('list-links')
const getLinkUser = document.getElementById('get-user-link').value;
const seeInDisplay = document.fill.link.value
const referencesJSON = document.getElementById('referencesJSON')

let pLinks

console.log(getLinkUser);

const links = [
  'https://www.google.com',
  'https://www.google.com',
  'https://www.google.com',
  'https://www.google.com',
  'https://www.google.com',
]

// how to print array elements in javascript?
/* for (let i = 0; i < links.length; i++) {
  pLinks = `
    <a href="${links[i]}">${links[i]}</a>
  `
  listLinks.innerHTML += pLinks
} */

for (i = 0; i < references.length; i++) {
  pLinks = `
    <a href=${references[i].url}>- ${references[i].Name}</a>
  `
  referencesJSON.innerHTML += pLinks

}

/* references.forEach((reference) => {
  pLinks = `
    <p>${reference}</p>
  `
  referencesJSON.innerHTML += pLinks
}); */


/* `<details>
  <summary>${}</summary>
  <a href="${}">${}</a>
</details>
` */
