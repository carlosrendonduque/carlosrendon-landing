# Decisiones de la landing (v1)

| # | Tema | Decisión | Fecha |
|---|---|---|---|
| 1 | Tesis del hero | **"AI proposes, the human decides"** / "La IA propone, el humano decide". Debajo va la línea comercial: *I build Salesforce systems for the health and public sectors, and AI tools where a person makes the final call.* (Sin conteo de años ni clientes: ver reglas de contenido.) | 2026-09-22 |
| 2 | Dominio | **carlosrendon.co** | 2026-09-22 |
| 3 | Idiomas | **EN + ES desde el día 1**, con `/en` y `/es` y hreflang | 2026-09-22 |
| 4 | Consultoría | **Sí, bajo el nombre de Carlos.** Puerta de entrada gratis: **chat de diagnóstico con el asistente (Conserje)**, que reemplaza a las Unoffice Hours (2026-09-22); la llamada solo si hay fit. Bayzara aparece como proyecto | 2026-09-22 |
| 5 | Newsletter | **Sí, mensual, en Buttondown.** Una sola lista con secciones Build / Obra / Música | 2026-09-22 |
| 6 | Diagnóstico pagado | **Sí, publicado:** "AI & Salesforce readiness review", AUD 2.500 precio fijo, 2 semanas | 2026-09-22 |
| 7 | Capa de experiencia v1 | **Detalles sutiles + `llms.txt`.** El modo experiencia completo queda para v2 | 2026-09-22 |
| 8 | Contenido v1 | Música sin enlaces, sin obras literarias publicadas, Toma 1024 "en desarrollo" y disponibilidad inmediata | 2026-09-22 |
| 9 | Stack y hosting | Astro (estático), GitHub Pages vía Actions, dominio en GoDaddy apuntando a Pages | 2026-09-22 |

## Revisión comercial (2026-09-23)

| # | Tema | Decisión | Fecha |
|---|---|---|---|
| 10 | Jerarquía del hero | **La oferta va en el H1, la tesis encabeza la sección que la demuestra.** (El H1 concreto lo fija la decisión 19.) "La IA propone, el humano decide" sigue siendo la marca, pero desde el H2 de la sección de tres columnas y el footer. Revierte parcialmente la decisión #1 | 2026-09-23 |
| 20 | El H1 vende resultado, no método | **"Quédate con las decisiones. Suelta el resto."** Integrar, llegar a producción y aprobar son el *cómo*, y nadie paga por el cómo; una promesa genérica de negocio ("vende más", "reduce costos") tampoco sirve, porque es la copia más commoditizada que hay y es el tono promocional ya descartado. La salida es el resultado que el portafolio respalda: WorkBrain, Conato, Bayzara y Conserje hacen todos lo mismo — trabajo que se hace solo hasta donde hace falta criterio humano. Es la tesis dicha como beneficio. El cómo baja al lede y a las credenciales, donde sirve de prueba | 2026-09-23 |
| 19 | Mercado de la home | **La home vende IA aplicada, no Salesforce.** Salud y gobierno no compran por landing page: compran por panel, licitación y agencia, y ahí Carlos ya gana con LinkedIn. El comprador que llega por web es fundador, CTO o jefe de operación. El H1 queda "Conecto la IA con los sistemas que ya tienes", con el lede cargando producción-no-demo y aprobación humana. Salesforce, OmniStudio, salud, gobierno y la habilitación de seguridad salen de la home y viven en /work; en la home solo quedan mencionados en el cuerpo de la tarjeta que enlaza allá. Corrige un error de posicionamiento de esta misma revisión. **El sitio tampoco ofrece empleo fijo:** eso llega por LinkedIn, Seek o envío directo de CV, y anunciarlo junto a un diagnóstico de AUD 2.500 abarata la oferta — sugiere que la consultoría es un puente mientras sale un puesto | 2026-09-23 |
| 11 | Title tags | Dejan de gastar su peso en el eslogan: llevan término buscable + ciudad | 2026-09-23 |
| 12 | Bloque de cifras | **Sin estilo de KPI.** No hay cifras publicables sin nombrar clientes, así que el bloque deja de parecer estadística. Se elimina "8 certificaciones" de la home: la lista completa vive en /work | 2026-09-23 |
| 13 | Habilitación de seguridad | Sube de nota al pie de /work a línea destacada en el hero de /work y a la primera credencial de la home. Es filtro binario en salud y gobierno | 2026-09-23 |
| 14 | Arte en la home | Baja de tarjeta de igual peso a una línea de texto con enlace. Sigue en el nav y en /art | 2026-09-23 |
| 15 | Prueba social | **Sí: citas de recomendaciones públicas de LinkedIn**, con nombre y cargo, sin nombre de cliente. `src/data/testimonials.ts`; la sección no se renderiza mientras la lista esté vacía. Cargadas las dos recibidas (Nick Phillips, Jorge Núñez), recortadas a frases contiguas y sin el nombre del cliente que aparecía en el original | 2026-09-23 |
| 16 | Escalera de consultoría | La oferta destacada pasa a ser el **Diagnóstico pagado** (antes lo era la gratis). Se publica **tarifa diaria** en construcción (`SITE.dayRate`) y **los AUD 2.500 se abonan a la construcción** | 2026-09-23 |
| 18 | Foto del hero | **Retrato profesional en la home** (oficina, manos entrelazadas); la foto de estudio con guitarra se queda en /about, donde significa algo. Nueva tarjeta de Open Graph con foto + nombre, en vez del recorte de la foto vertical | 2026-09-23 |
| 17 | Chat y analítica por configuración | `SITE.conserje` vale el endpoint local en desarrollo y vacío en el build publicado: el chat acompaña a Carlos mientras trabaja y le recuerda que falta desplegarlo, sin que un visitante se tope con un chat que no puede responder. Vacío deja el widget fuera de la página y cada CTA cae a mailto; `SITE.umami` vacío deja el sitio sin analítica. Antes se publicaba `http://localhost:8000/chat`, que fallaba siempre por mixed content | 2026-09-23 |

| 21 | Sin promesas de manejo de datos | Se elimina "Tus datos son tuyos: aislados por cliente, borrados al terminar". El aislamiento y el borrado dependen de la arquitectura acordada y de si el cliente paga por esa exclusividad, así que en bloque era falso. Ese tema se define en el alcance, no en la página | 2026-09-23 |

| 22 | La autonomía se concede, no se niega | "El modelo sugiere, una persona decide" se leía como que nada puede correr solo, lo que limita comercialmente y además es falso: hay flujos enteros que corren autónomos. La decisión humana está un nivel más arriba — define la política, la gobernanza y dónde está la línea, no cada acción. Es lo que Bayzara ya hace. En /lab: "una persona define qué corre solo y qué espera aprobación" | 2026-09-23 |

## Pendiente para v1.1
- Cuenta de Buttondown (en `src/site.ts`, variable `buttondown`)
- Analítica sin cookies (Umami o Plausible)
- Enlaces de música (Spotify, YouTube, SoundCloud) y los temas a destacar
- Obras literarias publicables
- v2: el modo experiencia
- Endpoint https de Conserje desplegado, para poner `conserje` en `src/site.ts`
- Id de Umami en `src/site.ts` (`umami`)
- Tarifa diaria publicable en `src/site.ts` (`dayRate`)
