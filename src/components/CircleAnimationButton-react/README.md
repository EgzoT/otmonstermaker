# Circle Animation Button

React animated button component.

# Demo

https://egzot.github.io/CircleAnimationButton-react/

# Example usage

https://github.com/EgzoT/CircleAnimationButton-react/tree/example

# Usage

Paste component folder to project and add:

```jsx
import CircleAnimationButton from './PATH/CircleAnimationButton';
```

or

```jsx
import { CircleAnimationButtonDanger, CircleAnimationButtonSuccess, CircleAnimationButtonWarning, CircleAnimationButtonPrimary, CircleAnimationButtonDark, CircleAnimationButtonLight, CircleAnimationButtonInfo } from './PATH/CircleAnimationButtons';
```

or

```jsx
import CircleAnimationButtonTemplate from './PATH/CircleAnimationButtonTemplate';
```

# Additional for use Font Awesome icons

```jsx
import IconFA from './PATH/CircleAnimationButton-react/IconFA';
```

## And import icons

```jsx
import { faSyncAlt, faStop, faCheck, faPause } from "@fortawesome/free-solid-svg-icons";
```

# JSX Component:

```jsx
<CircleAnimationButton
    color={ "deepSea" }
    icon={ <IconFA icon={ faSyncAlt }/> }
    text={ "Refresh" }
    onClick={ this.refresh }
/>
```

# Options

```jsx
<CircleAnimationButton
    height={ 40 }                               // 35 | Set height
    width={ 120 }                               // 105 | Set width
    autoWidth={ true }                          // false | Set auto width, this action prevent animation (css don't work with auto size), recommended when use alwaysVisibleText={ true }
    borderColor={ "#000000" }                   // "#787875" | Border color
    containerColor={ "#424242" }                // "#424241" | Container background color
    animationTime={ 2 }                         // 1 | Animation speed (seconds)
    linearGradient={ "0deg, #FF0000, #FF00FF" } // "0deg, #424241, #333332" | Icon background (circle) linear gradient color
    iconColor={ "#FF0000" }                     // "#FFFFFF" | Icon color
    textColor={ "#FF0000" }                     // "#FFFFFF" | Text color
    direction={ "left" }                        // "right" | Button text expanded direction
    alwaysVisibleText={ true }                  // false | Expand the button
    style={{ margin: 'auto' }}                  // {} | Set style for container only (fast styling)
    fullStyle={ style }                         // {} | Set full button styling (more info in Example (jsx styling))
    text={ "Test" }                             // "" | Button text
    icon={ <IconFA icon={ faSyncAlt }/> }       // null | Icon component <IconFA/> or own component
    onClick={ () => { console.log('Click') } }  // null | onClick function
/>
```

Additional styles for CircleAnimationButton (self invented) colors names

```jsx
<CircleAnimationButton
    color={ "steelPurple" }                     // skyBlue | Color style
/>
```

(self invented) colors names list

```
skyBlue
gray
coralBlue
deepSea
steelPurple
springForest
```

How to add custom color

```jsx
<CircleAnimationButtonTemplate
    borderColor={ "#2D6B30" }
    containerColor={ "#43A047" }
    gradientColor={ "#58D15E" }
    textColor={ "#000000" }
/>
```

Example load font awesome icon

```jsx
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
```

# Styling

```jsx
const styleTemplate = {
    container: {},
    containerHover: {},
    circleContainer: {},
    textContainer: {},
    textContainerHover: {},
    text: {},
    textHover: {}
}
```

Example (jsx styling):

```jsx
let fullStyle = {
    container: {
        backgroundColor: "#000000"
    },
    containerHover: {
        backgroundColor: "#FFFFFF"
    },
    text: {
        fontSize: 15
    },
    textHover: {
        fontSize: 5
    }
}
```

Put to component:

```jsx
fullStyle={ style } //Default: {}
```
