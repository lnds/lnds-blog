+++
date = '2026-04-14T10:00:00-03:00'
title = 'Tus agentes necesitan un jefe'
slug = "tus-agentes-necesitan-un-jefe"
tags = ["ia", "herramientas", "claude", "agentes", "lonko", "tmux", "rust", "opensource"]
images = ["lonko.gif"]
+++

Seguro piensas que vas a instalar Claude y la IA va a resolver todos tus problemas y al fin tendrás tiempo para dedicarlo a subir tu Elo en chess.com.

Pero no "mi ciela", la cosa no funciona así.

La IA no resuelve tus problemas, **tú resuelves problemas con la IA**. Y esta distinción tan simple no es entendida por muchos. Especialmente por algunos despistados ejecutivos que prometen a sus superiores incrementos espectaculares de productividad. O la promesa de hacer más con menos gente.

<!--more-->

La realidad, la que vivimos quienes llevamos un buen rato trabajando con agentes, practicando
lo que algunos llaman AI First Software Engineering, es bastante distinta.

Trabajar con IA exige una nueva disciplina. Nuevos criterios, nuevas herramientas, procesos distintos.

La naturaleza del trabajo no cambia, ni baja la cantidad, al contrario, puede aumentar.

No eres el "human in the loop", no, tu rol es ser el "expert in the loop".

Y cuando empiezas a usar la IA en serio, no para autocompletar funciones, sino para delegar tareas completas
a tus agentes, te encuentras rápido con muchos problemas prácticos.

El primero, es cómo dividir el trabajo. Cómo lo paralelizo. Cómo logro que los agentes trabajen de manera coordinada.
Y lo más importante, como evito la fatiga del cambio de contexto.

Este problema me ha tenido ocupado los últimos meses y el fruto de mi experiencia es un nuevo
proyecto que quiero presentarte.

Su nombre es **Lonko**.

Lonko es una herramienta TUI (terminal user interface) escrita en Rust que monitorea y controla múltiples sesiones de Claude Code corriendo en tmux.

La idea es tener una vista única, en vivo, de todos tus agentes: estado, modelo, uso de tokens, actividad actual.

El nombre viene del mapudungun. **Lonko** es la *cabeza* o el  *jefe*.

En griego existe un término equivalente: "archos", que significa lo mismo, cabeza o jefe.
La palabra arquitecto viene de acá, de archos y tecton que es constructor, así que el architecto era el
constructor jefe o el jefe de obra.

Pero me parece mejor usar un nombre propio de mi tierra, del mismo modo que usé Kimun antes.

Un lonko es el líder de una comunidad mapuche, el que coordina y vela por los suyos.
La metáfora es clara: esta herramienta es el jefe que vigila a tus agentes Claude,
los mantiene organizados y te permite dirigirlos desde un solo lugar.

{{< figure src="lonko.gif" alt="Demo de Lonko monitoreando sesiones de Claude Code en tmux" >}}

## ¿Qué hace exactamente?

- **Monitoreo en vivo** de todas las sesiones de Claude Code activas, con estado, tokens consumidos y la actividad actual de cada una.
- **Manejo de permisos** sin tener que cambiar de pane: cuando un agente te pregunta `¿puedo ejecutar esto?`, respondes con `y`/`w`/`n` desde donde estés.
- **Gestión de worktrees de git**: crear y destruir worktrees directamente desde la UI, porque cada agente debería trabajar aislado.
- **Navegación rápida**: saltar entre agentes con teclas o atajos numéricos.
- **Vista de detalle**: expandir cualquier sesión para ver su transcripción completa.
- **Integración con el terminal**: si usas Ghostty, WezTerm o Kitty, puedes mapear teclas globales para responder permisos sin siquiera abrir el panel.

Todo esto vive en una ventana de tmux que aparece y desaparece con un atajo. No es una app de Electron de 200MB, no es una extensión de VSCode, no es un servicio en la nube. Es un binario de Rust que corre en tu terminal y se mete en los huecos del flujo que ya tienes.

## La arquitectura

Lonko descubre sesiones por tres caminos independientes:

1. **hooks de claude Code**: Claude dispara eventos de ciclo de vida que `lonko-hook` reenvía vía socket Unix. Esta es la implementación inicial, ahora Claude tiene otras formas de controlarlo, que voy a aprovechar, así que esto puede cambiar pronto.
2. **Filesystem watcher**: monitorea `~/.claude/sessions/` para detectar nuevas sesiones.
3. **Scanner de tmux**: cada cierto tiempo escanea los panes de tmux buscando procesos de Claude.

## Parte de una tríada

Lonko no es una herramienta aislada. Es la segunda pieza de una **tríada** que estoy construyendo para trabajar con agentes IA en serio.

La primera fue [**Kimun**](/blog/lnds/2026/02/25/kimun-midiendo-la-calidad-del-codigo-generado-por-la-ia/), que mide la calidad del código que generan los agentes.

La segunda es **Lonko**, que coordina y vigila a los agentes mientras trabajan.

La tercera la presentaré en un próximo post.

Lo importante por ahora es que estas herramientas no son ejercicios académicos ni proyectos de fin de semana. Las uso todos los días, en mi propio trabajo, resolviendo mis propios problemas. Y las libero como código abierto porque creo que el conocimiento de cómo trabajar bien con IA no debería quedarse encerrado en threads de Twitter de "thought leaders" o peor, de vende humo, que nunca han escrito una línea de producción.

## Cómo probarlo

Lonko vive en [github.com/lnds/lonko](https://github.com/lnds/lonko). Necesitas Rust, tmux y Claude Code instalados. La instalación es:

```sh
git clone https://github.com/lnds/lonko.git
cd lonko
./install.sh
```

El script se encarga de compilar los binarios, instalar los scripts de tmux, generar la configuración y enchufar los hooks de Claude. Después agregas una línea a tu `tmux.conf` y listo: `prefix + s` despliega el panel.

Es software joven. Tiene pifias. Faltan features. Pero hace lo que necesito que haga, y lo hace bien hasta ahora.

La IA no resuelve tus problemas. Tú los resuelves con ella. Y para hacerlo bien necesitas más que el modelo de moda: necesitas medirlo, necesitas dirigirlo, necesitas un proceso. Necesitas tratar a los agentes como colaboradores reales y no como oráculos infalibles.

Lonko es mi intento de poner en código esa convicción. Si te sirve, úsalo.
Si no, espero que te inspire a construir el tuyo.

---

*Si este tema te interesa, suscríbete a mi [Patreon](https://www.patreon.com/cw/lnds) tu apoyo es importante, podrás acceder a contenido extra que estoy preparando, y participar en la selección de temas a elaborar en este blog.*
