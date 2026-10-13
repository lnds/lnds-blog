---
title: "How to get the weather report"
authors: [admin]
subtile: "9 challenges in 9 languages (2 of 9, part three)"
date: 2016-06-21T08:25:11-03:00
slug: "how-to-get-the-weather-report"
draft: false
tags: ['challenges', 'programming languages', 'programming', 'go', 'rust','erlang','haskell','scala','kotlin', 'clojure','fsharp','swift']
image:
  placement: 3
---

This article wraps up the description of the second challenge in this series
of nine.

Remember that the challenge [consists of building an application that
gets the weather for different cities, using the
[OpenWeatherMap.org](//www.openweathermap.org/) API. We built a
program that
receives a list of cities through the command line. This
program runs a query against the OpenWeatherMap.org site to get
the weather report for each of the cities. The result is
sorted in descending order, from the highest to the lowest temperature. The
program displays the following information for each city: the name,
the current temperature, the maximum and the minimum, plus the weather
conditions. Finally, the program must report the time spent
downloading the information. If the -p parameter is passed, the program runs the
query "in parallel" for each
city.

## The OpenWeatherMap.Org API

The API documentation is at the following
URL: <http://www.openweathermap.org/api](//www.openweathermap.org/api>.
There are several options; I used the one that gets the current state of the
weather: <http://www.openweathermap.org/current>.

To use this API you have to sign up on the site and get a
key in order to use it. Since this is private data, we define
an environment variable in the operating system where we will keep the
value of this key. This variable is called WEATHER\_API\_KEY. The way
to retrieve the value of this variable is quite simple in each
language:

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

In this case the env::var() function returns a value of type Result, which
is an algebraic type; the function can contain the value Ok(r) or
Err(E). The expect() method of the Result class evaluates the result: if it is
Ok(r) it returns r, otherwise it stops the program by calling the
panic function with the message "debe definir WEATHER\_API\_KEY.

**Swift**

```swift
    let apiKey = NSProcessInfo.processInfo().environment["WEATHER_API_KEY"]!
```

Note that there is a ! symbol at the end of the expression. That is because in the
enviroment array the elements are of type String?, that is, they can
contain a String or null. We want this value not to be null,
and we force that by putting the ! at the end. If the variable is not
defined the program will stop with an error.

**F\#**

```fsharp
    let api_key = Environment.GetEnvironmentVariable("WEATHER_API_KEY")
```

**Erlang**

```erlang
    -define(API_KEY, os:getenv("WEATHER_API_KEY")).
```

In this case it is a macro defined in the program's header.

**Haskell**

```haskell
    import System.Environment
    do  api_key <- getEnv "WEATHER_API_KEY"
```

**Kotlin**

```kotlin
    val apiKey = System.getenv("WEATHER_API_KEY")
```

Now an exercise: find out what happens when the environment variable
WEATHER\_API\_KEY is not defined and how each implementation reacts.

Remember that the code is available in my repository on
GitHub: [https://github.com/lnds/9d9l/tree/master/desafio2](//github.com/lnds/9d9l/tree/master/desafio2).

To try this out you need to get the API key from the
[OpenWeatherMap.Org](//openweathermap.org/api) site.

## Downloading a URL

The API can return the result in XML or JSON format. I chose the
XML option to explore how to process this format in different
languages. In another challenge further on we will see how to parse
information in JSON format.

Let's see how the API is called in each of the languages. First we will
focus on downloading the XML from a URL, then we will see how
to parse the XML.

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

In Go, error handling follows this convention:
along with the result, a variable is returned that indicates whether there was an error.
In this case, the http.Get(url) function returns nil if everything works
fine. The resp variable contains the status of the query and the body with
the information.

To get the XML we do: body, err := ioutil.ReadAll(resp.Body).

This leaves the whole text of the XML in body, which is then processed
by the ParseCurrentWeather function.

In hindsight, the way I implemented this in Go is not the best.
Can you rewrite the code so that it is closer to what is usual in
Go? If you're up for it, you can send a pull request.

**Clojure**


```clojure
    (defn parse-xml [source]
      (try (xml/parse source)
         (catch org.xml.sax.SAXParseException e {:tag :error :content "xml format"})
         (catch java.io.IOException e {:tag :io-error})
          (catch Exception e {:tag :general-error :content e})))
```

Here we kill two birds with one stone. The xml/parse function downloads an
XML text from a URL. Note that there is a try, since Clojure uses
Java functions, which throw exceptions when there are failures.

**Scala**

```scala
    val response = Try(Source.fromURL(url))
```

The Try class is an algebraic type, which returns Succes(xml) if there is no
problem downloading the XML from the URL. The other value will be Failure(e),
where e is the exception that was thrown.

**Rust**

For Rust we use a ***crate*** called Hyper:

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

Note that we handle both cases, failure (Err) and success (Ok), using
the match statement.

Here we use an object of the Client class to call the API.

**Swift**

```swift
    if let myURL = NSURL(string: url) { ... }
```

Here we use a Swift construct: if NSURL fails it will return nil, and if
that happens the body of the if will not run.

**F\#**

In the case of F\# we use a library called FSharp.Data

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

Much like in Go, the call to httpc:request returns the result
plus the response. If the response is correct (Res = ok), we analyze
Response, which we break down like this:

```erlang
     {{_,Code,_}, _, Body} = Response
```

Code is the code returned by the HTTP protocol (if it is a value below
400 there are no errors). In that case Body contains the text with the XML.

**Haskell**

```haskell
    import Network.HTTP

    api_call api_key city = 
        simpleHTTP (getRequest url) >>= getResponseBody
        where
            url = "http://api.openweathermap.org/data/2.5/weather?q="++city++"&mode=xml&units=metric&lang=sp&appid="++api_key
```

The call simpleHTTP (getRequest url) returns a monad of type  IO
(Result (Response ty)).  

The getResponseBody function is declared as:

```haskell
    getResponseBody :: Result (Response ty) -> IO ty 
```

since getResponseBody does not accept the type IO (Result (Response ty)), we use
the \>\>= operator, which basically takes the content out of the IO monad and
passes it to another function that returns an IO monad.

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

Kotlin is really just another way of using Java, so it is quite simple.
The difference is that URL in Java does not have the readText() method;
Kotlin extends that class with the readText() method.

## Parsing XML 

Parsing the XML is the most interesting part of this exercise,
so if you held out this far, now you will see something worth
your while, because it shows how each language reveals its unique
characteristics in the libraries that implement XML "*parsing*".

XML from the API

For future reference, this is an example of a result from calling
the API:

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

In Go we use the encoding/xml library

```go
    import "encoding/xml"

    type City struct {  Name string `xml:"name,attr"`    Country string `xml:"country"`}type Weather struct { Value string `xml:"value,attr"`}type Temperature struct {    Value float32 `xml:"value,attr"` Min float32 `xml:"min,attr"` Max float32 `xml:"max,attr"`}type Current struct {   XMLName xml.Name `xml:"current"` City City `xml:"city"`   Temperature Temperature `xml:"temperature"`  Weather Weather `xml:"weather"`}func ParseCurrentWeather(content []byte) (Current, bool) {  v := Current{}   err := xml.Unmarshal(content, &v)    if err != nil {      return v, false   }    return v, true}
```

In this case 4 structures are defined. Current contains the other 3
structures: City, Temperature, Weather. These are obtained from the
elements with the corresponding name. For example, the fragment:

```go
    City City `xml:"city"`
```

Indicates that the instance variable City is obtained from the city element
of the XML.

Then we use the xml.Unmarshal() function to turn the String with
the XML into an object of type Current. With this, getting the data we
need for our report is very easy.

**Clojure**

The xml/parse function returns a structure. To extract each element
of the XML we do:

```clojure
    (defn extract-tag [tag x]
      (first (filter #(= tag (:tag %)) (:content x))))
```

With this we define a function to get each attribute we
need:

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

In this case we use a DSL defined in scala.xml

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

This is quite simple compared with the two previous languages.

**Rust**

For this case we use a crate called treexml:

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

Document::parse() is the function that turns a stream of bytes into an
XML document. From there we use the object returned by this
function to get the elements we need.

Note how we turn Strings into floating point numbers.

The parse method of the str class infers the type it must convert to
from the left-hand side of the expression, because parse is declared
like this:

```rust
    fn parse<F>(&self) -> Result<F, F::Err> 
          where F: FromStr
```

It is a generic function. So, if s is of type str, then in
this expression:

```rust
    F v = s.parse().unwrap();
```

The compiler infers that the result must be of type F, but F must
implement the FromStr trait.

parse() returns a value of type Result. The unwrap() function, which
belongs to the Result enum, returns the Ok() value; if the value is Err()
it triggers a panic, stopping the program.

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

All this is inside a **do .. catch** block, since an
exception can be thrown given the try in the assignment to xmlDoc.

The rest of the code is fairly easy to work out. Note that we use
the **if let** construct again.

**F\#**

This is, for me, the simplest solution to implement. First
we define an XmlProvider type, passing it a string with the example of the XML
we want to
parse:

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

Then to get the data we do:


```fsharp
    let xml = Result.Parse(res)
    let name = xml.City.Name
    let temp = xml.Temperature.Value
    let max  = xml.Temperature.Max
    let min  = xml.Temperature.Min
    let cond = xml.Weather.Value
```

This is pretty "magical", thanks to the good design of the
FSharp.Data library.

**Erlang**

In this case we use functions from two modules: first
xmerl\_scan:string, which parses a string and turns it into an XML that
can be analyzed using xmerl\_xpath:string. Which uses the XPath
conventions to walk the XML.

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

Since xmerl\_xpath returns a more complex structure than we
need, I defined a helper function called extraer\_valor:

```erlang
    extraer_valor([], _) -> error;
    extraer_valor([{xmlAttribute,A,_,_,_,_,_,_,Value,_}|T], Attr) ->
        if A =:= Attr -> Value;
         A =/= Attr -> extraer_valor(T, Attr)
```

the xmerl\_xpath\>string function returns a list of elements, from
which we filter the ones of type xmlAttribute.

**Haskell**

This is the hardest implementation to understand, much more so than what
we just saw in Erlang.

This is the fragment that extracts the elements we need:

```haskell
     name val = (xmlRead "city" "name" $ val)
     temp val = read (xmlRead "temperature" "value" $ val) :: Float
     max val  = read (xmlRead "temperature" "max" $ val) :: Float
     min val  = read (xmlRead "temperature" "min" $ val) :: Float
     weather val = (xmlRead "weather" "value" $ val)
```

They make use of the xmlRead function, which is defined like this:


```haskell
    import Text.XML.Light
    xmlRead elem attr = 
      head . concatMap (map (fromJust.findAttr (unqual attr)) 
      . filterElementsName (== unqual elem)) . onlyElems . parseXML
```

This is a function that returns another function (using currying) whose
first two arguments are the name of the element we are looking for and the
attribute inside that element. The third argument will be the XML.

That is why when we do:

```haskell
    xmlRead "city" "name" $ val
```

What we do is apply the xmlRead function with the arguments "city" and
"name" to the XML val.

xmlRead is a composition; note the use of the dot operator (.) to
build a composed function. You have to read this from right to left.

parseXML parses the string and returns a data structure with the
description of the XML. Of this we only care about the elements, which
we get with the call to the onlyElems function.

From these elements we filter all the elements whose name is elem
using the filterElementsName function.

concatMap (map (fromJust.findAttr (unqual attr)) will search in depth
within these elements for the attributes that have the name we
care about.

Finally we select the first of these elements using head.

(In our case this list always has just one element, but we have to
use head anyway to extract just that value).

I suggest trying this code piece by piece in the Haskell REPL
to understand it. You can run cabal repl and try it.

**Kotlin**

Compared with the rest of the languages, the way of parsing XML in
Kotlin is boring, and low level, because we simply use the Java 1.8
API:

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

## Conclusions

To finish, these are the results in terms of lines of code
for each language, sorted from fewest to most:

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

Clearly some abstractions are better than others, and they don't depend
directly on the language, but on its ecosystem, its libraries and in
some cases the community. JVM-based languages also inherit
a lot of packaged functionality. I am sure the Kotlin solution
from scratch would have been much
longer.

Don't be fooled by how short the Haskell solution is. It is true
that it is as short as the F\# one, but it is much harder to
understand.

If Jorge Luis Borges had been a programmer he would have programmed in
Haskell, because just as in the Argentine writer's stories, in
Haskell we can write very few lines, but with an enormous density
of concepts. There are Borges stories just a few pages long that
pose a major intellectual challenge, and the same goes for
Haskell.]{style="letter-spacing: 0.01rem; line-height: 1.42857;"}

The case of F\# is interesting, and here the simplicity of the solution
matches the lines of code. The problem is that the way of
defining the XML parsing requires a concrete example of the XML, which
forces you to design a good example that covers many cases, something that
can be hard to achieve. I think the authors of FSharp.Data have
done a wonderful job, one that will stand out in the coming
challenges.

