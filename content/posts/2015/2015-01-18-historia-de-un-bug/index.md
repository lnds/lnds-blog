---
title: "Historia de un Bug"
authors: [admin]
date: 2015-01-18T08:25:11-03:00
slug: "historia-de-un-bug"
draft: false
aliases: [/blog/lnds/2015/1/18/historia-de-un-bug]    
tags: ['bugs', 'programación', 'humor']
image:
  placement: 3
---

El siguiente texto es una traducción de [este apunte en
Reddit](https://www.reddit.com/r/ProgrammerHumor/comments/2spd2s/when_someone_gives_you_a_bug_long/) publicado
por el usuario [RobotJoe](https://www.reddit.com/user/RobotJoe):

> Alguien te asigna un bug. \"La luz de la sala de conferencias en el
> piso veintiséis está encendida. Se requiere que esté apagada\".

> Una nota en el bug dice, \"esto debería tomar unos cinco minutos. Es
> tan sólo mover un interruptor.\"\
> \
> Vas a la sala de conferencias del piso veintiséis. La luz está
> encendida, pero no hay un interruptor para luz en la sala.\
> \
> Así que te preparas para instalar uno. Pero el diseñador dice que
> podrías arruinar la estética de la sala. Además las paredes son de
> concreto. Con las herramientas adecuadas podrías instalar el
> interruptor, pero nadie aprobará la compra de las herramientas
> adecuadas. Sin las herramientas adecuadas el trabajo tomaría unos dos
> días. Ellos quieren que se haga esto ahora, porque tienen miedo que en
> cualquier minuto el CEO decida ir al piso veintiséis y se le ocurra
> entrar a la sala de conferencias y pregunte por qué diablos la luz
> está encendida.\
> \
> Y ahora estás recibiendo emails preguntando por qué la luz no ha sido
> apagada aún.\
> \
> Así que debes detenerte y enviar un email grupal para explicar la
> situación, y en varias personas cunde el pánico y empiezan una cadena
> de emails.\
> \
> Sabes que si esperas que el problema sea corregido por alguno de los
> que está discutiendo en la cadena de correos este no será resuelto. El
> bug tiene tu nombre, y tiene fecha de hoy, así que estás en un
> problema si no lo resuelves. Así que te subes al entretecho del piso
> veintiséis, encuentras los cables de luz, los cortas y los aíslas. Al
> fin, problema resuelto.\
> \
> Con el fin de calmar el pánico en la discusión por email, reportas que
> has resuelto la incidencia.\
> \
> No escuchas nada más por un tiempo.\
> \
> Entonces todos expresan su preocupación de que ahora la luz no puede
> ser ni encendida ni apagada. ¿Qué pasa si el CEO quiere tener una
> reunión allá? Así que esto es lo que te piden que hagas: quieren tirar
> unos cables desde las luces hasta el sótano del edificio. Cuando
> alguien necesite que las luces se enciendan o apaguen te contactarán,
> y tu tendrás que correr al sótano a conectar o desconectar los
> cables.\
> \
> Protestas por lo ridícula de la solución. Tu jefe dice, \"Sí, lo sé no
> es el ideal. Pero es la única solución que tenemos ahora.\"\
> \
> En este punto te das cuenta que tienes una elección. Podrías hacer lo
> que te piden o renunciar en protesta y encontrar otro trabajo. Pero te
> das cuenta que una vez que empieces un nuevo trabajo puede que te
> pidan hacer algo tan idiota o quizás peor.\
> \
> Así que tiras los cables desde el piso veintiséis al sótano. Cuando
> llegas al sótano ves docenas de cables colgando de las paredes, de
> toda la gente que ha tenido que hacer lo mismo antes. (Así que de ahí
> viene la idea). Colocas los cables y los etiquetas lo mejor que
> puedes, con una breve apología para quien quiera que le toque lidiar
> con esto después.\
> \
> Cuando vuelves a tu escritorio te encuentras con un mensaje. QA ha
> reabierto el bug. Dice, \"Veo luz\".\
> \
> Vas a la sala de conferencias en el piso veintiséis. La luz está
> apagada. Vuelves a tu escritorio y cierras el bug, reportando que lo
> verificaste en persona.\
> \
> QA reabre el bug de nuevo. \"La sala aún está iluminada\", dice.
> Después de revisar la ampolleta apagada una vez más, se lo cuentas a
> tu jefe, quien sugiere que bajes al sótano y revises los cables.
> Protestas diciendo que estás viendo la luz y está apagado. \"Lo sé,
> pero es la manera que tienes de decirle a QA que revisaste todo\".\
> \
> Así que suspiras y te diriges al sótano. Te aseguras que los cables no
> están conectados. Las puntas están aisladas. Y no tocan nada que pueda
> conducir electricidad.\
> \
> Reportas a QA que has revisado los cables, que no están conectados y
> que revisaste la ampolleta, la que estaba apagada.\
> \
> \"No quise decir la ampolleta\", responde QA. \"El bug es sobre luz en
> la sala. Todavía hay demasiada luz. ¿No podrías cerrar la
> persianas?\"\
> \
> Respondes que las persianas no están bajo tu control, y que el bug
> especifica que la luz se apagó.\
> \
> Sin creerte, QA envía un mail grupal preguntando si las persianas
> están cubiertas por el bug.\
> \
> Pasa un tiempo antes que sepas algo. Finalmente alguien de la cadena
> de mail te llama.\
> \
> \"En teoría\", pregunta, \"¿podría alguien participando en una reunión
> en la sala de conferencias del piso veintiséis abrir o cerrar las
> persianas por si mismo si es que hubiera mucho brillo o demasiada
> oscuridad?\"\
> \
> Sí, podrías, respondes.\
> \
> \"¿Cómo, una persona ordinaria? ¿No te necesitarían para hacerlo?\"\
> \
> Sí, una persona ordinaria. No, ellos no te necesitarían. Cualquiera
> puede hacerlo.\
> \"Bien. Excelente. Entonces dejaremos eso por ahora. Programaré una
> breve reunión* *sobre el asunto de las persianas.\"\
> \
> Así que el bug se cierra. Ahora. el CEO, habiendo detectado algo
> sospechoso con toda la discusión y tanta actividad furtiva alrededor
> de la sala de conferencias del veintiséis, quiere tener una reunión
> allí. Recibes varios emails llenos de pánico solicitando que enciendas
> la luz.\
> \
> Bajas el sótano, conectas los cables, y vuelves a tu escritorio, para
> encontrar treinta y dos nuevos mensajes en tu bandeja de entrada.
> \"Algo está mal, la luz está apagada\", \"hay un problema, no hay
> luz\", \"Estás recibiendo estos emails?\" y así.\
> \
> El email treinta y dos dice: \"No importa, la luz está encendida\".\
> \
> Este proceso se repite más o menos igual cuando es momento de apagar
> la luz.\
> \
> Pero si hay una buena noticia es esta: después de la reunión, todos se
> olvidan de que hay una sala de conferencias en el piso veintiséis, así
> que nunca más tendrás que hacer nada sobre ella otra vez.
