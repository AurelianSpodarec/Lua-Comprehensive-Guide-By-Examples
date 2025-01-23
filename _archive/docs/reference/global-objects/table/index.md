---
title: Table
---

The `table` objecs, reffered as arrays in other programming languages, enables the storeage of different data.


## Description

In Lua, `table` is the only way to represent stored data. 

- You can use the table as an array, object and class
- Tables are indexted starting from 1
- You can create 2D arrays

## Constructor

`{}`  
&nbsp;&nbsp;&nbsp; Creates a new `table` object.  

## Functions

[`next()`](/reference/functions/next)  
&nbsp;&nbsp;&nbsp; Allows a program to traverse all fields of a table  

[`setmetatable()`](/reference/functions/setmetatable)  
&nbsp;&nbsp;&nbsp; Sets the metatable for the table.  

[`getmetatable()`](/reference/functions/getmetatable)  
&nbsp;&nbsp;&nbsp;  Returns metatable associated value or metatable.  

[`rawset()`](/reference/functions/rawset)  
&nbsp;&nbsp;&nbsp; Sets value of `table[index]` and returns the table  

[`rawget()`](/reference/functions/rawget)  
&nbsp;&nbsp;&nbsp; Returns value of `table[index]`  

[`pairs()`](/reference/functions/pairs)  
&nbsp;&nbsp;&nbsp; Used to ilerate over table  

[`ipairs()`](/reference/functions/ipairs)  
&nbsp;&nbsp;&nbsp; Used to ilerate over tble  

## Instance Methods

[`table.insert()`](/reference/global-objects/table/insert)  
&nbsp;&nbsp;&nbsp; Adds one element to the table.  
    
[`table.remove()`](/reference/global-objects/table/remove)    
&nbsp;&nbsp;&nbsp; Removes one element from the table.  

[`table.pack()`](/reference/global-objects/table/pack)    
&nbsp;&nbsp;&nbsp; Packs elements into a new table.  

[`table.unpack()`](/reference/global-objects/table/unpack)    
&nbsp;&nbsp;&nbsp; Unpacks a table into values.  

[`table.concat()`](/reference/global-objects/table/concat)    
&nbsp;&nbsp;&nbsp; Returns a combined string from a table.  

[`table.sort()`](/reference/global-objects/table/sort)    
&nbsp;&nbsp;&nbsp; Sorts the values in a table.  

[`table.move()`](/reference/global-objects/table/move)    
&nbsp;&nbsp;&nbsp; Moves elements from one table to another table and returns it.
 
## Examples
This section provides examples of common table operations in Lua.

### Create a table

### Get table item by index

```lua
local groceries = {
    {
        id = 3421,
        name = "Dark Chocolate",
        price = "$1.99"
    },
    {
        id = 4843,
        name = "Lemon",
        price = "$0.69"
    },
    {
        id = 2903,
        name = "Blender",
        price = "$42.00"
    }
    
}

print(groceries[3].name)

-- Expecetd Output: Blender
```

### Display values of a table

```lua
local groceries = {
    {
        id = 3421,
        name = "Dark Chocolate",
        price = "$1.99"
    },
    {
        id = 4843,
        name = "Lemon",
        price = "$0.69"
    },
    {
        id = 2903,
        name = "Blender",
        price = "$42.00"
    }
}

for index, data in ipairs(groceries) do
    print(index)

    for key, value in pairs(data) do
        print('\t', key, value)
    end
end

-- Expectd output:
-- 1
--   name	Dark Chocolate
--   price	$1.99
--   id	3421
-- 2
--   name	Lemon
--   price	$0.69
--   id	4843
-- 3
--   name	Blender
--   price	$42.00
--   id	2903
```


### Reasemblance of a Class

```lua
local Class = {}

function Class.makeSound(sound)
    return sound
end

function Class.sit()
-- code...
end

print(Class.makeSound("Woof!"))

-- Expected Output: Woof
```