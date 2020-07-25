<template>
  <div>
    <p>{{ user.data.displayName }}さん、ようこそ！</p>
    <p>残高： {{ user.wallet }}円</p>
    <button @click="logOut">ログアウト</button>
    <h1>ユーザー一覧</h1>

    <table class="table">
      <tr>
        <th>ユーザー名</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.name }}</td>
        <td>          
          <button @click="openModal(user)">walletの確認</button>
          <modal :val="postUser" v-show="modal" @close="closeModal" />
        </td>
        <td>
          <button>送る</button>
        </td>
      </tr>
    </table>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
import Modal from "./modal/modal"

export default {
  components: {
      Modal
    },
  data() {
    return {
      users: [],
      modal: false,
      postUser: '',
    };
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  created() {
    firebase
      .firestore()
      .collection("users")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const data = {
            id: doc.id,
            name: doc.data().DisplayName,
            Wallet: doc.data().Wallet
          };
          this.users.push(data);
          const user = doc.data();
          user.id = doc.id;
          // this.users.push(user)
          console.log(user);
        });
      });
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Signin"
          });
        });
    },
    openModal(user) {
      this.modal = true;
      this.postUser = user;
    },
    closeModal (){
      this.modal = false;
    }
  }
};
</script>

<style>
.table {
  margin: 0 auto;
}
</style>