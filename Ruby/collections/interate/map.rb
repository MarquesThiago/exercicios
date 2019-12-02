randg = []
randg = (1...5)

puts randg

novo_rand = randg.map do |n|
    n * 3
end

print randg,"\n"
print novo_rand,"\n\n"


# com o map! podemos criar um novo array apartir do mesmo
novo_rand.map! do |n|
    n / 3
end


print novo_rand,"\n\n"