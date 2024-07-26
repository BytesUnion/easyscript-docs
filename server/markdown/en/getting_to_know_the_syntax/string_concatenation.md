---
    name="String Concatenation"
    queue_in_folder=5
---

## Concatenation of Strings
You can concatenate (join together) strings using the `+` operator in EasyScript.

```easyscript
greeting = "Hello, " + "world!"
print(greeting)   >> Output: Hello, world!

name = "EasyScript"
welcomeMessage = "Welcome to " + name
print(welcomeMessage)   >> Output: Welcome to EasyScript
```

Note that you can't join other data types to strings, for doing so you would need to use .asString() method after inserting it.

```easyscript
age = 20
message = "Age: " + age.asString()
print(message)   >> Output: Age: 20
```