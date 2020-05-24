class Node:
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


    def display(self):
        runner = self.top
        while runner != None:
            print(runner.value)
            runner = runner.next
        return self

    def size(self):
        count = 0
        runner = self.top
        while runner != None:
            runner = runner.next
            count += 1
        return count

    def contains(self, value):
        runner = self.top
        while runner != None:
            if runner.value == value:
                return True
            else:
                runner = runner.next
        return False





stk1 = Stack()
stk1.push(5).push(8).push(7).push(18)
print(stk1.size())
print(stk1.contains(8))
print(stk1.contains(7))
print(stk1.contains(77))
stk1.display()


#  SLStack: Push
# Create push(val) that adds val to our stack.
#  SLStack: Top
# Return (not remove) the stack’s top value.
#  SLStack: Is Empty
# Return whether the stack is empty.”
# “ SLStack: Pop
# Create pop() to remove and return the top val.
#  SLStack: Contains
# Return whether given val is within the stack.
#  SLStack: Size
# Return the number of stacked values.”


# class Node:
#     def __init__(self, value):
#         self.value = value 
#         self.next = None

# class Stack:
#     def __init__(self):
#         self.top = None
    
#     def push(self, value):
#         # your code here
#         newnode = Node(value)
#         if self.top == None:
#             self.top = newnode
#         else:
#             newnode.next = self.top
#             self.top = newnode
#         return self

    
#     def pop(self):
#         if self.top != None:
#             nodetopop = self.top
#             valtoreturn = self.top.value
#             self.top = self.top.next
#             nodetopop.next = None
#             return valtoreturn
#         else:
#             return None


#     def display(self):
#         runner = self.top
        
#         while runner!=None:
#             print(runner.value)
#             runner = runner.next

    
#     def top(self):
#         if self.top != None:
#             return self.top.value
#         else:
#             return None

#     def isempty(self):
#         if self.top == None:
#             return True
#         else:
#             return False
    
    