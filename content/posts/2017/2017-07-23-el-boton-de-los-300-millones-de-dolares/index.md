---
title: "El botón de los 300 millones de dólares"
authors: [admin]
subtitle: "o porqué la UX importa"
date: 2017-07-23T08:25:11-03:00
slug: "el-boton-de-los-300-millones-de-dolares"
aliases: [/blog/lnds/2017/7/23/el-boton-de-los-300-millones-de-dolares]
draft: false
tags: [usabilidad, 'diseño', 'ux']
categories: [usabilidad, negocios]
image:
  placement: 3
---
A veces los ingenieros estamos tan enfocados en la funcionalidad que no
nos preocupamos de la usabilidad. A ver si me explico,  
[ponemos el foco en la definición del caso de uso](/blog/lnds/2013/03/23/expectativas), nos centramos
en darle al usuario lo que nos pide, pero no lo que necesita.

Pero, ¿hacemos una observación de cómo usan nuestro sistema los
usuarios? Tengo varias anécdotas de cómo nos hemos dado cuenta que
nuestro usuarios realizan tareas manuales para acomodar el input a
nuestros sistemas, tareas que no serían necesarias si nos hubieran
descrito cómo llegaba la información en realidad, en vez de solicitar un
formato ideal de cómo supuestamente debía llegar. 

