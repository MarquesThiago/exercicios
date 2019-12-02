hash = Hash.new


print hash
print "\n"
puts hash.empty?





hash =  {saopaulo: "são paulo", riodejaneiro: "rio de janeiro" }
print hash
print "\n"

hash[:amazonas] = "manaus"
print  hash,"\n"




puts "as chaves",hash.keys


puts "\n\nos valores",hash.values

puts "\n\n",hash[:saopaulo]





puts "\n\nvendo o tamanhp do hash", "------------"*5
puts "tamanho sobre o hashe",hash.length
puts "tamanho sobre o hashe", hash.size


