def soma (n1 , n2)

    print "a soma é #{n1*n2} \n"

end

soma(4,5)



def  multiplicar  (n = 45, d = 2)

=begin
        os metodos aceitam o um valor como padrão 
        para as funções
=end 
    
    print "a multiplicação é #{n*d} \n"

end

args = [4 , 5, 5, 5, 5 ]


def mutliplivar (args)
    print args.map{|m| m*5}

end

def mult_argments (*args)
   
    print "Parametros multiplos são passados como array #{args}"

end


multiplicar(4,)
mutliplivar(args)
mult_argments(1)