---

    title: string.char() 

---

The `string.char` function returns a string containing the characters specified by their numeric ASCII (or Unicode) values.

### Syntax  
```Lua
string.char(...)
```  

### Parameters  

#### `...`  
One or more integer values representing ASCII (or Unicode) values of characters.  

### Examples  

#### Basic usage.
```Lua
local result = string.char(66, 111, 111)
print(result)

-- Output: Boo
```  
