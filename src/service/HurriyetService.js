import axios from 'axios';

//const API_KEY = '74d02e9ac4c54817beac3e9145e01c0c';
const API_KEY = 'f80c4309c514416a9ff4ed00631960f4';
var instance = axios.create({
  //baseURL: 'https://api.hurriyet.com.tr/v1',
  baseURL: 'https://flask-api-heroku.herokuapp.com/api',
  headers: {
    //apikey: API_KEY,
    accept: 'application/json',
  },
  validateStatus: function(status) {
    return true;
  },
});

const HurriyetService = {
  articles() {
    return instance({ method: 'get', url: '/products' });
  },

  articleSingle(articleId) {
    return instance({ method: 'get', url: '/products/' + articleId });
  },
};

export default HurriyetService;

// import $ from 'jquery';

// const API_KEY = '74d02e9ac4c54817beac3e9145e01c0c';
// const baseURL = 'https://api.hurriyet.com.tr/v1';

// const HurriyetService = {
//   articles() {
//     return fetch(baseURL + '/articles', {
//       method: 'get',
//       headers: {
//         apikey: API_KEY,
//       },
//     });
//   },

//   articleSingle(articleId) {
//     //return instance({ method: 'get', url: '/articles/' + articleId });
//   },
// };

// export default HurriyetService;
