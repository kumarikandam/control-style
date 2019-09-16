const cssProps = require('./css-props');

/**
 * Extracts CSS Properties From Component Properties Map And Returns The Composed Style. Returns the joined style as the string, or a hash with the style rules if no style was given. Deletes CSS properties from the `props` object.
 * @param {string} style The style property.
 * @param {Object<string, ?>} props All other properties of the component.
 */
const controlStyle = (style, props) => {
  const fst = Object.keys(props).reduce((acc, key) => {
    if (!cssProps.includes(key)) return acc
    const val = props[key]
    acc[key] = val
    delete props[key]
    return acc
  }, {})
  if (!style) return fst

  let ar = Object.keys(fst).map((k) => `${k}:${fst[k]}`)
  if (style) ar.push(style)
  const j = ar.join(';')
  return j
}

module.exports=controlStyle