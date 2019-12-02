
loop do

    puts "Digite uma das opções a seguir para:"
    puts "0 - somar "
    puts "1 - subtrair"
    puts "2 - multiplicar"
    puts "3 - dividir"
    puts "4 - sair"
    puts "digite uma opção: "
    option = gets.chomp.to_i

    v1, v2 = 0

    if  option <= 4 && option > -1 
        
        puts "digite o primeiro valor"
        v1 = gets.chomp.to_i

        puts "digite o primeiro valor"
        v2 = gets.chomp.to_i
        
        if option == 0
                
            result = v1 + v2
            puts "A soma desses dois numeros é #{result}"

        elsif option == 1

        
            result = v1 - v2
            puts "A subtração desses dois numeros é #{result}"

        elsif option == 2

            
            result = v1 * v2
            puts "A multiplicação desses dois numeros é #{result}"

        elsif option == 3

            result = v1 / v2
            puts "A dividisão desses dois numeros é #{result}"

        else
            break
        end
    else
        puts "valor invalido"

    end
           
      

end

