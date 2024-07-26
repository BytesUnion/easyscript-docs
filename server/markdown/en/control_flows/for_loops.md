---
    name="For loops"
    queue_in_folder=2
---

# For loops

In EasyScript, `for` loops are used to repeat a block of code multiple times. There are three primary variants of `for` loops:

1. **Looping in a range**: `for (var = startnum to endnum)`
2. **Looping in lists**: `for (v in arr)`
3. **Looping in objects**: `for ((k, v) in object)`

## 1. Looping in a Range

This variant of the `for` loop is used to iterate over a range of numbers.

### Syntax

```easyscript
for (var = startnum to endnum) do
    <code_block>
endfor
```
- var: The loop variable that changes with each iteration.
- startnum: The initial value of the loop variable.
- endnum: The final value of the loop variable (inclusive).
- endfor: Marks the end of the for loop block.

### Example

```easyscript
for (i = 1 to 5) do
    print(i)
endfor
```

In this example, the loop variable `i` starts at 1 and increments by 1 on each iteration until it reaches 5. The output will be:
```
1
2
3
4
5
```

## 2. Looping in lists

### Syntax

```easyscript
for (var in list) do
    <code_block>
endfor
```
- v: The loop variable representing the current element in the list.
- arr: The list to iterate over.
- endfor: Marks the end of the for loop block.

### Example

```easyscript
arr = [10, 20, 30, 40, 50]
for (v in arr) do
    print(v)
endfor
```
In this example, the loop iterates over each element of the array `arr` and prints each element. The output will be:
```easyscript
10
20
30
40
50
```

## 3. Looping in objects

### Syntax
```easyscript
for ((k, v) in object) do
    <code_block>
endfor
```
- k: The loop variable representing the current key in the object.
- v: The loop variable representing the current value in the object.
- object: The object to iterate over.
- endfor: Marks the end of the for loop block.

### Example
```easyscript
object = { "name": "Alice", "city": "Wonderland" }
for ((k, v) in object) do
    print(k + ": " + v)
endfor
```
In this example, the loop iterates over each key-value pair in the object `object` and prints them. The output will be:
```easyscript
name: Alice
city: Wonderland
```