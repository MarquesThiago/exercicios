def series():
    file = open("test.txt", "w")
    i = 0
    session = []

    while i < 5:
        session.append(input("digite uma series: ") + ";")
        i = i + 1
    
    file.writelines(session)
    file.close()

def read_file():
    total = []
    file = open("test.txt", "r")
    r  = []
    series = file.readlines()

    for a in series:
        total = a.split(";")
    i = 4

    while i > -1:
        print (total[i]) 
        i = i - 1
        

    file.close()

 

series()
read_file()

     