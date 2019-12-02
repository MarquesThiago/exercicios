=begin 

    um metodo escuta as variaveis de dentro para fora
    sendo impossivel de de  atribuir uma variavel de um escopo global para um escopo local
    e nessecario fazer a operação inversa

=end


def name name 
    print name 
end

name "ro"
v1 = 0
v2 = 15

def value (v1 , v2)
    @v1 = 5
    @v2 = 6 
    print @v2 = @v1 + @v2
    # return v1 , v2
    
end

value(v1 , v2)

v1 =@v1

puts "\n\n",v1 , v2, @v1