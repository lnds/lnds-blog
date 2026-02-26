+++
date = '2026-02-25T10:00:00-03:00'
title = 'Kimun: midiendo la calidad del código generado por la IA'
slug = "kimun-midiendo-la-calidad-del-codigo-generado-por-la-ia"
tags = ["ia", "calidad", "desarrollo", "herramientas", "kimun", "claude", "metricas"]
images = []
+++

> "No puedes controlar lo que no puedes medir." -- Tom DeMarco

Hay un miedo antiguo en nuestra profesión, y no es nuevo, pero la IA lo amplificó: **¿cómo sé que el código que estoy generando es bueno?**

Es una pregunta legítima. Cuando le pides a un agente de IA que te escriba una función, un módulo completo o incluso un proyecto entero, estás delegando decisiones que antes tomabas línea por línea. Y sí, el resultado puede compilar, pasar los tests y hasta verse elegante. Pero ¿es mantenible? ¿Es demasiado complejo? ¿Tiene duplicaciones ocultas? ¿Vas a entenderlo en seis meses?

La respuesta no puede ser un acto de fe. Tiene que ser una medición.

<!--more-->

Muchos desarrolladores confían ciegamente en el código que genera la IA. Otros lo rechazan por principio. Ambas posturas son cómodas, y ambas son equivocadas.

Lo que necesitamos son herramientas que nos permitan **evaluar objetivamente** la calidad del código, venga de donde venga: de un humano, de un LLM o de una combinación de ambos.

Existen productos comerciales para esto. Codacy, SonarQube, CodeClimate, todos hacen un trabajo respetable. Pero quería algo diferente: una herramienta que fuera **rápida, que corriera en la terminal, que pudiera integrarse directamente con agentes de IA**, y que estuviera basada en investigación sólida, no en reglas arbitrarias inventadas por un comité.

Así nació **Kimun**.

## ¿Qué es Kimun?

Kimun (de "kimün", palabra en mapudungún que significa "conocimiento" o "sabiduría") es una herramienta de línea de comandos para análisis de calidad de código. Un solo binario (`km`) que reemplaza toda una colección de herramientas: `cloc` para contar líneas, SonarQube para complejidad, y las ideas de Adam Tornhill para análisis temporal.

Está escrita en Rust, es rápida, y soporta más de 16 lenguajes para análisis de complejidad y más de 40 para métricas simples de código.

## La ciencia detrás de Kimun

No inventé nada nuevo. Kimun implementa métricas que llevan décadas de investigación detrás:

### Métricas de Halstead

En 1977, Maurice Halstead propuso medir el software como si fuera un fenómeno físico. Sus métricas extraen operadores y operandos del código fuente para calcular:

- **Volumen**: el tamaño del programa en bits de información
- **Dificultad**: el esfuerzo mental necesario para comprenderlo
- **Esfuerzo**: el trabajo total requerido
- **Estimación de bugs**: defectos predichos según la fórmula V/3000

Halstead fue criticado en su época. Pero sus métricas siguen siendo sorprendentemente útiles como indicadores relativos: te dicen qué archivos son más densos, más propensos a errores, más costosos de mantener.

### Complejidad ciclomática

Thomas McCabe, en 1976, propuso contar los caminos independientes a través del código. Cada `if`, cada `for`, cada `while` agrega un camino. Más caminos, más estados posibles, más difícil de probar y entender.

### El trabajo de Tornhill

Adam Tornhill cambió la forma en que pensamos sobre la calidad del código con sus libros *"Your Code as a Crime Scene"* y *"Software Design X-Rays"*. Su insight clave: **el código más problemático no es el más complejo, sino el que es complejo Y cambia frecuentemente**.

Kimun implementa tres análisis inspirados en Tornhill:

- **Hotspots**: combina la frecuencia de cambios en git con la complejidad del código. Un archivo complejo que nadie toca es un riesgo menor. Un archivo complejo que se modifica cada semana es una bomba de tiempo.
- **Mapas de conocimiento**: analiza `git blame` para detectar concentración de conocimiento. Si una sola persona posee más del 80% de un módulo crítico, tienes un problema de *bus factor*.
- **Acoplamiento temporal**: identifica archivos que siempre cambian juntos en los commits, revelando dependencias arquitecturales ocultas.

