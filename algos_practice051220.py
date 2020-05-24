


class Node:
    def __init__(self, valueInput):
        self.value = valueInput
        self.next = None


class SLL:
    def __init__(self):
        self.head = None

    def removefront(self):
        if self.head == None:
            return self
        else:
            self.head = self.head.next
            return self

    def addtoFront(self, value):
        newnode = Node(value)
        newnode.next = self.head
        self.head = newnode
        return self

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


myIdol = SLL()
myIdol.head = a
a = Node(1)

def countNodes(self):
    counter = 0
    runner = myIdol.head
    while runner.next is not None:
        runner = runner.next
        counter += 1
    print('countNodes function')
    print(counter)

def printNodes(self):
    runner = my




“ SList: Length July 20, 2013: about 5000 people wait in line for a chance to audition for American Idol. Create a function that accepts a pointer to the first list node, and returns number of nodes in that SList.  SList: Display Create display(node) for debugging that returns a string containing all list values. Build what you wish console.log(myList) did!” Excerpt From: Martin Puryear. “Algorithm Challenges: E-book for Dojo Students.” iBooks.
