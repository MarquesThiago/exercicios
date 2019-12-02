lista1 = [['vectra', 9], ['Gol', 10], ['Corsa', 11 ], ['fit', 12.5], ["Porche", 25.9]]
lista2 = [] 
nome = []

for x in lista1:
   
    nome.append(x[0])
    lista2.append(x[1])


f = 0
cont = 1
while f == 0: 
    if lista2 != []:
        vel = max(lista2)
        index_vel = lista2.index(vel)
        print(f"{cont}º o carro mais economico é {nome[index_vel]} com velocidade de {vel} Km/h")
        lista2.remove(vel)
        nome.remove(nome[index_vel])
        cont = cont + 1
    
    else:
        f = 1 



arq = open('c:\\Users\\thiago.marques\\Desktop\\project_python\\Exercicios\\arquiv.txt', 'r') 
test = arq.read()
print(test)
arq.close()


# economic = max(lista2)
# print(f"o carro mais economico é {nome[lista2.index(economic)]} com {economic} km/h")