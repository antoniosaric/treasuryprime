# 2. Write a quick and dirty program (not just a function) to print a count of all the different "words" in a text file. Use any reasonable definition of word that makes logical sense or makes your job easy.


def text_to_array( text ):
    return text.read().split()

def breakdown ( array ):
    temp_obj = {}
    for word in array:
        if not word in temp_obj:
            temp_obj[word] = 1
        else:
            temp_obj[word] = temp_obj[word] + 1

    return temp_obj

def print_out_array ( obj ):
    sorted_count = sorted(obj.items(), key=lambda x: x[1])    
    for tupled in sorted_count:
        print( str(tupled[1]) + " " + tupled[0] )

def my_function():
    path = input("Please enter a text file path: ")
    f = open( path , "r")
    print_out_array( breakdown( text_to_array(f) ) )

my_function()




