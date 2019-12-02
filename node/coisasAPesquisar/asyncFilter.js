var fs = require('fs')
var async = require('async')

var words = ['map.txt', 'waterful.txt', 'faler.txt']

//so funciona se ouver um callback mesmo 

async.filter(words, (words, callback) => {
    fs.access(words , (err) => {
        callback(null, !err)
    });
    
    },
       function (err, results) {
        console.log('results existing' , results)
    }
)