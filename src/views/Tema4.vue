<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Bioquímica
    
    .row.cont_4_1
      .col-lg-1
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Es el estudio de la química, lo que se relaciona con ella y con los organismos biológicos. Forma un puente entre la química y la biología al estudiar cómo tienen lugar las estructuras y las reacciones químicas complejas que dan lugar a la vida y a los procesos químicos de los seres vivos.
      .col-lg-1
      .col-lg-3(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema4/2.png" data-aos="fade-left")
    
    p.mt-5(data-aos="fade-up") A continuación, se puede observar de manera general la definición, objetivos de estudio y enfoque de la bioquímica:

    .mt-5.tarjeta.tarjeta--gris.p-4(style="border-radius:0px;background-color:#DEE4F0;")
      SlyderA
        div
          .col-8.m-auto
            figure
              img(src="@/assets/curso/tema4/3.svg")
            figcaption.mt-4.fw-normal(style="background-color:transparent;") #[strong Nota:] Estructura general
        div
          .col-8.m-auto
            figure
              img(src="@/assets/curso/tema4/4.svg")
            figcaption.mt-4.fw-normal(style="background-color:transparent;") #[strong Nota:] Generalidades
        div
          .col-lg-8.m-auto
            .bg-white.p-4(style="border-radius:15px;border:4px #12263F dashed;")
              ul.fa-ul.mb-0
                li.mb-2
                  i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                  | La OMS define la salud como: “El estado de bienestar físico, mental y social completo”.
                li.mb-0
                  i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                  | Desde el punto de vista de la bioquímica, la salud se puede definir así:
            .text-end
              figure
                img(src="@/assets/curso/tema4/5.svg" style="max-width:300px;display:inline;position:relative;margin-right:20px;margin-top:-20px;")
            figure.mt-4
              img(src="@/assets/curso/tema4/6.svg")
            figcaption.mt-4.fw-normal(style="background-color:transparent;") #[strong Nota:] Relación con la medicina y la salud.
        div
          .col-10.m-auto
            figure
              img(src="@/assets/curso/tema4/7.png")
            figcaption.mt-4.fw-normal(style="background-color:transparent;") #[strong Nota:]  Las enfermedades tienen una base bioquímica, ya que se producen por las alteraciones en las micro y macromoléculas.
        div
          .col-7.m-auto
            figure
              img(src="@/assets/curso/tema4/8.svg")
            figcaption.mt-4.fw-normal(style="background-color:transparent;") #[strong Nota:] Las enfermedades tienen una base bioquímica, ya que se producen por las alteraciones en las micro y macromoléculas.
    
    .row.mt-5
      .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
        .p-4.cont_responsive1(data-aos="fade-right" style="background-color:#CDEDFC;width:100%;right:-20%;border-radius:40px 40px 0px 40px;box-shadow:0px 0px 20px rgba(0,0,0,.2);position:relative;z-index:2;")
          p.mb-0.mt-4.mb-4 Así mismo, es importante identificar los principales elementos y compuestos químicos del cuerpo humano, con el objetivo de entender los diferentes procesos que este realiza para desarrollar sus funciones de forma equilibrada y en completa armonía.
      .col-lg-7(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema4/9.png" data-aos="fade-left")
    
    p.mt-5(data-aos="fade-up") A continuación, se muestran los componentes (biomoléculas) más importantes para que dichos procesos se lleven a cabo y sus funciones en el organismo.

    .titulo-sexto.color-acento-botones.mt-5
      h5.d-block Tabla 3
      span #[em Importancia de las biomoléculas en el organismo]
    
    .tabla-a.color-acento-botones.mt-4
      table
        tbody
          tr(style="background-color:#fff;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Lípidos
            td.p-4(style="border:0;") 
              ul.fa-ul.mb-0
                li.mb-2
                  i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                  | Reserva energética.
                li.mb-2
                  i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                  | Principal componente de la estructura de la membrana celular.
                li.mb-2
                  i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                  | Funciones reguladoras y señalizadoras.
          tr(style="background-color:#F6F6F6;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Proteínas
            td.p-4(style="border:0;")
              ul.fa-ul.mb-0
                li.mb-2
                  i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                  | Estructura (formación del colágeno y la queratina).
                li.mb-2
                  i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                  | Regulación de la insulina y la hormona del crecimiento.
                li.mb-2
                  i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                  | Transporte de la hemoglobina.
                li.mb-2
                  i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                  | Sistema de defensa del cuerpo (anticuerpos).
                li.mb-2
                  i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                  | Catalizadoras de reacciones químicas del cuerpo (aceleran o inhiben las reacciones).
                li.mb-2
                  i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                  | Contracción muscular.
          tr(style="background-color:#fff;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Ácidos nucleicos
            td.p-4(style="border:0;") 
              ul.fa-ul.mb-0
                li.mb-2
                  i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                  | Dirigir la síntesis de proteínas. 
                li.mb-2
                  i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                  | Transmitir la información hereditaria.
          tr(style="background-color:#f6f6f6;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Carbohidratos
            td.p-4(style="border:0;") 
              ul.fa-ul.mb-0
                li
                  i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                  | Fuente principal de energía para las funciones del cuerpo humano.
    
    p.mt-5(data-aos="fade-up") Como apoyo, y para complementar esta información, se invita al aprendiz a consultar los procesos de cada uno de los bioelementos en los siguientes videos ubicados en el material complementario:

    .tarjeta-avatar-b.mt-5.col-lg-8.m-auto
      .tarjeta-avatar-b__img
        img(src='@/assets/curso/tema4/10.svg')
      .tarjeta.tarjeta.d-flex.align-items-center(style="background-color:#F1EEFC;border-radius:70px;")
        .p-4
          p.mb-0(data-aos="fade-up") #[em Introducción al metabolismo de carbohidratos.]
    
    .tarjeta-avatar-b.mt-4.col-lg-8.m-auto
      .tarjeta-avatar-b__img
        img(src='@/assets/curso/tema4/11.svg')
      .tarjeta.tarjeta.d-flex.align-items-center(style="background-color:#F1EEFC;border-radius:70px;")
        .p-4
          p.mb-0(data-aos="fade-up") #[em Metabolismo de los ácidos nucleicos.]
    
    .tarjeta-avatar-b.mt-4.col-lg-8.m-auto
      .tarjeta-avatar-b__img
        img(src='@/assets/curso/tema4/12.svg')
      .tarjeta.tarjeta.d-flex.align-items-center(style="background-color:#F1EEFC;border-radius:70px;")
        .p-4
          p.mb-0(data-aos="fade-up") #[em Síntesis de proteínas: transcripción y traducción. Nivel principiante.]


    
   
</template>

<script>
export default {
  name: 'Tema4',
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
.cont_4_1, .cont_4_1 *
  position: relative
.cont_4_1:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  top: 0
  left: -15%
  background: url(../assets/curso/tema4/1.png)
  background-size: 700px
  background-position: right
  background-repeat: no-repeat
</style>
