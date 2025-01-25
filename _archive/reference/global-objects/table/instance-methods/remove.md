---
    title: table.remove()
    slug: /reference/global-objects/table/remove
---

The `table.remove()` method removes one element from the table. This method changes the length of the table.

## Syntax
```lua
table.remove(tbl, index)
```

## Parameters
`tbl`  
&nbsp;&nbsp;&nbsp;  The table where the item should be removed from.  

`index` (optional)  
&nbsp;&nbsp;&nbsp;  The index (position) of the current element in the array.  


## Descriptiton
- Removes the last item by default is no index is specified
- The method removed one element from a table by index

:::note

The method does not remove the last item of the array if its an [associative array]
e.g `{ name = "Bob", name = "Joe"}`

:::

## Examples
Removing "Rice" from groceries table.

```lua
groceries = { "Bread", "Rice", "Peas" }

table.remove(groceries, 2)

-- Expected Output: groceries = { "Bread", "Peas" }
```

## Other Examples

### Removing item with `nil` value
Removing the item by making it null, does not change the table length.

```lua
local groceries = { "Dog", "Cat", "Bird" }

groceries[2] = nil -- Makes "rice" nil, table does not change in lenght

-- Expected Outcome: Dog nil, Bird
```

Looping over the table ignores the `nil` value changing the length of the table.

```lua
local groceries = { "Dog", "Cat", "Bird" }

groceries[2] = nil 

// highlight-start
for index = 1, #groceries do
    print(groceries[index])
end
// highlight-end

-- Expected Output: Bread Peas
```

### Removing last item


### Removing item by name