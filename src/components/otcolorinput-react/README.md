# OT Color Input

React component prepared for inputting OT outfit color for web applications.

# Demo

https://egzot.github.io/otcolorinput-react/

# Example usage

https://github.com/EgzoT/otcolorinput-react/tree/example

# Usage

Paste component folder to project and add:

```js
import OTColorInput from './PATH/OTColorInput';
```

## JSX Component:

```jsx
<OTColorInput
    value={ 55 }                    //Default: 0
    onChange={ this.onChangeValue } //Default: null
/>
```

# Options

```jsx
<OTColorInput
    value={ 55 }                    //Default: 0
    onChange={ this.onChangeValue } //Default: null
    style={{ margin: 'auto' }}      //Default: {}
    fullStyle={ style }             //Default: {}
/>
```

# Add default starting color by id:

```jsx
value={ 55 } //Default: 0
```

# Getting value from input component:

Create function to get changing value:

```jsx
onChangeValue = (value, hexColor) => {
    this.setState({ colorId: value });
}
```

Set to component by:

```jsx
onChange={ this.onChangeValue } //Default: null
```

# Full styling

Style template:

```jsx
let style = {
    container: {},
    button: {
        outer: {},
        inner: {}
    },
    window: {
        container: {},
        palette: {
            container: {},
            row: {},
            column: {},
            button: {
                outer: {},
                inner: {}
            }
        }
    },
    windowMobile: {
        container: {
            outer: {},
            inner: {}
        },
        palette: {
            container: {},
            row: {},
            column: {},
            button: {
                outer: {},
                inner: {}
            }
        }
    }
}
```

Example (jsx styling):

```jsx
let style = {
    container: { width: 50, height: 25 },
    button: {
        outer: { width: 60, height: 60, backgroundColor: '#000000' },
        inner: { width: '80%', height: '80%' }
    }
}
```

Put to component:

```jsx
fullStyle={ style } //Default: {}
```
