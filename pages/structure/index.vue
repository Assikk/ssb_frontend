<template>
  <section>
    <div class="max-w-[846px] mx-auto pt-6 pb-3 px-6 lg:px-0">
      <Titles class="mb-6 sm:mb-0">
        {{$t('pages.structure.title')}}
      </Titles>
      <div class="flex flex-col gap-10 items-center">
        <img src="/image/emblem.webp" alt="Emblem" class="h-[120px] sm:h-[95px]">
        <img src="/image/head.png" alt="Head" class="w-full">
      </div>
    </div>
    <div style="display:flex;align-items:center;justify-content:center; border-radius:10px; padding: 15px;">
      <span >
        <a style="border: 1px solid #b3b6bc;padding: 15px;border-radius: 20px;" href="../documents/Қарорҳо ва Оинномаи Бонк.pdf" id="link_offerta"><img src="../../static/image/icon_offerta.png" width="120" height="120" alt="" style="">{{$t('res_doc')}}</a>
      </span>
    </div>
  </section>
</template>
<script>
export default {
  name: 'StructurePage',
  data() {
    return {

    }
  }
}
</script>
