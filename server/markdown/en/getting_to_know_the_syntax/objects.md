---
    name="Objects"
    queue_in_folder=7
---

# Objects

Objects in EasyScript are used to store collections of key-value pairs. They are useful for managing structured data, such as information about a person, a product, or any entity with multiple attributes.

## Creating Objects

You can create an object by listing key-value pairs inside curly braces `{}`, with keys and values separated by colons.

### Example

```easyscript
person = {
    "name": "Alice",
    "city": "Wonderland"
}
```

### Accessing Object Properties
You can access the properties of an object using both dot notation and bracket notation.
```easyscript
print(person.name)    >> Outputs: Alice
print(person["city"])  >> Outputs: Wonderland
```

### Modifying or Adding Object Properties
You can change or add the value of an object's property by assigning a value to the key.
```easyscript
person.country = "Wonderland"
print(person.country)  >> Outputs: Wonderland
```