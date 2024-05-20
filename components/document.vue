<template>
  <div class="px-5 max-w-full sm:max-w-[200px] py-6 border-2 hover:border-0 hover:bg-white border-primary-light rounded-xl text-sm-1">
    <img :src="document.type === 'pdf' ? '/image/pdf.webp' : '/image/doc.webp'" :alt="document.type === 'pdf' ? 'Pdf' : 'Doc'" class="w-[82px] h-[100px] mb-4 mx-auto">
    <p class="mb-5 ">
      {{document.name}}
    </p>
    <div class="flex justify-between items-center">
      <p class="text-light">{{document.size}}</p>
      <a :href="document.link" download>
        <img src="/image/downald.svg" alt="Pdf" class="w-6 h-6">
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Document',
  props: ['document']
}
</script>
