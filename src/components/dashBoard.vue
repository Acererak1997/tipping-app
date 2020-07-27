<template>
  <div>
    <p>{{ currentUser.data.displayName }}さん、ようこそ！</p>
    <p>残高： {{ currentUser.wallet }}</p>
    <button @click="logOut">ログアウト</button>
    <h1>ユーザー一覧</h1>

    <table class="table">
      <tr>
        <th>ユーザー名</th>
      </tr>
      <tr v-for="(user, index) in users" :key="user.id">
        <td>{{ user.name }}</td>
        <td>
          <button @click="openModal(user)">walletの確認</button>
          <modal :val="postUser" v-show="modal" @close="closeModal" />
        </td>
        <td>
          <button @click="sendMoneyModal(index)">送る</button>
          <sendMoneyModal
            :val="currentUser.wallet"
            v-show="sendMoney"
            @close="sendMoneyModal"
            :value="value"
            @input="value = $event"
            @transfer="moneyTransfer"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
import Modal from "./modal/modal";
import sendMoneyModal from "./modal/sendMoneyModal";
import store from "../store/store";

export default {
  components: {
    Modal,
    sendMoneyModal,
  },
  data() {
    return {
      users: [],
      modal: false,
      postUser: "",
      sendMoney: false,
      index: "",
      value: "",
    };
  },
  computed: {
    ...mapGetters({
      currentUser: "user",
    }),
  },
  created() {
    firebase
      .firestore()
      .collection("users")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            name: doc.data().DisplayName,
            Wallet: doc.data().Wallet,
          };
          this.users.push(data);
          const user = doc.data();
          user.id = doc.id;
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
            name: "Signin",
          });
        });
    },
    openModal(user) {
      this.modal = true;
      this.postUser = user;
    },
    closeModal() {
      this.modal = false;
    },
    sendMoneyModal(index) {
      this.sendMoney = !this.sendMoney;
      this.index = index;
    },
    moneyTransfer() {
      const userRef = firebase
        .firestore()
        .collection("users")
        .doc(this.users[this.index].id);
      firebase.firestore().runTransaction((transaction) => {
        return transaction
          .get(userRef)
          .then((doc) => {
            if (!doc) {
              alert("user does not exist!");
            }

            transaction.update(userRef, {
              Wallet:
                Number(this.users[this.index].Wallet) + Number(this.value),
            });
          })
          .then(() => {
            this.value = "";
          })
          .catch((error) => {
            console.error("error: ", error);
          });
      });
      store.commit("moneyTransfer", this.value);
    },
  },
};
</script>

<style>
.table {
  margin: 0 auto;
}
</style>