---
    name="Conditional statements"
    queue_in_folder=1
---

# Conditional statements
In EasyScript, conditional statements are used to execute different blocks of code based on certain conditions. The primary conditional statements are `if`, `elif`, and `else`.

The basic syntax for if-else-elif statements is as follows:

```easyscript
if (<condition>)
    <code_block>
elif (<condition>)
    <code_block>
else:
    <code_block>
endf
```

- if: The if statement evaluates a condition. If the condition is True, the code block within the if statement is executed.
- elif: The elif (else if) statement provides an additional condition that is checked if the previous if or elif conditions are False. You can have multiple elif statements.
- else: The else statement is optional and provides a code block that is executed if all preceding if and elif conditions are False.
- endf: Marks the end of the if-else-elif block.

## Examples

```easyscript
if (x > 10)
    print("x is greater than 10")
endif
```

In this example, if the variable `x` is greater than 10, the message "x is greater than 10" is printed.

```easyscript
if (x > 10)
    print("x is greater than 10")
elif (x == 10)
    print("x is equal to 10")
endf
```

Here, the code first checks if `x` is greater than 10. If it is equal to 10, then the message "x is equal to 10" is printed.

```easyscript
if (x > 10)
    print("x is greater than 10")
elif (x == 10)
    print("x is equal to 10")
else:
    print("x is less than 10")
endf
```

In this example, the code checks if `x` is greater than 10. If not, it checks if `x` is equal to 10. If neither condition is true, it executes the else block and prints "x is less than 10".