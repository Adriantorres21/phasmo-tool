const jsonData = {
  ghosts: [
    {
      name: "Espiritu",
      evidence: ["Spirit Box", "Escritura Fantasma", "EMF Nivel 5"],
      characteristics: {
        velocidad: {
          general: "media",
          cuando_es_rápido: "nunca",
        },
        tiempo_de_cacería: {
          cordura: "50% de su target",
          incienso: "190 segundos",
        },
        frecuencia_de_parpadear: "normal",
        fuerte: "ninguno",
        débil: "Incienso",
        habilidad_de_caza: "ninguna",
        característica_única: "ninguna",
      },
    },
    {
      name: "Espectro",
      evidence: ["Spirit Box", "Proyector D.O.T.S.", "EMF Nivel 5"],
      characteristics: {
        velocidad: {
          general: "media",
          cuando_es_rápido: "nunca",
        },
        tiempo_de_cacería: {
          cordura: "50% de su target",
          incienso: "90 segundos",
        },
        frecuencia_de_parpadear: "normal",
        fuerte: "nunca deja pisadas rastreables por el suelo",
        débil: "reacciones tóxicas al entrar en contacto con la Sal",
        habilidad_de_caza: "ninguna",
        característica_única: "No deja pisadas",
      },
    },
    {
      name: "Ente",
      evidence: ["Spirit Box", "Huellas dactilares", "Proyector D.O.T.S."],
      characteristics: {
        velocidad: {
          general: "media",
          cuando_es_rápido: "nunca",
        },
        tiempo_de_cacería: {
          cordura: "50% de su target",
          incienso: "90 segundos",
        },
        frecuencia_de_parpadear: "rápido",
        fuerte: "puede poseer a los vivos",
        débil: "fotografiar a un Ente hará que desaparezca temporalmente",
        habilidad_de_caza: "ninguna",
        característica_única: "ninguna",
      },
    },
    {
      name: "Poltergeist",
      evidence: ["Spirit Box", "Huellas dactilares", "Escritura Fantasma"],
      characteristics: {
        velocidad: {
          general: "media",
          cuando_es_rápido: "nunca",
        },
        tiempo_de_cacería: {
          cordura: "50% de su target",
          incienso: "90 segundos",
        },
        frecuencia_de_parpadear: "normal",
        fuerte: "puede lanzar muchos objetos a la vez",
        débil: "es prácticamente inútil en una habitación vacía",
        habilidad_de_caza: "ninguna",
        característica_única: "ninguna",
      },
    },
    {
      name: "Banshee",
      evidence: ["Orbes", "Huellas dactilares", "Proyector D.O.T.S."],
      characteristics: {
        velocidad: {
          general: "media",
          cuando_es_rápido: "nunca",
        },
        tiempo_de_cacería: {
          cordura: "50% de su target",
          incienso: "90 segundos",
        },
        frecuencia_de_parpadear: "normal",
        fuerte: "solo se fijará en una persona simultáneamente",
        débil: "temen el Crucifijo",
        habilidad_de_caza: "ninguna",
        característica_única: "grito especial en el caos",
      },
    },
    {
      name: "Jinn",
      evidence: ["EMF Nivel 5", "Temperaturas bajo cero", "Huellas dactilares"],
      characteristics: {
        velocidad: {
          general: "rápido",
          cuando_es_rápido: "cuando te mira hace un pequeño sprint",
        },
        tiempo_de_cacería: {
          cordura: "50%",
          incienso: "90 segundos",
        },
        frecuencia_de_parpadear: "normal",
        fuerte: "puede crear tormentas de arena",
        débil: "es débil contra el agua bendita",
        habilidad_de_caza: "ninguna",
        característica_única: "mantiene el cuadro electrico encendido",
      },
    },
    {
      name: "Pesadilla",
      evidence: ["Spirit Box", "Orbes", "Escritura Fantasma"],
      characteristics: {
        velocidad: {
          general: "media",
          cuando_es_rápido: "nunca",
        },
        tiempo_de_cacería: {
          cordura: "40%",
          incienso: "90 segundos",
        },
        frecuencia_de_parpadear: "normal",
        fuerte: "puede atacar si frecuentemente si esta a oscuras",
        débil: "encender la luz hace que disminuya su ataque",
        habilidad_de_caza: "Puede atacar al 60% si no hay luces",
        característica_única: "no enciende la luz, tiende a apagarla",
      },
    },
    {
      name: "Revenant",
      evidence: ["Orbes", "Temperaturas bajo cero", "Escritura Fantasma"],
      characteristics: {
        velocidad: {
          general: "rápido",
          cuando_es_rápido: "Cuando te detecta (te ve o te escucha)",
        },
        tiempo_de_cacería: {
          cordura: "50%",
          incienso: "90 segundos",
        },
        frecuencia_de_parpadear: "normal",
        fuerte: "puede revivir a los muertos",
        débil: "es débil contra la sal",
        habilidad_de_caza: "ninguna",
        característica_única: "ninguna",
      },
    },
    {
      name: "Sombra",
      evidence: ["EMF Nivel 5", "Huellas dactilares", "Escritura Fantasma"],
      characteristics: {
        velocidad: {
          general: "media",
          cuando_es_rápido: "nunca",
        },
        tiempo_de_cacería: {
          cordura: "35%",
          incienso: "90 segundos",
        },
        frecuencia_de_parpadear: "normal",
        fuerte: "puede crear sombras",
        débil: "es débil contra la luz",
        habilidad_de_caza: "ninguna",
        característica_única: "ninguna",
      },
    },
    {
      name: "Demonio",
      evidence: [
        "Temperaturas bajo cero",
        "Huellas dactilares",
        "Escritura Fantasma",
      ],
      characteristics: {
        velocidad: {
          general: "media",
          cuando_es_rápido: "nunca",
        },
        tiempo_de_cacería: {
          cordura: "70%",
          incienso: "90 segundos",
        },
        frecuencia_de_parpadear: "normal",
        fuerte: "Ataca frecuentemente",
        débil: "Teme a los crucifijos",
        habilidad_de_caza: "Puede empezar caza antes",
        característica_única: "ninguna",
      },
    },
    {
      name: "Yurei",
      evidence: ["Orbes", "Temperaturas bajo cero", "Proyector D.O.T.S."],
      characteristics: {
        velocidad: {
          general: "media",
          cuando_es_rápido: "nunca",
        },
        tiempo_de_cacería: {
          cordura: "50%",
          incienso: "90 segundos",
        },
        frecuencia_de_parpadear: "normal",
        fuerte: "Tiene influencia en la cordura",
        débil: "Teme a los inciensos",
        habilidad_de_caza: "ninguna",
        característica_única: "Puede azotar puertas",
      },
    },
    {
      name: "Oni",
      evidence: ["EMF Nivel 5", "Temperaturas bajo cero", "Proyector D.O.T.S."],
      characteristics: {
        velocidad: {
          general: "media",
          cuando_es_rápido: "nunca",
        },
        tiempo_de_cacería: {
          cordura: "50%",
          incienso: "90 segundos",
        },
        frecuencia_de_parpadear: "lento",
        fuerte: "puede crear ilusiones",
        débil: "es débil contra el espejo",
        habilidad_de_caza: "ninguna",
        característica_única: "no tiene efecto ventisca",
      },
    },
    {
      name: "Yokai",
      evidence: ["Spirit Box", "Orbes", "Proyector D.O.T.S."],
      characteristics: {
        velocidad: {
          general: "media",
          cuando_es_rápido: "nunca",
        },
        tiempo_de_cacería: {
          cordura: "50%",
          incienso: "90 segundos",
        },
        frecuencia_de_parpadear: "normal",
        fuerte: "Hablar cerca puede enfadarlo",
        débil: "No puede oir bien fuera de su proximidad",
        habilidad_de_caza: "Ataca al 80% si alguien habla",
        característica_única: "Esta sordo durante caza",
      },
    },
    {
      name: "Hantu",
      evidence: ["Huellas dactilares", "Orbes", "Temperaturas bajo cero"],
      characteristics: {
        velocidad: {
          general: "rápido",
          cuando_es_rápido: "En temperturas bajas",
        },
        tiempo_de_cacería: {
          cordura: "50%",
          incienso: "90 segundos",
        },
        frecuencia_de_parpadear: "normal",
        fuerte: "Mientras más frio mas rápido",
        débil: "Lento cuando esta caliente",
        habilidad_de_caza: "ninguna",
        característica_única: "ninguna",
      },
    },
    {
      name: "Goryo",
      evidence: ["EMF Nivel 5", "Huellas dactilares", "Proyector D.O.T.S."],
      characteristics: {
        velocidad: {
          general: "media",
          cuando_es_rápido: "nunca",
        },
        tiempo_de_cacería: {
          cordura: "50%",
          incienso: "90 segundos",
        },
        frecuencia_de_parpadear: "normal",
        fuerte: "Se muestra solo en camara",
        débil: "Es hogareño",
        habilidad_de_caza: "ninguna",
        característica_única: "No se va de su cueva",
      },
    },
    {
      name: "Myling",
      evidence: ["EMF Nivel 5", "Huellas dactilares", "Escritura Fantasma"],
      characteristics: {
        velocidad: {
          general: "media",
          cuando_es_rápido: "nunca",
        },
        tiempo_de_cacería: {
          cordura: "50%",
          incienso: "90 segundos",
        },
        frecuencia_de_parpadear: "normal",
        fuerte: "Es muy sigiloso en Cacería",
        débil: "Hace mucho ruido paranormal",
        habilidad_de_caza: "ninguna",
        característica_única:
          "No se escucha de lejos, escucharás más tu corazón",
      },
    },
    {
      name: "Onryo",
      evidence: ["Spirit Box", "Orbes", "Temperaturas bajo cero"],
      characteristics: {
        velocidad: {
          general: "media",
          cuando_es_rápido: "nunca",
        },
        tiempo_de_cacería: {
          cordura: "60%",
          incienso: "90 segundos",
        },
        frecuencia_de_parpadear: "normal",
        fuerte: "Puede atacar si apaga una llama",
        débil: "Si siente que estás cerca, se irá",

        habilidad_de_caza: "Ataca si apaga tres llamas",
        característica_única: "ninguna",
      },
    },
    {
      name: "Gemelos",
      evidence: ["EMF Nivel 5", "Spirit Box", "Temperaturas bajo cero"],
      characteristics: {
        velocidad: {
          general: "anormal",
          cuando_es_rápido:
            "un gemelo es 10% más rápido y el otro 10% más lento",
        },
        tiempo_de_cacería: {
          cordura: "50%",
          incienso: "90 segundos",
        },
        frecuencia_de_parpadear: "normal",
        fuerte: "Pueden atacar de diferentes lugares",
        débil: "Suelen tener dos interacciones al mismo tiempo",

        habilidad_de_caza: "ninguna",
        característica_única: "ninguna",
      },
    },
    {
      name: "Raiju",
      evidence: ["EMF Nivel 5", "Orbes", "Proyector D.O.T.S."],
      characteristics: {
        velocidad: {
          general: "rápido",
          cuando_es_rápido: "Cuando pasa por un aparato eléctrico",
        },
        tiempo_de_cacería: {
          cordura: "40%",
          incienso: "90 segundos",
        },
        frecuencia_de_parpadear: "normal",
        fuerte: "Obtiene su poder de la electricidad",
        débil: "Cuando ataca, interfiere con los aparatos eléctricos",
        habilidad_de_caza: "ninguna",
        característica_única: "ninguna",
      },
    },
    {
      name: "Obake",
      evidence: ["EMF Nivel 5", "Huellas dactilares", "Orbes"],
      characteristics: {
        velocidad: {
          general: "media",
          cuando_es_rápido: "nunca",
        },
        tiempo_de_cacería: {
          cordura: "50%",
          incienso: "90 segundos",
        },
        frecuencia_de_parpadear: "normal",
        fuerte: "No suele dejar rastros",
        débil:
          "es trans cuando ataca (cambia de formaal parpadear durante caza)",
        habilidad_de_caza: "ninguna",
        característica_única: "Cambia de forma",
      },
    },
    {
      name: "Mímico",
      evidence: ["Spirit Box", "Huellas dactilares", "Temperaturas bajo cero"],
      characteristics: {
        velocidad: {
          general: "media",
          cuando_es_rápido: "nunca",
        },
        tiempo_de_cacería: {
          cordura: "50%",
          incienso: "90 segundos",
        },
        frecuencia_de_parpadear: "normal",
        fuerte: "Suele copiar habilidades como Yuta",
        débil: "Se le ven sus bolitas (Orbes)",
        habilidad_de_caza: "ninguna",
        característica_única: "Es copión",
      },
    },
    {
      name: "Moroi",
      evidence: ["Spirit Box", "Escritura Fantasma", "Temperaturas bajo cero"],
      characteristics: {
        velocidad: {
          general: "rápido",
          cuando_es_rápido: "Cuanto más loquito estes",
        },
        tiempo_de_cacería: {
          cordura: "50%",
          incienso: "90 segundos",
        },
        frecuencia_de_parpadear: "normal",
        fuerte: "Es fuerte si eres débil",
        débil: "Si eres fuerte es débil",
        habilidad_de_caza: "ninguna",
        característica_única: "ninguna",
      },
    },
    {
      name: "Deogen",
      evidence: ["Spirit Box", "Escritura Fantasma", "Proyector D.O.T.S."],
      characteristics: {
        velocidad: {
          general: "anormal",
          cuando_es_rápido: "Cuanto más cerca de ti más lento",
        },
        tiempo_de_cacería: {
          cordura: "40%",
          incienso: "90 segundos",
        },
        frecuencia_de_parpadear: "normal",
        fuerte: "El rayo mcquen cuando no lo ves",
        débil: "Tiene retraso el men (cuando te ve, va lento)",
        habilidad_de_caza: "no puedes esconderte",
        característica_única: "ninguna",
      },
    },
    {
      name: "Thaye",
      evidence: ["Orbes", "Escritura Fantasma", "Proyector D.O.T.S."],
      characteristics: {
        velocidad: {
          general: "anormal",
          cuando_es_rápido: "Si es joven va rapido, pero lento cuando es viejo",
        },
        tiempo_de_cacería: {
          cordura: "50%",
          incienso: "< 90 segundos",
        },
        frecuencia_de_parpadear: "normal",
        fuerte: "El rayo mcquen cuando es joven",
        débil: "Es hora de retirarse Mcquen (lento)",
        habilidad_de_caza: "Ataca al 75% si no ha envejecido",
        característica_única: "ninguna",
      },
    },
  ],
};

export default jsonData;