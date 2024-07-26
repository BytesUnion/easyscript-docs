---
    name="Methods"
    queue_in_folder=8
---

# Methods

EasyScript provides various methods for different data types. Below is a detailed description of the methods available for each type.

## General Methods

These methods are applicable to all data types.

- `.asString()`  
  Converts the object to a string representation.

- `.getType()`  
  Retrieves the type of the object.

## String Methods

Methods specific to strings.

- `.asInt()`  
  Converts the string to an integer.  
  **Example**: `"123".asInt()` results in `123`.

- `.asDouble()`  
  Converts the string to a double (floating-point number).  
  **Example**: `"123.45".asDouble()` results in `123.45`.

- `.length()`  
  Returns the length of the string.  
  **Example**: `"hello".length()` results in `5`.

- `.reversed()`  
  Returns a new string that is the reverse of the original string.  
  **Example**: `"hello".reversed()` results in `"olleh"`.

- `.reverse()`  
  Reverses the string in place.  
  **Example**: `"hello".reverse()` results in `"olleh"`.

- `.uppercase()`  
  Converts the string to uppercase.  
  **Example**: `"hello".uppercase()` results in `"HELLO"`.

- `.lowercase()`  
  Converts the string to lowercase.  
  **Example**: `"HELLO".lowercase()` results in `"hello"`.

## Integer Methods

Currently, there are no specific methods for integers other than the general methods.

## Double Methods

Currently, there are no specific methods for doubles other than the general methods.

## Boolean Methods

Currently, there are no specific methods for booleans other than the general methods.

## List Methods

Methods specific to lists.

- `.length()`  
  Returns the number of elements in the list.  
  **Example**: `[1, 2, 3].length()` results in `3`.

- `.reversed()`  
  Returns a new list that is the reverse of the original list.  
  **Example**: `[1, 2, 3].reversed()` results in `[3, 2, 1]`.

- `.reverse()`  
  Reverses the list in place.  
  **Example**: `[1, 2, 3].reverse()` results in `[3, 2, 1]`.

- `.add(element)`  
  Adds a new element to the end of the list.  
  **Example**: `[1, 2].add(3)` results in `[1, 2, 3]`.

## Object Methods

Methods specific to objects.

- `.count()`  
  Returns the number of key-value pairs in the object.  
  **Example**: `{ "a": 1, "b": 2 }.count()` results in `2`.

- `.containsKey(key)`  
  Returns `True` if the object contains the specified key, otherwise `False`.  
  **Example**: `{ "a": 1 }.containsKey("a")` results in `True`.

- `.get(key)`  
  Returns the value associated with the specified key.  
  **Example**: `{ "a": 1 }.get("a")` results in `1`.

- `.set(key, value)`  
  Sets the value for the specified key in the object.  
  **Example**: `{ "a": 1 }.set("b", 2)` results in `{ "a": 1, "b": 2 }`.