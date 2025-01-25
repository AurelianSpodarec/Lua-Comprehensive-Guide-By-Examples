---
  title: collectgarbage()
---

Lua performs automatic memory management through garbage collection (GC). This means you do not need to explicitly allocate or free memory. Lua's garbage collector automatically tracks memory usage, identifying and reclaiming memory used by objects that are no longer accessible in the program.

### How It Works

- An object is considered **dead** when the garbage collector determines that it cannot be accessed during the program's normal execution.  
- Lua ensures that:
  - Objects still accessible will not be collected.
  - Objects that are truly inaccessible will eventually be collected.  

### Collector Modes

The garbage collector operates in two modes:  
1. **Incremental Mode**: Performs collection in small steps to minimize performance impact.  
2. **Generational Mode**: Optimized for programs with a mix of short-lived and long-lived objects.

You can configure and control garbage collection using the `collectgarbage()` function in Lua.

---

### `collectgarbage` Function

The `collectgarbage` function provides a generic interface to Lua’s garbage collector. Its behavior depends on the `opt` argument provided.  

#### Syntax  
```lua
collectgarbage(opt [, arg])
```

#### Parameters  
- **`opt`**: A string specifying the desired operation (see options below).  
- **`arg`** (optional): An argument for specific operations (e.g., step size or collector settings).  

---

### Options and Descriptions  

Each `opt` parameter determines the action of the garbage collector:  

#### `"collect"`  
- **Description**: Performs a full garbage collection cycle.  

#### `"stop"`  
- **Description**: Stops automatic garbage collection. The collector will only run when explicitly triggered.  

#### `"restart"`  
- **Description**: Resumes automatic garbage collection after it has been stopped.  

#### `"count"`  
- **Description**: Returns the total memory currently in use by Lua, measured in kilobytes (including fractional KB).  

#### `"step"`  
- **Description**: Performs a single step of garbage collection.  
- **Argument**:  
  - `0`: Executes one indivisible step.  
  - Non-zero values simulate the allocation of memory in KB and adjust the step size.  
- **Returns**: `true` if the step completes a garbage collection cycle.  

#### `"isrunning"`  
- **Description**: Checks whether the garbage collector is currently running.  
- **Returns**: `true` if the collector is running, otherwise `false`.  

#### `"incremental"`  
- **Description**: Changes the garbage collector mode to incremental.  
- **Optional Arguments**:  
  1. **Pause**: Adjusts the garbage collection pause value.  
  2. **Step Multiplier**: Modifies the GC speed relative to memory allocation.  
  3. **Step Size**: Determines the amount of work the GC performs in each step.  

#### `"generational"`  
- **Description**: Changes the garbage collector mode to generational.  
- **Optional Arguments**:  
  1. **Minor Multiplier**: Determines the frequency of collection for short-lived objects.  
  2. **Major Multiplier**: Adjusts the collection frequency for long-lived objects.  

---

### Examples  

#### Using `"count"`  
Retrieve the total memory in use by Lua:  
```lua
local memory = collectgarbage("count")
print(memory .. " KB")
-- Output: Total memory used by Lua.
```

#### Using `"step"`  
Perform a single GC step:  
```lua
local stepComplete = collectgarbage("step", 10)
print(stepComplete)
-- Output: true (if the step completed a cycle)
```

#### Switching to Incremental Mode  
Change the garbage collector to incremental mode with specific settings:  
```lua
collectgarbage("incremental", 200, 300, 400)
-- Sets pause to 200, step multiplier to 300, and step size to 400.
```

#### Switching to Generational Mode  
Configure the garbage collector for generational behavior:  
```lua
collectgarbage("generational", 50, 100)
-- Sets minor multiplier to 50 and major multiplier to 100.
```

#### Checking If the Collector Is Running  
Verify the current state of the garbage collector:  
```lua
local running = collectgarbage("isrunning")
print(running)
-- Output: true or false
```

#### Performing Full Collection  
Trigger a full garbage collection cycle:  
```lua
collectgarbage("collect")
print("Garbage collection completed.")
```

#### Stopping and Restarting the Collector  
```lua
collectgarbage("stop")
-- Collector is now stopped.

collectgarbage("restart")
-- Collector is now running again.
```

---

### Use Cases for Garbage Collection  

1. **Monitoring Memory Usage**: Use `"count"` to track memory in real-time and debug memory leaks.  
2. **Performance Optimization**: Adjust garbage collector parameters with `"incremental"` or `"generational"` to reduce performance overhead.  
3. **Manual Control**: Temporarily stop the collector in critical sections of code to avoid interruptions.  

---

### Notes  

- Lua’s garbage collection behavior can vary across platforms and Lua versions. Optimal settings may not be portable.  
- Objects accessible only through the **C registry** (e.g., global environment) are not collected because Lua assumes they might be used by C code.  
- Finalizers can temporarily "resurrect" dead objects, delaying their collection (see §2.5.3 in the Lua reference manual).  

Reference: https://lua.org/manual/5.4/manual.html#pdf-assert and https://lua.org/manual/5.4/manual.html#2.5