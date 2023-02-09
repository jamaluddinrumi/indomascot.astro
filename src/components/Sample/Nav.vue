<script setup lang="ts">
import Card from "./Card.vue";
</script>

<template>
  <ul>
    <Card
      class="mb-4"
      client:visible
      href="/"
      title="Home"
      body="Cras mattis consectetur purus sit amet fermentum."
    />

    <Card
      class="mb-4"
      client:visible
      href="/about"
      title="About"
      body="Maecenas faucibus mollis interdum."
    />

    <Card
      class="mb-4"
      client:visible
      href="/contact"
      title="Contact"
      body="Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
    />
  </ul>
</template>
