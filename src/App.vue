<script setup lang="ts"></script>

<template>
  <header class="max-h-100vh">
    <img
      class="block m-[0_auto_2rem]"
      alt="Vue logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="text-center">
      <HelloWorld msg="click it!" />

      <nav class="w-100% text-20px text-center mt-20px">
        <RouterLink to="/"> Home </RouterLink>
        /
        <RouterLink to="/about"> About </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
