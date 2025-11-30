+++
date = '2025-11-30T11:00:00-03:00'
draft = false 
title = 'La entrevista técnica en la era IA'
slug = 'entrevista-tecnica-era-ia'
tags = ['IA', 'contratación', 'entrevistas', 'ingeniería de software']
+++

Los Enanitos Verdes tienen una canción que dice "sumar tiempo no es sumar amor", lo mismo aplica a la experiencia laboral. Llevar muchos años trabajando no te hace "senior".

Lo que te convierte en un desarrollador senior es ganar experiencias relevantes, que te han hecho crecer como profesional. Conozco muchas personas que han juntado tiempo, pero no experiencia.

Es por eso que una entrevista laboral no debe consistir solo en revisar el currículum y hacer preguntas. Hay que ver si un ["malabarista sabe hacer malabares"](/blog/lnds/2010/12/26/como-contratar-malabaristas/), como escribí en 2010.

En aquel artículo cité a DeMarco y Lister autores de "Peopleware"": "no contratarías a un malabarista sin verlo hacer malabares, pero contratamos ingenieros sin verlos programar".

En aquella época observaba que era costumbre en la industria nacional no hacer muchas pruebas técnicas, confiando más en lo que decía el currículum y las referencias. Algunas preguntas técnicas había, algo en la pizarra, pero no muy sofisticado.

Sin embargo observábamos que los procesos en otros lados, principalmente USA, eran largos complejos, con verdaderas maratones de entrevistas y pruebas, incluyendo desafíos de ingenio. Apareció como modelo Google.

{{<figure src="interview.jpg" caption="Entrevista. (Foto de Charlesdeluvio, tomado de Unsplash)">}}

Yo llevaba haciendo pruebas técnicas, desde el 2000 al menos, pero eran más un conjunto de preguntas tipo examen universitario. De repente, nos pusimos más sofisticados. Algunos derivaron en el estilo LeetCode, con complicadas preguntas sobre como invertir árboles binarios, o implementar un algoritmo de programación dinámica.

Otros, como yo y los equipos en que trabajé, preferimos el desafío técnico más cercano a la realidad de nuestro trabajo: construye una aplicación con tales y tales características, algo que podía tomar varias horas, el resultado normalmente se entregaba con un pull request. Y después una entrevista con pizarra sobre diseño o arquitectura.

## Mi vuelta a las trincheras

Luego, durante la pandemia decidí dejar de ser un manager, volver a ser un humilde ingeniero de software, volver a mis raíces y hacer lo que más me gusta. No me costó encontrar oportunidades, pero empecé a foguearme con las pruebas técnicas al estilo norteamericano.

Resolví montones de pruebas en Exercism y LeetCode. Pasé pruebas dignas de un buen hacker, recuerdo que una vez estaba frente a un experimentado sysadmin, que partió la entrevista pidiéndome mi llave pública para permitirme entrar por ssh a un servidor. Aquella máquina estaba a tope, las cpu hervían, mi misión era averiguar por qué y arreglarlo.

Postulé a un par de empresas gringas, pero finalmente me fui al unicornio que la llevaba en ese tiempo, Cornershop, donde me contrataron más por mi experiencia y por que me conocían, que por superar maratones técnicas.

Hasta que vino la nivelación cuando fuimos adquiridos por Uber. Todos debíamos pasar las pruebas técnicas de esa empresa, que tienen fama de ser de las más difíciles de la industria y lo confirmo, lo son. Y muy pocos quedaron conforme con esos resultados. Yo me sentí decepcionado, y ahí te viene toda la duda sobre estos procesos.

Porque las entrevistas técnicas **son injustas**.

## El proceso de entrevista es injusto

Lo voy a repetir: **el proceso de entrevista es inherentemente injusto**.

