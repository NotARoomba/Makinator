import random, time
from tkinter import *
def main():
    random.seed(time.time())
    numbers = [i for i in range(1, 1000)]
    print("Think of a number between 1-1000")
    i = 2
    d = int(len(numbers)//2)
    skip = 10
    while not len(numbers) <= 1:
        if (random.random() > 0.5) and 0 < len(list(filter(lambda x: (x < d), numbers))) <= int(len(numbers)/2):
            q = getInput(f'Is your number less than {d}?\n', str, ['y', 'n'])
            numbers = list(filter(lambda x: ((x < d) if q == 'y' else (x > d)), numbers))
            skip *= -1 if q == 'y' else abs(skip/skip)
            d = (int(d//2) if q  == 'y' else int(d*1.2))
            print(numbers)
        elif 0 < len(list(filter(lambda x: x % i == 0, numbers))) <= int(len(numbers)/2):
            q = getInput(f'Is your number divisible by {i}?\n', str, ['y', 'n'])
            numbers = list(filter(lambda x: (( x % i == 0) if q == 'y' else (not x % i==0)), numbers))
            print(numbers)
        i += 1
        d+=10
    print(f'Your number is {numbers[0]}!')
    

def getInput(question, t, expected):
    ans = input(question)
    while len(list(filter(lambda x: x == ans, expected))) == 0:
        print("That is not a valid input such as: " + str(expected))
        ans = input(question)
        if type(ans) != t:
            print("Your answer must be a " + t)
            continue
        ans = t(ans)
    return ans


if "__main__" == __name__:
    main()
