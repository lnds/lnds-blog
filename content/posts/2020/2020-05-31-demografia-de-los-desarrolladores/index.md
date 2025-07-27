---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Diversidad en el Desarrollo de Software: ¡estamos muy mal!"
authors: [admin]
subtitle: ""
summary: ""
authors: [admin]
tags: ['desarrolladores', 'stack overflow', 'estudios', 'género', 'mujeres en tecnología', 'diversidad']
categories: ['estudios']
date: 2020-05-31T11:20:51-04:00
lastmod: 2020-05-31T11:20:51-04:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false
  placement: 3

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

El 27 de mayo el popular sitio StackOverflow publicó los resultados de su [encuesta para desarrolladores de software 2020](https://insights.stackoverflow.com/survey/2020).


[StackOverflow](https://stackoverflow.com/) es un sitio muy popular en el mundo del desarrollo de software, para quienes no lo conozcan se trata de un foro abierto de preguntas y respuestas, desarrollado en 2008,  por [Jeff Attwood](https://blog.codinghorror.com/) y [Joel Spolsky](https://www.joelonsoftware.com/), dos famosos e influyentes bloggers especialistas en TI,  

La idea original era crear un sitio de preguntas y respuestas para desarrolladores de software, que usara un mecanismo de reputación y reconocimiento para determinar la mejor respuesta. Con el tiempo el sitio se convirtió en una referencia muy usada por desarrolladores de todo el mundo, quienes acuden a este sitio para encontrar respuestas a sus problemas más habituales.

![](stack-overflow.png)

El sitio ha sido objeto de críticas, y cuestionamientos. Tal como ocurre en muchos otros sitios similares, la participación no es tan alta. Como indica [Ricardo Baeza](https://medium.com/@rbaeza_yates)[^1], con el tiempo hemos visto que el concepto de "Wisdom of the Crowd", que era tan popular en la época que nació StackOverflow, no resultó ser tan cierto.

En StackOverflow sólo el 0.46% de los usuarios ha alcanzado un nivel de reputación sobre 5000, la mayor parte de los que responden sólo responden una pregunta. Sólo el 8% contesta más de 5 preguntas. Así que la participación no es lo que esperaban sus creadores. Además hay estudios que han mostrado que los desarrolladores que usan el código obtenido en el sitio crean software más inseguro que el resto[^2].

La gente de StackOverflow es consciente de las críticas y es por esto que desde hace diez años conducen una encuesta para tratar de entender mejor a su comunidad y lograr una participación más diversa.

Esto la ha convertido en la encuesta más grande para desarrolladores del mundo. La edición de 2020 fue respondida por más de 65.000 personas.

Y aunque hay que considerar que hay un sesgo importante, de todas maneras entrega información valiosa e interesante.

Este año hicieron un esfuerzo por alcanzar una representación más diversa de desarrolaldores, y para eso promocionaron mucho menos la encuesta en sus propios canales, y la publicaron en diversos lugares. A pesar del esfuerzo, no lograron un aumnento significativo de representación como esperaban, aunque lograron algunos aumentos en la representación de latinos y afro descendientes, otras razas y etnias se mantuvieron e incluso bajaron en su representación. Lo mismo en cuanto a representación de género, tuvieron un leve aumento en la representación femennina, anque los que se identifican como no binarios, y de otros géneros se mantuvieron. Lo positivo es que en StackOverflow reconocen que tienen mucho que hacer para aumentar la inclusión en su comunidad.

Pero veamos algunos datos  encontrados por este sitio[^3]. 

Ignoraré por esta vez las preguntas más técnicas, y sólo me concentraré en aspectos demográficos y socio económicos, en un próximo post hablaré sobre los otros hallazgos.


## Raza y Etnia

El 68.3 de todos los que respondieron se identifican como blancos o descendientes de europeos. El segundo grupo serían las personas de Asia del Sur, con un 10.4% y el tercero que se identifica como hispano o latino, con el 7.6%. Estas cifras aumentan un poco al agrupar por los desarrolladores profesionales, en ese caso aumenta para blancos (70.7%), e hispanos y latinos (7.8%), y baja a un 9.6% para sud asiáticos:

{{<figure src="etnias-todos.png" caption="Representación étnica para todos los que respondieron la encuesta">}}

{{<figure src="etnias-pro.png" caption="Representación étnica para todos los desarrolladores profesionales que respondieron la encuesta">}}

## Género y orientación sexual

La pregunta sobre género fue respondida por 50,557. Y el 91.5% se identifica como hombre, con una representación de 8.0% que se identifica como mujeres:

{{<figure src="genero.png" caption="Identificación de género sobre 50,557 respuestas">}}

Por otro lado, el 1.0% se identifico como persona trans género (sobre una base de 49.345 personas que respondieron esa pregunta específica).

Con respecto a la orientación sexual el 92.1% se identificón como hetero sexual, y el 5.7% como bisexual, sobre un base de 43,992 respuesta:

{{<figure src="orientacion.png" caption="Identificación de género sobre 49,992 respuestas">}}

## Género y Roles más experiencia

El siguiente gráfico muestra la participació por género en distintas especialidades:


{{<svg src="devtype_ratio-1.svg" caption="La linea punteada muestra la razón promedio entre la participación de hombres vs mujeres">}}

En el eje vertical vemos la proporción hombres / mujeres según especialidad, y en el eje horizontal la cantidad de desarrolladores, que contestaron la encuesta.

Pueden apreciar que la proporción en Especialistas DevOps es de casi 30 a 1.

La proporción promedio es de 15 a 1. Que corresponde a un 6.6% de representación femenina.

Por otro lado, podemos inferir que el sector en que la proporción de hombres a mujeres es más baja (y por ende hay más participación femenina), se da en el sector de Data Science y Machine Learning, con valores menores a 10 a 1 (es decir, más de un 10% de representación femenina). Pero la cantidad es menor (menos de 500 mujeres que respondieron la encuesta).

La mayor representación femenina se daría entre los desarrolladores front end, backend y full stack, si bien la proporción es peor que en el área de Data Science, al estar cerca de 15 a 1, la cantidad de personas es mayor.

Y si esta proporción es preocupante, porque muestra una baja particpiación que no hemos logrado revertir, hay otro hallazgo que es más preocupante aún.

{{<figure caption="Años de expeiencia de las mujeres en el área" src="experiencia.png">}}

Estos hallazgos son consistentes con otros estudios que muestran que las mujeres abandonan el área de tecnología a los 14 años en promedio.

Es claro que tenemos mucho que hacer aún. 

El desarrollo de software sigue siendo un entorno hostil para otros géneros distinto al masculino. Es un entorno blanco, hetero normado, y muy poco tolerante
a la diversidad. Y eso es algo grave.

La tecnología afecta la vida de todos y todas, por lo tanto requiere más representatividad étnica y de género y es un deber mejorar esto[^4].

Los invito a discutir estos hallazgos y compartir ideas sobre qué hacer.

El análisis de la encuesta la pueden encontrar en este enlace: https://insights.stackoverflow.com/survey/2020#overview



[^1]: Ricardo Baeza, Diego Saze: "Wisdom of the Crowd or Wisdom of a Few?" disponible en https://www.researchgate.net/publication/299867310_Wisdom_of_the_Crowd_or_Wisdom_of_a_Few

[^2]: Muchas de estas observaciones son recogidas en este artículo de Wikipedia: https://en.wikipedia.org/wiki/Stack_Overflow.

[^3]: Datos y hallazgos extraidos de https://insights.stackoverflow.com/survey/2020#overview

[^4]: Marte necesita mujeres: https://lnds.net/blog/lnds/2013/09/08/marte-necesita-mujeres/