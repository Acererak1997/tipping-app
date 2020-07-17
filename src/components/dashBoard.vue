<template>
  <div>
    <p>{{ user.data.displayName }}さん、ようこそ！</p>
    <p>残高： {{ user.wallet }}円</p>
    <h1>ユーザー一覧</h1>
    <button @click="logOut">ログアウト</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  computed: {
    ...mapGetters({ user: "user" })
  },
  methods: {
    logOut() {
      firebase
      .auth()
      .signOut()
      .then(() => {
        this.$router.replace({
          name: "Signin"
        })
      })
    }
  }
};
</script>