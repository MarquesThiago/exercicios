# procs são blocos de codigos associados a uma varialvel 

aoQuadrado = Proc.new {|n| n * n}
#proc com capitalize 

print aoQuadrado.call(3), "\n"
print aoQuadrado.call(15), "\n"
print aoQuadrado.call(4)



# tambem pode criar procs com a função lambda

duzia = lambda {|n| n * 12}
print duzia.call(8),"\n"
print duzia.call(45),"\n"
print duzia.call(12),"\n"