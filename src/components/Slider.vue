<script lang="ts" setup>
  import { ref } from 'vue'
  const imgLength = 4
  const currentIndex = ref(0)
  const getImg = (index: number) => {
    return `/src/assets/images/${index}.jpg`
  }
  const getPostionMap = (index: number) => {
    const arr = [0, 1, 2, 3]
    return arr[index]
  }
  const show = (index: number): Record<string, string> => {
    let z = imgLength - index
    let t = 65 - ((5 * (z + currentIndex.value)) % 4) * 5
    return {
      zIndex: `${(z + currentIndex.value) % 4}`,
      top: '50%',
      left: '50%',
      transform: `translate(-${t}%, -${t}%)`
    }
  }
  const showNext = () => {
    currentIndex.value = (currentIndex.value + 1) % imgLength
  }
</script>
<template>
  <div class="slider" @click="showNext">
    <div class="slider-item" v-for="item in imgLength" :key="item" :style="show(item)">
      <!-- <span class="dot">{{ item }}</span> -->
      <img :src="getImg(item)" alt="" />
    </div>
  </div>
</template>
<style lang="less">
  .slider {
    margin: auto;
    position: relative;
    overflow: hidden;
    // background-image: url(/src/assets/bg.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 1000px;
    height: 800px;
    .slider-item {
      width: 600px;
      height: 600px;
      border-radius: 10px;
      overflow: hidden;
      display: block;
      position: absolute;
      transition-duration: 1s;
      transition-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1);
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .dot {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 30px;
        color: #fff;
        background-color: #42b983;
        border-radius: 50%;
        padding: 10px;
        margin: 0;
        line-height: 1;
      }
    }
  }
</style>
