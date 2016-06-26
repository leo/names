import request from 'request-promise'

let options = {
  uri: 'http://uinames.com/api',
  json: true
}

const allowedParams = {
  amount: Number,
  gender: [
    'male',
    'female'
  ],
  region: String,
  minLength: Number,
  maxLength: Number
}

const wrongType = (param, type) => `Value for parameter "${param}" needs to be of type "${type}"`

const isAllowed = params => {
  if (!params) return false

  for (let param in params) {
    let inList = allowedParams[param],
        content = params[param]

    if (!inList) throw Error(`Parameter "${param}" is not allowed`)

    if (Array.isArray(inList)) {
      if (typeof content != 'string') {
        throw Error(wrongType(param, 'String'))
      }

      if (!inList.includes(content)) {
        throw Error(`"${content}" is not allowed as a value for "${param}"`)
      }
    } else if (content.constructor != inList){
      throw Error(wrongType(param, inList.name))
    }
  }
}

export default config => {
  let allowed

  try {
    allowed = isAllowed(config)
  } catch (err) {
    return console.error(err)
  }

  if (allowed) {
    options.qs = config
  }

  return request(options)
}
