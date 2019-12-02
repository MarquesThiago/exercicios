a = %w[ mar rato  cavalo  não\sei  não\ sei ] 
#array de com o atalho para string

print "atalho com para array de string separados por espaço ", a

print "\n\n"
print "------" * 15 
print "\n"

print "adicionado valores ao array pelo metodo push e << \n"

f = []
f.push 1 

print f
print "\n\n"

f << 5
print f
print "\n\n"


print "adicionado valores ao array de string pelo metodo push e << \n"

g = "teste \n"
print g + "\n"

g += "  outro teste \n"
print  g + "\n"

print "gerando o id do objeto \n"
print g.object_id, "\n\n"


print "utilizando find e map \n"


print "find para encontra um item dentro de uma listra \n"

print "se utilizarmos o find sem _all ele so retorna um valor\n"
x = f.find{|x| x/5 == 1 || x == 1   }
print x, "\n\n"

print "se usarmos _all ele retorna um array de variaveis encontradas\n"
x = f.find_all{|x| x/5 == 1 || x == 1   }
print x, "\n\n" 

print "utlizando do map para altera um item da listra de cada vez \n"

z =x.map{|z| z*2}

print z, "\n\n"

print "utlizando ou collect no lugar do map para altera um item da listra de cada vez \n"

z =x.find_all{|z| z!= 0}.map{|z| z*2}

print z, "\n\n"
