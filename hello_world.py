# print("Hello World!")
# print("this is a sample string")
# x = "Hello Python"
# print(x)
# y = 42
# print(y)
# name = "Zen"
# print("My name is", name)
# name = "Zen"
# print("My name is " + name)

# first_name = "Zen"
# last_name = "Coder"
# age = 27
# print(f"My name is {first_name} {last_name} and I am {age} years old.")


# first_name = "Zen"
# last_name = "Coder"
# age = 27
# print("My name is {} {} and I am {} years old.".format(first_name, last_name, age))
# # output: My name is Zen Coder and I am 27 years old.
# print("My name is {} {} and I am {} years old.".format(age, first_name, last_name))
# # output: My name is 27 Zen and I am Coder years old.

# 1. TASK: print "Hello World"
print("Hello World")
# 2. print "Hello Noelle!" with the name in a variable
name = "Natasha"
# print("Hello", name)  # with a comma
print("Hello" + name)  # with a +
# 3. print "Hello 42!" with the number in a variable
name = 42
print("Hello", name, "!")  # with a comma
print("Hello " + str(name) + "!")  # with a +	-- this one should give us an error! - TypeError: can only concatenate str (not "int") to str

# 4. print "I love to eat sushi and pizza." with the foods in variables
fave_food1 = "sushi"
fave_food2 = "pizza"
print("I love to eat {} and {}.".format(fave_food1, fave_food2))  # with .format()
print(f"I love to eat {fave_food1} and {fave_food2}.")  # with an f string
