---
    name="While loops"
    queue_in_folder=3
---

# While Loops

In EasyScript, `while` loops are used to execute a block of code as long as a specified condition is True. The loop continues to run until the condition evaluates to False.

## Syntax

```easyscript
while (condition) do
    <code_block>
endwhile
```
- condition: The expression that is evaluated before each iteration. The loop continues as long as this condition is true.
- endwhile: Marks the end of the while loop block.

## Example

```easyscript
i = 1
while (i <= 5) do
    print(i)
    i = i + 1
endwhile
```
In this example, the variable `i` starts at 1. The loop continues as long as `i` is less than or equal to 5. On each iteration, `i` is incremented by 1 and printed. The output will be:
```easyscript
1
2
3
4
5
```