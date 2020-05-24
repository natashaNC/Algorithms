def x(someString):
    acronym = ''
    s = ''
    s = someString
    newString = s.replace('of', '')
    for y in newString.split():
        acronym = acronym + y[0]

    return acronym.upper()


print(x("United Stated of America"))
