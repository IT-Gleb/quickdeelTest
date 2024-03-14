<script setup lang="ts">
import ToTaskBtn from "../UI/Buttons/ToTaskBtn.vue";
</script>

<template>
  <div class="wrapper">
    <h2 class="w-fit mx-auto font-bold text-[1.3rem]/[1.5rem]">
      [Frontend] тестовое отборочное задание.
    </h2>

    <h3 class="indent-4 text-left font-bold text-[1.1rem]/[1.5rem] mt-5">
      Разработать простое приложение таск-менеджера с использованием
      <span class="text-[1.2rem]/[1.5rem] text-blue-700 uppercase">Vue 3</span>,
      включая работу с
      <span class="text-[1.2rem]/[1.5rem] text-blue-700 uppercase">vueex</span>
      или
      <span class="text-[1.2rem]/[1.5rem] text-blue-700 uppercase"> pinia</span>
      и
      <span class="text-[1.2rem]/[1.5rem] text-blue-700 uppercase"
        >vue-router</span
      >.
    </h3>

    <div
      class="w-[100%] flex flex-col items-start justify-start md:flex-row gap-x-5 mt-5"
    >
      <article
        class="w-[100%] md:w-[50%] border-b-[2px] border-b-blue-900 md:border-none p-2"
      >
        <p class="indent-4 text-[1.2rem]/[1.5rem] text-slate-500 font-medium">
          Приложение должно иметь главную страницу
          <span class="text-[0.65rem]/[1rem] text-slate-500"
            >(на главной странице переход на страницу со списком задач, по
            желанию можете дать волю своей фантазии)</span
          >.
        </p>
        <ul>
          <li class="my-2">
            На странице со списком задач должна быть форма создания задачи.
          </li>
          <li class="my-2">Задачи можно удалить и отредактировать.</li>
          <li class="my-2">
            При обновлении страницы должны отображаться сохранённые задачи.
          </li>
        </ul>
        <div class="text-right">
          <to-task-btn></to-task-btn>
        </div>
      </article>
      <article
        class="w-[100%] md:w-[50%] p-2 md:pl-4 md:border-l-[2px] md:border-l-blue-900/50"
      >
        <p class="indent-4 text-[1.2rem]/[1.5rem] text-slate-500 font-medium">
          Для решения задачи использовал технологии:
        </p>
        <ul>
          <li class="my-2">Vue3, Composition API</li>
          <li class="my-2">Vue-router</li>
          <li class="my-2">Pinia</li>
          <li class="my-2">TileWindCSS</li>
          <li class="my-2">Autoprefixer</li>
          <li class="my-4">
            Для хранения задач использовал SessionStorage. Подходит под условия
            теста.
          </li>
        </ul>
      </article>
    </div>
  </div>
</template>
