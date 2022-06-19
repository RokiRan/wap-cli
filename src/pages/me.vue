<script lang="ts" setup>
  import Vue from 'vue'
  import { store } from '@/stroes'
  import { useSessionStorage } from '@vueuse/core'
  const user = useSessionStorage('a', {
    name: '',
    age: 0
  })
</script>
<template>
  <h1>Me</h1>
  <div>
    拿到的值：{{JSON.stringify(user)}}
  </div>
</template>
<style lang="less"></style>
