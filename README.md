# locache
Simple utility function to get and set data in your localStorage

## Install

```bash
npm install locache
```

## Usage

```javascript
var cache = require('locache');
```

### Set (save) items in localStorage

```javascript
var tom = {
  name: 'Tom',
  age: '26',
  height: 'tall',
  weight: '74kg'
}

cache('profile').set(tom);
```

### Get items from localStorage

```javascript
var profile = cache('profile').get();
```

profile will now equal the following

```javascript
{
  name: 'Tom',
  age: '26',
  height: 'tall',
  weight: '74kg'
}
```