class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class SLL:
    def __init__(self):
        self.head = None

    def addfront(self, value):
        print(self.head)
        if self.head == None:
            newnode = Node(value)
            self.head = newnode
        else:
            newNode = Node(value)
            newNode.next = self.head
            self.head = newNode
        return self

    def deleteback():
        count = 0
        runner = self.head
        while runner.next.next != None:
            runner = runner.next
        runner.next = None
        return self

    def addback(self, value):
        newNode = Node(value)
        runner = self.head
        while runner.next != None:
            runner = runner.next
        runner.next = newNode
        return self

    def display(self):
        runner = self.head
        while runner.next != None:
            print('display function')
            print(runner.value)
            runner = runner.next
            # print(runner.next)

    def length(self):
        count = 0
        runner = self.head
        while runner != None:
            count += 1
            runner = runner.next
        print(count)
        return count
    
    def contains(self, valueToFind):
        if self.head == None:
            return False
        else:
            runner = self.head
            while runner != None:
                if runner.value == valueToFind:
                    print("true")
                    return True
                else:
                    runner = runner.next
            print("false")
            return False

def moveMinToFront(sllinput):
    runner = sllinput.head
    minval = runner.value
    while runner != None:
        if runner.next != None:
            if runner.next.value < minval:
                minval = runner.next.value
                minnode = runner.next
                before = runner
        runner = runner.next
    before.next = minnode.next
    minnode.next = sllinput.head
    sllinput.head = minnode

def moveMaxtoBack(sllinput):
    runner = sllinput.head
    maxval = runner.value
    maxnode = runner
    while runner.next != None:
        if runner.next.value > maxval:
            maxval = runner.next.value
            maxnode = runner.next
            before = runner
        runner = runner.next
    if sllinput.head.value != maxval:
        if runner.value != maxval:
            before.next = maxnode.next
            runner.next = maxnode
            maxnode.next = None
        else:
            pass
    else:
        runner.next = maxnode
        sllinput.head = sllinput.head.next
        maxnode.next = None 

    return sllinput

def moveMaxToFront(sllinput):
    runner = sllinput.head
    maxval = runner.value
    while runner != None:
        if runner.next != None:
            if runner.next.value > maxval:
                maxval = runner.next.value
                maxnode = runner.next
                before = runner
        runner = runner.next
    before.next = maxnode.next
    maxnode.next = sllinput.head
    sllinput.head = maxnode

sll1 = SLL()
# sll2 = SLL()
# sll3 = SLL()

sll1.addfront(5).addfront(10).addback(7).addfront(12).addfront(-2).addfront(100).addback(100).display()
moveMinToFront(sll1)
moveMaxtoBack(sll1)
sll1.display()


# sll3 = SLL()
# sll3.addfront(5).addback(6).addback(8).addback(-23).addback(12).display()
# singly linked lists with a string value, such as "potato" stored in a node will cause an error when passed as a parameter to functions such as minToFront

# sll2 = SLL()
# node1 = Node(5)
# node2 = Node(7)