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

test('response is valid object', t => {
  t.truthy(isObject(t.context))
})

test('no fields missing', t => {
  const needed = [
    'name',
    'surname',
    'gender',
    'region'
  ]

  for (let field of needed) {
    if (!t.context[field]) t.fail()
  }

  t.pass()
})

test('error gets triggered', async t => {
  let list

  try {
    let list = names({
      amount: 'Hey'
    })
  } catch (err) {
    t.pass()
  }

  if (list != undefined) {
    t.fail()
  }
})
