---
    name="Arrays"
    queue_in_folder=6
---

# Arrays

Arrays in EasyScript are used to store multiple values in a single variable. Arrays are useful for managing collections of data, such as lists of numbers, strings, or other types.

## Creating Arrays

You can access elements in an array using their index. Indexing starts from 0.
### Example

```easyscript
numbers = [1, 2, 3, 4, 5]
fruits = ["apple", "banana", "cherry"]
```

## Accessing Array Elements
You can access elements in an array using their index. Indexing starts from 0.

```easyscript
numbers = [1, 2, 3, 4, 5]
print(numbers[0]) >> Outputs: 1
print(numbers[1]) >> Outputs: 2
```

## Modifying Array Elements
You can change the value of an array element by assigning a new value to a specific index. Indexing starts from 0, again.
```easyscript
numbers[2] = 10
print(numbers)  >> Outputs: [1, 2, 10, 4, 5]
```

## Adding Element to Array
If you wish to add a new element to array, you can use `.add()` method.
```easyscript
numbers = [1,2,3,4,5]
numbers.add(6)
print(numbers) >> Outputs: [1, 2, 3, 4, 5, 6]
```
You will get to know more about different methods in the end of this section.