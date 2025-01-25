---
    title: table.insert()
    slug: /reference/global-objects/table/insert
---

The `table.insert()` method adds one element to the table.

### Syntax
```Lua
table.insert(tbl, value)
```

### Parameter
`tbl`
The table where the item should be removed from.

`value`
The element to add to the end of the table.


### Examples

#### Adding elements to a table

```Lua

local groceries = { "Bread", "Rice" }
table.insert(groceries, "Potatoes")

-- Output:  groceries = {"Bread", "Rice", "Potatoes"}

```