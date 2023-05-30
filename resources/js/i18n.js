import { createI18n } from "vue-i18n";

const messages = {
    es: {
        Productos: "Productos",
        Español: "Español",
        English: "Inglés",
        "¿Quiénes Somos?": "¿Quiénes Somos?",
        "¿Qué hacemos?": "¿Qué hacemos?",
        Sostenibilidad: "Sostenibilidad",
        "Nuestro Enfoque": "Nuestro Enfoque",
        "Agricultura Regenerativa": "Agricultura Regenerativa",
        "Trabajo social": "Trabajo social",
        Laboratorio: "Laboratorio",
        "Bio-seguridad": "Bio-seguridad",
        Certificaciones: "Certificaciones",
        Noticias: "Noticias",
        Contáctanos: "Contáctanos",
        "Excelencia agrícola desde 1933": "Excelencia agrícola desde 1933",
        "450 hectáreas con producción de banano de la variedad Gran Enano.":
            "450 hectáreas con producción de banano de la variedad Gran Enano.",
        "CONOCE MÁS DE NUESTRA HISTORIA": "CONOCE MÁS DE NUESTRA HISTORIA",
        "Nuestras Noticias": "Nuestras Noticias",
        "Iniciar Sesión": "Iniciar Sesión",
        "Somos una empresa familiar que desde 1933 nos hemos dedicado a producir artículos agrícolas de la mejor calidad para su exportación a los diferentes destinos del mundo.":
            "Somos una empresa familiar que desde 1933 nos hemos dedicado a producir artículos agrícolas de la mejor calidad para su exportación a los diferentes destinos del mundo.",
        "Gracias a las enseñanzas transmitidas por nuestros fundadores, nos enfocamos en contribuir al desarrollo social y económico, de nuestros colaboradores, sus familias y comunidades donde trabajamos. Y asi, poder ser una compania agroindustrial de clase mundial.":
            "Gracias a las enseñanzas transmitidas por nuestros fundadores, nos enfocamos en contribuir al desarrollo social y económico, de nuestros colaboradores, sus familias y comunidades donde trabajamos. Y asi, poder ser una compania agroindustrial de clase mundial.",
        "Somos una empresa líder en la región, cumpliendo con los valores y requisitos de ser una empresa exportadora. Distinguiéndonos por:":
            "Somos una empresa líder en la región, cumpliendo con los valores y requisitos de ser una empresa exportadora. Distinguiéndonos por:",
        Calidad: "Calidad",
        Transparencia: "Transparencia",
        Honestidad: "Honestidad",
        "Responsabilidad social y ambiental":
            "Responsabilidad social y ambiental",
        "A LO LARGO DE NUESTRA HISTORIA": "A LO LARGO DE NUESTRA HISTORIA",
        "HEMOS PRODUCIDO DIFERENTES CULTIVOS:":
            "HEMOS PRODUCIDO DIFERENTES CULTIVOS:",
        Algodón: "Algodón",
        Plátano: "Plátano",
        "Pimiento Morrón": "Pimiento Morrón",
        Tomate: "Tomate",
        Banano: "Banano",
        "Esto es lo que hacemos": "Esto es lo que hacemos",
        "Actualmente producimos": "Actualmente producimos",
        "más de 1,600,000": "más de 1,600,000",
        "cajas de banano": "cajas de banano",
        "premium por año": "premium por año",
        "Se está exportando alrededor de": "Se está exportando alrededor de",
        "Cajas por año.": "Cajas por año.",
        "Actualmente contamos con 450 hectáreas con producción de banano de la variedad Gran Enano para la exportación a los diferentes puntos del mundo.":
            "Actualmente contamos con 450 hectáreas con producción de banano de la variedad Gran Enano para la exportación a los diferentes puntos del mundo.",
        "Contamos con equipo experto en": "Contamos con equipo experto en",
        Trazabilidad: "Trazabilidad",
        "Que se dedica a conocer el origen, la ubicación y el historial de un producto en cualquier momento de su ciclo de vida.":
            "Que se dedica a conocer el origen, la ubicación y el historial de un producto en cualquier momento de su ciclo de vida.",
        Sostenibilidad: "Sostenibilidad",
        "Nos enfocamos en crear valor a largo plazo para los accionistas mediante el aprovechamiento de oportunidades y la gestión eficaz de los riesgos inherentes al desarrollo económico, medioambiental y social.":
            "Nos enfocamos en crear valor a largo plazo para los accionistas mediante el aprovechamiento de oportunidades y la gestión eficaz de los riesgos inherentes al desarrollo económico, medioambiental y social.",
        "trabajamos de la mano": "trabajamos de la mano",
        "Los grandes": "Los grandes",
        trabajos: "trabajos",
        "son hechos por la": "son hechos por la",
        perseverancia: "perseverancia",
        "¿Seguimos en contacto?": "¿Seguimos en contacto?",
        "Nombre y Apellido *": "Nombre y Apellido *",
        "Teléfono *": "Teléfono *",
        "Correo Electrónico *": "Correo Electrónico *",
        "Mensaje *": "Mensaje *",
        Enviar: "Enviar",
        "¡El Mensaje fue enviado correctamente, pronto nos pondremos en contacto!":
            "¡El Mensaje fue enviado correctamente, pronto nos pondremos en contacto!",
        "Debes completar la información del formulario para continuar.":
            "Debes completar la información del formulario para continuar.",
        "Enlaces Web": "Enlaces Web",
        Historia: "Historia",
        Nosotros: "Nosotros",
        Productos: "Productos",
        Recursos: "Recursos",
        "Política de Privacidad": "Política de Privacidad",
        "Términos y Condiciones": "Términos y Condiciones",
        BANANO: "BANANO",
        "Gran enano": "Gran enano",
        "PURÉ Y CONCENTRADOS": "PURÉ Y CONCENTRADOS",
        "de banano, maracuyá y pitaya.": "de banano, maracuyá y pitaya.",
        HARINA: "HARINA",
        "de banano": "de banano",
        BACTERIAS: "BACTERIAS",
        HONGOS: "HONGOS",
        "Nos enfocamos en crear valor a largo plazo para los accionistas mediante el aprovechamiento de oportunidades y la gestión eficaz de los riesgos inherentes al desarrollo económico, medioambiental y social.":
            "Nos enfocamos en crear valor a largo plazo para los accionistas mediante el aprovechamiento de oportunidades y la gestión eficaz de los riesgos inherentes al desarrollo económico, medioambiental y social.",
        "NUESTRA META:": "NUESTRA META:",
        "REUTILIZAR O RECICLAR EL 100% DE MATERIALES":
            "REUTILIZAR O RECICLAR EL 100% DE MATERIALES",
        "EN NUESTROS PROCESOS PARA EL 2025":
            "EN NUESTROS PROCESOS PARA EL 2025",
        "Manejo de los desechos de empacadoras.":
            "Manejo de los desechos de empacadoras.",
        "El compost o la composta": "El compost o la composta",
        "es un producto obtenido a partir de diferentes materiales de origen orgánico obtenidos de nuestras plantas empacadoras, los cuales son sometidos a un proceso biológico controlado de descomposición denominado compostaje.":
            "es un producto obtenido a partir de diferentes materiales de origen orgánico obtenidos de nuestras plantas empacadoras, los cuales son sometidos a un proceso biológico controlado de descomposición denominado compostaje.",
        "Contribuye al incremento de materia orgánica de los suelos, y por tanto a la mejora de su fertilidad, estructura y retención hídrica, previniendo así su erosión y degradación":
            "Contribuye al incremento de materia orgánica de los suelos, y por tanto a la mejora de su fertilidad, estructura y retención hídrica, previniendo así su erosión y degradación",
        "El humus de lombriz, también conocido como vermicompost o compost de lombriz, se obtiene de un proceso denominado vermicompostaje, en el cual las lombrices digieren material orgánico, descomponiéndolo gracias a la acción de sus enzimas digestivas y de la microflora presente en su organismo.":
            "El humus de lombriz, también conocido como vermicompost o compost de lombriz, se obtiene de un proceso denominado vermicompostaje, en el cual las lombrices digieren material orgánico, descomponiéndolo gracias a la acción de sus enzimas digestivas y de la microflora presente en su organismo.",
        "Permite solubilizar, fijar y retener los nutrientes y los elementos fertilizantes. Mejora la estructura física del suelo, formando agregados y reduciendo a erosión. Favorece la absorción de los rayos solares debido a su color oscuro. Regula los intercambios de aire, agua y calor entre la tierra, el aire y la planta.":
            "Permite solubilizar, fijar y retener los nutrientes y los elementos fertilizantes. Mejora la estructura física del suelo, formando agregados y reduciendo a erosión. Favorece la absorción de los rayos solares debido a su color oscuro. Regula los intercambios de aire, agua y calor entre la tierra, el aire y la planta.",
        "Como el humus es muy estable, es decir que los microorganismos no lo transforman mucho más. Puede tener una vida útil de incluso 100 años o más. En cambio, el compost aún se está transformando.":
            "Como el humus es muy estable, es decir que los microorganismos no lo transforman mucho más. Puede tener una vida útil de incluso 100 años o más. En cambio, el compost aún se está transformando.",
        "Con lo que normalmente tiene una vida útil de 3 años o más, apŕoximadamente.":
            "Con lo que normalmente tiene una vida útil de 3 años o más, apŕoximadamente.",
        "Cultivo de cobertura:": "Cultivo de cobertura:",
        "Como parte de la Sostenibilidad que estamos buscando como empresa estamos implementando un cultivo de cobertura en las áreas de producción, para reducir a 0 el uso de herbicidas en las áreas de producción, mantener la húmedad en los suelos, mejorar la estructura de los suelos agregando materia orgánica y optimizando el microclima para los microorganismos, permitiendo un mejor desarrollo radicular de los cultivos.":
            "Como parte de la Sostenibilidad que estamos buscando como empresa estamos implementando un cultivo de cobertura en las áreas de producción, para reducir a 0 el uso de herbicidas en las áreas de producción, mantener la húmedad en los suelos, mejorar la estructura de los suelos agregando materia orgánica y optimizando el microclima para los microorganismos, permitiendo un mejor desarrollo radicular de los cultivos.",
        "Manejo del Cambio Climático:": "Manejo del Cambio Climático:",
        "Somos socios del Instituto de cambio climático ICC":
            "Somos socios del Instituto de cambio climático ICC",
        "intentando tener un impacto en el clima y manejo de las cuencas hidrológicas de todo el Pais de una manera positiva.":
            "intentando tener un impacto en el clima y manejo de las cuencas hidrológicas de todo el Pais de una manera positiva.",
        "Estamos orientados a lograr calidad de vida laboral, compromiso y la retención de talento, aspectos que impactan de forma positiva en la productividad de la empresa.":
            "Estamos orientados a lograr calidad de vida laboral, compromiso y la retención de talento, aspectos que impactan de forma positiva en la productividad de la empresa.",
        "MAS DE 50 PROYECTOS CON": "MAS DE 50 PROYECTOS CON",
        "NUESTRAS COMUNIDADES:": "NUESTRAS COMUNIDADES:",
        "Alimentación.": "Alimentación.",
        "Concientización, muestreos y seguimiento de VIH en la región.":
            "Concientización, muestreos y seguimiento de VIH en la región.",
        "Programa de maestros, educación para niños de comunidades aledañas.":
            "Programa de maestros, educación para niños de comunidades aledañas.",
        "Campeonatos internos futbol.": "Campeonatos internos futbol.",
        "Cooperativa creada conjunto con colaboradores de la empresa.":
            "Cooperativa creada conjunto con colaboradores de la empresa.",
        "Trabajos de salud con colaboradores y niños.":
            "Trabajos de salud con colaboradores y niños.",
        "Reserva en Monterrico, costas del Pacifico de Guatemala":
            "Reserva en Monterrico, costas del Pacifico de Guatemala",
        "Trabajo de limpieza de playas y mantenimiento de biodiversidad de especies locales. Reproducción y liberación de la tortuga Parlama (Lepidochelys olivacea) o la conservación del Mangle en la costa del Pacifico.":
            "Trabajo de limpieza de playas y mantenimiento de biodiversidad de especies locales. Reproducción y liberación de la tortuga Parlama (Lepidochelys olivacea) o la conservación del Mangle en la costa del Pacifico.",
        "Control de plagas y enfermedades.":
            "Control de plagas y enfermedades.",
        "El laboratorio lo hicimos para controlar plagas y enfermedades que tenemos en las plantaciones para reducir el uso de cargas químicas que se aplicaban anterior mente y en la mayoría del sector.":
            "El laboratorio lo hicimos para controlar plagas y enfermedades que tenemos en las plantaciones para reducir el uso de cargas químicas que se aplicaban anterior mente y en la mayoría del sector.",
        "Con esto hemos eliminado o reducido las aplicaciones químicas para el control de: Nematodos, Cochinilla algodonosa, Tortuguilla, Aphidos, Picudo, Gallina ciega, Hormigas, etc.":
            "Con esto hemos eliminado o reducido las aplicaciones químicas para el control de: Nematodos, Cochinilla algodonosa, Tortuguilla, Aphidos, Picudo, Gallina ciega, Hormigas, etc.",
        "Beneficios secundarios que se obtienen de las liberaciones como: Aumento de las poblaciones de enemigos naturales, mejora la disponibilidad de nutrientes en el suelo, disminuye la necesidad de regar, mejora el sistema radicular de la planta, acelera la descomposicion de la materia orgánica, etc.":
            "Beneficios secundarios que se obtienen de las liberaciones como: Aumento de las poblaciones de enemigos naturales, mejora la disponibilidad de nutrientes en el suelo, disminuye la necesidad de regar, mejora el sistema radicular de la planta, acelera la descomposicion de la materia orgánica, etc.",
        "Trichoderma harzianum es un hongo saprofito, ampliamente utilizado como agente de control biológico contra diversos patógenos. Se utiliza en aplicaciones foliares, tratamiento de semillas y suelo para el control de diversas enfermedades.":
            "Trichoderma harzianum es un hongo saprofito, ampliamente utilizado como agente de control biológico contra diversos patógenos. Se utiliza en aplicaciones foliares, tratamiento de semillas y suelo para el control de diversas enfermedades.",
        "es un parásito facultativo de huevos de nematodos endoparásitos sedentarios, como: formadores de quistes (Heterodera, Globodera), agalladores (Meloidogyne), Rotylenchulus reniformis y el falso agallador Nacobbus aberrans.":
            "es un parásito facultativo de huevos de nematodos endoparásitos sedentarios, como: formadores de quistes (Heterodera, Globodera), agalladores (Meloidogyne), Rotylenchulus reniformis y el falso agallador Nacobbus aberrans.",
        "Paecilomyces lilacinus es un hongo que controla fitonematodos, principalmente especies del nematodo agallador Meloidogyne spp. Este hongo parasita huevos, adultos y quistes de nematodos. También puede afectar nematodos móviles que están fuera de las raíces.":
            "Paecilomyces lilacinus es un hongo que controla fitonematodos, principalmente especies del nematodo agallador Meloidogyne spp. Este hongo parasita huevos, adultos y quistes de nematodos. También puede afectar nematodos móviles que están fuera de las raíces.",
        "es un género de hongos con especies capaces de generar enfermedad en insectos y matarlos, el cual ha demostrado ser efectivo en el control de plagas como palomilla dorso de diamante (Plutella xylostella), Tortuguilla (Colasspis spp) y gallina ciega (Phyllophaga spp.) etc.":
            "es un género de hongos con especies capaces de generar enfermedad en insectos y matarlos, el cual ha demostrado ser efectivo en el control de plagas como palomilla dorso de diamante (Plutella xylostella), Tortuguilla (Colasspis spp) y gallina ciega (Phyllophaga spp.) etc.",
        "es un hongo saprofito de la clase Deuteromycetes, capaz de infectar a más de 200 especies de insectos. Es de apariencia polvosa, de color blanco o amarillento cremoso. es un poderoso aliado para el control de plagas de insectos, como picudo, trips, mosca blanca, pulgón, araña roja, etc.":
            "es un hongo saprofito de la clase Deuteromycetes, capaz de infectar a más de 200 especies de insectos. Es de apariencia polvosa, de color blanco o amarillento cremoso. es un poderoso aliado para el control de plagas de insectos, como picudo, trips, mosca blanca, pulgón, araña roja, etc.",
        "es un hongo saprofito de la clase Deuteromycetes, capaz de infectar a más de 200 especies de insectos. Es de apariencia polvosa, de color blanco o amarillento cremoso. es un poderoso aliado para el control de plagas de insectos, como picudo, trips, mosca blanca, pulgón, araña roja, etc.":
            "es un hongo saprofito de la clase Deuteromycetes, capaz de infectar a más de 200 especies de insectos. Es de apariencia polvosa, de color blanco o amarillento cremoso. es un poderoso aliado para el control de plagas de insectos, como picudo, trips, mosca blanca, pulgón, araña roja, etc.",
        "Es una bacteria insecticida que controla insectos como cochinilla algodonosa, Pulgon, Trips, Mosca Blanca.":
            "Es una bacteria insecticida que controla insectos como cochinilla algodonosa, Pulgon, Trips, Mosca Blanca.",
        "es una bacteria natural grampositiva que habita en el suelo, de esta se extrae la toxina Cry que actúa como insecticida y que se ha utilizado desde la década de 1950 para el control natural de insectos. Presenta toxicidad contra larvas de insectos-plaga de los órdenes Lepidóptera, Coleóptera y Díptera, entre otros.":
            "es una bacteria natural grampositiva que habita en el suelo, de esta se extrae la toxina Cry que actúa como insecticida y que se ha utilizado desde la década de 1950 para el control natural de insectos. Presenta toxicidad contra larvas de insectos-plaga de los órdenes Lepidóptera, Coleóptera y Díptera, entre otros.",
        "es una bacteria cosmopolita presente en numerosos hábitats y resulta ser un excelente agente de control biológico de enfermedades causadas por hongos y bacterias. Es de aplicación foliar y radicular combatiendo un amplio espectro de patógenos como: Sigatoka Negra, Fusarium , Pythium, Phytophthora, Rhizoctonia solani, Sclerotinia, Botrytis, Alternaría y Erwinia.":
            "es una bacteria cosmopolita presente en numerosos hábitats y resulta ser un excelente agente de control biológico de enfermedades causadas por hongos y bacterias. Es de aplicación foliar y radicular combatiendo un amplio espectro de patógenos como: Sigatoka Negra, Fusarium , Pythium, Phytophthora, Rhizoctonia solani, Sclerotinia, Botrytis, Alternaría y Erwinia.",
        "es un bacilo Gram-negativo, recto o ligeramente curvado pero no vibrioide, es saprofito. Se puede encontrar en suelo y agua. Es incapaz de formar esporas y crece aeróbicamente Azospirillum brasilense: fija nitrógeno dejándolo disponible para las raíces y promover el crecimiento y desarrollo radicular.":
            "es un bacilo Gram-negativo, recto o ligeramente curvado pero no vibrioide, es saprofito. Se puede encontrar en suelo y agua. Es incapaz de formar esporas y crece aeróbicamente Azospirillum brasilense: fija nitrógeno dejándolo disponible para las raíces y promover el crecimiento y desarrollo radicular.",
        "Como parte del Manejo Integrado de Plagas que implementamos, Importamos un Acaro depredador ( Neoseiulus Californicus ) para control de la plaga, Araña Roja ( Tetranychus urticae ) y con esto reducimos a 0 aplicaciones de químicos para el control de la plaga.":
            "Como parte del Manejo Integrado de Plagas que implementamos, Importamos un Acaro depredador ( Neoseiulus Californicus ) para control de la plaga, Araña Roja ( Tetranychus urticae ) y con esto reducimos a 0 aplicaciones de químicos para el control de la plaga.",
        "Asegurar la integridad y salud de nuestros colaboradores.":
            "Asegurar la integridad y salud de nuestros colaboradores.",
        "Covid: Desde el inicio de la pandemia iniciamos aumentando el servicio de transporte que se le brinda al personal para asegurar el distanciamiento mínimo establecido por el gobierno, proporcionando permisos especiales otorgados por el misterio de trabajo y de salud del país para poder transportar a los colaboradores a sus lugares de trabajo.":
            "Covid: Desde el inicio de la pandemia iniciamos aumentando el servicio de transporte que se le brinda al personal para asegurar el distanciamiento mínimo establecido por el gobierno, proporcionando permisos especiales otorgados por el misterio de trabajo y de salud del país para poder transportar a los colaboradores a sus lugares de trabajo.",
        "Implementamos toma de temperatura y desinfección de manos al ingreso y salida del autobús. Al ingresar a las instalaciones de las fincas nuevamente una toma de temperatura y desinfección.":
            "Implementamos toma de temperatura y desinfección de manos al ingreso y salida del autobús. Al ingresar a las instalaciones de las fincas nuevamente una toma de temperatura y desinfección.",
        "Durante las horas de comida se dividió en sectores y grupos compuestos cada uno de colaboradores de diferente area para evitar contaminación entre ellos mismos.":
            "Durante las horas de comida se dividió en sectores y grupos compuestos cada uno de colaboradores de diferente area para evitar contaminación entre ellos mismos.",
        "Durante el dia se implemento uso de Mascarillas, pantallas protectoras, desinfectantes etc. Para asegurar la integridad y salud de nuestros colaboradores.":
            "Durante el dia se implemento uso de Mascarillas, pantallas protectoras, desinfectantes etc. Para asegurar la integridad y salud de nuestros colaboradores.",
        "Fusarium es un hongo que pudre los aces vasculares de la planta de banano y sus síntomas incluyen la marchitez de las hojas y muerte de la unidad de crecimiento, por eso recibe el nombre de muerte por marchitez permanente.":
            "Fusarium es un hongo que pudre los aces vasculares de la planta de banano y sus síntomas incluyen la marchitez de las hojas y muerte de la unidad de crecimiento, por eso recibe el nombre de muerte por marchitez permanente.",
        "Hasta el momento no se ha encontrado el tratamiento para erradicar el hongo de las areas infectadas y la única alternativa es clausurar el area infectada esperando a que la enfermedad no se disemine por la region. Una de las mejores soluciones que se han estado investigando es el uso de microorganismos como Bacillus, Estreptomyces, trichodermas, etc para tratar de controlar o evitar si dispersión o inclusive evitar su reproducción en la misma area de cultivo.":
            "Hasta el momento no se ha encontrado el tratamiento para erradicar el hongo de las areas infectadas y la única alternativa es clausurar el area infectada esperando a que la enfermedad no se disemine por la region. Una de las mejores soluciones que se han estado investigando es el uso de microorganismos como Bacillus, Estreptomyces, trichodermas, etc para tratar de controlar o evitar si dispersión o inclusive evitar su reproducción en la misma area de cultivo.",
        "Como grupo hemos tomado medidas recomendadas por el equipo de expertos de APIB apoyados y asesorados por los diferentes grupos y países que están liderando la investigación para el control del hongo como OIRASA, MAGA etc.":
            "Como grupo hemos tomado medidas recomendadas por el equipo de expertos de APIB apoyados y asesorados por los diferentes grupos y países que están liderando la investigación para el control del hongo como OIRASA, MAGA etc.",
        "En los ingresos de cada area de producción tenemos varios protocolos para tratar de evitar el ingreso de material vegetativo o suelo proveniente de otras areas como:":
            "En los ingresos de cada area de producción tenemos varios protocolos para tratar de evitar el ingreso de material vegetativo o suelo proveniente de otras areas como:",
        "Evitar al máximo el ingreso de visitas, ventas, proveedores etc, a las areas de producción, tratar de tener reuniones fuera de las areas productivas.":
            "Evitar al máximo el ingreso de visitas, ventas, proveedores etc, a las areas de producción, tratar de tener reuniones fuera de las areas productivas.",
        "Si fuera necesario el ingreso de la persona, Se procede a desinfectar su calzado en pediluvios con desinfectante, se le entrega calzado de la finca para cambiarse y evitar que ingrese con su calzado a las áreas.":
            "Si fuera necesario el ingreso de la persona, Se procede a desinfectar su calzado en pediluvios con desinfectante, se le entrega calzado de la finca para cambiarse y evitar que ingrese con su calzado a las áreas.",
        "Si el vehículo de la visita o proveedor debe ingresar a la finca ingresa por area de rodaluvios en donde se desinfecta la rodada y el chasis completo con un arco de desinfección a presión.":
            "Si el vehículo de la visita o proveedor debe ingresar a la finca ingresa por area de rodaluvios en donde se desinfecta la rodada y el chasis completo con un arco de desinfección a presión.",
        "Las areas estancia divididas en pequeños bloques o anillos de seguridad donde se implementa nuevamente la desinfección de calzado.":
            "Las areas estancia divididas en pequeños bloques o anillos de seguridad donde se implementa nuevamente la desinfección de calzado.",
        "Se rodeo las areas de producción de un cultivo como cerco vivo para evitar el ingreso de personal o animales por areas que no están controladas.":
            "Se rodeo las areas de producción de un cultivo como cerco vivo para evitar el ingreso de personal o animales por areas que no están controladas.",
        "Se hacen aplicaciones constantes de microorganismos a los suelos para mantener inoculado y así tratar de evitar el ingreso del hongo patógeno o controlarlo al momento del ingreso y evitar que se disemine.":
            "Se hacen aplicaciones constantes de microorganismos a los suelos para mantener inoculado y así tratar de evitar el ingreso del hongo patógeno o controlarlo al momento del ingreso y evitar que se disemine.",
        "Todo esto para tratar de evitar o minimizar el riesgo del el ingreso del hongo patógeno a las areas de producción.":
            "Todo esto para tratar de evitar o minimizar el riesgo del el ingreso del hongo patógeno a las areas de producción.",
        "Entérate de todas nuestras": "Entérate de todas nuestras",
        "Advertencia, este apartado es solo para personal Autorizado.":
            "Advertencia, este apartado es solo para personal Autorizado.",
        "Inicia sesión para poder continuar":
            "Inicia sesión para poder continuar",
        "Correo electrónico": "Correo electrónico",
        Contraseña: "Contraseña",
        "¿Olvidaste tu contraseña?": "¿Olvidaste tu contraseña?",
        "Guardar Usuario": "Guardar Usuario",
        "Leer más": "Leer más",
        Cuenta: "Cuenta",
        "No hay noticias para mostrar": "No hay noticias para mostrar",
        "¡Ponte en contacto!": "¡Ponte en contacto!",
    },
    en: {
        Productos: "Products",
        Español: "Spanish",
        English: "English",
        "¿Quiénes Somos?": "About us",
        "¿Qué hacemos?": "What do we do?",
        Sostenibilidad: "Sustainability",
        "Nuestro Enfoque": "Our focus",
        "Agricultura Regenerativa": "Regenerative Agriculture",
        "Trabajo social": "Social Work",
        Laboratorio: "Laboratory",
        "Bio-seguridad": "Bio-Security",
        Certificaciones: "Certifications",
        Noticias: "News",
        Contáctanos: "Contact us",
        "Excelencia agrícola desde 1933": "Agricultural excellence since 1933",
        "450 hectáreas con producción de banano de la variedad Gran Enano.":
            "450 hectares with production of banana of the Gran Enano variety.",
        "CONOCE MÁS DE NUESTRA HISTORIA": "LEARN MORE ABOUT OUR HISTORY",
        "Nuestras Noticias": "Our News",
        "Iniciar Sesión": "Log in",
        "Somos una empresa familiar que desde 1933 nos hemos dedicado a producir artículos agrícolas de la mejor calidad para su exportación a los diferentes destinos del mundo.":
            "We are a family business that since 1933 has been dedicated to producing agricultural items of the best quality for export to different destinations around the world.",
        "Gracias a las enseñanzas transmitidas por nuestros fundadores, nos enfocamos en contribuir al desarrollo social y económico, de nuestros colaboradores, sus familias y comunidades donde trabajamos. Y asi, poder ser una compania agroindustrial de clase mundial.":
            "Thanks to the teachings transmitted by our founders, we focus on contributing to the social and economic development of our collaborators, their families and communities where we work. And thus, to be a world-class agro-industrial company.",
        "Somos una empresa líder en la región, cumpliendo con los valores y requisitos de ser una empresa exportadora. Distinguiéndonos por:":
            "We are a leading company in the region, complying with the values and requirements of being an exporting company. Distinguishing ourselves by:",
        Calidad: "Quality",
        Transparencia: "Transparency",
        Honestidad: "Honesty",
        "Responsabilidad social y ambiental":
            "Social and environmental responsibility",
        "A LO LARGO DE NUESTRA HISTORIA": "THROUGHOUT OUR HISTORY",
        "HEMOS PRODUCIDO DIFERENTES CULTIVOS:":
            "WE HAVE PRODUCED DIFFERENT CROPS:",
        Algodón: "Cotton",
        Plátano: "Plantain",
        "Pimiento Morrón": "Bell pepper",
        Tomate: "Tomato",
        Banano: "Banana",
        "Esto es lo que hacemos": "This is what we do",
        "Actualmente producimos": "We currently produce",
        "más de 1,600,000": "more than 1,600,000",
        "cajas de banano": "banana boxes",
        "premium por año": "premium per year",
        "Se está exportando alrededor de": "It is being exported around",
        "Cajas por año.": "Boxes per year.",
        "Actualmente contamos con 450 hectáreas con producción de banano de la variedad Gran Enano para la exportación a los diferentes puntos del mundo.":
            "Currently we have 450 hectares with production of bananas of the Gran Enano variety for export to different parts of the world.",
        "Contamos con equipo experto en": "We have an expert team in",
        Trazabilidad: "Traceability",
        "Que se dedica a conocer el origen, la ubicación y el historial de un producto en cualquier momento de su ciclo de vida.":
            "That is dedicated to knowing the origin, location and history of a product at any time in its life cycle.",
        Sostenibilidad: "Sustainability",
        "Nos enfocamos en crear valor a largo plazo para los accionistas mediante el aprovechamiento de oportunidades y la gestión eficaz de los riesgos inherentes al desarrollo económico, medioambiental y social.":
            "We focus on creating long-term shareholder value by seizing opportunities and effectively managing the risks inherent in economic, environmental and social development.",
        "trabajamos de la mano": "we work hand in hand",
        "Los grandes": "The big ones",
        trabajos: "jobs",
        "son hechos por la": "they are made by",
        perseverancia: "perseverance",
        "¿Seguimos en contacto?": "Keep in touch?",
        "Nombre y Apellido *": "Name and Surname *",
        "Teléfono *": "Phone *",
        "Correo Electrónico *": "Email *",
        "Mensaje *": "Message *",
        Enviar: "Send",
        "¡El Mensaje fue enviado correctamente, pronto nos pondremos en contacto!":
            "Message was sent correctly, we'll be in touch soon!",
        "Debes completar la información del formulario para continuar.":
            "You must complete the information on the form to continue.",
        "Enlaces Web": "Website Links",
        Historia: "History",
        Nosotros: "About",
        Productos: "Products",
        Recursos: "Resources",
        "Política de Privacidad": "Privacy Policy",
        "Términos y Condiciones": "Usage Terms & Conditions",
        BANANO: "BANANA",
        "Gran enano": "Great Dwarf",
        "PURÉ Y CONCENTRADOS": "MASH AND CONCENTRATE",
        "de banano, maracuyá y pitaya.": "banana, passion fruit and pitahaya.",
        HARINA: "FLOUR",
        "de banano": "banana",
        BACTERIAS: "BACTERIA",
        HONGOS: "FUNGUS",
        "Nos enfocamos en crear valor a largo plazo para los accionistas mediante el aprovechamiento de oportunidades y la gestión eficaz de los riesgos inherentes al desarrollo económico, medioambiental y social.":
            "We focus on creating long-term shareholder value by seizing opportunities and effectively managing the risks inherent in economic, environmental and social development.",
        "NUESTRA META:": "OUR GOAL:",
        "REUTILIZAR O RECICLAR EL 100% DE MATERIALES":
            "REUSE OR RECYCLE 100% OF MATERIALS",
        "EN NUESTROS PROCESOS PARA EL 2025": "IN OUR PROCESSES BY 2025",
        "Manejo de los desechos de empacadoras.": "Management of baler waste.",
        "El compost o la composta": "Compost or compost",
        "es un producto obtenido a partir de diferentes materiales de origen orgánico obtenidos de nuestras plantas empacadoras, los cuales son sometidos a un proceso biológico controlado de descomposición denominado compostaje.":
            "It is a product obtained from different materials of organic origin obtained from our packing plants, which are subjected to a controlled biological decomposition process called composting.",
        "Contribuye al incremento de materia orgánica de los suelos, y por tanto a la mejora de su fertilidad, estructura y retención hídrica, previniendo así su erosión y degradación":
            "It contributes to the increase of organic matter in the soil, and therefore to the improvement of its fertility, structure and water retention, thus preventing its erosion and degradation.",
        "El humus de lombriz, también conocido como vermicompost o compost de lombriz, se obtiene de un proceso denominado vermicompostaje, en el cual las lombrices digieren material orgánico, descomponiéndolo gracias a la acción de sus enzimas digestivas y de la microflora presente en su organismo.":
            "Worm humus, also known as vermicompost or worm compost, is obtained from a process called vermicomposting, in which worms digest organic material, decomposing it thanks to the action of their digestive enzymes and the microflora present in their body.",
        "Permite solubilizar, fijar y retener los nutrientes y los elementos fertilizantes. Mejora la estructura física del suelo, formando agregados y reduciendo a erosión. Favorece la absorción de los rayos solares debido a su color oscuro. Regula los intercambios de aire, agua y calor entre la tierra, el aire y la planta.":
            "It allows solubilizing, fixing and retaining nutrients and fertilizing elements. Improves the physical structure of the soil, forming aggregates and reducing erosion. It favors the absorption of solar rays due to its dark color. It regulates the exchanges of air, water and heat between the earth, the air and the plant.",
        "Como el humus es muy estable, es decir que los microorganismos no lo transforman mucho más. Puede tener una vida útil de incluso 100 años o más. En cambio, el compost aún se está transformando.":
            "As humus is very stable, meaning microorganisms don't transform it much further. It can have a lifespan of even 100 years or more. On the other hand, compost is still transforming.",
        "Con lo que normalmente tiene una vida útil de 3 años o más, apŕoximadamente.":
            "With what normally has a useful life of 3 years or more, approximately.",
        "Cultivo de cobertura:": "Cover Crop:",
        "Como parte de la Sostenibilidad que estamos buscando como empresa estamos implementando un cultivo de cobertura en las áreas de producción, para reducir a 0 el uso de herbicidas en las áreas de producción, mantener la húmedad en los suelos, mejorar la estructura de los suelos agregando materia orgánica y optimizando el microclima para los microorganismos, permitiendo un mejor desarrollo radicular de los cultivos.":
            "As part of the Sustainability that we are looking for as a company, we are implementing a cover crop in production areas, to reduce the use of herbicides in production areas to 0, maintain soil moisture, improve soil structure adding organic matter and optimizing the microclimate for microorganisms, allowing better root development of crops.",
        "Manejo del Cambio Climático:": "Climate Change Management:",
        "Somos socios del Instituto de cambio climático ICC":
            "We are members of the ICC Climate Change Institute",
        "intentando tener un impacto en el clima y manejo de las cuencas hidrológicas de todo el Pais de una manera positiva.":
            "trying to have an impact on the climate and management of the hydrological basins of the entire country in a positive way.",
        "Estamos orientados a lograr calidad de vida laboral, compromiso y la retención de talento, aspectos que impactan de forma positiva en la productividad de la empresa.":
            "We are oriented to achieve quality of work life, commitment and the talent retention, aspects that have a positive impact on the company productivity.",
        "MAS DE 50 PROYECTOS CON": "MORE THAN 50 PROJECTS WITH",
        "NUESTRAS COMUNIDADES:": "OUR COMMUNITIES:",
        "Alimentación.": "Nutrition.",
        "Concientización, muestreos y seguimiento de VIH en la región.":
            "Awareness, sampling and monitoring of HIV in the region.",
        "Programa de maestros, educación para niños de comunidades aledañas.":
            "Teachers program, education for children from surrounding communities.",
        "Campeonatos internos futbol.": "Internal soccer championships.",
        "Cooperativa creada conjunto con colaboradores de la empresa.":
            "Cooperative created jointly with collaborators of the company.",
        "Trabajos de salud con colaboradores y niños.":
            "Health work with collaborators and children.",
        "Reserva en Monterrico, costas del Pacifico de Guatemala":
            "Reserve in Monterrico, Pacific coast of Guatemala",
        "Trabajo de limpieza de playas y mantenimiento de biodiversidad de especies locales. Reproducción y liberación de la tortuga Parlama (Lepidochelys olivacea) o la conservación del Mangle en la costa del Pacifico.":
            "Beach cleaning work and maintenance of biodiversity of local species. Reproduction and release of the Parlama turtle (Lepidochelys olivacea) or the conservation of the Mangrove on the Pacific coast.",
        "Control de plagas y enfermedades.": "Control of pests and diseases.",
        "El laboratorio lo hicimos para controlar plagas y enfermedades que tenemos en las plantaciones para reducir el uso de cargas químicas que se aplicaban anterior mente y en la mayoría del sector.":
            "We did the laboratory to control pests and diseases that we have in the plantations to reduce the use of chemical loads that were previously applied and in most of the sector.",
        "Con esto hemos eliminado o reducido las aplicaciones químicas para el control de: Nematodos, Cochinilla algodonosa, Tortuguilla, Aphidos, Picudo, Gallina ciega, Hormigas, etc.":
            "With this we have eliminated or reduced the chemical applications for the control of: Nematodes, Cottony Cochineal, Tortuguilla, Aphidos, Weevil, Blind Man, Ants, etc.",
        "Beneficios secundarios que se obtienen de las liberaciones como: Aumento de las poblaciones de enemigos naturales, mejora la disponibilidad de nutrientes en el suelo, disminuye la necesidad de regar, mejora el sistema radicular de la planta, acelera la descomposicion de la materia orgánica, etc.":
            "Secondary benefits obtained from the releases such as: Increase in the populations of natural enemies, improve the availability of nutrients in the soil, decrease the need to irrigate, improve the root system of the plant, accelerate the decomposition of organic matter, etc.",
        "Trichoderma harzianum es un hongo saprofito, ampliamente utilizado como agente de control biológico contra diversos patógenos. Se utiliza en aplicaciones foliares, tratamiento de semillas y suelo para el control de diversas enfermedades.":
            "Trichoderma harzianum is a saprophytic fungus, widely used as a biological control agent against various pathogens. It is used in foliar applications, seed and soil treatment for the control of various diseases.",
        "es un parásito facultativo de huevos de nematodos endoparásitos sedentarios, como: formadores de quistes (Heterodera, Globodera), agalladores (Meloidogyne), Rotylenchulus reniformis y el falso agallador Nacobbus aberrans.":
            "is a facultative parasite of sedentary endoparasitic nematode eggs, such as: cyst-forming (Heterodera, Globodera), root-gillers (Meloidogyne), Rotylenchulus reniformis and the false root-giller Nacobbus aberrans.",
        "Paecilomyces lilacinus es un hongo que controla fitonematodos, principalmente especies del nematodo agallador Meloidogyne spp. Este hongo parasita huevos, adultos y quistes de nematodos. También puede afectar nematodos móviles que están fuera de las raíces.":
            "Paecilomyces lilacinus is a fungus that controls phytonmatodes, mainly root-knot nematode species Meloidogyne spp. This fungus parasitizes eggs, adults, and cysts of nematodes. It can also affect mobile nematodes that are outside the roots.",
        "es un género de hongos con especies capaces de generar enfermedad en insectos y matarlos, el cual ha demostrado ser efectivo en el control de plagas como palomilla dorso de diamante (Plutella xylostella), Tortuguilla (Colasspis spp) y gallina ciega (Phyllophaga spp.) etc.":
            "is a genus of fungi with species capable of generating disease in insects and killing them, which has proven to be effective in controlling pests such as diamondback moth (Plutella xylostella), turtle (Colasspis spp) and blind man's hen (Phyllophaga spp.) etc.",
        "es un hongo saprofito de la clase Deuteromycetes, capaz de infectar a más de 200 especies de insectos. Es de apariencia polvosa, de color blanco o amarillento cremoso. es un poderoso aliado para el control de plagas de insectos, como picudo, trips, mosca blanca, pulgón, araña roja, etc.":
            "is a saprophytic fungus of the Deuteromycetes class, capable of infecting more than 200 species of insects. It is powdery in appearance, creamy white or yellowish in color. It is a powerful ally for controlling insect pests such as weevils, thrips, whitefly, aphids, red spider mites, etc.",
        "es un hongo saprofito de la clase Deuteromycetes, capaz de infectar a más de 200 especies de insectos. Es de apariencia polvosa, de color blanco o amarillento cremoso. es un poderoso aliado para el control de plagas de insectos, como picudo, trips, mosca blanca, pulgón, araña roja, etc.":
            "is an entomopathogenic fungus, formerly known as Paecilomyces fumosoroseus. It shows promise as a biological pesticide with a wide range of hosts such as whitefly, red spider mite, Lepidoptera, etc.",
        "Es una bacteria insecticida que controla insectos como cochinilla algodonosa, Pulgon, Trips, Mosca Blanca.":
            "It is an insecticidal bacterium that controls insects such as cottony mealybug, aphids, thrips, whitefly.",
        "es una bacteria natural grampositiva que habita en el suelo, de esta se extrae la toxina Cry que actúa como insecticida y que se ha utilizado desde la década de 1950 para el control natural de insectos. Presenta toxicidad contra larvas de insectos-plaga de los órdenes Lepidóptera, Coleóptera y Díptera, entre otros.":
            "is a natural gram-positive bacterium that inhabits the soil, from which the Cry toxin is extracted, which acts as an insecticide and has been used since the 1950s for the natural control of insects. It presents toxicity against larvae of pest-insects of the orders Lepidoptera, Coleoptera and Diptera, among others.",
        "es una bacteria cosmopolita presente en numerosos hábitats y resulta ser un excelente agente de control biológico de enfermedades causadas por hongos y bacterias. Es de aplicación foliar y radicular combatiendo un amplio espectro de patógenos como: Sigatoka Negra, Fusarium , Pythium, Phytophthora, Rhizoctonia solani, Sclerotinia, Botrytis, Alternaría y Erwinia.":
            "is a cosmopolitan bacterium present in numerous habitats and turns out to be an excellent biological control agent for diseases caused by fungi and bacteria. It is for foliar and root application, fighting a wide spectrum of pathogens such as: Black Sigatoka, Fusarium, Pythium, Phytophthora, Rhizoctonia solani, Sclerotinia, Botrytis, Alternaria and Erwinia.",
        "es un bacilo Gram-negativo, recto o ligeramente curvado pero no vibrioide, es saprofito. Se puede encontrar en suelo y agua. Es incapaz de formar esporas y crece aeróbicamente Azospirillum brasilense: fija nitrógeno dejándolo disponible para las raíces y promover el crecimiento y desarrollo radicular.":
            "it is a Gram-negative bacillus, straight or slightly curved but not vibrioid, it is saprophytic. It can be found in soil and water. It is incapable of forming spores and grows aerobically Azospirillum brasilense: it fixes nitrogen, making it available to the roots and promoting root growth and development.",
        "Como parte del Manejo Integrado de Plagas que implementamos, Importamos un Acaro depredador ( Neoseiulus Californicus ) para control de la plaga, Araña Roja ( Tetranychus urticae ) y con esto reducimos a 0 aplicaciones de químicos para el control de la plaga.":
            "As part of the Integrated Pest Management that we implement, we import a predatory mite (Neoseiulus Californicus) to control the pest, Red Spider (Tetranychus urticae) and with this we reduce chemical applications to control the pest to 0.",
        "Asegurar la integridad y salud de nuestros colaboradores.":
            "Ensure the integrity and health of our collaborators.",
        "Covid: Desde el inicio de la pandemia iniciamos aumentando el servicio de transporte que se le brinda al personal para asegurar el distanciamiento mínimo establecido por el gobierno, proporcionando permisos especiales otorgados por el misterio de trabajo y de salud del país para poder transportar a los colaboradores a sus lugares de trabajo.":
            "Covid: Since the start of the pandemic, we began increasing the transportation service provided to staff to ensure the minimum distance established by the government, providing special permits granted by the country's labor and health mystery to be able to transport employees to their workplaces.",
        "Implementamos toma de temperatura y desinfección de manos al ingreso y salida del autobús. Al ingresar a las instalaciones de las fincas nuevamente una toma de temperatura y desinfección.":
            "We implement temperature taking and hand disinfection when entering and exiting the bus. When entering the facilities of the farms, a temperature and disinfection test will be taken again.",
        "Durante las horas de comida se dividió en sectores y grupos compuestos cada uno de colaboradores de diferente area para evitar contaminación entre ellos mismos.":
            "During lunch hours, they were divided into sectors and groups, each made up of collaborators from a different area to avoid contamination among themselves.",
        "Durante el dia se implemento uso de Mascarillas, pantallas protectoras, desinfectantes etc. Para asegurar la integridad y salud de nuestros colaboradores.":
            "During the day the use of masks, protective screens, disinfectants etc. was implemented. To ensure the integrity and health of our collaborators.",
        "Fusarium es un hongo que pudre los aces vasculares de la planta de banano y sus síntomas incluyen la marchitez de las hojas y muerte de la unidad de crecimiento, por eso recibe el nombre de muerte por marchitez permanente.":
            "Fusarium is a fungus that rots the vascular stems of the banana plant and its symptoms include wilting of the leaves and death of the growth unit, which is why it is called death by permanent wilting.",
        "Hasta el momento no se ha encontrado el tratamiento para erradicar el hongo de las areas infectadas y la única alternativa es clausurar el area infectada esperando a que la enfermedad no se disemine por la region. Una de las mejores soluciones que se han estado investigando es el uso de microorganismos como Bacillus, Estreptomyces, trichodermas, etc para tratar de controlar o evitar si dispersión o inclusive evitar su reproducción en la misma area de cultivo.":
            "So far no treatment has been found to eradicate the fungus from the infected areas and the only alternative is to close the infected area waiting for the disease to spread throughout the region. One of the best solutions that have been investigated is the use of microorganisms such as Bacillus, Streptomyces, trichodermas, etc. to try to control or avoid their dispersion or even avoid their reproduction in the same cultivation area.",
        "Como grupo hemos tomado medidas recomendadas por el equipo de expertos de APIB apoyados y asesorados por los diferentes grupos y países que están liderando la investigación para el control del hongo como OIRASA, MAGA etc.":
            "As a group we have taken measures recommended by the APIB team of experts supported and advised by the different groups and countries that are leading the investigation for the control of the fungus such as OIRASA, MAGA etc.",
        "En los ingresos de cada area de producción tenemos varios protocolos para tratar de evitar el ingreso de material vegetativo o suelo proveniente de otras areas como:":
            "In the income of each production area we have several protocols to try to avoid the entry of vegetative material or soil from other areas such as:",
        "Evitar al máximo el ingreso de visitas, ventas, proveedores etc, a las areas de producción, tratar de tener reuniones fuera de las areas productivas.":
            "Avoid as much as possible the entrance of visits, sales, suppliers etc, to the production areas, try to have meetings outside the production areas.",
        "Si fuera necesario el ingreso de la persona, Se procede a desinfectar su calzado en pediluvios con desinfectante, se le entrega calzado de la finca para cambiarse y evitar que ingrese con su calzado a las áreas.":
            "If it is necessary for the person to enter, their footwear is disinfected in footbaths with disinfectant, they are given farm footwear to change into and prevent them from entering the areas with their footwear.",
        "Si el vehículo de la visita o proveedor debe ingresar a la finca ingresa por area de rodaluvios en donde se desinfecta la rodada y el chasis completo con un arco de desinfección a presión.":
            "If the vehicle of the visit or supplier must enter the farm, it enters through the rodaluvios area where the track and the complete chassis are disinfected with a pressure disinfection arch.",
        "Las areas estancia divididas en pequeños bloques o anillos de seguridad donde se implementa nuevamente la desinfección de calzado.":
            "The stay areas divided into small blocks or security rings where shoe disinfection is once again implemented.",
        "Se rodeo las areas de producción de un cultivo como cerco vivo para evitar el ingreso de personal o animales por areas que no están controladas.":
            "The production areas of a crop were surrounded as a living fence to prevent the entry of personnel or animals through areas that are not controlled.",
        "Se hacen aplicaciones constantes de microorganismos a los suelos para mantener inoculado y así tratar de evitar el ingreso del hongo patógeno o controlarlo al momento del ingreso y evitar que se disemine.":
            "Constant applications of microorganisms are made to the soil to maintain inoculation and thus try to prevent the entry of the pathogenic fungus or control it at the time of entry and prevent its spread.",
        "Todo esto para tratar de evitar o minimizar el riesgo del el ingreso del hongo patógeno a las areas de producción.":
            "All this to try to avoid or minimize the risk of pathogenic fungus entering production areas.",
        "Entérate de todas nuestras": "Find out about all our",
        "Advertencia, este apartado es solo para personal Autorizado.":
            "Warning, this section is only for Authorized personnel.",
        "Inicia sesión para poder continuar": "Log in to continue",
        "Correo electrónico": "Email",
        Contraseña: "Password",
        "¿Olvidaste tu contraseña?": "Did you forget your password?",
        "Guardar Usuario": "Save User",
        "Leer más": "Read More",
        Cuenta: "Account",
        "No hay noticias para mostrar": "There are no news to show",
        "¡Ponte en contacto!": "Get in touch!",
    },
};

export const i18n = createI18n({
    locale: "es",
    fallbackLocale: "en",
    messages,
});
