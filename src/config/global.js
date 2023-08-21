export default {
  global: {
    componenteFormativo: 'Farmacología',
    descripcionCurso:
      'En este componente formativo se abordarán temas relacionados con la biología celular, fisioanatomía, bioquímica, farmacología y fitoquímica, los cuales son un insumo importante para el proceso de dispensación de los productos farmacéuticos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Biología celular',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Biomoléculas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Reproducción celular',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Botánica',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Niveles de organización',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Anatomía y fisiología',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Niveles de organización estructural',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Características del órgano humano vivo',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Terminología',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fisiología por sistemas del cuerpo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Sistema nervioso',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Sistema cardiovascular',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Sistema respiratorio',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Sistema digestivo',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Sistema endocrino',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Sistema locomotor',
            hash: 't_3_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.7',
            titulo: 'Sistema reproductor',
            hash: 't_3_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.8',
            titulo: 'Sistema tegumentario',
            hash: 't_3_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.9',
            titulo: 'Sistema inmunológico',
            hash: 't_3_9',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Bioquímica',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Fitoquímica',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Farmacología',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Farmacología general',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo: 'Disciplinas de la farmacología',
            hash: 't_6_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.3',
            titulo: 'Tipos de acción farmacológica',
            hash: 't_6_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.4',
            titulo: 'Nomenclatura',
            hash: 't_6_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.5',
            titulo: 'Información técnica de los medicamentos',
            hash: 't_6_5',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Definición de medicamento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Clasificación de los medicamentos',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Conceptos de farmacocinética y farmacodinamia',
            hash: 't_7_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.3',
            titulo: 'Formas farmacéuticas y tipos de productos farmacéuticos',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Farmacología especial',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Plantas medicinales',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      /*{
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Biología celular',
      referencia: 'Unprofesor.com. (2015). Partes de la célula procariota',
      tipo: 'Video',
      link: 'https://youtu.be/Gt15ksP7mPs',
    },
    {
      tema: 'Biología celular',
      referencia:
        'Khan Academy Español. (2015). Panorama de las células animales y vegetales | Biología | Khan Academy en español.',
      tipo: 'Video',
      link: 'https://youtu.be/E4mdLzfXmTY',
    },
    {
      tema: 'Bioquímica',
      referencia: 'Moreno, E. (2019). Introducción a la bioquímica. SENA.',
      tipo: 'Documento',
      descarga:
        '/downloads/Anexo1_CF012_PresentacionBioquimicaProteinas_y_aminoacidos.pdf',
    },
    {
      tema: 'Bioquímica',
      referencia:
        'Ces, B. (2019). Introducción al metabolismo de carbohidratos.',
      tipo: 'Video',
      link: 'https://youtu.be/_k2_I8x1J9k',
    },
    {
      tema: 'Bioquímica',
      referencia:
        'Nutrik L. N. Ana, K. (2020). Metabolismo de los ácidos nucleicos.',
      tipo: 'Video',
      link: 'https://youtu.be/bsmO8puZttM',
    },
    {
      tema: 'Bioquímica',
      referencia:
        'Learn, C. (2014). Síntesis de proteínas: transcripción y traducción. Nivel principiante.',
      tipo: 'Video',
      link: 'https://youtu.be/cwLVh2JHRYI',
    },
    {
      tema: 'Farmacología general',
      referencia:
        'Morón, F. (2002). Farmacología general. Editorial Ciencias Médicas.',
      tipo: 'Documento',
      descarga: '/downloads/Anexo3_CF012_FarmacologiaGeneral.pdf',
    },
    {
      tema: 'Farmacocinética',
      referencia:
        'Médica, J. (2018). Tema 1: Farmacocinética: absorción y vías de administración.',
      tipo: 'Video',
      link: 'https://youtu.be/bhbAeCIFVwQ',
    },
    {
      tema: 'Farmacocinética',
      referencia:
        'Unprofesor. (2020). Qué es la farmacodinamia: parámetros farmacodinamia receptores.',
      tipo: 'Video',
      link: 'https://youtu.be/NiP8wM4kQ9s',
    },
    {
      tema: 'Formas farmacéuticas',
      referencia:
        'Moreno, E. (2021). Formas farmacéuticas: origen, presentación, mecanismos de absorción y eliminación. SENA.',
      tipo: 'Presentación',
      descarga: '/downloads/Anexo5_CF012_Formas_farmaceuticas.pptx',
    },
    {
      tema: 'Farmacología especial',
      referencia: 'Moreno, E. (2021). Grupos terapéuticos. SENA.',
      tipo: 'Documento',
      descarga: '/downloads/Anexo2_CF012_Grupos_terapauticos.pdf',
    },
    {
      tema: 'Plantas medicinales',
      referencia:
        'Ministerio de Protección Social. (2009). Vademécum colombiano de plantas medicinales. Ministerio de Protección Social.',
      tipo: 'Vademécum',
      descarga:
        '/downloads/Anexo4_CF012_Vademecum_colombiano_plantas_medicinales.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Anatomía',
      significado:
        'ciencia que estudia la estructura, clasificación, situación y relaciones de los diferentes órganos y tejidos del cuerpo humano.',
    },
    {
      termino: 'Anabolismo',
      significado:
        'suma de todos los procesos metabólicos mediante los cuales se forman las biomoléculas complejas a partir de moléculas más sencillas. En general, estos procesos consumen energía celular y no la producen.',
    },
    {
      termino: 'Biología',
      significado:
        'ciencia que estudia la estructura de los seres vivos y sus procesos vitales.',
    },
    {
      termino: 'Biomoléculas',
      significado: 'moléculas esenciales para la vida.',
    },
    {
      termino: 'Bioquímica',
      significado:
        'ciencia que estudia la composición química de los seres vivos.',
    },
    {
      termino: 'Catabolismo',
      significado:
        'suma de todos los procesos metabólicos mediante los cuales las moléculas complejas se degradan a otras más sencillas, y que incluye los procesos mediante los cuales las moléculas se degradan para proporcionar energía celular.',
    },
    {
      termino: 'Célula',
      significado: 'unidad morfológica y funcional de todo ser vivo.',
    },
    {
      termino: 'Fármaco',
      significado:
        'toda sustancia química purificada utilizada en la prevención, diagnóstico, tratamiento, mitigación y cura de una enfermedad, para evitar la aparición de un proceso fisiológico no deseado o bien para modificar condiciones fisiológicas con fines específicos.',
    },
    {
      termino: 'Farmacocinética',
      significado:
        'rama de la farmacología que estudia los procesos a los que un fármaco es sometido a través de su paso por el organismo. Trata de dilucidar qué sucede con un fármaco desde el momento en el que es administrado hasta su total eliminación del cuerpo.',
    },
    {
      termino: 'Farmacodinamia',
      significado:
        'estudio de los efectos bioquímicos y fisiológicos de los fármacos y de sus mecanismos de acción y la relación entre la concentración del fármaco y el efecto de este sobre un organismo. Dicho de otra manera: el estudio de lo que le sucede al organismo por la acción de un fármaco.',
    },
    {
      termino: 'Fisiología',
      significado:
        'ciencia biológica que estudia las funciones de los sistemas de los seres vivos.',
    },
    {
      termino: 'Medicamento',
      significado:
        'droga o mezcla de drogas, con o sin adición de sustancias auxiliares, preparada para ser presentada como forma farmacéutica que se utiliza para la prevención, alivio, diagnóstico, tratamiento, curación o rehabilitación de las enfermedades del ser humano y de los animales.',
    },
    {
      termino: 'Planta medicinal',
      significado:
        'cualquier especie vegetal que contenga en uno de sus órganos los principios activos con actividad farmacológica, que se pueda utilizar con fines terapéuticos.',
    },
    {
      termino: 'Producto fitoterapéuticos',
      significado:
        'según el Decreto 2266 de 2004 es el producto medicinal empacado y etiquetado, cuyas sustancias activas provienen de material de planta medicinal o asociaciones de estas, presentado en estado bruto o en forma farmacéutica que se utiliza con fines terapéuticos. También puede provenir de extractos, tinturas y aceites.',
    },
  ],
  referencias: [
    {
      referencia:
        'Adui, S. (2006). Química de los alimentos. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Audesirk, T. (2008). Biología de la vida en la Tierra. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Brunton, L., Lazo, J., y Parker, K. (2006). Goodman y Gilman. Las bases farmacológicas de la terapéutica. McGraw-Hill.',
      link: '',
    },
    {
      referencia: 'Córdoba, D. (2008). Toxicología. Manual Moderno.',
      link: '',
    },
    {
      referencia:
        'Curtis, H., y Barnes, N. S. (2004). Biología. Editorial Médica Panamericana.',
      link: '',
    },
    {
      referencia:
        'Drake, R., y Wayne, A. (2013). Grey. Anatomía básica. Elsevier Editora Ltda.',
      link: '',
    },
    {
      referencia: 'Flórez, J. (1997). Farmacología humana. Masson S.A.',
      link: '',
    },
    {
      referencia: 'García, G. V. (2009). La amilasa.',
      link: 'http://cuidar-su-salud.blogspot.com.co/2009/10/la-amilasa.html',
    },
    {
      referencia:
        'Guillén, V. L. (s.f.). Estructura y propiedades de las proteínas.',
      link: 'https://www.uv.es/tunon/pdf_doc/proteinas_09.pdf',
    },
    {
      referencia: 'Hernández D., y López, V. (s.f.) Plantas medicinales.',
      link:
        'http://sgpwe.izt.uam.mx/files/users/uami/ifig/Plantas_medicinales_Seminario_Final_Silva_Nataly.pdf',
    },
    {
      referencia:
        'Isaza, C. (2008). Fundamentos de farmacología en terapéutica. PosterGraph.',
      link: '',
    },
    {
      referencia:
        'Katzung, B. G. (2002). Farmacología básica y clínica. Manual Moderno.',
      link: '',
    },
    {
      referencia:
        'Keith, L., Moore, A., Dailey, A., y Agur, M. (2005). Anatomía con orientación clínica de Moor. Wolters.',
      link: '',
    },
    {
      referencia: 'Lehninger, D. (2005). Principios de bioquímica. Omega.',
      link: '',
    },
    {
      referencia: 'Máster. (2011). Atlas comentado de anatomía. Marbán Libros.',
      link: '',
    },
    {
      referencia:
        'Melgor, L. A., y Valsecia, M. E. (2009). Farmacología médica. (Vol. 2). UNAH-VS.',
      link: '',
    },
    {
      referencia: 'Monroy, M. D. (s.f.). Estructura de los lípidos.',
      link: 'http://www.bioquimica.dogsleep.net/Teoria/archivos/Unidad71.pdf',
    },
    {
      referencia: 'Murray, R. (s.f.). Bioquímica de Harper. Mc Graw Hill.',
      link: '',
    },
    {
      referencia:
        'Uribe, F., Moreno, J., Aldana D., y Pineda, N. (2008). Manual de laboratorio de biología general. Universidad de Antioquia.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Edwing Amir Moreno Moreno',
          cargo: 'Experto Temático',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
        {
          nombre: 'Gustavo Santis Mancipe',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro:
            'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro:
            'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Gloria Amparo López Escudero',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmín Rocío Figueroa Pacheco',
          cargo: 'Diseño web-2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollo Fullstack-2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
