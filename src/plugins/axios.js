import axios from 'axios'

const instance = axios.create({
  baseURL:'https://identitytoolkit.googleapis.com/v1/',
  // displayName: this.displayName,
  // email: this.email,
  // password: this.password,
  // returnSecureToken: true
});

export default instance