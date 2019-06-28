<template>
<div class="content">
    <section id="about" >
        <article>
        <h3>Laget av Kristoffer Risa</h3>
        <h5>Teknologier:</h5>
        <ul>
            <li>Nuxt.js</li>
            <li>node og npm</li>
            <li>Element UI</li>
            <li>Azure Blob Storage</li>
            <li>Azure DevOps</li>
        </ul>
        <p>Kildekode: GitHub</p>
        </article>
    </section>
    <section id="contact">
        <article>
            <p>Kontakt: kristoffer@risa.email</p>
        </article>
    </section>
</div>
</template>

<script>
export default {
    name: 'about'
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
