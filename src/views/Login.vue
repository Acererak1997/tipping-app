<template>
  <div id="app">
    <img src="../assets/logo.png" />
    <h1>ログイン画面</h1>
    <p>
      メールアドレス
      <input type="email" v-model="email" />
    </p>
    <p>
      パスワード
      <input type="password" v-model="password" />
    </p>
    <p>
      <button @click="login">ログイン</button>
    </p>
    <router-link to="/CreateAccount">新規登録はこちら</router-link>
  </div>
</template>

<script>
import axios from "../plugins/axios.js";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      axios
        .post(
          "accounts:signInWithPassword?key=AIzaSyAwiiNjv-_Lt5bRHNZCFZ0I_02qfIscSNo",
          {
            displayName: this.displayName,
            email: this.email,
            password: this.password,
            returnSecureToken: true
          }
        )
        .then(response => {
          console.log(response);
        });
      this.email = "";
      this.password = "";
    }
  }
};
</script>