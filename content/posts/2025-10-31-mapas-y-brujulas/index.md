+++
date = '2025-10-31T17:31:00-03:00'
title = 'Mapas o Brújulas'
draft = false
slug = 'mapas-o-brujulas'
tags = ['IA', 'Programación']
+++


Cuando puse en LinkedIn que no creía en el "prompt engineering", se produjo debate. Incluso hubo alguno que se dedicó a explicarme la importancia de las distintas ramas de la ingeniería del software, porque seguro que yo consideraba que no eran útiles tampoco. Como si mi escepticismo con este neologismo equivaliera a despreciar décadas de conocimiento acumulado en nuestra disciplina.

Es lo que pasa en las redes sociales, a partir de un post, que puede tener fallos,
alguien se forma  una idea equivocada de lo que dices y peor, de lo que eres.
Así que en vez de seguir discutiendo con trolls y pedantes,
voy a tratar de explicarme mejor.

## Pasos de Cierva

En la metáfora bíblica[^1] se nos dice que la cierva es capaz de alcanzar grandes
alturas y estar protegida de sus adversarios. Para hacer esto, este mamífero va
pisando con cuidado, tanteando el terreno para después elevarse sobre él, dando
la impresión de un paso firme.
Sin embargo, hay mucha sensibilidad y habilidad tras esa escalada.

Las ciervas de oriente parece que son animales ágiles con pezuñas hendidas que
les permiten caminar con destreza en terrenos rocosos y escarpados.
Los antiguos observaron esto y lo incorporaron en sus oraciones.
También como suele ocurrir en estas piezas literarias, hay una
exhaltación, lograrás grandes alturas, tal como lo hacen las ciervas,
pero llegas a esos altos objetivos pasito a pasito, con cuidado, persistencia,
y por supuesto voluntad (propia o divina)

{{<figure src="cierva.png" caption="Ciervo marrón en las Montañas Rocosas durante el día, fotografía de Oleg Avramenko, tomada de Unsplash" >}}

Hay sabiduría que podemos ocupar en nuestra profesión.

Curiosamente, y seguro inspirado en esta antigua filosofía, Santo Tomás dice en su
"Oración para ordenar la vida propia":

> “Señor, Dios mío, ayúdame a ser obediente sin replicar, pobre sin quejarme,
casto sin corromperme, paciente sin murmuración, humilde sin fingimiento,
alegre sin ser desenfrenado, maduro sin ser pesado, **ágil sin ser descuidado**,
temeroso sin desesperarme, veraz sin doblez; que cuando haga el bien
no me lo atribuya como mérito propio; que cuando corrija al prójimo no lo haga
con superioridad, sino que lo edifique con la palabra y el ejemplo sin simulación.”[^2]

Por qué tanta oración y menciones bíblicas, te preguntarás.
Sobretodo viniendo de un ateo recalcitrante como yo.

Cito esto porque a pesar de mi posición, sé apreciar la sabiduría, donde la hay.
Y porque sirve para explicar mi aproximación a la programación apoyada con
Inteligencia Artificial.

## Alternativas al Vibe Coding

El Vibe Coding debe ser una de las propuestas para desarrollar software más radicales,
criticadas, y con la vida más corta que hemos visto. Seguro termina en el mismo
lugar donde se encuentra en No Code, y todos los intentos anteriores de programar
sin saber cómo.

Un ingeniero sabe que debe tener una aproximación sistemática y que mitigue riesgos,
cuando aborda cualquier proyecto.

Cuando uno habla de riego, la mayoría de las personas piensa en que
no pase nada malo, como que el software no destruya algo, no tenga vulnerabilidades,
etc.

Pero en gestión de proyectos, riesgo también significa todo aquello que no nos
permita alcanzar los objetivos que hemos establecido para nuestro proyecto.
Siendo uno de estos riegos que gastemos mucho tiempo y dinero.

El "vibe coding" es demasiado riesgoso para considerarlo seriamente desde una
perspectiva ingenieril, salvo para prototipar, donde sí aporta valor.

A los "entrepeneurs" les encanta, pero muchos de estos personajes solo piensan
en ganar más y odian gastar parte de su dinero pagándole a los profesionales que
sí saben como hacer bien las cosas (no entiendo como pretenden ganar más dinero
si al final vamos a estar todos cesantes reemplazados por la IA y nadie va a
poder consumir sus productos).

Entonces, ¿cuál es la forma de usar esta herramienta de una manera que sea
compatible con una buena ingeniería de software?

{{<figure src="vibe-coder.png" caption="Gato programador corrigiendo el codigo creado por un vibe coder. (Foto de Volodymyr Dobrovolskyy, tomado de Unsplash)">}}

Sabemos que las IA "alucinan", y debemos mitigar ese riesgo. Hay limitaciones en la
ventana de contexto que los agentes de código pueden usar.

De las estrategias que se han propuesto yo identifico dos, que me recuerdan a
los tipos de novelistas que existen. Así que las llamaré la escuela de los Mapas
(Plotters) y la escuela de las Brújulas o (Pantsers).

