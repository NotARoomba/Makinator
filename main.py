def main():
    numbers = [i for i in range(1, 1000)]
    print("Think of a number between 1-1000")
    i = 2
    while not len(numbers) <= 1:
        if 0 < len(list(filter(lambda x: x % i == 0, numbers))) <= int(len(numbers)/2):
            q = getInput(f'Is your number divisible by {i}?\n', str, ['y', 'n'])
            numbers = list(filter(lambda x:( x % i == 0) if q == 'y' else (not x % i==0), numbers))
        i += 1
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