### Complejidad por indentación

También inspirado en Tornhill, Kimun mide la varianza de la profundidad de indentación. Es una heurística simple pero poderosa: código profundamente anidado es código difícil de seguir. La desviación estándar de la indentación correlaciona bien con la complejidad percibida por los desarrolladores.

## El Score: una nota para tu código

El comando estrella de Kimun es `km score`. Combina seis dimensiones en una calificación agregada, desde A++ hasta F--:

| Dimensión | Peso | Qué mide |
|---|---|---|
| Índice de Mantenibilidad | 30% | Mantenibilidad general (0-100) |
| Complejidad Ciclomática | 20% | Complejidad máxima por archivo |
| Duplicación | 15% | Porcentaje de código duplicado |
| Complejidad por Indentación | 15% | Varianza de profundidad de anidamiento |
| Esfuerzo de Halstead | 15% | Esfuerzo mental por línea de código |
| Tamaño de Archivo | 5% | Rango óptimo: 50-300 LOC |

Correrlo es trivial:

```bash
km score .
```

Y obtienes una tabla con la nota de tu proyecto, más un desglose por dimensión. Si quieres ver los archivos más problemáticos:

```bash
km score . --bottom 20
```

Esto te muestra los 20 archivos que más necesitan atención. Es perfecto para priorizar refactorizaciones.

¿Necesitas integrarlo en un pipeline de CI/CD? Todo comando soporta salida JSON:

```bash
km score . --json
```

## Integrándolo con Claude Code

Aquí es donde la cosa se pone interesante. Kimun tiene integración directa con Claude Code. Un solo comando:

```bash
km ai skill claude
```

Esto instala un *skill* que le enseña a Claude Code todos los comandos disponibles de `km`. Una vez instalado, puedes pedirle cosas como:

> "Analiza la calidad del código de este proyecto"

> "Muéstrame los hotspots de los últimos 6 meses"

> "¿Qué archivos tienen peor mantenibilidad?"

Claude Code ejecutará los comandos apropiados de `km`, interpretará los resultados en JSON y te dará un análisis narrativo. Es como tener un auditor de código que habla tu idioma.

La gracia de esto es que **cierra el ciclo**: usas IA para generar código, y luego usas IA + métricas objetivas para evaluar ese código. No es fe ciega. Es verificación asistida.

## Instalación

La forma más sencilla es usando Homebrew:

```bash
brew install lnds/tap/km
```

Si ya tienes el toolchain de Rust instalado, también puedes usar Cargo:

```bash
cargo install kimun
```

Y si prefieres descargar el binario compilado directamente, hay versiones disponibles para macOS (Apple Silicon), Linux (x86_64 y ARM) y Windows en la [página de releases](https://github.com/lnds/kimun/releases).

## Por qué construí esto

Llevo meses usando agentes de IA para escribir código. Y me di cuenta de que la conversación sobre calidad estaba dominada por dos extremos: los evangelistas que dicen que la IA escribe código perfecto, y los escépticos que dicen que todo lo que genera es basura.

La verdad, como siempre, está en los datos. No en las opiniones.

Kimun es mi forma de poner números sobre la mesa. De decir: "este módulo tiene una complejidad ciclomática de 47 y un índice de mantenibilidad de 23. No importa quién lo escribió, hay que refactorizarlo."

Las métricas no reemplazan el juicio humano. Pero te dan una base objetiva para tomar decisiones. Y cuando estás generando cientos de líneas de código por hora con asistencia de IA, esa base objetiva es más necesaria que nunca.

## Pruébalo

El código está en [GitHub](https://github.com/lnds/kimun). Es open source, está activamente mantenido, y acepto contribuciones.

Corre `km score .` en tu proyecto. Mira la nota. Si te sorprende, bien, para eso están las métricas: para mostrarte lo que no querías ver.

---

Si este tipo de contenido te interesa, suscríbete a mi [newsletter](https://lnds.net/newsletter/). Escribo sobre desarrollo, IA y las cosas que realmente importan en nuestra profesión.
