<script setup lang="ts">
const theEmit = defineEmits(["editTaskName"]);

const btnClick = (event: Event) => {
  event.preventDefault();
  theEmit("editTaskName");
};
</script>

<template>
  <button
    class="relative p-1 w-[24px] h-[24px] bg-transparent rounded-sm hover:bg-blue-300 active:scale-90"
    title="Редактировать"
    @click.stop="btnClick"
  >
    <div
      class="w-[16px] h-[16px] absolute left-[4px] top-[4px] overflow-hidden rotate-45"
    >
      <svg
        width="16px"
        height="16px"
        viewBox="-13 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
      >
        <!-- <title>pencil</title>
        <desc>Created with Sketch Beta.</desc> -->
        <defs></defs>
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
          sketch:type="MSPage"
        >
          <g
            id="Icon-Set-Filled"
            sketch:type="MSLayerGroup"
            transform="translate(-583.000000, -101.000000)"
            fill="#000000"
          >
            <path
              d="M583,123 L589,123 L589,110 L583,110 L583,123 Z M586,133.009 L589,125 L583,125 L586,133.009 L586,133.009 Z M587,101 L585,101 C583.367,100.963 582.947,101.841 583,103 L583,108 L589,108 L589,103 C589.007,101.788 588.635,101.008 587,101 L587,101 Z"
              id="pencil"
              sketch:type="MSShapeGroup"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  </button>
</template>
