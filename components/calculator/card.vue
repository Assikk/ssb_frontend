<template>
  <div class="bg-background py-6 px-4 md:p-10 rounded-xl">
    <div class="flex flex-col md:flex-row gap-6 md:gap-[60px]">
      <div class="w-full md:w-3/5">
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-between">
            <TextsBase-1BlackSSB>
              Ежемесячные расходы
            </TextsBase-1BlackSSB>
            <CalculatorInput :amount="active" text="TJS"/>
          </div>
          <CalculatorInputRange :min="card.minAmount" :max="card.maxAmount" :step="1"
          @change="(val) => active = val" v-model="card.activeAmount"/>
          <div class="flex justify-between text-light text-small-base-1 sm:text-sm-1">
            <TextsSm-1Light>
              {{card.min_amount}} сомони
            </TextsSm-1Light>
            <TextsSm-1Light class="hidden sm:block">
              {{card.max_amount / 2}} сомони
            </TextsSm-1Light>
            <TextsSm-1Light>
              {{card.max_amount}} сомони
            </TextsSm-1Light>
          </div>
        </div>
      </div>
      <div class="w-full md:w-2/5 flex flex-col gap-5">
        <TitlesXl2-1BlackSSB>
          Вы получите
        </TitlesXl2-1BlackSSB>
        <div class="flex items-center justify-between">
          <TextsBase1Gray>
            Кэщбэк в месяц
          </TextsBase1Gray>
          <TitlesXl2-1Primary>
            134 сомони
          </TitlesXl2-1Primary>
        </div>
        <div class="flex items-center justify-between">
          <TextsBase1Gray>
            % кэшбэка
          </TextsBase1Gray>
          <TextsXl-1BlackSSB>
            {{card.percent}} %
          </TextsXl-1BlackSSB>
        </div>
        <Button :primary="true" class="!w-full" @click="openApplication(true)">
          Дархост онлайн
        </Button>
      </div>
    </div>
    <TextsBase-1Gray class="mt-8">
      Расчёт калькулятора предварительный и не является публичной офертой
    </TextsBase-1Gray>
</div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'CardCalculatorComponent',
  props: ['card'],
  data() {
    return {
      active: this.card.max_amount / 2
    }
  },
  methods: {
    ...mapMutations({
      openApplication: 'application/changeApplication'
    }),
  }
}
</script>