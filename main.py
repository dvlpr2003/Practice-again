# import requests

# test = requests.get("https://private-anon-4af9df1da1-pizzaapp.apiary-mock.com/restaurants/")

# print(test.text)


class Dog:
    
    def __init__(self,name,habit,sound):
        self.name = name
        self.habit = habit
        self.sound = sound
        self.What()

    def Sound(self):
        print(self.sound,end="")
        print(self.sound)
    def Details(self):
        print(f"\n\nIt can make a sound like this '{self.sound}' and it eats small food . . .")
    
    def What(self):
        self.Sound()
        self.Details()


class Animals(Dog):

    def __init__ (self,name,habit,sound,Pets,Birds):
        super().__init__(name,habit,sound)
        self.Pets = Pets
        self.Birds = Birds
        self.All()
    def All(self):
        print(f"New Items Pets : {self.Pets}")
        print(f"New Items Birds : {self.Birds}")

x = Animals("tommy","sleeping","woof",Pets=["Rabit,Cat,Mouse"],Birds=["Parrot,Peacock,Pigeon"])


