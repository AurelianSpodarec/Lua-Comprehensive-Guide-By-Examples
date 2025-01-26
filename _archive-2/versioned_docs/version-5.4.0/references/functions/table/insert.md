---
    title: table.insert()
---

The `table.insert()` method adds one element to the table.

### Syntax
```lua
table.insert(tableData, value)
```

### Parameter
`tableData`
The table where the item should be removed from.

`value`
The element to add to the end of the table.


### Examples

#### Adding elements to a table

```lua

local groceries = { "Bread", "Rice" }
table.insert(groceries, "Potatoes")

-- Output:  groceries = {"Bread", "Rice", "Potatoes"}

```