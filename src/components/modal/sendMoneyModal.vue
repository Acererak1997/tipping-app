<template>
  <div class="modal-overlay">
    <div class="modal">
      <p>あなたの残高：{{ val }}円</p>
      <p>送る金額</p>
      <input type="text" :value="value" @input="$emit('input', $event.target.value)">
      <button @click="$emit('transfer')">送る</button>
      <button @click="$emit('close')">閉じる</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "sendMoneyModal",
  model: {
    amountOfMoney: 'amountOfMoney',
    event: 'input'
  },
  props: [
    'val', 'value'
    ]
};
</script>