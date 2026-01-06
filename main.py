class Car:
    def __init__(self,name):
        self.name = name
    def Details(self):

        print(*(f"This car is {i}" for i in self.name),sep="\n")

x = Car(["BMW","Benz"])
x.Details()
