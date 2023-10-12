<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="zoom-in") La farmacología está integrada por diferentes disciplinas, diversos grupos farmacológicos y terapéuticos, que de la mano de la medicina tradicional permite ampliar conocimientos frente al uso de plantas medicinales en diferentes tratamientos y patologías;  es por esto la relevancia que tiene el proceso de dispensación y distribución de un producto farmacéutico para ser entregado al paciente o usuario final. Por lo anterior es básico tener un conocimiento amplio y suficiente de la farmacología, su uso y la interacción de este con el organismo humano, por lo que este componente formativo contó con todos estos temas necesarios y relevantes que podrá revisar a través del mapa conceptual que a continuación se expone:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Muestra síntesis Farmacología integrada por diferentes disciplinas, diversos grupos farmacológicos y terapéuticos, que de la mano de la medicina tradicional permite ampliar conocimientos frente al uso de plantas medicinales en diferentes tratamientos y patologías; es por esto la relevancia que tiene el proceso de dispensación y distribución de un producto farmacéutico para ser entregado al paciente o usuario final.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis


</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
