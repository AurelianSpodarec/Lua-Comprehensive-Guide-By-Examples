---
    title: table.concat()
    slug: /reference/global-objects/table/concat
---

The `table.concat()` function is used to concatinate table values into a string.

### Syntax
```Lua
table.concat(tbl, seperator)
```

### Parameter
`tbl`
The table to be concatinated.

`seperator (optional)`
Used as a separator between values.

### Examples

#### Only table provided to the function.
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

#### Table provided with the second parameter

```Lua
local tbl = {"The","fox","jumps","over","the","lazy","dog",}

print(table.concat(tbl," ")) 

-- Output: The fox jumps over the lazy dog
```

```Lua
local tbl = { 1, 2, 3, 4 }

print(table.concat(tbl, "-")) 

-- Output: 1-2-3-4
```
