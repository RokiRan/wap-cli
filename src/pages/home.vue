<script lang="ts" setup>
import { useSessionStorage } from '@vueuse/core'
const user = useSessionStorage('a', {
    name: '',
    age: 0
  })
const add = () => {
  user.value.age++
}
</script>
<template>
  <h1>hello</h1>
  <input type="text" v-model="user.name"/>
  <input type="number" v-model="user.age"/>
  <div>
    {{JSON.stringify(user)}}
  </div>
  <button @click="add">ADD</button>
</template>
<style lang="less"></style>
