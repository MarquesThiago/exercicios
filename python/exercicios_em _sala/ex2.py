chart = ""

i = 0
while  i < 11:
    a = input("digite caracter")
    chart = chart + a 
    i = i + 1

vogais = ["a", "e", "i", "o", "u"]
total_len = len(chart)
vogaiscount = 0

for  a in vogais:

    vogaiscount = vogaiscount + chart.count(a)
    vogaiscount


for a in vogais:
    for e in chart:
        if e != a :
           e = ""


print(chart)

consoantes = total_len - vogaiscount

print (f"Você tem {consoantes} consoantes")
