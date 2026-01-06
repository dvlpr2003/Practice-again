class Car:
    def __init__(self,name,action):
        self.name = name
        self.action = action
   
class Boat:
    def __init__(self,name,action):
        self.name = name
        self.action = action
class Plane:
    def __init__(self,name,action):
        self.name = name
        self.action = action

x = Car("BMW","Drive")
y = Boat("Benz","Float")
z = Plane("Boeing","Fly")


for i in (x,y,z):
    print(i.name,i.action)