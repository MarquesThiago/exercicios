
var texte = () => {

    let v 
    let vm 
    let t 
    
    return {
        text: function(){
            console.log("qcalculo da velociadeade media")
            console.log("1) calculo de velociade")
            console.log("2) calculo da velocidade media")
            console.log("3) calculo de tempo ")
        },
        calculo: function(numb ){
            texte().text()

            if ( numb == 1 ){

                    v = vm * t 
                    console.log(`o calculo da sua velocidade é ${v}`)

            }
            
            else if (numb == 2 ) {

                    vm = v/t 
                    console.log(`o calculo da sua velocidade media é ${vm}`)
       
            }

            else if (numb == 3 ) {
                
                    t = v/ vm  
                    console.log(`o calculo do seu tempo é ${t}`)

            }

            else{

                texte().text()
            }
        }
    }
}
console.log(texte().calculo(1))

module.exports = texte










// module.exports.velociadeMEdia = () => {
    
//         if (v == undefined && v == null){

//             v = vm * t 
//             console.log(`sua velodidade é de ${v} m/s`)
//         }
//         else if (vm == undefined && vm == null){

//             vm = v / t
//             console.log(`sua velociaded media é de ${vm} m/s`)
//         }
//         else {
//             t  = vm / v 
//             console.log(`seu tempo em media foi de ${t} s`)
//         }
    
        
// } 