Un amigo lo expresó bien: "no hay forma de conocer a alguien en una, dos o diez entrevistas. Solo el tiempo dirá si fue un acierto o un error. Puedes optimizar el proceso, reducir el ruido, establecer criterios, pero al final sigues apostando".

Esto hay que aceptarlo, y hacerlo es el primer paso para mejorar.

En 2010 decía que prefería a los buenos comunicadores sobre los genios ensimismados, que me cargaba el código copypasteado de Google. Eso es verdad, pero ese era *mi* sesgo. Hoy ya no pienso en eso, y me fijo en otras cosas.
Algo importante es incorporar a más personas al proceso de entrevista, porque probablemente seguro van a tener una visión distinta del candidato. Pero es crucial que los equipos de contratación establezcan bases comunes. Los sesgos individuales no desaparecen, pero al menos puedes hacerlos explícitos y contrapesarlos.

### El síndrome de la entrevista tipo trivia

Un colega me contó el caso de un conocido, un desarrollador senior con cerca de treinta años de experiencia. Participó en un proceso de selección para una empresa y le tocó una entrevista técnica conducida por un entrevistador relativamente joven, y le fue mal.

¿La razón? El entrevistador esperaba que se supiera de memoria los nombres exactos de productos de Google Cloud, AWS, y demás. No evaluaba conocimiento real ni capacidad de resolver problemas. Evaluaba trivia.

Esto es un problema endémico. Confundimos saber con conocer. Confundimos memoria con competencia. Y ahora, con la IA, esta confusión se vuelve aún más absurda.

## FizzBuzz en 2025

En aquel post de 2010 defendía el test FizzBuzz como filtro básico. La lógica era simple: si alguien no puede escribir un loop con un par de ifs, no debería trabajar como ingeniero informático. En mi experiencia, el 40% de los candidatos fallaba este test.

Hoy, cualquiera con acceso a ChatGPT, Claude o Copilot puede resolver FizzBuzz en segundos. El filtro dejó de funcionar como lo conocíamos.

Pero aquí viene lo interesante: **no es que FizzBuzz sea irrelevante, es que lo que medía ya no importa de la misma manera**.

En la era del vibe coding, cualquiera puede generar código. La pregunta ya no es "¿puedes escribir un loop?" sino "¿puedes distinguir cuando el código que generaste está mal? ¿Puedes mantenerlo? ¿Puedes explicar por qué hace lo que hace?"

## Nuevas competencias, nuevos procesos de entrevista

En posts recientes he hablado de [plotters vs pantsers](/blog/lnds/2025/10/31/mapas-o-brujulas/), de cómo la [programación agéntica eficienta el estilo plotter](/blog/lnds/2025/11/20/programacion-agentica-es-plotter/), de cómo estamos viviendo [el fin del software artesanal](/blog/lnds/2025/08/27/el-fin-del-software-artesanal/).

Si el código se puede generar automáticamente, ¿qué distingue a un buen ingeniero de software de alguien que solo sabe escribir prompts?

Acá hay algunas ideas:

1. **Juicio crítico**: Sabe cuándo el código generado está mal, es inseguro, o inmantenible.
2. **Arquitectura**: Entiende cómo las piezas encajan en un sistema mayor.
3. **Comunicación**: Explica problemas técnicos a stakeholders no técnicos, y traduce requerimientos vagos en especificaciones claras.
4. **Debugging**: Cuando la IA falla (y lo hace), alguien tiene que encontrar el problema.
5. **Proceso**: Sabe cuándo usar la IA y cuándo no. Cuándo ser plotter y cuándo ser pantser.

Todos estos puntos componen lo que yo denomino **entendimiento**. Si no entiendes no puedes resolver, y debemos medir el entendimiento, la observación de loss puntos anteriores te permiten medirlo.

El proceso de entrevista hoy, se ve muy diferente al de 2010.

**Lo que ya no sirve tanto:**