En la literatura de ficción se habla que hay dos tipos de escritores.
Al primer tipo en inglés les llaman "plotters", son aquellos que planifican
toda su novela por adelantado, esbozando cada escena y punto clave de la trama
antes de escribir el manuscrito. En contraste tenemos a los "pantsers",
que improvisan, no tienen un plan, y más bien una idea
general de lo que quieren expresar. También están los "plantser",
que hacen un poco de ambas cosas.

El término "pantser" viene de la frase: people who write “by the seat of their pants”,
en inglés. Y puede ser visto como algo peyorativo, aunque hay varios autores que
se identifican orgullosamente con esta forma de escribir.

Plotters famosos y declarados son personas como J.K. Rowling, Brandon Sanderson,
John Grisham, de quien se dice que escribe la última escena de cada novela antes
de empezar.

Pantsers famosos son Stephen King, Isaac Asimov, George R.R. Martin, este último
es incapaz de terminar una saga, y aún así tiene el descaro de venderla y convertirla
en un éxito de televisión. Yo me identifico con los Pantsers tanto para escribir
como para programar.

Un plotter, es alguien que quiere tener el mapa muy claro, antes de adentrarse
en territorio desconocido. Es el que sigue el proceso de manera rigurosa.
En software sería alguien de las escuelas más estructuradas, con procesos pesados
como RUP, o si se considera ágil (no lo es en mi opinión), usará SCRUM, donde en
cada sprint irá completando etapas de un proceso muy bien pensado.

Los plotters, como dije, aman los mapas. Para usar la IA van a escribir PRDs,
o usarán frameworks donde detallarán todo lo que necesitan, y se preocuparán
de elaborar meticulosamente sus prompts.
Abrazarán técnicas como Spec-Driven Development.
Usarán herramientas como specify. Si usan Claude, definirán tools y agentes
meticulosamente.

Los pantsers, al contrario, usan la brújula más que el mapa. Tiene clara la dirección,
pero les fascina el misterio del territorio. Para usar la IA se apoyarán más en
iteraciones pequeñas, dando "pasos de cierva".
Elaborarán un prompt para resolver algo
pequeño. Algunos escribirán tests antes, otros después, para evitar errores de regresión.
No es que no tengan proceso, su proceso es más liviano.

¿Cuál aproximación es mejor? No hay modo de decidirlo. Podrías decir que los
pantsers son más prolíficos, como Stephen King o Isaac Asimov, pero tienes el
caso de R.R. Martin. Y por otro lado Sanderson es el contra ejemplo perfecto,
un plotter muy prolífico, capaz de sacar varias novelas al año.

En la programación apoyada con IA pasa lo mismo. El proceso pesado de los
plotters no pareciera ser inherentemente mejor. Pero como suele pasar en
ingeniería de software tenemos pocos estudios.

El vibe coding a la larga termina generando código inmantenible e inseguro.
Pero la aproximación pantser o plotter nos parece más segura, reduce el riesgo,
porque tiene un proceso (más pesado o más ligero), que se preocupa de reducir
el riesgo.

Personalmente me inclino más por el estilo pantser, porque prefiero los
procesos más livianos, después de todo el lean software development
una escuela de ingeniería de software tan respetada y efectiva como procesos
más tradicionales o estructurados.

No creo que tenga sentido preguntarse que proceso es mejor, tienes que decidirlo
tú. Conozco colegas que son super productivos usando un modelo plotter, escriben
las specificaciones bien detalladas (también con apoyo de la IA),
planifican, y tienen todo muy definido antes de generar código con los agentes.

Otros somos más exploradores, pero con método. Sabemos lo que queremos lograr y
en mi caso voy interactuando con la IA, considerando las limitaciones del contexto,
paso a paso. ¿Entiendes ahora la referencia a la cierva?

{{<figure src="mapa-con-brujula.png" caption="Mapa, brújula o ambos. Fotografía de Denise Jans, tomada de Unsplash">}}

No veo que un método sea más rápido o mejor que el otro. Yo creo que debes
decidir por ti mismo lo que te acomoda, lo que te da seguridad. Tampoco se trata
de que seas caótico y te pongas a dictar prompts y generar código al "tun tun".
No, debes tener un método, un proceso, que puedes ajustar y optimizar con el tiempo.

Si quieren que les cuente cómo uso la IA en mi día a día, cuál es mi proceso,
denle me gusta a este post y escribiré algo más detallado.

Y si en general te gusta el contenido de este blog, te invito a compartirlo.
Si quieres apoyarme en [Patreon](https://www.patreon.com/cw/lnds),
lo he re activado y apreciaría tu apoyo como
mecenas, estoy preparando material que será exclusivo para quienes se inscriban.
También puedes inscribirte en mi newsletter.

[^1]: se menciona Salmos 18:33 y Habacuc 3:19.
[^2]: Hay frases de esta oración que deberíamos considerar antes de discutir en redes sociales.
En mi post [Antiagil](https://lnds.net/blog/lnds/2018/07/01/anti-agil/) también cito esta
oración para hablar sobre agilidad. Fuente: <https://www.oblatos.com/oracion-de-santo-tomas-de-aquino-para-ordenar-la-propia-vida/>
