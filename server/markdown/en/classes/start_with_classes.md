---
  name="Classes"
  queue_in_folder=1
---

# Classes

In EasyScript, classes are used to encapsulate data and methods that operate on that data. Classes allow you to define custom data types and organize related functionalities together.

## Syntax

```easyscript
class ClassName
    <attributes>

    init(<parameters>)
        <constructor code>
    endinit

    f methodName(<parameters>)
        <method code>
    endf
endclass
```
- class ClassName: Defines a new class with the name ClassName.
- attributes: Variables that hold the state of the object.
- init(parameters): Constructor method that initializes a new instance.
- f methodName(parameters): Method definitions that operate on the object’s data.
- endclass: Marks the end of the class definition.