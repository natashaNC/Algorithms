def change(someNum):
    int(someNum)
    change_dict = {}

    if someNum // 25 > 0:
        quarters = someNum // 25
        someNum = someNum % 25
    else:
        quarters = 0

    if someNum // 10 > 0:
        dimes = someNum // 10
        someNum = someNum % 10
    else:
        dimes = 0

    if someNum // 5 > 0:
        nickels = someNum // 5
        someNum = someNum % 5
    else:
        nickels = 0

    if someNum // 1 > 0:
        pennies = 0
        pennies = someNum // 1

    change_dict = {'quarters': quarters,
                   'dimes': dimes,
                   'nickels': nickels,
                   'pennies': pennies}

    print(change_dict)

    return change_dict


print("Output from change function")
change(7)


def coinchange(cents):
    output = {}
    q = int(cents/.25)
    output['quarters'] = q
    cents = cents % .25
    d = int(cents/.10)
    output['dimes'] = d
    cents = cents % .10
    n = int(cents/.05)
    output['nickels'] = n
    cents = cents % .05
    p = int(cents/.01)
    output['pennies'] = p
    print(output)
    print(output['dimes'])


print("Output from coinchange function")
coinchange(105.26)

# output = {
#     'quarters': q,
#     'dimes': d,
#     'nickels': n,
#     'pennies': p
# }
