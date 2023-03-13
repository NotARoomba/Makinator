import random, time
from tkinter import *
window = Tk()
window.title = "Makinator"
pressed = StringVar()

def main():
    pressed = StringVar()
    random.seed(time.time())
    numbers = [i for i in range(1, 1000)]
    print("Think of a number between 1-1000")
    i = 2
    d = int(len(numbers)//2)
    skip = 10
    while not len(numbers) <= 1:
        if (random.random() > 0.5) and (0 < len(list(filter(lambda x: (x < d), numbers))) <= int(len(numbers)/2)) or (0 < len(list(filter(lambda x: (x > d), numbers))) <= int(len(numbers)/2)):
            #q = getInput(f'Is your number less than {d}?\n', str, ['y', 'n'])
            text.config(text=f'Is your number less than {d}?\n')
            optionButton.wait_variable(check)
            numbers = list(filter(lambda x: ((x < d) if option.get() else (x > d)), numbers))
            print(option.get())
            print(numbers)
            skip *= -1 if option.get() else abs(skip/skip)
            d = (int(d//2) if option.get() else int(d*1.2))
        elif (0 < len(list(filter(lambda x: x % i == 0, numbers))) <= int(len(numbers)/2) or (0 < len(list(filter(lambda x: not x % i == 0, numbers))) <= int(len(numbers)/2))):
            #q = getInput(f'Is your number divisible by {i}?\n', str, ['y', 'n'])
            text.config(text=f'Is your number divisible by {i}?\n')
            optionButton.wait_variable(check)
            print(option.get())
            print(numbers)
            numbers = list(filter(lambda x: (( x % i == 0) if option.get() else (not x % i==0)), numbers))
        i += 1
        d+=10
    print(f'Your number is {numbers[0]}!')
    text.config(text=f'Your number is {numbers[0]}!')
    

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


text = Label(window, text="QUESTION")
text.pack()
option = BooleanVar()
check = StringVar()
optionYes = Radiobutton(window, text="Yes", variable=option, value=True)
optionNo = Radiobutton(window, text="No", variable=option, value=False)
optionQuit = Button(window, text="Quit", command=lambda: window.destroy())
optionYes.pack(side="left")
optionNo.pack(side="right")
optionQuit.pack(side="top")
optionButton = Button(window, text="Enter", command=lambda: check.set(str(time.time())))
optionButton.pack(side="top")
window.after(0, main)
window.mainloop()
# if "__main__" == __name__:
#     main()