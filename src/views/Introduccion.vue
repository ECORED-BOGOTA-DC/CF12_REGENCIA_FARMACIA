<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row
      .col-lg-2
      .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") El proceso de dispensación y distribución de un producto farmacéutico a un usuario o paciente implica una gran responsabilidad para el personal farmacéutico. Por este motivo, el conocimiento que se debe tener para llevar a cabo esta actividad de manera eficaz debe ser muy amplio y tener unas bases muy sólidas en temas relevantes relacionados con procesos biológicos, bioquímicos y fisiológicos que permitan entender todos los efectos y acciones farmacológicos de los fármacos en el organismo humano.
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/intro1.svg" data-aos="fade-left")



    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass">
.cajon.color-secundario
  background-color: #DED6F8
</style>
