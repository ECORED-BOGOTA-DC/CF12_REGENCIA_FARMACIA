<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Fitoquímica
    .row.col-lg-10.m-auto
      .col-lg.p-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema5/1.png" data-aos="fade-right" alt="Imagen decorativa" style="max-width:350px;margin:0 auto;")
      .col-lg.p-0(style="place-self:center;")
        .p-4.pt-5.pb-5(style="background-color:#D3EFFC;" data-aos="zoom-in-up")
          p Es la disciplina científica que estudia los metabolitos de origen vegetal y tiene como propósito:
          ul.fa-ul.mb-0.mt-3
            li.mb-2
              i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
              | Aislar.
            li.mb-2
              i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
              | Purificar.
            li.mb-2
              i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
              | Elucidar estructuras.
            li.mb-0
              i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
              | Caracterización biológica.
          p.mt-3.mb-0 Es necesario que cuando se aíslen estos metabolitos no solo se comprueben sus características químicas, sino también su actividad biológica comprobada.
      .col-lg.p-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema5/2.png" data-aos="fade-left" alt="Imagen decorativa" style="max-width:350px;margin:0 auto;")
    p.mt-5(data-aos="fade-up") A continuación, se muestra información relacionada con los metabolitos:
    TabsC.color-secundario.mt-5
      .py-3.py-md-4(titulo="Clasificación")
        .row.col-lg-11.m-auto
          .col-lg-4.mb-5.mb-lg-0
            p Pueden clasificarse de dos formas:
            ul.fa-ul.mb-0.mt-3
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | Primarios.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | Secundarios.
          .col-lg-8
            .row
              .col-lg-5.mb-4.mb-lg-0
                .p-3.cont_circulo.ps-5.cont_circulo1(style="background-color:#F2EEFC;position:relative;")
                  p.mb-0 Se enfocan en el desarrollo, fotosíntesis y en la respiración de la planta.
              .col-lg-7
                figure
                  img(src="@/assets/curso/tema5/3.svg" alt="Imagen decorativa" style="max-width:450px;margin:0 auto;")
            .row.mt-5
              .col-lg-5.mb-4.mb-lg-0
                .p-3.cont_circulo.ps-5.cont_circulo2(style="background-color:#F2EEFC;position:relative;")
                  ul.fa-ul.mb-0
                    li.mb-2
                      i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                      | #[strong Fenólicos:] capacidad antioxidante y pigmentación.
                    li.mb-2
                      i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                      | #[strong Terpenos:] aromas (aceites esenciales).
                    li
                      i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                      | #[strong Nitrogenados:] síntesis para la industria química (cafeína, entre otros ejemplos).
              .col-lg-7
                figure
                  img(src="@/assets/curso/tema5/4.svg" alt="Imagen decorativa" style="max-width:450px;margin:0 auto;")
      .py-3.py-md-4(titulo="Cantidad en las plantas")
        .row.col-lg-11.m-auto
          .col-lg-4.mb-4.mb-lg-0
            p La industria se enfrenta a muchos retos en el campo de la fitoquímica, ya que la cantidad de metabolitos que se encuentran en la planta es muy amplio y supone un crecimiento y una necesidad de acelerar los procesos para su obtención.
          .col-lg-3.mb-4.mb-lg-0
            .p-3(style="background-color:#F2EEFC;")
              p.fw-bold Reto en la diversidad
              ul.fa-ul.mb-0.mt-2
                li.mb-2
                  i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                  | Cerca de #[strong 250K] metabolitos son conocidos.
                li.mb-2
                  i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                  | En una planta se pueden encontrar entre #[strong 3K y 30K].
                li
                  i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                  | Cerca de #[strong 4K] metabolitos nuevos son reportados cada año.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema5/5.svg" alt="Imagen que muestra reto en la diversidad y lo divide en tres partes : Human Intermediary Metabolites FDA - Approved Drugs. Color Key and Histogram.")
      .py-3.py-md-4(titulo="Proceso de extracción de las plantas")
        .row.col-lg-11.m-auto
          .col-lg-4.mb-4.mb-lg-0
            p Para la obtención de los metabolitos es importante seguir los pasos descritos, con el objetivo de garantizar que las características químicas de estos sean las adecuadas y cumplan con los parámetros de calidad necesarios.
          .col-lg-8
            figure
              img(src="@/assets/curso/tema5/6.svg" alt="Muestral control de calidad con los siguientes elementos: •Recolección materia prima vegetal •Secado •Molienda •Extracción •Separación •Concentración •Secado •Residuo •Solvente •Extracto líquido •Preparados farmacéuticos")
    p.mt-5(data-aos="fade-up") Existen diferentes métodos de extracción de estos metabolitos como son:
    br
    .row.mt-4.m-auto
      .col-lg.mb-5.mb-lg-0.pe-5
        .p-4.d-flex.align-items-center.justify-content-center.cont_figura_2_1(style="background-color:#E6F4FF;position:relative;z-index:999;")
          div(style="position:absolute;font-weight:bold;color:#fff;background-color:#00BCD4;left:-20px;top:-20px;font-size:24px;padding:.5rem 1rem;z-index:2;") 1
          h5.mb-0(data-aos="fade-up") Maceración
      .col-lg.mb-5.mb-lg-0.pe-5
        .p-4.d-flex.align-items-center.justify-content-center.cont_figura_2_1(style="background-color:#E6F4FF;position:relative;z-index:999;")
          div(style="position:absolute;font-weight:bold;color:#fff;background-color:#00BCD4;left:-20px;top:-20px;font-size:24px;padding:.5rem 1rem;z-index:2;") 2
          h5.mb-0(data-aos="fade-up") Percolación
      .col-lg.mb-5.mb-lg-0.pe-5
        .p-4.d-flex.align-items-center.justify-content-center.cont_figura_2_1(style="background-color:#E6F4FF;position:relative;z-index:999;")
          div(style="position:absolute;font-weight:bold;color:#fff;background-color:#00BCD4;left:-20px;top:-20px;font-size:24px;padding:.5rem 1rem;z-index:2;") 3
          h5.mb-0(data-aos="fade-up") Digestión
    .row.m-auto.mt-lg-5
      .col-lg-4.mb-5.mb-lg-0.pe-5
        .p-4.d-flex.align-items-center.justify-content-center.cont_figura_2_1(style="background-color:#E6F4FF;position:relative;z-index:999;")
          div(style="position:absolute;font-weight:bold;color:#fff;background-color:#00BCD4;left:-20px;top:-20px;font-size:24px;padding:.5rem 1rem;z-index:2;") 4
          h5.mb-0(data-aos="fade-up") Infusión
      .col-lg-4.mb-5.mb-lg-0.pe-5
        .p-4.d-flex.align-items-center.justify-content-center.cont_figura_2_1(style="background-color:#E6F4FF;position:relative;z-index:999;")
          div(style="position:absolute;font-weight:bold;color:#fff;background-color:#00BCD4;left:-20px;top:-20px;font-size:24px;padding:.5rem 1rem;z-index:2;") 5
          h5.mb-0(data-aos="fade-up") Decocción
    .cont_5_1.mt-5.pb-5
      .row
        .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
          .p-5.cont_responsive1(data-aos="fade-right" style="background-color:#CDEDFC;width:140%;right:-30%;border-radius:40px 40px 0px 40px;box-shadow:0px 0px 20px rgba(0,0,0,.2);position:relative;z-index:2;")
            p.mb-0 Otra ciencia complementaria de la fitoquímica es la farmacognosia que se encarga del estudio de los principios activos de origen natural:
            ul.mb-0.mt-3
              li.mb-2.d-flex
                i.fas.fa-atom.mt-1.me-2(style="color:#7E5EE3;")
                | Vegetal.
              li.mb-2.d-flex
                i.fas.fa-atom.mt-1.me-2(style="color:#7E5EE3;")
                | Microbiano (bacterias, hongos).
              li.d-flex
                i.fas.fa-atom.mt-1.me-2(style="color:#7E5EE3;")
                | Animal.
        .col-lg-9(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema5/8.png" data-aos="fade-left" alt="Imagen decorativa" style="max-width:350px;margin:0 auto;")

</template>

<script>
export default {
  name: 'Tema5',
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
.tabs-c.color-secundario .tabs-c__tab--active
  font-weight: bold
.cont_circulo:before
  position: absolute
  width: 30px
  height: 30px
  border-radius: 100px;
  background-color: #FF9D00
  display: flex
  align-items: center
  justify-content: center
  font-weight: bold
  font-size: 20px
  left: -10px
  top: 30%
.cont_circulo1:before
  content: '1'
.cont_circulo2:before
  content: '2'
.cont_figura_2_1:before
  content: ''
  z-index: -1
  position: absolute
  width: 0
  height: 0
  left: -20px
  border-top: 31px solid transparent
  border-bottom: 30px solid transparent
  border-right: 20px solid #90C9F8
.cont_figura_2_1:after
  content: ''
  z-index: -1
  position: absolute
  width: 0
  height: 0
  right: -25px
  border-top: 34px solid transparent
  border-bottom: 35px solid transparent
  border-left: 25px solid #E6F4FF
.cont_5_1, .cont_5_1 *
  position: relative
.cont_5_1:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  top: 0
  left: -15%
  background: url(../assets/curso/tema5/7.png)
  background-size: cover
  background-position: center
  background-repeat: no-repeat
</style>
