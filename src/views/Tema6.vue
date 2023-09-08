<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Farmacología
    
    .row
      .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Para dar inicio a la temática relacionada con la farmacología, es importante iniciar con su definición:
        .cajon.color-secundario.p-4.mt-4(style="background-color:#F2EEFC;")
          p.mb-0(data-aos="fade-up") Rama de la medicina, la biología y las ciencias farmacéuticas que estudia la historia, el origen, las propiedades biofisicoquímicas, la presentación, los efectos fisiológicos, los mecanismos de acción, la absorción, la distribución, la biotransformación, la excreción y el uso terapéutico, entre otras actividades biológicas, de las sustancias químicas que interactúan con los organismos vivos. La farmacología estudia cómo interactúa el fármaco con el organismo, sus acciones, efectos y propiedades. En un sentido más estricto, se considera la farmacología como el estudio de los fármacos, sea que esas tengan efectos beneficiosos o bien tóxicos. La farmacología tiene aplicaciones clínicas cuando las sustancias son utilizadas en el diagnóstico, prevención y tratamiento de una enfermedad o para el alivio de sus síntomas (Brunton, Lazo y Parker, 2006).  
      .col-lg-6(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema6/1.png" data-aos="fade-left" alt="Imagen decorativa")
    
    p.mt-5(data-aos="fade-up") Se abordará la farmacología desde dos campos generales:

    .row.mt-5.m-auto
      .col-lg-4.mb-5.mb-lg-0.pe-5
        .p-4.d-flex.align-items-center.justify-content-center.cont_figura_2_1(style="background-color:#E6F4FF;position:relative;z-index:999;")
          div(style="position:absolute;font-weight:bold;color:#fff;background-color:#00BCD4;left:-20px;top:-20px;font-size:24px;padding:.5rem 1rem;z-index:2;") 1
          h5.mb-0(data-aos="fade-up") La farmacología general.
      .col-lg-4.mb-5.mb-lg-0.pe-5
        .p-4.d-flex.align-items-center.justify-content-center.cont_figura_2_1(style="background-color:#E6F4FF;position:relative;z-index:999;")
          div(style="position:absolute;font-weight:bold;color:#fff;background-color:#00BCD4;left:-20px;top:-20px;font-size:24px;padding:.5rem 1rem;z-index:2;") 2
          h5.mb-0(data-aos="fade-up") La farmacología especial.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_6_1 6.1 Farmacología general
    
    p(data-aos="fade-up") A continuación, se encuentran algunas de las definiciones más relevantes y relacionadas con la farmacología, que serán utilizadas durante el desarrollo del presente tema.

    .titulo-sexto.color-acento-botones.mt-5
      h5.d-block Tabla 4
      span #[em Términos más importantes de la farmacología ]
    
    .tabla-a.color-acento-botones.mt-5
      table
        tbody
          tr(style="background-color:#f6f6f6;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Droga
            td.p-4(style="border:0;") Agente químico biológicamente activo.
          tr(style="background-color:#fff;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Fármaco o principio activo
            td.p-4(style="border:0;") Sustancia con propiedades biológicas (droga) susceptible de aplicación terapéutica.
          tr(style="background-color:#f6f6f6;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Forma farmacéutica
            td.p-4(style="border:0;") Aspecto del medicamento acabado: tableta, cápsula, crema, etc.
          tr(style="background-color:#fff;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Excipiente o vehículo
            td.p-4(style="border:0;") Sustancia farmacológicamente inerte a las concentraciones presentes en la forma farmacéutica que se usa para dar las características convenientes para su presentación, conservación, aceptabilidad, fácil administración, absorción.
          tr(style="background-color:#f6f6f6;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Medicamento
            td.p-4(style="border:0;") Preparado farmacéutico constituido por el fármaco y sus excipientes. Hacen parte de él: envases, rótulos, etiquetas y empaques.
          tr(style="background-color:#fff;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Placebo
            td.p-4(style="border:0;") Sustancia inerte (lactosa, almidón) disfrazada de medicamento con el fin de explorar los efectos psicológicos de un tratamiento.
          tr(style="background-color:#f6f6f6;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Farmacología
            td.p-4(style="border:0;") Ciencia que estudia la actividad de los fármacos. La farmacología clínica estudia dicha actividad en el hombre.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_6_2 6.2 Disciplinas de la farmacología
    
    p(data-aos="fade-up") La farmacología tiene diferentes ramas de estudio de las que se destacan las siguientes:

    .tarjeta.tarjeta--gris.p-4.pt-1
      PasosB.color-acento-contenido.mt-5
        .row(titulo="")
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/2.png' alt="Imagen decorativa")
          .col-lg-6
            h3 Farmacognosia
            p Estudia el origen, caracteres estructura anatómica y química de las drogas naturales.
        .row(titulo="")
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/3.png' alt="Imagen decorativa")
          .col-lg-6
            h3 Farmacocinética
            p Estudia la absorción, distribución, biotransformación y la eliminación de las drogas.
            .mt-4
              i.fas.fa-quote-left.w-100(style="color:#00BCD4;font-size:26px;")
              h2.w-100.ps-5.pe-5.mb-0 “Es todo lo que el organismo ejerce sobre los fármacos”.
              .text-end
                i.fas.fa-quote-right.w-100(style="color:#00BCD4;font-size:26px;")
        .row(titulo="")
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/4.png' alt="Imagen decorativa")
          .col-lg-6
            h3 Farmacodinamia
            p Es el estudio de los efectos bioquímicos, fisiológicos y los mecanismos de acción de los fármacos.
            .mt-4
              i.fas.fa-quote-left.w-100(style="color:#00BCD4;font-size:26px;")
              h2.w-100.ps-5.pe-5.mb-0 “Es todo lo que los fármacos ejercen sobre el organismo”.
              .text-end
                i.fas.fa-quote-right.w-100(style="color:#00BCD4;font-size:26px;")
        .row(titulo="")
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/5.png' alt="Imagen decorativa")
          .col-lg-6
            h3 Farmacotecnia
            p Tiene que ver con la preparación y distribución de las drogas.
        .row(titulo="")
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/6.png' alt="Imagen decorativa")
          .col-lg-6
            h3 Farmacoterapia
            p Se ocupa del uso de fármacos destinados a evitar y tratar enfermedades.
        .row(titulo="")
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/7.png' alt="Imagen decorativa")
          .col-lg-6
            h3 Farmacología clínica
            p Estudia las acciones farmacológicas en el ser humano sano o enfermo, así como la evaluación de las drogas en el tratamiento de las enfermedades.
        .row(titulo="")
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/8.png' alt="Imagen decorativa")
          .col-lg-6
            h3 Farmacología molecular
            p Estudia las interacciones del fármaco con el organismo.
        .row(titulo="")
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/9.png' alt="Imagen decorativa")
          .col-lg-6
            h3 Toxicología
            p Estudia los venenos y los efectos adversos de los medicamentos.
        .row(titulo="")
          .col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema6/10.png' alt="Imagen decorativa")
          .col-lg-6
            h3 Farmacometría
            p Estudia la relación que existe entre la dosis administrada de un fármaco y la magnitud del resultado obtenido.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_6_3 6.3 Tipos de acción farmacológica 
    
    p(data-aos="fade-up") Para entender qué tipo de acciones realizan los fármacos de forma general, a continuación, se define cada una de estas características.

    TabsA.color-acento-contenido.mt-5
      .tarjeta.color-secundario--borde.p-4(titulo="Estimulación")
        .row
          .col-lg-5.mb-4.mb-lg-0
            h4 Estimulación
            p #[strong Aumento de la función] de las células de un órgano o sistema del organismo.
          .col-lg-7
            figure
              img(src="@/assets/curso/tema6/11.png" alt="Imagen decorativa")
      .tarjeta.color-secundario--borde.p-4(titulo="Depresión")
        .row
          .col-lg-5.mb-4.mb-lg-0
            h4 Depresión
            p #[strong Disminución de la función] de las células de un órgano o sistema del organismo.
          .col-lg-7
            figure
              img(src="@/assets/curso/tema6/12.png" alt="Imagen decorativa")
      .tarjeta.color-secundario--borde.p-4(titulo="Irritación")
        .row
          .col-lg-5.mb-4.mb-lg-0
            h4 Irritación
            p #[strong Estimulación violenta] de las células, órgano y sistema con alteraciones de la nutrición, crecimiento y morfología de las células.
          .col-lg-7
            figure
              img(src="@/assets/curso/tema6/13.png" alt="Imagen decorativa")
      .tarjeta.color-secundario--borde.p-4(titulo="Reemplazo")
        .row
          .col-lg-5.mb-4.mb-lg-0
            h4 Reemplazo
            p #[strong Sustitución de una secreción] que falta en el organismo por la hormona correspondiente.
          .col-lg-7
            figure
              img(src="@/assets/curso/tema6/14.png" alt="Imagen decorativa")
      .tarjeta.color-secundario--borde.p-4(titulo="Antiinfecciosa")
        .row
          .col-lg-5.mb-4.mb-lg-0
            h4 Antiinfecciosa
            p #[strong Atenuar o destruir] a los microorganismos productores de infecciones en el ser humano.
          .col-lg-7
            figure
              img(src="@/assets/curso/tema6/15.png" alt="Imagen decorativa")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_6_4 6.4 Nomenclatura
    
    p(data-aos="fade-up") Los fármacos pueden ser nombrados de diferentes formas, como se muestra en la siguiente tabla:

    .titulo-sexto.color-acento-botones.mt-5
      h5.d-block Tabla 5
      span #[em Nombres de fármacos]
    
    .tabla-a.color-acento-botones.mt-4
      table
        tbody
          tr(style="background-color:#fff;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Químico
            td.p-4(style="border:0;") Hace referencia a la estructura química y es utilizado principalmente en el sistema internacional (Clasificación Anatómica y Terapéutica ATC).
          tr(style="background-color:#f6f6f6;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") DDD
            td.p-4(style="border:0;") Dosis diaria definida, es el complemento de la clasificación ATC que sirve para presentación de estadística de consumo y utilización, así como para la investigación.
          tr(style="background-color:#fff;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Genérico
            td.p-4(style="border:0;") Denominación común internacional-DCI, es el nombre universal designado por expertos de la OMS.
          tr(style="background-color:#f6f6f6;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Comercial
            td.p-4(style="border:0;") Nombre propuesto por el fabricante equivalente a la marca registrada del medicamento; puede estar conformado por uno o varios fármacos.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_6_5 6.5 Información técnica de los medicamentos
    
    p(data-aos="fade-up") El medicamento cuenta con una información técnica que es de suma importancia para su identificación y manejo. A continuación, se puede observar esta información mediante un ejemplo donde se podrá identificar cada una de ellas:

    .col-lg-4.mt-5.m-auto
      ImagenInfografica.color-acento-botones.infografia1
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema6/16.svg' data-aos="zoom-in-up" alt="Muestra frasco de medicamento con la siguiente información: 1. Nombre comercial 2. Nombre genérico 3. Cantidad de unidades que contiene el envase 4. Vía de administración 5. Composición y cantidad de medicamento por unidad 6. Excipiente 7. Número de registro sanitario 8. Información sobre la forma de conservarlo 9. No.de lote 10. Fecha de vencimiento o caducidad 11. Nombre del laboratorio fabricante 12. Protección de identificación")
        .tarjeta.color-acento-botones.p-3(x="-3%" y="25%" numero="1" style="background-color:#E0D9F6;border-radius:0px;")
          p.mb-0(style="color:#12263F;") Nombre comercial
        .tarjeta.color-acento-botones.p-3(x="-3%" y="35%" numero="2" style="background-color:#E0D9F6;border-radius:0px;")
          p.mb-0(style="color:#12263F;") Nombre genérico
        .tarjeta.color-acento-botones.p-3(x="-3%" y="45%" numero="3" style="background-color:#E0D9F6;border-radius:0px;")
          p.mb-0(style="color:#12263F;") Composición y cantidad de medicamento por unidad
        .tarjeta.color-acento-botones.p-3(x="-3%" y="54.5%" numero="4" style="background-color:#E0D9F6;border-radius:0px;")
          p.mb-0(style="color:#12263F;") Excipiente
        .tarjeta.color-acento-botones.p-3(x="-3%" y="65.5%" numero="5" style="background-color:#E0D9F6;border-radius:0px;")
          p.mb-0(style="color:#12263F;") Número de registro sanitario
        .tarjeta.color-acento-botones.p-3(x="-3%" y="75%" numero="6" style="background-color:#E0D9F6;border-radius:0px;")
          p.mb-0(style="color:#12263F;") Cantidad de unidades que contiene el envase
        .tarjeta.color-acento-botones.p-3(x="-3%" y="84.5%" numero="7" style="background-color:#E0D9F6;border-radius:0px;")
          p.mb-0(style="color:#12263F;") Vía de administración
        .tarjeta.color-acento-botones.p-3(x="-3%" y="94.5%" numero="8" style="background-color:#E0D9F6;border-radius:0px;")
          p.mb-0(style="color:#12263F;") Información sobre la forma de conservarlo
        .tarjeta.color-acento-botones.p-3(x="93%" y="49%" numero="9" style="background-color:#E0D9F6;border-radius:0px;")
          p.mb-0(style="color:#12263F;") Nombre del laboratorio fabricante
        .tarjeta.color-acento-botones.p-3(x="99%" y="77%" numero="10" style="background-color:#E0D9F6;border-radius:0px;")
          p.mb-0(style="color:#12263F;") Fecha de vencimiento o caducidad
        .tarjeta.color-acento-botones.p-3(x="93%" y="88%" numero="11" style="background-color:#E0D9F6;border-radius:0px;")
          p.mb-0(style="color:#12263F;") No.de lote
        .tarjeta.color-acento-botones.p-3(x="91%" y="17%" numero="12" style="background-color:#E0D9F6;border-radius:0px;")
          p.mb-0(style="color:#12263F;") Protección de identificación











      
    
   
</template>

<script>
export default {
  name: 'Tema6',
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
.infografia1 .img-infografica__item__numero, .img-infografica-b__item__numero
  right: 55%
  left: 70%
.infografia1 .img-infografica__item__dot, .img-infografica-b__item__dot
  width: 28px
  height: 28px
.infografia1.img-infografica.color-acento-botones .img-infografica__item__numero, .img-infografica-b.color-acento-botones .img-infografica__item__numero
  color: #12263F
</style>