- **Tests de código en pizarra o papel**: Sin herramientas, estás evaluando memoria, no competencia.
- **Preguntas de trivia técnica**: ¿El nombre exacto del servicio de AWS para esto? Google existe, y la IA también.
- **Algoritmos de libro de texto**: A menos que el puesto específicamente requiera optimización algorítmica, invertir una lista enlazada no dice nada sobre la capacidad de entregar software.

**Lo que importa ahora:**

- **Revisión de código**: Muéstrale código con bugs sutiles, problemas de seguridad, o malas prácticas. ¿Los detecta? ¿Puede explicar por qué son problemas?
- **Diseño de sistemas**: Dado un problema ambiguo, ¿cómo lo aborda? ¿Hace preguntas? ¿Considera trade-offs?
- **Debugging en vivo**: Dale un sistema que falla de una manera no obvia. ¿Cómo lo diagnostica? ¿Usa herramientas? ¿Tiene método?
- **Pair programming real**: Trabaja con el candidato en un problema pequeño pero real. No evalúes si "sabe" la respuesta, evalúa cómo piensa, cómo colabora, cómo maneja la incertidumbre.
- **Referencias**: Hablar con empleadores y colegas pasados. Suena antiguo, pero sigue siendo una de las señales más confiables.

**¿Debería el candidato usar IA?**

Mi respuesta: **sí, si es así como trabajará**.

Si en tu empresa los desarrolladores usan Copilot o Claude Code a diario, tiene sentido evaluar cómo el candidato trabaja *con* esas herramientas. ¿Acepta ciegamente lo que genera? ¿Revisa críticamente? ¿Sabe cuándo la IA está alucinando?

Prohibir la IA en la entrevista y después esperar que la use en el trabajo es absurdo.

Volviendo al caso del senior rechazado por no saberse los nombres de productos cloud: este es el sesgo del experto al revés. El entrevistador joven probablemente vive inmerso en ese ecosistema y le parece obvio que "todo el mundo" debería saber estos nombres.

Pero el conocimiento profundo es transferible. Alguien que entiende sistemas distribuidos puede aprender los nombres de los servicios de AWS en una semana. Alguien que solo sabe los nombres pero no entiende los conceptos subyacentes, no puede hacer el camino inverso.

Las entrevistas deberían evaluar conocimiento profundo, no superficie.

## Admitir la incertidumbre

Al final, todo proceso de selección es un ejercicio de reducción de incertidumbre. No la eliminas, la reduces.

Puedes tener el proceso más elaborado del mundo y aún así equivocarte. El candidato estrella puede ser un desastre en el equipo real. El candidato nervioso que apenas pasó puede convertirse en tu mejor ingeniero.

Lo honesto es admitirlo. Establecer un proceso razonable, hacerlo consistente, documentar los sesgos, y aceptar que vas a cometer errores.

La diferencia entre un buen proceso y uno malo no es la tasa de aciertos. Es la velocidad con la que detectas y corriges los errores.

## Lo que mantengo de 2010

Algunas cosas no han cambiado:

- Sigo creyendo que los ingenieros informáticos deberían saber programar, aunque ahora eso incluya saber programar *con* IA.
- Sigo prefiriendo buenos comunicadores sobre genios antisociales.
- Sigo pensando que el currículum miente y que hay que ver a la gente en acción.

Pero ya no creo que FizzBuzz sea el filtro mágico que creía y soy más consciente de mis sesgos. El mundo cambió, y nuestros métodos de evaluación deben cambiar con él.

---

*¿Cómo manejan ustedes las entrevistas técnicas en sus empresas? ¿Han adaptado el proceso a la era de la IA? Me interesa escuchar experiencias, tanto de entrevistadores como de entrevistados.*

*Si este tema te interesa, suscríbete a mi [Patreon](https://www.patreon.com/cw/lnds) tu apoyo es importante,  podrás acceder a contenido extra que estoy preparando, y participar en la selección de temas a elaborar en este blog.*
