<script setup>
</script>

<template>
   <div>
    <RouterView></RouterView>
   </div>
</template>
<!--css cơ bản cho toàn bộ trang -->
<style lang="css">
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html{
  font-size: 16px;
  scroll-behavior: smooth;
}
html >body{
  font-family: 'Roboto', sans-serif;
}

/* class quy định chiều dài trang */
.w100v{
  width: 100vw;
  height: 100vh;
}
</style>
