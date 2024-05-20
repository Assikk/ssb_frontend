import Vue from 'vue'
import { ValidationProvider, extend } from 'vee-validate'
import {required, min} from 'vee-validate/dist/rules'

Vue.component('ValidationProvider', ValidationProvider)

extend('min', {
  ...min,
  message: 'Минимально {length} символов'
})
extend('required', {
  ...required,
  message: 'Это поле обязателен для заполнения'
})
