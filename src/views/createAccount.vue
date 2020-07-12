<template>
  <div id="app">
    <img src="../assets/logo.png" />
    <h1>新規登録画面</h1>
    <p>
      ユーザー名
      <input type="text" v-model="displayName" />
    </p>
    <p>
      メールアドレス
      <input type="email" v-model="email" />
    </p>
    <p>
      パスワード
      <input type="password" v-model="password" />
    </p>
    <p>
      <button @click="register">新規登録</button>
    </p>
    <router-link to="/">ログインはこちら</router-link>
  </div>
</template>

<script>
import axios from "../plugins/axios.js";
export default {
  data() {
    return {
      displayName: "",
      email: "",
      password: ""
    };
  },
  methods: {
    register() {
      axios
        .post("accounts:signUp?key=AIzaSyAwiiNjv-_Lt5bRHNZCFZ0I_02qfIscSNo", 
        {
          displayName: this.displayName,
          email: this.email,
          password: this.password,
          returnSecureToken: true
        })
        .then(response => {
          console.log(response);
        });
      this.displayName = "";
      this.email = "";
      this.password = "";
    }
  }
};
</script>