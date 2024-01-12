def main():
    numDeVainas = []
    for i in range(1000):
        for j in range(1000):
            if (2*(i**2))-(4*(j**2))+1 == -1:
                numDeVainas.append([i, j])
    print(numDeVainas)
main()