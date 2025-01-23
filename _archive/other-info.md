### In Progress
# Lua Documentation - Unofficial  🌙 


# Lua 
What is Lua?

## Who is Lua for?

Like with any language, choose the right tool for the job. 

Lua is rarery use on its own, isntead its often embeded in other programs. 

Notable mentioens, Roblox, Adobe Photoshop Lightroom, Angry Birds, Cheat Engine, 


Its very popular in the gaming industry but also its been used in network and system programs. 

Modding
Feature Enhancement notable games Minecraft

Compact
Fast in execution
Highly extendable
Easy to learn
Free to use

## History of Luna

Lua was desinged by a team of of three Brazililian scientist, Roberto Ierusalimschy, Luiz Henrique de Figueiredo, and Waldemar Celes.

Brazil had a very stric import policy from 1984 untill 1992, which also included hardware.  Due to the hardware limitations in Brazil, the three scientist developed the scripting language called Lua.

The first release was in 1993.

The origin of the name  and name comes from the word `luna` which is Brazilian way of saying `moon`.

Lua was slightly different and incomprated the data-description suntax of SOL, and `SOL` in Portugese means `Sun` and `Lua` meaning `Moon`.

Lua was born.

# Discord Server

Join Lua Community server on discord! https://discord.gg/nNu6FeHC


===========================================================================


# Table of Contents
## [Tables AKA Array/Object](#table)
## [Math](#math)
## [String](#string)

## [Select](#selet)


===========================================================================


## <a name="table">Tables</a> AKA Array/Object
The 'table' allows storing a collection of data under a single variable. Lua has one mechanism to represent data structure, and does not contain `Class`, `Array` and `Object`. Every data structure is reprresented by `table`.

The index starts at 1 instead of 0.

Table is an associative array

looping over tables `pairs` and `ipairs`


```
Note: When trying to print a table it will return you a table hash instead of the values such as: 0xd7b140
Note: The `table` object in other langauges woud be reffered as array/object
```

### Constructor 
`{}`
Creates a new `table`.

### Properties

### Methods

