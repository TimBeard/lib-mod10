# lib-mod10
A node module for checking numbers against luhn algorithm

## Installation
```
yarn add lib-mod10
```

## Usage
The library exposes two methods:
- compute() => Compute checksum for input number
- check() => Checks input number against luhn algorithm

### Compute
```javascript
// Import lib-mod10
import Mod10 from 'lib-mod10'

// Compute checksum for a random number
const cheksum = Mod10.compute('1234567890') // Should output 3
```

### Check
```javascript
// Import lib-mod10
import Mod10 from 'lib-mod10'

// Check random number against luhn algorithm
const isValid = Mod10.check('12345678903') // Should output true
```

## Demo
You can try this module [on codepen](https://codepen.io/TimBeard/pen/WqNPQQ)
