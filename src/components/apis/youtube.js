import axios from 'axios'

const KEY = 'AIzaSyAG7Tgu0Wn7vf29bhlikf2l18A8amA62SE'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY,
  },
})
