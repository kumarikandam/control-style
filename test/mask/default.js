import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import controlStyle from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults() {
    const res = await controlStyle({
      text: this.input,
    })
    return res
  },
  context: Context,
})