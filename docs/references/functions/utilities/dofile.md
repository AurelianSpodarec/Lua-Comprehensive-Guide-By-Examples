---
  title: dotfile()
---

The `dofile` function in Lua is used to execute the contents of a file as a Lua chunk. It opens the specified file, runs its code, and returns any values produced by the chunk. If no file name is provided, `dofile` executes code from the standard input (stdin). Unlike some other functions, `dofile` does not run in protected mode, meaning it propagates errors directly to its caller.

---

### Syntax  
```lua
dofile([filename])
```

### Parameters  

- **`filename`** *(optional)*:  
  The name of the file whose contents will be executed.  
  - If omitted, `dofile` reads and executes from the standard input (stdin).  

---

### Behavior  

1. **File Execution**:  
   - The contents of the specified file are treated as a Lua chunk and executed immediately.  

2. **Returns**:  
   - All return values from the executed chunk are passed back by `dofile`.  

3. **Error Handling**:  
   - Any errors that occur during file execution are propagated to the caller, as `dofile` does not run in protected mode.  

---

### Use Cases  

- Dynamically loading Lua code from external files during runtime.  
- Breaking large scripts into multiple smaller files and executing them as needed.  
- Executing configurations or scripts provided by the user.  

---

### Examples  

#### Executing a File  
```lua
-- Assuming 'script.lua' contains:
-- return 1, 2, 3

local a, b, c = dofile("script.lua")
print(a, b, c)
-- Output: 1  2  3
```

#### Error Propagation  
```lua
-- Assuming 'error_script.lua' contains invalid Lua code:
-- This will throw an error and stop execution.

local result = dofile("error_script.lua")
-- Output: lua: error_script.lua:1: unexpected symbol
```

#### Reading From Standard Input  
```lua
-- Running dofile() without arguments reads Lua code from stdin.
-- You can manually type or redirect input:
dofile()
-- Input: print("Hello, world!")
-- Output: Hello, world!
```

---

### Notes  

1. **Unprotected Execution**:  
   Since `dofile` does not run in protected mode, errors will not be caught internally. If you want to handle errors gracefully, use `pcall` or `xpcall` in combination with `dofile`.  
   ```lua
   local status, err = pcall(dofile, "error_script.lua")
   if not status then
       print("Error:", err)
   end
   ```

2. **File Path**:  
   Ensure the file path is valid and accessible. If the file does not exist or cannot be opened, an error will be raised.  

3. **Chunk Independence**:  
   Variables defined within the file are local to the chunk unless explicitly declared as global.  

---

### Comparison With Similar Functions  

- **`loadfile`**:  
  Loads a Lua chunk from a file without executing it. Use `loadfile` when you want to compile a chunk and execute it later.  
  ```lua
  local chunk = loadfile("script.lua")
  if chunk then
      chunk() -- Executes the loaded chunk
  end
  ```

- **`require`**:  
  Used to load modules and manages dependencies. Unlike `dofile`, `require` caches the result to prevent re-executing the same module.  
  ```lua
  require("module") -- Loads and executes 'module.lua' only once
  ```

---

### Summary  

- **Purpose**: Executes Lua code from a file or standard input.  
- **Usage**: Best for dynamically executing scripts or modularizing large programs.  
- **Caution**: Handle errors carefully as `dofile` does not offer internal error protection.  

Reference: https://lua.org/manual/5.4/manual.html#dotfile