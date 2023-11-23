# This is a comment. This should be to clarify something that isn't obvious

# print("Hello World!")
# print(type("String"))

# Keep a single line in python within 80 characters.
# print("They told me to say, \"Hello World!\"")
# print("They told me to say, 'Hello World!'")

# index = "word"
# print(index[2])
# String Slicing: To extract a portion of a string.
Slice_Word = "Extract String"
print(Slice_Word[0:7])
print(Slice_Word[8:14])
print(Slice_Word[-14:])

# Slice notation in Python: A slice has the format start:stop:step.
print(Slice_Word[-14::2])
print(Slice_Word[-13::2])

capital = "ThIS Is A TEst"
print(capital.lower())

yell = "ThIS Is A TEst"
print(yell.upper())
print(yell.endswith("st"))
 
num = "2"
print(num * 3)

number = 0.2
animal = "newt"

print(f"{number} kg is the weight of the {animal}.")

