# This displays text asking a user to input text they want to encrypt.
print("Please enter the text you would like to encrypt here: ")
user_text = input()

# This is a function that converts the input text into encrypted text.
def encryption(input):
    """This function converts text into encrypted text."""
    unencrypted = input.upper()
    encrypted = ""
    i = 0
    while i < len(input):
        if unencrypted[i] == "A":
            encrypted += "D"
            i = i + 1
        elif unencrypted[i] == "B":
            encrypted += "F"
            i = i + 1
        elif unencrypted[i] == "C":
            encrypted += "7"
            i = i + 1
        elif unencrypted[i] == "D":
            encrypted += "J"
            i = i + 1
        elif unencrypted[i] == "U":
            encrypted += "%"
            i = i + 1
        elif unencrypted[i] == "P":
            encrypted += "7"
            i = i + 1
        elif unencrypted[i] == "G":
            encrypted += "*"
            i = i + 1
        else:
            encrypted += unencrypted[i]
            i = i + 1 
    print(str(encrypted))
    return

# This runs the encryption function using user input.
encryption(user_text)