# watchmydom

**A Javascript library to watch the DOM changes in a single callback**

# Demo

# Installation/Usage

1. Add the library script into your page

```javascript
<script src="watchmydom.min.js"></script>
```

2. Initialize `watchMyDom` object in your custom script. You can use a class name, id or a tagName.

```javascript
var watchIt = new watchMyDom("#div-id");
```

3. Use `watch()` method to start watching.

```javascript
watchIt.watch(function (result, info) {
	//Callback
});
```

3. Use `stop()` method to stop watching.

```javascript
watchIt.stop();
```

# Methods

| Methods | Usage                      |
| ------- | -------------------------- |
| watch() | Use this to start watching |
| stop()  | Use this to stop watching  |

# Callbacks

You can see the DOM updates/changes in the watch() calllback function.

| Parameters | Usage                 |
| ---------- | --------------------- |
| result     | Sorted observations   |
| info       | Complete observations |

# License

MIT

# Code

Saif
