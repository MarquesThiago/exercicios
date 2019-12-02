class Writer
    def write
        puts "writing... ,writing"
    end
end

class Notebook < Writer
    def write
        puts "dig dig dig dig "
    end
end


class Pena < Writer
    def write
    
        puts "chu chu chuchcu chu..."
        super
    end
end


notebook = Notebook.new
pena = Pena.new

notebook.write()
puts "notebook" , "agora de pena"
pena.write()


=begin
    
o polimorfismo ele herda caracteristicas de uma 
classe pai mas o metdo da classe pai tem comportamento diferente do objeto
    
=end