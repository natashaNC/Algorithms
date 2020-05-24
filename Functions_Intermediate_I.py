import random


def randInt(min='', max=''):
    print(type(min))
    print(type(max))
    if (type(min)) == int and (type(max)) == int:
        if min > max:
            print("The mininimum number can not be greater than the maximum number")
            return False
    else:
        if min == '' and max == '':
            num = random.random() * 100
            num = round(num)
            return num
        elif min == '':
            num = random.random() * max
            num = round(num)
            return num
        elif max == '':
            num = random.random() * 50 + min
            num = round(num)
            return num
        else:
            max = max - min
            num = random.random() * max + min
            num = round(num)
            return num


print(randInt(max=100))

# when max is less than 0, the function will still work so long as a minimum value less than the maximum value is provided, otherwise, the function returns a statement that max can not be less than min and returns false


# print(randInt()) 		    # should print a random integer between 0 to 100
# print(randInt(max=50)) 	    # should print a random integer between 0 to 50
# print(randInt(min=50)) 	    # should print a random integer between 50 to 100
# print(randInt(min=50, max=500))    # should print a random integer between 50 and 500
