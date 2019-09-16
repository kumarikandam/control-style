# @lemuria/control-style

[![npm version](https://badge.fury.io/js/%40lemuria%2Fcontrol-style.svg)](https://npmjs.org/package/@lemuria/control-style)

`@lemuria/control-style` is Extracts CSS Properties From Component Properties Map And Returns The Composed Style.

```sh
yarn add @lemuria/control-style
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`controlStyle(style: string|undefined, props: Object<string, ?>)`](#controlstylestyle-stringundefinedprops-objectstring--void)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## API

The package is available by importing its default function:

```js
import controlStyle from '@lemuria/control-style'
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## <code><ins>controlStyle</ins>(</code><sub><br/>&nbsp;&nbsp;`style: string|undefined,`<br/>&nbsp;&nbsp;`props: Object<string, ?>,`<br/></sub><code>): <i>void</i></code>

Extracts CSS Properties From Component Properties Map And Returns The Composed Style. Returns the joined style as the string, or a hash with the style rules if no style was given. Deletes CSS properties from the passed `props` object.

```js
import controlStyle from '@lemuria/control-style'

const Component = ({ style, ...props }) => {
  return controlStyle(style, props)
}

// return as string
const res = Component({
  style: 'padding: 10px',
  margin: '1rem',
  'border-radius': '5px'
})
console.log(res)

// return as object
const res1 = Component({
  margin: '1rem',
  'border-radius': '5px',
})
console.log(res1)
```
```
margin:1rem;border-radius:5px;padding: 10px
{ margin: '1rem', 'border-radius': '5px' }
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## Copyright

(c) [Art Deco][1] 2019

[1]: https://artd.eco

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>