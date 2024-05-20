<template>
  <div class="text-center">
    <div class="h-[154px] bg-[#DBE6F2] rounded-lg overflow-hidden">
      <img
        src="/image/phone.webp"
        alt="Phone"
        class="mx-auto mt-8 w-[128px] h-[258px]"
      />
    </div>
    <h3
      v-if="contact.application"
      class="mt-6 mb-3 font-medium text-black-ssb text-base-2"
    >
      Дар замимаи ССБ - Мобайл ба қисмати
    </h3>
    <h3
      v-if="contact.mobile"
      class="mt-6 mb-3 font-medium text-black-ssb text-base-2"
    >
      {{ contact.mobile }}
    </h3>
    <p class="text-black text-base-1">
      {{ contact.description }}
    </p>
  </div>
</template>
<script>
export default {
  name: "ContactCard",
  props: ["contact"],
};
</script>
