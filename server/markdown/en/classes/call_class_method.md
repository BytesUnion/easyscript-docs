---
    name="Calling Class Methods"
    queue_in_folder=4
---

# Calling Class Methods

In EasyScript, class methods are functions defined within a class that perform operations on the object's data. To call a method on an object, you use the dot notation followed by the method name and any required arguments.

## Syntax

```easyscript
class theClass
    f methodName(arguments)
        <method code>
    endf
endclass

myClass = new theClass()
myClass.methodName(arguments)
```
- class theClass ~ endclass: Defining the class
- myClass = new theClass(): Creating new instance of class
- myClass: The instance of the class on which the method is called.
- methodName: The name of the method to call.
- arguments: The arguments to pass to the method (if any).