import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import controlStyle from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof controlStyle, 'function')
  },
  async 'calls package without error'() {
    await controlStyle()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await controlStyle({
      text,
    })
    ok(res, text)
  },
}

export default T