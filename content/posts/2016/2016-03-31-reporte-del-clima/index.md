---
title: "Reporte del Clima"
authors: [admin]
subtile: "9 desafíos en 9 lenguajes  (2 de 9, primera parte)"
date: 2016-03-31T08:25:11-03:00
slug: "reporte-del-clima"
aliases: [/blog/lnds/2016/3/31/reporte-del-clima]
draft: false
tags: ['desafíos', 'lenguajes de programación', 'programación', 'go', 'rust','erlang','haskell','scala','kotlin', 'clojure','fsharp','swift']
image:
  placement: 3
---


[Jaco Pastorius](//es.wikipedia.org/wiki/Jaco_Pastorius) es uno de esos
músicos que te deja una profunda impresión cuando lo escuchas. En
particular, no volverás a percibir el sonido del bajo de la misma forma
después de escucharlo. [Su estilo ha influenciado a grandes del rock y
el jazz, como el gran [Flea](//es.wikipedia.org/wiki/Flea)[
de Red Hot Chili Peppers, o [Geddy Lee](//es.wikipedia.org/wiki/Geddy_Lee)
 de Rush, quien coloca a Jaco en la cima más alta.

> *"Sometimes a little bit of his fairy dust might rub off on you when
> you pretend to play like he
> does."

![](//d2dspjyoh5c79p.cloudfront.net/2438e961-f6d3-11e5-a13c-3371c0364c63-aa9f18b7)

¿Qué tiene que ver esto con estos raros lenguajes nuevos? 

En realidad nada. O muy poco, pero a mi me gusta Jaco Pastorius y su
música fue la principal banda sonora mientras resolvía el segundo
desafío de esta tarea, que me he auto impuse de visitar nueve lenguajes
de programación en nueve ejercicios.

Este segundo desafío, se llama Weather Report (reporte del tiempo), para
homenajear a la famosa banda de jazz fusión, en donde tocó Jaco al
inicio de su carrera.

## Es un mundo concurrente

Creo que una de las características más importantes de un lenguaje
moderno tiene que ver con la manera en que aborda la programación
paralela.

La programación paralela es una forma de programación concurrente, en
que aprovechamos las capacidades de los sistema multiprocesador.

Voy a recurrir a las definiciones  dadas por Ricardo Galli en su libro
["Principios y Algoritmos de Concurrencia"](/blog/lnds/2015/11/15/principios-y-algoritmos-de-concurrencia):

> **Programación Concurrente:** es la composición de módulos que se
> ejecutan independientemente, de forma asíncrona y no determinista.\
> **Programación Paralela:** el paralelismo es una forma de ejecutar
> programas concurrentes. La programación concurrente es una forma de
> estructurar los programas, no el número de procesadores que usa para
> su ejecución.

> "Los problemas de procesos concurrentes no son exclusividad del
> procesamiento paralelo, también ocurren con un único procesador. Los
> estudios de concurrencia y paralelismo son diferentes. El primero se
> ocupa de la correcta composición de componentes no deterministas, el
> segundo de la eficiencia asintótica de programas de comportamiento
> determinista."

Como les dije antes, vamos a resolver un problema de programación
paralela. Los aspectos más característicos de  programación concurrente
los estudiaremos más adelante en otros desafíos.

## Consultando el reporte del tiempo

El desafío 2 consiste en construir una aplicación que obtenga el clima
de distintas ciudades, usando la API de
[OpenWeatherMap.org](//openweathermap.org/).

Se debe crear un programa que reciba a través de la línea de comandos
una lista de ciudades. Este programa debe realizar una consulta al  del
sitio OpenWeatherMap.org para obtener el informe del tiempo para cada
una de las ciudades. El resultado se debe ordenar de forma descendente,
desde la mayor a la menor temperatura. El resultado debe contener, la
ciudad, la temperatura máxima y las condiciones del clima. Además el
programa debe informar  el tiempo cronológico ocupado para descargar la
información. Si se pasa el parámetro -p el programa hace la consulta
"en paralelo" para cada ciudad.

Por ejemplo, este es el resultado de la ejecución del programa al
momento de escribir estas lineas:

     $ weather Berlin Santiago Boston Madrid Concepcion Mexico
     Mexico 26.00 nubes rotas
     Santiago 15.00 cielo claro
     Concepcion 15.00 nubes rotas
     Madrid 10.70 nubes dispersas
     Boston 10.00 cielo claro
     Berlin 03.00 cielo claro
     tiempo ocupado para generar el reporte: 00:00:02.105

Si lo ejecuto con el parámetro -p:

     $ weather -p Berlin Santiago Boston Madrid Concepcion Mexico
     Mexico 26.00 nubes rotas
     Santiago 15.00 cielo claro
     Concepcion 15.00 nubes rotas
     Madrid 10.80 nubes dispersas
     Boston 10.00 cielo claro
     Berlin 03.00 cielo claro
     tiempo ocupado para generar el reporte: 00:00:01.546

Notarán que en este caso la versión paralela del programa toma un tiempo
menor (1,546 segundos versus 2.105 segundos).

La siguiente tabla muestra los tiempos de ejecución de la versión Go del
programa, ejecutándolo de manera secuencial y paralela (con el parámetro
-p). Los tiempos están en segundos, partiendo con 1 ciudad hasta llegar
a 10 ciudades. Fueron probados en un Macbook Pro con un procesador Intel
I7 de 4 cores.

    Ciudades sec         par     s
    1        1,180     1,633     0,72
    2        0,829     0,807     1,03
    3        1,246     1,043     1,19
    4        1,670     0,716     2,33
    5        1,974     1,276     1,55
    6        2,388     1,725     1,38
    7        2,546     1,303     1,95
    8        2,761     1,470     1,88
    9        3,244     1,803     1,80
    10       3,754     1,207     3,11

La columna s muestra el speedup, o factor de mejora, que mide cuanto
mejora el tiempo de ejecución en paralelo con respecto a la ejecución
secuencial.

Estos valores no deben considerarse una medición precisa, es necesario
hacer muchas más para determinar un valor adecuado de speedup. Pero nos
da una idea del efecto de paralelizar la consulta.

Si tenemos 4 cores, y asumimos que el 90% del proceso se puede ejecutar
en paralelo, tenemos un límite teórico de 3,07 de speedup, de acuerdo a
la [Ley de Amdahl](//es.wikipedia.org/wiki/Ley_de_Amdahl).

Con los valores de la tabla de arriba calculé el Speedup Teórico de
acuerdo a las leyes de Amdahl y de
[Gustafson](//es.wikipedia.org/wiki/Ley_de_Gustafson), que incluyo sólo
como dato anecdótico, en este caso consideré el valor p = 0,90 para el
cálculo de este parámetro:

    # Gustafson Amhdal
     (p = 0,9) (p=0,9)
    1  0,7503 0,7432
    2  1,0245 1,0244
    3  1,1752 1,1718
    4  2,1992 2,0581
    5  1,4923 1,4667
    6  1,3459 1,3331
    7  1,8586 1,7837
    8  1,7904 1,7265
    9  1,7193 1,6660
    10 2,8992 2,5682

Si no entienden de que se trata todo esto les sugiero leer mis posts
sobre la Ley de Amdahl
([acá](/blog/2009/09/el-problema-de-paralelizar.html),
[acá](/blog/2009/09/el-problema-de-paralelizar-2.html) y
[acá](/blog/2009/09/el-problema-de-paralelizar-3.html)), o
mejor aún, el capítulo respectivo en [mi
libro](//amzn.to/17bKPdO) 😜

El parámetro p de la ley de Amdahl es la proporción del programa que se
ejecuta en paralelo. Para entender por qué consideré un valor de p =
0,90 les voy a describir la forma general de mi solución a este desafío.

# Consultas en paralelo

Si  resolvemos el problema para consultar el clima de una lista de
ciudades en forma secuencial, una solución posible se puede expresar con
el siguiente algoritmo (escrito en seudo código):

     Sea N la cantidad de ciudades.

     Sea Cities[0..N-1] un arreglo con los nombres de las ciudades.

     Sea Reporte[0..N-1] un arreglo con los reportes del tiempo para cada ciudad.

     Sea ArgV[] un arreglo con los argumentos del programa recibidos en la linea de comandos.
     
     for i = 0; i < N; i++ {
        Cities[i] = ArgV[i]
     }
     for i = 0; i < N; i++ {
       Reports[i] = CallApiOpenWeatherMap(Cities[i])
     }

     SortInPlaceByTemp(Reports)
     
     for i = 0; i < N; i++{
        PrintReport(Reports[i])
     }

Gráficamente este programa se ejecuta de la siguiente manera:

{{<figure caption="ejecución secuencial del programa" src="//d2dspjyoh5c79p.cloudfront.net/6623c943-f74a-11e5-a13c-3371c0364c63-aa9f18b7">}}

Cada círculo representa una sub rutina, en este caso, el circulo de
color celeste representa las llamadas a la API de OpenWeatherMap. El
resultado de esta llamada lo guardamos en un elemento de nuestro arreglo
de reportes, que representamos con cajas grises. Después ordenamos ese
arreglo de reportes, esto está representado por el círculo de color
naranja con la palabra sort.

Podemos mejorar el tiempo si ejecutamos las llamadas a la API de forma
paralela, de este modo:

![](//d2dspjyoh5c79p.cloudfront.net/ddc628d4-f74a-11e5-a13c-3371c0364c63-aa9f18b7)

En teoría, tendremos una fracción del tiempo usada en la operación en
paralelo y una fracción secuencial que corresponde al ordenamiento de
los datos (sort). ¿Cuál es la proporción del tiempo ocupada en las
llamadas en paralelo? Ese es el parámetro p, yo le asigné un valor de
0,9, porque asumo que el 90% del tiempo se gasta en consultar la API y
ordenar ocupa el otro 10%. Esto es un valor arbitrario, determinarlo en
forma precisa escapa a los objetivos de este ejercicio, pero ustedes
pueden intentar determinarlo con mayor precisión.

¿Cómo reflejamos esta paralelización en nuestro algoritmo?

Del siguiente modo:

     Sea N la cantidad de ciudades.
     Sea Cities[0..N-1] un arreglo con los nombres de las ciudades.
     Sea Reporte[0..N-1] un arreglo con los reportes del tiempo para cada ciudad.
     Sea ArgV[] un arreglo con los argumentos del programa recibidos en la linea de comandos.
     for i = 0; i < N; i++ {
        Cities[i] = ArgV[i]
     }
     par for i = 0; i < N; i++ {
       Reports[i] = CallApiOpenWeatherMap(Cities[i])
     }
     SortInPlaceByTemp(Reports)
     for i = 0; i < N; i++{
        PrintReport(Reports[i])
     }

El truco fue cambiar el for central por un **par for.**

{{<figure caption="yaaaa?!!" src="//d2dspjyoh5c79p.cloudfront.net/93cea765-f74b-11e5-a13c-3371c0364c63-aa9f18b7">}}

Ya sé que esto lo encuentran sospechoso, no se preocupen, se los voy a
explicar.

Hay algunos lenguajes que tienen construcciones similares a lo que he
llamado **par for.**

Este par for es una estructura de control que ejecuta en paralelo las
instrucciones del cuerpo del ciclo. Hay compiladores de Fortran y C para
super computadores que tienen construcciones similares a esta.

En un supercomputador con muchos procesadores lo que hace una estructura
de control como esta es ejecutar el cuerpo del ciclo en un procesador
distintos. Esta estructura de control se encarga de sincronizar el
término de cada una de las ejecuciones secuenciales.

Pero esto está disponible en uno de los lenguajes que estamos revisando.
La solución en Swift del desafío 2 (que pueden ver
[acá](//github.com/lnds/9d9l/tree/master/desafio2/swift)) usa algo muy
similar al seudo código.

```swift
    var reports = [ApiResult?]()
    for i in 1...cities.count {
       reports.append(nil)
    }
    let globalQueue = dispatch_get_global_queue(QOS_CLASS_USER_INITIATED, 0)
    dispatch_apply(cities.count, globalQueue) {
       i in 
      let index = Int(i)+2 // cities start from 2
      let city = cities[index]
     let rep = callApi(city, apiKey:apiKey)
       reports[Int(i)] = rep
    }
    // sort...
```

En Swift usamos [Grand Central Dispatch](//en.wikipedia.org/wiki/Grand_Central_Dispatch), que es un
modelo de concurrencia desarrollado por
Apple.

Lo que hacemos es crear una cola de tareas global (globalQueue). Sobre
esta cola despacharemos tareas (tasks). 

La función dispatch\_apply() es similar a la estructura de control par
for, ejecutará una clausura (el código entre { }) en forma concurrente.
Esta función se encarga de esperar que terminen todas las tareas.

La ventaja de este problema es que es muy fácil de paralelizar. Sólo
debemos tener cuidado de esperar que las descargas de información
finalicen antes de ordenar e imprimir el resultado. Es por esto que
podemos en nuestro for acceder al arreglo reports tranquilamente.

Pero las cosas no son tan sencillas si usamos otros lenguajes
tradicionales tendríamos que hacer algo del estilo (en seudo código):

    for city  in cities {
       task { city =>
         val report = callApi(city)
         lock(reports)
         reports[city] = report
          unlock(reports)
       }
    }
    wait_for_tasks()
    sortInPlace(reports)

Acá task es una suerte de thread o tarea que se ejecuta en forma
concurrente. Notar que tenemos que asegurar acceso exclusivo al arreglo
reports para actualizarlo y tenemos que invocar algún tipo de primitiva
que nos asegure que las tareas han finalizado (wait\_for\_tasks()).

## Las ventajas de la programación funcional concurrente

Pero veamos el problema con los ojos de la programación funcional. Este
problema tiene una forma clásica, conocida como map-reduce.

Funcionalmente lo que tenemos que hacer es mapear cada ciudad con su
reporte y luego ordenar (reducir).

En seudo código funcional, este problema se puede escribir así:

    print $ sort $ (map apiCall cities)

Esto es en realidad un seudo Haskell, que dice que debemos imprimir el
resultado de ordenar el mapping de ciudades a sus reportes (el reporte
se obtiene con la función apiCall).

Y para paralelizar esto simplemente hacemos:

    print $ sort $ (pmap apiCall cities)

La función pmap es un map pero ejecutado en paralelo.

{{<figure caption="Yaaaa ¿Otra vez????" src="//d2dspjyoh5c79p.cloudfront.net/b11f21f7-f750-11e5-a13c-3371c0364c63-aa9f18b7">}}

Sí, parece magia, pero las soluciones en
[Clojure](//github.com/lnds/9d9l/tree/master/desafio2/clojure) y
[Scala](//github.com/lnds/9d9l/tree/master/desafio2/scala) de este
problema son así de sencillas:

Scala:

```scala
    def parFetch(cities:List[String]) : Unit = {
      val reports = (cities.par map (city => apiCall(city))).toList
      printReports(reports)
    }
```

Clojure

```clojure
    ((print-weather (sort-reports (pmap weather-api r))))
```

Esta solución aparte de concisa nos permite abstraernos de las
sincronización y todas las complicaciones de la programación
concurrente. La inmutabilidad permite ver este problema como un flujo de
información que va pasando de función a función. La abstracción pmap es
el equivalente al par for en el mundo funcional.

Pero hay otra forma de resolver este problema y es con canales,
siguiendo el estilo
[CSP](//en.wikipedia.org/wiki/Communicating_sequential_processes) Communicating
Sequential Process (propuesto originalmente por Hoare en 1978).

Acá lo que hacemos es lo siguiente:


    ch := new_channel(type: Report)
    for _ := 0 to N-1 {
       city := cities[i]
       task { chan_put (ch, apiCall(city)) }
    }
    for _ := 0 to N-1 {
        report.append(chan_get(ch))
    }
    sort_in_place(report)
    print(report)

Piensen en el channel como una cola de mensajes. En este caso task { }
ejecuta una tarea de forma concurrente. Dentro de esta tarea colocamos
en el canal ch el resultado de invocar la API de OpenWeatherMap, usando
la primitiva chan\_put(). Esta es una operación que se ejecuta de forma
sincronizada. 

Posteriormente vaciamos esta cola de mensajes (el canal) usando la
primitiva chan\_get(), colocando cada mensaje (que corresponde al
reporte del clima) en una lista report.

Hay que notar que el orden en que sacamos los reportes del canal no
tiene por que coincidir con el orden en que ejecutamos las tareas. Es
decir, si el arreglo de ciudades contiene los valores {Boston, Santiago,
Madrid, Londres}, en el segundo loop podríamos obtener los reportes de
{Santiago, Londres, Boston, Madrid} o cualquier otro orden.

Esta es la forma en que resolvemos este problema en
[Go](//github.com/lnds/9d9l/blob/master/desafio2/go/weather.go) y
[Rust](//github.com/lnds/9d9l/tree/master/desafio2/rust).

Go:

```go
    ch := make(chan WeatherReport)
    for _, city := range cities {
        go fetch(city, ch) // fetch call api and put response in ch
    }
    for range cities {
        rep := <- ch
        reports = append(reports, rep)
    }
```

Rust:

```rust
    let (tx, rx) = mpsc::channel();
    for city in cities {
        let tx = tx.clone();
        let city = city.clone();
        thread::spawn(move || {
          let report = api_call(&city, &api_key);
          tx.send(report).unwrap();
        });
    }
    let mut reports : Vec<ApiResult> = Vec::with_capacity(cities.len());
    for _ in cities {
      let rep = rx.recv().unwrap();
      reports.push(rep);
    }
```

La solución en Rust tiene más "ruido" que la versión en Go debido a
las reglas de "borrowing" de este lenguaje, algo que veremos en
detalle en un artículo específico sobre este lenguaje.

## Cinco soluciones

En este artículo les he mostrado 5 soluciones de este problema:

Swift: en
[https://github.com/lnds/9d9l/blob/master/desafio2/swift](//github.com/lnds/9d9l/blob/master/desafio2/swift) 

Scala:
en [https://github.com/lnds/9d9l/blob/master/desafio2/scala](//github.com/lnds/9d9l/blob/master/desafio2/scala)

Clojure:
en [https://github.com/lnds/9d9l/blob/master/desafio2/clojure](//github.com/lnds/9d9l/blob/master/desafio2/clojure)

Go:
en [https://github.com/lnds/9d9l/blob/master/desafio2/go](//github.com/lnds/9d9l/blob/master/desafio2/go)

Rust:
en [https://github.com/lnds/9d9l/blob/master/desafio2/rust](//github.com/lnds/9d9l/blob/master/desafio2/rust)\

En la segunda parte de este artículo completaremos los otros lenguajes.

Espero sus comentarios y aportes.

Y para que amenicen este post les dejo Birdland de Weather Report, donde
pueden apreciar a Jaco Pastorius ejecutando dos tareas en paralelo ;) 

{{<youtube pqashW66D7o>}}
