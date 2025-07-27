---
title: "Cómo obtener el reporte del clima"
authors: [admin]
subtile: "9 desafíos en 9 lenguajes  (2 de 9, tercera parte)"
date: 2016-06-21T08:25:11-03:00
slug: "como-obtener-el-reporte-del-clima"
aliases: [/blog/lnds/2016/5/31/como-obtener-el-reporte-del-clima]
draft: false
tags: ['desafíos', 'lenguajes de programación', 'programación', 'go', 'rust','erlang','haskell','scala','kotlin', 'clojure','fsharp','swift']
image:
  placement: 3
---

Este artículo termina la descripción del segundo desafío en esta serie
de nueve.

Recordemos que el desafío [consiste en construir una aplicación que
obtenga el clima de distintas ciudades, usando la API de
[OpenWeatherMap.org](//www.openweathermap.org/). Cnstruimos un
programa que
recibe a través de la línea de comandos una lista de ciudades. Este
programa ejecuta una consulta al sitio OpenWeatherMap.org para obtener
el informe del tiempo para cada una de las ciudades. El resultado queda
ordenado de forma descendente, desde la mayor a la menor temperatura. El
programa despliega la siguiente información por cada ciudad: el nombre,
la temperatura actual, la  máxima y la mínima más las condiciones del
clima. Finalmente el programa debe informa el tiempo ocupado para
descargar la información. Si se pasa el parámetro -p el programa hace la
consulta "en paralelo" para cada
ciudad.

## La API de OpenWeatherMap.Org

La documentación del la API se encuentra en la siguiente
URL: <http://www.openweathermap.org/api](//www.openweathermap.org/api>.
Hay varias opciones, yo usé la que permite obtener el estado actual del
clima: <http://www.openweathermap.org/current>.

Para ocupar esta API hay que inscribirse en el sitio y obtener una
clave (Key) para poder usarla. Como este es un dato privado, definimos
una variable de ambiente en el sistema operativo donde dejaremos el
valor de esta clave. Esta variable se llama WEATHER\_API\_KEY. La forma
de rescatar el valor de esta variable es bastante simple en cada
lenguaje:

**Go**

```go
    import "os"
     api_key := os.Getenv("WEATHER_API_KEY")
```

[**Clojure**:]

```clojure
    (def api-key (System/getenv "WEATHER_API_KEY"))
```

**Scala**:


```scala
    val api_key = sys.env("WEATHER_API_KEY")
```

**Rust**:  

```rust
    let api_key = env::var("WEATHER_API_KEY").expect("debe definir WEATHER_API_KEY");
```

En este caso la función env::var() retorna un valor de tipo Result, que
es un tipo algebraico, la función puede contener el valor Ok(r) o
Err(E). El método expect() de la clase Result evalúa el resultado, si es
Ok(r) retorna r, de lo contrario detiene el programa llamando a la
función panic con el mensaje "debe definir WEATHER\_API\_KEY.

**Swift**

```swift
    let apiKey = NSProcessInfo.processInfo().environment["WEATHER_API_KEY"]!
```

Notar que hay un símbolo ! al final de la expresión, esto porque en el
arreglo enviroment los elementos son de tipo String?, es decir, pueden
contener un String o null. Nosotros queremos que este valor no sea nulo,
y esto lo forzamos colocando el ! al final. Si la variable no está
definida el programa se detendrá con un error.

**F\#**

```fsharp
    let api_key = Environment.GetEnvironmentVariable("WEATHER_API_KEY")
```

**Erlang**

```erlang
    -define(API_KEY, os:getenv("WEATHER_API_KEY")).
```

En este caso es una macro que se define en el encabezado del programa.

**Haskell**

```haskell
    import System.Environment
    do  api_key <- getEnv "WEATHER_API_KEY"
```

**Kotlin**

```kotlin
    val apiKey = System.getenv("WEATHER_API_KEY")
```

Ahora un ejercicio, determina qué pasa cuando no se define la variable
de ambiente WEATHER\_API\_KEY y cómo reacciona cada implementación. 

Recuerda que el código está disponible en mi repositorio e en
GitHub: [https://github.com/lnds/9d9l/tree/master/desafio2](//github.com/lnds/9d9l/tree/master/desafio2).

Para probar esto se debe obtener la API Key en el sitio
[OpenWeatherMap.Org](//openweathermap.org/api).

## Descarga de una URL

La API puede retornar el resultado en formato XML o JSON. Elegí la
opción XML para explorar como procesar este formato en distintos
lenguajes. En otro desafío más adelante veremos como analizar
información en formato JSON. 

Veamos como se ejecuta la API en cada uno de los lenguajes, primero nos
concentraremos en descargar el XML desde una URL, después veremos cono
analizar el XML.

**Go**

```go
    resp, err := http.Get(url)
    if err == nil {
       defer resp.Body.Close()
       body, err := ioutil.ReadAll(resp.Body)
       if err == nil {
          weather, success := ParseCurrentWeather(body)
          ....
```

En Go el manejo de errores se hace mediante la siguiente convención,
junto con el resultado se retorna una variable que indica si hubo error.
En este caso, la función http.Get(url) retorna nil si todo funciona
bien. La variable resp contiene el estado de la consulta y el cuerpo con
la información.

Para obtener el XML hacemos: body, err := ioutil.ReadAll(resp.Body).

Esto deja en body todo el texto del XML, el que es procesado después
por la función ParseCurrentWeather.

En retrospectiva la forma en que implementé esto en Go no es la mejor,
¿puedes re escribir el código de modo que sea más adecuado a lo usual en
Go? Si te animas, puedes hacer un pull request.

**Clojure**


```clojure
    (defn parse-xml [source]
      (try (xml/parse source)
         (catch org.xml.sax.SAXParseException e {:tag :error :content "xml format"})
         (catch java.io.IOException e {:tag :io-error})
          (catch Exception e {:tag :general-error :content e})))
```

Acá matamos dos pájaros de un tiro. La función xml/parse descarga un
texto xml desde una url. Notar que hay un try, puesto que Clojure usa
funciones de Java las que producen excepciones cuando hay fallos.

**Scala**

```scala
    val response = Try(Source.fromURL(url))
```

La clase Try es un tipo algebraico, que retorna Succes(xml) si no hay
problema al descargar el Xml desde la url. El otro valor será Failure(e)
donde e es la excepción que se produce.

**Rust**

Para Rust usamos un ***crate*** llamado Hyper:

```rust
    extern crate hyper;
    let client = Client::new();
    match client.get(&url).header(Connection::close()).send() {
       Err(_) => ...,
       Ok(mut req) => {                
         let mut body = String::new();
         req.read_to_string(&mut body).unwrap();
         match Document::parse(body.as_bytes()) {
              ....
```

Notar que manejamos los dos casos, la falla (Err) y el éxito (Ok) usando
la sentencia match.

Acá usamos un objeto de la clase Client para llamar a la API.

**Swift**

```swift
    if let myURL = NSURL(string: url) { ... }
```

Acá usamos una construcción de Swift, si NSURL falla retornará nil, si
eso pasa el cuerpo del if no se ejecutará.

**F\#**

En el caso de F\# usamos una biblioteca llamada FSharp.Data

```fsharp
    open FSharp.Data
    open FSharp.Data.HttpRequestHeaders
    let res = Http.RequestString("http://api.openweathermap.org/data/2.5/weather", 
                            httpMethod = "GET", query=["q", city; "mode", 
                            "xml"; "units", "metric"; "lang", "sp"; "appid", api_key],
                            headers = [Accept HttpContentTypes.Xml])
```

**Erlang**

```erlang
    llamar_api(Url, N) ->
      {Res, Response} = httpc:request(get, {Url,[]}, [{timeout,1000}], []),
       case Res of
         ok -> {{_,Code,_}, _, Body} = Response,
                  if Code < 400-> {Body, ""};
                   Code > 399 -> {[], "Error consultando API, revise api key"}
               end;
         error ->
          if N =:= 0 -> {[], "Api no disponible"};
            N > 0 -> ...
           end
        end.
```

De manera similar a Go, la llamada a httpc:request devuelve el resultado
más la respuesta. Si la respuesta es correcta (Res = ok), analizamos
Response, el que descomponemos de este modo:

```erlang
     {{_,Code,_}, _, Body} = Response
```

Code es el código que retorna el protocolo HTTP (si es un valor menor a
400 no hay errores). En ese caso Body contiene el texto con el XML.

**Haskell**

```haskell
    import Network.HTTP

    api_call api_key city = 
        simpleHTTP (getRequest url) >>= getResponseBody
        where
            url = "http://api.openweathermap.org/data/2.5/weather?q="++city++"&mode=xml&units=metric&lang=sp&appid="++api_key
```

La llamada simpleHTTP (getRequest url) retorna una monada  de tipo  IO
(Result (Response ty)).  

La función getResponseBody es declarada como:

```haskell
    getResponseBody :: Result (Response ty) -> IO ty 
```

como getResponseBody no acepta de tipo IO (Result (Response ty)) usamos
el operador \>\>= que basicamente saca de la monada IO el contenido y lo
pasa a otra función que retorna una monada IO.

```haskell
    (>>=) :: (Monad m) => m a -> (a -> m b) -> m b  
```

**Kotlin**

```kotlin
    import kotlin.io.*
    try {
        val req = URL(url)
        val rsp = req.readText()
        return parseApiResponse(city, rsp)
    } catch (e:Exception) {
                ...
    }
```

Kotlin en realidad otra manera de usar Java, así que es bastante simple.
La diferencia es que URL en Java no tiene el método readText(), este
amplía esa clase con el método readText().

## Analizando XML 

El análisis, o parsing de XML es lo más interesante de este ejercicio,
así que si resististe hasta este punto ahora verás algo que vale la
pena, porque muestra cómo cada lenguaje revela sus características
únicas en las bibliotecas que implementan el "*parsing*" de XML.

XML de la API

Para futuras referencias este es un ejemplo de un resultado al llamar a
la API:

    <current>
       <city id="4930956" name="Boston">
          <coord lon="-71.06" lat="42.36"/>
          <country>US</country>
          <sun rise="2016-04-03T10:21:21" set="2016-04-03T23:13:38"/>
       </city>
       <temperature value="1.24" min="-2.0" max="9.0" unit="metric"/>
       <humidity value="31" unit="%"/>
       <pressure value="1017" unit="hPa"/>
       <wind>
         <speed value="6.2" name="Moderate breeze"/>
         <gusts value="8.7"/>
         <direction value="350" code="" name=""/>
       </wind>
       <clouds value="1" name="clear sky"/>
       <visibility/>
       <precipitation value="0.2" mode="rain" unit="1h"/>
       <weather number="500" value="lluvia ligera" icon="10d"/>
       <lastupdate value="2016-04-03T15:35:32"/>
    </current>

**Go**

En go usamos la biblioteca encoding/xml

```go
    import "encoding/xml"

    type City struct {  Name string `xml:"name,attr"`    Country string `xml:"country"`}type Weather struct { Value string `xml:"value,attr"`}type Temperature struct {    Value float32 `xml:"value,attr"` Min float32 `xml:"min,attr"` Max float32 `xml:"max,attr"`}type Current struct {   XMLName xml.Name `xml:"current"` City City `xml:"city"`   Temperature Temperature `xml:"temperature"`  Weather Weather `xml:"weather"`}func ParseCurrentWeather(content []byte) (Current, bool) {  v := Current{}   err := xml.Unmarshal(content, &v)    if err != nil {      return v, false   }    return v, true}
```

En este caso se definen 4 estructuras. Current contiene las otras 3
estructuras: City, Temperature, Weather. Estos se obtienen de los
elementos con el respectivo nombre. Por ejemplo, el fragmento:

```go
    City City `xml:"city"`
```

Indica que la variable de instancia City se obtiene del elemento city
del xml.

Luego usamos la función xml.Unmarshal() para transformar el String con
el xml en un objeto de tipo Current. Con esto obtener los datos que
necesitamos para nuestro reporte es muy sencillo.

**Clojure**

La función xml/parse retorna una estructura. Para extraer cada elemento
del XML hacemos:

```clojure
    (defn extract-tag [tag x]
      (first (filter #(= tag (:tag %)) (:content x))))
```

Con esto definimos una función para obtener cada atributo que
necesitamos:

```clojure
    (defn max-temp [x]
     (let [t (extract-tag :temperature x)]
           (double (read-string (:max (:attrs t))))))
    (defn min-temp [x]
        (let [t (extract-tag :temperature x)]
           (double (read-string (:min (:attrs t))))))
    (defn temp [x]
        (let [t (extract-tag :temperature x)]
           (double (read-string (:value (:attrs t))))))
    (defn city [x]
      (let [c (extract-tag :city x)]
          (:name (:attrs c))))
    (defn conditions [x]
        (let [w (extract-tag :weather x)]
           (:value (:attrs w))))
```

**Scala**

En este caso usamos un DSL definido en scala.xml

```scala
    import scala.xml._
    val current = xml \\ "current"
    if (current.isEmpty)
          Error("error parsing xml response", city)
    else {
          val city = xml \\ "city" \ "@name"
          val temp = xml \\ "temperature" \ "@value"
          val min  = xml \\ "temperature" \ "@min"
          val max  = xml \\ "temperature" \ "@max"
          val weather = xml \\ "weather" \ "@value"
    ...
        }
```

Esto es bastante simple comparado con los dos lenguajes anteriores.

**Rust**

Para este caso usamos un crate llamado treexml:

```rust
    extern crate treexml;
    use treexml::Document;
    match Document::parse(body.as_bytes()) {
       Err(_) => ...,
       Ok(doc) => {
          let root = doc.root.unwrap();
          let temp = root.find_child(|tag| tag.name == "temperature").unwrap().clone();
          let weather = root.find_child(|tag| tag.name == "weather").unwrap().clone();
          let min_temp: f32= temp.attributes["min"].parse().unwrap();
          let max_temp: f32= temp.attributes["max"].parse().unwrap();
          let cur_temp: f32= temp.attributes["value"].parse().unwrap();
          ...
    }
```

Document::parse() es la función que convierte un stream de bytes en un
documento xml. A partir de ahí usamos el objeto retornado por esta
función para poder obtener los elementos que necesitamos.

Notar como transformamos Strings en números de punto flotante.

El método parse de la clase str infiere el tipo al que debe convertirse
a partir del lado izquierdo de la expresión, porque parse se declara de
este modo:

```rust
    fn parse<F>(&self) -> Result<F, F::Err> 
          where F: FromStr
```

Es una función genérica. De este modo, si s es de tipo str entonces en
esta expresión:

```rust
    F v = s.parse().unwrap();
```

El compilador infiere que el resultado debe ser de tipo F, pero F debe
implementar el trait FromStr. 

parse() retorna un valor de tipo Result. La función unwrap() que
pertenece a la enum Result, retorna el valor Ok(), si el valor es Err()
genera un panic, deteniendo el programa. 

**Swift**

```swift
    let xmlDoc = try NSXMLDocument(contentsOfURL: myURL, options:0)
    if let root = xmlDoc.rootElement() {
      let cityName = root.elementsForName("city")[0].attributeForName("name")!.stringValue!
      let temp = (root.elementsForName("temperature")[0].attributeForName("value")!.stringValue! as NSString).doubleValue
      let max  = (root.elementsForName("temperature")[0].attributeForName("max")!.stringValue! as NSString).doubleValue
      let min  = (root.elementsForName("temperature")[0].attributeForName("min")!.stringValue! as NSString).doubleValue
      let weatherConds = root.elementsForName("weather")[0].attributeForName("value")!.stringValue!
```

Todo esto está dentro de un bloque **do .. catch**, puesto que se puede
producir una excepción dado el try que está en la asignación a xmlDoc.

El resto del código es bastante fácil de deducir. Notar que volvemos a
usar la construcción **if let.**

**F\#**

Esta es, para mi, la solución más simple de implementar, primero
definimos un tipo XmlProvider pasándole un string con el ejemplo del XML
que queremos
analizar:

```fsharp

    type Result = XmlProvider<"""<current>
                                <city id="4930956" name="Boston">
                                <coord lon="-71.06" lat="42.36"/>
                                <country>US</country>
                                <sun rise="2016-04-03T10:21:21" set="2016-04-03T23:13:38"/>
                                </city>
                                <temperature value="1.24" min="-2.0" max="9.0" unit="metric"/>
                                <humidity value="31" unit="%"/>
                                <pressure value="1017" unit="hPa"/>
                                <wind>
                                <speed value="6.2" name="Moderate breeze"/>
                                <gusts value="8.7"/>
                                <direction value="350" code="" name=""/>
                                </wind>
                                <clouds value="1" name="clear sky"/>
                                <visibility/>
                                <precipitation value="0.2" mode="rain" unit="1h"/>
                                <weather number="500" value="lluvia ligera" icon="10d"/>
                                <lastupdate value="2016-04-03T15:35:32"/>
                                </current>
                            """> ///"""
```

Luego para obtener los datos hacemos:


```fsharp
    let xml = Result.Parse(res)
    let name = xml.City.Name
    let temp = xml.Temperature.Value
    let max  = xml.Temperature.Max
    let min  = xml.Temperature.Min
    let cond = xml.Weather.Value
```

Esto es bastante "mágico", gracias al buen diseño de la biblioteca
FSharp.Data.

**Erlang**

En este caso usamos las funciones de dos módulos, primer
xmerl\_scan:string que analiza un string y la convierte en un Xml que
puede ser analizado usando xmerl\_xpath:string. Que usa las convenciones
de XPath para recorrer el xml.

```erlang
    extraer_reporte(Xml, _, _) ->
       {Root,_} = xmerl_scan:string(Xml),
      Ciudad = extraer_valor(xmerl_xpath:string("//city/@*", Root), name),
        TempAttrs = xmerl_xpath:string("//temperature/@*", Root),
       %% truco para el caso en que la temperatura es entera
       {Temp,_} = string:to_float(extraer_valor(TempAttrs, value) ++ ".0"),
        {Max,_} = string:to_float(extraer_valor(TempAttrs, max) ++ ".0"),
       {Min,_} = string:to_float(extraer_valor(TempAttrs, min) ++ ".0"),
       Cond = extraer_valor(xmerl_xpath:string("//weather/@*", Root), value),
      {ok,Ciudad,Temp,Max,Min,Cond}.
```

Como xmerl\_xpath retorna una estructura más compleja de lo que
necesitamos, definí una función auxiliar que se llama extraer\_valor:

```erlang
    extraer_valor([], _) -> error;
    extraer_valor([{xmlAttribute,A,_,_,_,_,_,_,Value,_}|T], Attr) ->
        if A =:= Attr -> Value;
         A =/= Attr -> extraer_valor(T, Attr)
```

la función xmerl\_xpath\>string retorna una lista de elementos, de los
cuales filtramos los que son de tipo xmlAttribute. 

**Haskell**

Esta es la implementación más dificil de entender, mucho más que lo que
acabamos de ver en Erlang.

Este es el fragmento que extrae los elementos que necesitamos:

```haskell
     name val = (xmlRead "city" "name" $ val)
     temp val = read (xmlRead "temperature" "value" $ val) :: Float
     max val  = read (xmlRead "temperature" "max" $ val) :: Float
     min val  = read (xmlRead "temperature" "min" $ val) :: Float
     weather val = (xmlRead "weather" "value" $ val)
```

Hacen uso de la función xmlRead que se define así:


```haskell
    import Text.XML.Light
    xmlRead elem attr = 
      head . concatMap (map (fromJust.findAttr (unqual attr)) 
      . filterElementsName (== unqual elem)) . onlyElems . parseXML
```

Esta es una función que retorna otra función (usando currying) cuyos dos
primeros argumentos son el nombre del elemento que estamos buscano y el
atributo dentro de ese elemento. El tercer argumento será el xml.

Por eso cuando hacemos:

```haskell
    xmlRead "city" "name" $ val
```

Lo que hacemos es aplicar la función xmlRead con argumentos "city" y
"name" al xml val.

xmlRead es una composición, notar el uso del operador punto (.) para
armar una función compuesta. Esto hay que leerlo de derecha a izquierda.

parseXML analiza el string y devuelve una estructura de datos con la
descripción del xml. De esto solo nos interesan los elementos, lo que
hacemos con la llamada a la función onlyElems. 

De estos elementos filtramos todos los elementos cuyo nonbre sea elem
usando la función filterElementsName. 

concatMap (map (fromJust.findAttr (unqual attr)) buscará en profundidad
dentro de estos elementos los atributos que tengan el nombre que nos
interesa.

Finalmente seleccionamos el primero de estos elementos usando head.

(En nuestro caso esta lista siempre tiene sólo un elemento, pero debemos
usar head de todas maneras para extraer sólo ese valor).

Yo sugiero probar este código parte por parte usando el REPL de haskell
para entenderlo. Pueden hacer cabal repl y probar.

**Kotlin**

Comparado con el resto de los lenguajes, la manera de analizar el XML en
Kotlin es aburrida, y de bajo nivel, porque simplemente usamos la API de
Java 1.8:

```kotlin
    val factory = DocumentBuilderFactory.newInstance()
    val builder = factory.newDocumentBuilder()
    val xmlStrBuilder = StringBuilder()
    xmlStrBuilder.append(response)
    val str = xmlStrBuilder.toString()
    val bytes = str.toByteArray(Charset.forName("UTF-8"))
    val input = ByteArrayInputStream(bytes)
    val doc = builder.parse(input)
    val root = doc.documentElement
    val cityName = root.getElementsByTagName("city").item(0).attributes.getNamedItem("name").textContent
    val temp = root.getElementsByTagName("temperature").item(0).attributes.getNamedItem("value").textContent
    val min = root.getElementsByTagName("temperature").item(0).attributes.getNamedItem("min").textContent
    val max = root.getElementsByTagName("temperature").item(0).attributes.getNamedItem("max").textContent
    val conditions = root.getElementsByTagName("weather").item(0).attributes.getNamedItem("value").textContent
```

## Conclusiones

Para terminar, estos son los resultados en términos de líneas de código
para cada lenguaje, ordenados de menos a más:

    | F#      |  77 |
    |---------|-----|
    | Haskell |  87 |
    | Clojure |  87 |
    | Erlang  |  90 |
    | Swift   |  93 |
    | Scala   | 101 |
    | Rust    | 120 |
    | Go      | 127 |
    | Kotlin  | 139 |

Claramente hay abstracciones mejores que otras y estas no dependen
directamente del lenguaje, sino de su entorno, sus bibliotecas y en
algunos casos la comunidad. Los lenguajes basados en JVM heredan también
muchas funcionalidades empaquetadas. Estoy seguro que la solución en
Kotlin desde cero habría sido mucho más
larga.

No hay que engañarse por lo breve de la solución de Haskell, es cierto
que es tan breve como la de F\#, pero es mucho más compleja de
entender. 

Si Jorge Luis Borges hubiera sido programador habría programado en
Haskell, porque al igual que los cuentos del escritor argentino, en
Haskell podemos escribir muy pocas lineas, pero con una enorme densidad
de conceptos. Hay cuentos de Borges de muy pocas páginas pero que
presentan un desafío intelectual mayor, lo mismo pasa con
Haskell.]{style="letter-spacing: 0.01rem; line-height: 1.42857;"}

El caso de F\# es interesante y en este caso la simpleza de la solución
está a la par de las lineas de código. El problema es que la manera de
definir el parsing de XML requiere un ejemplo concreto del XML, esto
obliga a diseñar un buen ejemplo para cubrir muchos casos, algo que
puede ser difícil de lograr. Creo que los autores de FSharp.Data han
realizado un maravilloso trabajo, que se va a destacar en los próximos
desafíos.

