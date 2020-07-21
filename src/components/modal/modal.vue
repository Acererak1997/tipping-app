<template>
  <div class="modal-overlay">
    <div class="modal">
      <p>{{ val.name }}さんの残高</p>
      <p>{{ val.Wallet }}円</p>
      <button @click="$emit('close')">close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["val"]
};
</script>

<style>
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background: rgba(0, 0, 0, 0.3);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 100%;
  max-width: 400px;
  background: #fff;
  border-radius: 16px;
  padding: 25px;
}
</style>