[`table.insert()`](#table-insert) 
Adds one element to the table.

[`table.remove()`](#table-remove) 
Removes one element from the table.

[`table.pack()`](#table-pack) 

[`table.unpack()`](#table-unpack) 
Unpacks a table into values.

[`table.concat()`](#table-concat) 
Returns a combined string from a table.

[`table.sort()`](#table-sort) 
Sorts the values in a table.



===========================================================================



# <a name="table-insert">Table.insert()</a>
The `table.insert()` method adds one element to the end of the table.

## Syntax
```lua
table.insert(yourTable, value)
```

## Parameter
`yourTable`
The table where the item should be removed from.

`value`
The element to add to the end of the table.


## Examples

### Adding elements to table

```lua

groceries = { "Bread", "Rice" }
table.insert(groceries, "Potatoes")

-- Output:  groceries = {"Bread", "Rice", "Potatoes}

```

**[⬆ back to top](#table-of-contents)**




# <a name="table-remove">Table.remove()</a>
The `table.remove()` method removes one element from the table and shifts it.


## Syntax
```lua
table.remove(yourTable, index)
```

## Parameter
`yourTable`
The table where the item should be removed from.

`index`
The index (position) of the current element in the array.

## Examples
 Removing "Bread" from groceries table.

```lua
groceries = { "Bread", "Rice", "Peas" }
table.remove(groceries, 2)

-- Output: groceries = { "Bread", "Peas" }
```

**[⬆ back to top](#table-of-contents)**




# <a name="table-concat">Table.concat()</a>
The `table.concat()` function is used to concatinate/combine table values.

## Syntax
```lua
table.concat(yourTable, string)
```

## Parameter
`yourTable`
The table to be concatinated.

`string (optional)`
Used as a separator between values.

## Examples

### Only table provided to the function.
```lua
local yourTable = {"My", "little", "ponny", "barked", "today.", "Woof!"}

print(table.concat(yourTable)) 

-- Output: Mylittleponnybarkedtoday.Woof!
```

```lua
local tab = { 1, 2, 3, 4 }

print(table.concat(tab)) 

-- Output: 1234
```

### Table provided with the second parameter

```lua
local yourTable = {"My", "little", "ponny", "barked", "today.", "Woof!"}

print(table.concat(yourTable, " ")) 

-- Output: My little ponny barked today. Woof!
```

```lua
local yourTable = { 1, 2, 3, 4 }

print(table.concat(yourTable, "-")) 

-- Output: 1-2-3-4
```




# <a name="table-pack">Table.pack()</a>
The `table.pack()` method is used to combine values into a newly created table.

## Syntax
```
table.pack(elements)
```

## Parameters
`elements`
The values to combine into a newly created table


## Examples

This will combine all values into a new table.
```lua
productID =  234 
productName = "Dark Chocolate"
productIngredients = { "Cocoa Mass", "Cocoa Butter", "Vanilla", "Cocoa Solids: 70% min" }

darkChocolateTable = table.pack(productID, productName, productIngredients)
 
 print(darkChocolateTable)

 -- Output: table: 0x564c9ac0a210
 ```
 
 Accessing the product igredients and getting the second one.

 ```lua
productID =  234 
productName = "Dark Chocolate"
productIngredients = { "Cocoa Mass", "Cocoa Butter", "Vanilla", "Cocoa Solids: 70% min" }

darkChocolateTable = table.pack(productID, productName, productIngredients)
 
print(darkChocolateTable[3][2])

-- Output: Cocoa Butter
 ```

**[⬆ back to top](#table-of-contents)**





# <a name="table-unpack">Table.unpack()</a>

The `table.unpack()` returns all values from a table.

## Syntax

```lua
table.unpack(yourTable)
```

## Parameters
`yourTable`
The table to be unpacked.

## Examples

Unpacking a table
```lua
groceries = { "Bread", "Rice", "Peas" }
print(table.unpack(groceries))

-- Output: Bread Rice Peas
```

Unpacking a table with tables inside
```lua
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





# <a name="table-sort">Table.sort()</a>

The `table.sort()` sorts a table and returns its value sorted. If no value is provited, the sort function will default to alphabetical sorting.


## Syntax
```lua
table.sort(yourTable)

table.sort(yourTable, value)
```

## Parameters



## Examples



**[⬆ back to top](#table-of-contents)**


===========================================================================


# <a name="string">String</a>

## Methods

`String.upper()`
`String.lower()`
`String.format()`
`String.gsub()`
`String.byte()`
`String.char()`



===========================================================================


# <a name="math">Math</a>

## Methods
`Math.modf()`
`Math.floor()`
`Math.max()`
`Math.celi()`






----------------------------------

# Comments

## Single line comments

```lua
-- 
```

## Multi-line comments

```lua
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
link to JSON decoder - http://dkolf.de/src/dkjson-lua.fsl/home


----------------------------------


# I'm looking for a
## Class
## Array


<details>


<summary>.</summary>


# Template


# Name
Description what it does

## Syntax
## Parameters
## Examples


notes
.
.
.
.
.
.
.












@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


# Lua Guidelines
It seems like general Lua programmers code seems to follow PHP style


## Variables
## Operators and comparison
## 



------------------------------------

# Variables

groceries
groceries <const>



Moon theme, because Lua is Luna/Moon

https://www.tutorialspoint.com/execute_lua_online.php
https://www.typingclub.com/

https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/JavaScript

@@@@

Lua com

21 reserved words
1 mechanism to represent data struture

Lua is a dynamic language, not type anotations needed


https://luarocks.org/


If you're comning from a language such as JavaScript or PHP, some differences are worth noting
```
Count starts from 1 not 0
0 does not mean false
1 does not mean true
```

@@@@


coroutine.create() - suspend and resume code
coroutine.yeld() - puse
courutine.resume() - continue executoin

# Reserved words

and
break
do
else
elseif
end
false
for ... do
function
if ... then
in
local
nil
not
or
repeat
return
then
true
until
while .... do

# Other
## const
 
## pairs
## ipairs
## next
## rawset
## count















<!-- Docs to look at: React, Laravel, JS MDN -->

Use real life examples, not some foo bar, a, e, i... 



# Comprehensive Guide for Lua by examples 


# Tables AKA Objects/Arrays

You can follow along and compile lua online without downloading it: https://replit.com/languages/lua

Official Download site for Lua:

## <a name='TOC'>Table of Contents</a>

  1. [Types](#types)

   ```lua
    -- bad
    woof

    -- good
     miao
    ```


    **[[⬆]](#TOC)**

    https://stackoverflow.com/questions/41942289/display-contents-of-tables-in-lua

## <a name='types'>Types</a>
JS Example

<const>

# Variables

In Lua to declaare a variable you simply write out the name

`variable`

if you want to you can also

`variable <const>`

# Scope

# Functions

# Tables aka Objects & Arrays

Lua doesn't have objects nor arrays - it has just tables. s
Tables in luas is Arr
Objects in Lua are called Tables. 
Objects in Lua are called Arrays.They serve as an array and object.

To insert into the database, you need to `table.insert(table, value)`

To unpack values from a table, you need to unpack(data)

If you print a table, you will see table hash therefore you need to use special pairs and ipairs to show the content


<!-- object.getHash() -->
<!-- object.print() -->
<!-- object.count() -->
<!-- object.insertTo(object, data) -->
<!-- object.removeFrom(data, index) -->
<!-- object.unpack(data) -->
<!-- object.returnHashes() -->
<!-- object.create -->

<!-- Lua utility -->

To access properties of tables, you need to use special functions. pairs and ipairs.

Here are a few ways to work with them.

JavaScript Example
```js


```

Lua Example
```

```


LUA Example
```
local people = {
    test = {
    ['99'] = {
         name = "Fred",
         address = "16 Long Street",
         phone = "123456"
     },
     ['8989'] = {
         name = "Wilma",
         address = "16 Long Street",
         phone = "123456"
        }
    }
}
```
  
--   for index, data in pairs(people.test) do
--       print(index)
  
--       -- for key, value in pairs(data) do
--       --     print('\t', key, value)
--       -- end
--   end
  
  -- hash breaks this 





lunavel.com

Lunavel, the unofficial documentation you were looking for Luna!
Get started


Asigning Values

Reading values

Good/Bad pratcie

Creating your own functions 







Built-In Globals
Lua Globals
Roblox Globals

Lua Libraries
coroutine
debug
math
os
string
table
utf8
bit32


# Working with JSON



# Have plugins
Copy and paste it in your file app/illuminate

- JSON - ability to decode JSON into Lua
- Table [ print table Content], not just hash









# Getting Started

## Meet Lua
Lua is a scripting language ...


### Why Lua?

What is Luna

#### Flexibile

### Starter Kits
<!-- Table addons plugin -->
<!-- JSON plugin -->


# Data Types
nil
boolean
number
string
function
userdata
thread
table

# Declearing Variables

groceries = {}
groceries <const> = {}


https://stackoverflow.com/questions/4880368/how-to-delete-all-elements-in-a-lua-table
# Statements and declerations





## Classes

## JSON
<!-- Lua doens't provide support for JSON, however there' is a package you can install to get support for it -->

<!-- Accessing values in tables -->


# Method explore - example
Short info 

<!-- list all methods  -->


# Property definition - Example Framework 
Explanation about the feature
<!-- Demo -->

## Syntax
<!-- code -->

## Description


## Examples







<!-- http://lua-users.org/wiki/TablesTutorial -->
<!-- https://developer.roblox.com/en-us/articles/Metatables -->
<!-- https://www.lua.org/pil/19.2.html -->


</details>

