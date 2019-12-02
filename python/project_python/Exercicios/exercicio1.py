placar_faltas = [['Brasil', 'Italia', [10,9]], ['Brasil', 'Espanha',[5,7]], ['Italia', 'Espanha',[7,8]]]
faltas = []

faltas_max = 0
faltas_min  = 0 
nome = ''

    

def init (): 

    

    faltas_fin("Brasil", 0 )
    faltas_fin("Italia", 1 )
    faltas_fin("Espanha", 2 ) 
    print(f"A soma total de faltas foi de {sum(faltas)}")
    max_min()

    



def max_min (): 

   
    faltas_max = faltas.index(max(faltas))
    faltas_min = faltas.index(min(faltas))

    print (f"o time que deve mais faltas e o que tive menos foi respectivamente")

    pais_max_min(faltas_max, "Brasil", 'Italia', "Espanha",nome)
    pais_max_min(faltas_min, "Brasil", 'Italia', "Espanha",nome)


   


def pais_max_min (condiction, pais1 , pais2, pais3 ,var_imprement): 

    if  condiction == 0: 
        var_imprement = pais1
        
        
    elif  condiction == 1: 
        var_imprement = pais2

    else:
        var_imprement = pais3

    print(var_imprement)

   
    


def faltas_fin (pais, indice):
    r = 0 
    for x in placar_faltas:
        for y in x: 
            if y == pais :
                r = r + x[2][ x.index(y)]
                
    faltas.insert(indice , r)


init()
            