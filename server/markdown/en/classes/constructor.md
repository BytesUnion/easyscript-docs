---
  name="Constructor"
  queue_in_folder=2
---

# Constructor (init)

In EasyScript, the `init` method is used as a constructor to initialize objects of a class. It sets up the initial state of an object by assigning values to its attributes.

## Syntax

```easyscript
init(<parameters>)
    <initialization code>
endinit
```
- init(parameters): Defines the constructor method with optional parameters.
- Inside init, you typically initialize the object's attributes using the cur keyword.
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

a = new Animal("Leo", 5)
```
In this example, the `Animal` class has an `init` method that initializes the `name` and `age` attributes of the object.