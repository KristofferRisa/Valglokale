<template>
    <nav>
        <nuxt-link to="/">Hjem</nuxt-link> |
        <nuxt-link to="/om">Om</nuxt-link>
        <hr>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style>
nav {
  overflow: hidden;
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  text-align: center;
  margin-top:25px;
}

nav > a {
    margin: 25px;
    color: black;
    font-size: 1.5rem;
}

</style>
