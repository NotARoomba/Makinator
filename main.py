import random, time
from tkinter import font
import tkinter as tk
window = tk.Tk()
window.title = "Makinator"
window.geometry('900x400')
bg = tk.PhotoImage(file = "charris2.png")
font = font.Font(family='Arial', size=25, exists=False)
pressed = tk.StringVar()

def main():
    pressed = tk.StringVar()
    random.seed(time.time())
    numbers = [i for i in range(0, 101)]
    print("Think of a number between 1-1000")
    i = 2
    d = int(len(numbers)//2)
    skip = 10
    while not len(numbers) <= 1: 
        random.random()
        if (random.random() > 0.5) and (0 < len(list(filter(lambda x: (x < d), numbers))) <= int(len(numbers)/2)) or (0 < len(list(filter(lambda x: (x > d), numbers))) <= int(len(numbers)/2)):
            #q = getInput(f'Is your number less than {d}?\n', str, ['y', 'n'])
            text.config(text=f'Is your number less than {d}?\n', font=font)
            text.place(x=20, y=20)
            optionButton.wait_variable(check)
            numbers = list(filter(lambda x: ((x < d) if option.get() else (x > d)), numbers))
            # print(option.get())
            # print(numbers)
            skip *= -1 if option.get() else abs(skip/skip)
            d = (int(d//2) if option.get() else int(d*1.2))
            d+=10
        elif (0 < len(list(filter(lambda x: x % i == 0, numbers))) <= int(len(numbers)/2) or (0 < len(list(filter(lambda x: not x % i == 0, numbers))) <= int(len(numbers)/2))):
            #q = getInput(f'Is your number divisible by {i}?\n', str, ['y', 'n'])
            text.config(text=f'Is your number divisible by {i}?\n', font=font)
            text.place(x=20, y=20)
            optionButton.wait_variable(check)
            # print(option.get())
            # print(numbers)
            numbers = list(filter(lambda x: (( x % i == 0) if option.get() else (not x % i==0)), numbers))
            i += 1
        else:
            i+=1
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
def changeColor():
    if option.get():
        optionYes.config(background = "black", foreground = "white", activebackground = "grey")
        optionNo.config(background = "white", foreground = "black", activebackground='white')
    else:
        optionNo.config(background = "black", foreground = "white", activebackground = "grey")
        optionYes.config(background = "white", foreground = "black", activebackground='white')


text = tk.Label(window, text="QUESTION")
option = tk.BooleanVar()
check = tk.StringVar()
#C = Canvas(top, bg="blue", height=900, width=400)
background_label = tk.Label(window, image=bg)
background_label.place(x=0, y=0, relwidth=1, relheight=1)
background_label.place()
text.tkraise(background_label)
text.place(x=20, y=20)
optionYes = tk.Radiobutton(window, text="Yes", variable=option, value=True, font=font, command=changeColor)
optionNo = tk.Radiobutton(window, text="No", variable=option, value=False, font=font, command=changeColor)
optionQuit = tk.Button(window, text="Quit", command=lambda: window.destroy(), font=font)
optionYes.place(x = 20, y = 150)
optionNo.place(x = 750, y=150)
optionQuit.place(x=510, y=75)
optionButton = tk.Button(window, text="Enter", command=lambda: check.set(str(time.time())), font=font)
optionButton.place(x=510, y=140)
window.after(0, main)
window.mainloop()
# if "__main__" == __name__:
#     main()