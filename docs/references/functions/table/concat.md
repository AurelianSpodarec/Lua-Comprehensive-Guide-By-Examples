---
    title: table.concat()
---

The `table.concat()` function combines the values in a table into a single string.

### Syntax

```lua
table.concat(tbl, seperator)
```

### Parameter

`tbl`
The table whose values will be concatenated into a string.

`seperator (optional)`
Used as a separator between values.

### Examples

#### When only the table is provided
The function concatenates all values in the table without adding any separators.

```Lua
local tbl = {"The","fox","jumps","over","the","lazy","dog",}

print(table.concat(tbl)) 

-- Output: Thefoxjumpsoverthelazydog
```

```Lua
local tab = { 1, 2, 3, 4 }

print(table.concat(tab)) 

-- Output: 1234
```

#### When a separator is provided (second parameter)
The function inserts the specified separator between the values in the table.

##### Example 1: Using a space (" ") as the separator

```lua
local tbl = { "The", "rocket", "lands", "on", "the", "moon" }

print(table.concat(tbl," ")) 

-- Output: The rocket lands on the moon
```

##### Example 2: Using a hyphen ("-") as the separator

```lua
local tbl = { "The", "rocket", "lands", "on", "the", "moon" }

print(table.concat(tbl, "-")) 

-- Output: The-rocket-lands-on-the-moon
```
