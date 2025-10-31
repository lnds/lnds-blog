---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Veintinueve Años De Linux"
authors: [admin]
subtitle: ""
summary: ""
tags: [linux, 'open source']
categories: []
date: 2020-08-25T09:17:18-04:00
lastmod: 2020-08-25T09:17:18-04:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: "Tux, la mascota de Linux"
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

Linux cumple vientinueve años hoy.

En rigor hay dos celebraciones de Linux, la del 25 de agosto que celebra el anuncio original de Linus Torvalds en el grupo de "news" comp.os.minix:

    Hello everybody out there using minix –
    I’m doing a (free) operating system (just a hobby, won’t be big and professional like gnu) for 386(486) AT clones. This has been brewing since april, and is starting to get ready. I’d like any feedback on things people like/dislike in minix, as my OS resembles it somewhat (same physical layout of the file-system (due to practical reasons) among other things).
    I’ve currently ported bash(1.08) and gcc(1.40), and things seem to work. This implies that I’ll get something practical within a few months, and I’d like to know what features most people would want. Any suggestions are welcome, but I won’t promise I’ll implement them 🙂
    Linus
    PS. Yes – it’s free of any minix code, and it has a multi-threaded fs. It is NOT portable (uses 386 task switching etc), and it probably never will support anything other than AT-harddisks, as that’s all I have :-(.

La segunda celebración es el 5 de octubre, cuando realizó la primera liberación pública del código.

De todas maneras, ¡cómo pasa el tiempo!

Recuerdo que [eran mis primero años laborales](https://lnds.net/blog/lnds/2019/03/17/el-fin-de-la-agilidad/), pero seguía asistiendo a los últimos años de universidad, y seguía relacionado con varios amigos en el DCC de la Universidad de Chile, fue alguien allí (probablemente Willy), quien me pasó una caja (¿o varias?)  de disquettes, para que instalara una distribución de Linux. Era Slackware y probablemente a fines de 1993 o inicio de 1994.

{{<figure caption="Tux con una pipa, la mascota original de Slackware" src="Slackware-mascot.jpg">}}

Lo instalé en una PC en mi casa, y no recuerdo muy bien si pude correr X-Windows en ese momento, pero estaba feliz, por que tenía [Unix](https://lnds.net/blog/lnds/2020/03/29/entusiasmo-selectivo/) en mi computadora[^1].

Hoy Linux está en casi todos lados. Si usas Android, o incluso si lees este post, el servidor en que está instalado el gesto de contenidos de este blog, está basado en Linux. Tu televisor seguramente tiene alguna versión de Linux.

Desde que empezaste a leer este post, seguro que más de cien dispositivos con Linux se activaron.

Linux no es un sistema operativo completo, es el Kernel de un sistema operativo, el núcelo que lo sostiene. Por eso que tienes sistemas operativos como Android en que el resto de las componentes fue construido por Google. En el mundo del escritorio hay diversas distribuciones, o distros, que incluyen Linux como Kernel, pero incluyen otra serie de herramientas y software desarrollado por GNU, son las distros GNU/Linux.

Pero donde alcanza mayor uso Linux, después de los dispositivos móviles, es en los servidores, y en particular hoy en día en los contenedores.

[Alpine Linux](https://www.alpinelinux.org) es una de las distros más populares hoy en día en el mundo de los contenedores. La idea original era desarrollar una distribución que ocupara muy poco espacio y recursos. Todo partió de un proyecto llamado LEAF: Linux Embedded Appliance Framework Project), con la idea de colocar una distribución de Linux que cupiera sólo un floppy (algo que habría sido muy útil en 1994).
Pero esta característica la hace muy práctica para poder usada en contenedores, donde queremos ocupar la menor cantidad de espacio posible.

Linux siempre será impresionante. Es el fruto de la colaboración. A partir de la idea de un joven fines, se ha convertido en una de las piezas esenciales que sostiene el mundo tecnológico actual.

¡Feliz cumpleaños Linux!

Les dejaré un video, que muestra cómo se construye Linux. Es de 2012, así que pueden extrapolar como algunos de los números que se mencionan deben haber cambiado:

 {{<youtube "yVpbFMhOAwE" >}}

[^1]: Técnicamente no es Unix, pero es un sistema operativo bastante cercano.

