# QUEUES

class QNode:
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

# STACKS
class SNode:
    def __init__(self, value):
        self.value = value
        self.next = None

class Stack:
    def __init__(self):
        self.top = None

    def push(self, value):
        newnode = Node(value)
        if self.top == None:
           self.top = newnode
        else:
            newnode.next = self.top
            self.top = newnode
        return self

    def pop(self):
        temp = self.top.value
        self.top = self.top.next
        return temp


queue1 = Queue()
queue1.enqueue(5).enqueue(8).enqueue(12).enqueue(17).enqueue(89)