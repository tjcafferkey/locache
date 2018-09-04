# locache
Simple utility function to get and set data in your localStorage, and sessionStorage 

## Install

```bash
npm install locache
```

## Usage for localStorage cache

```javascript
import { cache } from 'locache';
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

### Remove items in localStorage

```javascript
cache('profile').remove();
```

## Usage for sessionStorage cache

```javascript
import { sessionCache } from 'locache';
```

### Set (save) items in sessionStorage

```javascript
var tom = {
  name: 'Tom',
  age: '26',
  height: 'tall',
  weight: '74kg'
}

sessionCache('profile').set(tom);
```

### Get items from sessionStorage

```javascript
var profile = sessionCache('profile').get();
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

### Remove items in sessionStorage

```javascript
sessionCache('profile').remove();
```