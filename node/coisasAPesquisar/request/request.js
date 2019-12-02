const request = require('request')
const fs = require('fs')

request('https://tuaserie.com/video/QUQ2djVkeHJEalJ6OG1VQXBkaGQwN1YwMUVkZ0JENUplbHVSX1Fwa1g1YjdkNjFJMi1WUkJ1aWdWTjVGbHIzYmNKNV9XUFE0dTlEWVdxa3dqc2RxX1otdFZWZHBlc280c1RrM280RHdIdmFjZG9fSV9GaVNjZHRnM1BDamVWNDc1QTN4emIxOU9UeTI', function(err, res, body){
    if (!err && res.statusCode === 200){
        console.log(body)
    }
})

request('https://www.animesonlinebr.biz/').pipe(fs.WriteStream('home.txt'))
request('https://animesonlinebr.site/_public/images/logo.png').pipe(fs.WriteStream('logo.jpg'))
