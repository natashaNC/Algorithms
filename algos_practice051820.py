class Node:
    def __init__(self, inputValue):
        self.value = inputValue
        self.next = None
        return inputValue

class Queue:
    def __init__(self):
        self.head = None
        self.tail = None
        

    def enqueue(self, value):
        newNode = Node(value)
        if self.head == None:
            self.head = newNode
            self.tail = newNode
        else:
            self.tail, next = newNode
            self.tail - newNode
        return self

    def dequeue(self):
        valtoReturn = self.head.value
        return self

    def display(self):
        runner = self.head
        while runner != None:
            print(runner.value)
            runner = runner.next            
        return self

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
            count += 1
            runner = runner.next
        return count
    

        # Creating the enqueue function:
        # creating a new node,
        # placing the new node at the back of the Queue
        #     - effectively making the new node, the new tail
        #     - making the existing tail, just a node

queue1 = Queue()
queue1.enqueue(5).enqueue(8).dequeue(10).enqueue(12).display()
print(front.queue1)
print(queue1.size())