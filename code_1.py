li=[1, 2, 3, 4, 5, 6]

for i in li:
   if i%2 ==0:
     print(i)


class A:
   def __init__(self, name):
      self.name = name
   def display(self):
      print("Hello, my name is " + self.name)


a = A("Alice")
a.display()


exp = [i for i in li if i%2 == 0]
print(exp)
