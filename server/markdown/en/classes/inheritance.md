---
    name="Inheritance"
    queue_in_folder=3
---

# Inheritance

Inheritance allows a class to inherit attributes and methods from another class. In EasyScript, the `extends` keyword is used to create a subclass that inherits from a parent class.

## Syntax

```easyscript
class SubClass extends SuperClass
    <additional attributes and methods>

    init(<parameters>)
        super(<parentParameters>)
        <initialization code>
    endinit
endclass
```

## Example
```easyscript
class Animal
    name = null
    age = null

    init(Name, Age)
        cur.name = Name
        cur.age = Age
    endinit
endclass

class Cat extends Animal
    breed = null

    init(Name, Age, breed)
        super(Name, Age)
        cur.breed = breed
    endinit

    f getBreed()
        return (cur.breed)
    endf
endclass
```
In this example, the `Cat` class inherits from `Animal` and adds a new attribute `breed`. The init method of Cat calls `super` to initialize the `name` and `age` attributes.