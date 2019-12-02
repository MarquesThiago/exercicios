vai = ['um', "dois", "três" ]
vaar = [1, 23 ,5 ,456 , 24, 62 , 85 ,48 ,94 ]

print vai.sort

#por ordem alfabetica 

print "\n\n"
print vai.sort_by{|z| z[0]}
#comparação ele vai ordenar e o primeirio valor alfabetico va ser colocado em primeiro na posição zero

#print "\n\n"
#print vai.sort_by{|e1,e2| e1[0] <=> e2[0]}
#compara um elemento com o outro padrão enviado por sort com o operador <=> 



print "\n\n"
print vai.sort_by {|v| v.length}

#por tamanho do array 


print "\n\n"
print vaar.any?{|n| n> 12}
# desta se uma dos elementos atende a condição

print "\n\n"
print vaar.all?{|r| r > 12}
#testa se todos os elemente atende a condição

print "\n\n"
par, impar = vaar.partition {|e| e%2 == 0}
#particionamento de array 
print par
print "\n\n"
print impar

# função que retorna o indice  de inde estava a item procurado 
print "\n\n"
print  vaar.index(5)

print "\n\n"
print vai.index("dois")


