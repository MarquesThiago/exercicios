class Instrumento 
    def tocar 
        puts "tocando..." , "harmonia"
    end
    def notas
        puts "notas basicas: Dó Ré Mi Fa Sol La Si"
    end
end

class Violino < Instrumento  #com o operador < atribuimos o parentesco
    def cordas
        puts "mi la re sol si mi"
    end
end

class Bateria < Instrumento
    def batida
        puts "bum bum bum"
    end
end 

violinista = Violino.new
baterista = Bateria.new


violinista.notas()
violinista.cordas()
violinista.tocar()

baterista.batida()
baterista.tocar()

