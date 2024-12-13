<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Modal from "./components/Modal.vue";
import { ref } from "vue";
import { store } from "./store/index";
// const isOpen = ref(false);
</script>
<template>
  <div class="page-wrapper">
    <Header @toggleModal="store.toggleModal(true)" />
    <main class="main">
      <router-view></router-view>
    </main>
    <!-- bind - связывать -->
    <Modal :isOpen="store.isOpen" @toggleModal="store.toggleModal(false)" />
    <Footer />
  </div>
</template>

<style scoped></style>
