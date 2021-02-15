# Add Element

Add HTML elements to the DOM with JavaScript in a super easy way. No external depenedencies needed.

```javascript
const parent = document.querySelector('body')
const element = new AddElement({
      elementType: 'div',
      className: 'classname',
      content: 'Content',
      contentElement: 'p',
      parent: parent,
      id: 'uniqueId',
}).create()
```