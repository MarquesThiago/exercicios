hash = {:um => 1, :dois => 2, :tres => 3 ,:quatro => 4}


hash.each do |n|
    print n, "\n\n"
end

puts "\n\n"
hash.each do |key, value|
    puts "#{key} sua chave e o valor é #{value}"
end

puts "\n\n"
hash.each_pair do |key, value|
    puts "#{key} sua chave e o valor é #{value}"
end

puts "\n\n"
hash.each_key do |key|
    puts "#{key} é a chaveS"
end

puts "\n\n"
hash.each_value do |value|
    puts "o valor é #{value}"
end

puts "\n\n"
for key, value in hash
    puts "#{key} sua chave e o valor é #{value}"
end


