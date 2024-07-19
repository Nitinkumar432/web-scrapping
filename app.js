const axios = require('axios');
const cheerio = require('cheerio');

axios.get("https://www.worldometers.info/coronavirus")
    .then(response => {
        handleHtml(response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

function handleHtml(html) {
    let $ = cheerio.load(html);
    let contentArr = $('#maincounter-wrap span');
    
    let totalcases = $(contentArr[0]).text();
    let deaths = $(contentArr[1]).text();
    let recovered = $(contentArr[2]).text();
    
    console.log(`Total cases: ${totalcases}`);
    console.log(`Total deaths: ${deaths}`);
    console.log(`Total recovered: ${recovered}`);
}
