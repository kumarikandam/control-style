/* alanode example/ */
import controlStyle from '../src'

(async () => {
  const res = await controlStyle({
    text: 'example',
  })
  console.log(res)
})()