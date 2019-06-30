<template>
<div class="content">
    <section id="about" >
        <article>
        <h3>Laget av Kristoffer Risa</h3>
        <h5>Teknologier:</h5>
        <ul>
            <li><a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a></li>
            <!-- <li>node og npm</li> -->
            <li>Element UI</li>
            <li>Azure Blob Storage</li>
            <li>Azure DevOps</li>
        </ul>
        <p>Kildekode: <a href="https://github.com/KristofferRisa/Valglokale" target="_blank">GitHub</a></p>
        </article>
    </section>
    <section id="contact">
        <article>
            <p>Kontakt: <a href="mailto:kristoffer@risa.email" target="_blank">kristoffer@risa.email</a></p>
        </article>
    </section>
</div>
</template>

<script>
export default {
    name: 'om'
}
</script>

<style>
.content {
    width: 70%;
    margin: auto;
}
.content > section {
    margin-top:40px;
}

</style>
