## API

The package is available by importing its default function:

```js
import controlStyle from '@lemuria/control-style'
```

%~%

```## controlStyle
[
  ["style", "string|undefined"],
  ["props", "Object<string, ?>"]
]
```

Extracts CSS Properties From Component Properties Map And Returns The Composed Style. Returns the joined style as the string, or a hash with the style rules if no style was given. Deletes CSS properties from the passed `props` object.

<!-- %TYPEDEF types/index.xml% -->

%EXAMPLE: example, ../src => @lemuria/control-style%
%FORK example%

%~%