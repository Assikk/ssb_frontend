<template>
  <label class="cursor-pointer px-10 py-5 rounded-lg border border-gray border-dashed">
    <p class="text-black text-sm-1 text-center">
      Перетащите или загрузите файл анкеты* (.doc,.pdf,.docx,.rtf)
    </p>
    <input type="file" class="hidden" @change="sendFile">
  </label>
</template>
<script>
export default {
  name: 'File',
  methods: {
    sendFile(e) {
      let file = e.target.files[0]
    }
  }
}
</script>
