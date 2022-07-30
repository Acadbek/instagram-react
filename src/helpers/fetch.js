import axios from "axios"

export const fetchdata = async (setComments, url) => {
  let array = []
  await axios.get(url)
    .then(res => array.push(res))
  console.log(array[0].data.length, '============')
  setComments(array[0].data)
}



export const post = async (e, value, time, url) => {
  if (e.key === 'Enter') {
    // console.log(value)
    await axios.post(url, {
      title: value,
      author: 'voyager',
      time: time
    })
  }
}