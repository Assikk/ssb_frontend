<template>
  <div
    class="
      bg-background
      rounded-xl
      flex flex-col
      sm:flex-row
      items-center
      gap-6
      p-6
      sm:p-0
    "
  >
    <img
      :src="transfer.img.src"
      :alt="transfer.img.alt"
      class="w-[200px] h-[200px] rounded-xl"
    />
    <div class="py-0 sm:py-4">
      <h1 class="font-semibold text-2xl-1">
        {{ transfer.title }}
      </h1>
      <p class="my-3 text-light text-base-1">
        {{ transfer.description }}
      </p>
      <div>

        <button
          @click="
            $router.push(
              localePath(transfer.type) +
                `/${transfer.id}?title=${transfer.title}&description=${transfer.description}&options=${transfer.options}&image=${transfer.img.src}`
            )
          "
          class="
            px-6
            py-4
            rounded
            font-medium
            cursor-pointer
            text-center text-red-500
            border-red-500 border
          ">
          {{$t('readMore')}}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardTransfer",
  props: ["transfer"],
};
</script>
