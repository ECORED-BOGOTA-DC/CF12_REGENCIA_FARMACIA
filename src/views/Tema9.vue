<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Plantas medicinales
    
    .row.cont_9_1
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") En Colombia existen más de 700 plantas medicinales aprobadas para su uso y comercialización.
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto.d-flex
            i.fas.fa-quote-left
            h3.mb-0.mt-3 Una planta medicinal es aquella que, en uno o más de sus órganos, contiene sustancias que pueden ser utilizadas con fines terapéuticos o preventivos o que son precursores para la semisíntesis químico-farmacéutica
            i.fas.fa-quote-right(style="align-self:end;")
          p.mb-0.fw-bold.d-block.text-end.mt-3.pe-5 (OMS). 
      .col-lg-4(style="place-self:center;")
        figure.col-7.m-auto.text-center
          img(src="@/assets/curso/tema9/1.png" data-aos="fade-left" style="display:inline;" alt="Imagen decorativa")
    
    p.mt-5(data-aos="fade-up") A continuación, se pueden observar algunas de las características importantes de las plantas medicinales, sus beneficios, impactos positivos que tienen, según Hernández y López (s.f.):

    .tarjeta.tarjeta--azul.p-5.mt-5(style="background-color:#E2EFFB;")
      SlyderA(tipo="b")
        .row
          .col-lg-7.mb-4.mb-lg-0
            h4 Plantas medicinales
            p.mt-3 La medicina tradicional está presente en todas las culturas del mundo. Se la define como el conjunto de todos los conocimientos y prácticas usadas en la prevención, diagnóstico y eliminación de desequilibrios físicos, mentales o sociales, y confiado exclusivamente en experiencia práctica, observación y transmitido de generación a generación en forma oral o escrita.
            p.mt-4 Las plantas han sido usadas como medicina alrededor del mundo por milenios: fueron la medicina original en todas las culturas y en las civilizaciones más grandes.
            p.mt-4 Las plantas medicinales juegan un papel muy importante. En 1977 la Organización Mundial de la Salud (OMS) adoptó una resolución para la promoción mundial de la medicina tradicional. Dicha resolución insta a los gobiernos miembros a dar importancia a sus sistemas médicos tradicionales.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema9/2.png" alt="Imagen decorativa")
        .row
          .col-lg-7.mb-4.mb-lg-0
            h4 ¿Qué es una planta medicinal?
            p.mt-3 De acuerdo con la OMS (1979), una planta medicinal es definida como cualquier especie vegetal que contiene sustancias que pueden ser empleadas para propósitos terapéuticos o cuyos principios activos pueden servir de precursores para la síntesis de nuevos fármacos. Estas plantas también tienen importantes aplicaciones en la medicina moderna. Entre otras, son fuente directa de agentes terapéuticos, se emplean como materia prima para la fabricación de medicamentos semisintéticos más complejos, la estructura química de sus principios activos puede servir de modelo para la elaboración de drogas sintéticas y tales principios se pueden utilizar como marcadores taxonómicos en la búsqueda de nuevos medicamentos.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema9/3.png" alt="Imagen decorativa")
        .row
          .col-lg-7.mb-4.mb-lg-0
            h4 Medicina tradicional y moderna
            p.mt-3 Una de las diferencias principales entre la medicina tradicional y la moderna es la protección legal otorgada al conocimiento. Históricamente, los curanderos han compartido sus conocimientos y experiencias sin restricciones, definiendo el 'acceso libre' incluso antes de que existiera el término. En cambio, la medicina moderna está sujeta a rigurosas leyes de protección de la propiedad intelectual y cuenta con un sistema de patentes muy desarrollado que se utiliza para proteger el conocimiento de los fármacos o las técnicas médicas. Más allá de la sostenibilidad de recursos naturales, unir la medicina tradicional y la moderna supone numerosos retos que se derivan de diferencias clave en su ejercicio, evaluación y gestión (García, 2009).
          .col-lg-5
            figure
              img(src="@/assets/curso/tema9/4.png" alt="Imagen decorativa")
        .row
          .col-lg-7.mb-4.mb-lg-0
            h4 Beneficios de las plantas medicinales
            p.mt-3 Las ventajas del empleo de las plantas radican en que, junto con sus principios activos, existen otros constituyentes de acción sinérgica que potencian su acción y las hacen más completas y duraderas que el principio o principios activos aislados.
            p.mt-4 Las plantas medicinales son beneficiosas, porque:
            ul.lista-ul.mb-0.mt-4
              li
                i.fas.fa-atom(style="color:#7E5EE3;") 
                | Son muy accesibles en cuanto a la recolección y su uso.
              li
                i.fas.fa-atom(style="color:#7E5EE3;") 
                | Ejercen una acción global sobre el organismo a causa de la interacción de sus principios activos.
              li
                i.fas.fa-atom(style="color:#7E5EE3;") 
                | El efecto puede ser más lento que el de los medicamentos convencionales pero es más duradero.
              li
                i.fas.fa-atom(style="color:#7E5EE3;") 
                | Tienden a estimular acciones de protección y regulación de las funciones del organismo y presentan menores efectos secundarios, lo que permite tratamientos más largos.
              li
                i.fas.fa-atom(style="color:#7E5EE3;") 
                | Sirven de complemento a tratamientos con medicamentos convencionales.
              li
                i.fas.fa-atom(style="color:#7E5EE3;") 
                | Tienen relación con el medio cultural, es decir, con la concepción del mundo y del ser humano que se tiene en cada región.
              li
                i.fas.fa-atom(style="color:#7E5EE3;") 
                | No implica gasto de dinero ni de mucho tiempo para su preparación.
              li
                i.fas.fa-atom(style="color:#7E5EE3;") 
                | No requieren de conocimientos ni de ninguna habilidad especial para ser aplicadas.
              li
                i.fas.fa-atom(style="color:#7E5EE3;") 
                | Al hacer uso de las plantas la gente adquiere sus propios recursos económicos.
              li
                i.fas.fa-atom(style="color:#7E5EE3;") 
                | Son eficaces, durante años han resuelto muchos de los problemas de salud en las comunidades (Olaya, 2007).
          .col-lg-5
            figure
              img(src="@/assets/curso/tema9/5.png" alt="Imagen decorativa")

    .p-4.mt-5(style="background-color:#E6F7FE;")
      .row.col-lg-10.m-auto
        .col-lg-3.col-md-5.mb-md-0.mb-4(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema9/6.svg" data-aos="fade-right" alt="Imagen decorativa")
        .col-lg-9.col-md-7.mb-md-0.mb-4(style="place-self:center;")
          p(data-aos="fade-up") Para complementar este tema, se debe revisar el vademécum colombiano con las plantas medicinales aprobadas.
          a.anexo.mt-3.bg-white(:href="obtenerLink('downloads/AnexAnexo4_CF012_Vademecum_colombiano_plantas_medicinaleso2_CF012_Grupos_terapauticos.pdf')" target="_blank" data-aos="zoom-in-up")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p.fw-bold.mb-0 Anexo. Vademecum colombiano plantas


      

    
    
   
</template>

<script>
export default {
  name: 'Tema9',
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
.cont_9_1, .cont_9_1 *
  position: relative
.cont_9_1:before
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
.bloque-texto-b.color-secundario:before
  background-color: #EFFAFE
</style>
