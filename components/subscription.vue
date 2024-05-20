<template>
  <div>
    <div class="flex items-center justify-between  py-2 px-5 bg-[#E3E3E3] text-black-ssb rounded text-sm-1">
    <input type="text" v-model="email" :placeholder="$t('yourAddress')" class="input text-black bg-transparent outline-0 py-2 w-1/2">
    <button class="pl-5 border-l border-gray py-2" @click="sendEmail">
      {{$t('subscribe')}}
    </button>
  </div>
  <p class="mt-3 " style="color:darkgreen" v-if="toast">Почтаи шумо фиристода шуд.</p>

  </div>

</template>
<script>
export default{
  data() {
    return {
      email:"",
      toast:false,
    }
  },
  methods: {
   async  sendEmail(){
    await this.$axios.post("https://webapi.ssb.tj/message/",{
      email:this.email
    }).then(() =>{
      this.email = "";
      this.toast = true;
      setTimeout(() => {
      this.toast = false;

      }, 3000);
    })
  }
  },
}
</script>
