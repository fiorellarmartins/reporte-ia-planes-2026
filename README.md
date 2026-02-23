# Reporte de IA: Planes de Gobierno 2026

¿Cuánto del plan de gobierno que tu partido presentó ante el JNE fue escrito por inteligencia artificial?

Este proyecto visualiza los resultados del análisis de detección de IA aplicado a los planes de gobierno de los partidos políticos peruanos inscritos para las Elecciones Generales 2026. Los documentos analizados son los mismos que cada partido presentó oficialmente ante el Jurado Nacional de Elecciones (JNE).

🔗 **[Ver el reporte en vivo](https://fiorellarmartins.github.io/reporte-ia-planes-2026)**

**Por [Roberto Monjaras](https://x.com/robj02) y [Fiorella Ramírez](https://x.com/fiormartins)**

---

## ¿Cómo se hizo el análisis?

La detección fue realizada con [Pangram Labs](https://www.pangram.com), una herramienta especializada en identificar contenido generado por modelos de lenguaje (como ChatGPT u otros). El análisis opera a nivel de párrafo y produce un porcentaje de probabilidad de que cada fragmento haya sido generado por IA.

**Importante:** los porcentajes mostrados son estimaciones probabilísticas, no prueba definitiva. Reflejan el nivel de similitud del texto con patrones de escritura de IA según el modelo de Pangram Labs. No constituyen acusación formal de ningún tipo.

---

## Estructura del proyecto

```
reporte-ia-planes-2026/
├── index.html        # Página principal
├── styles.css        # Estilos
├── data.js           # Datos por partido (porcentajes, candidatos, enlaces)
├── sparklines.js     # Series de datos para los gráficos de línea (duplicados del reporte de Pangram)
├── breakdowns.js     # Desglose por categoría de escritura
├── main.js           # Lógica de renderizado e interacción
├── logos/            # Logotipos de los partidos (uso identificativo)
└── planes/           # Planes de gobierno originales presentados ante el JNE
```

---

## Datos

- **Fuente de detección:** [Pangram Labs](https://www.pangram.com)
- **Documentos analizados:** Planes de gobierno presentados ante el JNE, disponibles públicamente en la carpeta `planes/`
- **Cobertura:** 36 partidos políticos inscritos para las Elecciones Generales Perú 2026
- **Estado:** En actualización a medida que se incorporan nuevos planes o versiones

Los logotipos de los partidos son usados con fines identificativos y son propiedad de los respectivos partidos políticos.

---

## Nota sobre documentos múltiples

Para **Alianza Para el Progreso** y **Renovación Popular**, se analizaron dos documentos por separado porque eran sustancialmente distintos entre sí. Durante la recopilación, encontramos que otros partidos también tenían más de un documento disponible en línea, pero en esos casos se trataba principalmente de una versión resumida y una versión extendida del mismo plan, por lo que se priorizó el documento más completo.

---

## Reproducibilidad

Los enlaces a cada análisis individual en Pangram Labs están disponibles directamente en el reporte. Cualquier persona puede verificar los resultados accediendo a los reportes originales desde el panel de cada partido.

---

## Licencia

Los datos de detección pertenecen a Pangram Labs. Los planes de gobierno son documentos públicos del JNE. El código de visualización de este repositorio es de libre uso.
