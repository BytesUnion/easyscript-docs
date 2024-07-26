---
    name="Functions"
    queue_in_folder=4
---

# Functions

In EasyScript, functions are used to group a set of statements that perform a specific task. Functions can be called from other parts of the code, making it easier to reuse code and manage complex programs.

## Syntax

### Function Definition

```easyscript
f functionName(parameters)
    <code_block>
    return (value)
endf
```
- functionName: The name of the function.
- parameters: A list of comma-separated variables that the function can accept as input. (Optional)
- code_block: The statements that define what the function does.
- return: The value that the function returns. (Optional)
- endf: Marks the end of the function block.

### Example

```easyscript
f sayHello(name)
    return ("Hello, " + name)
endf
```
In this example, the function `sayHello` takes one parameter, `name`, and returns a greeting message.

## Function Call
To use a function, call it by its name and provide the necessary arguments.

```easyscript
message = sayHello("Alice")
print(message)
```
In this example, the function `sayHello` is called with the argument "Alice", and the result is printed. The output will be:
```easyscript
Hello, Alice
```
