var request = require ('request')
var cheerio = require('cheerio')

var h1 = []

request('https://animesonlinebr.site/', function (err, res, body){

    if (!err && res.statusCode == 200){
        let $ = cheerio.load(body)
        
            $('h1').each(function(){
                h1.push( $(this).html())
            })
            
            $('p').each(function(){

                console.log($(this).html())
            })
        console.log(h1)
    }
})
