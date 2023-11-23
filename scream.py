def text_to_scream(input_string):
    """Takes input, and returns the same input but capitalized."""
    scream = input_string.upper()
    print(scream)
    return(scream)

print(help(text_to_scream))
print("Enter text here: ")
text = input()

text_to_scream("Hello")
