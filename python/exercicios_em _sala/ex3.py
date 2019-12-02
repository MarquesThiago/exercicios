idade = [1, 2, 3, 45, 45, 45 , 78, 78, 89, 78, 79, 5, 45, 15, 14, 13]
altura = [4.5, 4.2, 2.4,5.6,5.6,4.5, 4.5, 6.5, 7.8, 8.9, 7.5, 9.7, 7.8, 9.8, 7.8, 9.8]
media_altura = 0.0
count = 0
lista1 = []
lista2 = []

for a in altura:
    media_altura = media_altura + a
    count = count + 1

media_altura  = media_altura/count
print (media_altura)

for a in idade:
    if a > 14:
        index_idade = idade.index(a)
        value = altura[index_idade]
        print(value)
        if value < media_altura:
            lista1.append(a)
            lista2.append(value)

print (lista1,"\n\n", lista2)

