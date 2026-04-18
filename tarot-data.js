const CARTAS = [
  {
    id:0, nombre:"El Loco", emoji:"🌀", romano:"0",
    amor:{
      normal:"Un amor inesperado llega a tu camino. El universo te pide que te lances sin miedo: lo que buscabas estaba esperándote en el lugar menos pensado.",
      invertida:"La impulsividad en el amor te juega en contra. Antes de dar el siguiente paso, detente y pregúntate si lo que sientes es real o solo emoción del momento."
    },
    dinero:{
      normal:"Una oportunidad financiera surge de manera inesperada. El riesgo controlado puede ser tu mayor aliado; confía en tu intuición.",
      invertida:"Gastos impulsivos amenazan tu estabilidad. El dinero que no planificas desaparece. Es momento de hacer un presupuesto y respetarlo."
    },
    trabajo:{
      normal:"Estás en el umbral de una nueva etapa profesional. Tu audacia y creatividad abrirán puertas que otros ni siquiera ven.",
      invertida:"La falta de foco te dispersa. Define tus objetivos laborales antes de dar el siguiente movimiento o perderás oportunidades valiosas."
    }
  },
  {
    id:1, nombre:"El Mago", emoji:"🪄", romano:"I",
    amor:{
      normal:"Tienes todo lo que necesitas para construir el amor que deseas. Tu carisma es irresistible ahora: úsalo con intención.",
      invertida:"Cuidado con la manipulación en tus relaciones. Alguien podría no ser lo que parece, o tú mismo estás actuando desde la deshonestidad."
    },
    dinero:{
      normal:"Tu ingenio y habilidades están en su punto máximo. Es el momento de monetizar tus talentos. Lo que parece imposible, tú puedes hacerlo realidad.",
      invertida:"Recursos mal utilizados y proyectos sin terminar. Necesitas concentrar tu energía en una sola dirección para ver resultados."
    },
    trabajo:{
      normal:"Tienes las herramientas, la habilidad y el momento. Un proyecto importante está en tus manos y el éxito depende únicamente de ti.",
      invertida:"Estás subestimando tu propio potencial, o alguien en tu entorno laboral no está siendo transparente contigo."
    }
  },
  {
    id:2, nombre:"La Sacerdotisa", emoji:"🌙", romano:"II",
    amor:{
      normal:"Confía en tu intuición romántica: lo que sientes en el fondo es verdad. Hay secretos por revelarse que cambiarán tu perspectiva.",
      invertida:"Estás ignorando señales claras en tu relación. Tu intuición te habla, pero el miedo te impide escucharla."
    },
    dinero:{
      normal:"Hay información que aún no tienes y que cambiará tu panorama financiero. Investiga antes de invertir o firmar cualquier acuerdo.",
      invertida:"Secretos financieros pueden estar afectándote. Revisa tus cuentas, contratos y compromisos con lupa."
    },
    trabajo:{
      normal:"Tu sabiduría interior es tu mayor activo profesional ahora. No tomes decisiones apresuradas; espera el momento preciso y actúa con certeza.",
      invertida:"Información oculta en el entorno laboral puede perjudicarte. Confía menos en lo que te dicen, más en lo que ves."
    }
  },
  {
    id:3, nombre:"La Emperatriz", emoji:"🌿", romano:"III",
    amor:{
      normal:"Una época de abundancia y amor pleno se abre ante ti. Las relaciones florecen y la conexión emocional está en su punto más alto.",
      invertida:"Dependencia emocional o falta de cuidado propio afectan tus relaciones. Aprende a amarte primero."
    },
    dinero:{
      normal:"La abundancia llama a tu puerta. Es un excelente momento para inversiones y proyectos creativos.",
      invertida:"Excesos y derroches te alejan de la prosperidad. Valora lo que ya tienes antes de buscar más."
    },
    trabajo:{
      normal:"Tu creatividad y capacidad de nutrir proyectos están en auge. Un trabajo relacionado con el arte o el cuidado de otros traerá grandes satisfacciones.",
      invertida:"Estás bloqueando tu propia creatividad por el perfeccionismo o el miedo al juicio ajeno. Suéltate y confía en tu proceso."
    }
  },
  {
    id:4, nombre:"El Emperador", emoji:"⚔️", romano:"IV",
    amor:{
      normal:"Estabilidad y solidez definen tu vida amorosa ahora. Una relación con bases firmes se consolida.",
      invertida:"El control excesivo o la rigidez están sofocando tu relación. El amor necesita espacio para crecer."
    },
    dinero:{
      normal:"Tu disciplina financiera da sus frutos. Estructura tu economía, haz planes a largo plazo y ejerce control sobre tus recursos.",
      invertida:"La falta de organización financiera te pasa factura. Necesitas disciplina y un plan concreto."
    },
    trabajo:{
      normal:"Tu liderazgo y autoridad son reconocidos. Un ascenso o proyecto importante bajo tu mando es inminente.",
      invertida:"Conflictos de poder en el trabajo te agotan. Evalúa si estás ejerciendo autoridad con justicia."
    }
  },
  {
    id:5, nombre:"El Hierofante", emoji:"🏛️", romano:"V",
    amor:{
      normal:"Una relación con valores compartidos y compromisos sólidos se fortalece. El amor maduro y el respeto mutuo son tus guías.",
      invertida:"Estás eligiendo la convención sobre tu felicidad real. Las expectativas sociales no deben dictar tu vida amorosa."
    },
    dinero:{
      normal:"Seguir métodos probados y buscar consejo de expertos será clave para tu prosperidad.",
      invertida:"Consejos financieros cuestionables o seguir el camino de otros sin pensar puede costarte caro."
    },
    trabajo:{
      normal:"La formación, la mentoría y el trabajo en instituciones consolidadas te benefician. Aprende de quienes tienen más experiencia.",
      invertida:"Una institución o figura de autoridad laboral está limitando tu potencial."
    }
  },
  {
    id:6, nombre:"Los Enamorados", emoji:"💕", romano:"VI",
    amor:{
      normal:"Una elección fundamental en el amor está ante ti. El universo alinea las circunstancias para que sigas tu corazón.",
      invertida:"Estás evitando una decisión difícil en el amor. La indecisión te paraliza y daña lo que podrías construir."
    },
    dinero:{
      normal:"Una decisión financiera importante se avecina. El dinero en alineación con tus principios trae verdadera prosperidad.",
      invertida:"Decisiones financieras tomadas desde el miedo o la presión ajena. Recupera el control de tus elecciones económicas."
    },
    trabajo:{
      normal:"Una colaboración poderosa o una sociedad estratégica está por formarse. Las relaciones laborales basadas en valores compartidos serán muy productivas.",
      invertida:"Desacuerdos y falta de alineación en el trabajo. Revisa si tus socios comparten realmente tu visión."
    }
  },
  {
    id:7, nombre:"El Carro", emoji:"🏆", romano:"VII",
    amor:{
      normal:"Victorias en el amor gracias a tu determinación. Si luchas por alguien, este es el momento en que tus esfuerzos dan fruto.",
      invertida:"Estás forzando una situación romántica que no fluye naturalmente. La voluntad de hierro puede convertirse en terquedad."
    },
    dinero:{
      normal:"Avance acelerado hacia tus metas financieras. Tu disciplina y enfoque te llevan directo al éxito.",
      invertida:"Falta de control sobre tus finanzas o impulsos de consumo te frenan. Recupera el timón de tu economía."
    },
    trabajo:{
      normal:"Estás en modo conquista: nada puede detenerte ahora. Un logro importante está muy cerca. Mantén el enfoque.",
      invertida:"Agresividad o competencia tóxica en el trabajo te perjudica. Ganar a cualquier costo no siempre vale la pena."
    }
  },
  {
    id:8, nombre:"La Fuerza", emoji:"🦁", romano:"VIII",
    amor:{
      normal:"El amor que persiste con paciencia y gentileza es el más poderoso. Tu capacidad de amar sin condiciones transforma la relación positivamente.",
      invertida:"Dudas sobre tu propio valor en el amor. Recuerda que mereces ser amado/a plenamente."
    },
    dinero:{
      normal:"La perseverancia es tu mayor activo financiero ahora. Mantén el rumbo incluso cuando parece lento.",
      invertida:"El miedo y la inseguridad sabotean tus decisiones financieras. Confía en tu capacidad de generar recursos."
    },
    trabajo:{
      normal:"Tu resiliencia y calma en situaciones de presión te distinguen. Un desafío laboral que parece insuperable está a punto de ceder.",
      invertida:"Estás al borde del agotamiento. Recupera fuerzas antes de seguir o corres el riesgo de colapsar en el momento más crucial."
    }
  },
  {
    id:9, nombre:"El Ermitaño", emoji:"🕯️", romano:"IX",
    amor:{
      normal:"Un período de introspección amorosa te guiará hacia la relación que realmente mereces.",
      invertida:"El aislamiento excesivo y el miedo a la intimidad te alejan de conexiones genuinas."
    },
    dinero:{
      normal:"Un análisis profundo de tus finanzas revelará el camino hacia la estabilidad. Investiga y reflexiona antes de actuar.",
      invertida:"Estás tan cerrado al consejo ajeno que rechazas ayuda valiosa. Un punto de vista externo sería exactamente lo que necesitas."
    },
    trabajo:{
      normal:"Un período de investigación y reflexión profesional dará frutos. El trabajo silencioso de hoy construirá tu reputación de mañana.",
      invertida:"Te estás aislando demasiado en lo laboral. La colaboración y la visibilidad son necesarias para avanzar."
    }
  },
  {
    id:10, nombre:"Rueda de la Fortuna", emoji:"☸️", romano:"X",
    amor:{
      normal:"La rueda gira a tu favor en el amor. Un cambio inesperado y afortunado transforma tu situación romántica.",
      invertida:"Una mala racha en el amor requiere paciencia. Nada dura para siempre, ni lo bueno ni lo malo."
    },
    dinero:{
      normal:"Una oportunidad financiera única aparece en tu vida. Estar en el lugar correcto en el momento correcto: eso es lo que te espera.",
      invertida:"Un revés financiero inesperado. Aprovecha este período para fortalecer tus bases."
    },
    trabajo:{
      normal:"Un giro del destino en tu carrera. Lo que parecía estancado de repente se mueve con fuerza.",
      invertida:"Resistencia al cambio laboral te frena. La rueda sigue girando te guste o no; mejor adaptarte."
    }
  },
  {
    id:11, nombre:"La Justicia", emoji:"⚖️", romano:"XI",
    amor:{
      normal:"El equilibrio y la verdad restauran tu vida amorosa. Lo que sembraste en el pasado regresa ahora.",
      invertida:"Desequilibrio e injusticias en tus relaciones. Alguien no actúa con honestidad, o tú evitas una conversación necesaria."
    },
    dinero:{
      normal:"Tus decisiones financieras éticas serán recompensadas. Contratos y acuerdos legales están a tu favor.",
      invertida:"Problemas legales o financieros pendientes que ignorar solo empeoran."
    },
    trabajo:{
      normal:"Tu trabajo honesto recibe el reconocimiento que merece. Una evaluación o negociación saldrá a tu favor.",
      invertida:"Injusticias en el ambiente laboral te afectan. Defiende tus derechos con inteligencia."
    }
  },
  {
    id:12, nombre:"El Colgado", emoji:"🌊", romano:"XII",
    amor:{
      normal:"Una pausa en tu vida amorosa es exactamente lo que necesitas. Cambiar tu perspectiva sobre el amor te revelará verdades transformadoras.",
      invertida:"Estás estancado/a en un sacrificio emocional que no lleva a ningún lado. Es momento de soltar."
    },
    dinero:{
      normal:"Una inversión en tu desarrollo personal traerá retornos inesperados. A veces sacrificar lo inmediato es la inversión más inteligente.",
      invertida:"Sacrificios financieros que no valen la pena. Revisa si lo que estás resignando realmente tiene un retorno futuro."
    },
    trabajo:{
      normal:"Un período de espera y aprendizaje. El universo te pide que veas tu carrera desde otro ángulo.",
      invertida:"Resistencia a soltar un trabajo o proyecto que ya no te sirve. El estancamiento a veces es auto-impuesto."
    }
  },
  {
    id:13, nombre:"La Muerte", emoji:"🦋", romano:"XIII",
    amor:{
      normal:"Un capítulo amoroso termina para que uno mejor pueda comenzar. No temas este final; es la transformación más profunda que necesitabas.",
      invertida:"Te aferras a algo que ya murió emocionalmente. Resistir el fin de una relación solo prolonga el dolor."
    },
    dinero:{
      normal:"Transición financiera profunda. Un ciclo económico termina y uno nuevo, más próspero, comienza.",
      invertida:"Resistencia a cambios financieros necesarios. El miedo te mantiene atado a situaciones que ya no funcionan."
    },
    trabajo:{
      normal:"Una transformación laboral radical está llegando. Puede ser un cambio de carrera o el inicio de algo completamente nuevo. Abrázalo.",
      invertida:"Estás postergando un cambio laboral inevitable. Cuanto más lo resistas, más traumático será."
    }
  },
  {
    id:14, nombre:"La Templanza", emoji:"✨", romano:"XIV",
    amor:{
      normal:"La paciencia y el equilibrio son tus aliados en el amor. Una relación que se construye con calma tiene más futuro que cualquier pasión apresurada.",
      invertida:"Excesos emocionales o desequilibrios en la dinámica de tu relación. Necesitas recuperar el centro."
    },
    dinero:{
      normal:"Un manejo moderado de tus recursos te llevará a la estabilidad duradera. Los mejores resultados requieren tiempo.",
      invertida:"Desequilibrios financieros por extremos: o gastas demasiado o te privas innecesariamente."
    },
    trabajo:{
      normal:"La moderación, la diplomacia y la paciencia son tus mejores herramientas laborales ahora.",
      invertida:"Impaciencia y falta de moderación arruinan proyectos que tenían potencial."
    }
  },
  {
    id:15, nombre:"El Diablo", emoji:"🔗", romano:"XV",
    amor:{
      normal:"Una atracción poderosa e irresistible marca tu vida amorosa. Disfrútala con conciencia: el deseo puede ser hermoso desde la libertad.",
      invertida:"Una relación tóxica o adictiva te tiene atrapado/a. Reconocer la trampa es el primer paso para liberarte."
    },
    dinero:{
      normal:"Una oportunidad financiera muy tentadora aparece. Evalúa si la ambición te guía hacia el crecimiento genuino.",
      invertida:"Ataduras financieras: deudas o dependencias que te quitan libertad económica. Es urgente romper esas cadenas."
    },
    trabajo:{
      normal:"Tu ambición es tu motor ahora. Canalizada correctamente puede llevarte muy lejos.",
      invertida:"Ambiente laboral tóxico o dependencia de una situación que te hace daño. El miedo al cambio te encadena más que la situación misma."
    }
  },
  {
    id:16, nombre:"La Torre", emoji:"⚡", romano:"XVI",
    amor:{
      normal:"Una revelación impactante sacude tu vida amorosa. Aunque doloroso, lo que se derrumba no era verdadero.",
      invertida:"Evitas un colapso inevitable acumulando tensiones. La explosión aplazada siempre es más destructiva."
    },
    dinero:{
      normal:"Un shock financiero inesperado. No es el fin: es el universo forzándote a reconstruir sobre bases más sólidas.",
      invertida:"Pequeñas crisis que ignorar se acumulan en una grande. Atiende las señales de alerta ahora."
    },
    trabajo:{
      normal:"Una situación laboral explota de manera inesperada. El caos de hoy es el comienzo de una restructuración que beneficiará tu carrera.",
      invertida:"Estás en un ambiente laboral que colapsará pero te niegas a verlo. Prepara un plan de contingencia."
    }
  },
  {
    id:17, nombre:"La Estrella", emoji:"⭐", romano:"XVII",
    amor:{
      normal:"Esperanza y renovación en el amor. Después de tiempos difíciles, la luz regresa a tu vida sentimental.",
      invertida:"Desilusión y pérdida de fe en el amor. El pesimismo que sientes es temporal; pero necesitas sanar antes de abrirte."
    },
    dinero:{
      normal:"Una inspiración financiera llega en el momento justo. Una idea o persona traerá la prosperidad que esperabas.",
      invertida:"Desilusión con proyectos financieros que no dieron los resultados esperados. Analiza qué falló."
    },
    trabajo:{
      normal:"Inspiración creativa y esperanza en tu carrera. Un proyecto en el que crees profundamente está a punto de despegar.",
      invertida:"Duda y falta de confianza en tus capacidades. Recuerda tus logros pasados: son la prueba de lo que eres capaz."
    }
  },
  {
    id:18, nombre:"La Luna", emoji:"🌕", romano:"XVIII",
    amor:{
      normal:"El amor está envuelto en misterio e ilusión. Tu intuición es tu mejor guía ahora; confía en lo que sientes profundamente.",
      invertida:"Confusión y engaños en el amor. Alguien no está siendo completamente honesto. Busca claridad antes de actuar."
    },
    dinero:{
      normal:"Situaciones financieras poco claras o información incompleta. No es el momento ideal para grandes decisiones; espera más luz.",
      invertida:"Engaños financieros o auto-engaño sobre tu situación económica real. Mira tus números con honestidad brutal."
    },
    trabajo:{
      normal:"Incertidumbre en el ambiente laboral. Las cosas no son lo que parecen; avanza con cautela.",
      invertida:"Miedos irracionales sobre tu situación laboral te paralizan. Algunos de los peores escenarios que imaginas nunca van a ocurrir."
    }
  },
  {
    id:19, nombre:"El Sol", emoji:"☀️", romano:"XIX",
    amor:{
      normal:"¡Alegría y plenitud en el amor! Una relación llena de luz, autenticidad y felicidad genuina está en tu presente o muy cerca.",
      invertida:"Una felicidad superficial oculta problemas más profundos. No te quedes en la superficie."
    },
    dinero:{
      normal:"Éxito financiero claro y brillante. Tus proyectos económicos dan los frutos esperados.",
      invertida:"El éxito financiero tarda más de lo esperado. Revisa si hay obstáculos que tú mismo estás poniendo."
    },
    trabajo:{
      normal:"¡Éxito y reconocimiento en tu carrera! Un período de logros visibles y satisfacción genuina. Tu momento es ahora.",
      invertida:"Logros laborales que no te traen la satisfacción esperada. Pregúntate si estás trabajando hacia metas que realmente son tuyas."
    }
  },
  {
    id:20, nombre:"El Juicio", emoji:"📯", romano:"XX",
    amor:{
      normal:"Una llamada a la renovación en el amor. El pasado y el presente se integran para darte claridad sobre lo que realmente quieres.",
      invertida:"Estás ignorando una llamada interior importante sobre tu vida amorosa. El arrepentimiento bloquea tu capacidad de avanzar."
    },
    dinero:{
      normal:"Un período de evaluación y renovación financiera. Hora de hacer balance y tomar las decisiones que siempre postergaste.",
      invertida:"Negativa a hacer un análisis honesto de tus finanzas. Lo que no se mira, no se puede cambiar."
    },
    trabajo:{
      normal:"Una evaluación importante de tu carrera. Un llamado a tu verdadera vocación. Si no estás en el camino correcto, ahora tienes claridad para cambiar.",
      invertida:"Miedo a ser juzgado profesionalmente o a enfrentar tus propias fallas. La auto-crítica paralizante es tu mayor obstáculo."
    }
  },
  {
    id:21, nombre:"El Mundo", emoji:"🌍", romano:"XXI",
    amor:{
      normal:"Completitud y plenitud en el amor. Una relación llega a su máxima expresión o un ciclo amoroso se completa de manera satisfactoria.",
      invertida:"Estás muy cerca de la plenitud amorosa pero algo te frena en el último paso. Identifica ese miedo final y suéltalo."
    },
    dinero:{
      normal:"Éxito financiero total y merecido. Un ciclo económico se completa con abundancia. Tus esfuerzos de largo plazo encuentran su recompensa.",
      invertida:"Falta de cierre en proyectos financieros importantes. Completa lo que has comenzado antes de iniciar algo nuevo."
    },
    trabajo:{
      normal:"El logro más alto de tu carrera está al alcance de tu mano. Completar este ciclo te abrirá puertas que aún no puedes imaginar.",
      invertida:"Casi en la cima pero con obstáculos de último momento. No te rindas; el éxito está literalmente a un paso."
    }
  }
];
