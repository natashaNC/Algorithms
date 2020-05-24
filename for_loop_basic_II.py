# Biggie Size - Given a list, write a function that changes all positive numbers in the list to "big".
# Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now [-1, "big", "big", -5]


import math


def x(nums):

    for x in range(0, (len(nums)), 1):
        if nums[x] > 0:
            nums[x] = "big"
    return nums


x([-1, 3, 5, -5])

# Count Positives - Given a list of numbers, create a function to replace the last value with the number of positive values. (Note that zero is not considered to be a positive number).
# Example: count_positives([-1,1,1,1]) changes the original list to [-1,1,1,3] and returns it
# Example: count_positives([1,6,-4,-2,-7,-2]) changes the list to [1,6,-4,-2,-7,2] and returns it


def x(nums):
    count = 0
    for x in range(0, len(nums), 1):
        if nums[x] > 0:
            count += 1
    nums.pop()
    nums.append(count)

    return nums


x([-1, 1, 1, 1])
x([1, 6, -4, -2, -7, -2])


# Sum Total - Create a function that takes a list and returns the sum of all the values in the list.
# Example: sum_total([1,2,3,4]) should return 10
# Example: sum_total([6,3,-2]) should return 7


def x(numbers):
    sum = 0
    for y in range(0, len(numbers), 1):
        sum += numbers[y]

    return sum


x([1, 2, 3, 4])
x([6, 3, -2])

# Average - Create a function that takes a list and returns the average of all the values.x
# Example: average([1,2,3,4]) should return 2.5


def x(nums):
    avg = 0
    for y in range(0, len(nums), 1):
        avg += nums[y]
    avg = avg / len(nums)
    return avg


x([1, 2, 3, 4])

# Length - Create a function that takes a list and returns the length of the list.
# Example: length([37,2,1,-9]) should return 4
# Example: length([]) should return 0


def x(nums):
    return len(nums)


x([37, 2, 1, -9])
x([])


# Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. If the list is empty, have the function return False.
# Example: should return -9
# Example: minimum([]) should return False

def x(nums):
    min = 0
    if len(nums) == 0:
        return False
    for y in range(0, len(nums), 1):
        if min > nums[y]:
            min = nums[y]
    return min


x([37, 2, 1, -9])
x([])


# Maximum - Create a function that takes a list and returns the maximum value in the list. If the list is empty, have the function return False.
# Example: maximum([37,2,1,-9]) should return 37
# Example: maximum([]) should return False

def x(nums):
    max = 0
    if len(nums) == 0:
        return False
    for y in range(0, len(nums), 1):
        if max < nums[y]:
            max = nums[y]
    return max


x([37, 2, 1, -9])
x([])

# Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the list.
# Example: ultimate_analysis([37,2,1,-9]) should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4 }


def x(nums):
    sumTotal = 0
    average = 0
    minimum = 0
    maximum = 0
    length = len(nums)
    ua = {}
    for x in range(0, len(nums), 1):
        sumTotal += nums[x]
        if minimum > nums[x]:
            minimum = nums[x]
        if maximum < nums[x]:
            maximum = nums[x]
    average = sumTotal / length

    ua = {'sumTotal': sumTotal, 'average': average, 'minimum': minimum, 'maximum': maximum, 'length': length}
    return ua


x([37, 2, 1, -9])


# Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
# Example: reverse_list([37,2,1,-9]) should return [-9,1,2,37]


def reverse_list(nums):
    for x in range(0, math.floor(len(nums)/2), 1):
        temp = nums[x]
        nums[x] = nums[len(nums)-1-x]
        nums[len(nums)-1-x] = temp
    return nums


reverse_list([37, 2, 1, -9])
