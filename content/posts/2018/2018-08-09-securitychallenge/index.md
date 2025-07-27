---
title: "#SecurityChallenge"
authors: [admin]
date: 2018-08-09T08:25:11-03:00
slug: "securitychallenge"
aliases: [/blog/lnds/2018/8/9/securitychallenge]
draft: false
tags: ['seguridad', 'villano invitado']
image:
  placement: 3
---

En el siguiente artículo, escrito por mi amigo Cristián Rojas, experto
en ciberseguridad, nos invita a cambiar y hacernos responsables de la
seguridad, en lo que él llama un \#SecurityChallenge, los invito a
leerlo, compartirlo y seguir sus consejos:

**\#SecurityChallenge**
=======================

**Autor: Cristián Rojas, MSc., ISO27K1 LI, CSSLP**


Agradezco una vez más la invitación a escribir un artículo para
[LNDS](https://www.lnds.net/).


Hace unas semanas nos reunimos Eduardo y yo, a conversar respecto del
poco interés que generaba la ciberseguridad en la comunidad TI y en la
prensa. No pasaron ni dos días
cuando comenzaron a ocurrir una serie de sucesos: Los
incidentes del Banco de Chile y la
filtración de números de tarjetas de crédito,
los que sumados a otros eventos de
ciberseguridad como los de EQUIFAX USA y WannaCry
han generado temor. Temor el cual ha
despertado el interés de
la comunidad y de la sociedad en el
tema.

Estos últimos meses para mí han sido meses de reflexión en torno a cómo
hemos manejado la ciberseguridad. He observado
incidentes, vulnerabilidades, [divulgaciones mal hechas](/blog/lnds/2012/11/20/disclosure-no-es-llegar-y-hacerlo),
el reciente interés de grupos
de Whatsapp/Telegram/[Signal](https://signal.org/) en
el tema de ciberseguridad (cuando antes era un tema que no les importaba
mayormente), pero también he sido testigo de falsos
profetas. Con el
reciente interés en ciberseguridad, han surgido voces que, en
un afán, no necesariamente malicioso, sino que mal dirigido, han dado a
la población información imprecisa y con un toque de sensacionalismo.

![](https://d2dspjyoh5c79p.cloudfront.net/e31f08d6-9c3d-11e8-a030-2b5831f8ecb5-aa9f18b7)

Un caso interesante es el del Senador Felipe Harboe, quien en reacción
al reciente incidente de la
filtración masiva de números de tarjetas de crédito,
recomienda cambiar la clave. ¿Qué
clave? ¿La de la plataforma web del banco? Ese
cambio no sirve de nada para paliar
la situación. ¿El PinPass? Eso es sólo para
compras presenciales en Chile. Al
exponer el PAN, el CVV[^1] y la fecha de
expiración de la tarjeta, ya no
queda nada que hacer,
excepto solicitar el bloqueo de la
tarjeta, 
[como indica Eduardo en su post](/blog/lnds/2018/07/29/fraude-con-tarjetas-de-credito).
¿Dónde quedó el conversar o
asesorarsepor expertos antes de dar
información incorrecta, sobre todo cuando se es
autoridad?

> Todos los expertos con los que yo he conversado a esto le han
> bajado completamente el perfil (\...) por ejemplo, el sitio en el que
> millones de chilenos han puesto
> sus datos en los últimos dos meses, que es el
> sitio [micompensacion.cl](micompensacion.cl),
> ha sido hackeado varias veces.
>
> Patricia Politzer, Mesa Central, Canal 13, 29 de julio de 2018.

Para peor, nadie habla de cómo defenderse o de crear una cultura de
seguridad, sino que sólo hablan de ataques, de vulnerabilidades y de lo
escandalosa que resulta ser nuestra
falta de seguridad, como lo hizo Politzer y [como lo hizo Pedro
Huichalaf](https://huichalaf.cl/identidad-digital-ciberseguridad-y-las-7-lucas-del-confort/),
ambos refiriéndose al caso del sitio
de las _7 lucas del confort_. 

En el caso delex-subsecretario de
Telecomunicaciones, él incluso menciona 2 datos
que llaman poderosamente la
atención. Primero, indica que el sistema no valida contra
*spoofing* bancario: Es decir, que
venga una persona y se apropie de
las 7 lucas de otra poniendo el RUT
de la víctima asociado con su cuenta
bancaria.]

Efectivamente el sistema no hace eso. Son los bancos quienes hacen esa
verificación. Cualquiera que se haya equivocado al realizar una
transferencia a través de la
página web de su banco sabe este
dato. Segundo, el ex-subsecretario también habla
de
*intervención*, o sea que la página fue modificada
maliciosamente. Lo cierto es que, efectivamente hubo una caída de la
página el día anterior a su lanzamiento, pero
el sitio no había sido abierto al
público (es decir, no aceptaba ingresos de datos
aún), y se tomaron las medidas para
evitar nuevas caídas del servicio. ¿Cómo sé yo
eso?

¿Yo, que no soy un académico destacado, un periodista famoso, o alguno
de los expertos a los que menciona Politzer? Porque la empresa que
desarrolló el sistema para el SERNAC
me solicitó asesorarlos en el reforzamiento de su seguridad. Los
ayudé
a aplicar varios controles: Doble factor de autentificación, controles
de acceso, respaldos, cifrado de información, y durante tal consultoría
me enteré de lo que sé.

¿Quiero decir con eso que el sitio de las 7 lucas del confort es
infalible? En absoluto. De hecho, la seguridad 100% es imposible, tanto
en el mundo físico como el
virtual. Sin embargo, el apuntar con
el dedo sin tener evidencia ni conocimiento, o
buscando causar sensación, me parece
al menos irresponsable. No se equivoquen: Yo me
considero capitalista (de hecho el
mismo Eduardo a veces me echa la broma de que
soy *austrolibertario*,
pero el lucro es moral mientras sea para ambas
partes, no cuando se busca el
sensacionalismo a costa de quienes diseñan, implementan
y administran sistemas TI.

Y en este punto me quiero detener un segundo: Yo no estoy libre de
pecado. Muchas veces he hecho lo mismo que se hace hoy en día: Lanzar
la primera piedra y gritar a los 4 vientos "¡¡¡ÉSE SISTEMA ES
INSEGURO!!!", pero este año, con varios casos de los que me
he enterado, he recibido una dosis de humildad. Me he dado cuenta que
muchos de estos sistemas son administrados por profesionales que, si
bien no tienen el
conocimiento, tampoco tienen malicia
en su actuar.

Otra cosa de la que he sido testigo es que muchas voces llaman al
gobierno [a hacer algo. Piden más regulación, más regulación y más
regulación. Y, por una ]{style="letter-spacing: 0.01rem;"}[parte, no se
equivocan. Tenemos leyes prácticamente antediluvianas, como
la Ley 19.223 de Delito Informático,
que tiene apenas 4 artículos muy generales,
y que fue creada antes de Internet.
Sin embargo, nadie piensa en qué podemos
hacer nosotros. Sí, nosotros:
Personas, empresas, colegios, universidades,
ONG\'s, etc., para verdaderamente
adoptar **una cultura de seguridad**: El
finalmente darnos cuenta de que el
uso de Tecnologías de la Información no crea
solamente beneficios, sino que
también conlleva riesgos. Así que voy a cerrar mi
post, ya no llamando a ser mejores,
sino que yo también siendo mejor. Y
para eso, aquí van algunos tips para
comenzar el camino hacia una cultura
de seguridad, o mejor dicho, [ya que está tan de
moda](http://www.ahoranoticias.cl/noticias/tendencias/232289-video-carabineros-alerta-sobre-infraccion-a-la-ley-de-transito-al-realizar-el-kiki-challenge.html),
propongo un ***Security Challenge***:

1.  Las TI son como el cuento de Blanca Nieves: Si bien traen cosas muy
    bellas consigo, también hay una [bruja mala]{.underline} detrás.
    Cuidado. Y piensa en la seguridad desde el principio. Cuando lo
    haces a mitad de proyecto o ya finalizado éste, ya no es tan
    efectiva.

2.  Si estás trabajando en tu computador, y te alejas de él, aunque sea
    para ir al baño, tomar un café, ir a reunión con tu jefe, ir a
    almorzar, para lo que sea, bloquea tu pantalla.

3.  Usa doble factor de autentificación: Si por cualquier motivo te
    roban la password, aún tendrán una barrera por pasar para llegar a
    tu información: Algo que tienes. En este caso tu celular (con una
    app como Google Authenticator, FreeOTP o Authy) o una llave digital.

4.  Y respecto de la password, nunca uses la misma password en 2
    sistemas distintos. ¿Son muchas las passwords que debes recordar?
    Los gestores de passwords (KeePass, LastPass, etc.) te pueden
    ayudar.

5.  Encripta tu información. Tu disco duro no está encriptado por
    defecto. Usa BitLocker o FileVault.

6.  Y relacionado con el punto anterior, respalda tu información
    periódicamente. No creas que ese disco duro externo que usas es
    seguro por defecto. Encríptalo también.

7.  Si eres desarrollador, ten muy claro que la seguridad de tu
    aplicación pasa por tí, no por un CISO ni un encargado de seguridad.
    Instrúyete. No lo dudes: Tu aplicación tendrá vulnerabilidades.
    Aprende a mitigarlas, de la misma forma en que aprendes a mitigar
    los errores que ésta tenga. Recuerda las palabras del creador del
    mejor algoritmo de almacenamiento de passwords para Ruby[^2]: *"Es
    tu responsabilidad como desarrollador el hacer segura tu
    aplicación. Culpar a los usuarios por no ser expertos en seguridad
    no es una respuesta profesional ante riesgos."*

8.  Bloquea tu teléfono. Tiene mucha información muy importante, tanto
    personal como de tu empresa. Y por favor, no uses el patrón de
    desbloqueo en Android. Es lo mismo que no tener
    seguridad.

9.  No dejes documentos importantes encima de tu escritorio. Guárdalos
    bajo llave. Y cuando mandes a
    imprimir algo a la impresora corporativa, anda de
    inmediato a buscar tus
    documentos.

10. Si ese mail te da mala espina, no hagas clic en sus links. Así de
    simple.

11. [Un gran poder conlleva una gran responsabilidad](https://medium.com/mejorindustriati/dos-s%C3%ADntomas-de-c%C3%B3mo-no-tomamos-en-serio-la-seguridad-af06586b8e07).
    Si diseñas, implementas u
    operas sistemas de información,
    ten en cuenta que es información de personas la que
    tienes en tu poder.
    Protégela.

12. Pausa. Resiste la tentación de apurar ese mail, ese tweet, ese post
    en Facebook. Fíjate bien quién
    lo verá. Y cuando estés seguro, ahí recién presiona
    *send*.

[^1]: El PAN (Personal Account Number) es el número de 16 dígitos en el
anverso de [la tarjeta. El CVV (Card Verification Value) es el código de
seguridad ubicado ]{style="letter-spacing: 0.01rem;"}[en el reverso de
ésta.]{style="letter-spacing: 0.01rem;"}

[^2]: [https://github.com/codahale/bcrypt-ruby](https://github.com/codahale/bcrypt-ruby%3E)
