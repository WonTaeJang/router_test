<template>
  <div
    class="layout"
  >
    <div>
      <span>layout component</span>
      <button
        @click="onClick('/')"
      >
        /
      </button>
      <button
        @click="onClick('/hello-world')"
      >
        /hello-world
      </button>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

const onClick = (path) => {
  router.push(path)
}

</script>

<style lang="scss" scoped>
.layout {
  border: 1px solid silver;
  background-color: #fff;
  padding: 20px;

  span {
    color: black;
  }
}
</style>