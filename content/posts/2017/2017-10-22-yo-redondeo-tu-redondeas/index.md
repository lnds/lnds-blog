---
title: "Yo redondeo, tú redondeas"
authors: [admin]
date: 2017-10-22T08:25:11-03:00
slug: "yo-redondeo-tu-redondeas"
draft: false
tags: ['redondeo', 'programación']
image:
  placement: 3
---

> You say either and I say either,\
> You say neither and I say neither\
> Either, either Neither, neither\
> Let's call the whole thing off.\
> You like potato and I like potahto\
> You like tomato and I like tomahto\
> Potato, potahto, Tomato, tomahto.\
> Let's call the whole thing off

## El problema

En octubre de 2017 el Banco Central Chileno informa que las monedas de 1
y 5 pesos dejarán de circular. La razón de esto es que el costo de
producirlas excede el valor de las mismas.\
\
Ante esta situación se sugiere que las transacciones en dinero efectivo
hagan un redondeo, de modo que cuando un monto a pagar termine en 5, 4,
3, 2 ó 1 quede la cifra final en 0. En el caso contrario, es decir,
cuando termine en 6, 7, 8 ó 9 la cifra quede en la decena siguiente.

Ejemplos:

-   Si la cifra es 10.522 queda en 10.520
-   Si la cifra es 10.525 queda en 10.520
-   Si la cifra es 10.527 queda en 10.530.

Por alguna razón, esta medida ha exacerbado a algunas personas de la
industria TI nacional, porque consideran aberrante que se aproxime de
esa manera.

Así no se aproxime, dicen algunos.

Ellos esperarían que se aproximara de la "forma tradicional", de modo
que lo que termine en 5 pase a la decena superior. Segúb esta posición
esto [es lo que debería pasar:

-   Si la cifra es 10.522 queda en 10.520
-   Si la cifra es 10.525 queda en 10.530
-   Si la cifra es 10.527 queda en 10.530.

# Potato, Potahto, Tomato, Tomahto

En realidad se puede redondear de diferentes maneras, no hay una forma
"correcta" o estándar de redondear una cifra.

En realidad, hay algunos estándares, por ejemplo, la especificación de
punto flotante IEEE-754, que define cómo operan los números en punto
flotante, un estándar adoptado por casi todos los productores de
unidades de punto flotante, indica que la forma de redondear es el
algoritmo conocido como el del banquero, pero me estoy adelantando.

La verdad, es que estoy en parte de acuerdo con la crítico, puesto que
en muchas ocasiones el gobierno chileno ha establecido estándares
extraños sin medir el impacto en la industria TI, por ejemplo, en el
caso del manejo de los horarios, sobre lo que me he pronunciado
previamente 
("[la hora como un parámetro [2011]"](/blog/lnds/2011/03/30/la-hora-como-un-parametro)).

Una de las críticas a esta medida de redondeo viene de Alejandro Barros,
con quien hemos reclamado ante las arbitrariedades de la autoridad en
estándares técnicos. Pueden leer la posición de Alejandro acá:
<http://www.alejandrobarros.com/estandares-chilensis-si-el-estandar-no-gusta-usamos-otro/>

Pero esta vez no estoy de acuerdo con Alejandro, por los siguientes
motivos:

1.  No hay un estándar universalmente aceptado para redondear cifras.
2.  **La medida sólo tiene efecto en los pagos en efectivo**.
3.  La medida beneficia a los consumidores.
4.  Es una medida técnica en el ámbito económico, donde se debe velar
    por disminuir efectos como la inflación, que son mayores a los
    costos TI que tenga implementar este cambio.
5.  No es primera vez que se hace.

## **¿por qué beneficia a los consumidores?**

Si lo vemos desde el punto de vista del consumidor, esta medida los
beneficia en 5 de 9 ocasiones, en el otro caso, con la aproximación
tradicional, los beneficia en sólo 4 de 9 ocasiones.

Para quienes no se convencen, hice unas simulaciones que menciono más
adelante, que muestran este efecto.

