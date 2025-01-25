---
  title: iparis()
---

The `ipairs` function in Lua provides an iterator for sequentially traversing a table's elements, starting from index `1` and continuing until the first absent or `nil` value is encountered. This function is primarily used for iterating over arrays or tables with numeric, consecutive indices.  

---

### Syntax  
```lua
ipairs(t)
```

### Parameters  

- **`t`**:  
  A table to be iterated over. The table is expected to have numeric keys starting from `1` in sequence.  

---

### Return Values  

The `ipairs` function returns three values:  
1. **Iterator function**: A function that produces the next index-value pair during iteration.  
2. **Table `t`**: The same table that was passed as input.  
3. **Initial index (0)**: The initial index to start iteration.  

---

### Behavior  

1. **Iteration Process**:  
   - The `ipairs` iterator function produces key-value pairs starting from `(1, t[1])`, `(2, t[2])`, and so on, until the first absent or `nil` value is encountered.  
   - Iteration stops at the first non-consecutive or missing numeric key.  

2. **Array-Like Tables**:  
   - `ipairs` is ideal for tables that behave like arrays, where indices are numeric and consecutive.  
   - Non-numeric or sparse keys in the table are ignored.  

3. **Automatic Stopping**:  
   - Iteration halts as soon as a `nil` value is found.  

---

### Use Cases  

- Iterating over array-like tables with sequential numeric keys.  
- Safely traversing a list until the first missing or `nil` value.  
- Suitable for scenarios where key-value pairs must be iterated in sequential numeric order.  

---

### Examples  

#### Basic Iteration with `ipairs`  
```lua
local t = {10, 20, 30}

for i, v in ipairs(t) do
    print(i, v)
end
-- Output:
-- 1   10
-- 2   20
-- 3   30
```

#### Stopping at the First `nil` Value  
```lua
local t = {10, 20, nil, 40}

for i, v in ipairs(t) do
    print(i, v)
end
-- Output:
-- 1   10
-- 2   20
-- Iteration stops at the `nil` value (index 3).
```

#### Ignoring Non-Numeric Keys  
```lua
local t = {10, 20, ["key"] = 30, 40}

for i, v in ipairs(t) do
    print(i, v)
end
-- Output:
-- 1   10
-- 2   20
-- Non-numeric keys (e.g., "key") are ignored.
```

#### Table with Gaps  
```lua
local t = {10, nil, 30}

for i, v in ipairs(t) do
    print(i, v)
end
-- Output:
-- 1   10
-- Iteration stops at the `nil` value (index 2).
```

#### Returning the Iterator  
```lua
local iterator, table, index = ipairs({10, 20, 30})

print(iterator, table, index)
-- Output:
-- function: 0x...  table: 0x...  0
```

#### Using the Iterator Function  
```lua
local t = {10, 20, 30}
local iter, tbl, i = ipairs(t)

i, v = iter(tbl, i)  -- Moves to the first pair
print(i, v)          -- Output: 1   10

i, v = iter(tbl, i)  -- Moves to the next pair
print(i, v)          -- Output: 2   20
```

---

### Notes  

1. **Difference from `pairs`**:  
   - `pairs` traverses all key-value pairs in a table, including non-numeric and sparse keys.  
   - `ipairs` only works with numeric, sequential indices and stops at the first gap or `nil`.  

2. **Arrays Only**:  
   - Use `ipairs` for array-like tables. For more general iteration, use `pairs`.  

3. **Immutable Order**:  
   - The order of iteration with `ipairs` is always sequential and numeric.  

4. **Not Suitable for Sparse Tables**:  
   - If the table has gaps or missing indices, `ipairs` stops at the first `nil` value.  

---

### Summary  

- **Purpose**: Sequentially iterate through array-like tables.  
- **Behavior**: Iterates from index `1` to the first absent or `nil` value, ignoring non-numeric keys.  
- **Use Cases**: Ideal for looping over numeric tables with consecutive indices.  
- **Limitations**: Stops at `nil` values, unsuitable for sparse or non-array-like tables.  
