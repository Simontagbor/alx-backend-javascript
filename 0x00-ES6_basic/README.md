# 0x00. ES6 Basics
` JavaScript ` ` ES6 `
## Introduction.
In This Project I learned about Javascript ES6 Features. 
This project introduced me to ES6's Aproach to handling *Statements* and *Declarations*, Usage of *Arrow Functions*, *Default* and *Rest* paramenters, and *iterables* and *iterators*.


## 0. Const or let?
In this project i simply used `const`, and `let` to instantiate variables intead of using `var`.

## 1. Block Scope
In this task i learned to use the concept of hoisting variables, i updated a js snippet to prevent the overwriting behaviour of variables inside the conditional block.

based on the snippet inside `1-block-scoped.js` the variables `task` and `task2` defined outside the conditional block should not be affected by the reassignment of the valuesinside the conditional block. 

```
bob@dylan:~$ npm run dev 1-main.js 
[ false, true ]
[ false, true ]
bob@dylan:~$

```
## 2. Arrow functions
I rewrote a standard function to make use of `EMACSScript 6` 's Arrow function

### Output
```
simon@tagbor:~$ cat 2-main.js
import getNeighborhoodsList from './2-arrow.js';

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);
simon@tagbor:~$
simon@tagbor:~$ npm run dev 2-main.js 
[ 'SOMA', 'Union Square', 'Noe Valley' ]
simon@tagbor:~$

```
## 3. Parameter defaults
in this task I optimsed the internals of a function using ES6's  default parameter features.

### Output
```
simon@tagbor:~$ cat 3-main.js
import getSumOfHoods from './3-default-parameter.js';

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));
simon@tagbor:~$
simon@tagbor:~$ npm run dev 3-main.js 
142
56
41
simon@tagbor:~$

```
## 4. Rest parameter syntax for functions
Used ES6's `rest parameter` syntax feature to optimise the  internals of a function.

## 5. The wonders of spread syntax
In this task I used the `spread` syntax in ES6 to perform concatenation of arrays.

## 6. Take advantage of template literals
In this task I rewrote a  function and updated the return statement to use template literals.

## 7. Object property value shorthand syntax

