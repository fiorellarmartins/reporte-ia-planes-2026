const partidos = [
  {
    partido: "Ahora Nación",
    candidato: "Alfonso López Chau",
    logo: "logos/ahora-nacion.jpg",
    versiones: [
      { version: null, porcentaje: 8.4, palabras: 53722, sparklineKey: "ahora-nacion", breakdownKey: "ahora-nacion", pangram: "https://www.pangram.com/history/750f6c6b-b2df-471c-b6e2-298a8f305b2c/" }
    ]
  },
  {
    partido: "Alianza Para el Progreso",
    candidato: "César Acuña",
    logo: "logos/alianza-para-el-progreso.png",
    versiones: [
      { version: "Plan oficial", porcentaje: 12, palabras: 22476, sparklineKey: "alianza-para-el-progreso-1", breakdownKey: "alianza-para-el-progreso-1", pangram: "https://www.pangram.com/history/ebae1882-2895-402b-9a94-368a1084bfe9/" },
      { version: "Plan ampliado", porcentaje: 18.7, palabras: 167705, sparklineKey: "alianza-para-el-progreso-2", breakdownKey: "alianza-para-el-progreso-2", pangram: "https://www.pangram.com/history/d9b177c5-6642-4dee-a74b-041eec494cbe/" }
    ]
  },
  {
    partido: "APRA",
    candidato: "Enrique Valderrama",
    logo: "logos/apra.svg",
    versiones: [
      { version: null, porcentaje: 35.8, palabras: 26746, sparklineKey: "apra", breakdownKey: "apra", pangram: "https://www.pangram.com/history/5dbc45f2-1513-4a62-a244-1f14345be866/" }
    ]
  },
  {
    partido: "Avanza País",
    candidato: "José Williams",
    logo: "logos/avanza-pais.jpg",
    versiones: [
      { version: null, porcentaje: 14.5, palabras: 59727, sparklineKey: "avanza-pais", breakdownKey: "avanza-pais", pangram: "https://www.pangram.com/history/74a64d14-333e-47fb-b1cf-5c99316360fa/" }
    ]
  },
  {
    partido: "Cooperación Popular",
    candidato: "Yonhy Lescano",
    logo: "logos/cooperacion-popular.jpg",
    versiones: [
      { version: null, porcentaje: 12.1, palabras: 5262, sparklineKey: "cooperacion-popular", breakdownKey: "cooperacion-popular", pangram: "https://www.pangram.com/history/f85b074f-e50e-49be-9534-2f2a91b4ef15/" }
    ]
  },
  {
    partido: "Demócrata Unido Perú",
    candidato: "Charlie Carrasco",
    logo: "logos/democrata-unido-peru.jpg",
    versiones: [
      { version: null, porcentaje: 0, palabras: 3154, sparklineKey: "democrata-unido-peru", breakdownKey: "democrata-unido-peru", pangram: "https://www.pangram.com/history/3e329022-1792-4e14-a6aa-39b7055d9f90/" }
    ]
  },
  {
    partido: "Democrático Federal",
    candidato: "Armando Massé",
    logo: "logos/democratico-federal.jpg",
    versiones: [
      { version: null, porcentaje: 76.5, palabras: 8966, sparklineKey: "democratico-federal", breakdownKey: "democratico-federal", pangram: "https://www.pangram.com/history/695962db-349b-4023-8b47-ed3cdc44f723/" }
    ]
  },
  {
    partido: "Fe en el Perú",
    candidato: "Álvaro Paz de la Barra",
    logo: "logos/fe-en-el-peru.png",
    versiones: [
      { version: null, porcentaje: 100, palabras: 7324, sparklineKey: "fe-en-el-peru", breakdownKey: "fe-en-el-peru", pangram: "https://www.pangram.com/history/0a49d1f3-b149-4cbd-ae3c-4be00dd0bdb6/" }
    ]
  },
  {
    partido: "Frente de la Esperanza",
    candidato: "Fernando Olivera",
    logo: "logos/frente-de-la-esperanza.png",
    versiones: [
      { version: null, porcentaje: 0, palabras: 15599, sparklineKey: "frente-de-la-esperanza", breakdownKey: "frente-de-la-esperanza", pangram: "https://www.pangram.com/history/0a52c384-2840-47b6-af88-6d430d0f5137/" }
    ]
  },
  {
    partido: "Fuerza Popular",
    candidato: "Keiko Fujimori",
    logo: "logos/fuerza-popular.png",
    versiones: [
      { version: null, porcentaje: 44, palabras: 44266, sparklineKey: "fuerza-popular", breakdownKey: "fuerza-popular", pangram: "https://www.pangram.com/history/d88414ff-647b-45ae-966e-d18dd894764c/" }
    ]
  },
  {
    partido: "Fuerza y Libertad",
    candidato: "Fiorella Molinelli",
    logo: "logos/fuerza-y-libertad.jpg",
    versiones: [
      { version: null, porcentaje: 92, palabras: 95299, sparklineKey: "fuerza-y-libertad", breakdownKey: "fuerza-y-libertad", pangram: "https://www.pangram.com/history/c874f28c-0f23-4133-8a9d-e350a9f39815/" }
    ]
  },
  {
    partido: "Integridad Democrática",
    candidato: "Wolfgang Grozo",
    logo: "logos/integridad-democratica.jpg",
    versiones: [
      { version: null, porcentaje: 90, palabras: 87443, sparklineKey: "integridad-democratica", breakdownKey: "integridad-democratica", pangram: "https://www.pangram.com/history/4a041fc6-6949-4c74-b49e-426821683af5/" }
    ]
  },
  {
    partido: "Juntos Por el Perú",
    candidato: "Roberto Sánchez",
    logo: "logos/juntos-por-el-peru.png",
    versiones: [
      { version: null, porcentaje: 1, palabras: 30513, sparklineKey: "juntos-por-el-peru", breakdownKey: "juntos-por-el-peru", pangram: "https://www.pangram.com/history/f4bb968c-7d91-4897-9f80-2f3aa9292175/" }
    ]
  },
  {
    partido: "Libertad Popular",
    candidato: "Rafael Belaúnde",
    logo: "logos/libertad-popular.jpg",
    versiones: [
      { version: null, porcentaje: 38, palabras: 31043, sparklineKey: "libertad-popular", breakdownKey: "libertad-popular", pangram: "https://www.pangram.com/history/5d9538da-38d9-4f8b-aa2a-ebfb7405a042/" }
    ]
  },
  {
    partido: "País Para Todos",
    candidato: "Carlos Álvarez",
    logo: "logos/pais-para-todos.jpg",
    versiones: [
      { version: null, porcentaje: 29, palabras: 12386, sparklineKey: "pais-para-todos", breakdownKey: "pais-para-todos", pangram: "https://www.pangram.com/history/7e94cb30-14ae-4d19-874a-ee2dc086097d/" }
    ]
  },
  {
    partido: "Partido Cívico Obras",
    candidato: "Ricardo Belmont",
    logo: "logos/partido-civico-obras.png",
    versiones: [
      { version: null, porcentaje: 9, palabras: 5583, sparklineKey: "partido-civico-obras", breakdownKey: "partido-civico-obras", pangram: "https://www.pangram.com/history/cc82d6e9-a6b0-4d07-8220-68a82898d17b/" }
    ]
  },
  {
    partido: "Partido del Buen Gobierno",
    candidato: "Jorge Nieto",
    logo: "logos/partido-del-buen-gobierno.jpg",
    versiones: [
      { version: null, porcentaje: 58, palabras: 28149, sparklineKey: "partido-del-buen-gobierno", breakdownKey: "partido-del-buen-gobierno", pangram: "https://www.pangram.com/history/81fbc049-5d70-4895-b9e0-5867ec29e65b/" }
    ]
  },
  {
    partido: "Partido Demócrata Verde",
    candidato: "Alex Gonzales",
    logo: "logos/partido-democrata-verde.png",
    versiones: [
      { version: null, porcentaje: 91, palabras: 98918, sparklineKey: "partido-democrata-verde", breakdownKey: "partido-democrata-verde", pangram: "https://www.pangram.com/history/100a6cc9-34f5-43b8-81ec-70005a399b4a/" }
    ]
  },
  {
    partido: "Partido Morado",
    candidato: "Mesías Guevara",
    logo: "logos/partido-morado.png",
    versiones: [
      { version: null, porcentaje: 91, palabras: 154294, sparklineKey: "partido-morado", breakdownKey: "partido-morado", pangram: "https://www.pangram.com/history/825dd608-67c1-4be6-9dd7-c56f371d8859/" }
    ]
  },
  {
    partido: "Partido Patriótico del Perú",
    candidato: "Herbert Caller",
    logo: "logos/partido-patriotico.png",
    versiones: [
      { version: null, porcentaje: 3, palabras: 9375, sparklineKey: "partido-patriotico", breakdownKey: "partido-patriotico", pangram: "https://www.pangram.com/history/3750c5cc-362a-488b-96fb-724a690098a8/" }
    ]
  },
  {
    partido: "Perú Acción",
    candidato: "Francisco Diez Canseco",
    logo: "logos/peru-accion.jpg",
    versiones: [
      { version: null, porcentaje: 0, palabras: 6899, sparklineKey: "peru-accion", breakdownKey: "peru-accion", pangram: "https://www.pangram.com/history/b56d1952-8deb-4d62-a6eb-d3e1005c3457/" }
    ]
  },
  {
    partido: "Perú Libre",
    candidato: "Vladimir Cerrón",
    logo: "logos/peru-libre.png",
    versiones: [
      { version: null, porcentaje: 31, palabras: 14137, sparklineKey: "peru-libre", breakdownKey: "peru-libre", pangram: "https://www.pangram.com/history/c67e9d7b-f16a-4c88-9bb0-45d22438b22d/" }
    ]
  },
  {
    partido: "Perú Moderno",
    candidato: "Carlos Jaico",
    logo: "logos/peru-moderno.jpg",
    versiones: [
      { version: null, porcentaje: 12, palabras: 11544, sparklineKey: "peru-moderno", breakdownKey: "peru-moderno", pangram: "https://www.pangram.com/history/81a8da09-0579-40aa-9177-9fcf6064eb7a/" }
    ]
  },
  {
    partido: "Perú Primero",
    candidato: "Mario Vizcarra",
    logo: "logos/peru-primero.png",
    versiones: [
      { version: null, porcentaje: 26, palabras: 53601, sparklineKey: "peru-primero", breakdownKey: "peru-primero", pangram: "https://www.pangram.com/history/d068fcde-c581-41c9-9cbd-40f9eb781cd6/" }
    ]
  },
  {
    partido: "Podemos Perú",
    candidato: "José Luna Gálvez",
    logo: "logos/podemos-peru.png",
    versiones: [
      { version: null, porcentaje: 21, palabras: 25316, sparklineKey: "podemos-peru", breakdownKey: "podemos-peru", pangram: "https://www.pangram.com/history/8175da5f-1850-4a3d-87d2-68602b37c3ad/" }
    ]
  },
  {
    partido: "Primero La Gente",
    candidato: "Marisol Pérez Tello",
    logo: "logos/primero-la-gente.jpg",
    versiones: [
      { version: null, porcentaje: 61, palabras: 91265, sparklineKey: "primero-la-gente", breakdownKey: "primero-la-gente", pangram: "https://www.pangram.com/history/f7a574d6-7546-4e0f-9b10-5ad99068b56e/" }
    ]
  },
  {
    partido: "PRIN",
    candidato: "Walter Chirinos",
    logo: "logos/prin.png",
    versiones: [
      { version: null, porcentaje: 10, palabras: 17641, sparklineKey: "prin", breakdownKey: "prin", pangram: "https://www.pangram.com/history/a27056cf-3666-4ed8-a0be-16d487112d42/" }
    ]
  },
  {
    partido: "Progresemos",
    candidato: "Paul Jaimes",
    logo: "logos/progresemos.jpg",
    versiones: [
      { version: null, porcentaje: 53, palabras: 19444, sparklineKey: "progresemos", breakdownKey: "progresemos", pangram: "https://www.pangram.com/history/442d1831-1ade-4acd-98e4-5f0ecc53b25d/" }
    ]
  },
  {
    partido: "Renovación Popular",
    candidato: "Rafael López Aliaga",
    logo: "logos/renovacion-popular.png",
    versiones: [
      { version: "Documento 1", porcentaje: 0, palabras: 6868, sparklineKey: "renovacion-popular-1", breakdownKey: "renovacion-popular-1", pangram: "https://www.pangram.com/history/a5553c89-c5f7-4b60-882d-a66f442230cb/" },
      { version: "Documento 2", porcentaje: 0, palabras: 10925, sparklineKey: "renovacion-popular-2", breakdownKey: "renovacion-popular-2", pangram: "https://www.pangram.com/history/6e49ec64-f331-4808-a3af-fa3075ba41c7/" }
    ]
  },
  {
    partido: "Salvemos al Perú",
    candidato: "Antonio Ortiz",
    logo: "logos/salvemos-al-peru.png",
    versiones: [
      { version: null, porcentaje: 14, palabras: 24109, sparklineKey: "salvemos-al-peru", breakdownKey: "salvemos-al-peru", pangram: "https://www.pangram.com/history/32c3b832-f4ed-4afe-95ea-648ae1d3a3a2/" }
    ]
  },
  {
    partido: "Sí Creo",
    candidato: "Carlos Espá",
    logo: "logos/si-creo.png",
    versiones: [
      { version: null, porcentaje: 4, palabras: 13270, sparklineKey: "si-creo", breakdownKey: "si-creo", pangram: "https://www.pangram.com/history/a87d716a-f8f3-490b-9d12-1d6d54bb9220/" }
    ]
  },
  {
    partido: "Somos Perú",
    candidato: "George Forsyth",
    logo: "logos/somos-peru.png",
    versiones: [
      { version: null, porcentaje: 61, palabras: 37904, sparklineKey: "somos-peru", breakdownKey: "somos-peru", pangram: "https://www.pangram.com/history/9e329a12-1d24-4ebf-9fa3-004671439d30/" }
    ]
  },
  {
    partido: "Trabajadores y Emprendedores",
    candidato: "Napoleón Becerra",
    logo: "logos/trabajadores-y-emprendedores.jpg",
    versiones: [
      { version: null, porcentaje: 0, palabras: 1904, sparklineKey: "trabajadores-y-emprendedores", breakdownKey: "trabajadores-y-emprendedores", pangram: "https://www.pangram.com/history/4e45d5c0-eae7-47b6-857e-97d542b22d24/" }
    ]
  },
  {
    partido: "Un Camino Diferente",
    candidato: "Rosario Fernández",
    logo: "logos/un-camino-diferente.jpg",
    versiones: [
      { version: null, porcentaje: 78, palabras: 6607, sparklineKey: "un-camino-diferente", breakdownKey: "un-camino-diferente", pangram: "https://www.pangram.com/history/dd66a343-df5b-4870-8c45-d7c4eabfd03e/" }
    ]
  },
  {
    partido: "Unidad Nacional",
    candidato: "Roberto Chiabra",
    logo: "logos/unidad-nacional.jpg",
    versiones: [
      { version: null, porcentaje: 7, palabras: 64756, sparklineKey: "unidad-nacional", breakdownKey: "unidad-nacional", pangram: "https://www.pangram.com/history/e4509922-1fa2-4304-90a8-0be2bc2537a8/" }
    ]
  },
  {
    partido: "Venceremos",
    candidato: "Ronald Atencio",
    logo: "logos/venceremos.png",
    versiones: [
      { version: null, porcentaje: 5, palabras: 26006, sparklineKey: "venceremos", breakdownKey: "venceremos", pangram: "https://www.pangram.com/history/c4934b78-bc74-4f30-a8c4-62733ce755ad/" }
    ]
  }
];
