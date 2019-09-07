var argv = require('minimist')(process.argv.slice(2));
const fs = require('fs');


var jsonFile = argv._[0];
var mappingsFile = argv._[1];

var credJson = JSON.parse(fs.readFileSync(jsonFile));
var mappings = JSON.parse(fs.readFileSync(mappingsFile));

var addressToCred = credJson[1].credJSON.addressToCred
let recipients = [] 
for(key in addressToCred){
  for(name in mappings){
    if(key.includes(name)){
      console.log(mappings[name] + ",cred,"+ addressToCred[key][addressToCred[key].length-2])
      recipients.push([mappings[name],"cred",addressToCred[key][addressToCred[key].length-2]])
    }
  }
}
