<template>
  <div class="px-6 sm:px-10 py-6 sm:py-8 bg-background rounded">
    <h1 class="font-semibold text-lg-1 text-xl-1">
      {{result.title}}
    </h1>
    <p class="my-4 text-base-1 sm:text-xl-1">
      {{result.description}}
    </p>
    <nuxt-link :to="`/${result.model}/` + result.id" class="text-base-2 sm:text-xl-1 text-bllue hover:border-b">{{ `ssb.tj/${result.model}/` + result.id }}</nuxt-link>
  </div>
</template>
<script>
export default {
  name: 'CardSearch',
  props: ['result'],
}
</script>
