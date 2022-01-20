# `babel-plugin-fbt-import`

A babel plugin to automatically import `fbt`.

## Installation

```
$ npm install babel-plugin-fbt-import --save-dev
```

## Configuration

Add "babel-plugin-fbt-import" to the plugins list. It's **important** that is added before `babel-plugin-fbt` and `babel-plugin-fbt-runtime`, otherwise the latter will throw an error.

```json
{
  "plugins": [
    "babel-plugin-fbt-import",
    "babel-plugin-fbt",
    "babel-plugin-fbt-runtime"
  ]
}
```

### Example

Input

```js
function App() {
  return (
    <div>
      <h1>
        <fbt desc="Greeting">Hello</fbt>
      </h1>
    </div>
  )
}

export default App
```

Output

```js
import { fbt } from 'fbt'

function App() {
  return (
    <div>
      <h1>
        {fbt._('Hello', null, {
          hk: '26EFWw',
        })}
      </h1>
    </div>
  )
}

export default App
```

## License

[MIT](/license)
