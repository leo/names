import request from 'request-promise'

const options = {
  uri: 'http://uinames.com/api/',
  qs: {
    amount: 25
  },
  json: true
}

request(options).then(function(repos) {
  console.log(repos)
})
