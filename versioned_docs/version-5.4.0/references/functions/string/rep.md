---

    title: string.rep() 

---

The `string.rep` function repeats a string a specified number of times.

### Syntax  
```Lua
string.rep(s, n, sep)
```  

### Parameters  

#### `s`  
The string to repeat.  

#### `n`  
The number of times to repeat the string.  

#### `sep (optional)`  
A string to insert between repetitions. Defaults to an empty string.  

### Examples  

#### Basic repetition.
```Lua
local result = string.rep("Lua", 3)
print(result)

-- Output: LuaLuaLua
```  

#### Using a separator.
```Lua
local result = string.rep("Lua", 3, "-")
print(result)

-- Output: Lua-Lua-Lua
```  

