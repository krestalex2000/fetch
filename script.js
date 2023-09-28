const sendData = ({url, data = {}}) => {
  return fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(response => response.json())
}

const getData = (url) => {
  return fetch(url).then(response => response.json())
}

getData('db.json')
  .then(data => {
    console.log(data)
    sendData({
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: JSON.stringify(data),
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))
  })