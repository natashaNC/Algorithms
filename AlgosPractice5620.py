def parensValid(inputString):
    opencount = 0
    closedcount = 0
    for i in range(0, len(inputString), 1):
        if inputString[i] == "(":
            opencount += 1
        if inputString[i] == ")":
            closedcount += 1
        if closedcount > opencount:
            return False
        if inputString[i] == "{":
            opencount += 1
        if inputString[i] == "}":
            closedcount += 1
        if closedcount > opencount:
            return False
        if inputString[i] == "[":
            opencount += 1
        if inputString[i] == "]":
            closedcount += 1
        if closedcount > opencount:
            return False
    if opencount != closedcount:
        return False
    else:
        return True


print(parensValid("[{)](()}"))
