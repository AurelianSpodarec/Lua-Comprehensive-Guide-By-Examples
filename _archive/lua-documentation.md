
# Table of contents
- **[Lua Basics](#lua_basics)**
  - **[Functions](#functions)**  
      - [Independent](#functions_table)  
      - [Table Functions](#functions_table)  
      - [Files](#functions_table)  
      - [Error Handling](#functions_table) 
  - **[Global Objects](#global-objects)**  
      - [String](#global-objects_string)  
      - [Math](#global-objects_math)  
      - [Table](#global-objects_table)  
      - [Coroutine](#global-objects_coroutine)  
      - [Operating System Facilities (OS)](#global-objects_os)  
      - [Input and Output Facilities (IO)](#global-objects_io)  
      - [UTF-8](#global-objects_utf-8)
      - [Debug](#global-objects_debug)
      - [Modules](#global-objects_modules)
  - **[Expressions & Operators](#expressions-and-operators)**  
  - **[Statements & Declarations](#staatements-and-declarations)**  
- **Metamethods**
- **Enviroment Variables**
- **C API**
- **Auxiliary Library**

---------------------------------

# <a name="expressions-and-operators">Expressions & Operators</a>  

[`Addition +`](#table-of-contents)  
[`Subtraction -`](#table-of-contents)  
[`Multiplication *`](#table-of-contents)  
[`Division /`](#table-of-contents)  
[`Modulo %`](#table-of-contents)  
[`Exponentiation ^`](#table-of-contents)  
[`Negation (Unary-)`](#table-of-contents)  
[`Relational Operators`](#table-of-contents)  
[`and`](#table-of-contents)  
[`or`](#table-of-contents)  
[`not`](#table-of-contents)  
[`<`](#table-of-contents)  
[`>`](#table-of-contents)  
[`<=`](#table-of-contents)  
[`>=`](#table-of-contents)  
[`==`](#table-of-contents)  
[`~=`](#table-of-contents)  



# <a name="staatements-and-declarations">Statements & Declarations</a>  

[`local`](#table-of-contents)  
[`<const>`](#table-of-contents)  
[`break`](#table-of-contents)  
[`if...then`](#table-of-contents)  
[`for...do`](#table-of-contents)  
[`while....do`](#table-of-contents)  
[`local`](#table-of-contents)  
[`do`](#table-of-contents)  
[`else`](#table-of-contents)  
[`elseif`](#table-of-contents)  
[`function`](#table-of-contents)  
[`end`](#table-of-contents)  
[`in`](#table-of-contents)  
[`repeat`](#table-of-contents)  
[`then`](#table-of-contents)  
[`until`](#table-of-contents)  
[`true`](#table-of-contents)  
[`false`](#table-of-contents)  
[`return`](#table-of-contents)  
[`nil`](#table-of-contents)  



# <a name="functions">Functions</a>  
<!-- - [Independent](#functions_independent)   -->
<!-- - [Table Functions ](#functions_table)   -->
<!-- - [Files](#functions_files)   -->
<!-- - [Error Handling](#functions_error-handling)   -->

-----------------------

<!-- ## <a name="functions_independent">Independent</a>   -->
[`print()`]('functions_print)  
[`type()`]('functions_type)  
[`tonumber()`]('functions_tonumber)  
[`tostring()`]('functions_tostring)  
[`rawlen()`]('functions_rawlen)  
[`select()`]('functions_select)  
[`collectgarbage()`]('functions_collectgarbage)  
<!-- ## <a name="functions_table">Table Functions</a>   -->
[`next()`]('functions_next)  
[`pairs()`]('functions_pairs)  
[`ipairs()`]('functions_ipars)  
[`rawset()`]('functions_rawset)  
[`rawget()`]('functions_rawget)  
[`rawequal()`]('functions_rawequal)  
[`setmetatable()`]('functions_setmetable)  
[`getmetatable()`]('functions_getmetable)  
<!-- ## <a name="functions_files">Files</a>   -->
[`require()`]('functions_require)  
[`dofile()`]('functions_dofile)  
[`load()`]('functions_load)  
[`loadfile()`]('functions_loadfile)  
<!-- ## <a name="functions_error-handling">Error Handling</a>   -->
[`pcall()`]('functions_pcall)  
[`error()`]('functions_error)  
[`xpcall()`]('functions_xpcall)  
[`assert()`]('functions_assert)  


**[⬆ back to top](#table-of-contents)**



# [Global Objects](#global-objects)  
- [String](#global-objects_string)  
- [Math](#global-objects_math)  
- [Table](#global-objects_table)  
- [Coroutine](#global-objects_coroutine)  
- [Operating System Facilities (OS)](#global-objects_math)  

-----------------------


## <a name="global-objects_string">String</a>  
<!-- http://www.lua.org/pil/2.4.html -->
The `String` object is used to represent and manipulate a sequence of characters.

### Escape Sequences
Special characters can be encoded using escape sequences:

| Escape sequence      | Use                   |
| :---                 | :---                  |
| `\b`                 | Backspace             |
| `\f`                 | Formfeed              |
| `\n`                 | New line              |
| `\r`                 | Carriage return       |
| `\t`                 | Tab                   |
| `\v`                 | Vertical tab          |
| `\\`                 | Backslash             |
| `\"`                 | Double quotes         |
| `\'`                 | Single quotes         |
| `\[`                 | Left square bracket   |
| `\]`                 | Right square bracket  |


### Functions
[`tostring()`](#???_tostring)
 <!-- Editor: Should this be here? -->

### Methods
[`String.byte()`](#global-objects_string-method_byte)  
[`String.char()`](#global-objects_string-method_char)  
[`String.dump()`](#global-objects_string-method_dump)  
[`String.find()`](#global-objects_string-method_find)  
[`String.format()`](#global-objects_string-method_format)  
[`String.gmatch()`](#global-objects_string-method_gmatch)  
[`String.gsub()`](#global-objects_string-method_gsub)  
[`String.len()`](#global-objects_string-method_len)  
[`String.lower()`](#global-objects_string-method_lower)  
[`String.match()`](#global-objects_string-method_match)  
[`String.pack()`](#global-objects_string-method_pack)  
[`String.packsize()`](#global-objects_string-method_packsize)  
[`String.rep()`](#global-objects_string-method_rep)  
[`String.reverse()`](#global-objects_string-method_reverse)  
[`String.sub()`](#global-objects_string-method_sub)  
[`String.unpack()`](#global-objects_string-method_unpack)  
[`String.upper()`](#global-objects_string-method_upper)  


**[⬆ back to top](#table-of-contents)**



## <a name="global-objects_math">Math</a>  
<!-- https://www.lua.org/manual/5.4/manual.html#6.7 -->
`math` is a built-in object that has properties and methods for mathematical constants and functions. It's not a function object.

`math` works with `Numeric` type.


### Static properties
[`math.pi`](#global-objects_math_static-properties_pi)  
&nbsp; Ratio of a circle's circumference to its diameter; approximately 3.14159. 

[`math.huge`](#global-objects_math_static-properties_huge)  
&nbsp; TODO: Improve - The float value HUGE_VAL, a value greater than any other numeric value.

### Methods
[`math.abs(x)`](#global-objects_math_methods_abs)  
&nbsp; Returns the absolute value of `x`.  

[`math.acos(x)`](#global-objects_math_methods_acos)  
&nbsp; Returns the arccosine of `x`.  

[`math.asin(x)`](#global-objects_math_methods_asin)  
&nbsp; Returns the arcsine of `x`.  

[`math.atan(x)`](#global-objects_math_methods_atan)  
&nbsp; Returns the arctangent of `x`.  

[`math.atan2(y, x)`](#global-objects_math_methods_atan2)  
&nbsp; Returns the arctangent of the quotient of its arguments.

[`math.celi(x)`](#global-objects_math_methods_celi)  
&nbsp; Returns the smallest integer greater than or equal to `x`.  

[`math.cos(x)`](#global-objects_math_methods_cos)  
&nbsp; Returns the cosine of `x`.  

[`math.cosh(x)`](#global-objects_math_methods_cosh)  
&nbsp; Returns the hyperbolic cosine of `x`.  

[`math.deg(x)`](#global-objects_math_methods_deg)  
&nbsp; TODO: Improve - Returns the angle `x` (given in radians) in degrees.  

[`math.exp(x)`](#global-objects_math_methods_exp)  
&nbsp; Returns `e^x`, where `x` is the argument, and e is Euler's constant (`2.718…`, the base of the natural logarithm).  

[`math.floor(x)`](#global-objects_math_methods_floor)  
&nbsp; Returns the largest integer less than or equal to `x`.

[`math.fmod(x, y)`](#global-objects_math_methods_fmod)  
&nbsp; TODO: Improve - Returns the remainder of the division of x by y that rounds the quotient towards zero.  

[`math.frexp(x)`](#global-objects_math_methods_frexp)  
&nbsp; TODO: Improve -Returns m and e such that x = m2e, e is an integer and the absolute value of m is in the range `[0.5, 1)` `(or zero when x is zero)`.  

[`math.ldexp(x, y)`](#global-objects_math_methods_ldexp)  
&nbsp; TODO: Improve - Returns m2e (e should be an integer).  

[`math.logx(x)`](#global-objects_math_methods_log)  
&nbsp; Returns the natural logarithm (㏒e; also, ㏑) of `x`.  

[`math.log10(x)`](#global-objects_math_methods_log10)  
&nbsp; Returns the base-10 logarithm of `x`.  

[`math.max(x, ..., y)`](#global-objects_math_methods_max)  
&nbsp; Returns the largest of zero or more numbers.  

[`math.min(x, ..., y)`](#global-objects_math_methods_min)  
&nbsp; Returns the smallest of zero or more numbers.  

[`math.modf(x)`](#global-objects_math_methods_modf)  
&nbsp; TODO: Improve - Returns two numbers, the integral part of x and the fractional part of x.

[`math.pow(x, y)`](#global-objects_math_methods_pow)  
&nbsp; Returns base `x` to the exponent power y (that is, `x^y`).

[`math.rad(x)`](#global-objects_math_methods_rad)  
&nbsp; TODO: Improve - Returns the angle x (given in degrees) in radians.  

[`math.random(x)`](#global-objects_math_methods_random)  
&nbsp; Returns a pseudo-random number between `0` and `1`.  

[`math.randomseed(x)`](#global-objects_math_methods_randomseed)  
&nbsp; TODO: Improve - Sets x as the "seed" for the pseudo-random gene rator: equal seeds produce equal sequences of numbers.  

[`math.sinx(x)`](#global-objects_math_methods_sin)  
&nbsp; Returns the sine of `x`.  

[`math.sinh(x)`](#global-objects_math_methods_sinh)  
&nbsp; Returns the hyperbolic sine of `x`.  

[`math.sqrt(x)`](#global-objects_math_methods_sqrt)  
&nbsp; Returns the positive square root of `x`.  

[`math.tan(x)`](#global-objects_math_methods_tan)  
&nbsp; Returns the tangent of `x`.  

[`math.tanh(x)`](#global-objects_math_methods_tanh)  
&nbsp; Returns the hyperbolic tangent of `x`.


### Example
This section provides examples of common math operations in Lua.


**[⬆ back to top](#table-of-contents)**


## <a name="global-objects_table">Table</a>
`table` is a built in object 

### Constructor
`{}` Creates a new `table` object.  


### Functions
[`next()`](#reference_functions_next)  
[`getmetatable()`](#reference_functions_getmetatable)  
[`setmetatable()`](#reference_functions_setmetatable)  
[`rawset()`](#reference_functions_rawset)  
[`rawget()`](#reference_functions_rawget)  
[`pairs()`](#reference_functions_pairs)  
[`ipairs()`](#reference_functions_ipairs)  

### Methods
[`table.insert()`](#global-objects_table-method_insert)  
&nbsp; Adds one element to the table.  

[`table.remove()`](#global-objects_table-method_remove)  
&nbsp; Removes one element from the table.  

[`table.pack()`](#global-objects_table-method_pack)  
&nbsp; Packs elements into a new table.  

[`table.unpack()`](#global-objects_table-method_unpack)  
&nbsp; Unpacks a table into values.  

[`table.concat()`](#global-objects_table-method_concat)  
&nbsp; Returns a combined string from a table.  

[`table.sort()`](#global-objects_table-method_sort)  
&nbsp; Sorts the values in a table.  

[`table.move()`](#global-objects_table-method_move)  
&nbsp; Moves elements from one table to another table and returns it.
 

### Examples
This section provides examples of common table operations in Lua.

#### Create a table

#### Access an table item by its index
```lua
local groceries = {
    {
        id = 3421,
        name = "Dark Chocolate",
        price = "$1.99"
    },
    {
        id = 4843,
        name = "Lemon",
        price = "$0.69"
    },
    {
        id = 2903,
        name = "Blender",
        price = "$42.00"
    }
    
}

print(groceries[3].name)

-- Expecetd Output: Blender
```

#### Display values of a table
```lua
local groceries = {
    {
        id = 3421,
        name = "Dark Chocolate",
        price = "$1.99"
    },
    {
        id = 4843,
        name = "Lemon",
        price = "$0.69"
    },
    {
        id = 2903,
        name = "Blender",
        price = "$42.00"
    }
}

for index, data in ipairs(groceries) do
    print(index)

    for key, value in pairs(data) do
        print('\t', key, value)
    end
end

-- Expectd output:
-- 1
--   name	Dark Chocolate
--   price	$1.99
--   id	3421
-- 2
--   name	Lemon
--   price	$0.69
--   id	4843
-- 3
--   name	Blender
--   price	$42.00
--   id	2903
```


#### Reasemblance of a Class
```lua
local Class = {}

function Class.makeSound(sound)
    return sound
end

function Class.sit()
-- code...
end

print(Class.makeSound("Woof!"))

-- Output: Woof
```


**[⬆ back to top](#table-of-contents)**


## <a name="global-objects_coroutine">Coroutine</a>  
`coroutine` is a built in object 

### Constructor
`coroutine.create()` Creates a new `coroutine` object.

### Functions
This object does not contain specific functions.

### Methods
[`coroutine.create()`](#global-objects_coroutine-method_create)  
[`coroutine.status()`](#global-objects_coroutine-method_status)  
[`coroutine.resume()`](#global-objects_coroutine-method_resume)  
[`coroutine.running()`](#global-objects_coroutine-method_running)  
[`coroutine.wrap()`](#global-objects_coroutine-method_wrap)  
[`coroutine.yield()`](#global-objects_coroutine-method_yield)  


**[⬆ back to top](#table-of-contents)**



## <a name="global-objects_os">Operating System Facilities (OS)</a>  
`os` is a built in object that helps accessing the operating system level functions.

### Constructor

### Functions
This object does not contain specific functions.

### Methods
[`os.clock()`](#global-objects_os-method_clock)  
[`os.date()`](#global-objects_os-method_date)  
[`os.difftime()`](#global-objects_os-method_difftime)  
[`os.execute()`](#global-objects_os-method_execute)  
[`os.exit()`](#global-objects_os-method_exit)  
[`os.getenv()`](#global-objects_os-method_getenv)  
[`os.remove()`](#global-objects_os-method_remove)  
[`os.rename()`](#global-objects_os-method_rename)  
[`os.setlocale()`](#global-objects_os-method_setlocale)  
[`os.time()`](#global-objects_os-method_time)  
[`os.tmpname()`](#global-objects_os-method_tmpname)  

### Example
This section provides examples of common os operations in Lua.


**[⬆ back to top](#table-of-contents)**


## <a name="global-objects_io">Input and Output Facilities</a>  
`io` is a built in object that helps manipulating files.

### Constructor

### Functions
This object does not contain specific functions.

### Methods

[`io.close()`](#global-objects_io-method_close)  
[`io.flush()`](#global-objects_io-method_flush)  
[`io.input()`](#global-objects_io-method_input)  
[`io.lines()`](#global-objects_io-method_lines)  
[`io.open()`](#global-objects_io-method_open)  
[`io.output()`](#global-objects_io-method_output)  
[`io.popen()`](#global-objects_io-method_popen)  
[`io.read()`](#global-objects_io-method_read)  
[`io.stderr()`](#global-objects_io-method_stderr)  
[`io.stdin()`](#global-objects_io-method_stdin)  
[`io.stdout()`](#global-objects_io-method_stdout)  
[`io.tmpfile()`](#global-objects_io-method_tmpfile)  
[`io.type()`](#global-objects_io-method_type)  
[`io.write()`](#global-objects_io-method_write)  

### Example
This section provides examples of common os operations in Lua.


**[⬆ back to top](#table-of-contents)**


## <a name="global-objects_utf-8">UTF-8</a>  
`utf8` is a built in object that provides basic support for UTF-8 encoding.

This library does not provide any support for Unicode other than the handling of the encoding.

### Static properties
[`utf8.charpattern`](#global-objects_utf8-static-properties_charpattern)  

### Methods

[`utf8.char`](#global-objects_utf8-method_char)  
[`utf8.codepoint`](#global-objects_utf8-method_codepoint)  
[`utf8.codes`](#global-objects_utf8-method_codes)  
[`utf8.len`](#global-objects_utf8-method_len)  
[`utf8.offset`](#global-objects_utf8-method_offset)  

### Example
This section provides examples of common os operations in Lua.


**[⬆ back to top](#table-of-contents)**


## <a name="global-objects_debug">Debug</a>  
`debug` is a built in object that provides support for debuging.

### Constructor

### Methods

[`debug.debug()`](#global-objects_debug-method_debug)  
[`debug.gethook()`](#global-objects_debug-method_gethook)  
[`debug.getinfo()`](#global-objects_debug-method_getinfo)  
[`debug.getlocal()`](#global-objects_debug-method_getlocal)  
[`debug.getmetatable()`](#global-objects_debug-method_getmetatable)  
[`debug.getregistry()`](#global-objects_debug-method_getregistry)  
[`debug.getupvalue()`](#global-objects_debug-method_getupvalue)  
[`debug.getuservalue()`](#global-objects_debug-method_getuservalue)  
[`debug.sethook()`](#global-objects_debug-method_sethook)  
[`debug.setlocal()`](#global-objects_debug-method_setlocal)  
[`debug.setmetatable()`](#global-objects_debug-method_setmetable)  
[`debug.setupvalue()`](#global-objects_debug-method_setupvalue)  
[`debug.setuservalue()`](#global-objects_debug-method_setuservalue)  
[`debug.traceback()`](#global-objects_debug-method_traceback)  
[`debug.upvalueid()`](#global-objects_debug-method_upvalueid)  
[`debug.upvaluejoin()`](#global-objects_debug-method_upvaluejoin)  

### Example
This section provides examples of common os operations in Lua.


**[⬆ back to top](#table-of-contents)**


## <a name="global-objects_modules">Modules</a>  
`debug` is a built in object that provides support for debuging.

### Static properties

[`package.config`](#global-objects_module-static-properties_config)  
[`package.cpath`](#global-objects_module-static-properties_cpath)  
[`package.loaded`](#global-objects_module-static-properties_loaded)  
[`package.path`](#global-objects_module-static-properties_path)  
[`package.preload`](#global-objects_module-static-properties_preload)  
[`package.searchers`](#global-objects_module-static-properties_searchers)  

### Functions
[`require()`](#global-objects_module-functions_require)  

### Methods

[`package.loadlib()`](#global-objects_module-method_loadlib)  
[`package.searchpath()`](#global-objects_module-method_searchpath)  



**[⬆ back to top](#table-of-contents)**

=============================================================


<details>





















































































xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
# Lua Documentation - Unofficial  🌙 
* Note: This is Work in progress

# [Lua](https://lua.org)

## What is Lua?
[Lua](https://www.lua.org/about.html) is a powerful, efficient, lightweight, embeddable scripting language. It supports procedural programming, object-oriented programming, functional programming, data-driven programming, and data description.

Lua combines simple procedural syntax with powerful data description constructs based on associative arrays and extensible semantics.
Lua is dynamically typed, runs by interpreting bytecode with a register-based virtual machine, and has automatic memory management with incremental garbage collection, making it ideal for configuration, scripting, and rapid prototyping.



## Who is Lua for?

Like with any language, choose the right tool for the job. 

Lua is rarerly used on its own, instead its usually embedded in other programs. 

Notable mentions: Roblox, Adobe Photoshop Lightroom, Angry Birds, Cheat Engine, and Garry's Mod.


Its very popular in the gaming industry but also its been used in network and system programs. 



## History of Lua

Lua was desinged by a team of of three Brazililian scientist, Roberto Ierusalimschy, Luiz Henrique de Figueiredo, and Waldemar Celes.

Brazil had a very strict import policy from 1984 untill 1992, which also included hardware. Due to the hardware limitations in Brazil, the three scientist developed the scripting language called Lua.

The first release was in 1993.

The origin of the name  and name comes from the word `luna` which is Brazilian way of saying `moon`.

Lua was slightly different and incomprated the data-description suntax of SOL, and `SOL` in Portugese means `Sun` and `Lua` meaning `Moon`.

Lua was born.


# Getting Started

Downloading Lua

# Discord Server

Join Lua Community server on discord! https://discord.gg/nNu6FeHC





 

 
# <a name="doc_statements_and_declarations">Statements & declarations<a>

## Declaration


 




## [Functions](#)
### [Select](#doc_select)
 

## [Expressions]




## [Statements]
### [local]()
### [do]()
### [else]()
### [elseif]()
### [function]()
### [end]()
### [in]()
### [repeat]()
### [then]()
### [until]()
### [true]()
### [false]()
### [return]()
### [nil]()




  

# <a name="doc_operators">Operators</a>


 

## Logical Operators

All logical operators consider `false` and `nil` nil as false, and anything else as true.

<table class="fullwidth-table">
  <caption>
    Logical operators
  </caption>
  
  <thead>
    <tr>
      <th scope="col">Operator</th>
      <th scope="col">Usage</th>
      <th scope="col">Description</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        <a href="Reference/Operators/Logical_AND"
          >Logical AND</a
        >
        (<code>and</code>)
      </td>
      <td><code>expr1 &#x26;&#x26; expr2</code></td>
      <td>
        Returns <code>expr1</code> if it can be converted to <code>false</code>;
        otherwise, returns <code>expr2</code>. Thus, when used with Boolean
        values, <code>&#x26;&#x26;</code> returns <code>true</code> if both
        operands are true; otherwise, returns <code>false</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a href="Reference/Operators/Logical_OR"
          >Logical OR </a
        >(<code>or</code>)
      </td>
      <td><code>expr1 || expr2</code></td>
      <td>
        Returns <code>expr1</code> if it can be converted to <code>true</code>;
        otherwise, returns <code>expr2</code>. Thus, when used with Boolean
        values, <code>||</code> returns <code>true</code> if either operand is
        true; if both are false, returns <code>false</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a href="Reference/Operators/Logical_NOT">Logical NOT </a>(<code>!</code>)
      </td>
      <td><code>not</code></td>
      <td>
        Returns <code>false</code> if its single operand that can be converted
        to <code>true</code>; otherwise, returns <code>true</code>.
      </td>
    </tr>
  </tbody>
</table>

 
## Relational Operators

Relational Operators always resolve in `true` or `false`.

<table class="standard-table">
<caption>
  Relational Operators
</caption>

<thead>
<tr>
  <th scope="col">Operator</th>
  <th scope="col">Description</th>
  <th scope="col">Examples returning true</th>
</tr>
</thead>

<tbody>
  <tr>
    <td>
      <a href="Reference/Operators#equality"
        >Equal</a
      >
      (<code>==</code>)
    </td>
    <td>Returns <code>true</code> if the operands are equal.</td>
    <td>
      <code>3 == var1</code>
      <p><code>"3" == var1</code></p>
      <code>3 == '3'</code>
    </td>
  </tr>
  <tr>
    <td>
      <a href="Reference/Operators#inequality"
        >Not equal</a
      >
      (<code>~=</code>)
    </td>
    <td>Returns <code>true</code> if the operands are not equal.</td>
    <td>
      <code>var1 != 4<br />var2 != "3"</code>
    </td>
  </tr>
    <td>
      <a
        href="Reference/Operators#greater_than_operator"
        >Greater than</a
      >
      (<code>></code>)
    </td>
    <td>
      Returns <code>true</code> if the left operand is greater than the right
      operand.
    </td>
    <td>
      <code>var2 > var1<br />"12" > 2</code>
    </td>
  </tr>
  <tr>
    <td>
      <a
        href="Reference/Operators#greater_than_or_equal_operator"
        >Greater than or equal</a
      >
      (<code>>=</code>)
    </td>
    <td>
      Returns <code>true</code> if the left operand is greater than or equal
      to the right operand.
    </td>
    <td>
      <code>var2 >= var1<br />var1 >= 3</code>
    </td>
  </tr>
  <tr>
    <td>
      <a
        href="Reference/Operators#less_than_operator"
        >Less than</a
      >
      (<code>&#x3C;</code>)
    </td>
    <td>
      Returns <code>true</code> if the left operand is less than the right
      operand.
    </td>
    <td>
      <code>var1 &#x3C; var2<br />"2" &#x3C; 12</code>
    </td>
  </tr>
  <tr>
    <td>
      <a
        href="Reference/Operators#less_than_or_equal_operator"
        >Less than or equal</a
      >
      (<code>&#x3C;=</code>)
    </td>
    <td>
      Returns <code>true</code> if the left operand is less than or equal to
      the right operand.
    </td>
    <td>
      <code>var1 &#x3C;= var2<br />var2 &#x3C;= 5</code>
    </td>
  </tr>
</tbody>
</table>



 
 
 





## <a name="refference_table">Tables</a>

<details>
Editor notes: Show how to loop over  the tables, how to loop over them. Instead of showing just methods, include how to use a table somewhere.
</details>

A table allows storing a collection of data under a single variable. Lua has one mechanism to represent data structure, and does not have Classes, Arrays or Objects. Every data structure is represented by tables.

Unlike in other programming languages where's the index starts from `0`, Lua starts counting from `1`. Most libraries will start with the index of `1` therefore its a good practice to follow the convetion.


### Common Usages

Tables can represent classes, arrays and objects.



#### Reasemblance of an Array
```lua 
local array = { "Dog", "Cat", "Hippo" }
``` 

#### Reasemblance of an Object
```lua
local object = { 
    name = "John", 
    age = 25, 
    isMarried: false
}
```

```
Note: Printing a table will return table's hash such as `table: 0x5566951939f0`
```

To get a table values you need to loop over them. Check out `pairs` and `ipairs.

====

## <a name="table-insert">table.insert()</a>
The `table.insert()` method adds one element to the end of the table.

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


**[⬆ back to top](#table-of-contents)**




# <a name="table-remove">table.remove()</a>
The `table.remove()` method removes one element from the table and shifts it.


## Syntax
```Lua
table.remove(tbl, index)
```

## Parameter
`tbl`
The table where the item should be removed from.

`index`
The index (position) of the current element in the array.

## Examples
 Removing "Rice" from groceries table.

```Lua
groceries = { "Bread", "Rice", "Peas" }
table.remove(groceries, 2)

-- Output: groceries = { "Bread", "Peas" }
```

**[⬆ back to top](#table-of-contents)**




## <a name="table-concat">table.concat()</a>
The `table.concat()` function is used to concatinate table values into a string.

### Syntax
```Lua
table.concat(tbl, seperator)
```

### Parameter
`tbl`
The table to be concatinated.

`seperator (optional)`
Used as a separator between values.

### Examples

#### Only table provided to the function.
```Lua
local tbl = {"The","fox","jumps","over","the","lazy","dog",}

print(table.concat(tbl)) 

-- Output: Thefoxjumpsoverthelazydog
```

```Lua
local tab = { 1, 2, 3, 4 }

print(table.concat(tab)) 

-- Output: 1234
```

#### Table provided with the second parameter

```Lua
local tbl = {"The","fox","jumps","over","the","lazy","dog",}

print(table.concat(tbl," ")) 

-- Output: The fox jumps over the lazy dog
```

```Lua
local tbl = { 1, 2, 3, 4 }

print(table.concat(tbl, "-")) 

-- Output: 1-2-3-4
```



## <a name="table-pack">table.pack()</a>
The `table.pack()` method is used to combine values into a newly created table.

### Syntax
```
table.pack(elements)
```

### Parameters
`elements`
The values to combine into a newly created table


### Examples

This will combine all values into a new table.
```Lua
productID =  234 
productName = "Dark Chocolate"
productIngredients = { "Cocoa Mass", "Cocoa Butter", "Vanilla", "Cocoa Solids: 70% min" }

darkChocolateTable = table.pack(productID, productName, productIngredients)
 
 print(darkChocolateTable)

 -- Output: table: 0x564c9ac0a210
 ```
 
 Accessing the product igredients and getting the second one.

 ```Lua
productID =  234 
productName = "Dark Chocolate"
productIngredients = { "Cocoa Mass", "Cocoa Butter", "Vanilla", "Cocoa Solids: 70% min" }

darkChocolateTable = table.pack(productID, productName, productIngredients)
 
print(darkChocolateTable[3][2])

-- Output: Cocoa Butter
 ```

**[⬆ back to top](#table-of-contents)**





## <a name="table-unpack">table.unpack()</a>

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

**[⬆ back to top](#table-of-contents)**





## <a name="table-sort">table.sort()</a>

The `table.sort()` sorts a table and returns its value sorted. If no value is provited, the sort function will default to alphabetical sorting.


### Syntax
```Lua
table.sort(tbl)

table.sort(tbl, value)
```

### Parameters



### Examples



**[⬆ back to top](#table-of-contents)**



----------------------------------

# Comments

## Single line comments

```Lua
-- 
```

## Multi-line comments

```Lua
--[[
    


--]]
```


# Semicolons
Lua doesn't require semicolons, but you're free to put them if you want.


----------------------------------

# Plugins

## Table 
table.clear()


## JSON
link to JSON decoder - http://dkolf.de/src/dkjson-Lua.fsl/home

















































































----------------------------------


# I'm looking for a
## Class
## Array


<details>
 





Moon theme, because Lua is Luna/Moon

https://www.tutorialspoint.com/execute_Lua_online.php
https://www.typingclub.com/
https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript
https://Luarocks.org/
https://stackoverflow.com/questions/4880368/how-to-delete-all-elements-in-a-Lua-table


<!-- http://Lua-users.org/wiki/TablesTutorial -->
<!-- https://developer.roblox.com/en-us/articles/Metatables -->
<!-- https://www.Lua.org/pil/19.2.html -->

 
 
 
21 reserved words
1 mechanism to represent data struture

Lua is a dynamic language, not type anotations needed




If you're comning from a language such as JavaScript or PHP, some differences are worth noting
```
Count starts from 1 not 0
0 does not mean false
1 does not mean true
```

  

# Variables

In Lua to declaare a variable you simply write out the name

`variable`

if you want to you can also

`variable <const>`
# Declearing Variables

groceries = {}
groceries <const> = {}


 
Asigning Values
Reading values
Good/Bad pratcie
Creating your own functions 


 
 


# Data Types
nil
boolean
number
string
function
userdata
thread
table


 


</details>

</details>