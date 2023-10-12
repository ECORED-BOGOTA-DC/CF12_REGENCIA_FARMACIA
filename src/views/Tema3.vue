<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Fisiología por sistemas del cuerpo
    .row.cont_3_1
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/2.png" data-aos="fade-right" alt="Imagen decorativa" style="max-width:350px;margin:0 auto;")
      .col-lg-4(style="place-self:center;")
        .p-4.cont_responsive2(data-aos="fade-left" style="background-color:#CDEDFC;width:130%;left:-50%;right:0;border-radius:40px 40px 0px 40px;box-shadow:0px 0px 20px rgba(0,0,0,.2);position:relative;z-index:2;")
          p.mb-0.mt-4.mb-4 Los sistemas del cuerpo humano hacen referencia a los distintos conjuntos de órganos que lo componen, colaborando en cada caso con el cumplimiento de algún tipo específico de funciones. Visto así, el cuerpo puede comprenderse justamente como un conjunto simultáneo y yuxtapuesto de sistemas, cuyo correcto funcionamiento permite la vida.
    Separador
    .titulo-segundo
      h2#t_3_1 3.1 Sistema nervioso
    .row
      .col-lg-1
      .col-lg-6.mb-4.mb-lg-0(style="place-self:center;")
        .cajon.color-secundario.p-4.pt-5.pb-5(style="background-color:#F2EEFC;")
          p.mb-0(data-aos="fade-up") #[strong El sistema nervioso] es uno de los sistemas más importantes y complejos del cuerpo humano. Tiene múltiples funciones, entre ellas recibir y procesar toda la información que proviene tanto del interior del cuerpo como del entorno, con el fin de regular el funcionamiento de los demás órganos y sistemas.
      .col-lg-5
        figure
          img(src="@/assets/curso/tema3/3.svg" data-aos="fade-left" alt="Imagen decorativa" style="max-width:350px;margin:0 auto;") 
    p.mt-5(data-aos="fade-up") El sistema nervioso se divide en el sistema nervioso central y el sistema nervioso periférico, como se muestra a continuación:
    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Sistema nervioso central")
        .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img(src='@/assets/curso/tema3/4.svg' style="width:350px" alt="Muestra imagen de cerebelo identificando en diferentes colores sus partes : lóbulo temporal,  lóbulo frontal, lóbulo parietal, lóbulo occipital, cerebelo, medula espinal").m-auto
        .col-lg-8(style="place-self:center;")
          p Analiza y procesa la información que llega desde los órganos receptores y da una respuesta para que ejecuten los órganos efectores, está conformado por el encéfalo y la médula espinal, que están protegidos por la médula craneana y las vértebras respectivamente. Están rodeados por tres membranas (meninges), se divide en:
          ul.fa-ul.mt-3
            li
              i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
              | #[strong Telencéfalo:] dividida en hemisferio izquierdo y derecho, participa en la coordinación de las funciones voluntarias.
            li
              i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
              | #[strong Diencéfalo (hipotálamo y tálamo):] se ubican en centros que controlan las funciones involuntarias. Producen neurohormonas (regulan las glándulas endocrinas).
            li
              i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
              | #[strong Mesencéfalo:] controla y conduce los impulsos motores que van desde la corteza cerebral hasta la unión de la espina dorsal y el encéfalo.
            li
              i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
              | #[strong Metencéfalo:] mantenimiento del equilibrio y coordinación de movimientos voluntarios. 
            li
              i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
              | #[strong Mielencéfalo:] controla funciones vitales (latido del corazón, respiración, reflejos vegetativos de protección como el vómito, tos, entre otros).
      .row(titulo="Sistema nervioso periférico")
        .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img(src='@/assets/curso/tema3/5.svg' alt="Imagen decorativa" style="max-width:350px").m-auto
        .col-lg-8(style="place-self:center;")
          p Conecta el sistema nervioso central con todos los órganos y tejidos del cuerpo (órganos receptores y efectores), está formado principalmente por nervios.
          p.mt-4 Se divide en sistema nervioso simpático y parasimpático, ambos controlados por estructuras del encéfalo.
          p.mt-4 Ambos subsistemas trabajan de manera complementaria:
          ul.fa-ul.mt-3
            li
              i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
              | #[strong Sistema simpático:] prepara al organismo ante situaciones de actividad súbita como un aumento del ritmo cardiaco causado por una situación de peligro o emergencias.
            li
              i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
              | #[strong Sistema parasimpático:] prepara al organismo para situaciones de reposo, por ejemplo, la disminución del ritmo cardíaco.
      .row(titulo="Unidad funcional del sistema nervioso")
        .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
          figure
            img(src='@/assets/curso/tema3/6.svg' alt="Imagen decorativa" style="max-width:350px;margin:0 auto;")
        .col-lg-8(style="place-self:center;")
          p La neurona es la principal célula nerviosa, que por lo general tiene forma irregular y cuenta con prolongaciones, la cuales se llaman axón.
          p.mt-4 Las partes de la neurona son:
          ul.fa-ul.mt-3
            li
              i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
              | Núcleo
            li
              i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
              | Cuerpo celular
            li
              i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
              | Dendritas
            li
              i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
              | Células de Schwann
            li
              i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
              | Nodo de Ranvier
            li
              i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
              | Mielina
            li
              i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
              | Terminal del axón
    
    Separador

    .titulo-segundo
      h2#t_3_2 3.2 Sistema cardiovascular 
    
    .row
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/7.svg" data-aos="fade-right" alt="Imagen decorativa" style="max-width:350px;margin:0 auto;")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") Se trata de un sistema de transporte en el que una bomba muscular (corazón), proporciona la energía necesaria para mover el contenido (sangre), en circuitos cerrados elásticos (los vasos).
        p.mt-4(data-aos="fade-up") A continuación, se presentan las partes del sistema cardiovascular:
    
    .mt-5.tarjeta.tarjeta--gris.p-4.p-lg-5(style="border-radius:0px;")
      SlyderA.bg-white.p-4
        .row
          .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
            h4 Corazón
            p Situado en la caja torácica con un volumen similar al del puño, pesa entre 300 y 500 g, su función es el bombeo de la sangre, está regulado por el sistema nervioso autónomo y formado por la musculatura estriada.
            p.mt-4 Está formado por:
            p.mt-4.fw-bold Aurículas.
            ul.fa-ul.mt-3
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Derecha:] recibe sangre baja en oxígeno de todo el cuerpo y la vacía en el ventrículo derecho.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Izquierda:] recibe sangre rica en oxígeno de los pulmones y la vacía en el ventrículo izquierdo.
            p.mt-4.fw-bold Ventrículos.
            ul.fa-ul.mt-3
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Derecho:] envía la sangre pobre en oxígeno a los pulmones.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Izquierdo:] envía la sangre rica en oxígeno al resto del cuerpo.
            p.mt-4.fw-bold Válvulas auriculo ventriculares.
            ul.fa-ul.mt-3
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | Controlan mediante su apertura y su cierre que el flujo de sangre sea unidireccional y suficiente como para abastecer las necesidades del organismo.
            p.mt-4.fw-bold Haz de HIS
            ul.fa-ul.mt-3
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | Grupo de fibras que transportan impulsos eléctricos a través del centro del corazón. Si se bloquean generan problemas con los latidos del corazón.
          .col-lg-3(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema3/8.svg' alt="Imagen decorativa" style="max-width:200px;margin:0 auto;")
        .row
          .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
            h4 Vasos sanguíneos
            p Son conductos huecos ramificados por donde circula la sangre que impulsa el corazón.
            p.mt-4 Está formado por:
            p.mt-4 #[strong Arterias:] transportan la sangre desde el corazón al resto del cuerpo.
            p.mt-4 #[strong Arteriolas:] últimas ramas pequeñas del sistema arterial que controlan los conductos por medio de los cuales se libera la sangre en los capilares.
            p.mt-4 #[strong Capilares:] comunican las arteriolas con las vénulas. Facilitan el intercambio de sustancias entre la sangre y las células.
            p.mt-4 #[strong Vénulas y venas:]
            ul.fa-ul.mt-3
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Vénula:] cuando esta aumenta de tamaño se le denomina vena.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Vena:] llevan la sangre desde los tejidos y órganos hasta el corazón y luego a los pulmones.
          .col-lg-3(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema3/9.svg' alt="Imagen decorativa" style="max-width:300px;margin:0 auto;")
        .row
          .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
            h4 Sistema linfático
            p Mantiene los líquidos corporales en equilibrio y defiende al cuerpo de infecciones. Está compuesto por una red de vasos linfáticos que transporta la linfa (líquido transparente y acuoso rico en proteínas, sales, glucosa y otras sustancias).
            p.mt-4 Está formado por:
            p.mt-4 #[strong Vasos linfáticos:] transportan la linfa, rica en proteínas, sales, glucosa y otras sustancias, por todo el cuerpo.
            p.mt-4 #[strong Ganglios linfáticos:] se encargan de filtrar las sustancias que el líquido linfático transporta, contienen linfocitos (glóbulos blancos) que ayudan a combatir infecciones y enfermedades.
            p.mt-4 #[strong Cisterna Pecquet:] recoge el líquido linfático proveniente de los vasos, piernas, abdomen y la pelvis.
            p.mt-4 #[strong Linfa:] líquido transparente y acuoso rico en proteínas, sales, glucosa y otras sustancias.
          .col-lg-3(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema3/10.svg' alt="Imagen decorativa" style="max-width:250px;margin:0 auto;")
    Separador
    .titulo-segundo
      h2#t_3_3 3.3 Sistema respiratorio
    .row.cont_3_2.pt-4
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/12.png" data-aos="fade-right" alt="Imagen decorativa" style="max-width:350px;margin:0 auto;")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") Es un conjunto de órganos que llevan el aire (oxígeno) que se respira hacia el interior de las células para hacer posible el crecimiento y la actividad metabólica de las mismas.
        ul.lista-ul.mt-3
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;") 
            | Proveer oxígeno.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;") 
            | Eliminar el dióxido de carbono.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;") 
            | Regular el pH de la sangre en conjunto con los riñones.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;") 
            | Formar los sonidos de la voz.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;") 
            | Defender contra microbios del aire.
          li(data-aos="fade-up")
            i.fas.fa-atom(style="color:#7E5EE3;") 
            | Atrapar y disolver los coágulos de sangre que se formen en las venas.
        .cajon.color-secundario.p-4.mt-4(style="background-color:#F2EEFC;")
          p.mb-0(data-aos="fade-up") #[strong La respiración] es un proceso involuntario y automático, en el que se extrae el oxígeno del aire inspirado y se expulsan los desechos en el aire expulsado. Consiste en tomar oxígeno (O#[sub 2]) y expulsar el dióxido de carbono producido a nivel celular (CO#[sub 2]).
    p.mt-5(data-aos="fade-up") A continuación, se muestran las partes del sistema respiratorio y sus funciones:
    .col-lg-10.mt-5.m-auto
      ImagenInfografica.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/13.svg' data-aos="zoom-in-up" alt="Muestra imagen de ser humano describiendo las partes del sistema respiratorio y debajo de la imagen se explica cada una")
          .tarjeta.color-acento-botones.p-4(x="8%" y="17%" numero="" style="background-color:#E0D9F6;border-radius:0px;")
            p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Laringe:] su objetivo es permitir el paso del aire desde la nariz hacia la tráquea y luego a los pulmones.
          .tarjeta.color-acento-botones.p-4(x="86%" y="32%" numero="" style="background-color:#E0D9F6;border-radius:0px;")
            p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Fosas nasales:] son dos cavidades, al interior de la nariz, cuyo objetivo es permitir la entrada del aire.
          .tarjeta.color-acento-botones.p-4(x="8%" y="38%" numero="" style="background-color:#E0D9F6;border-radius:0px;")
            p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Bronquio:] existen dos, uno izquierdo y otro derecho, que se bifurcan y a través de ellos se lleva el oxígeno a cada pulmón.
          .tarjeta.color-acento-botones.p-4(x="92%" y="51%" numero="" style="background-color:#E0D9F6;border-radius:0px;")
            p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Faringe:] conduce el aire hacia la tráquea por contracción muscular, conecta la nariz y la boca con la tráquea y el esófago.
          .tarjeta.color-acento-botones.p-4(x="8%" y="56%" numero="" style="background-color:#E0D9F6;border-radius:0px;")
            p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Bronquiolos:] pequeñas vías respiratorias situadas en los pulmones.
          .tarjeta.color-acento-botones.p-4(x="92%" y="64.5%" numero="" style="background-color:#E0D9F6;border-radius:0px;")
            p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Tráquea:] la función principal de esta parte del sistema respiratorio es brindar una vía abierta para el aire que se inhale y exhale.
          .tarjeta.color-acento-botones.p-4(x="11%" y="95%" numero="" style="background-color:#E0D9F6;border-radius:0px;")
            p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Pulmones:] son dos órganos de una coloración rojiza donde se realizan la oxigenación de la sangre, que luego irá a todos los órganos del cuerpo.
          .tarjeta.color-acento-botones.p-4(x="92%" y="87%" numero="" style="background-color:#E0D9F6;border-radius:0px;")
            p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Diafragma:] músculo que, a través de su contracción y allanamiento, favorece la inspiración y expiración.
    Separador
    .titulo-segundo
      h2#t_3_4 3.4 Sistema digestivo
    .row
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center;")
        .p-4.cont_responsive1(data-aos="fade-right" style="background-color:#CDEDFC;width:140%;right:-30%;border-radius:40px 40px 0px 40px;box-shadow:0px 0px 20px rgba(0,0,0,.2);position:relative;z-index:2;")
          p.mb-0 Es un conjunto de órganos que realiza el procesamiento de alimentos sólidos y líquidos que el organismo utiliza como fuente de energía y luego evacúa los desechos que no son necesarios.
          p.mt-4 Sus funciones son:
          ul.lista-ul.mt-3
            li
              i.fas.fa-atom(style="color:#7E5EE3;") 
              | Ingestión de alimentos.
            li
              i.fas.fa-atom(style="color:#7E5EE3;") 
              | Transporte de alimentos.
            li
              i.fas.fa-atom(style="color:#7E5EE3;") 
              | Liberación de líquidos, sales y enzimas.
            li
              i.fas.fa-atom(style="color:#7E5EE3;") 
              | Una óptima digestión, absorción y eliminación. 
      .col-lg-9(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/14.png" data-aos="fade-left" alt="Imagen decorativa" style="max-width:350px;margin:0 auto;")
    p.mt-5(data-aos="fade-up") Las partes y funciones del sistema digestivo son:
    .cont_3_3.mt-5
      .col-lg-4.m-auto
        ImagenInfografica.infografia1.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/16.svg' data-aos="zoom-in-up" alt="Imagen que contiene las partes y funciones del sistema digestivo descritas en la parte inferior")
          .tarjeta.color-acento-botones.p-4(x="48%" y="25%" numero="11" style="background-color:#E0D9F6;border-radius:0px;")
            p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Esófago:] transporta el bolo alimenticio desde la faringe al estómago y evita el reflujo.
          .tarjeta.color-acento-botones.p-4(x="69%" y="54%" numero="9" style="background-color:#E0D9F6;border-radius:0px;")
            p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Páncreas:] produce enzimas pancreáticas que favorecen la digestión y la producción de insulina.
          .tarjeta.color-acento-botones.p-4(x="38%" y="54%" numero="1" style="background-color:#E0D9F6;border-radius:0px;")
            p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Hígado:] produce bilis que ayuda a la descomposición de las grasas en el intestino delgado durante la digestión.
          .tarjeta.color-acento-botones.p-4(x="35%" y="60%" numero="2" style="background-color:#E0D9F6;border-radius:0px;")
            p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Vesícula biliar:] ayuda con la digestión de las grasas mediante el almacenamiento de la bilis que produce el hígado.
          .tarjeta.color-acento-botones.p-4(x="59%" y="60%" numero="10" style="background-color:#E0D9F6;border-radius:0px;")
            p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Estómago:] realiza el proceso digestivo mezclando los alimentos con los jugos gástricos y diluirlos.
          .tarjeta.color-acento-botones.p-4(x="37%" y="65%" numero="3" style="background-color:#E0D9F6;border-radius:0px;")
            p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Duodeno:] conecta el estómago con el intestino delgado.
          .tarjeta.color-acento-botones.p-4(x="67%" y="66%" numero="8" style="background-color:#E0D9F6;border-radius:0px;")
            p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Intestino grueso:] recibe las sustancias que el cuerpo no absorbe ni necesita para transportarlas como heces hasta el recto y el ano para su expulsión.
          .tarjeta.color-acento-botones.p-4(x="50%" y="77%" numero="4" style="background-color:#E0D9F6;border-radius:0px;")
            p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Intestino delgado:] continúa con el proceso de digestión y absorbe los nutrientes y el agua de los alimentos.
          .tarjeta.color-acento-botones.p-4(x="48.5%" y="89%" numero="7" style="background-color:#E0D9F6;border-radius:0px;")
            p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Recto:] recibe las sustancias de desecho (heces) para expulsarlas a través del ano.
          .tarjeta.color-acento-botones.p-4(x="48.5%" y="93%" numero="6" style="background-color:#E0D9F6;border-radius:0px;")
            p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Ano:] orificio al final del tubo digestivo, por donde los materiales de desecho salen del organismo.
          .tarjeta.color-acento-botones.p-4(x="34%" y="83%" numero="5" style="background-color:#E0D9F6;border-radius:0px;")
            p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Apéndice:] ubicado en la parte inicial del intestino grueso y no tiene una función definida.
    .col-lg-10.m-auto.mt-5
      .bloque-texto-a.color-secundario
        .row.m-0.align-items-center.justify-content-between
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/17.svg" data-aos="fade-right" alt="Imagen decorativa" style="max-width:350px;margin:0 auto;")
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p.fw-bold.mb-1(data-aos="fade-up") Cuidados del sistema digestivo
              p(data-aos="fade-up") Consumir fibra, frutas, verduras, tomar suficiente agua, moderar el consumo de alimentos grasos, evitar comidas abundantes.
    Separador
    .titulo-segundo
      h2#t_3_5 3.5 Sistema endocrino
    p(data-aos="fade-up") Llamado también sistema de glándulas de secreción, compuesto por órganos de tejido que secretan hormonas.
    .row.mt-5
      .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/18.svg" data-aos="fade-right" alt="Imagen decorativa" style="max-width:350px;margin:0 auto;")
      .col-lg-6(style="place-self:center;")
        .cajon.color-primario.p-4.pb-5.pt-5(style="background-color:#F2FBFF;")
          p.mb-0(data-aos="fade-up") #[strong Sus funciones son:] controlar el estado de ánimo, desarrollo, crecimiento, reproducción y metabolismo a través de la secreción de las hormonas.
    p.mt-5(data-aos="fade-up") Las partes y funciones del sistema endocrino son:
    .cont_3_4.mt-5.pt-5.pb-5
      .col-xl-10.m-auto
        .row
          .col-lg.mb-5.mb-lg-0
            ImagenInfografica.color-acento-botones.infografia2
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/19.svg' data-aos="zoom-in-up" alt="Imagen de hombre y mujer señalando partes del sistema endocrino que se describen seguido a la imagen")
              .tarjeta.color-acento-botones.p-3(x="43%" y="2%" numero="1" style="background-color:#E0D9F6;border-radius:0px;")
                p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Hipotálamo:] controla la temperatura corporal y el hambre.
              .tarjeta.color-acento-botones.p-3(x="52%" y="3.5%" numero="2" style="background-color:#E0D9F6;border-radius:0px;")
                p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Glándula pineal:] secreta la melatonina que controla el proceso del sueño y el despertar en la mañana.
              .tarjeta.color-acento-botones.p-3(x="46%" y="8%" numero="3" style="background-color:#E0D9F6;border-radius:0px;")
                p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Glándula pituitaria:] conocida como la hormona estimulante de la tiroides. Está involucrada en los procesos de crecimiento.
              .tarjeta.color-acento-botones.p-3(x="49%" y="13%" numero="4" style="background-color:#E0D9F6;border-radius:0px;")
                p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Glándulas tiroides y paratiroides:] la hormona tiroides que controla todo el metabolismo del cuerpo y la hormona paratiroides controla el metabolismo del calcio para el funcionamiento correcto de los músculos y nervios.
              .tarjeta.color-acento-botones.p-3(x="43%" y="19%" numero="5" style="background-color:#E0D9F6;border-radius:0px;")
                p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Timo:] participa en la regulación de las glándulas sexuales, crecimiento óseo y colabora en el desarrollo del sistema linfático.
              .tarjeta.color-acento-botones.p-3(x="47%" y="37%" numero="6" style="background-color:#E0D9F6;border-radius:0px;")
                p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Páncreas:] encargado de la producción de insulina para controlar los niveles de glucosa en sangre.
              .tarjeta.color-acento-botones.p-3(x="51%" y="33%" numero="7" style="background-color:#E0D9F6;border-radius:0px;")
                p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Glándulas adrenales:] participan en la regulación de los latidos del corazón y la presión arterial.
              .tarjeta.color-acento-botones.p-3(x="41%" y="43%" numero="8" style="background-color:#E0D9F6;border-radius:0px;")
                p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Ovarios:] cumple una función importante en el desarrollo de las características femeninas, forma del cuerpo, vello y mamas; allí se forman los óvulos y los estrógenos.
          .col-lg.mb-5.mb-lg-0
            ImagenInfografica.color-acento-botones.infografia2
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/19-1.svg' data-aos="zoom-in-up" alt="Imagen de hombre y mujer señalando partes del sistema endocrino que se describen seguido a la imagen")  
              .tarjeta.color-acento-botones.p-3(x="49%" y="2%" numero="1" style="background-color:#E0D9F6;border-radius:0px;")
                p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Hipotálamo:] controla la temperatura corporal y el hambre.
              .tarjeta.color-acento-botones.p-3(x="56%" y="3.5%" numero="2" style="background-color:#E0D9F6;border-radius:0px;")
                p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Glándula pineal:] secreta la melatonina que controla el proceso del sueño y el despertar en la mañana.
              .tarjeta.color-acento-botones.p-3(x="52%" y="7%" numero="3" style="background-color:#E0D9F6;border-radius:0px;")
                p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Glándula pituitaria:] conocida como la hormona estimulante de la tiroides. Está involucrada en los procesos de crecimiento.
              .tarjeta.color-acento-botones.p-3(x="55%" y="13%" numero="4" style="background-color:#E0D9F6;border-radius:0px;")
                p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Glándulas tiroides y paratiroides:] la hormona tiroides que controla todo el metabolismo del cuerpo y la hormona paratiroides controla el metabolismo del calcio para el funcionamiento correcto de los músculos y nervios.
              .tarjeta.color-acento-botones.p-3(x="48%" y="18%" numero="5" style="background-color:#E0D9F6;border-radius:0px;")
                p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Timo:] participa en la regulación de las glándulas sexuales, crecimiento óseo y colabora en el desarrollo del sistema linfático.
              .tarjeta.color-acento-botones.p-3(x="52%" y="38%" numero="6" style="background-color:#E0D9F6;border-radius:0px;")
                p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Páncreas:] encargado de la producción de insulina para controlar los niveles de glucosa en sangre.
              .tarjeta.color-acento-botones.p-3(x="56%" y="33%" numero="7" style="background-color:#E0D9F6;border-radius:0px;")
                p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Glándulas adrenales:] participan en la regulación de los latidos del corazón y la presión arterial.
              .tarjeta.color-acento-botones.p-3(x="52%" y="46%" numero="8" style="background-color:#E0D9F6;border-radius:0px;")
                p.mb-0(style="color:#12263F;") #[strong(style="color:#12263F;") Testículos:] producción de testosterona y gametos masculinos.
    Separador
    .titulo-segundo
      h2#t_3_6 3.6 Sistema locomotor
    p(data-aos="fade-up") El sistema locomotor es la unión del aparato muscular y el aparato esquelético que está compuesto por los casi 650 músculos de distinto tamaño y forma que permiten la movilización del cuerpo, y los 206 huesos también de diversa forma y tamaño que le dan soporte al cuerpo y le sirven de protección a los órganos internos.
    p.mt-4(data-aos="fade-up") El sistema locomotor se divide en:
    TabsA.color-acento-contenido.mt-5
      .tarjeta.color-secundario--borde.p-4(titulo="Huesos")
        .row
          .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
            h4 Huesos
            p Sistema del cuerpo humano con funciones específicas de soporte y protección frente a posibles contactos externos que causan traumas. Los principales huesos y sus funciones son:
            ul.fa-ul.mt-3
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Cráneo:] protección del cerebro.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Costillas:] protección de órganos internos del tórax y pulmones.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Radio:] fundamental para los movimientos del antebrazo, para favorecer movimiento de la palma de la mano.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Cúbito:] estabilización del codo, antebrazo (forma y estructura).
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Coxal:] forma la cintura pélvica, compuesto por el ilion, el isquion y el pubis.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Fémur:] el hueso más grande y fuerte del cuerpo, situado en el muslo. Punto de fijación muy importante entre la rodilla y la cadera.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Tibia:] conecta la rodilla con los huesos del tobillo. Se conoce como el hueso más fuerte que carga el peso del cuerpo.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Peroné:] aporta estabilidad al tobillo y sirve para sujetar a los músculos en la pierna, soporta entre el 6 y el 17% del peso del cuerpo.
          .col-lg-3(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema3/20.svg" alt="Imagen decorativa" style="max-width:250px;margin:0 auto;")
      .tarjeta.color-secundario--borde.p-4(titulo="Articulaciones")
        .row
          .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
            h4 Articulaciones
            p Son estructuras que facilitan la unión entre dos huesos o entre un hueso y un cartílago y ligamentos. Favorecen los movimientos mecánicos brindando elasticidad. 
            p.mt-4 Existen de tres tipos: 
            ul.fa-ul.mt-3
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Móviles.]
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Semimóviles.]
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Fijas.]
            p.mt-4 Las principales articulaciones y sus funciones son:
            ul.fa-ul.mt-3
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Articulaciones del cuello:] facilita el movimiento de la cabeza y la rotación del cuello.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Costillas:] protección de órganos internos del tórax y pulmones.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Articulación del codo:] permite movimientos de flexión.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Articulación de la muñeca:] facilita movimientos de flexión y rotación de la muñeca.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Articulación de cadera:] articulación móvil, une la pelvis al fémur.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Articulación rodilla:] articulación móvil que facilita movimientos de flexión y extensión.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Articulación de tobillo:] permite movimientos de rotación, extensión y flexión.
          .col-lg-3(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema3/21.svg" alt="Imagen decorativa" style="max-width:250px;margin:0 auto;")
      .tarjeta.color-secundario--borde.p-4(titulo="Músculos")
        .row
          .col-lg-9.mb-4.mb-lg-0(style="place-self:center;")
            h4 Músculos
            p Sistema conformado por más de 650 músculos, cuya función principal es generar movimiento de manera involuntaria o voluntaria. Los principales músculos y sus funciones son:
            ul.fa-ul.mt-3
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Pectorales:] movilización de hombros y costillas.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Trapecio:] facilita el movimiento de hombros, cuello y estabiliza los omoplatos.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Cuádriceps:] ayuda a extender la rodilla para que esté completamente recta.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Abdominales:] movimiento, estabilización y flexión del tronco y la región lumbar. 
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Bíceps:] flexión de hombros y codos.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Tríceps:] extensión del antebrazo, codo y la aproximación del brazo y húmero.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Deltoides:] cualquier movimiento donde esté involucrado el levantamiento de peso.
          .col-lg-3(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema3/22.svg" alt="Imagen decorativa" style="max-width:250px;margin:0 auto;")
    Separador
    .titulo-segundo
      h2#t_3_7 3.7 Sistema reproductor
    p(data-aos="fade-up") El sistema está formado por un conjunto de órganos cuyas funciones van desde la generación y síntesis de hormonas sexuales (la micción) hasta la reproducción sexual.
    p.mt-4(data-aos="fade-up") A continuación, se exponen los sistemas de reproducción masculino y femenino, así como sus partes y funciones:
    .mt-5.tarjeta.tarjeta--gris.p-4(style="border-radius:0px;background-color:#DEE4F0;")
      SlyderA.slydera1
        div
          figure.col-lg-7.m-auto
            img(src="@/assets/curso/tema3/23.svg" style="max-width:550px;margin:0 auto;" alt="Muestra imagen sistema reproductor femenino señalando cuello uterino")
          .row.mt-5
            .col-lg-6.mb-4.mb-lg-0
              .p-4.h-100.cont_arrow1(style="background-color:#D2C6F9;")
                p.mb-0 #[strong Útero:] responsable de la alimentación del feto que se desarrolla hasta su nacimiento.
            .col-lg-6
              .p-4.h-100.cont_arrow2(style="background-color:#6FE6F4;")
                p.mb-0 #[strong Trompas de Falopio:] transporte de los óvulos desde el ovario hasta el útero, lugar donde el espermatozoide fecunda el óvulo.
        div
          figure.col-lg-7.m-auto
            img(src="@/assets/curso/tema3/24.svg" alt="Imagen decorativa" style="max-width:550px;margin:0 auto;")
          .row.mt-5
            .col-lg-6.mb-4.mb-lg-0
              .p-4.h-100.cont_arrow1(style="background-color:#D2C6F9;")
                p.mb-0 #[strong Endometrio:] capa interna del útero que recibe al óvulo fecundado. Se engrosa durante el ciclo menstrual para que el embrión pueda crecer de forma adecuada.
            .col-lg-6
              .p-4.h-100.cont_arrow2(style="background-color:#6FE6F4;")
                p.mb-0 #[strong Ovarios:] son las glándulas sexuales femeninas secretoras de los óvulos.
        div
          figure.col-lg-7.m-auto
            img(src="@/assets/curso/tema3/25.svg" alt="Imagen decorativa" style="max-width:550px;margin:0 auto;")
          .row.mt-5
            .col-lg-6.mb-4.mb-lg-0
              .p-4.h-100.cont_arrow1(style="background-color:#D2C6F9;")
                p.mb-0 #[strong Vagina:] canal del parto, eliminación de la sangre menstrual y lugar de ingreso del pene durante la penetración.
            .col-lg-6
              .p-4.h-100.cont_arrow2(style="background-color:#6FE6F4;")
                p.mb-0 #[strong Miometrio:] músculo del endometrio.
        div
          figure.col-lg-6.m-auto
            img(src="@/assets/curso/tema3/26.svg" alt="Muestra sistema reproductor masculino y debajo descripción de sus partes")
          .row.mt-5
            .col-lg-6.mb-4.mb-lg-0
              .p-4.h-100.cont_arrow1(style="background-color:#D2C6F9;")
                p.mb-0 #[strong Conductos eyaculatorios:] su función es almacenar temporalmente el líquido seminal.
            .col-lg-6
              .p-4.h-100.cont_arrow2(style="background-color:#6FE6F4;")
                p.mb-0 #[strong Próstata:] producción del semen. 
        div
          figure.col-lg-6.m-auto
            img(src="@/assets/curso/tema3/27.svg" alt="Imagen decorativa" style="max-width:550px;margin:0 auto;")
          .row.mt-5
            .col-lg-6.mb-4.mb-lg-0
              .p-4.h-100.cont_arrow1(style="background-color:#D2C6F9;")
                p.mb-0 #[strong Pene:] órgano masculino con funciones relacionadas con la eliminación de la orina y las relaciones sexuales.
            .col-lg-6
              .p-4.h-100.cont_arrow2(style="background-color:#6FE6F4;")
                p.mb-0 #[strong Conductos seminales:] tubos de almacén de espermatozoides y transporte del esperma fuera de la bolsa del escroto.
        div
          figure.col-lg-6.m-auto
            img(src="@/assets/curso/tema3/28.svg" alt="Imagen decorativa" style="max-width:400px;margin:0 auto;")
          .row.mt-5.m-auto
            .col-lg-6.m-auto
              .p-4.cont_arrow2(style="background-color:#6FE6F4;")
                p.mb-0 #[strong Testículos:] producir los gametos masculinos y las hormonas masculinas, principalmente la testosterona.
    Separador
    .titulo-segundo
      h2#t_3_8 3.8 Sistema tegumentario
    p(data-aos="fade-up") Este sistema surge de la unión de aquellos órganos y estructuras cuyo objetivo es brindar protección frente a agentes externos, así como mantener la temperatura corporal estable y controlada. Pertenecen a este el cabello, uñas y la piel.
    .tarjeta.tarjeta--azul.p-5.mt-5(style="background-color:#E2EFFB;")
      SlyderA(tipo="b")
        .row
          .col-lg-7.mb-4.mb-lg-0
            h4 Partes y funciones del sistema tegumentario
            ul.fa-ul.mt-3
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Piel:] considerado el órgano más grande del cuerpo, que está conformado por la epidermis (brinda flexibilidad y resistencia a la piel) y dermis (genera procesos que regula el flujo de sangre en la piel, llamados vasoconstricciones y vasodilataciones).
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Folículo piloso:]  zona de la piel donde nace el cabello.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Glándula sudorípara:] regula la temperatura a través de la sudoración y la humedad.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Vasos capilares:] intercambio de sustancias, nutrientes, oxígeno para su aporte o absorción.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Pelo:] actúa como termorregulador, protege la piel de la radiación solar al cuero cabelludo. 
          .col-lg-5
            figure
              img(src='@/assets/curso/tema3/29.svg' alt="Muestra imagen de capas de la piel humana donde en forma ascendente aparece: epidermis, dermis, tejido subcutáneo y musculo")
        .row
          .col-lg-7.mb-4.mb-lg-0
            h4 Estructura de la uña
            p.mt-3 Existen otras estructuras importantes para el sistema tegumentario formadas por el cuerpo a partir de la queratina para que actúen como una capa protectora en el área de los dedos y mejorar la sensibilidad en la zona de las yemas de los dedos.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema3/30.svg' alt="Muestra estructura de la uña con los textos que se relacionan en la parte inferior")
    Separador
    .titulo-segundo
      h2#t_3_9 3.9 Sistema inmunológico
    .cont_3_5.row
      .col-lg-5.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/32.svg" data-aos="fade-right" alt="Imagen decorativa" style="max-width:350px;margin:0 auto;")
      .col-lg-6(style="place-self:center;")
        .bg-white.p-4(style="border:3px #12263F dashed;border-radius:15px;")
          p.mb-0(data-aos="fade-up") Este sistema recibe varios nombres: inmunitario, inmunológico o inmune, debido a que es un mecanismo de defensa del organismo, cuyo objetivo es mantenerlo libre de agentes extraños nocivos, como toxinas, venenos o infecciones virales, bacterianas y de otros microorganismos, conocidos como antígenos.
        .cajon.color-secundario.p-4.mt-5(style="background-color:#E4DDFA;")
          p.mb-0(data-aos="fade-up") Las reacciones antígeno-anticuerpo se generan mediante la producción de células y de sustancias de defensa, como los glóbulos blancos (anticuerpos), cuya misión es reconocer y expulsar del organismo a los invasores.
      p.mt-5(data-aos="fade-up") Otros mecanismos de defensa son la inflamación de la zona afectada, el incremento de la temperatura corporal o fiebre.
      p.mt-4(data-aos="fade-up") A continuación, se amplía la información sobre este sistema.
    TabsC.color-secundario.mt-5
      .py-3.py-md-4(titulo="Función")
        .row.col-lg-11.m-auto
          .col-lg-5.mb-4.mb-lg-0
            p El sistema inmune opera de las siguientes dos formas.
            ul.fa-ul.mt-3
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Sistema inmune natural:] nace con los individuos y cuenta con mecanismos de defensa propios, llamado también sistema inmune innato o inespecífico.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Sistema inmune adquirido:] se adapta y posee una “memoria” celular para reconocer los agentes infecciosos con los que ya ha combatido, de modo que puede lidiar mejor con ellos en el futuro.
          .col-lg-7
            figure
              img(src="@/assets/curso/tema3/33.svg" alt="Imagen decorativa" style="max-width:350px;margin:0 auto;")
      .py-3.py-md-4(titulo="Partes")
        .row.col-lg-11.m-auto
          .col-lg-5.mb-4.mb-lg-0
            p Está conformado por los glóbulos blancos, de los cuales existen dos tipos.
            ul.fa-ul.mt-3
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Los linfocitos] que poseen memoria inmunológica.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong  Los fagocitos] que literalmente son los encargados de fagocitar los agentes extraños.
          .col-lg-7
            figure
              img(src="@/assets/curso/tema3/34.svg" alt="Imagen decorativa" style="max-width:350px;margin:0 auto;")
      .py-3.py-md-4(titulo="Enfermedades")
        .row.col-lg-11.m-auto
          .col-lg-5.mb-4.mb-lg-0
            p Las enfermedades más comunes de este sistema son: 
            ul.fa-ul.mt-3
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Alergias:] respuestas inmunes ante agentes externos no reconocidos por el organismo.
              li.mb-2
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong Enfermedades autoinmunes:] el sistema inmune ataca las propias células del cuerpo.
              li
                i.fas.fa-atom.fa-li(style="color:#7E5EE3;") 
                | #[strong  Enfermedades inmunosupresoras:] agentes que atacan las defensas del organismo. 
          .col-lg-7
            figure
              img(src="@/assets/curso/tema3/35.svg" alt="Imagen decorativa" style="max-width:350px;margin:0 auto;")
      .py-3.py-md-4(titulo="Estructuras")
        .row.col-lg-11.m-auto
          .col-lg-5.mb-4.mb-lg-0
            p En la siguiente imagen se podrán observar la estructura del sistema inmunológico:
          .col-lg-7
            figure
              img(src="@/assets/curso/tema3/36.svg" alt="Muestras estructura de sistema inmunológico y se describe en la parte inferior")

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    indicadorTarjetaFlip: true,
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
.cont_3_1, .cont_3_1 *
  position: relative
