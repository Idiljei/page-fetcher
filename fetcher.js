// fetcher.js http://www.example.edu/

const url = process.argv.slice(2); 
const path = url[1] // assigns variable to url[1] which is my specified path ie ./index.html

const request = require('request'); // when you require http http://www.example.edu/
const fs = require('fs'); 

request(url[0], (error, response, body) => { 
 // console.log('error:', error); // print the error if  one occured 
  fs.writeFile(path, body, (error) => { // writing to the path index.html (writing the body and error)
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`) 
  })
});