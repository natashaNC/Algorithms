# sll - singly linked list
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class SLL:
    def __init__(self):
        self.head = None

    def countNodes(self):
        counter = 1
        runner = my_list.head
        while runner.next is not None:
            runner = runner.next
            counter += 1
        print('countNodes function')
        print(counter)

    def printNodes(self):
        runner = my_list.head
        while runner.next is not None:
            runner = runner.next
        print('printNodes function')
        print(runner.value)
        print(runner.next)

    def add_to_front(self, val):
        a1 = Node(val)
        my_list.head = a1
        runner = my_list.head
        print('add to front function')\
            print(runner)

    def contains(self, valuefind):
        if self.head == None:
            return False
        else:
            runner = self.head
        while runner.next != None
        runner = runner.next
        newNode = runner.value
        runner.next = newNode


a = Node(7)
b = Node(3)
c = Node(1)
d = Node(6)
a.next = b
b.next = c
c.next = d

my_list = SLL()
my_list.head = a

my_list.printNodes()
my_list.countNodes()
my_list.add_to_front(17)

# add_to_front(17)

# print('A:' a.value)
# print('B:' b.value)
# print('C:' c.value)

# print(a.next.next.value)


# print(runner.value)

#     print(runner.value)
#     print(runner.next)

# print(runner.value)
# runner = runner.next
# print(runner.value)
# runner = runner.next
# print(runner.value)
# runner = runner.next
# print(runner.value)
# runner = runner.next
# print(runner.value)
# runner = runner.next
# print(runner.value)
# runner = runner.next
# print(runner.value)

# def remove_from_front(self):
#     self.head = None
