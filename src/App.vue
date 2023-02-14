
<template>
  <body class="select-none font-sans">

<!-- start navbar -->
     <NavBar />
<!-- end navbar -->


<!-- start main -->

<main>
    <!-- banner -->
    <img src="./assets/img/banner.PNG" alt="banner" class="mt-6 w-full">
    <!--  -->
    <div class="flex lg:flex-row flex-col justify-between md:px-20 px-5 py-12">
        <!-- sidebar -->
           <SideBar />
        <!-- flies -->
           <Flies />
    </div>
    <!-- about us -->
    <About />
</main>

<!-- end main -->

<!-- start footer -->

<Footer />

<!-- end footer -->
</body>
</template>

<script setup>
   import NavBar from './components/NavBar.vue'
   import SideBar from './components/SideBar.vue'
   import Flies from './components/Flies.vue'
   import About from './components/About.vue'
   import Footer from './components/Footer.vue'
   components:{
    NavBar
    SideBar
    Flies
    About
    Footer
   }


</script>
