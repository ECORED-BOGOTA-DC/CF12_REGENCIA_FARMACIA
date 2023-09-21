<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Biología celular
    .cont_1_1.row
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") La biología establece similitudes y diferencias entre los organismos y características propias de los seres vivos de acuerdo con sus estructuras, funciones y su relación con el entorno. Por este motivo, se estudia la estructura y la dinámica funcional común a todos los seres vivos para establecer las leyes generales que rigen la vida y los principios explicativos fundamentales de esta.
        p.mt-4(data-aos="fade-up") A partir de la curiosidad del ser humano, se ha logrado el desarrollo de diferentes ciencias que han logrado descifrar el funcionamiento de los seres vivos. Una de ellas es la biología celular que tiene como objetivo de estudio, la unidad fundamental de la vida: la célula.
        p.mt-4(data-aos="fade-up") Esta ciencia se enfoca en la estructura, composición y función celular, desde las propiedades más generales (compartidas por todas las células) hasta funciones específicas altamente complejas y propias de células especializadas.
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/2.svg" data-aos="fade-left" alt="Imagen decorativa" style="max-width:350px;margin:0 auto;")
    p.mt-5(data-aos="fade-up") La célula está diseñada para realizar funciones relacionadas con:

    .row.mt-5.col-lg-10.m-auto
      .col-lg.mb-4.mb-lg-0
        .p-4.pt-5.pb-5.h-100.d-flex.justify-content-center.align-items-center.flex-wrap(style="background-color:#E4DDFA;border-bottom:4px #7E5EE3 solid;")
          figure.w-100.m-auto.text-center
            img(src="@/assets/curso/tema1/3.svg" data-aos="zoom-in-up" style="max-width:100px;display:inline;" alt="Imagen decorativa")
          h3.mt-3(data-aos="zoom-in-up") Nutrición
      .col-lg.mb-4.mb-lg-0
        .p-4.pt-5.pb-5.h-100.d-flex.justify-content-center.align-items-center.flex-wrap(style="background-color:#E4DDFA;border-bottom:4px #7E5EE3 solid;")
          figure.w-100.m-auto.text-center
            img(src="@/assets/curso/tema1/4.svg" data-aos="zoom-in-up" style="max-width:100px;display:inline;" alt="Imagen decorativa")
          h3.mt-3(data-aos="zoom-in-up") Reproducción
      .col-lg.mb-4.mb-lg-0
        .p-4.pt-5.pb-5.h-100.d-flex.justify-content-center.align-items-center.flex-wrap(style="background-color:#E4DDFA;border-bottom:4px #7E5EE3 solid;")
          figure.w-100.m-auto.text-center
            img(src="@/assets/curso/tema1/5.svg" data-aos="zoom-in-up" style="max-width:100px;display:inline;" alt="Imagen decorativa")
          h3.mt-3(data-aos="zoom-in-up") Relación
    p.mt-5(data-aos="fade-up") Dichas funciones propias de los seres vivos, tiene su punto de partida a nivel celular. La fisiología celular es la encargada de este tipo de estudio. En el siguiente esquema podrán observar cómo se desarrollan cada una de estas funciones:
    .col-lg-10.mt-5.m-auto
      figure
        img(src="@/assets/curso/tema1/6.svg" data-aos="zoom-in-up" alt="Imagen decorativa" style="max-width:950px;margin:0 auto;")
    p.mt-5(data-aos="fade-up") La célula es una estructura formada por tres elementos fundamentales:
    .cont_1_2.mt-5
      .col-lg-8.m-auto
        figure
          img(src="@/assets/curso/tema1/8.svg" data-aos="zoom-in-up" alt="Muestra foto de célula con sus tres elementos: 1. La membrana plasmática. 2. El citoplasma. 3. El núcleo")
    p.mt-5(data-aos="fade-up") Para poder entender su estructura, primero se debe conocer que existen dos tipos de células:
    .row.mt-5
      .col-lg.p-0
        .p-4.pb-5.text-center(style="background-color:#E6F7FE;border-radius:20px 0px 0px 20px;")
          figure.col-6.m-auto
            img(src="@/assets/curso/tema1/9.svg" data-aos="fade-up" alt="Imagen decorativa" style="max-width:250px;margin:0 auto;")
          h2.mt-5(data-aos="fade-up") Procariotas
          p.mt-4.mb-0(data-aos="fade-up")  Bacteria y arquea.
      .col-lg.p-0
        .p-4.pb-5.text-center(style="background-color:#99E4EE;border-radius:0px 20px 20px 0px;")
          figure.col-6.m-auto
            img(src="@/assets/curso/tema1/10.svg" data-aos="fade-up" alt="Imagen decorativa" style="max-width:250px;margin:0 auto;")
          h2.mt-5(data-aos="fade-up") Eucariotas
          p.mt-4.mb-0(data-aos="fade-up") Protozoarios, hongos, plantas y animales.
    
    p.mt-5(data-aos="fade-up") A continuación, se observan las diferencias entre estos tipos de células:

    .titulo-sexto.color-acento-botones.mt-5
      h5.d-block Figura 1
      span #[em Diferencias entre células eucariotas y procariotas]
    
    .tabla-a.color-acento-botones.mt-4 
      table
        thead(style="border:0;")
          tr(style="background-color:#00BCD4;")
            th.text-white(style="border:0;") Aspectos
            th.text-white(style="border:0;") Eucariota
            th.text-white(style="border:0;") Procariota
        tbody
          tr(style="background-color:#fff;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Tamaño.
            td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") Más grande #[br] (+10 micrómetros)
            td.p-4.text-center(style="border:0;") Más pequeña #[br] (-10 micrómetros)
          tr(style="background-color:#F6F6F6;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Núcleo, mitocondrias, cloroplastos, vacuolas y citoesqueleto.
            td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") Sí
            td.p-4.text-center(style="border:0;") No
          tr(style="background-color:#fff;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Modo de vida.
            td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") Organismos unicelulares y pluricelulares.
            td.p-4.text-center(style="border:0;") Organismos unicelulares.
          tr(style="background-color:#F6F6F6;")
            td.p-4.fw-bold.text-center(style="border:0;border-right:1px #AFAFAF solid;") Reproducción.
            td.p-4.text-center(style="border:0;border-right:1px #AFAFAF solid;") Sexual y asexual.
            td.p-4.text-center(style="border:0;") Asexual.
    
    p.mt-5(data-aos="fade-up") Luego de entender sus diferencias, se procede a estudiar la estructura y citología de cada una de ellas y, además, las funciones que cumplen las partes que la componen.

    h4.mt-5(data-aos="zoom-in") Célula procariota 

    .col-lg-7.mt-5.m-auto
      ImagenInfografica.color-acento-botones
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema1/11.svg' data-aos="zoom-in-up" alt="Imagen de célula procariota, las partes que la componen se describen en la parte inferior de la imagen")
        .tarjeta.color-acento-botones.p-3(x="58%" y="5%" numero="" style="background-color:#E0D9F6;")
          .h5.mb-2(style="color:#12263F;") Pared celular
          p.mb-0(style="color:#12263F;") Su función es proteger a la célula. Actúa como protectora frente a agentes externos y el interior de la célula.
        .tarjeta.color-acento-botones.p-3(x="78%" y="13%" numero="" style="background-color:#E0D9F6;")
          .h5.mb-2(style="color:#12263F;") Nucleoide
          p.mb-0(style="color:#12263F;") Lugar de la célula procariota donde se almacena el ADN.
        .tarjeta.color-acento-botones.p-3(x="90%" y="26%" numero="" style="background-color:#E0D9F6;")
          .h5.mb-2(style="color:#12263F;") Ribosomas
          p.mb-0(style="color:#12263F;") Estructura encargada de sintetizar las proteínas.
        .tarjeta.color-acento-botones.p-3(x="59%" y="67%" numero="" style="background-color:#E0D9F6;")
          .h5.mb-2(style="color:#12263F;") Cápsula
          p.mb-0(style="color:#12263F;") Cubierta protectora que resiste la fagocitosis. Se utiliza como depósito de alimentos y para eliminar sustancias de desecho.
        .tarjeta.color-acento-botones.p-3(x="79%" y="81.5%" numero="" style="background-color:#E0D9F6;")
          .h5.mb-2(style="color:#12263F;") Pilis
          p.mb-0(style="color:#12263F;") Estructura que otorga a las células la capacidad de unirse a sus fuentes de alimentos y tejidos de los huéspedes.
        .tarjeta.color-acento-botones.p-3(x="40%" y="81.5%" numero="" style="background-color:#E0D9F6;")
          .h5.mb-2(style="color:#12263F;") Citoplosma
          p(style="color:#12263F;") Solución viscosa donde se encuentran contenidos componentes como: ribosomas, plásmido, cuerpos de inclusión, nucleoide.
          p.mb-0(style="color:#12263F;") Actúa como reserva de energía, lípidos y compuestos de fosfato.
        .tarjeta.color-acento-botones.p-3(x="26%" y="95%" numero="" style="background-color:#E0D9F6;")
          .h5.mb-2(style="color:#12263F;") Membrana plasmática
          p.mb-0(style="color:#12263F;") Se sitúa al interior de la pared celular, se comporta como una barrera permeable la cual permite el ingreso de sustancias necesarias para procesos de energía, transducción y respiración.
        .tarjeta.color-acento-botones.p-3(x="34%" y="36%" numero="" style="background-color:#E0D9F6;")
          .h5.mb-2(style="color:#12263F;") Flagelo
          p.mb-0(style="color:#12263F;") Estructura que brinda capacidad de movimiento a la bacteria.
    
    .row.col-lg-10.mt-5.m-auto
      .p-4(style="background: rgb(11,223,250);background: linear-gradient(180deg, rgba(11,223,250,1) 0%, rgba(7,140,157,1) 80%);border-radius:15px;")
        .row.col-lg-10.m-auto
          .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema1/12.svg" data-aos="fade-right" style="max-width:150px;display:inline;" alt="Imagen decorativa")
          .col-lg-9(style="place-self:center;")
            p.text-white.mb-0(data-aos="fade-left") Para ampliar la información sobre esta célula, se invita a ver el video #[em.text-white Partes de la célula procariota] que se encuentra en el material complementario.
    
    h4.mt-5(data-aos="zoom-in") Célula eucariota 

    .col-lg-10.m-auto.mt-5
      ImagenInfografica.color-acento-botones
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema1/13.svg' data-aos="zoom-in-up" alt="Muestra imagen de Célula eucariota con todos sus componentes que se describen en la parte inferior de la imagen")
        .tarjeta.color-acento-botones.p-3(x="36%" y="3%" numero="" style="background-color:#E0D9F6;")
          .h5.mb-2(style="color:#12263F;") Cromosoma
          p.mb-0(style="color:#12263F;") Son moléculas de ADN con doble hélice que interactúan con proteínas. Están involucrados en los procesos de la mitosis (metafase).
        .tarjeta.color-acento-botones.p-3(x="82%" y="11%" numero="" style="background-color:#E0D9F6;")
          .h5.mb-2(style="color:#12263F;") Vacuola
          p.mb-0(style="color:#12263F;") Su objetivo es manejar los desechos celulares y eliminar los residuos.
        .tarjeta.color-acento-botones.p-3(x="84%" y="21.5%" numero="" style="background-color:#E0D9F6;")
          .h5.mb-2(style="color:#12263F;") Lisosoma
          p.mb-0(style="color:#12263F;") Su función es realizar el reciclaje de desecho celulares y pueden inhibir o matar virus y bacterias invasoras.
        .tarjeta.color-acento-botones.p-3(x="84%" y="34%" numero="" style="background-color:#E0D9F6;")
          .h5.mb-2(style="color:#12263F;") Citoesqueleto
          p.mb-0(style="color:#12263F;") Filamentos que le dan estructura a la célula.
        .tarjeta.color-acento-botones.p-3(x="100%" y="53.5%" numero="" style="background-color:#E0D9F6;")
          .h5.mb-2(style="color:#12263F;") Mitocondrias
          p.mb-0(style="color:#12263F;") Estructura responsable del proceso respiración y donde se generar el ATP (Adenosín Trifosfato) para obtención de energía.
        .tarjeta.color-acento-botones.p-3(x="89%" y="78%" numero="" style="background-color:#E0D9F6;")
          .h5.mb-2(style="color:#12263F;") Citoplasma
          p.mb-0(style="color:#12263F;") Es el lugar que permite que se lleven a cabo las funciones bioquímicas. Lo conforma una red de membranas (retículo endoplasmático).
        .tarjeta.color-acento-botones.p-3(x="71%" y="96%" numero="" style="background-color:#E0D9F6;")
          .h5.mb-2(style="color:#12263F;") Aparato de Golgi
          p.mb-0(style="color:#12263F;") Su función es la elaboración de grasas y proteínas para el uso interno y externo de la célula.
        .tarjeta.color-acento-botones.p-3(x="17%" y="92.5%" numero="" style="background-color:#E0D9F6;")
          .h5.mb-2(style="color:#12263F;") Membrana plasmática 
          p.mb-0(style="color:#12263F;") Conocida también como membrana citoplasmática, se encarga separar el interior de la célula con el exterior. Está compuesta por una doble capa lipídica semipermeable. Regula todo el proceso de transporte de sustancias que entran y salen de la célula.
        .tarjeta.color-acento-botones.p-3(x="4%" y="76%" numero="" style="background-color:#E0D9F6;")
          .h5.mb-2(style="color:#12263F;") Ribosoma
          p.mb-0(style="color:#12263F;") Es la estructura responsable de la expresión genética, ya que participan en el proceso de traducción.
        .tarjeta.color-acento-botones.p-3(x="0%" y="56.5%" numero="" style="background-color:#E0D9F6;")
          .h5.mb-2(style="color:#12263F;") Centriolo
          p.mb-0(style="color:#12263F;") Actúan como el sistema esquelético de la célula, delimitando parte de las estructuras de esta.
        .tarjeta.color-acento-botones.p-3(x="1%" y="32.5%" numero="" style="background-color:#E0D9F6;")
          .h5.mb-2(style="color:#12263F;") Retículo endoplasmático 
          p.mb-0(style="color:#12263F;") Esta estructura tiene como función principal la producción de proteínas para que toda la célula pueda funcionar, puede ser lisa o rugosa.
        .tarjeta.color-acento-botones.p-3(x="10%" y="12.5%" numero="" style="background-color:#E0D9F6;")
          .h5.mb-2(style="color:#12263F;") Membrana nuclear
          p.mb-0(style="color:#12263F;") Capa lipídica que cubre y delimita el núcleo celular. Separa el cromosoma del resto de la célula.

    .row.col-lg-10.mt-5.m-auto
      .p-4(style="background: rgb(11,223,250);background: linear-gradient(180deg, rgba(11,223,250,1) 0%, rgba(7,140,157,1) 80%);border-radius:15px;")
        .row.col-lg-10.m-auto
          .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
            figure.text-center
              img(src="@/assets/curso/tema1/14.svg" data-aos="fade-right" style="max-width:150px;display:inline;" alt="Imagen decorativa")
          .col-lg-9(style="place-self:center;")
            p.text-white.mb-0(data-aos="fade-left") Para ver información complementaria relacionada con el “Panorama de las células animales y vegetales” se invita a ver el video que se encuentra en el material complementario.
    
    Separador
    
    .titulo-segundo
      h2#t_1_1 1.1 Biomoléculas 
    
    p(data-aos="fade-up") Son moléculas que hacen parte fundamental de todos los seres vivos. 

    .row.mt-5
      .col-lg.mb-4.mb-lg-0(style="place-self:center;")
        .p-4.cont_responsive1.h-100(data-aos="fade-right" style="background-color:#E6F7FE;width:130%;left:0;right:-30%;border-radius:40px 0px 0px 40px;position:relative;z-index:2;")
          p.mb-0.mt-4 Los bioelementos que más abundan en los organismos humanos son los siguientes:
          ul.lista-ul.mt-3.mb-4
            li 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Carbono (C).
            li 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Hidrógeno (H).
            li 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Oxígeno(O).
            li 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Nitrógeno (N).
            li 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Fósforo (P).
            li 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Azufre (S).
      .col-lg.mb-4.mb-lg-0(style="place-self:center;")
        figure.h-100
          img(src="@/assets/curso/tema1/15.png" data-aos="zoom-in-up" alt="Imagen decorativa" style="max-width:350px;margin:0 auto;")
      .col-lg.mb-4.mb-lg-0(style="place-self:center;")
        .p-4.cont_responsive2.h-100(data-aos="fade-left" style="background-color:#98E6F0;width:130%;right:0%;left:-30%;border-radius:0px 40px 40px 0px;position:relative;z-index:2;")
          p.mb-0.mt-5 Estos son parte de la conformación de las biomoléculas:
          ul.lista-ul.mt-3.mb-5
            li 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Lípidos.
            li 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Ácidos nucleicos aminoácidos.
            li 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Proteínas.
            li 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Glúcidos.
            li 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Vitaminas.
    
    p.mt-5(data-aos="fade-up") Los bioelementos ayudan a que se formen enlaces, los que:
    
    .tarjeta-avatar-b.mt-5.col-lg-10.m-auto
      .tarjeta-avatar-b__img
        img(src='@/assets/curso/tema1/16.svg')
      .tarjeta.tarjeta.d-flex.align-items-center(style="background-color:#F1EEFC;border-radius:70px;border:1px #707070 solid;")
        .p-4
          ul.lista-ul
            li(data-aos="fade-up") 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Son muy estables.
            li(data-aos="fade-up") 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Están compuestos con un número amplio de carbonos.
            li(data-aos="fade-up") 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Participan en las estructuras: cíclicas, ramificadas, lineales, heterocíclicas, entre otras.
    
    p.mt-5(data-aos="fade-up") Permiten que con pocos elementos se formen grupos funcionales (con propiedades físicas y químicas variables) como:

    .tarjeta-avatar-b.mt-5.col-lg-10.m-auto
      .tarjeta-avatar-b__img
        img(src='@/assets/curso/tema1/17.svg')
      .tarjeta.tarjeta.d-flex.align-items-center(style="background-color:#F1EEFC;border-radius:70px;border:1px #707070 solid;")
        .p-4
          ul.lista-ul
            li(data-aos="fade-up") 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Aldehídos.
            li(data-aos="fade-up") 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Aminas alcoholes.
            li(data-aos="fade-up") 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Cetonas.
            li(data-aos="fade-up") 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Ácidos, etc.
    
    p.mt-5(data-aos="fade-up") En el siguiente esquema se podrá observar cómo se clasifican las biomoléculas, sus nombres y funciones específicas a nivel celular:

    .col-lg-10.mt-5.m-auto
      figure
        img(src="@/assets/curso/tema1/18.svg" data-aos="zoom-in-up" alt="Imagen decorativa"  style="max-width:350px;margin:0 auto;")
    
    Separador

    .titulo-segundo
      h2#t_1_2 1.2 Reproducción celular
    
    .cont_1_3.row.pt-5
      .col-lg-1
      .col-lg-3.mb-4.mb-lg-0
        figure.text-center
          img(src="@/assets/curso/tema1/20.svg" data-aos="fade-right" style="max-width:400px;display:inline;" alt="Imagen decorativa")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") También conocida como división celular, es la etapa del ciclo donde la célula se divide para dar como resultado dos células hijas.
        p.mt-4(data-aos="fade-up") Este proceso ocurre en todas las formas de vida y garantiza la perpetuidad de su especie, y otras características como el crecimiento, la regeneración de tejidos y la reproducción en los seres pluricelulares.
    
    p.mt-5(data-aos="fade-up") Cada célula, como cualquier ser vivo, tiene procesos de:

    .row.mt-5.col-lg-10.m-auto
      .col-lg.mb-4.mb-lg-0
        .p-4.pt-5.pb-5.h-100.d-flex.justify-content-center.align-items-center.flex-wrap(style="background-color:#CDEDFC;border-bottom:4px #00BCD4 solid;")
          figure.w-100.m-auto.text-center
            img(src="@/assets/curso/tema1/21.svg" data-aos="zoom-in-up" style="max-width:100px;display:inline;" alt="Imagen decorativa")
          h3.mt-3(data-aos="zoom-in-up") Crecimiento
      .col-lg.mb-4.mb-lg-0
        .p-4.pt-5.pb-5.h-100.d-flex.justify-content-center.align-items-center.flex-wrap(style="background-color:#CDEDFC;border-bottom:4px #00BCD4 solid;")
          figure.w-100.m-auto.text-center
            img(src="@/assets/curso/tema1/22.svg" data-aos="zoom-in-up" style="max-width:100px;display:inline;" alt="Imagen decorativa")
          h3.mt-3(data-aos="zoom-in-up") Maduración
      .col-lg.mb-4.mb-lg-0
        .p-4.pt-5.pb-5.h-100.d-flex.justify-content-center.align-items-center.flex-wrap(style="background-color:#CDEDFC;border-bottom:4px #00BCD4 solid;")
          figure.w-100.m-auto.text-center
            img(src="@/assets/curso/tema1/23.svg" data-aos="zoom-in-up" style="max-width:100px;display:inline;" alt="Imagen decorativa")
          h3.mt-3(data-aos="zoom-in-up") Reproducción
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Por medio de procesos biológicos se generan nuevas células, replicando su información genética y repitiendo dicho ciclo. El objetivo de la reproducción celular es aumentar la cantidad de células que existen en el organismo, sin embargo, todos los seres vivos envejecen y esa producción se disminuye, se detiene o se hace de manera menos eficiente.
        .cajon.color-secundario.p-4.mt-4(style="background-color:#F2EEFC;")
          p.mb-0(data-aos="fade-up") Existen tres formas en las que se reproduce la célula. La primera de ellas y las más simple, es la fisión binaria, donde se replica el material genético y se divide en dos individuos similares, como por ejemplo las bacterias, que tienen un solo cromosoma y su reproducción es asexual.
        p.mt-4(data-aos="fade-up") Los seres eucariotas, que poseen más de un cromosoma, como los seres humanos (que tienen la mitad de la información genética del padre y la otra de la madre) utilizan mecanismos de reproducción más complejos como los que se verán a continuación:
      .col-lg-4(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema1/24.svg" data-aos="fade-left" style="max-width:300px;display:inline;" alt="Imagen decorativa")
    
    TabsC.color-secundario.mt-5
      .py-3.py-md-4(titulo="Diferencias mitosis / meiosis")
        .row.col-lg-11.m-auto
          .col-lg-4.mb-4.mb-lg-0
            h3 Diferencias mitosis / meiosis
            p Diferencias entre la reproducción mitótica y la meiótica.
          .col-lg-8
            .tabla-a.color-acento-botones
              table
                thead(style="border:0;")
                  tr(style="background-color:#00BCD4;")
                    th.text-white(style="border:0;") Mitosis
                    th.text-white(style="border:0;") Meiosis
                tbody
                  tr(style="background-color:#fff;")
                    td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Ocurre en la mayoría de las células eucarióticas.
                    td.p-4(style="border:0;") Ocurre en la formación de gametos en células eucarióticas.
                  tr(style="background-color:#F6F6F6;")
                    td.p-4(style="border:0;border-right:1px #AFAFAF solid;") No hay apareamiento de cromosomas homólogos.
                    td.p-4(style="border:0;") Los cromosomas se aparean en sinapsis y puede ocurrir entrecruzamiento.
                  tr(style="background-color:#fff;")
                    td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Se mantiene el número de cromosomas.
                    td.p-4(style="border:0;") El número de cromosomas se divide de diploide a monoploide.
                  tr(style="background-color:#F6F6F6;")
                    td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Una división.
                    td.p-4(style="border:0;") Dos divisiones.
                  tr(style="background-color:#fff;")
                    td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Se producen dos células hijas.
                    td.p-4(style="border:0;") Se producen cuatro células hijas.
                  tr(style="background-color:#F6F6F6;")
                    td.p-4(style="border:0;border-right:1px #AFAFAF solid;") Las células hijas son idénticas entre sí y a la célula madre.
                    td.p-4(style="border:0;") Las células hijas tienen combinaciones variadas de cromosomas y no son idénticas a la célula madre.
      .py-3.py-md-4(titulo="Reproducción mitótica")
        .row.col-lg-11.m-auto
          .col-lg-4.mb-4.mb-lg-0
            h3 Reproducción mitótica
            p Etapas de la reproducción mitótica.
          .col-lg-8
            figure
              img(src="@/assets/curso/tema1/25.svg" alt="Muestra imagen de las etapas de la reproducción mitótica que se describen en la parte inferior de la imagen")
      .py-3.py-md-4(titulo="Reproducción meiótica")
        .row.col-lg-11.m-auto
          .col-lg-4.mb-4.mb-lg-0
            h3 Reproducción meiótica
            p Se lleva a cabo por medio de dos divisiones celulares sucesivas que producen 4 células haploides (n), denominadas gametos (óvulos o espermatozoides), a partir de una célula diploide (2n), llamada célula madre.
            p.mt-4 En el esquema se representan sus fases:
          .col-lg-8
            figure
              img(src="@/assets/curso/tema1/26.svg" alt="Muestra fases de reproducción meiótica con fases: interfase, meiosis, cromosomas homólogos, núcleos hijos")
    
    Separador

    .titulo-segundo
      h2#t_1_3 1.3 Botánica

    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        .p-4.cont_responsive1(data-aos="fade-right" style="background-color:#CDEDFC;width:160%;right:-20%;border-radius:40px 40px 0px 40px;box-shadow:0px 0px 20px rgba(0,0,0,.2);position:relative;z-index:2;")
          p.mb-0.mt-4 Es la rama de la biología que se encarga del estudio de los vegetales y las plantas, incluyendo:
          ul.lista-ul.mt-3
            li(data-aos="fade-up") 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Fisiología.
            li(data-aos="fade-up") 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Morfología.
            li(data-aos="fade-up") 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Descripción.
            li(data-aos="fade-up") 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Estudio.
            li(data-aos="fade-up") 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Clasificación.
            li(data-aos="fade-up") 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Cómo se relaciona con otros seres vivos.
            li(data-aos="fade-up") 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Qué tan importante es.
            li(data-aos="fade-up") 
              i.fas.fa-atom(style="color:#7E5EE3;")
              | Su utilidad para el beneficio del ser humano. 
      .col-lg-9
        figure
          img(src="@/assets/curso/tema1/27.jpg" data-aos="fade-left" alt="Imagen decorativa"  style="max-width:350px;margin:0 auto;")        
    
    p.mt-5(data-aos="fade-up") Actualmente la botánica es una disciplina muy amplia que no solo se enfoca en el estudio de las plantas, sino que amplía sus intereses a nivel biotecnológico, genético y molecular, mediante los que se desarrollan otras especies de plantas y se racionaliza su uso en el ser humano.
    p.mt-4(data-aos="fade-up") En el siguiente esquema, se observan las ramas de la botánica y sus aplicaciones en los ámbitos de la ciencia:

    figure.mt-5
      img(src="@/assets/curso/tema1/28.svg" data-aos="zoom-in-up" alt="Imagen que muestra las ramas de la botánica y aplicaciones, se describe parte inferior imagen")

    Separador

    .titulo-segundo
      h2#t_1_4 1.4 Niveles de organización
    
    p(data-aos="fade-up") Las estructuras que forman parte de los seres vivos se organizan en niveles, partiendo desde lo más simple a lo más estructurado y complejo, iniciando desde las partículas subatómicas hasta la biósfera, como se puede ver en el siguiente esquema:

    .cont_1_4.row.mt-5
      .col-lg-10.m-auto
        ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/30.svg' data-aos="zoom-in-up" alt="Muestra niveles de organización que se explican debajo de la imagen")
          .tarjeta.color-acento-botones.p-3.pt-5.pb-5.text-center(x="11%" y="27%" numero="" style="background-color:#CDEDFC;border-top:5px #00BCD4 solid;border-radius:0px;")
            .h5.mb-2(style="color:#12263F;") Partículas subatómicas.
            p.mb-0(style="color:#12263F;")  Ejemplo: protones, neutrones y electrones. Son las partículas constituyentes del átomo.
          .tarjeta.color-acento-botones.p-3.pt-5.pb-5.text-center(x="37%" y="27%" numero="" style="background-color:#CDEDFC;border-top:5px #00BCD4 solid;border-radius:0px;")
            .h5.mb-2(style="color:#12263F;") Átomo.
            p.mb-0(style="color:#12263F;") Ejemplo: átomo de oxígeno. Forman parte de los seres vivos (bioelementos).
          .tarjeta.color-acento-botones.p-3.pt-5.pb-5.text-center(x="63%" y="27%" numero="" style="background-color:#CDEDFC;border-top:5px #00BCD4 solid;border-radius:0px;")
            .h5.mb-2(style="color:#12263F;") Moléculas.
            p.mb-0(style="color:#12263F;") Ejemplo: molécula de agua.  Combinación de átomos semejantes o diferentes.
          .tarjeta.color-acento-botones.p-3.pt-5.pb-5.text-center(x="89%" y="27%" numero="" style="background-color:#CDEDFC;border-top:5px #00BCD4 solid;border-radius:0px;")
            .h5.mb-2(style="color:#12263F;") Célula.
            p.mb-0(style="color:#12263F;") Ejemplo: célula ósea. Unidad funcional y estructural de todo ser vivo.
          .tarjeta.color-acento-botones.p-3.pt-5.pb-5.text-center(x="11%" y="62%" numero="" style="background-color:#CDEDFC;border-top:5px #00BCD4 solid;border-radius:0px;")
            .h5.mb-2(style="color:#12263F;") Organismo.
            p.mb-0(style="color:#12263F;") Ejemplo: ser humano. Formado por varios sistemas.
          .tarjeta.color-acento-botones.p-3.pt-5.pb-5.text-center(x="37%" y="62%" numero="" style="background-color:#CDEDFC;border-top:5px #00BCD4 solid;border-radius:0px;")
            .h5.mb-2(style="color:#12263F;") Sistema.
            p.mb-0(style="color:#12263F;") Ejemplo: sistema óseo. Conjunto de órganos.
          .tarjeta.color-acento-botones.p-3.pt-5.pb-5.text-center(x="63%" y="62%" numero="" style="background-color:#CDEDFC;border-top:5px #00BCD4 solid;border-radius:0px;")
            .h5.mb-2(style="color:#12263F;") Órgano.
            p.mb-0(style="color:#12263F;") Ejemplo: corazón. Compuesto de tejido muscular.
          .tarjeta.color-acento-botones.p-3.pt-5.pb-5.text-center(x="89%" y="62%" numero="" style="background-color:#CDEDFC;border-top:5px #00BCD4 solid;border-radius:0px;")
            .h5.mb-2(style="color:#12263F;") Tejído.
            p.mb-0(style="color:#12263F;") Ejemplo: tejido óseo. Conjunto de células.
          .tarjeta.color-acento-botones.p-3.pt-5.pb-5.text-center(x="11%" y="97%" numero="" style="background-color:#CDEDFC;border-top:5px #00BCD4 solid;border-radius:0px;")
            .h5.mb-2(style="color:#12263F;") Población.
            p.mb-0(style="color:#12263F;")  Ejemplo: personas. Formada por varios organismos.
          .tarjeta.color-acento-botones.p-3.pt-5.pb-5.text-center(x="37%" y="97%" numero="" style="background-color:#CDEDFC;border-top:5px #00BCD4 solid;border-radius:0px;")
            .h5.mb-2(style="color:#12263F;") Comunidad.
            p.mb-0(style="color:#12263F;") Ejemplo: personas y animales. Formada por poblaciones.
          .tarjeta.color-acento-botones.p-3.pt-5.pb-5.text-center(x="63%" y="97%" numero="" style="background-color:#CDEDFC;border-top:5px #00BCD4 solid;border-radius:0px;")
            .h5.mb-2(style="color:#12263F;") Ecosistema.
            p.mb-0(style="color:#12263F;") Ejemplo: personas, animales, plantas, ríos. Formado por comunidades.
          .tarjeta.color-acento-botones.p-3.pt-5.pb-5.text-center(x="90%" y="97%" numero="" style="background-color:#CDEDFC;border-top:5px #00BCD4 solid;border-radius:0px;")
            .h5.mb-2(style="color:#12263F;") Biósfera.
            p.mb-0(style="color:#12263F;") Ejemplo: planeta. Formado por  ecosistemas.







      
    

    
   
</template>

<script>
export default {
  name: 'Tema1',
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
.cont_1_1, .cont_1_1 *
  position: relative
.cont_1_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema1/1.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
.cont_1_2, .cont_1_2 *
  position: relative
.cont_1_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema1/7.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
.cont_1_3, .cont_1_3 *
  position: relative
.cont_1_3:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema1/19.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
.tabs-c.color-secundario .tabs-c__tab--active
  font-weight: bold
.cont_1_4
  position: relative
.cont_1_4:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema1/29.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
</style>
