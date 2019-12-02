hash = {:um => 1, :dois => 2, :tres => 3 ,:quatro => 4}

puts "\tprourando valor pela chave","--------" * 6

puts hash.has_key?(:um)
puts hash.include?(:um)
puts hash.key?(:um)
puts hash.member?(:um)

puts "\n\n","\tprourando se existe o valor","--------" * 6

puts hash.has_value?(3)
puts hash.value?(2)