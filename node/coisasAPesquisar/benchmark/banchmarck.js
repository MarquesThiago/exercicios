var num = 100


// async function dd (i ) {
//     let arryas = []
//     var f = 0

    
//     while (f < num )
//         arryas.push(i)
//       await  console.log(arryas.length)
 
//         if (arryas.lenght == 100){

          
//         }
       
//     }



// async function d1 (i ) {
//     let arryas = []
//     let f = 0
    
//     var len = arryas.length
//     while (f < num ){
//             arryas.push(i)
//          await  console.log(len)
//         }
       
//     }

// console.log(false)
// for (x = 0; x < 10; x++ ){
// setInterval (100, dd(10))
// }



const bench = require('benchmark')
let suite = new bench.Suite

suite
    .add("nãoOtimizado", dd)
    .add("otimizado", d1)
    .on("cycle", (evt) => {
        console.log(evt.target)

    })
    .on("complete",() => {
        console.log("mais rapido: "+this.filter("fastest").map("name"))
    })
    .run(async)