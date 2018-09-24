#### Basic Button Usage:

```js
<div className="styleguidist__btns-wrap">
  <Button
    type="primary"
    onClick={() => { window.alert('Primary Button was Clicked'); }}
  >
    <span>Primary Button</span>
  </Button>
  <br />
  <Button
    type="secondary"
    onClick={() => { window.alert('Secondary Button was Clicked'); }}
  >
    <span>Secondary Button</span>
  </Button>
  <br />
  <Button
    isDisabled
    onClick={() => { window.alert('Nothing happens on Click'); }}
  >
    <span>Disabled Button</span>
  </Button>
</div>
```