.cont_3_1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema3/1.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
.tarjeta.tarjeta--azul.acordion__activo
  background-color: #CDE0E3 !important
.acordion .tarjeta.tarjeta--azul
  background-color: #EBE6FB
.slyder-a__tipo-a .slyder-a__btn--atrs
  left: -50px
.slyder-a__tipo-a .slyder-a__btn--sigt
  right: -50px
.cont_3_2, .cont_3_2 *
  position: relative
.cont_3_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema3/11.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
.cont_3_3
  position: relative
.cont_3_3:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema3/15.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
.infografia1 .img-infografica__item__dot
  padding: 1.4rem
  left: -16px
.infografia1.img-infografica.color-acento-botones .img-infografica__item__numero, .img-infografica-b.color-acento-botones .img-infografica__item__numero
  color: #12263F
.bloque-texto-a.color-secundario
  background-color: #F6F6F6
.cont_3_4
  position: relative
.cont_3_4:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background-color: #F5FDFE
.infografia2 .img-infografica__item__dot
  padding: .9rem
  left: -8px
.infografia2.img-infografica.color-acento-botones .img-infografica__item__numero, .img-infografica-b.color-acento-botones .img-infografica__item__numero
  color: #12263F
.cont_arrow1, .cont_arrow2
  position: relative
.cont_arrow1:before
  content: ''
  position: absolute
  top: -29px
  width: 0
  height: 0
  left: 45%
  border-left: 30px solid transparent
  border-right: 30px solid transparent
  border-bottom: 30px solid #D2C6F9
.cont_arrow2:before
  content: ''
  position: absolute
  top: -29px
  width: 0
  height: 0
  left: 45%
  border-left: 30px solid transparent
  border-right: 30px solid transparent
  border-bottom: 30px solid #6FE6F4
.cont_3_5, .cont_3_5 *
  position: relative
.cont_3_5:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema3/31.png)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
.tabs-c.color-secundario .tabs-c__tab--active
  font-weight: bold
.slydera1 .slyder-a__tipo-a .slyder-a__bullets
  bottom: -20px
</style>
