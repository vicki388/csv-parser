// Load the csv-parser
var csv = require('./lib/csv.js')

//Require file system
var fs = require('fs');

var smallData 	= './sample_data/sample.csv'
var BigData 	= './sample_data/Fielding.csv'
var output      = "./sample_data/output.txt"


//Synchronous Parsing
// var syncR = csv.parseSync(smallData)
// console.log(syncR)

//ASynchronous Parsing
//var aSyncR = csv.parseAsync(smallData, csv.printsAsync)
//console.log(aSyncR)

// csv.parseAsync(url, function(error, data){
// 	if (error)
// 		throw error
// 	console.log(data)	
// })

 //fs.createReadStream('path/to/data.csv')
 fs.createReadStream(smallData)
 .pipe(csv.parsePipe())
 .pipe(fs.createWriteStream(output))

// var p = csv.parseObject(url)
// p.on('data', function(data){
// 	console.log('got some data:' + data)
// })
// p.on('end', function(){
// 	console.log('no more data')
// })
// p.on('error', function(err){
// 	alert('something error' + err)
// })

// p.run()