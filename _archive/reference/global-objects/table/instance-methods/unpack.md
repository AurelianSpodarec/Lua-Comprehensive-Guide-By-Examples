---
    title: table.unpack()
    slug: /reference/global-objects/table/unpack
---

The `table.unpack()` returns all values from a table.

### Syntax

```Lua
table.unpack(tbl)
```

### Parameters
`tbl`
The table to be unpacked.

### Examples

Unpacking a table
```Lua
groceries = { "Bread", "Rice", "Peas" }
print(table.unpack(groceries))

-- Output: Bread Rice Peas
```

Unpacking a table with tables inside
```Lua
groceries = {
    {
        id = 31,
        name = "Bread",
        quantity = 2
    },
    {
        id = 242,
        name = "Rice",
        quantity = 1
    },
    {
        id = 493,
        name = "Peas",
        quantity = 1
    }
}

print(table.unpack(groceries))

-- Output: table: 0x55db576a62a0 table: 0x55db576a4dd0 table: 0x55db941a4dd1
```