Es por eso que estoy empeñado en que el desarrollador/programador se
acerque más a interactuar directamente con el usuario. [Es más, siempre
he pensado que es buena idea que el programador use los sistemas que
construye bajo las misma condiciones que tiene el usuario. Así se
descubren bugs, o funcionalidades incompletas, o
inadecuadas.

Les voy a contar una historia, que es famosa a nivel de las personas que
se dedican a la ingeniería de usabilidad (sí, hay una ingeniería para
eso y es muy importante). 

Se trata del botón de los trescientos millones de dólares.

El artículo fue publicado por Jared Spool en 2009, y pueden leerlo en
este link: <https://articles.uie.com/three_hund_million_button>.

{{<figure caption="Jared Spool" src="https://d2dspjyoh5c79p.cloudfront.net/58d1e4ab-6fba-11e7-976c-0d1ee2977bbe-aa9f18b7">}}

Lo que viene es una suerte de traducción del artículo original (Spool
coloca un enlace a una traducción al español en su post, pero
francamente la encontré muy mala, pero como advertencia, esta no es una
traducción ni literal ni completa):

## Cómo al cambiar un botón las utilidades anuales de un sitio se incrementaron en 300 millones de dólares

Es difícil imaginar un formulario más sencillo: dos campos, dos botones
y un enlace. Aún así, resulta que este formulario impedía que los
clientes adquirieran productos de un gran sitio de comercio electrónico,
llegando a la cifra de US\$ 300.000.00 al año. Lo peor es que los
diseñadores del sitio no tenían idea de que esto fuera un problema.

El formulario en cuestion constaba de los campos Direccion de Correo
Electrónico (Email Address), Contraseña (Password). Los botones era
"Ingresar" (Login) y "Registrar" (Register). El link era "Olvidé mi
Clave" (Forgot Password). Se trataba del formulario de ingreso al
sitio. Un formulario que los usuarios encuentran todo el tiempo. ¿Cómo
podían tener problemas con esto?

El problema no era tanto con la disposición del formulario como con la
manera en que esta actuaba. Los usuarios se enfrentaban a esta después
de haber llenado su carro de compra con los productos que querían
comprar, y al momento de presionar el botón Checkout.  Este formulario
de ingreso aparecía antes de que pudieran ingresar la información de
pago.

El equipo consideró que este formulario permitía al cliente frecuente
comprar más rápido. Los clientes primerizos no tendrían problemas para
registrarse porque, después de todo, volverían por más y apreciarían lo
expedito del proceso en las siguientes compras. Todos ganan,
¿verdad?

# "No estoy acá para establecer una relación"

Se condujeron tests de usabilidad con personas que necesitaban comprar
productos del sitio. Se les solicitó que trajeran sus listas de compra e
incluso se les pasó el dinero para hacer las compras. Todo lo que se les
pedía es que completaran la compra.

Lo primero que se descubrió fue lo errado que estaban con respecto a los
clientes que venían por primera vez. A ellos les molesta registrarse.
Resentían tener que registrarse cuando encontraban la página. En
palabras de un cliente: "no estoy acá para entrar en una relación, sólo
quiero comprar algo".

Algunos clientes primerizos no recordaban si era su primera vez, incluso
quedaban frustrados al fallar con cada combinación común entre email y
clave. Los observadores quedaron sorprendidos con tanta resistencia al
registro.

Sin saber lo que estaba involucrado con el registros, todos los
usuarios que presionaron el botón lo hicieron con un sentido de
desesperación. Varios verbalizaron que lo único que los dueños del sitio
era obtener su información para molestarlos después con mensajes de
marketing que ellos no deseaban. Algunos imaginaron propósitos negativos
y un obvio intento de invadir su privacidad. (En realidad, el sitio no
les pedía nada en el registros que no fuera necesario para completar la
orden de compra: nombre, dirección de despacho, dirección de facturación
e información de pago).

## Tampoco era bueno para los clientes frecuentes

Los clientes frecuentes tampoco estaban felices. Salvo por unos pocos
que recordaban su información de login, muchos se estancaban ante el
formulario. No podían recordar la dirección de correo electrónico o la
contraseña que habían usado. Recordar el email que usaron para
registrarse era problemático, muchos tenían múltiples direcciones de
correo electrónico o la habían cambiado a lo largo de los años.

Cuando un cliente no podía recordar el correo y la contraseña, hacían
intentos de adivinarlos múltiples veces. Estos intentos rara vez tenían
éxito.Algunos eventualmente presionaban el link para recuperar la
contraseña, lo que se vuelve en otro problema si puedes recordar cual
fue la dirección de correo con la que te registraste originalmente.

[Posteriormente a este estudio se realizó un análisis de la base de
datos del retailer, sólo para descubrir que el 45% de todos los clientes
tienen múltiples registros en el sistema, algunos llegando a 10. También
analizaron cuanta gente pidió recuperar las contraseñas, para encontrar
que se llegó a sobre 160.000 por día. El 75% de estas personas nunca
trataron de completar la compra.]{style="letter-spacing: 0.01rem;"}

El formulario, cuya intención era facilitar la compra, resultó ser de
ayuda para un pequeño porcentaje de los clientes que lo encontraban.
(Incluso para muchos de estos clientes no recibieron mucha ayuda, dado
que les tomó esfuerzo adicional actualizar la información incorrecta,
como los cambios de dirección o de tarjeta de crédito). Al contrario de
lo esperado, el formulario estaba evitando las ventas, una gran cantidad
de ventas.

## La corrección de US\$300,000,000

Los diseñadores corrigieron el problema de forma simple. Eliminaron el
botón Registro (Register). En su lugar colocaron un botón *Continuar*
(*Continue*), con un simple mensaje: *"No requiere crear una cuenta
para realizar una compra en nuestro sitio. Simplemente presione
Continuar para proceder con el Checkout. Para hacer futuras compras aún
más rápido, puede crear una cuenta durante el checkout."*

![](https://d2dspjyoh5c79p.cloudfront.net/9f6fe56c-6fba-11e7-976c-0d1ee2977bbe-aa9f18b7)

Los resultados: el número de clientes comprando aumentó en un 45%. Las
compras extra resultaron en 15 millones de dólares el primer mes. En ese
primer año el sitio recibió un adicional de US\$300.000.000.

El autor de esto cuenta que en su contestadora telefónica aún conserva
el mensaje que recibió del CEO de este retailer. Es un mensaje muy
simple: "Spool! You\'re the man!" (Spool, eres el hombre!). No era
necesario un mensaje más complejo, después de todo sólo habían cambiado
un botón.
