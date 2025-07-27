---
title: "Chubascos de ligera intensidad"
authors: [admin]
subtile: "9 desafíos en 9 lenguajes  (2 de 9, segunda parte)"
date: 2016-05-31T08:25:11-03:00
slug: "chubascos-de-ligera-intensidad"
aliases: [/blog/lnds/2016/5/31/chubascos-de-ligera-intensidad]
draft: false
tags: ['desafíos', 'lenguajes de programación', 'programación', 'go', 'rust','erlang','haskell','scala','kotlin', 'clojure','fsharp','swift']
image:
  placement: 3
---
El plan original, bueno el plan modificado del original, era implementar
cada uno de los 9 desafíos en un mes. Pero la verdad es que he tenido un
inicio de año bastante ocupado y mi tiempo para dedicarle a este
proyecto se ha visto afectado. La primera parte de este desafío la
publiqué el 31 de marzo, así que me ha  tomado ¡[dos meses  completar el
desafío!

Si bien, no son tantas las horas efectivas dedicadas a resolver el
problema, la dificultad está en la dedicación para poder sentarme,
investigar y escribir el código. Espero poder retomar el ritmo de
publicación en los próximos desafíos.

Pero lo importante es terminar lo empezado, así que acá va la segunda
parte del [Reporte del Clima](/blog/lnds/2016/3/31/reporte-del-clima).

![Lee Sklar](//d2dspjyoh5c79p.cloudfront.net/ba9ce4db-25ed-11e6-a13c-3371c0364c63-aa9f18b7)

Leland Bruce "Lee" Sklar debe ser el más famoso de los bajistas menos
famosos del mundo del rock. De seguro lo han visto acompañando a
grandes artistas, como Phil Collins o Toto. ¡Ha participado en más de
2.000 álbumes!

Lee Sklar no tiene la fama de Pastorious, Flea o Geddy Lee, pero es un
bajista muy buen, por algo ha sido invitado a participar en más de 2.000
álbumes, y fue elegido por Toto para acompañarlos hace unos años
atrás.

Sklar es como los lenguajes que vamos a revisar a continuación, tienen
menos momentum, son conocidos por unos pocos entusiastas, son de nicho,
pero tienen características notables, que los hacen resaltar, aunque sea
por lo pintoresco (como la famosa barba de Sklar).

En la primera parte, resolvimos el problema de consultar el estado del
clima usando la API del sitio
[OpenWeatherMap.org](//openweathermap.org/). Para esto usamos como
lenguaje de implementación Scala, Go, Clojure, Rust y Swift. Los más
conocidos y usados de nuestra lista de 9
lenguajes.

En esta segunda parte vamos a revisar las soluciones en F\#, Haskell,
Erlang y Kotlin. En una tercera parte, que publicaré en una semana más,
 revisaré otros aspectos de este desafío (como la llamada a la API
usando HTTP, y el parsing de
Xml).

## Concurrencia en F\#

Si recuerdan, tenemos dos maneras de ejecutar el programa, de manera
secuencial y en paralelo, tal como lo describí en estos dibujos

{{<figure caption="Ejecución Secuencial" src="//d2dspjyoh5c79p.cloudfront.net/12e7677d-25f1-11e6-a13c-3371c0364c63-aa9f18b7">}}

{{<figure caption="Ejecución en Paralelo" src="//d2dspjyoh5c79p.cloudfront.net/eda1c73c-25f0-11e6-a13c-3371c0364c63-aa9f18b7">}}

Vimos que lenguajes como Clojure y Scala tienen una manera muy elegante
de realizar esto.

En Clojure:

```clojure
    ((print-weather (sort-reports (pmap weather-api r))))
```

En Scala:

```scala
    printReports (cities.par map (city => apiCall(city))).toList)
```

F\# utiliza la infraestructura de .Net para poder paralelizar tareas.

Primero veamos la forma secuencial de resolver nuestro problema:

```fsharp
    let seq_fetch cities = cities |> List.map api_call
```

Para paralelizar esta tarea hacemos simplemente:

```fsharp
    let par_fetch cities = cities |> List.map api_call_async  
                                  |> Async.Parallel |> Async.RunSynchronously  
                                  |> List.ofArray
```

Notar que en vez de llamar a la función api\_call, llamamos a
api\_call\_async. La diferencia entre ambas funciones es la siguiente

```fsharp
    let api_call city = api_call_n city 10

    let api_call_async city = async { return api_call_n city 10 }
```

la función api\_call\_n invoca la API para la ciudad que recibe como
parámetro. El número 10 corresponde a la cantidad máxima de reintentos
para llamar la api. Esta función retorna el reporte del clima para la
ciudad.

La diferencia es que api\_call\_async no ejecuta el código de inmediato,
este se ejecutará al pasar por Async.Parallel. La función
Async.RunSynchronously espera el resultado de la ejecución en paralelo y
lo entrega a List.ofArray (porque la función Async.Parallel nos entrega
un arreglo con los resultados.

Esto es más complejo que con Clojure o Scala, pero es simple y elegante.

## Concurrencia en Haskell

Las soluciones en Haskell son muy similares, la versión secuencial es
esta:

```haskell
    process_seq api_key args =
        do lreps <- reps
           print_reports $  sortBy cmp_rep lreps 
        where reps = mapM (make_report . (api_call api_key)) args 
```

La versión paralela es la siguiente:

```
    import qualified Control.Monad.Parallel as P

    ....

    process_par api_key args =
        do lreps <- preps
           print_reports $ sortBy cmp_rep lreps 
        where preps = P.mapM (make_report . (api_call api_key)) args
```

La diferencia está destacada en negritas.

La versión secuencial mapea la función compuesta (make\_report .
(api\_call api\_key) con args.

La versión paralela hace exactamente lo mismo, pero hace un mapeo en
paralelo usando Control.Monad.Parallel.

Para entender a profundidad este problema hay que dominar el concepto de
Monadas, pero intentaré simplificar la explicación.

Vamos primero por la versión secuencial:

La declaración de la función es:

```haskell
     process_seq api_key args =
```

Define una función que recibe la clave de la API y una lista de
argumentos args (la lista de  ciudades).

Luego ejecutamos lo siguiente usando un bloque do[^1]:

```haskell
     do lreps <- preps
        print_reports $ sortBy cmp_rep lreps
```

Lo primero es rescatar la lista de reportes en lreps, esta viene en la
variable preps que será definida por la sentencia where de más abajo.
Luego de rescatar la lista de reportes en lreps, los ordenamos usando la
función sortBy (que usa la función cmp\_rep, que compara reportes). La
lista ordenada es el argumento para función
print\_reports.

La sentencia where mapea la lista de ciudades a una lista
reportes:

```haskell
     where preps = mapM (make_report . (api_call api_key)) args
```

Dividamos esto paso a paso. Recordemos que args es la lista de
ciudades. Lo que tememos acá es equivalente a
esto:

```haskell
     map F cities
```

<div>

Acá F es una función compuesta: F = make\_report . (api\_call
api\_key)

El operador . permite componer funciones en Haskell, en general, si
tienes una función f y otra función g, entonces (f . g) x  es
equivalente a hacer (f (g
x).

¿Por qué usamos mapM en vez de map?

Porque api\_call retorna un valor de tipo IO String (esta es una
monada), la función make\_report recibe un argumento de tipo IO String y
retorna un valor de tipo IO WeatherReport
(otra monada). La función mapM es como la función map, pero opera con
listas de monadas.

En realidad mapM recibe algo del estilo \[m t\] y retorna m \[t\], es
decir, recibe una lista de monadas de T, y retorna una monada de una
lista de T.

La definición de mapM es:

```haskell
     mapM :: Monad m => (a -> m b) -> [a] -> m [b]
```

Esto explica por qué hacemos lreps \<- preps.\
La función sortBy requiere una lista pura, como preps es una monada que
contiene una lista, lo que hacemos con esta asignación es sacar la lista
fuera de la monada.

En general, si tenemos una monada *m v*, cuando hacemos *x* \<- *m v*,
asignamos *v* a *x*.

¿Qué es una monada? Es la pregunta común de quienes empiezan a aprender
Haskell.

¿Recuerdan cuando en el juego de toque y fama hicimos lo siguiente?

```haskell
    acc <- getLine
```

Lo que ocurre es que getLine no es una función pura, algo que no nos
gusta en Haskell, una función pura no tiene efectos laterales, pero
getLine es una función que interactúa con el mundo exterior, es lo que
se llama una acción destructiva
(ver [revelaciones](/lnds/2015/10/1/revelaciones)).
Haskell nos protege del mundo exterior a través de la monadas. En
particular la función getLine en vez de retornar un String lo que hace
es retornar una monada IO String.

A mi me gusta pensar en las monadas como en *cajas*. En Haskell para
conversar con el mundo exterior usamos estas cajas. La función getLine
retorna una *caja* que se llama IO cuyo contenido es un String.

Nuestro programa usa muchas monadas puesto que debe interactuar con el
sitio web de OpenWeatherMap, debe leer variables de ambiente del sistema
operativo, escribir en pantalla en reporte del tiempo, medir el tiempo
de ejecución de una función, etc.

Si no entienden mucho, no se preocupen, no traten de entender de
inmediato el concepto de monada, simplemente escriban varios programas
en Haskell que usen funciones de entrada/salida, como en este ejercicio,
todo irá calzando con el tiempo. De todas maneras, voy a escribir
después un post especial sobre Haskell donde explicaré este
concepto.

## Erlang

Erlang implementa el modelo de actores para ejecutar concurrencia. Lo
que haremos es crear actores que ejecutan sólo una acción.
Tradicionalmente un actor en Erlang se mantiene en un loop recibiendo
mensajes, en este caso sólo esperamos un mensaje y terminamos.

Veamos primero la versión síncrona

```erlang
    buscar_reportes_con_map(Ciudades) -> 
        lists:map(
          fun(Ciudad) ->
               Url = crear_url_api(Ciudad),
                {Xml,Error} = llamar_api(Url),
              extraer_reporte(Xml, Ciudad, Error)  
            end, Ciudades).
```

Es un simple mapeo de ciudades a reportes, usando una función declarada
inline. Esta función crea la Url, invoca la api y luego extrae el
reporte (que es el resultado).

 la versión asíncrona es así:

```erlang
    buscar_reportes_con_map_async(Ciudades) -> 
        ReqIds = lists:map(
         fun(Ciudad) ->
               Url = crear_url_api(Ciudad),
                {Ciudad,llamar_api_async(Url)}
           end, Ciudades),
     recolectar(ReqIds).
```

La versión asíncrona ejecuta una llamada asíncrona de la API. En este
caso mapeamos ciudades a los Id de los
actores.

Veamos como funciona la función llamar\_api\_async():

```erlang
    llamar_api_async(Url) -> spawn(?MODULE, async_api_call, [Url]).

    async_api_call(Url) ->  % io:format("llamando asincronamenete url: ~s\n", [Url]), % descomentar para convencerse que es asincrono
       {Xml,Error} = llamar_api(Url),
      receive 
            {From, get_result} -> From ! {xml, Xml, Error}
    end. 
```

La función llamar\_api\_async invoca a la primitiva spawn, esto crea un
actor que es atendido por la función
async\_api\_call(Url).

Este actor se queda esperando el mensaje get\_result. Cuando lo recibe
le envía el resultado al hacer *From ! {xml, Xml,
Error}.*

Para terminar de entender necesitamos ver la función recolectar:

```erlang
    recolectar([Llam|Llams]) -> 
      {Ciudad,ReqId} = Llam,
      ReqId ! {self(), get_result},
        receive
            {xml, Xml, Error} -> 
                [extraer_reporte(Xml, Ciudad, Error) | recolectar(Llams)]
        end;
    recolectar([]) -> [].
```

La función recolectar recibe una lista de handles de actores. Esta
función le envía un mensaje a cada
actor:

```erlang
     ReqId ! {self(), get_result}
```

El mensaje tiene dos partes, el identificador del proceso principal
(self()) y el átomo
get\_result.

Recordemos que cada actor responde con el mensaje {xml, Xml, Error}.En
este dibujo traté de explicar lo que pasa. El lado izquierdo inicializa
los actores (circulos pequeños de color verde). El lado derecho, explica
lo que ocurre después. En este caso se inicia enviando el mensaje
get\_result a cada actor creado. Cada actor responde con el resultado de
invocar la api {xml, Xml,
Error}.

![](//d2dspjyoh5c79p.cloudfront.net/666abcbe-2602-11e6-a13c-3371c0364c63-aa9f18b7)

## Kotlin

Con este lenguaje decidí usar un mecanismo similar a la solución en
Scala.

El código final es básicamente así:

```kotlin
    // Solución secuencial
    val reports = cities.map(::apiCall)
    printReports (reports)
```

La solución paralela quedó así:

```kotlin
    // Solución paralela
    val reports = cities.par().map(::apiCall)
    printReports(reports.unpar().toList())
    reports.executorService.shutdown()
```

En realidad Kotlin no tiene la primitiva par() para listas. Para
hacerlo usé código publicado
por Holger Brandl [acá](//github.com/holgerbrandl/kutils/blob/master/src/main/kotlin/kutils/ParCollections.kt).

Este código extiende las colecciones con la primitiva
par().

```kotlin

    /** A delegated tagging interface to allow for parallized extension functions */
    class ParCol<T>(val it: Iterable<T>, val executorService: ExecutorService) 
       : Iterable<T> by it

    /** Convert a stream into a parallel collection. */
    fun <T> Iterable<T>.par(numThreads: Int = Runtime.getRuntime().availableProcessors(),
                            executorService: ExecutorService = Executors.newFixedThreadPool(numThreads))
    : ParCol<T> {
        return ParCol(this, executorService);
    }

```

El código usa la clase ExecutorService de Java 8. Este es un servicio
que permite trabajar con threads y código
concurrente.

Entonces cuando hacer lista.par(), lo que hacemos es crear una
instancia de la clase ParCol que contiene la lista y le agrega un
ExecutorService.

Otra extensión que agregamos es la función map():

```kotlin
    fun <T, R> ParCol<T>.map(transform: (T) -> R): ParCol<R> {
        val destination = ArrayList<R>(if (this is Collection<*>) this.size else 10)
        val futures = this.asIterable().map { 
            executorService.submit { 
                destination.add(transform(it)) 
            } 
        }
        futures.map { it.get() } // this will block until all are done
        return ParCol(destination, executorService)
    }
```

Acá creamos una lista de futures que son los que aplican la función
transform() a cada elemento de la
colección.

Luego nos quedamos esperando la ejecución de cada uno de las llamadas a
transform().

La función map() crea finalmente una nueva instancia de la clase
ParCol, esta vez con el resultado de la computación de transform() sobre
todos los elementos de la colección
inicial.

Para recuperar el resultado usamos la función unpar(), que retorna la
lista contenida dentro de la instancia de ParCol.

```kotlin
    fun <T> ParCol<T>.unpar(): Iterable<T> {
        return this.it;
    }
```

Esta implementación nos da la pista de cómo poder implementar parmap en
Java 8. ¿Alguno se animaría a solucionar este desafío usando Java 8? Si
es así lo invito a agregar su propuesta mediante un pull request a mi
repositorio: <https://github.com/lnds/9d9l>](//github.com/lnds/9d9l)

Comparemos los resultados en Kotlin, para medir que tan eficiente es
esta solución:

    $ java -jar weather-1.0-SNAPSHOT-all.jar  Santiago Boston Londres Valdivia Antofagasta

    Boston              max: 32,0  min: 12,2   actual:  17,6 niebla
    Antofagasta         max: 17,0  min: 17,0   actual:  17,0 nubes rotas
    Valdivia            max: 12,0  min: 12,0   actual:  12,0 llovizna
    Santiago            max: 12,0  min: 12,0   actual:  12,0 chubasco de ligera intensidad
    Londres             max:  8,5  min:  8,5   actual:   8,5 nubes dispersas
    tiempo ocupado para generar el reporte:  0:00:1,372

En Paralelo:

    $ java -jar weather-1.0-SNAPSHOT-all.jar -p Santiago Boston Londres Valdivia Antofagasta
    Boston              max: 32,0  min: 12,2   actual:  17,6 niebla
    Antofagasta         max: 17,0  min: 17,0   actual:  17,0 nubes rotas
    Valdivia            max: 12,0  min: 12,0   actual:  12,0 llovizna
    Santiago            max: 12,0  min: 12,0   actual:  12,0 chubasco de ligera intensidad
    Londres             max:  8,5  min:  8,5   actual:   8,5 nubes dispersas
    tiempo ocupado para generar el reporte:  0:00:0,516

La versión secuencial en mi equipo toma 1,372 segundos, la versión
paralela demora 0,516 segundos (menos de la mitad del tiempo!).

Con esto terminamos la implementación de este desafío en 9 lenguajes.
Sólo para cerrar todo publicaré otro artículo con los detalles que no
cubrí, que corresponden a cómo descargar desde una URL (usando HTTP) y
parsear un archivo XML.

## Cuatro Soluciones

En este artículo he mostrado 4 soluciones adicionales a este problema.

F\#:
en [https://github.com/lnds/9d9l/tree/master/desafio2/fsharp](//github.com/lnds/9d9l/tree/master/desafio2/fsharp)

Haskell:
en [https://github.com/lnds/9d9l/tree/master/desafio2/haskell](//github.com/lnds/9d9l/tree/master/desafio2/haskell)

Erlang:
en [https://github.com/lnds/9d9l/tree/master/desafio2/erlang](//github.com/lnds/9d9l/tree/master/desafio2/erlang)

Kotlin:
en [https://github.com/lnds/9d9l/tree/master/desafio2/kotlin](//github.com/lnds/9d9l/tree/master/desafio2/kotlin)

**Notas**

[^1]: Los bloques do permiten ejecutar operaciones con las monadas, es
muy útil cuando usamos la monada IO, pero eso lo voy a explicar más
adelante.]{style="letter-spacing: 0.01rem; line-height: 1.5;"}

(\*) Imagen del título tomada de Wikipedia autor John Kerstholt, tomado
de [acá](//commons.wikimedia.org/wiki/File:Rolling-thunder-cloud.jpg).
