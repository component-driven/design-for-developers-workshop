# Box model

By default in the CSS box model, the width and height you assign to an element is applied only to the element's content box. If the element has any border or padding, this is then added to the width and height to arrive at the size of the box that's rendered on the screen. This means that when you set width and height, you have to adjust the value you give to allow for any border or padding that may be added.

Most of the time, though, that's not how we think about the layout and space. Imagine you would have to measure a window in your house _excluding_ the frame in order to give the builders a proper size of the opening for the whole window.

To make it easier to reason about the sizes of the object, we would like to opt in for a more human-friendly box model.

### Fun fact

The alternative box model has been used by default in IE6. After all, not everything was bad with this browser!


### Task

Normalize the box model so that the layout looks correct


### Tips

Check out [`box-sizing` property](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