## ¿Alguien recuerda los centavos?

Arriba mencioné que no es la primera vez que esto se hace.

![](https://d2dspjyoh5c79p.cloudfront.net/fa163cb0-b72a-11e7-a030-2b5831f8ecb5-aa9f18b7)

Sí, en Chile había centavos, pero estos se eliminaron en 1984, en este
link: <http://mickychile1976.blogspot.cl/2012/06/historia-monedas-y-billetes-chilenos.html>
pueden encontrar la historia de nuestro billetes y monedas.

En 1984 se emitió una norma que eliminó esta denominación de
circulación.

La página en Wikipedia sobre el peso chileno es bien ilustrativa al
respecto: <https://es.wikipedia.org/wiki/Peso_(moneda_de_Chile)>

Desde 1984 tenemos que aproximar todas las operaciones a la unidad.

Así que ya hacemos aproximaciones hace mucho rato. 

Esto es muy relevante pues se usan diversas unidades alternativas en
nuestra economía, como la UF o la UTM, que introducen fracciones y en
esos casos se debe redondear.

## ¿Cómo redondear?

No hay una forma correcta de redondear, como ya mencioné. 

La razón es que en nuestro sistema decimal introduce una asimetría
cuando hacemos esta operación.

Por ejemplo, ¿qué hacemos con 10.5?

Podemos hacer el redondeo "tradicional", conocido como **HALF-UP** que
lo aproxima a la unidad siguiente, quedando en 11.

Pero eso introduce un error acumulado en nuestras aproximaciones hacia
arriba en 5 de 9 veces.

La opción contraria para aproximar 10.5, conocida como **HALF-DOWN**
aproxima hacia la unidad anterior, quedando en 10, y en este caso
nuestro error acumulado va hacia abajo, 5 de 9 veces.

Hay otras formas de redondear que intentan compensar este error, por
ejemplo, **el algoritmo del banquero,** que aproxima hacia arriba si la
parte entera es impar, o hacia abajo si la parte entera es par.

En este caso 10.5, quedara como 10, pero 9.5 quedaría como 10.

Vuelvo a notar que el algoritmo del banquero es la forma de redondear
estándar definida por la IEEE en la especificación de punto flotante
IEEE-754, así que es esta función la más usada en muchas bibliotecas de
código en diversos lenguajes.

Hay otras formas de redondear que intentan minimizar el error. Algunos
proponen que sea al azar, es decir, cada vez que veamos un .5 en la
parte decimal tomemos una moneda y si sale cara aproximamos hacia abajo
y si sale sello aproximamos hacia arriba.

## **Algoritmos para redondear a la decena**

Como complemento a este artículo he creado un repositorio en Github que
pueden visitar acá: <https://github.com/lnds/redondeo>

Este repositorio contiene implementaciones para aplicar el redondeo
requerido por esta norma del banco central, muestro diversos algoritmos
y además mido su eficiencia.

Además incluyo algunas simulaciones del impacto de cada algoritmo en la
economía, esto es más bien un juego, pero que arroja alguna luz sobre el
impacto de aplicar un algoritmo u otro.

Mi intención es que si alguien tiene que aproximar cifras siga las
recomendaciones descritas acá, porque es muy probable que lo hagan mal.

## **Malas formas de aproximar a la decena**

Un algoritmo malisimo para aproximar sería usando strings, pero es algo
que he visto tantas veces que debo discutirlo, si usted ve esto en su
base de código pida que se corrija de inmediato.

El algoritmo en este caso sería algo así:

    sea num el número a aproximar.
    sea snum el número expresado como string.
    sea last = snum[length(snum)-1] // asumo que los strings se enumeran desde cero.
    asignar snum[length(snum)-1] = '0'
    si last > '5' entonces
        sea p = snum[length(snum)-2]
        asignar snum[length(snum)-2] = char(int(i)+1)

Otra forma, menos mala, es la que se le ocurriría al 99% de los
programadores:

    fun redondear_pesos(monto) {
      return round ( monto / 10.0 ) * 10.0
    }

Esto depende de cómo se implemente round.

En Java existe la posibilidad de implementar HALF_DOWN, así que el
redondeo iría más o menos del siguiente modo:

```java
    public static double redondearPesos(double d) {
      return new BigDecimal(d/10.0).setScale(0, RoundingMode.HALF_DOWN) 
                 .doubleValue() * 10.0;
    }
```

Esto es horrible, por muchas razones, pero funciona. 

Sin embargo hay formas mejores de hacer esto.

## Mejores formas de redondear a la decena

Lo que queremos es redondear hacia abajo si termina en 5, 4, 3, 2 ó 1.
Entonces es bastante simple si usamos números enteros (los pesos
chilenos no aceptan decimales, así que podemos asumir que los montos
serán enteros con tranquilidad, esto no es cierto si trabajas con UF o
UTM, así que debes transformar antes tus valores).

El algoritmo sería:

    func redondear_peso(monto) {
      let resto = monto mod 10;
      if resto < 6 {
        return monto - resto;
      } 
      else {
        return monto + 10 - resto;
      }
    }

Esta forma es eficiente, no requiere transformaciones ni
multiplicaciones ni divisiones, que son operaciones costosas. No pierde
precisión, es fácil de entender y probar.

## Simulaciones

Para detectar el impacto de la medida, escribí el programa simulaciones,
que contiene dos escenarios. En el escenario 1 sumo todos los números
entre 0 y UINT\_MAX (4.294.967.295) y calculé las diferencias aplicando
tres tipos de redondeo. Los resultados son estos:

    simulacion 1
    (0) suma sin redondeo         : 9223372030412324865
    (1) suma con redondeo chileno : 9223372028264841210
    (2) suma con redondeo clasico : 9223372032559808500
    (3) suma sin redondeo banquero: 9223372030412324850
    diferencia (1) - (0)          =         -2147483655
    diferencia (2) - (0)          =          2147483635
    diferencia (3) - (0)          =                 -15

Un valor negativo en la diferencia significa una diferencia a favor del
consumidor. Notar que el algoritmo del banquero reduce mucho el error
acumulado.

El algoritmo del banquero debería haber sido el que se debió aplicar,
por parte del Banco Central, porque está implementado en un estándar
computacional y porque es más justo. 

Así que mi critica, una vez medido el impacto es esa, ¿por qué en el
Banco Central no usaron el algoritmo del banquero?

El escenario 2 hace una simulación generando 1.000.000.000 (mil
millones) de números aleatorios.

El resultado es este:

    simulacion 2
    iteraciones: 1000000000
    (0) suma sin redondeo         : 1073749761791234172
    (1) suma con redondeo chileno : 1073749761291172250
    (2) suma con redondeo clasico : 1073749762291234490
    (3) suma sin redondeo banquero: 1073749761791157850
    diferencia (1) - (0)          =          -500061922
    diferencia (2) - (0)          =           500000318
    diferencia (3) - (0)          =              -76322

Como verán, el usar el redondeo propuesto por el banco central tiende a
beneficiar a los consumidores (en los grande números, por supuesto).

Pero nada impide que los vendedores ajusten sus precios hacia arriba,
así que el beneficio es dudoso y puede tener algún efecto sobre el IPC
(que tan grande o pequeño, eso habrá que verlo, quizás es un buen
ejercicio de simulación, pero se requiere tener más información).

Notar nuevamente que el algoritmo del banquero sigue siendo el que menos
impacto produce.

## Notas

Todos los algoritmos mencionados y las simulaciones fueron implementadas
en C y se encuentran en este repositorio GitHub:

<https://github.com/lnds/redondeo>

La versión de "Let\'s Call The Whole Thing Off" de Ella Fitzgerald y
de Louis Armstrong es mucho mejor:

{{<youtube J2oEmPP5dTM>}}

## Referencias

Sobre redondeo, este gran artículo en Wikipedia
<https://en.wikipedia.org/wiki/Rounding>

Sitio del Banco Central donde se explica el redondeo:
<https://www.redondea.cl/>

