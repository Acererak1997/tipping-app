import axios from 'axios'

const instance = axios.create({
  baseURL:
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAwiiNjv-_Lt5bRHNZCFZ0I_02qfIscSNo'
});

export default instance