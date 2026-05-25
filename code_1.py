""" li=[1, 2, 3, 4, 5, 6]

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
 """
""" temp =int(input("Enter the temperature in Celsius: "))
if temp > 27:
   print("It's hot outside.")
elif temp < 15:
   print("It's cold outside.")
else:
   print("The weather is pleasant.")   """
   
# name = "Kyaw Kyaw"

# dic = {
#    "name": "Kyaw Kyaw",
#    "age": 30,
#    "city": "Yangon"
# }

# print(dic.get("name"))
from tabulate import tabulate 
from ast import If


people = [
   {"name": "Kyaw Kyaw", "age": 28, "ticket": None, "Gender": "M"},
   {"name": "Aung Aung", "age": 35, "ticket": None, "Gender": "F"},
   {"name": "Mya Mya", "age": 17, "ticket": None, "Gender": "F"},
   {"name": "Soe Soe", "age": 30, "ticket": None, "Gender": "M"},
   {"name": "Aung Aung", "age": 16, "ticket": None, "Gender": "F"}
]

data_ticket = [person | {"ticket" : True if person["age"] >=18 else False} for person in people]
print (data_ticket)

gender = [human | {"Gender" : "Male" if human["Gender"] == "M" else "Female"} for human in data_ticket]

print(tabulate(gender, headers="keys", tablefmt = "grid"))


