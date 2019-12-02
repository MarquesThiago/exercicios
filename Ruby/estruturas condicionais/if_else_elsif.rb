print "digite um valor pra teste: "
raio= gets 

raio = raio.to_i



if raio > 70 
    puts "maior que 70"
elsif 50 > raio && raio > 20
    puts "maior que 20 "
elsif 10 < raio || 5 == raio
    puts "maior que 10 ou igual a 5 "
else
    puts "cara não sei" 
end
