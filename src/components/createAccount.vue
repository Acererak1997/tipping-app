<template>
  <div class="signup">
    <h2>新規登録画面</h2>
    <input type="text" placeholder="アカウント名" v-model="displayName" required />
    <input type="text" placeholder="メールアドレス" v-model="email" required />
    <input type="password" placeholder="パスワード" v-model="password" required />
    <button @click="register(); refUser()">新規登録</button>
    <p>
      <router-link to="/">ログインはこちらから</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";

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
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.displayName
            })
            .then(() => {
              console.log(data.user.displayName);
              this.$router.replace({ name: "Signin" });
            });
        })
       .catch(err => {
         this.error = err.message
       });
    },
    refUser(){
      const userRef = firebase.firestore().collection('users');

      const initDate = {
        DisplayName: this.displayName,
        Wallet: 2000
      };

      userRef.add(initDate)
      .then(docRef => {
        console.log(docRef.id);
      })
      .catch(error =>{
        console.log(error);
      })
    }
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signup {
  margin-top: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>