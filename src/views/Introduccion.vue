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
        p(data-aos="fade-up") El proceso de dispensación y distribución de un producto farmacéutico a un usuario o paciente implica una gran responsabilidad para el personal farmacéutico. Por este motivo, para llevar a cabo esta actividad de manera eficaz, se debe tener un conocimiento y bases muy sólidos en temas relevantes relacionados con procesos biológicos, bioquímicos y fisiológicos que permitan entender todos los efectos y acciones farmacológicos de los fármacos en el organismo humano.
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/intro1.svg" data-aos="fade-left" alt="Imagen decorativa")

    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        .p-4.cont_responsive1(data-aos="fade-right" style="background-color:#CDEDFC;width:160%;right:-20%;border-radius:40px 40px 0px 40px;box-shadow:0px 0px 20px rgba(0,0,0,.2);position:relative;z-index:2;")
          p.mb-0.mt-4.mb-4 Todo esto va de la mano del aporte de la farmacología general y especial que permite comprender el amplio mundo de la farmacología, sus diferentes disciplinas, grupos terapéuticos, grupos farmacológicos, así como la comprensión de la medicina tradicional en la que se pueden encontrar plantas medicinales para el tratamiento y alivio de las patologías.
      .col-lg-9
        figure
          img(src="@/assets/curso/intro2.png" data-aos="fade-left" alt="Imagen decorativa")



    
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
