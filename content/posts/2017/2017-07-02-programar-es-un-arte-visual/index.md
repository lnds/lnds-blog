---
title: "Programar es un Arte Visual"
authors: [admin]
date: 2017-07-02T08:25:11-03:00
slug: "programar-es-un-arte-visual"
aliases: [/blog/lnds/2017/7/2/programar-es-un-arte-visual]
draft: false
tags: ['programación', 'visualizaciones', 'código']
image:
  placement: 3
---


El video de más abajo, junto con la hermosa imagen fractal, que
acompañan este post, son visualizaciones del código fuente de un sistema
en los que mi equipo ha trabajado desde 2015. Corresponde a la  suma de
seis repositorios, que corresponden a seis micro servicios, que
interactúan entre si para dar forma a un sistema mayor.

{{<vimeo 223893340>}}
Visualización de código generado por mi equipo

Las visualizaciones las obtuve usando el utilitario
[Gource](http://gource.io/), a partir del repositorio Git que usamos en la empresa. 

Una visualización más detallada con los nombres de los usuarios la
pueden ver acá: <https://vimeo.com/223929447>.

Si quieres hacer lo mismo con el código escrito por ti o por tu equipo,
puedes descargar e instalar este utilitario. Usarlo es bastante
sencillo. Te invito a hacerlo, e incluso a compartir tus visualizaciones
en los comentarios. 

En mi caso ejecuté la siguiente secuencia de comandos en mi Mac para
combinar los 6 repositorios:

    $ git clone ... repo1
    ....
    $ git clone ... repo6

    $ gource --output-custom-log log1.txt repo1
    $ gource --output-custom-log log2.txt repo2
    ...
    $ gource  --hide filenames,dirnames,progress,users combined.txt --seconds-per-day 0.1
     --auto-skip-seconds 1 -1280x720 -o - | ffmpeg -y -r 60 -f image2pipe 
    -vcodec ppm -i - -vcodec libx264 -preset ultrafast -pix_fmt yuv420p -crf 1 
    -threads 0 -bf 0 gource.mp4

Notar que usa también el utilitario **ffmpeg**.

Para agregar la música (The Holy Drinker, de Steven Wilson), usé iMovie.

La opción gource --output-custom-log genera un archivo con cuatro
campos por registro o linea, con la siguiente forma:

    1431611496|jorellana|A|/application.properties

El primer campo es la fecha en formato Unix, el segundo campo es el
nombre del usuario, luego viene una letra que indica la acción: A, M o
D, por Agregar, Modificar o Borrar (Delete). El cuarto campo es el
archivo (el path completo).

Hay un quinto campo  opcional, que corresponde al color expresado en
formato RGB hexadecimal. Gource no genera este campo, así que genera el
color de manera automática durante la generación del video.

Para crear una visualización en que los colores de los archivos reflejen
a su creador, agregué el código de color. Para esto usé este pequeño
script en perl:

```perl
    use Digest::MD5 qw(md5 md5_hex md5_base64);
    while (<>) {
            chomp();
            my ($a,$b,$c,$d) = split(/\|/, $_);
            $e = substr(md5_hex($b), 0, 6);;
            print("$a|$b|$c|$d|$e\n");
    }
```


Cómo verán agregué un código de color basado en el hash MD5 del nombre
del usuario (tomando los primeros 6 caracteres), con esto el archivo
queda así:

    1431611496|jorellana|A|/application.properties|e1bb5f

El resultado lo puedes ver acá:
[https://vimeo.com/223929447](https://vimeo.com/223929447)

Cómo pueden ver se puede personalizar la visualización para lograr
efectos interesantes.

## ¿Y para qué sirve todo esto?

Mostrar este video al equipo puede ser una experiencia muy motivante.

Pero además la exploración del código mediante esta herramienta te
permite obtener algo de información sober la estructura del código y el
proceso de construcción. Por ejemplo, puedes ver cual es la contribución
de cada miembro del  equipo, obtener una idea de cómo se organiza el
código, cuanto desorden hay en la estructura, etc.

El video de arriba omite varios detalles, puesto que el objetivo es más
bien artístico.  

Abajo hay otra visualización más típica, en este caso se trata del
código de 9 desafíos en 9 lenguajes (<https://github.com/lnds/9d9l>). En
este caso dejé visible todos los parámetros de visualización disponibles
(salvo la fecha):

{{<vimeo 223922723>}}

Visualización de https://github.com/lnds/9d9l

Pueden notar información más útil para un arquitecto o un desarrollador
de software, este video entrega intuiciones de cómo se organiza el
código, quién aporta qué al proyecto,
etc.

Gource tiene un modo interactivo, donde puedes avanzar o retroceder,
colocar el mouse sobre cada punto o rama, con lo que puedes ver de qué
se trata. Esto te permite discutir o razonar sobre la estructura física
que va tomando el código en tu proyecto. Las limitaciones de esta
herramienta están dadas por la capacidad de abrir diálogos entre los
miembros del grupo.

Hay otras formas de visualizar el código, obtener métricas, indicadores
de calidad y complejidad. Por ejemplo, con herramientas como
[SonarQube](https://www.sonarqube.org/) o
[Codacy](https://www.codacy.com/), pero hablaremos de esas herramientas
en un próximo artículo.

Por ahora los dejo con estos videos, y los invito a compartir sus
visualizaciones en los comentarios.
