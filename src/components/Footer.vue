<template>
   <footer class="text-center">
      <hr>
        <p>Laget av Kristoffer - 2019</p>
        <p>Data hentet fra: <a href="https://hotell.difi.no/?dataset=valg/valglokaler/2017" target="_blank">hotell.difi.no/?dataset=valg/valglokaler/2017</a></p>
    </footer>
</template>

<script>
export default {
    name: 'footer'
}
</script>

<style >

@media only screen and (max-width: 800px) {
  footer{
     margin-top: 100px;
    }
}
@media screen and (min-width:800px) {
    footer{
        margin-top: 390px;
    }
}

footer {
  bottom: 0;
  width: 100%;
  height: 120px;
}
</style>
