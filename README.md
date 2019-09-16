# @lemuria/control-style

[![npm version](https://badge.fury.io/js/@lemuria/control-style.svg)](https://npmjs.org/package/@lemuria/control-style)

`@lemuria/control-style` is Extracts CSS Properties From Component Properties Map And Returns The Composed Style.

```sh
yarn add @lemuria/control-style
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`controlStyle(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
  * [`_@lemuria/control-style.Config`](#type-_@lemuria/control-styleconfig)
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

## <code><ins>controlStyle</ins>(</code><sub><br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/></sub><code>): <i>void</i></code>

Call this function to get the result you want.

<strong><a name="type-_@lemuria/control-styleconfig">`_@lemuria/control-style.Config`</a></strong>: Options for the program.

|   Name    |       Type       |    Description    | Default |
| --------- | ---------------- | ----------------- | ------- |
| shouldRun | <em>boolean</em> | A boolean option. | `true`  |
| __text*__ | <em>string</em>  | A text to return. | -       |

```js
/* alanode example/ */
import controlStyle from '@lemuria/control-style'

(async () => {
  const res = await controlStyle({
    text: 'example',
  })
  console.log(res)
})()
```
```
example
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