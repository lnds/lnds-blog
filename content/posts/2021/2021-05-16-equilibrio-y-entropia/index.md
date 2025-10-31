---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Equilibrio y Entropía de Software"
authors: [admin]
subtitle: "Hablemos de entropía de software (parte 2)"
summary: ""
tags: [evolución, software, desarrollo, "ingeniería de software", programas, sistemas]
categories: ["entropía de software"]
date: 2021-05-16T10:49:02-04:00
lastmod: 2021-05-16T10:49:02-04:00
featured: false
draft: false
math: true
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

Este es el segundo artículo de [esta serie](/categories/entropia-de-software/), en que estoy investigando el concepto de entropía de software.

Para continuar he elegido un ejercicio muy sencillo, que tomé de [Project Euler](https://projecteuler.net). En ese sitio tenemos una lista de problemas que se proponen para ser resueltos en diversos lenguajes de programación. Vamos a tomar el número uno, que nos dice lo siguiente:

> "Si listamos todos los números naturales menores a 10 que son múltiplos de 3 ó 5, obtenemos 3, 5 y 9. La suma de estos múltiplos es 23.
>
> Encuentre la suma de todos los múltiplos de 3 ó 5 menores a 1000."

Vamos a generalizar este problema y definiremos nuestra especificación de la siguiente manera:

> "Encuentre la suma de todos los múltiplos de 3 ó 5 menores al número natural n."

El siguiente esqueleto de programa, en python, permite resolver este problema:

```python
def main(n: int) -> int:
  pass

if __name__ == "__main__":
  try:
    n = int(input("ingrese n: "), 0)
    print('el resultado es',  main(n))
  except ValueError:
    print("debe ingresar un número")
```

Podemos definir una serie de tests para validar nuestra función main (cuya implementación está pendiente), usando `unittest`:

```python
import unittest
from main import *

class Euler1Test(unittest.TestCase):

  def test_euler(self):
    self.assertEqual(main(0), 0)
    self.assertEqual(main(4), 3)
    self.assertEqual(main(6), 8)
    self.assertEqual(main(10), 23)
    self.assertEqual(main(100), 2318)
    self.assertEqual(main(1000), 233168)
```

Si recuerdan nuestra discusión en [el artículo anterior](/blog/lnds/2021/05/08/hablemos-de-entropia-de-software/) estamos ante la presencia de un programa tipo S, o `s-program`. La especificación es formal y podemos definir cuál es la salida esperada para cada entrada. Eso lo expresamos con algunos casos de prueba en nuestro test unitario.

Resolveremos el problema, escribiendo la función `main` de la siguiente forma:

```python
def main(n: int) -> int:
  if n <= 0: return 0
  sum = 0
  for i in range(n):
    if i % 3 == 0 or i % 5 == 0:
      sum += i
  return sum
```

Pueden probar esta solución en el siguiente Replit: <https://replit.com/@lnds/lndssoftwareentropy1>.

Usemos GIT para controlar los cambios en este programa:

```bash
% git commit -m "initial commit"
[main (root-commit) 47f88eb] initial commit
 1 file changed, 15 insertions(+)
```

El resultado de esta operación nos informa que para crear nuestra solución hemos realizado 15 inserciones en nuestro programa.
Así que nuestro programa tiene 15 líneas de código (sin considerar los tests).

## Soluciones finales

Ya tenemos una solución, pero ¿podemos darla por finalizada?

Diremos que un programa  es **final** si cumple con su especificación y el código ya no sufre modificaciones. Siempre que los requisitos se mantengan inmutables.

Si hacemos una análisis del algoritmo veremos que esta solución ejecuta `n` iteraciones.

¿Podemos hacerlo mejor? Por supuesto, de hecho podemos reducir la cantidad de iteraciones aprovechando el hecho de que no tenemos que revisar todos los números, basta ir contando cada 3 y cada 5.
Sin embargo, esta solución tiene un problema: el número 15, por ejemplo, será contado dos veces, así que debemos restar la suma de las cuentas de 15 en 15.

Considerando esto obtenemos la siguiente solución:

```python
def main(n: int) -> int:
  if n <= 0: return 0

  def sum_step(step):
    sum = 0
    for i in range(step, n, step):
        sum += i
    return sum
    
  return sum_step(3) + sum_step(5) - sum_step(3*5)
```

Se puede mostrar que esta solución ejecuta del orden $0,6 \times  n$ iteraciones, es decir, para n = 1000 ejecuta unas 600 iteraciones.
Eso es una optimización de un 40%, nada mal.

Si usamos GIT para hacer un commit de esta nueva versión, esta herramienta  nos informa que hemos insertado 7 líneas de código y eliminado 5 lineas de código para lograr esta nueva versión más óptima:

```bash
  % git commit -m "optimiza loops"
  [main 629ee77] main.py
  1 file changed, 7 insertions(+), 5 deletions(-)
```

El nuevo programa tiene 17 líneas de código.

## Reversibilidad

Ahora lo interesante es que podemos revertir estos cambios ejecutando este comando GIT:

```bash
% git reset --hard HEAD@{1}
HEAD is now at 47f88eb initial commit
% head main.py
def main(n: int) -> int:
  if n <= 0: return 0
  sum = 0
  for i in range(n):
    if i % 3 == 0 or i % 5 == 0:
      sum += i
  return sum


if __name__ == "__main__":
```

Y si repetimos el comando podemos volver a la versión optimizada:

```bash
% git reset --hard HEAD@{1}
HEAD is now at 629ee77 optimiza loops
% head main.py
def main(n: int) -> int:
  if n <= 0: return 0

  def sum_step(step):
    sum = 0
    for i in range(step, n, step):
        sum += i
    return sum

  return sum_step(3) + sum_step(5) - sum_step(3*5)
```

Realicemos una última optimización:

```python
def main(n: int) -> int:
  if n <= 0: return n
    
  def sum_step(step):
    p = (n-1) // step
    return step * p * (p+1) // 2
    
  return sum_step(3) + sum_step(5) - sum_step(3*5)
```

Esta solución usa la [fórmula de Gauss](https://francis.naukas.com/2010/04/15/iii-carnaval-de-matematicas-toda-la-verdad-sobre-la-anecdota-de-gauss-el-nino-prodigio-su-profesor-y-la-suma-de-1-a-100/) para la suma de los primeros n números[^1]. Y tiene la característica de que elimina el uso de loops.

Si registramos el estado del programa usando GIT:

```bash
% git commit -m "solución final"
[master bb6855a] solución final
 1 file changed, 2 insertions(+), 4 deletions(-)
```

Vemos que esta vez hemos realizado 2 inserciones y hemos borrado 4 líneas de código. Con esto el programa nuevamente queda con 15 líneas de código.

Los tests siguen siendo válidos. Por supuesto este cambio es reversible también.

Pero el programa no opera igual. Esta solución no ejecuta ninguna iteración, todo se resuelve en una expresión llamando a una función tres veces. Para n = 1000 este programa es mil veces más rápido que el programa con el que iniciamos.

## Programas elegantes

¿Podemos seguir optimizando y arreglando nuestro código? ¿Hemos llegado finalmente a la solución final?

Hay un resultado de [Gregory Chaitin](https://es.wikipedia.org/wiki/Gregory_Chaitin) que es relevante en este contexto. Chaitin define el concepto de **"programa elegante"** como el programa más corto que produce una determinada salida, es decir que no existe un programa más pequeño que genere esa misma salida.

Este filósofo y matemático demuestra que no es posible saber si hemos encontrado un programa elegante a partir de cierto umbral[^2].

Sin cambiar de lenguaje de programación, es muy poco lo que podemos hacer y creo que hemos encontrado el umbral del que habla Chaitin, así que para todos los efectos prácticos diremos que esta es la solución final.

Pero en este ejercicio han aparecido varios conceptos interesantes, que vamos a formalizar a continuación.

# Reversibilidad y Equilibrio

En esta sección usaremos algo de nomenclatura matemática, y trataremos de ser lo más formales posibles, pero este no es un artículo científico, así que la formalidad no aspira a ser total, pero de todas maneras cualquier comentario para mejorar estos modelos es bienvenido.

Para un programa $P$ definiremos los posible estados a través de los cuales evoluciona, como el conjunto: $$S = \\{ s_1, s_2, ..., s_i, s_{i+1},... s_n | i, n \\in \\mathbb{N}  \\} $$

Pueden pensar en estos estados como cada commit que hicimos con GIT. En nuestro ejemplo tenemos los estados  `47f88eb`, `629ee77` y `bb6855a` que corresponden a los últimos dígios hexadecimales del hash que usa GIT para identificar los commits.

Por otro lado tendremos un conjunto de cambios: $$C = \\{ c_1, c_2, ..., c_i, c_{i+1},... c_n | i, n \\in \\mathbb{N} \\} $$ que se aplican sobre el programa usando la siguiente función: $$ \\delta : S \times C \rightarrow P $$

Decimos que un programa está en el estado $s_i$, esto lo denotamos $P(s_i)$.

En nuestro caso tenemos $C_{47f88eb} = (+15, -0)$, $C_{629ee77} = (+7, -5)$ y $C_{bb6855a} = (+3, -4)$. Acá he resumido cada cambio expresándolo como una tupla en que colocamos la cantidad de inserciones (+) y eliminaciones (-), sin detallarlas para simplificar la notación.

En GIT podemos obtener los cambios a aplicar obteniendo por ejemplo un patch:

```bash
% git diff  629ee77..bb6855a
diff --git a/main.py b/main.py
index 6222402..84985c7 100644
--- a/main.py
+++ b/main.py
@@ -2,10 +2,8 @@ def main(n: int) -> int:
   if n <= 0: return 0

   def sum_step(step):
-    sum = 0
-    for i in range(step, n, step):
-        sum += i
-    return sum
+    p = (n - 1) // step
+    return step * p * (p + 1) // 2

   return sum_step(3) + sum_step(5) - sum_step(3*5)
```

Entonces nuestra función $\\delta$ recibe este patch y aplica los cambios especificados, en nuestro caso $delta = $ `git apply`.

## Derivación de un nuevo estado

Cuando aplicamos un cambio $c_i$ sobre el software que se encuentra en el estado $s_i$ obtendremos un nuevo estado $s'_i$:

$$ \\delta(s_i, c_i) = s'_i $$

Diremos que esta función $\\delta$, así tal cual la hemos definido, es *parcialmente reversible*, porque si bien al aplicar un patch inverso (que se obtiene cambiando el orden de los commits) volvemos a un estado posterior del programa, puede que eso no sea deseable, porque los requisitos hayan cambiado o el estado anterior contenía un bug.

Lo que queremos, para tener una **reversibilidad estricta**, o simplemente **reversibilidad** es que al aplicar la función $\\delta$ los requisitos del programa sigan cumpliéndose.

Para resolver esto definiremos una función de verificación $$V(s, R) \rightarrow \\{ false, true \\} $$ que aplica sobre un programa, en el estado $s$. Para esta función existe un conjunto $$ R = \\{ r_1, r_2,...r_i, r_{i+1},... r_n | i, n \\in \\mathbb{N} \\}$$ que corresponde a todos los requisitos que debe satisfacer el programa. La función $V$ se define de este modo:

$$ V_i(s_j, r_i) = \begin{cases}true && \text{si}\\,  P(s_j) \ \text{"cumple con"} \\, r_i, \\\\ false && \text{de lo contrario} \end{cases} $$

$$ V(s_j, R) = \begin{cases}true && V_i(s_j, r_i) = true, \\, \\forall r_i \\in R \\\\ false && \text{de lo contrario} \end{cases} $$

De otro modo, diremos que un programa en un estado $s_j$ cumple la especificación $R$ si $V(s_j, R) = true$.

Construir una función de verificación es una tarea muy complicada. De alguna manera hay que formalizar todos los requisitos de modo que sean verificables. Acá la expresión "cumple con" es el punto más débil de nuestro modelo. Una aproximación de la que disponemos es nuestro set de pruebas, pero debemos tener en cuenta que esto probablemente es incompleto. Por otro lado existen mecanismos de prueba formal de programas, pero suelen ser de poca utilidad en la práctica. Recordemos la famosa frase de Knuth:

> "Beware of bugs in the above code; I have only proved it correct, not tried it."

Pero sigamos haciendo definiciones. Vamos a decir que un cambio $c_i$ es reversible cuando, el programa $P$ se encuentra en un estado $s_i$ tal que $V(s_i, R) = true$ y aplicamos el cambio $c_i$ de modo que :

$$ V(\\delta(s_i, c_i), R)  \\land  V(\\delta(s'_i, c_i^{-1}))  = true$$

Acá $c_i^{-1}$ es el cambio inverso, es decir, reemplazamos las inserciones por eliminaciones y las eliminaciones por inserciones.

Lo que hemos dicho acá que un cambio es reversible (o estrictamente reversible) si al aplicar la función de cambio $\\delta$ el programa sigue siendo válido, es decir, sigue cumpliendo con los requisitos.

Para obtener el cambio inverso usando GIT basta con invertir el orden de los commits al obtener el patch:

```bash
% git diff   bb6855a..629ee77
diff --git a/main.py b/main.py
index 8e35a13..d3b7ed7 100644
--- a/main.py
+++ b/main.py
@@ -1,13 +1,15 @@
 def main(n: int) -> int:
   if n <= 0: return n
-
+
   def sum_step(step):
-    p = (n-1) // step
-    return step * p * (p+1) // 2
+    sum = 0
+    for i in range(step, n, step):
+        sum += i
+    return sum
```

Antes teníamos 4 eliminaciones y dos inserciones, ahora tenemos dos eliminaciones y 4 inserciones.

## Equilibrio

Diremos que un programa está en **equilibrio** para una especificación $R$ si:

  $$ V(s_j, R) = V(\\delta(s_j, c_i), R) \\, \\, \\, {\\forall c_i \\in C \land s_j \\in S } $$

Es decir, que si seguimos aplicando cambios a nuestro programa y este sigue siendo válido para los requisitos, el programa está en equilibrio.

Como en el caso que analizamos en ese caso tenemos:

$$C = \\{C_{47f88eb}, C_{629ee77}, C_{bb6855a}\\} $$

$$ V = \text{class Euler1Test} $$

$$ \\delta = \text{git apply} $$

Resulta que los `s-programs` tienen una propiedad interesante: están en equilibrio. Esto es por la forma en que los definió Lehman[^3].

Lo que ocurre es que si la especificación no cambia entonces el conjunto $R$ no "cambia". Por lo tanto podemos re escribir nuestro `s-program` para realizar mejoras u optimizaciones sin problemas.

Este propiedad de equilibrio es muy importante porque es la que permite el "re factoring", además exige que las interfaces sean inmutables, y nos permite aplicar la idea de Lehamn de subdividir programs complejos en una serie de s-programs (acá surgen otros problemas que adicionan complejidad, como el acoplamiento, del que nos vamos a hacer cargo más adelante).

Según nuestra definición el programa está en equilibrio, pero además los cambios son reversibles, si esto fuera termodinámica diríamos que la entropía de este sistema es constante, pero esto no es termodinámica, así que vamos a aclarar esto.

## Equilibrio y reversibilidad en programas P y E

Hemos analizado el caso de un s-program, pero en los otros casos  las especificaciones cambian continuamente, dada la natureza de los problemas que resuelven.

En ese caso tenemos una función de verificación más compleja, que varía con cada cambio en la especificación.
Es más, existe también una función $\\delta'$ similar a la función de cambios sobre un programa, pero que aplica a cambios en la especificación, podemos suponer que la función $\\delta'$ para un `p-program` es más simple que para un `e-program`.

Todo esto nos revela que el análisis y el modelo construido hasta ahora es demasiado simple. Pero nos permite intuir lo que ocurre en la realidad y explica un hecho relevante: la entropía en un `p-program` y un `e-program` está siempre en aumento, y se logra el equilibrio cuando el programa deja de evolucionar. Si eso ocurre es porque el programa ya no es relevante, se ha vuelto obsoleto, o ha alcanzado un nicho de aplicación tan específico que ya no requiere más cambios (como ciertos utilitarios en algunos sistemas operativos).

## ¿Qué sería la entropía de software entonces?

Con todo esto, ¿tenemos entonces ya una forma de medir la entropía del software?

Hay varias cosas que hemos detectado en el programa que hemos analizado, vamos a enumerarlas:

1. Las líneas de código totales del programa han variado de la siguiente forma: 15, 17, 15.
2. La complejidad algorítmica ha variado de $O(n)$ a $O({3 \over 5} n)$ y finalmente a $O(1)$.
4. Los cambios realizados han sido: {+15, 0}, {+7, -5}, {+2, -4}

Por otro lado hemos descubierto que el programa está en equilibrio, e incluso hemos encontrado una solución final, es decir, en términos termodinámicos su entropía es máxima.

Hay una forma de medir la entropía que nos la entregó Claude Shannon, que corresponde a [la entropía de la información](https://es.wikipedia.org/wiki/Entrop%C3%ADa_(información)).

La definición de Shannon de la Entropía es una fórmula que implica el cálculo de las probabilidad de todas las configuraciones de los estados posibles de un sistema. Pero por fortuna tenemos una aplicación práctica de la teoría de Shannon en el algoritmo de [codificación de Huffman](https://es.wikipedia.org/wiki/Codificación_Huffman). La entropía, en bits, de un texto $A$, que contiene los símbolos $a_i$ con "pesos" $w_i$ respectivamente, estaría dada por la fórmula:

$$ H(A) = - \\sum_{w_i > 0} w_i \\log_2 w_i $$

Esto lo podemos calcular con este programa:

```python
import sys
import collections
import math

def shannon(file_name):
  with open(file_name, "r") as file:
    source = file.read()
    w = collections.Counter(source)
    total = len(source)
    for k in w.keys():
       w[k] /= total
    h = -sum([w_i * math.log2(w_i) for w_i in w.values()])
    print(h)

if __name__ == '__main__' and len(sys.argv) == 2:
  shannon(sys.argv[1])
```

Si aplicamos esta función a las tres versiones del programa obtenemos los valores: (4.2970074650902, 4.344081081107001, 4.484216162332524), el tamaño de los archivos es: (310, 375, 348).

Lo que voy a decir es sólo anecdótico, y no podemos sacar ninguna generalización a partir de esto, pero vemos que la entropía es máxima con la solución final.

La entropía de Shannon nos dice que podemos comprimir nuestro programa y en promedio usaremos entre 4 a 5 bits para representar los símbolos que están en nuestro programa. Esto nos dice que requerimos unos 32 símbolos distintos para representar el programa que hemos escrito. Este valor puede reducirse si modificaramos nuestro programa para considerar ciertas palabras claves y operadores, por ejemplo `for` e `if` pueden ser considerados como símbolos únicos. En ese caso la entropía se reduce, en el caso particular hice un ensayo con este programa y obtuve valores alrededor de 3.7, o que nos permite decir que el programa se puede representar con un alfabeto de 16 caracteres.

Esto ha sido usado con modelos basados en n-grams para determinar la "naturalidad" de programas con errores, en particular en el paper: ["On the “Naturalness” of Buggy Code"](https://web.cs.ucdavis.edu/~devanbu/odd-bugs.pdf), usan la entropía de Shannon pero reducida a un alfabeto de n-gramas de acuerdo a ciertos modelos específicos para mostrar que los programas con más errores tienden a tener mayor entropía.

Por otro lado, podemos recurrir a la definición de entropía que la relaciona con la probabilidad de cada estado. Nos podríamos preguntar, cuál de los tres estados de nuestro programa es el más probable. Para eso podríamos realizar un experimento y solicitar a varios programadores que escriban la solución a este problema. Lo más seguro es que la primera versión de nuestro programa sea la más común. Podríamos darle un valor a cada estado (soluciones), en función de la frecuencia con que aparece cada solución. Sucede que yo he hecho eso, y he usado este ejercicio como prueba o en entrevistas. Lamentablemente no tengo los datos de con que frecuencia sale cada solución, pero podría aventurar un resultado del tipo (95%, 4%, 1%). Si aplicamos esta fórmula: $$S = -\\sum_{i} p_i \\log_2 {p_i} $$

Obtenemos el valor: 0.931. Esto podríamos interpretarlo como una confirmación de que lo más probable es que obtengamos la solución 1 por sobre las otras soluciones. Personalmente encuentro poco satisfactorio este resultado.

Hay otra forma de medir la entropía, y acá recurrimos nuevamente a Chaitin y al trabajo de Kolmogorov sobre complejidad. La complejidad de Kolmogorov para una pieza dada de información está dada por el largo del programa más corto que la pueda representar[^4]. Acá estamos buscando las representaciones más cortas de las secuencias de números que son las sumas de 3 y 5 menores a n.

Kolmogorov diría que la complejidad en este caso sería 310 * 8 ó 2480, porque la complejidad de Kolmogorov se expresa en bits, y ese es el tamaño del programa más corto que hemos encontrado para representar a esta secuencia de números. Se dice que la entropía de la fuente (en este caso los números que cumplen la propiedad representada por nuestros programas) converge a la complejidad de Kolmogorov. Esto nos habla de la entropía de las salida de nuestro programa, no de la entropía de los programas en si mismo. Así que este no parece ser una solución satisfactoria, aunque nos prepara para entender y quizás aceptar nuestra última propuesta.

## Entropía y tamaño de un programa

El cambio de entropía podría ser una función del tamaño del programa. En particular mi me gusta pensar que la entropía de un programa es proporcional al tamaño en líneas de código del mismo.

En astrofísica se usa un resultado similar con los agujeros negros. Lo primero que se observa  es que el área de un agujero negro no puede decrecer, y lo segundo es que se ha determinado que la entropía de un agujero negro es proporcional a su área. La entropía de un agujero negro se obtiene con esta simple fórmula[^5]: $$ S = {A \over 4 } $$

Bueno, el área de un programa puede ser la cantidad de líneas de código de este, o los bytes que ocupa en disco. Vamos a definir la entropía de una base de código diciendo que  es proporcional a la cantidad de líneas de código contenidas, tan simple como eso. O sea:

$$H(\text{Base Código}) = k \times LoC$$

Donde $LoC$ es la cantidad de líneas de código.

El valor exacto quizás no es tan relevante, es la noción de que la entropía aumenta con cada linea de código introducida la que importa.

Esto les puede parecer obvio y quizás no era necesario darnos estas vueltas, la intuición nos dice esto hace rato. Pero lo importante son algunos de los conceptos que hemos introducido en este camino.

Una de las cosas que más me interesa es que vean a GIT como una máquina o función que permite aplicar cambios sobre el código para mutarlo de un estado a otro, eso es quizás es el resultado más importante de este artículo, porque lo aplicaremos en lo que sigue.

Finalmente, quiero citar al premio Nobel de Química Ilya Prigogine quien dijo:

> "la producción de entropía contiene siempre dos elementos dialécticos: un elemento creador de desorden, pero también un elemento creador de orden. Y los dos están siempre ligados"."

En general es un error ver a la entropía sólo como desorden, pero mejor les dejaré este video de Javier Santaolalla, que es muy clarificador sobre este concepto:

{{<youtube ttjM-dMPddY >}}

## Código

Pueden revisar las tres versiones de este programa en los siguientes Replits:

- Versión inicial: <https://replit.com/@lnds/lndssoftwareentropy1>

- Loop mejorado: <https://replit.com/@lnds/lndssoftwareentropy2>

- Usando la fórmula de la Gauss: <https://replit.com/@lnds/lndssoftwareentropy3>

El repositorio de con el código mostrado se encuentra acá: <https://github.com/lnds/entropia_software>

[^1]: La suma de los primeros $n$ dígitos es $sum(n) = n * (n + 1) / 2$. Entonces para calcular la suma de los múltiplos de 3 menores a n hacemos $p = n / 3 \land sum_3(n) = p * (p + 1) / 2$ y para los múltiplos de 5: $p = n / 5 \land sum_5(n) = p * (p + 1) / 2$

[^2]: Ver <https://es.wikibooks.org/wiki/Chaitin,_Omega_y_otras_curiosidades_matemáticas>

[^3]: Fíjense que en esta discusión he dejado fuera los llamados "requisitos no funcionales", como por ejemplo, "que la solución sea rápida", sospecho que Lehman hizo lo mismo, dada su forma de definir los *s-programs*.

[^4]: Ya discutí antes en este blog sobre la complejidad de Kolmogorov en este texto: <https://lnds.net/blog/lnds/2010/06/02/lo-simple-lo-complejo-y-lo-complicado/>

[^5]: <https://cuentos-cuanticos.com/2011/08/05/principio-holografico/>
