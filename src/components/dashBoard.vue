<template>
  <div>
    <p>{{ user.data.displayName }}さん、ようこそ！</p>
    <p>残高： {{ user.wallet }}円</p>
    <h1>ユーザー一覧</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ user: "user" })
  }
};
</script>