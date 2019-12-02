
var_string = "string"
var_fixnum =  12
var_bignum = 125.45 
var_boolean = false
var_ranges = 0...10
var_array = ["var", "rai"]
var_hashers = {:um => "vari", :dois => "avel"}

print "\n\n"
print "tipos de variaveis\n"
print "-----" * 5
print "\n"
print var_string,"\n",var_array,"\n", var_bignum,"\n", var_fixnum,"\n", var_boolean,"\n", var_ranges,"\n", var_hashers,"\n"
print var_hashers[:um], "\n"

print "\n\n"
print "hexadicimal, octal e binario\n"
print "-----" * 5
print "\n"

#variaveis
var_hex = 0xff
var_oct = 0377
var_binary = 0001000 #vai multiplicando sobre o exponente de 8 


print var_hex, "\n", var_oct, "\n", var_binary
print "\n\n"
print "Utilizando o a variavel ranger com for each\n"
print "-----" * 9 
print "\n"
var_ranges.each do puts "oi"
    
end

print "\n\n"   
print "-----" * 5 
print "objects and regular expressions"
print "\n\n"

print "utilizamos de : para indicar a utlização de um objeto tambem utilizado em classes"
print "\n\n"

print "expressões regulares"

#variavel
var_regExp = Regexp.new("/")
var_regExpTwo = /^[0-9]/
var_regExpthree = %r{^[0-9]}

print "\n\n",var_regExp, "\n", var_regExpTwo, "\n",var_regExpthree