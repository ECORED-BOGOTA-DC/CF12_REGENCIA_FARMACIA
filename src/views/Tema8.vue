<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Farmacología especial
    
    .cont_8_1.row.pt-5.pb-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema8/2.svg" data-aos="fade-right" alt="Imagen decorativa" style="max-width:350px;margin:0 auto;")
      .col-lg-1
      .col-lg-6(style="place-self:center;")
        p(data-aos="fade-up") La farmacología especial aborda un tema muy amplio relacionado con los grupos terapéuticos y farmacológicos, que abarcan cada uno de los sistemas del cuerpo humano.
        p.mt-4(data-aos="fade-up") Se pueden encontrar los fármacos que actúan en el sistema nervioso central, digestivo, endocrino, entre otros y sus respectivos grupos farmacológicos como los son:
        ul.lista-ul.mt-3
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            | Antidepresivos.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            | Ansiolíticos.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;")
            | Hipoglicemiantes, entre otros.
    
    p.mt-5(data-aos="fade-up") En la siguiente tabla se representan los grupos terapéuticos definidos según el sistema ATC (Sistema de Clasificación Anatómica, Terapéutica, Química).

    .col-lg-8.mt-5.m-auto
      .titulo-sexto.color-acento-botones.mt-5
        h5.d-block Tabla 6
        span #[em Grupos terapéuticos]
      
      .tabla-a.color-acento-botones.mt-4 
        table
          thead(style="border:0;")
            tr(style="background-color:#00BCD4;")
              th.text-white.p-4(style="border:0;") Grupo
              th.text-white.p-4(style="border:0;") Descripción
          tbody
            tr(style="background-color:#fff;")
              td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") A
              td.p-4.text-center(style="border:0;") Tracto digestivo y metabolismo.
            tr(style="background-color:#F6F6F6;")
              td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") B
              td.p-4.text-center(style="border:0;") Sangre y órganos encargados que la producen.
            tr(style="background-color:#fff;")
              td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") C
              td.p-4.text-center(style="border:0;") Sistema cardiovascular.
            tr(style="background-color:#F6F6F6;")
              td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") D
              td.p-4.text-center(style="border:0;") Agentes dermatológicos.
            tr(style="background-color:#fff;")
              td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") G
              td.p-4.text-center(style="border:0;") Sistema genitourinario y hormonas sexuales.
            tr(style="background-color:#F6F6F6;")
              td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") L
              td.p-4.text-center(style="border:0;") Antineoplásticos y agentes inmunosupresores.
            tr(style="background-color:#fff;")
              td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") M
              td.p-4.text-center(style="border:0;") Sistema muscular y esquelético.
            tr(style="background-color:#F6F6F6;")
              td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") N
              td.p-4.text-center(style="border:0;") Sistema nervioso central.
            tr(style="background-color:#fff;")
              td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") P
              td.p-4.text-center(style="border:0;") Antiparasitarios.
            tr(style="background-color:#F6F6F6;")
              td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") R
              td.p-4.text-center(style="border:0;") Sistema respiratorio.
            tr(style="background-color:#fff;")
              td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") S
              td.p-4.text-center(style="border:0;") Órganos sensoriales.
            tr(style="background-color:#F6F6F6;")
              td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") V
              td.p-4.text-center(style="border:0;") Varios.
    
    .p-4.mt-5(style="background-color:#E6F7FE;")
      .row.col-lg-10.m-auto
        .col-lg-3.col-md-5.mb-md-0.mb-4(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema8/3.svg" data-aos="fade-right" alt="Imagen decorativa" style="max-width:350px;margin:0 auto;")
        .col-lg-9.col-md-7.mb-md-0.mb-4(style="place-self:center;")
          p(data-aos="fade-up") El objetivo de estudio es comprender qué tipo de fármacos se encuentran en cada uno de estos grupos, identificar sus indicaciones, acción terapéutica, contraindicaciones y reacciones adversas para lo cual se tendrá como documento de estudio el documento “Grupos terapéuticos”:
          a.anexo.mt-3.bg-white(:href="obtenerLink('downloads/Anexo2_CF012_Grupos_terapauticos.pdf')" target="_blank" data-aos="zoom-in-up")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p.fw-bold.mb-0 Anexo. Grupos terapeuticos







    
   
</template>

<script>
export default {
  name: 'Tema8',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.cont_8_1, .cont_8_1 *
  position: relative
.cont_8_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema8/1.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
</style>
