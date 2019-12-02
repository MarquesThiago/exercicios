lista1 = [1, 2, 3 ,4 ]
lista2 = [10, 20, 30 , 40, 50, 60]
lista3 = []
i = 0

for z in range (-1 ,5 ):
    if i < len(lista1):
        lista3.append(lista1[i])
        lista3.append(lista2[i])
    else:
        lista3.append(lista2[i])
        
    i = i + 1

print(lista3)
