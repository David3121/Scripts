# Placeholder for user's chosen number.
num = int(input("Please select a whole number: "))

# Creates a function using num as a placeholder for a user to input their number.
def find_divisors(i):
    divisors = []
    # Loops through each number to check for divisibility.
    for num in range(1, i + 1):
        if i % num == 0:
            divisors.append(num)
    return divisors

# Prints the function "find_divisors".
print(find_divisors(num))
