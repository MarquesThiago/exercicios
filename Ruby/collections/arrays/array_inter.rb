list = Array.new

print list, "\n"

list.push("novo_valor")
list.insert(3, "outro valor")

puts "\n\nlista tem agora #{list.count()}"
puts "---------" * 5
print list 
print "\n\n"

puts list.first
puts list.last

print "\n\n"

list.delete_at(2) 
print "\n#{list} remove o valor mencionado"
list.pop()
print "\n#{list} remove o ultimo item"
list.shift()
print "\n#{list} remove o primeiro item"

puts "\n\n\toutros modulos",("------" * 5)

list.append(5)
print list
print "\n #{list.length} diz o tamanho"


puts "\n\n"

dev = %w[s o m o s d e v]

print "#{dev.join()}\n"
print "#{dev.join("-")}\n junta tudo em uma string"

print "#{"somoasdev".chars()} divide por caracter \n"

dev = dev.join("-")

print "#{dev.split("d")} dividi strinf em um array\n  "

list.each{ |n| puts n }

print "pergunta se a lista esta vazia e retorna valor booleando \n#{list.empty?}\n"

list = Array.new
puts  list.empty?
