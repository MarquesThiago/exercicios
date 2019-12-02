lista1 = [['vectra', 9], ['Gol', 10], ['Corsa', 11 ], ['fit', 12.5]]
lista2 = [] 
nome = []

def init():
    division_array()
    calc_litros()
    


def division_array():
    for x in lista1:

        lista2.append(x[1])
        nome.append(x[0])

def calc_litros():
    economico = max(lista2)
    index_economico = lista2.index(economico)
    print(f'o modelo mais economico é o {nome[index_economico]} com {economico} km/l')
    for x in lista2:
        i = lista2.index(x)
        y = 100/x * 3.5 
        print(f'para {nome[i]} o percorrendo 100km o valor da gasolina e {y:2}')


init()


