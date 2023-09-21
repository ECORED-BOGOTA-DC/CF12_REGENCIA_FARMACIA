<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Definición de medicamento
    .cont_7_1.row
      .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema7/2.png" data-aos="fade-right" alt="Imagen decorativa" style="max-width:350px;margin:0 auto;")
      .col-lg-5(style="place-self:center;")
        p(data-aos="fade-up") Toda droga o mezcla de drogas, con o sin adición de sustancias auxiliares, preparada para ser presentada como formas farmacéuticas que se utiliza para la prevención, alivio, diagnóstico, tratamiento, curación o rehabilitación de las enfermedades del ser humano y de los animales.
    Separador
    .titulo-segundo
      h2#t_7_1 7.1 Clasificación de los medicamentos
    p(data-aos="fade-up") Los medicamentos pueden ser clasificados según los siguientes aspectos:
    .row.mt-5.m-auto
      .col-lg-4.mb-5.mb-lg-0.pe-5
        .p-4.d-flex.align-items-center.justify-content-center.cont_figura_2_1(style="background-color:#E6F4FF;position:relative;z-index:999;")
          div(style="position:absolute;font-weight:bold;color:#fff;background-color:#00BCD4;left:-20px;top:-20px;font-size:24px;padding:.5rem 1rem;z-index:2;") 1
          h5.mb-0(data-aos="fade-up") Origen
      .col-lg-4.mb-5.mb-lg-0.pe-5
        .p-4.d-flex.align-items-center.justify-content-center.cont_figura_2_1(style="background-color:#E6F4FF;position:relative;z-index:999;")
          div(style="position:absolute;font-weight:bold;color:#fff;background-color:#00BCD4;left:-20px;top:-20px;font-size:24px;padding:.5rem 1rem;z-index:2;") 2
          h5.mb-0(data-aos="fade-up") Nombre
      .col-lg-4.mb-5.mb-lg-0.pe-5
        .p-4.d-flex.align-items-center.justify-content-center.cont_figura_2_1(style="background-color:#E6F4FF;position:relative;z-index:999;")
          div(style="position:absolute;font-weight:bold;color:#fff;background-color:#00BCD4;left:-20px;top:-20px;font-size:24px;padding:.5rem 1rem;z-index:2;") 3
          h5.mb-0(data-aos="fade-up") Vías de administración
    p.mt-5(data-aos="fade-up") En la siguiente imagen podrán observar de manera más amplia su clasificación:
    figure.mt-5
      img(src="@/assets/curso/tema7/3.svg" data-aos="zoom-in-up" alt="Muestra diagrama con clasificación de fármacos que se detallan en la parte inferior de la imagen")
    Separador
    .titulo-segundo
      h2#t_7_2 7.2 Conceptos de farmacocinética y farmacodinamia
    .cont_7_2.row.pt-5
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema7/5.svg" data-aos="fade-right" alt="Imagen decorativa" style="max-width:350px;margin:0 auto;")
      .col-lg-1
      .col-lg-6(style="place-self:center;")
        .bg-white.p-4(style="border:4px #12263F dashed;border-radius:20px;")
          p.mb-0(data-aos="fade-up") El conocimiento de los procesos de absorción, distribución y eliminación de los fármacos y de los factores que los alteran, es esencial para la adecuada selección del preparado farmacéutico, la vía de administración, la dosis y la pauta de administración más adecuada para conseguir la máxima eficacia con el menor riesgo en un paciente concreto.
        p.mt-4(data-aos="fade-up") #[strong La farmacocinética] estudia el curso temporal de las concentraciones y cantidades de los fármacos, y de sus metabolitos en los líquidos biológicos, tejidos y excretas, así como su relación con la respuesta farmacológica y construye modelos adecuados para interpretar estos datos.
        .cajon.color-secundario.p-4.mt-4(style="background-color:#F2EEFC;")
          p.mb-0(data-aos="fade-up") Se conoce como el proceso LADME: Liberación, Absorción, Distribución, Metabolismo y Excreción. Dicho de una manera más sencilla: “Lo que el cuerpo le hace al fármaco”.
    p.mt-5(data-aos="fade-up") A continuación, se observa un esquema del proceso realizado por los fármacos administrados vía oral (proceso LADME):
    .col-lg-8.mt-5.m-auto
      figure
        img(src="@/assets/curso/tema7/6.svg" data-aos="zoom-in-up" alt="Muestra proceso de fármacos administrados via oral Fármaco  en:  Estómago Intestino delgado Intestino grueso heces Pasando por el proceso de  Absorción Distribución Metabolismo  Eliminación")
    .p-4.mt-5(style="background-color:#F7F6FE;")
      .row.col-lg-8.m-auto
        .col-lg-4.col-md-6.mb-4.mb-md-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema7/7.svg" data-aos="fade-right"  style="max-width:350px;margin:0 auto;" alt="Imagen decorativa")
        .col-lg-8.col-md-6(style="place-self:center;")
          p(data-aos="fade-up") Como apoyo adicional al esquema anterior, se invita a ver los siguientes videos ubicados en el material complementario:
          ul.fa-ul.mb-0.mt-3
            li.mb-2(data-aos="fade-up")
              i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
              | Farmacocinética: absorción y vías de administración.
            li.mb-0(data-aos="fade-up")
              i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
              | Qué es la farmacodinamia: parámetros, farmacodinamia, receptores.
    Separador
    .titulo-segundo
      h2#t_7_3 7.3 Formas farmacéuticas y tipos de productos farmacéuticos
    p(data-aos="fade-up") A continuación, se presenta un esquema general de las formas farmacéuticas y la clasificación de los diferentes productos farmacéuticos existentes:
    figure.mt-5
      img(src="@/assets/curso/tema7/8.svg" data-aos="zoom-in-up" alt="Muestra clasificación de los diferentes productos farmacéuticos existentes que se describen en la parte inferior")
    .cont_7_3.mt-5.row.pt-4
      .col-lg-4.mb-4.mb-lg-0(style="place-self:end;")
        figure
          img(src="@/assets/curso/tema7/9.svg" data-aos="fade-right" alt="Imagen decorativa" style="max-width:350px;margin:0 auto;")
      .col-lg-8
        .col-lg-6.mb-5.m-auto
          .p-2(style="background-color:#81D4FA;" data-aos="fade-up")
            p.mb-0.fw-bold.text-center Clasificación productos farmacéuticos
        .row
          .col-lg-4.col-md-6.mb-4
            .p-4.h-100.d-flex.align-items-center.justify-content-center.pt-5.pb-5(style="background-color:#00BCD4;" data-aos="fade-up")
              p.mb-0.text-white.fw-bold Fitoterapéuticos
          .col-lg-4.col-md-6.mb-4
            .p-4.h-100.d-flex.align-items-center.justify-content-center.pt-5.pb-5(style="background-color:#00BCD4;" data-aos="fade-up")
              p.mb-0.text-white.fw-bold Nutracéuticos
          .col-lg-4.col-md-6.mb-4
            .p-4.h-100.d-flex.align-items-center.justify-content-center.pt-5.pb-5(style="background-color:#00BCD4;" data-aos="fade-up")
              p.mb-0.text-white.fw-bold Biológicos
          .col-lg-4.col-md-6.mb-4
            .p-4.h-100.d-flex.align-items-center.justify-content-center.pt-5.pb-5(style="background-color:#00BCD4;" data-aos="fade-up")
              p.mb-0.text-white.fw-bold Homeopáticos
          .col-lg-4.col-md-6.mb-4
            .p-4.h-100.d-flex.align-items-center.justify-content-center.pt-5.pb-5(style="background-color:#00BCD4;" data-aos="fade-up")
              p.mb-0.text-white.fw-bold Suplementos dietarios
          .col-lg-4.col-md-6.mb-4
            .p-4.h-100.d-flex.align-items-center.justify-content-center.pt-5.pb-5(style="background-color:#00BCD4;" data-aos="fade-up")
              p.mb-0.text-white.fw-bold Biotecnológicos
          .col-lg-4.col-md-6.mb-4
            .p-4.h-100.d-flex.align-items-center.justify-content-center.pt-5.pb-5(style="background-color:#00BCD4;" data-aos="fade-up")
              p.mb-0.text-white.fw-bold Radiofármacos
          .col-lg-4.col-md-6.mb-4
            .p-4.h-100.d-flex.align-items-center.justify-content-center.pt-5.pb-5(style="background-color:#00BCD4;" data-aos="fade-up")
              p.mb-0.text-white.fw-bold Dispositivos médicos
          .col-lg-4.col-md-6.mb-4
            .p-4.h-100.d-flex.align-items-center.justify-content-center.pt-5.pb-5(style="background-color:#00BCD4;" data-aos="fade-up")
              p.mb-0.text-white.fw-bold Cosméticos
    .p-4.mt-5(style="background-color:#E6F7FE;")
      .row.col-lg-10.m-auto
        .col-lg-3.col-md-5.mb-md-0.mb-4(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema7/10.svg" data-aos="fade-right" alt="Imagen decorativa" style="max-width:350px;margin:0 auto;")
        .col-lg-9.col-md-7.mb-md-0.mb-4(style="place-self:center;")
          p(data-aos="fade-up") Para estudiar las formas farmacéuticas y los productos farmacéuticos que existen, se debe consultar el documento de apoyo “Formas farmacéuticas”.
          a.anexo.mt-3.bg-white(:href="obtenerLink('downloads/Anexo5_CF012_Formas_farmaceuticas.pptx')" target="_blank" data-aos="zoom-in-up")
            .anexo__icono
              img(src="@/assets/template/icono-ppt.svg")
            .anexo__texto
              p.fw-bold.mb-0 Anexo. Formas farmaceuticas
   
</template>

<script>
export default {
  name: 'Tema7',
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
.cont_7_1, .cont_7_1 *
  position: relative
.cont_7_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema7/1.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
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
.cont_7_2, .cont_7_2 *
  position: relative
.cont_7_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema7/4.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
.cont_7_3, .cont_7_3 *
  position: relative
.cont_7_3:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  top: 0
  background-color: #F5F2FD
</style>
