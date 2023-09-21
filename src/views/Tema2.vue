<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Anatomía y fisiología
    .cont_2_1.row.p-4.pb-5
      .col-lg-1
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/2.png" data-aos="fade-right" alt="Imagen decorativa" style="max-width:350px;margin:0 auto;")
      .col-lg-3(style="place-self:center;")
        .p-4.cont_responsive2(data-aos="fade-left" style="background-color:#fff;width:170%;left:-70%;right: 0;border-radius:40px 40px 40px 0px;box-shadow:0px 0px 20px rgba(0,0,0,.2);position:relative;z-index:2;")
          p Son dos ramas de la ciencia que proveen las bases necesarias para aprender con respecto a las estructuras y las funciones del cuerpo humano.
          p.mt-4.p-3(style="border:2px #12263F dashed;border-radius:10px;") Anatomía. – (Ana -de #[em aná], a través, y tomia de #[em tomée], corte). Es la ciencia de las estructuras corporales y las relaciones entre ellas.
          p.mt-4.p-3(style="border:2px #12263F dashed;border-radius:10px;") Fisiología. – (Fisio. -de #[em physis], naturaleza, y #[em logia], de #[em logos], estudios). Es la ciencia que estudia las funciones corporales, es decir, cómo funcionan las distintas partes del cuerpo.
    Separador
    .titulo-segundo
      h2#t_2_1 2.1 Niveles de organización estructural
    p(data-aos="fade-up") El cuerpo está organizado en niveles de organización que son:
    br
    .row.mt-4.m-auto
      .col-lg.mb-5.mb-lg-0.pe-5
        .p-4.d-flex.align-items-center.justify-content-center.cont_figura_2_1(style="background-color:#E6F4FF;position:relative;z-index:999;")
          div(style="position:absolute;font-weight:bold;color:#fff;background-color:#00BCD4;left:-20px;top:-20px;font-size:24px;padding:.5rem 1rem;z-index:2;") 1
          h5.mb-0(data-aos="fade-up") Nivel químico (C, H, O, N, P)
      .col-lg.mb-5.mb-lg-0.pe-5
        .p-4.d-flex.align-items-center.justify-content-center.cont_figura_2_1(style="background-color:#E6F4FF;position:relative;z-index:999;")
          div(style="position:absolute;font-weight:bold;color:#fff;background-color:#00BCD4;left:-20px;top:-20px;font-size:24px;padding:.5rem 1rem;z-index:2;") 2
          h5.mb-0(data-aos="fade-up") Nivel celular
      .col-lg.mb-5.mb-lg-0.pe-5
        .p-4.d-flex.align-items-center.justify-content-center.cont_figura_2_1(style="background-color:#E6F4FF;position:relative;z-index:999;")
          div(style="position:absolute;font-weight:bold;color:#fff;background-color:#00BCD4;left:-20px;top:-20px;font-size:24px;padding:.5rem 1rem;z-index:2;") 3
          h5.mb-0(data-aos="fade-up") Nivel tisular
    .row.m-auto.mt-lg-5
      .col-lg.mb-5.mb-lg-0.pe-5
        .p-4.d-flex.align-items-center.justify-content-center.cont_figura_2_1(style="background-color:#E6F4FF;position:relative;z-index:999;")
          div(style="position:absolute;font-weight:bold;color:#fff;background-color:#00BCD4;left:-20px;top:-20px;font-size:24px;padding:.5rem 1rem;z-index:2;") 4
          h5.mb-0(data-aos="fade-up") Nivel de órganos
      .col-lg.mb-5.mb-lg-0.pe-5
        .p-4.d-flex.align-items-center.justify-content-center.cont_figura_2_1(style="background-color:#E6F4FF;position:relative;z-index:999;")
          div(style="position:absolute;font-weight:bold;color:#fff;background-color:#00BCD4;left:-20px;top:-20px;font-size:24px;padding:.5rem 1rem;z-index:2;") 5
          h5.mb-0(data-aos="fade-up") Nivel de aparatos y sistemas
      .col-lg.mb-5.mb-lg-0.pe-5
        .p-4.d-flex.align-items-center.justify-content-center.cont_figura_2_1(style="background-color:#E6F4FF;position:relative;z-index:999;")
          div(style="position:absolute;font-weight:bold;color:#fff;background-color:#00BCD4;left:-20px;top:-20px;font-size:24px;padding:.5rem 1rem;z-index:2;") 6
          h5.mb-0(data-aos="fade-up") Nivel de órganos
    p.mt-5(data-aos="fade-up") En la siguiente imagen se podrán observar la secuencia de este nivel de organización, que va desde lo más básico hasta lo más complejo:
    .col-lg-10.mt-5.m-auto
      figure
        img(src="@/assets/curso/tema2/3.svg" data-aos="zoom-in-up" alt="Muestra secuencia nivel estructural: átomo, molécula, macromolécula, organelo celular, célula, tejido, órgano, sistema  e individuo u organismo pluricelular")
    Separador
    .titulo-segundo
      h2#t_2_2 2.2 Características del órgano humano vivo
    p(data-aos="fade-up") Existen procesos que sirven para diferenciar a un cuerpo vivo de los inanimados. Los procesos vitales del cuerpo son:
    .cont_2_2.mt-5.pb-5
      .row.col-lg-10.m-auto.cont_2_3.p-4
        .col-lg-11.m-auto.row
          .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
            ul.lista-ul.mb-0
              li(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Metabolismo.
              li(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Respuesta.
              li(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Movimiento.
              li(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Crecimiento.
              li(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Diferenciación.
              li(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Reproducción.
              li(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Homeóstasis.
              li.mb-0(data-aos="fade-up")
                i.fas.fa-atom(style="color:#7E5EE3;")
                | Sistemas de retroalimentación.
          .col-lg-5.text-center(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/5.svg" data-aos="zoom-in-up" alt="Imagen decorativa" style="max-width:350px;margin:0 auto;")
    Separador
    .titulo-segundo
      h2#t_2_3 2.3 Terminología
    .bloque-texto-a.color-secundario
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema2/6.svg" data-aos="fade-right" alt="Imagen decorativa" style="max-width:350px;margin:0 auto;")
        .col-lg-8
          .bloque-texto-a__texto.p-4.pt-5.pb-5
            p.mb-0(data-aos="fade-up") Para comprender los temas que se tratarán más adelante, es importante conocer e interiorizar la terminología básica relacionada con la anatomía y la fisiología.
    p.mt-5(data-aos="fade-up") En la siguiente tabla se consignan dichos términos con las respectivas definiciones.
    .titulo-sexto.color-acento-botones.mt-5
      h5.d-block Tabla 2
      span #[em Terminología de anatomía y fisiología]
    .tabla-a.color-acento-botones.mt-5
      table
        tbody
          tr(style="background-color:#F6F6F6;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Órgano
            td.p-4(style="border:0;") Unión de tejidos que forman una unidad funcional especializada para realizar una función determinada.
          tr(style="background-color:#fff;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Anatomía
            td.p-4(style="border:0;") Ciencia que estudia la estructura, forma y relaciones de las diferentes partes del cuerpo de los seres vivos.
          tr(style="background-color:#F6F6F6;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Cuerpo
            td.p-4(style="border:0;") Conjunto de las partes que conforman un ser vivo.
          tr(style="background-color:#fff;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Tejido
            td.p-4(style="border:0;") Grupo de células que constituyen y forman estructuras definidas.
          tr(style="background-color:#F6F6F6;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Célula
            td.p-4(style="border:0;") Unidad fundamental que puede vivir por sí sola y que forma todos los organismos vivos y los tejidos del cuerpo.
          tr(style="background-color:#fff;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Fisiología
            td.p-4(style="border:0;") Estudio de las funciones que realizan los órganos y sistemas de los seres vivos.
          tr(style="background-color:#F6F6F6;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Morfología
            td.p-4(style="border:0;") Disciplina encargada del estudio de la estructura de un organismo o sistema y sus características.
          tr(style="background-color:#fff;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Distal
            td.p-4(style="border:0;") Que está más distante del eje o línea media del organismo, o del arranque de un miembro u otro órgano.
          tr(style="background-color:#F6F6F6;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Proximal
            td.p-4(style="border:0;") Que está más próximo al eje o línea media del organismo, o del arranque de un miembro u otro órgano.
          tr(style="background-color:#fff;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Craneal
            td.p-4(style="border:0;") Relacionado con el cráneo.
          tr(style="background-color:#F6F6F6;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Piel
            td.p-4(style="border:0;") Capa de tejido resistente y flexible que cubre y protege el cuerpo del ser humano y de los animales.
          tr(style="background-color:#fff;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Óseo
            td.p-4(style="border:0;") Relacionado con el hueso.
          tr(style="background-color:#F6F6F6;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Muscular
            td.p-4(style="border:0;") Relacionado con el músculo.
          tr(style="background-color:#fff;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Glándula
            td.p-4(style="border:0;") Órgano que elabora y segrega sustancias necesarias para el funcionamiento del organismo o que han de ser eliminadas por este.
          tr(style="background-color:#F6F6F6;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Tendinoso
            td.p-4(style="border:0;") Relacionado con el tendón, que son fibras que unen los músculos a los huesos.
          tr(style="background-color:#fff;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Cartilaginoso
            td.p-4(style="border:0;") Relacionado con los cartílagos, que son tejidos firmes, pero flexibles, que cubren los extremos de los huesos en una articulación.
          tr(style="background-color:#F6F6F6;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Membranas
            td.p-4(style="border:0;") Estructura fina encargada de permitir o bloquear la entrada de sustancias en la célula.
          tr(style="background-color:#fff;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Meninge
            td.p-4(style="border:0;") Capa que recubre el cerebro.
          tr(style="background-color:#F6F6F6;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Intestino delgado
            td.p-4(style="border:0;") Órgano en forma de tubo largo que conecta el estómago con el intestino grueso.
          tr(style="background-color:#fff;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Intestino grueso
            td.p-4(style="border:0;") Órgano largo, con forma de tubo que se conecta con el intestino delgado por un extremo y con el ano por el otro. El intestino grueso tiene cuatro partes: conducto del ciego, colon, recto y ano.
          tr(style="background-color:#F6F6F6;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Colon
            td.p-4(style="border:0;") Parte más larga del intestino grueso (órgano con forma de tubo que se conecta con el intestino delgado por un extremo y con el ano por el otro).
          tr(style="background-color:#fff;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Riñones
            td.p-4(style="border:0;") Órgano glandular situado en la región lumbar que tiene la función de segregar la orina.
          tr(style="background-color:#F6F6F6;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Corazón
            td.p-4(style="border:0;") Órgano central de la circulación de la sangre, que en los animales inferiores es la simple dilatación de un vaso y en los superiores es musculoso, contráctil y tiene dos, tres o cuatro cavidades.
          tr(style="background-color:#fff;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Pulmones
            td.p-4(style="border:0;") Órgano de la respiración de los animales vertebrados en el que se realiza el intercambio gaseoso entre el aire y la sangre; en el ser humano son dos, situados en la cavidad torácica uno al lado del otro, blandos y esponjosos, y durante la respiración se contraen y se dilatan.
          tr(style="background-color:#F6F6F6;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Hígado
            td.p-4(style="border:0;") Uno de los órganos más importantes en cuanto a la actividad metabólica del organismo, regula la mayoría de los niveles de sustancias químicas de la sangre y secreta una sustancia denominada bilis, que ayuda a transportar los desechos desde el hígado.
          tr(style="background-color:#fff;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Cerebro
            td.p-4(style="border:0;") Es la porción más grande del encéfalo y está formada por dos hemisferios (o mitades). El cerebro controla los movimientos voluntarios, el habla, la inteligencia, la memoria, las emociones y procesa la información que recibe a través de los sentidos.
          tr(style="background-color:#F6F6F6;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Cerebelo
            td.p-4(style="border:0;") Parte posterior del encéfalo, constituida por una masa de tejido nervioso y que se encarga de la coordinación muscular y otros movimientos no controlados por la voluntad.
          tr(style="background-color:#fff;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Médula espinal
            td.p-4(style="border:0;") Cordón de tejido nervioso situado en el interior de la columna vertebral; es un centro importante de movimientos reflejos y comunica el encéfalo con los órganos sensoriales y motores.

</template>

<script>
export default {
  name: 'Tema2',
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
.cont_2_1, .cont_2_1 *
  position: relative
.cont_2_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema2/1.png)
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
.cont_2_2, .cont_2_2 *
  position: relative
.cont_2_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema2/4.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
.cont_2_3, .cont_2_3 *
  position: relative
.cont_2_3:before
  content: ''
  position: absolute
  background-color: rgba(126,94,227,.06)
  left: 0
  width: 100%
  height: 75%
  top: 15%
  border-radius: 30px
.bloque-texto-a.color-secundario
  background-color: #F6F6F6
</style>
