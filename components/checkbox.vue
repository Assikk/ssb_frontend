<template>
  <div>
    <input type="checkbox" id="checkbox">
    <label for="checkbox"></label>
  </div>
</template>
<script>
export default {
  name: 'Ckeckbox'
}
</script>
<style scoped>
#checkbox{
    display: none;
}
#checkbox + label{
    display: block;
    width: 24px;
    background: white;
    border: 1px solid #282828;
    text-align: center;
    border-radius: 50%;
}
#checkbox + label:before{
    content: '✔';
    font-size: 12px;
}
#checkbox:checked + label{
  background: #FF1F1F;
  border: none;
}
#checkbox:checked + label:before{
  color: white;
}
</style>
