def ispal(stringParameter):
    print(stringParameter)
    output = ""
    for i in range(len(stringParameter)-1, -1, -1):
        output += stringParameter[i]
    print(output)
    if stringParameter == output:
        return True
    else:
        return False


print(ispal("racecar"))
print(ispal("tacocat"))
print(ispal("potato"))
