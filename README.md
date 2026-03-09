## 1. What is the difference between var, let, and const?

- **var**: Function scoped and can be redeclared and updated.
- **let**: Block scoped and can be updated but not redeclared in the same scope.
- **const**: Block scoped and cannot be updated or redeclared after declaration.

Example:
```javascript
var a = 10;
let b = 20;
const c = 30;

b = 25; // allowed
c = 35; // error
```

---

## 2. What is the spread operator (...)?

The **spread operator** is used to expand elements of an array or object into individual elements.

Example:

```javascript
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);
```

Output:
```
[1, 2, 3, 4, 5]
```

---

## 3. What is the difference between map(), filter(), and forEach()?

- **map()**: Creates a new array by applying a function to each element.
- **filter()**: Creates a new array with elements that pass a condition.
- **forEach()**: Executes a function for each element but does not return a new array.

Example:

```javascript
const numbers = [1, 2, 3, 4];

numbers.map(n => n * 2); // [2,4,6,8]

numbers.filter(n => n > 2); // [3,4]

numbers.forEach(n => console.log(n)); // 1 2 3 4
```

---

## 4. What is an arrow function?

An **arrow function** is a shorter syntax for writing functions in JavaScript introduced in ES6.

Example:

```javascript
const add = (a, b) => {
  return a + b;
};
```

Short form:

```javascript
const add = (a, b) => a + b;
```

---

## 5. What are template literals?

**Template literals** are used to create strings with embedded variables using backticks (` `).

Example:

```javascript
const name = "Misty";

console.log(`Hello ${name}`);
```

Output:

```
Hello Misty
```