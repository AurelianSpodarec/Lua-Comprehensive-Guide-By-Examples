---

    title: string.gmatch() 

---

The `string.gmatch` function returns an iterator that yields all matches of a pattern in a string.

### Syntax  
```Lua
string.gmatch(s, pattern)
```  

### Parameters  

#### `s`  
The string to search in.  

#### `pattern`  
The pattern to search for.  

### Examples  

#### Basic usage.
```Lua
for word in string.gmatch("Lua is fun", "%a+") do
    print(word)
end

-- Output:
-- Lua
-- is
-- fun
```  
