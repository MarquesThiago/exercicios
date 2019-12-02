nco = "tag"

noc_two = nco.dup
   
print "\n.dup duplica a variavel que pode ser recebida por outra variavel "
print noc_two


#heredoc
print "heredoc ou stringonas são grande strings"

stria  =  "\n\ngrande string que demostra
dividida para ter multiplas
linhas
"

puts stria

#metodo para replace tambem utilizado com expressões regulares 

print "\n\n"
print "undoistres".gsub(/dois/,  "nove")



#metodo de retornar so os item do array sobre uma condição
a = %w[um dois seis quatro nove nos]
print "\n\n"
print a
print "\n"
print a.grep(/s$/)

#casamento 
# match data pega os valores de uma expressã oirrugular

print "\n\n"
s = /(..)\/(..)\/(....)/
mt = s.match("26/10/2019")
print mt
