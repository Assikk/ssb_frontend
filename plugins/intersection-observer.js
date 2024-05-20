import Vue from 'vue';

Vue.directive('intersection-observer', {
  inserted(el, binding) {
    const options = binding.value || {};
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Если элемент видим, вызываем обработчик из связанного значения
          options.handler();
          // Отключаем наблюдение после выполнения обработчика, если указано в параметрах
          if (options.once) {
            observer.unobserve(entry.target);
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);

    el._observer = observer; // Сохраняем ссылку на наблюдатель в элементе
  },

  unbind(el) {
    if (el._observer) {
      el._observer.disconnect(); // Отключаем наблюдение при удалении элемента
      delete el._observer;
    }
  }
});
