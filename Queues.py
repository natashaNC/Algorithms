from itertools import tee, islice, chain

def previous(self):
    prevs, items = tee(self, 2)
    prevs = chain([None], prevs)
    return zip (prevs, items)

class Node:
    def __init__(self, inputvalue):
        self.value = inputvalue
        self.next = None
        sel.previous = None

class Queue:
    def __init__(self):
        self.head = None
        self.tail = None
    
    
    def enqueue(self, value):
        newnode = Node(value)
        if self.head == None:
            self.head = newnode
            self.tail = newnode
        else:
            self.tail.next = newnode
            self.tail = newnode
        return self

    def dequeue(self):
        if self.head != None:
            valtoReturn = self.head.value
            self.head = self.head.next
            return valtoReturn
        else:
            return None
        
    def front(self):
        if self.head:
            return self.head.value
        else:
            return None 

    def isEmpty(self):
        if self.head:
            return True
        else:
            return False

    def size(self):
        runner = self.head
        count = 0
        while runner:
            count +=1
            runner = runner.next
        return count

    def display(self):
        runner = self.head
        while runner != None:
            print(runner.value)
            runner = runner.next
        return self

    def contains(self, value):
        runner = self.head
        while runner != None:
            if runner.value == value:
                return True
            else:
                runner = runner.next
        return False

    def isQueuePal(someQueueInput):
    # your solution here
    somestr = ""
    runner = someQueueInput.head
    while runner != None:
        somestr += str(runner.value)
        runner = runner.next

    return isStringPalindrome(somestr)


    # return either true or false based on if someQueueInput is palindrome or not 
    def isStringPalindrome(stringinput):
    for i in range(len(stringinput)//2):
        if stringinput[i] != stringinput[len(stringinput)-1-i]:
            return False
    return True

    print(isQueuePal(q1))



    def isPalindrome(self):
        inputString = ''
        reverseString = ''
        runner = self.head
        while runner != None:
            inputString += str(runner.value)
            runner = runner.next
        reverse = self.tail
        while reverse != None:
            reverseString += str(reverse.value)
            reverse = reverse.previous
        print(inputString)
        print(reverseString)
        if inputString == reverseString:
            return True
        else:
            return False
    



# queue1 = Queue()
# queue1.enqueue(5).enqueue(8).enqueue(12).enqueue(17).enqueue(89).display().dequeue()
# queue1.enqueue(17).display()
# queue1.enqueue(5).enqueue(8).enqueue(12).enqueue(17).enqueue(89).dequeue()
# queue1.display()
# print(queue1.size())
# print(queue1.contains(17))
# print(queue1.contains(88))
# print(queue1.contains(12))
# print(queue1.contains(5))

queue2 = Queue()
queue2.enqueue(5).enqueue(3).enqueue(5).enqueue(2).enqueue(5).display()
print(queue2.isPalindrome())

q1 = Queue()
q1.enqueue(3).enqueue(5).enqueue(8).enqueue(5).enqueue(3)
# print(q1.size())
    



