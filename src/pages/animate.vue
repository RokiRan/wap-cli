<script lang="ts" setup>
  import Vue, { onMounted, ref } from 'vue'
  import { store } from '@/stroes'
  import gsap from 'gsap'

  let circle1 = ref<HTMLElement>()
  let circle2 = ref<HTMLElement>()
  let circle3 = ref<HTMLElement>()
  onMounted(() => {
    // circle1 = document.querySelector('#circle1') as HTMLElement
    // circle2 = document.querySelector('#circle2') as HTMLElement
    // circle3 = document.querySelector('#circle3') as HTMLElement

    const tem = [
      { cy: 50, cx: 5 },
      { cy: 5, cx: 27 },
      { cy: 50, cx: 49 },
      { cy: 50, cx: 5 }
    ]
    tem.forEach((item, index) => {
      gsap.to(circle1, 0.2, {
        cy: item.cy,
        cx: item.cx,
        repeat: -1,
        delay: 0.2 * index,
        repeatDelay: 0.6
      })
    })

    const tem2 = [
      { cy: 5, cx: 27 },
      { cy: 50, cx: 49 },
      { cy: 50, cx: 5 },
      { cy: 5, cx: 27 }
    ]
    tem2.forEach((item, index) => {
      gsap.to(circle2, 0.2, {
        cy: item.cy,
        cx: item.cx,
        repeat: -1,
        delay: 0.2 * index,
        repeatDelay: 0.6
      })
    })

    const tem3 = [
      { cy: 50, cx: 49 },
      { cy: 50, cx: 5 },
      { cy: 5, cx: 27 },
      { cy: 50, cx: 49 }
    ]
    tem3.forEach((item, index) => {
      gsap.to(circle3, 0.2, {
        cy: item.cy,
        cx: item.cx,
        repeat: -1,
        delay: 0.2 * index,
        repeatDelay: 0.6
      })
    })
  })
</script>
<template>
  <div>
    <h1>动画</h1>
  <svg width="100" height="100">
    <circle cx="50" cy="50" r="40" fill="red" />
    <circle cx="50" cy="50" r="30" fill="blue" />
    <circle cx="50" cy="50" r="20" fill="green" />
    <circle cx="50" cy="50" r="10" fill="grey" />
  </svg>
  <svg fill="none" fill-rule="evenodd" stroke="#9fbde8">
    <g transform="translate(1 1)" stroke-width="2">
      <circle ref="circle1" cx="5" cy="50" r="5"></circle>
      <circle ref="circle2" cx="27" cy="5" r="5"></circle>
      <circle ref="circle3" cx="49" cy="50" r="5"></circle>
    </g>
  </svg>
  </div>
</template>
<style lang="less"></style>
