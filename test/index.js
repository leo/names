import test from 'ava'
import names from '../dist'

const isObject = obj => typeof obj === 'object' && obj !== null

test.beforeEach('requesting data', async t => {
  let list

  try {
    list = await names()
  } catch (err) {
    t.fail(err)
  }

  t.context = list
  t.pass()
})

test('response is valid object', async t => {
  t.truthy(isObject(t.context))
})
