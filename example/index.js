import controlStyle from '../src'

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