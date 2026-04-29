const CARTAS = [
  {
    id:0, nombre:"El Loco", emoji:"🌀", romano:"0",
    amor:{
      normal:[
        "Un amor inesperado llega a tu camino. El universo te pide que te lances sin miedo: lo que buscabas estaba esperándote en el lugar menos pensado.",
        "La aventura amorosa comienza cuando menos lo esperas. Suelta el control, da el salto y confía en que el universo tiene algo extraordinario preparado para ti.",
        "Estás en el umbral de una historia de amor completamente nueva. La magia ocurre cuando te permites ser tú mismo sin filtros ni expectativas."
      ],
      invertida:[
        "La impulsividad en el amor te juega en contra. Antes de dar el siguiente paso, detente y pregúntate si lo que sientes es real o solo emoción del momento.",
        "Decisiones amorosas tomadas sin pensar están creando caos en tu vida emocional. La espontaneidad sin conciencia se convierte en irresponsabilidad.",
        "El miedo disfrazado de libertad te impide construir algo genuino. No toda huida es valentía; a veces quedarse es el acto más audaz."
      ]
    },
    dinero:{
      normal:[
        "Una oportunidad financiera surge de manera inesperada. El riesgo controlado puede ser tu mayor aliado; confía en tu intuición.",
        "El universo te presenta una apertura económica que no estaba en tus planes. Atrévete a explorar ese territorio desconocido con precaución y curiosidad.",
        "Una nueva fuente de ingresos aparece desde un ángulo inesperado. Tu disposición a experimentar será exactamente lo que necesitas para aprovecharla."
      ],
      invertida:[
        "Gastos impulsivos amenazan tu estabilidad. El dinero que no planificas desaparece. Es momento de hacer un presupuesto y respetarlo.",
        "Estás apostando más de lo que debes en una jugada financiera incierta. La emoción del riesgo no debe nublar tu juicio económico.",
        "La falta de planificación financiera te tiene corriendo de crisis en crisis. Es hora de sentar cabeza y construir una estrategia económica real."
      ]
    },
    trabajo:{
      normal:[
        "Estás en el umbral de una nueva etapa profesional. Tu audacia y creatividad abrirán puertas que otros ni siquiera ven.",
        "Un camino laboral completamente nuevo se abre ante ti. Aunque sea incierto, tu energía y entusiasmo son exactamente lo que ese desafío requiere.",
        "El universo te llama a salir de la zona de confort profesional. Lo que sientes como salto al vacío es en realidad el inicio de tu mejor capítulo laboral."
      ],
      invertida:[
        "La falta de foco te dispersa. Define tus objetivos laborales antes de dar el siguiente movimiento o perderás oportunidades valiosas.",
        "Estás cambiando de rumbo profesional tan seguido que no logras profundizar en nada. La constancia es la única herramienta que te falta.",
        "La impulsividad en tus decisiones laborales está dañando tu reputación. Antes de actuar, respira y evalúa las consecuencias reales."
      ]
    }
  },
  {
    id:1, nombre:"El Mago", emoji:"🪄", romano:"I",
    amor:{
      normal:[
        "Tienes todo lo que necesitas para construir el amor que deseas. Tu carisma es irresistible ahora: úsalo con intención.",
        "El poder de transformar tu vida amorosa está completamente en tus manos. Cada gesto, cada palabra tuya tiene el peso de la magia real.",
        "Tu energía magnética atrae exactamente lo que necesitas en el amor. Ahora más que nunca, lo que deseas y lo que manifiestas son la misma cosa."
      ],
      invertida:[
        "Cuidado con la manipulación en tus relaciones. Alguien podría no ser lo que parece, o tú mismo estás actuando desde la deshonestidad.",
        "El encanto que percibes en alguien podría ser una ilusión cuidadosamente construida. No te dejes deslumbrar sin investigar la profundidad real.",
        "Estás usando tus habilidades relacionales para evitar la vulnerabilidad real. El verdadero amor exige que bajes la guardia y te muestres auténtico."
      ]
    },
    dinero:{
      normal:[
        "Tu ingenio y habilidades están en su punto máximo. Es el momento de monetizar tus talentos. Lo que parece imposible, tú puedes hacerlo realidad.",
        "Tienes las herramientas financieras y el talento para crear prosperidad desde cero. Lo que necesitas para triunfar económicamente ya está en ti.",
        "Una alquimia económica única está a tu alcance: combinas ideas, recursos y habilidades de una manera que otros no pueden replicar."
      ],
      invertida:[
        "Recursos mal utilizados y proyectos sin terminar. Necesitas concentrar tu energía en una sola dirección para ver resultados.",
        "Tu potencial económico se dispersa en mil proyectos iniciados y ninguno completado. El enfoque es la única magia que te falta.",
        "Alguien en tu entorno podría estar manipulando información financiera en tu perjuicio. Revisa acuerdos y contratos con ojo crítico."
      ]
    },
    trabajo:{
      normal:[
        "Tienes las herramientas, la habilidad y el momento. Un proyecto importante está en tus manos y el éxito depende únicamente de ti.",
        "Tu capacidad para conectar puntos que otros no ven te convierte en indispensable ahora. Un logro significativo está muy cerca.",
        "El universo alinea circunstancias profesionales a tu favor. Tu habilidad única para transformar ideas en resultados será tu mayor activo."
      ],
      invertida:[
        "Estás subestimando tu propio potencial, o alguien en tu entorno laboral no está siendo transparente contigo.",
        "El talento sin dirección se convierte en ruido. Necesitas canalizar tu energía profesional hacia objetivos concretos y medibles.",
        "Una promesa laboral que suena demasiado bien para ser real probablemente lo es. Investiga antes de comprometerte."
      ]
    }
  },
  {
    id:2, nombre:"La Sacerdotisa", emoji:"🌙", romano:"II",
    amor:{
      normal:[
        "Confía en tu intuición romántica: lo que sientes en el fondo es verdad. Hay secretos por revelarse que cambiarán tu perspectiva.",
        "El amor que buscas está más cerca de lo que crees, pero aún envuelto en misterio. Tu capacidad de escuchar lo no dicho es tu mayor don ahora.",
        "Hay dimensiones ocultas en tu vida amorosa que aún no has explorado. Dale tiempo al tiempo: la verdad se revela sola a quienes saben esperar."
      ],
      invertida:[
        "Estás ignorando señales claras en tu relación. Tu intuición te habla, pero el miedo te impide escucharla.",
        "Secretos emocionales que guardas o que te guardan están erosionando la confianza. La intimidad real requiere transparencia.",
        "Te estás dejando llevar por la lógica cuando debería hablarte el corazón. Confiar en tus emociones no es debilidad, es sabiduría."
      ]
    },
    dinero:{
      normal:[
        "Hay información que aún no tienes y que cambiará tu panorama financiero. Investiga antes de invertir o firmar cualquier acuerdo.",
        "Tu intuición financiera está en su punto más agudo. Esa corazonada que tienes sobre un acuerdo o inversión merece ser escuchada.",
        "Los datos que necesitas para tu próxima gran decisión económica están disponibles, pero debes buscarlos activamente. La información es poder."
      ],
      invertida:[
        "Secretos financieros pueden estar afectándote. Revisa tus cuentas, contratos y compromisos con lupa.",
        "Estás tomando decisiones económicas con información incompleta. No avances hasta que tengas el cuadro completo.",
        "La intuición financiera que tienes está siendo bloqueada por lo que quieres creer. Mira los números tal como son, no como desearías que fueran."
      ]
    },
    trabajo:{
      normal:[
        "Tu sabiduría interior es tu mayor activo profesional ahora. No tomes decisiones apresuradas; espera el momento preciso y actúa con certeza.",
        "Hay una oportunidad laboral que todavía no se ha hecho visible del todo. Tu paciencia y observación aguda te permitirán verla antes que nadie.",
        "El conocimiento que has acumulado en silencio está a punto de convertirse en tu ventaja competitiva más importante."
      ],
      invertida:[
        "Información oculta en el entorno laboral puede perjudicarte. Confía menos en lo que te dicen, más en lo que ves.",
        "Estás ignorando señales de alerta en tu ambiente de trabajo. Lo que no quieres ver es exactamente lo que más necesitas analizar.",
        "Tu intuición profesional te está hablando pero el ruido externo la silencia. Tómate un momento de quietud para escuchar lo que ya sabes."
      ]
    }
  },
  {
    id:3, nombre:"La Emperatriz", emoji:"🌿", romano:"III",
    amor:{
      normal:[
        "Una época de abundancia y amor pleno se abre ante ti. Las relaciones florecen y la conexión emocional está en su punto más alto.",
        "El amor que te rodea es fértil y generoso. Es el momento de recibir con los brazos abiertos lo que el universo tiene para darte en el plano emocional.",
        "Tu capacidad de dar y recibir amor está en su máxima expresión. Las relaciones que cultivas ahora con cuidado florecerán de manera extraordinaria."
      ],
      invertida:[
        "Dependencia emocional o falta de cuidado propio afectan tus relaciones. Aprende a amarte primero.",
        "Estás dando tanto que te has vaciado. Nutrir a otros es hermoso, pero sin cuidarte a ti mismo/a primero no puedes sostenerlo.",
        "El miedo a quedarte solo/a te lleva a aferrarte a relaciones que ya no te nutren. La verdadera abundancia amorosa comienza contigo."
      ]
    },
    dinero:{
      normal:[
        "La abundancia llama a tu puerta. Es un excelente momento para inversiones y proyectos creativos.",
        "Tu capacidad de generar riqueza está en plena floración. Cualquier semilla económica que plantes ahora tiene el potencial de dar frutos extraordinarios.",
        "El universo conspira para traer prosperidad a tu vida. Reconoce las oportunidades de abundancia que ya están frente a ti."
      ],
      invertida:[
        "Excesos y derroches te alejan de la prosperidad. Valora lo que ya tienes antes de buscar más.",
        "La abundancia que sientes es ilusoria si no está sostenida por bases sólidas. Construye cimientos antes de ampliar el edificio.",
        "Una dependencia financiera de alguien más está limitando tu verdadera prosperidad. La autonomía económica es también una forma de amor propio."
      ]
    },
    trabajo:{
      normal:[
        "Tu creatividad y capacidad de nutrir proyectos están en auge. Un trabajo relacionado con el arte o el cuidado de otros traerá grandes satisfacciones.",
        "Estás en un período de productividad extraordinaria. Todo lo que tocas florece; es el momento de sembrar las semillas de tus proyectos más ambiciosos.",
        "Tu energía creativa es contagiosa y poderosa ahora. Los proyectos que lideras inspiran a otros y se convierten en algo más grande que tú mismo/a."
      ],
      invertida:[
        "Estás bloqueando tu propia creatividad por el perfeccionismo o el miedo al juicio ajeno. Suéltate y confía en tu proceso.",
        "La sobre-exigencia en el trabajo está sofocando la creatividad que podría ser tu mayor diferencial. El arte necesita espacio para respirar.",
        "Estás cuidando los proyectos de otros descuidando los tuyos propios. Tu potencial creativo merece también tu atención y cuidado."
      ]
    }
  },
  {
    id:4, nombre:"El Emperador", emoji:"⚔️", romano:"IV",
    amor:{
      normal:[
        "Estabilidad y solidez definen tu vida amorosa ahora. Una relación con bases firmes se consolida.",
        "El amor que construyes tiene la solidez de una roca. La estructura y el compromiso que aportas crean la seguridad que ambos necesitan.",
        "Una relación madura y confiable se fortalece. La estabilidad que aportas es el regalo más valioso que puedes darle a quien amas."
      ],
      invertida:[
        "El control excesivo o la rigidez están sofocando tu relación. El amor necesita espacio para crecer.",
        "Estás imponiendo tu voluntad en lugar de construir juntos. El amor verdadero es un acuerdo, no un dictado.",
        "La necesidad de control en tus relaciones nace del miedo. Trabajar esa inseguridad interior transformará tu manera de amar."
      ]
    },
    dinero:{
      normal:[
        "Tu disciplina financiera da sus frutos. Estructura tu economía, haz planes a largo plazo y ejerce control sobre tus recursos.",
        "Un período de sólido crecimiento económico recompensa tu constancia. Lo que construiste con paciencia empieza a dar sus dividendos.",
        "Tu capacidad de planificar a largo plazo te diferencia de la mayoría. Las estructuras económicas que construyes hoy serán tu patrimonio mañana."
      ],
      invertida:[
        "La falta de organización financiera te pasa factura. Necesitas disciplina y un plan concreto.",
        "Estás dejando que otros tomen decisiones económicas que deberían ser tuyas. Recupera el control de tus propias finanzas.",
        "La rigidez en tu estrategia financiera te impide adaptarte a las oportunidades. A veces la mejor estructura es la que sabe cuándo flexibilizarse."
      ]
    },
    trabajo:{
      normal:[
        "Tu liderazgo y autoridad son reconocidos. Un ascenso o proyecto importante bajo tu mando es inminente.",
        "Estás en el punto más alto de tu capacidad de liderazgo. Los desafíos que otros ven como obstáculos, tú los conviertes en oportunidades.",
        "Tu habilidad para crear orden y eficiencia en el caos es exactamente lo que tu entorno laboral necesita ahora."
      ],
      invertida:[
        "Conflictos de poder en el trabajo te agotan. Evalúa si estás ejerciendo autoridad con justicia.",
        "Una figura de autoridad en tu entorno laboral abusa de su poder. Decide conscientemente cómo responder sin comprometer tu integridad.",
        "Tu estilo de liderazgo puede estar generando resistencia sin que lo notes. Escucha más y ordena menos para obtener mejores resultados."
      ]
    }
  },
  {
    id:5, nombre:"El Hierofante", emoji:"🏛️", romano:"V",
    amor:{
      normal:[
        "Una relación con valores compartidos y compromisos sólidos se fortalece. El amor maduro y el respeto mutuo son tus guías.",
        "El amor que perdura es el que se construye sobre principios comunes. Una relación con bases éticas y espirituales compartidas te espera.",
        "Una unión significativa y comprometida está en tu horizonte. Más que pasión, lo que te espera es un amor que se elige todos los días."
      ],
      invertida:[
        "Estás eligiendo la convención sobre tu felicidad real. Las expectativas sociales no deben dictar tu vida amorosa.",
        "Una relación que parece correcta desde afuera te asfixia por dentro. La opinión de los demás no puede ser el criterio para elegir a quien amas.",
        "Estás siguiendo reglas de amor aprendidas en lugar de tu propio corazón. Es momento de preguntarte qué quieres realmente tú, no qué deberías querer."
      ]
    },
    dinero:{
      normal:[
        "Seguir métodos probados y buscar consejo de expertos será clave para tu prosperidad.",
        "La sabiduría financiera acumulada por otros puede ahorrarte años de errores. Busca un mentor económico o invierte en conocimiento probado.",
        "Una institución de confianza o un asesor experimentado tiene exactamente la guía que necesitas para tu próxima decisión financiera."
      ],
      invertida:[
        "Consejos financieros cuestionables o seguir el camino de otros sin pensar puede costarte caro.",
        "Estás siguiendo tendencias económicas sin evaluarlas críticamente. Lo que funciona para otros puede no ser lo correcto para tu situación.",
        "Una figura de supuesta autoridad financiera podría estar guiándote hacia su propio beneficio, no el tuyo. Cuestiona antes de seguir."
      ]
    },
    trabajo:{
      normal:[
        "La formación, la mentoría y el trabajo en instituciones consolidadas te benefician. Aprende de quienes tienen más experiencia.",
        "El conocimiento formal y la capacitación continua serán tus mejores inversiones laborales ahora. La excelencia se construye sobre bases sólidas.",
        "Un mentor o referente en tu campo tiene algo valioso para enseñarte. Abre los ojos y el ego: la humildad de aprender te llevará lejos."
      ],
      invertida:[
        "Una institución o figura de autoridad laboral está limitando tu potencial.",
        "Las reglas del juego profesional que seguiste hasta ahora ya no sirven para el camino que quieres recorrer. Es momento de redefinir el mapa.",
        "Estás dando más importancia a los títulos y jerarquías que al trabajo real. El verdadero mérito se demuestra con resultados, no con credenciales."
      ]
    }
  },
  {
    id:6, nombre:"Los Enamorados", emoji:"💕", romano:"VI",
    amor:{
      normal:[
        "Una elección fundamental en el amor está ante ti. El universo alinea las circunstancias para que sigas tu corazón.",
        "La conexión que sientes es real y profunda. La duda no viene de la relación sino del miedo a ser tan feliz. Confía en lo que ves.",
        "Una relación de alma a alma se presenta en tu vida. No es casualidad; es el universo respondiendo a lo más auténtico de tu corazón."
      ],
      invertida:[
        "Estás evitando una decisión difícil en el amor. La indecisión te paraliza y daña lo que podrías construir.",
        "Hay una elección pendiente que seguir postergando solo hace más difícil. Quien no elige también elige; el tiempo que pasa tiene un costo.",
        "Estás en dos aguas emocionalmente y ambas partes lo están pagando. La honestidad, aunque duela, es siempre más compasiva que la evasión."
      ]
    },
    dinero:{
      normal:[
        "Una decisión financiera importante se avecina. El dinero en alineación con tus principios trae verdadera prosperidad.",
        "Tienes ante ti dos caminos económicos muy distintos. El que está alineado con tus valores reales, aunque parezca el más difícil, es el correcto.",
        "Una asociación o sociedad financiera basada en valores compartidos puede multiplicar tu prosperidad de maneras que solo no lograrías."
      ],
      invertida:[
        "Decisiones financieras tomadas desde el miedo o la presión ajena. Recupera el control de tus elecciones económicas.",
        "Una sociedad económica que parecía perfecta revela grietas importantes. Evalúa con frialdad si los valores realmente se alinean.",
        "Estás eligiendo entre lo conveniente y lo correcto en términos financieros. Solo una de esas opciones te dejará dormir tranquilo/a."
      ]
    },
    trabajo:{
      normal:[
        "Una colaboración poderosa o una sociedad estratégica está por formarse. Las relaciones laborales basadas en valores compartidos serán muy productivas.",
        "Un equipo de trabajo donde hay verdadera sinergia y conexión está a punto de dar resultados extraordinarios.",
        "La elección laboral que tienes frente a ti es más importante de lo que parece. Sigue tu corazón profesional, no solo la razón económica."
      ],
      invertida:[
        "Desacuerdos y falta de alineación en el trabajo. Revisa si tus socios comparten realmente tu visión.",
        "Una colaboración laboral que prometía mucho está mostrando sus contradicciones. Los valores diferentes tarde o temprano generan fricción.",
        "Estás en el trabajo equivocado para quien eres realmente. Esa sensación de vacío que sientes es una brújula, no una debilidad."
      ]
    }
  },
  {
    id:7, nombre:"El Carro", emoji:"🏆", romano:"VII",
    amor:{
      normal:[
        "Victorias en el amor gracias a tu determinación. Si luchas por alguien, este es el momento en que tus esfuerzos dan fruto.",
        "Tu claridad y determinación amorosa son irresistibles ahora. Sabes lo que quieres y vas por ello sin perder de vista quién eres.",
        "Una conquista amorosa bien merecida está llegando. Tu constancia y enfoque han creado el terreno perfecto para que el amor florezca."
      ],
      invertida:[
        "Estás forzando una situación romántica que no fluye naturalmente. La voluntad de hierro puede convertirse en terquedad.",
        "Querer ganar en el amor a cualquier costo te está haciendo perder lo más importante: la conexión genuina.",
        "Tu necesidad de control en la relación genera la distancia que tanto temes. Suelta las riendas y permite que el amor fluya naturalmente."
      ]
    },
    dinero:{
      normal:[
        "Avance acelerado hacia tus metas financieras. Tu disciplina y enfoque te llevan directo al éxito.",
        "Tu impulso económico es imparable ahora. Cada acción que tomas en el plano financiero tiene más fuerza y dirección que nunca.",
        "Estás conduciendo tu economía con maestría. Los obstáculos que antes te detenían ahora son simplemente parte del camino."
      ],
      invertida:[
        "Falta de control sobre tus finanzas o impulsos de consumo te frenan. Recupera el timón de tu economía.",
        "Estás acelerando en la dirección incorrecta financieramente. Más velocidad sin la dirección correcta solo te lleva más lejos del destino.",
        "Una competencia económica con alguien de tu entorno te está llevando a decisiones impulsivas. La comparación financiera nunca termina bien."
      ]
    },
    trabajo:{
      normal:[
        "Estás en modo conquista: nada puede detenerte ahora. Un logro importante está muy cerca. Mantén el enfoque.",
        "Tu determinación profesional está en su punto más poderoso. Los que dudaban de ti están a punto de ser testigos de tu victoria.",
        "Una meta laboral que parecía lejana está al alcance de tu mano. El esfuerzo sostenido que pusiste finalmente encuentra su recompensa."
      ],
      invertida:[
        "Agresividad o competencia tóxica en el trabajo te perjudica. Ganar a cualquier costo no siempre vale la pena.",
        "Estás tan enfocado en ganar que perdiste de vista por qué empezaste. El éxito que busques debe tener sentido más allá del triunfo sobre otros.",
        "La dispersión de energía en múltiples frentes laborales te impide avanzar en ninguno. Elige una batalla y gánala."
      ]
    }
  },
  {
    id:8, nombre:"La Fuerza", emoji:"🦁", romano:"VIII",
    amor:{
      normal:[
        "El amor que persiste con paciencia y gentileza es el más poderoso. Tu capacidad de amar sin condiciones transforma la relación positivamente.",
        "La fortaleza emocional que demuestras en tu relación crea un vínculo que ninguna tormenta puede romper.",
        "Tu amor es como una llama que ilumina sin quemar. Esa capacidad de dar con ternura y recibir con gratitud es lo que hace únicas tus relaciones."
      ],
      invertida:[
        "Dudas sobre tu propio valor en el amor. Recuerda que mereces ser amado/a plenamente.",
        "La inseguridad que sientes en el amor no define lo que mereces. Trabajar tu autoestima es el acto más amoroso que puedes hacer contigo mismo/a.",
        "Estás siendo más fuerte para todos los demás que para ti mismo/a. El amor que das tan generosamente también te corresponde recibirlo."
      ]
    },
    dinero:{
      normal:[
        "La perseverancia es tu mayor activo financiero ahora. Mantén el rumbo incluso cuando parece lento.",
        "Tu fortaleza económica no se mide en lo que tienes sino en tu capacidad de sostenerte y recuperarte. Esa resiliencia es tu mayor riqueza.",
        "Un esfuerzo financiero sostenido con paciencia está a punto de mostrar resultados. No abandones justo antes del amanecer."
      ],
      invertida:[
        "El miedo y la inseguridad sabotean tus decisiones financieras. Confía en tu capacidad de generar recursos.",
        "Estás cediendo ante la presión financiera cuando más necesitas mantenerte firme. La capitulación ahora podría costarte más que el desafío mismo.",
        "La inseguridad económica que sientes es real pero también manejable. Paso a paso, con valentía, puedes reconstruir tu estabilidad financiera."
      ]
    },
    trabajo:{
      normal:[
        "Tu resiliencia y calma en situaciones de presión te distinguen. Un desafío laboral que parece insuperable está a punto de ceder.",
        "La fuerza interior que demuestras en tu trabajo inspira a quienes te rodean sin que te des cuenta. Eres más influyente de lo que crees.",
        "Tienes exactamente la fortaleza que este momento laboral requiere. Lo que para otros sería agotamiento, para ti es solo el comienzo del resultado."
      ],
      invertida:[
        "Estás al borde del agotamiento. Recupera fuerzas antes de seguir o corres el riesgo de colapsar en el momento más crucial.",
        "La fuerza de voluntad tiene límites. Reconocer cuándo pedir ayuda no es debilidad, es la mayor demostración de inteligencia laboral.",
        "Estás cargando el peso de todo el equipo sobre tus hombros. Delegar no es perder control, es multiplicar la capacidad de acción."
      ]
    }
  },
  {
    id:9, nombre:"El Ermitaño", emoji:"🕯️", romano:"IX",
    amor:{
      normal:[
        "Un período de introspección amorosa te guiará hacia la relación que realmente mereces.",
        "La soledad elegida es diferente al abandono. Este tiempo contigo mismo/a te revelará qué necesitas realmente en el amor.",
        "El silencio interior al que te llama esta carta es el mejor maestro amoroso. Lo que descubres de ti mismo/a en este período cambiará cómo te relacionas para siempre."
      ],
      invertida:[
        "El aislamiento excesivo y el miedo a la intimidad te alejan de conexiones genuinas.",
        "Estás construyendo muros tan altos que nadie puede acercarse realmente a ti. La protección que buscas se convierte en prisión.",
        "La soledad que sientes no es resultado de la falta de amor sino de la dificultad de recibirlo. Trabaja en abrirte, aunque duela."
      ]
    },
    dinero:{
      normal:[
        "Un análisis profundo de tus finanzas revelará el camino hacia la estabilidad. Investiga y reflexiona antes de actuar.",
        "El conocimiento financiero que buscas en soledad tiene más valor que el consejo de muchos. Investiga, estudia y confía en tus propias conclusiones.",
        "La sabiduría económica que necesitas no está en modas ni tendencias. Está en el análisis profundo y honesto de tu propia situación."
      ],
      invertida:[
        "Estás tan cerrado al consejo ajeno que rechazas ayuda valiosa. Un punto de vista externo sería exactamente lo que necesitas.",
        "El orgullo de no pedir orientación financiera puede salirte muy caro. La sabiduría también consiste en saber cuándo buscar a alguien que sabe más.",
        "Te estás aislando financieramente de recursos y redes que podrían multiplicar tus posibilidades. Conectar con otros no compromete tu independencia."
      ]
    },
    trabajo:{
      normal:[
        "Un período de investigación y reflexión profesional dará frutos. El trabajo silencioso de hoy construirá tu reputación de mañana.",
        "La profundidad de tu análisis laboral te diferencia. Mientras otros corren en superficie, tú vas a las raíces y eso hace la diferencia.",
        "Este tiempo de retiro profesional aparente es en realidad el período en que estás construyendo tu próximo gran paso. Confía en el proceso."
      ],
      invertida:[
        "Te estás aislando demasiado en lo laboral. La colaboración y la visibilidad son necesarias para avanzar.",
        "El trabajo que haces en soledad es valioso, pero invisible. Si nadie sabe lo que aportas, no puede reconocerte ni ayudarte a crecer.",
        "El aislamiento laboral que has elegido está frenando oportunidades que solo aparecen en el contacto con otros. Sal de tu cueva."
      ]
    }
  },
  {
    id:10, nombre:"Rueda de la Fortuna", emoji:"☸️", romano:"X",
    amor:{
      normal:[
        "La rueda gira a tu favor en el amor. Un cambio inesperado y afortunado transforma tu situación romántica.",
        "El ciclo del amor está cambiando en tu favor. Lo que parecía estancado de repente se mueve con una fuerza que no esperabas.",
        "Una coincidencia que no es casualidad trae al amor a tu vida desde la dirección más inesperada. El destino tiene sentido del humor."
      ],
      invertida:[
        "Una mala racha en el amor requiere paciencia. Nada dura para siempre, ni lo bueno ni lo malo.",
        "Estás resistiendo el cambio que el amor necesita para evolucionar. La rueda sigue girando quieras o no; mejor acompañar el movimiento.",
        "Un patrón amoroso que se repite en tu vida pide ser reconocido. La rueda vuelve al mismo punto hasta que aprendas lo que tiene para enseñarte."
      ]
    },
    dinero:{
      normal:[
        "Una oportunidad financiera única aparece en tu vida. Estar en el lugar correcto en el momento correcto: eso es lo que te espera.",
        "La fortuna financiera que llega no es pura suerte: es el resultado de la preparación encontrando el momento ideal. Estás listo/a.",
        "Un giro económico inesperado juega completamente a tu favor. No cuestiones demasiado por qué; aprovéchalo con gratitud."
      ],
      invertida:[
        "Un revés financiero inesperado. Aprovecha este período para fortalecer tus bases.",
        "La rueda de la fortuna económica está en su punto bajo, pero recuerda: siempre vuelve a girar hacia arriba. Prepárate para el próximo ciclo.",
        "Un golpe de mala suerte financiera te recuerda que la vida es cíclica. Lo que construyas en los momentos difíciles será lo que sostenga los buenos."
      ]
    },
    trabajo:{
      normal:[
        "Un giro del destino en tu carrera. Lo que parecía estancado de repente se mueve con fuerza.",
        "Una oportunidad laboral que no buscabas activamente aparece de manera sorpresiva. El universo tiene un plan mejor que el tuyo para tu carrera.",
        "La suerte laboral está de tu lado ahora. Ese contacto inesperado, esa conversación casual, puede cambiar el rumbo de tu carrera."
      ],
      invertida:[
        "Resistencia al cambio laboral te frena. La rueda sigue girando te guste o no; mejor adaptarte.",
        "Un cambio en las circunstancias laborales que no pediste te obliga a adaptarte. Hazlo con gracia y encontrarás oportunidades en lo que parece obstáculo.",
        "Un período de incertidumbre laboral llega a tu vida. La clave no es luchar contra el ciclo sino surfear sus olas con habilidad."
      ]
    }
  },
  {
    id:11, nombre:"La Justicia", emoji:"⚖️", romano:"XI",
    amor:{
      normal:[
        "El equilibrio y la verdad restauran tu vida amorosa. Lo que sembraste en el pasado regresa ahora.",
        "Las relaciones honestas y equilibradas son las que te merecen. Una situación amorosa justa y transparente se presenta ante ti.",
        "Una conversación franca que postergabas restaura el equilibrio en tu relación. La verdad dicha con amor siempre sana."
      ],
      invertida:[
        "Desequilibrio e injusticias en tus relaciones. Alguien no actúa con honestidad, o tú evitas una conversación necesaria.",
        "Estás dando mucho más de lo que recibes en tu vida amorosa y eso ya no es sostenible. El amor real es un intercambio, no un sacrificio unilateral.",
        "Una injusticia emocional que has normalizado merece ser cuestionada. Mereces una relación donde el trato sea recíproco."
      ]
    },
    dinero:{
      normal:[
        "Tus decisiones financieras éticas serán recompensadas. Contratos y acuerdos legales están a tu favor.",
        "El equilibrio financiero que has construido con honestidad está dando sus frutos. Lo que sembras con rectitud, lo cosechas con tranquilidad.",
        "Un acuerdo económico o legal se resolverá a tu favor. La justicia financiera que esperabas llega en el momento preciso."
      ],
      invertida:[
        "Problemas legales o financieros pendientes que ignorar solo empeoran.",
        "Un desequilibrio en un acuerdo económico necesita ser corregido antes de que se convierta en un problema mayor.",
        "Estás pagando las consecuencias de una decisión financiera que no fue del todo honesta. El universo siempre balancea las cuentas."
      ]
    },
    trabajo:{
      normal:[
        "Tu trabajo honesto recibe el reconocimiento que merece. Una evaluación o negociación saldrá a tu favor.",
        "El esfuerzo justo es recompensado con justicia. Un proceso laboral que te tenía en vilo se resuelve favorablemente.",
        "Tu reputación de integridad profesional es tu mayor activo ahora. Lo que construiste con honestidad es inatacable."
      ],
      invertida:[
        "Injusticias en el ambiente laboral te afectan. Defiende tus derechos con inteligencia.",
        "No estás siendo reconocido/a por el valor real de tu trabajo. Documentar tus logros y hablar con claridad es necesario ahora.",
        "Una situación laboral injusta pide ser confrontada. El silencio no es neutralidad; es complicidad con lo que no está bien."
      ]
    }
  },
  {
    id:12, nombre:"El Colgado", emoji:"🌊", romano:"XII",
    amor:{
      normal:[
        "Una pausa en tu vida amorosa es exactamente lo que necesitas. Cambiar tu perspectiva sobre el amor te revelará verdades transformadoras.",
        "Ver tu relación desde un ángulo completamente diferente cambia todo. Lo que parecía un problema puede ser exactamente lo que necesitabas ver.",
        "El amor, cuando se observa desde adentro sin prisa, revela su verdadera naturaleza. Este período de pausa te dará claridad que años de actividad no te darían."
      ],
      invertida:[
        "Estás estancado/a en un sacrificio emocional que no lleva a ningún lado. Es momento de soltar.",
        "Te has acostumbrado tanto a la espera en el amor que confundes resignación con paciencia. Pregúntate honestamente qué estás esperando realmente.",
        "El martirio emocional que mantienes no le sirve a nadie. Soltar no es rendirse; es elegir activamente tu propio bienestar."
      ]
    },
    dinero:{
      normal:[
        "Una inversión en tu desarrollo personal traerá retornos inesperados. A veces sacrificar lo inmediato es la inversión más inteligente.",
        "El período de aparente inactividad financiera que vives es en realidad una gestación. Lo que se prepara en silencio a veces es lo más importante.",
        "Mirar tu situación económica desde una perspectiva completamente nueva desbloqueará soluciones que antes eran invisibles para ti."
      ],
      invertida:[
        "Sacrificios financieros que no valen la pena. Revisa si lo que estás resignando realmente tiene un retorno futuro.",
        "Estás pagando un precio económico demasiado alto por una situación que no merece tanto sacrificio. Evalúa con frialdad el retorno real.",
        "El estancamiento financiero que vives no es una fase pasajera: es la consecuencia de decisiones que debes revisar con honestidad."
      ]
    },
    trabajo:{
      normal:[
        "Un período de espera y aprendizaje. El universo te pide que veas tu carrera desde otro ángulo.",
        "La pausa laboral obligada o elegida que vives ahora es más valiosa de lo que parece. Lo que aprendes en quietud no podrías aprenderlo en movimiento.",
        "Rendirte al proceso, aunque sea lento y desconcertante, es exactamente lo que tu carrera necesita en este momento."
      ],
      invertida:[
        "Resistencia a soltar un trabajo o proyecto que ya no te sirve. El estancamiento a veces es auto-impuesto.",
        "Llevas demasiado tiempo esperando que las cosas cambien solas en tu trabajo. El movimiento que esperas debe venir de ti.",
        "Estás invirtiendo energía laboral en algo que ya no tiene futuro. Reconocerlo no es fracasar; es liberar espacio para lo que sí vale la pena."
      ]
    }
  },
  {
    id:13, nombre:"La Muerte", emoji:"🦋", romano:"XIII",
    amor:{
      normal:[
        "Un capítulo amoroso termina para que uno mejor pueda comenzar. No temas este final; es la transformación más profunda que necesitabas.",
        "Lo que sientes que muere en tu vida amorosa no es el amor mismo, sino la versión de ti que ya no puede seguir creciendo en esa dinámica.",
        "El final que enfrentas en el amor abre espacio para una versión tuya más libre y auténtica. No hay pérdida sin el germen de algo nuevo."
      ],
      invertida:[
        "Te aferras a algo que ya murió emocionalmente. Resistir el fin de una relación solo prolonga el dolor.",
        "Estás manteniendo con vida artificial algo que ya tuvo su ciclo completo. La compasión más grande que puedes mostrar es soltar.",
        "El miedo al vacío que dejaría soltar esta relación es más intenso que el amor que la sostiene. Reconocerlo es el primer paso hacia la libertad."
      ]
    },
    dinero:{
      normal:[
        "Transición financiera profunda. Un ciclo económico termina y uno nuevo, más próspero, comienza.",
        "La transformación económica que vives, aunque dolorosa, elimina lo que ya no funciona para dejar espacio a lo que puede florecer.",
        "Una restructuración financiera radical está en marcha. No es destrucción: es la alquimia necesaria para construir prosperidad sobre bases nuevas."
      ],
      invertida:[
        "Resistencia a cambios financieros necesarios. El miedo te mantiene atado a situaciones que ya no funcionan.",
        "Estás aferrando a un modelo económico que ya llegó a su límite. Lo que fue tu estabilidad puede convertirse en tu trampa si no evolucionas.",
        "La negativa a cerrar un ciclo financiero que ya terminó te tiene atrapado/a en pérdidas evitables. Es hora de cortar con lo que ya no tiene futuro."
      ]
    },
    trabajo:{
      normal:[
        "Una transformación laboral radical está llegando. Puede ser un cambio de carrera o el inicio de algo completamente nuevo. Abrázalo.",
        "La muerte de este capítulo profesional es el nacimiento de tu versión más auténtica en el trabajo. No llores lo que termina; celebra lo que comienza.",
        "Un rol o identidad profesional que ya cumplió su función está siendo reemplazado por algo más verdadero. Suéltate al proceso de transformación."
      ],
      invertida:[
        "Estás postergando un cambio laboral inevitable. Cuanto más lo resistas, más traumático será.",
        "Seguir en un trabajo o rol que ya murió no es lealtad: es miedo al cambio. El precio de quedarse sigue subiendo.",
        "Cada día que postpones la transformación laboral que sabes que necesitas es un día de energía vital invertida en lo equivocado."
      ]
    }
  },
  {
    id:14, nombre:"La Templanza", emoji:"✨", romano:"XIV",
    amor:{
      normal:[
        "La paciencia y el equilibrio son tus aliados en el amor. Una relación que se construye con calma tiene más futuro que cualquier pasión apresurada.",
        "El amor más duradero es el que mezcla fuego y agua en sus proporciones exactas. Estás aprendiendo esa alquimia relacional ahora.",
        "Una relación que parecía imposible por sus diferencias encuentra el punto medio donde ambos pueden florecer. El equilibrio que logran es su mayor fortaleza."
      ],
      invertida:[
        "Excesos emocionales o desequilibrios en la dinámica de tu relación. Necesitas recuperar el centro.",
        "Estás yendo de extremo en extremo emocionalmente y eso agota a quienes te rodean. El equilibrio interior es la base de cualquier amor estable.",
        "La impaciencia está saboteando una relación que con tiempo y calma podría ser extraordinaria. Respira, confía y deja que el proceso tenga su ritmo."
      ]
    },
    dinero:{
      normal:[
        "Un manejo moderado de tus recursos te llevará a la estabilidad duradera. Los mejores resultados requieren tiempo.",
        "La templanza financiera que estás cultivando creará una prosperidad sólida y sustentable. Lo que se construye con moderación, se sostiene con solidez.",
        "Encuentra el punto medio entre el ahorro extremo y el gasto libre: esa zona de equilibrio es donde florece tu prosperidad real."
      ],
      invertida:[
        "Desequilibrios financieros por extremos: o gastas demasiado o te privas innecesariamente.",
        "Una relación desequilibrada con el dinero, ya sea de escasez o de derroche, necesita ser recentrada. El bienestar financiero vive en el equilibrio.",
        "Las oscilaciones económicas que experimentas son el reflejo de un desequilibrio más profundo. Trabajar tu relación con el dinero a nivel emocional transformará tus resultados."
      ]
    },
    trabajo:{
      normal:[
        "La moderación, la diplomacia y la paciencia son tus mejores herramientas laborales ahora.",
        "Tu capacidad de encontrar el punto medio en conflictos laborales es un don extraordinario que muy pocos tienen. Úsalo con conciencia.",
        "Un proceso laboral que requiere tiempo y ajustes finos está dando exactamente los resultados que necesita. No apresures lo que pide maduración."
      ],
      invertida:[
        "Impaciencia y falta de moderación arruinan proyectos que tenían potencial.",
        "Estás tomando decisiones laborales desde la extremidad: todo o nada, ahora o nunca. La zona gris que evitas es donde viven las mejores soluciones.",
        "El exceso de trabajo o la falta de límites laborales está desequilibrando todas las áreas de tu vida. Urgente: recupera la moderación."
      ]
    }
  },
  {
    id:15, nombre:"El Diablo", emoji:"🔗", romano:"XV",
    amor:{
      normal:[
        "Una atracción poderosa e irresistible marca tu vida amorosa. Disfrútala con conciencia: el deseo puede ser hermoso desde la libertad.",
        "La pasión intensa que vives no es peligrosa si viene desde la elección libre. Disfruta la atracción siendo honesto/a contigo mismo/a sobre lo que quieres.",
        "Un magnetismo irresistible entre dos personas crea una historia amorosa que no deja a nadie indiferente. Vívelo plenamente pero con los ojos abiertos."
      ],
      invertida:[
        "Una relación tóxica o adictiva te tiene atrapado/a. Reconocer la trampa es el primer paso para liberarte.",
        "El patrón que se repite en tus relaciones no es mala suerte: es un reflejo de algo propio que necesita sanación. La trampa siempre es interna antes que externa.",
        "Estás confundiendo intensidad con amor. Lo que te encadena no siempre se siente como una cadena, especialmente al principio."
      ]
    },
    dinero:{
      normal:[
        "Una oportunidad financiera muy tentadora aparece. Evalúa si la ambición te guía hacia el crecimiento genuino.",
        "Tu ambición económica está siendo un motor poderoso ahora. Canalizada desde la conciencia, puede llevarte exactamente donde quieres ir.",
        "Una oferta financiera muy atractiva aparece. Analiza sus términos con detenimiento: las mejores oportunidades brillan a la luz del escrutinio."
      ],
      invertida:[
        "Ataduras financieras: deudas o dependencias que te quitan libertad económica. Es urgente romper esas cadenas.",
        "Una adicción de consumo, un préstamo que te tiene atrapado/a, o una dependencia económica de otro: algo te encadena financieramente y debes liberarte.",
        "Estás tomando decisiones económicas desde la compulsión, no desde la claridad. La urgencia que sientes para gastar o arriesgar merece ser cuestionada."
      ]
    },
    trabajo:{
      normal:[
        "Tu ambición es tu motor ahora. Canalizada correctamente puede llevarte muy lejos.",
        "La energía y el impulso que tienes en tu carrera son extraordinariamente poderosos en este momento. Úsalos con intención y sin perder tu brújula ética.",
        "Un desafío laboral que otros evitan por su complejidad o riesgo puede ser exactamente tu mayor oportunidad de destacar."
      ],
      invertida:[
        "Ambiente laboral tóxico o dependencia de una situación que te hace daño. El miedo al cambio te encadena más que la situación misma.",
        "Estás atrapado/a en una dinámica laboral que te degrada pero el miedo económico te impide moverte. La jaula de oro sigue siendo una jaula.",
        "Una adicción al trabajo o una obsesión con el éxito a cualquier precio está destruyendo silenciosamente otras áreas de tu vida."
      ]
    }
  },
  {
    id:16, nombre:"La Torre", emoji:"⚡", romano:"XVI",
    amor:{
      normal:[
        "Una revelación impactante sacude tu vida amorosa. Aunque doloroso, lo que se derrumba no era verdadero.",
        "Una verdad que cambia todo en tu relación sale a la luz. El impacto inicial es intenso, pero lo que sobrevive a esta sacudida es lo único real que tenían.",
        "Una crisis amorosa inesperada actúa como un rayo purificador. Lo que derrumba, lo derrumba porque no tenía bases. Lo que queda en pie, es para siempre."
      ],
      invertida:[
        "Evitas un colapso inevitable acumulando tensiones. La explosión aplazada siempre es más destructiva.",
        "Estás parcheando grietas que ya son fracturas en tu relación. El derrumbe que evitas hoy solo crece mientras lo ignoras.",
        "Una conversación que tienes miedo de tener tiene el poder de evitar un daño mucho mayor. La prevención siempre es menos dolorosa que la destrucción."
      ]
    },
    dinero:{
      normal:[
        "Un shock financiero inesperado. No es el fin: es el universo forzándote a reconstruir sobre bases más sólidas.",
        "Una pérdida económica que parece catastrófica en el momento lleva en sí misma la semilla de una reconstrucción más sólida y auténtica.",
        "Lo que se derrumba en tus finanzas no merece ser reconstruido igual. Usa este momento de ruptura para redesignar sobre bases completamente nuevas."
      ],
      invertida:[
        "Pequeñas crisis que ignorar se acumulan en una grande. Atiende las señales de alerta ahora.",
        "El estrés financiero que sientes pero minimizas está enviando señales que deberías escuchar. Una revisión honesta ahora evita un colapso después.",
        "Aplazar las decisiones financieras difíciles solo aumenta el costo del inevitable ajuste. La valentía de actuar ahora vale más que la comodidad de ignorar."
      ]
    },
    trabajo:{
      normal:[
        "Una situación laboral explota de manera inesperada. El caos de hoy es el comienzo de una restructuración que beneficiará tu carrera.",
        "Un cambio laboral abrupto y no planificado te lanza hacia una dirección que jamás habrías elegido conscientemente. Exactamente la que necesitabas.",
        "La torre de tu carrera que creías sólida se sacude. Lo que cae debía caer; lo que permanece es la verdadera estructura de tu potencial."
      ],
      invertida:[
        "Estás en un ambiente laboral que colapsará pero te niegas a verlo. Prepara un plan de contingencia.",
        "Las señales de crisis en tu entorno laboral son visibles para todos menos para ti. Bajar la guardia ahora puede atraparte en el peor momento.",
        "Resistir el cambio laboral que ya está en marcha te posiciona en el lado equivocado de la transformación. Mejor ser quien la lidera que quien la sufre."
      ]
    }
  },
  {
    id:17, nombre:"La Estrella", emoji:"⭐", romano:"XVII",
    amor:{
      normal:[
        "Esperanza y renovación en el amor. Después de tiempos difíciles, la luz regresa a tu vida sentimental.",
        "Una energía de sanación y apertura amorosa llega a tu vida. El amor que creías imposible después de tanto dolor vuelve a ser una posibilidad real.",
        "El universo te envía una señal de esperanza en el amor. La persona o la conexión que buscabas está más cerca de lo que imaginas."
      ],
      invertida:[
        "Desilusión y pérdida de fe en el amor. El pesimismo que sientes es temporal; pero necesitas sanar antes de abrirte.",
        "Las heridas amorosas no sanadas te impiden ver las oportunidades que hay frente a ti. El trabajo interior que postergues hoy será el obstáculo de mañana.",
        "La desesperanza que sientes respecto al amor no es una profecía: es una herida que pide atención. Sana eso primero y la fe volverá sola."
      ]
    },
    dinero:{
      normal:[
        "Una inspiración financiera llega en el momento justo. Una idea o persona traerá la prosperidad que esperabas.",
        "Después de un período difícil económicamente, la luz comienza a aparecer en el horizonte. Una solución inesperada transforma el panorama.",
        "Tu intuición económica se ilumina con una idea brillante. Esa visión que tienes sobre cómo generar prosperidad merece ser desarrollada con confianza."
      ],
      invertida:[
        "Desilusión con proyectos financieros que no dieron los resultados esperados. Analiza qué falló.",
        "El desencanto económico que sientes puede llevarte al cinismo. Cuidado: cerrar las puertas a nuevas posibilidades financieras por desilusiones pasadas te sale más caro.",
        "Una esperanza financiera que no se materializó de la manera esperada. Revisa si el problema fue el plan, la ejecución o el timing, y ajusta con esa información."
      ]
    },
    trabajo:{
      normal:[
        "Inspiración creativa y esperanza en tu carrera. Un proyecto en el que crees profundamente está a punto de despegar.",
        "Un período de luz y claridad profesional llega después de una etapa oscura. Lo que soñabas para tu carrera vuelve a ser alcanzable.",
        "La visión que tienes para tu trabajo, aunque grande, está comenzando a tomar forma en el mundo real. No pierdas la fe en este momento clave."
      ],
      invertida:[
        "Duda y falta de confianza en tus capacidades. Recuerda tus logros pasados: son la prueba de lo que eres capaz.",
        "Un período de desilusión profesional te hace perder de vista tu propio valor. Los momentos bajos no definen tu carrera; tus decisiones en esos momentos sí.",
        "Estás comparándote con otros en lugar de medir tu propio progreso. Tu estrella tiene un brillo único que ninguna comparación puede apagar."
      ]
    }
  },
  {
    id:18, nombre:"La Luna", emoji:"🌕", romano:"XVIII",
    amor:{
      normal:[
        "El amor está envuelto en misterio e ilusión. Tu intuición es tu mejor guía ahora; confía en lo que sientes profundamente.",
        "Las corrientes emocionales profundas que sientes en tu vida amorosa son reales aunque no puedas articularlas. Confía en tu cuerpo, no solo en tu mente.",
        "El amor que vives tiene capas que apenas están comenzando a revelarse. La paciencia y la confianza en tu percepción profunda son esenciales ahora."
      ],
      invertida:[
        "Confusión y engaños en el amor. Alguien no está siendo completamente honesto. Busca claridad antes de actuar.",
        "Las ilusiones que rodean una relación empiezan a desmoronarse. Aunque sea difícil ver la realidad, es infinitamente mejor que permanecer en la ilusión.",
        "Tus miedos más profundos están distorsionando la percepción de tu vida amorosa. Distinguir entre lo que percibes y lo que proyectas es crucial ahora."
      ]
    },
    dinero:{
      normal:[
        "Situaciones financieras poco claras o información incompleta. No es el momento ideal para grandes decisiones; espera más luz.",
        "Hay aspectos de tu situación económica que todavía están en la oscuridad. Espera a tener más información antes de comprometerte.",
        "Tu intuición financiera te señala algo que los números aún no confirman. Presta atención a esa señal; llegará la claridad en el momento preciso."
      ],
      invertida:[
        "Engaños financieros o auto-engaño sobre tu situación económica real. Mira tus números con honestidad brutal.",
        "Alguien en tu entorno podría estar ocultándote información relevante sobre sus finanzas o las compartidas. La investigación discreta es tu mejor defensa.",
        "Estás viendo tu situación económica a través de una lente de miedo que distorsiona la realidad. Los números reales, aunque difíciles, son más manejables que tus peores temores."
      ]
    },
    trabajo:{
      normal:[
        "Incertidumbre en el ambiente laboral. Las cosas no son lo que parecen; avanza con cautela.",
        "Hay corrientes subterráneas en tu entorno laboral que aún no son visibles. Tu percepción de que algo no está del todo claro es correcta.",
        "Un período de ambigüedad profesional requiere que navegues con intuición más que con mapas. Confía en tu percepción y muévete despacio."
      ],
      invertida:[
        "Miedos irracionales sobre tu situación laboral te paralizan. Algunos de los peores escenarios que imaginas nunca van a ocurrir.",
        "Estás tomando decisiones laborales desde el pánico más que desde la lógica. Hay más estabilidad en tu situación profesional de lo que crees.",
        "La niebla de incertidumbre laboral que ves es en parte real y en parte creación de tus propios temores. Separar ambas cosas te dará claridad de acción."
      ]
    }
  },
  {
    id:19, nombre:"El Sol", emoji:"☀️", romano:"XIX",
    amor:{
      normal:[
        "¡Alegría y plenitud en el amor! Una relación llena de luz, autenticidad y felicidad genuina está en tu presente o muy cerca.",
        "El amor más luminoso y auténtico que hayas experimentado está llegando o ya está aquí. Permítete recibirlo completamente sin reservas.",
        "Una relación que irradia alegría, honestidad y vitalidad transforma no solo tu vida sino la de todos los que los rodean. Disfrútala plenamente."
      ],
      invertida:[
        "Una felicidad superficial oculta problemas más profundos. No te quedes en la superficie.",
        "La imagen de una relación perfecta que proyectas hacia afuera no coincide con lo que vives por dentro. La autenticidad siempre termina por pedir paso.",
        "Estás buscando en el otro la luz que deberías generar tú mismo/a. La dependencia emocional disfrazada de amor no es sustentable."
      ]
    },
    dinero:{
      normal:[
        "Éxito financiero claro y brillante. Tus proyectos económicos dan los frutos esperados.",
        "Una abundancia luminosa llega a tu vida económica. Los esfuerzos que parecían interminables encuentran finalmente su recompensa visible.",
        "Tu situación financiera entra en un período de claridad y crecimiento genuino. Lo que se siembra con honestidad, el Sol siempre lo hace crecer."
      ],
      invertida:[
        "El éxito financiero tarda más de lo esperado. Revisa si hay obstáculos que tú mismo estás poniendo.",
        "Hay éxito en tu horizonte financiero pero algo interno lo está bloqueando. Tus creencias sobre el dinero merecen ser examinadas.",
        "La prosperidad que proyectas hacia afuera no coincide con tu realidad económica interna. La coherencia entre ambas es el primer paso hacia el verdadero éxito."
      ]
    },
    trabajo:{
      normal:[
        "¡Éxito y reconocimiento en tu carrera! Un período de logros visibles y satisfacción genuina. Tu momento es ahora.",
        "La energía profesional que irradias ahora es contagiosa y magnética. Tus logros inspiran y tu influencia crece de manera natural.",
        "Un período de claridad y confianza en tu carrera te permite brillar sin esfuerzo. Aprovecha esta luz para consolidar lo que más te importa."
      ],
      invertida:[
        "Logros laborales que no te traen la satisfacción esperada. Pregúntate si estás trabajando hacia metas que realmente son tuyas.",
        "El brillo exterior de tu carrera contrasta con el vacío que sientes por dentro. El éxito que no se alinea con tu propósito nunca es suficiente.",
        "Estás tan ocupado/a brillando para afuera que olvidaste preguntarte para qué. La carrera más exitosa sin propósito personal es la forma más sofisticada de vacío."
      ]
    }
  },
  {
    id:20, nombre:"El Juicio", emoji:"📯", romano:"XX",
    amor:{
      normal:[
        "Una llamada a la renovación en el amor. El pasado y el presente se integran para darte claridad sobre lo que realmente quieres.",
        "Una segunda oportunidad en el amor llega marcada por la madurez y la comprensión. Lo que antes fracasó puede ahora florecer desde un lugar diferente.",
        "El universo te llama a revisar tu historia amorosa no para quedarte en ella sino para liberarte de los patrones que ya no necesitas repetir."
      ],
      invertida:[
        "Estás ignorando una llamada interior importante sobre tu vida amorosa. El arrepentimiento bloquea tu capacidad de avanzar.",
        "El peso del pasado amoroso te impide estar plenamente presente en el amor de ahora. Integrar no significa repetir; significa aprender y soltar.",
        "Una culpa o vergüenza relacionada con el amor está silenciando una parte tuya que necesita expresarse. La compasión propia es la llave."
      ]
    },
    dinero:{
      normal:[
        "Un período de evaluación y renovación financiera. Hora de hacer balance y tomar las decisiones que siempre postergaste.",
        "Una revisión profunda de tu historia económica revelará patrones que, una vez reconocidos, podrás cambiar conscientemente.",
        "El universo te llama a hacer las paces con tu pasado financiero y comenzar un nuevo ciclo económico desde la conciencia plena."
      ],
      invertida:[
        "Negativa a hacer un análisis honesto de tus finanzas. Lo que no se mira, no se puede cambiar.",
        "El miedo a ver los números reales está costándote más que los números mismos. La claridad financiera, aunque duela, siempre es liberadora.",
        "Estás cargando con deudas emocionales sobre el dinero que bloquean tu prosperidad. El juicio más importante es el que te haces a ti mismo/a con compasión."
      ]
    },
    trabajo:{
      normal:[
        "Una evaluación importante de tu carrera. Un llamado a tu verdadera vocación. Si no estás en el camino correcto, ahora tienes claridad para cambiar.",
        "El universo te convoca a responder la pregunta más importante de tu carrera: ¿estás haciendo lo que viniste a hacer? La respuesta honesta cambia todo.",
        "Un reconocimiento o llamado profesional que trasciende el éxito económico llega a tu vida. Tu contribución real al mundo es más grande de lo que imaginas."
      ],
      invertida:[
        "Miedo a ser juzgado profesionalmente o a enfrentar tus propias fallas. La auto-crítica paralizante es tu mayor obstáculo.",
        "Estás posponiendo una decisión de carrera importante por el miedo a equivocarte. El error que temes es infinitamente menor que la vida no vivida.",
        "Una oportunidad de renovación profesional toca tu puerta y el miedo te impide abrirla. El juicio más severo siempre es el propio; y también el más fácil de transformar."
      ]
    }
  },
  {
    id:21, nombre:"El Mundo", emoji:"🌍", romano:"XXI",
    amor:{
      normal:[
        "Completitud y plenitud en el amor. Una relación llega a su máxima expresión o un ciclo amoroso se completa de manera satisfactoria.",
        "El amor más completo y satisfactorio que hayas conocido está en tu presente o muy cerca. Todo lo que viviste te preparó exactamente para esto.",
        "Una unión que se siente completa, equilibrada y plena en todos los niveles es tu realidad amorosa ahora. Permite que esa plenitud sea también tuya."
      ],
      invertida:[
        "Estás muy cerca de la plenitud amorosa pero algo te frena en el último paso. Identifica ese miedo final y suéltalo.",
        "El amor que buscas está literalmente a tu alcance, pero un patrón de sabotaje inconsciente te detiene justo antes de recibirlo. Reconócelo y suéltalo.",
        "La completitud en el amor que deseas no llegará de afuera: debe comenzar como sensación interna. Trabaja en sentirte completo/a antes de buscar que otro te complete."
      ]
    },
    dinero:{
      normal:[
        "Éxito financiero total y merecido. Un ciclo económico se completa con abundancia. Tus esfuerzos de largo plazo encuentran su recompensa.",
        "La prosperidad que has construido con esfuerzo, paciencia y estrategia llega ahora a su máxima expresión. Este es tu momento de cosecha.",
        "Un logro financiero de gran magnitud se consolida. Lo que comenzó como un sueño económico se convierte en una realidad sólida y duradera."
      ],
      invertida:[
        "Falta de cierre en proyectos financieros importantes. Completa lo que has comenzado antes de iniciar algo nuevo.",
        "Estás casi en la meta económica pero la impaciencia o el perfeccionismo te impiden cerrar el ciclo. El último 10% del esfuerzo produce el 90% del resultado.",
        "Un proyecto financiero que dejaste incompleto sigue drenando tu energía económica. Ciérralo definitivamente, de la manera que sea, para poder avanzar."
      ]
    },
    trabajo:{
      normal:[
        "El logro más alto de tu carrera está al alcance de tu mano. Completar este ciclo te abrirá puertas que aún no puedes imaginar.",
        "Estás en la recta final de un camino profesional extraordinario. El mundo reconoce tu valor y lo que construiste habla por sí solo.",
        "Una culminación profesional que trasciende lo personal se materializa. Lo que logras no es solo para ti: impacta a otros de maneras que quizás nunca veas."
      ],
      invertida:[
        "Casi en la cima pero con obstáculos de último momento. No te rindas; el éxito está literalmente a un paso.",
        "Un patrón de autosabotaje justo antes de completar tus mayores logros profesionales pide ser reconocido. El éxito que evitas inconscientemente también merece ser examinado.",
        "La sensación de que algo falta siempre que logras una meta laboral es una señal interior. Tal vez no es la meta equivocada: tal vez es la forma de llegar a ella."
      ]
    }
  }
];
