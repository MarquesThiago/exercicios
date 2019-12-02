lista = [2.5, 7.5, 10.0, 4.0]
tam = len(lista)

print (lista)
print (f"a media é {sum(lista)/ tam }")
for x in lista:
    if x  <= 2.5: 
        print(f"os valores abaixo de media {x}")
