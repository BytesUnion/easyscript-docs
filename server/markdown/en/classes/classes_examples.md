---
    name="Examples"
    queue_in_folder=5
---

# Examples
Here you will see basic examples of classes usage in EasyScript.

## 1. Class with method and constructor
```easyscript
class Rectangle
    width = null
    height = null

    init(Width, Height)
        cur.width = Width
        cur.height = Height
    endinit

    f area()
        return (cur.width * cur.height)
    endf
endclass

r = new Rectangle(10, 5)
print(r.area()) >> Output: 50
```
## 2. Inheritance
```easyscript
class Shape
    f getArea()
        print("Subclass must implement getArea()")
    endf
endclass

class Circle extends Shape
    radius = null
    pi = 3.14

    init (radius)
        cur.radius = radius
    endinit

    f getArea()
        return (cur.pi * cur.radius ** 2)
    endf
endclass

circle = new Circle(4)
print(circle.getArea()) >> 50,24
```
## 3. Calculator with multiple methods
```easyscript
class Calculator
    f add(a, b)
        return (a + b)
    endf

    f subtract(a, b)
        return (a - b)
    endf

    f multiply(a, b)
        return (a * b)
    endf

    f divide(a, b)
        return (a / b)
    endf
endclass

calc = new Calculator()
sum = calc.add(5, 3)
diff = calc.subtract(5, 3)
product = calc.multiply(5, 3)
quotient = calc.divide(5, 3)

print("Sum: " + sum.asString())
print("Difference: " + diff.asString())
print("Product: " + product.asString())
print("Quotient: " + quotient.asString())
```