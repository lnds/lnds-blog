---
title: "Red Barchetta"
authors: [admin]
sub_title: "9 desafíos en 9 lenguajes (4 de 9) parte 4"
date: 2017-09-24T08:25:11-03:00
slug: "red-barcheta"
aliases: [/blog/lnds/2017/9/24/red-barcheta]
draft: false
tags: ['desafios', 'lenguajes nuevos', 'lenguajes', 'lenguajes de programación', 'programación', 'rock', 'rust', 'programación funcional']
image:
  placement: 3
---

> *My uncle has a country place*\
> *That no one knows about*\
> *He says it used to be a farm*\
> *Before the Motor Law*

Red Barchetta es la segunda canción del álbum de 1981 "Moving
Pictures" de la banda canadiense Rush. Narra una historia de ciencia
ficción, en un mundo futuro donde los automóviles al parecer están
prohibidos.

La leyenda cuenta que Neil Peart simplemente adaptó un cuento del
escritor Richard S. Foster titulado "A Nice Morning Drive", publicado
en la revista [Road and Track](http://www.roadandtrack.com/) en 1973.
Peart quizo contactar al autor, pero en Road and Track ya no tenían los
datos de contacto de Foster, así que agregó al final de la letra en el
álbum la frase: "Inspired by 'A Nice Morning Drive' by Richard S.
Foster".

En 1996, cuando ya había internet, Richard S. Foster encuentra una copia
de su trabajo en una página de fans de Rush. Recién ahí Foster hizo la
conexión de la canción con su historia, a pesar de haberla escuchado
muchas veces en la radio.

Lo curioso es que Richard S. Foster era un fan de las motocicletas, y
en una convención en 2006, un amigo le habla del libro de Neil Peart
"Ghost Rider", una obra que narra el viaje curativo del baterista tras
la dramática pérdida de su esposa e hija, un recorrido de más de 150.000
kilómetros en motocicleta. Se trata de un diario de ruta, en que vemos
cómo poco a poco, kilómetro a kilómetro, Neil Peart se va curando del
dolor, la rabia y la pena de haber perdido a las mujeres más importantes
en su vida ([de esto ya hemos hablado antes](/blog/lnds/2012/01/14/album-conceptual)).

Foster leyó el libro y lo encontró muy emotivo, así que en diciembre de
2006 decidió escribirle una carta a Peart, explicándole que él era el
autor de 'Nice Morning Drive'. El escritor no tenía muchas esperanzas
de que la carta llegara a manos del famoso rockero, dada la cantidad de
correspondencia que la banda recibía, pero en enero recibió un paquete
con una copia con una dedicatoria del siguiente libro de Peart,
"RoadShow", más una larga carta.

Aparte de que ambos compartían el amor por las motocicletas y eran
orgullosos propietarios del mismo modelo, habían muchas similaridades
entre ambas personalidades.

Con esto empezó una amistad por e-mail hasta que recibió una invitación
para unirse en un "ride" durante el tour de "Snakes and Arrows" de
2007. Cuando por fin se encontraron en persona Foster le entregó al
baterista una copia autografiada de Noviembre de 1973 de Road and
Track[^5].

{{<figure caption="Foster y Peart" src="https://d2dspjyoh5c79p.cloudfront.net/363da275-a16f-11e7-a030-2b5831f8ecb5-aa9f18b7" >}}

## Rust

> *Wind In my hair*\
> *Shifting and drifting*\
> *Mechanical music*\

Esta es la cuarta parte del cuarto desafío, en esta serie sobre esos
"raros lenguajes nuevos". Es el turno de Rust, el lenguaje más cercano
a la máquina de los nueve lenguajes oficiales que comprenden este
desafío.

Rust es un lenguaje de programación de sistemas.

Amo los lenguajes de programación de sistemas.

Cuando empecé mi carrera profesional escribía interfaces para PLCs
(Programmable Logic Controllers) y módulos para aplicaciones SCADA
(Supervisory Control An Data Acquisition). Sensores de temperatura,
contaminantes, circuitos lógicos que activaban alarmas, abrían puertas o
activaban robots ensacadores de cemento.

Todo lo escribíamos en C o C++. Recuerdo en particular una ocasión en
que construí un sistema de réplica de base de datos de tiempo real, un
sistema altamente concurrente en C++ y una historia de debugging que ya
conté antes: <https://www.lnds.net/blog/lnds/2010/08/21/historias-de-depuracion>

Si tuviera que hacer algo así en estos días, sin duda elegiría Rust (por
sobre Go, pero ya hablaré de Go).

En el capítulo 1 de "Programming Rust"[^4], de Jim Blandy y Jason
Orendorff, los autores explican por qué Rust:

> "Los lenguajes de programación de sistemas han recorrido un largo
> camino en los cincuenta años desde que empezamos a usar lenguajes de
> alto nivel para escribir sistemas operativos, pero dos problemas en
> particular han probado ser dificiles de superar:
>
> \- Es difícil escribir código seguro. Es especialmente dificil manejar
> memoria correctamente en C y C++. Los usuarios han sufrido las
> consecuencias por décadas, en la forma de agujeros de seguridad que
> datan desde tan antaño como el Morris Worm de 1988.
>
> \- Es muy difícil escribir código multi hebras, la que es la única
> forma de explotar las habilidades de las máquinas modernas. Aún los
> programadores experimentados se aproximan al código multi hebra con
> precaución: la concurrencia puede introducir una nueva clase de
> errores y volver a los errores ordinarios más difíciles de
> reproducir."

El objetivo de Rust es ser un lenguaje seguro para administrar memoria y
la programación concurrente, con el desempeño de C y C++.

## Rust es Rush

> Ride like the wind\
> Straining the limits\
> Of machine and man\
> Laughing out loud with fear and hop

Rust es un lenguaje de programación de sistemas, cercano a la máquina,
pero además es un lenguaje complejo. Complejo como *"La Villa
Strangiato", Jacob's Ladder o Natural Science*. En otras palabras,
aproximarse a *"Tom Sawyer"* o *"The Trees"*, es un desafío mayor
para cualquier baterista aficionado. Para qué hablar de las lineas de
bajo en YYZ.

Aprender a programar en Rust es un desafío mayor para cualquiera, si no
han programado algo en C++ o Java, en mi opinión les va a
costar.

Rust es un lenguaje que es además una amalgama de varios paradigmas y
tecnologías modernas en teoría de compiladores y lenguajes. Siempre he
pensado que Rush es un gran antologista de las distintas épocas del
rock. Es decir, el Rush de los 70 está muy influenciado por The Who, Led
Zepellin, el Rush de los 80 por Yes, Genesis, y el New Wave, y así.

No me entiendan mal, Rush es una banda muy influyente,  pero también
selecciona lo mejor de lo que está sonando en cada época, lo adapta y en
algunos casos mejora, para entregar un producto original y potente.

Rust tiene las siguientes características de los lenguajes modernos:

> - No hay null en Rust \\o/
> - Elementos de programación funcional (monads, como maps y
> option)
> - Strong Typing y sobretodo Type Safety
> - Tipos de datos Algebraicos y Tuplas
> - Pattern matching para tipos
> - Traits y polimorfismo, pero sin herencia ni
> clases
> - Las variables son inmutables por defecto
> - Tipos de punteros inteligentes
> - Modo unsafe para escribir código directo a la máquina pero
> asumiendo como programadores el riesgo
> - No hay garbage collection, pero tampoco hay que preocuparse de
> pedir o liberar memoria (no hay memory leaks)

Lo más interesante para mi es lo último, es un lenguaje donde no te
preocupas de pedir ni liberar memoria, lo que parece casi milagroso,
esta es una particularidad bien potente de Rust, pero tiene un precio,
una complejidad y mayor verbosidad en el código, más la necesidad de
entender bien el concepto de ownership.

Esto limita al lenguaje en expresividad desde la perspectiva de alguien
acostumbrado a la programación orientada al objeto, pero a cambio
obtenemos código más seguro y
robusto.

Cuando empiezas a aprender Rust descubres que lidias mucho tiempo con el
compilador, el que afortunadamente es muy bueno y te orienta muy bien.
Para muchos programadores, que llevan varias horas usando Rust, esta
lucha con el compilador significa que las horas de depuración se han
reducido drásticamente, y les creo (ver:
<https://www.quora.com/What-do-C-C++-systems-programmers-think-of-Rust/answer/Mitchell-Nordine>).

## Huffman en Rust

Recordemos que en este desafío no queremos usar las estructuras de datos
que ya tiene el lenguaje. Así que revisemos como lidiamos con el Heap
(cola de prioridad).

Primero declaramos nuestro TDA:

```rust
struct Heap {
     data: Vec<Option<Tree>>,
     last: usize
}
```

En Rust los miembros de una estructura son todos privados, así que si
bien el cliente puede crear un Heap, no puede acceder a sus elementos,
para operar con nuestro TDA, usamos algunos métodos que definimos
mediante impl.

Fíjense que data es un vector de ```Option\<Tree\>```, es decir, tiene
elementos que pueden o no tener un Tree.

Option es un tipo algebraico que en Rust es más o menos así:

```rust
enum Option<T> {
     None,
     Some(T)
}
```

Esto permite implementar la monad Option, que existe en otros lenguajes
como Scala, Swift o Haskell. Esto evita usar punteros null para indicar
la falta de un elemento en nuestro vector.

La implementación de los métodos de Heap se declaran acá:

```rust
impl Heap {
     pub fn new(size:usize) -> Heap {
          Heap { data : vec![None;size+1], last : 0 }
     }

     pub fn insert(&mut self, elem:Tree) {
          self.last += 1;
          self.data[self.last] = Some(elem);
          let mut j = self.last;
          while j > 1 {
               if freq(&self.data[j]) < freq(&self.data[j/2]) {
                    self.data.swap(j, j/2);
               } 
               j /= 2;
          }
     }

     pub fn extract(&mut self) -> Option<Tree> {
          if self.last == 0 {
               None
          } else {
               let min = self.data[1].clone();
               self.data[1] = self.data[self.last].clone();
               self.last -= 1;
               let mut j = 1;
               while 2 * j <= self.last {
                    let mut k = 2 * j;
                    if k + 1 <= self.last && freq(&self.data[k+1]) < freq(&self.data[k]) {
                         k += 1;
                    }
                    if freq(&self.data[j]) < freq(&self.data[k]) {
                         break;
                    }
                    self.data.swap(j, k);
                    j = k;
               }
               min
          }
     }
     pub fn size(&mut self) -> usize { self.last }
}
```

Notar que tenemos un método llamado new(), que recibe un tamaño que es
el tamaño que tendrá nuestro arreglo con los datos.

Rust sigue el modelo funcional en el sentido que la última expresión de
una función es el valor que se retorna, veamos new de nuevo en detalle:

```rust
         pub fn new(size:usize) -> Heap {
              Heap { data : vec![None;size+1], last : 0 }
         }
```

Esta función retorna una estructura de tipo Heap, donde inicializamos
cada elemento de la misma. La expresión ```vec!\[None;size+1\]```, es la
invocación a una macro, que crea un vector lleno de None (elementos
vacios).

Así si queremos crear un Heap hacemos:

```rust
let my_heap = Heap::new(100);
```

Y con esto creamos un heap de tamaño 100.

Rust es un lenguaje orientado al objeto, pero sin clases. Los métodos
definidos en la sección Impl permiten agregar comportamiento a una
estructura, convirtiéndola formalmente en un objeto. El método new no es
un constructor, es un método estático, no hay constructores en Rust,
basta escribir un método que devuelva la estructura inicializada.

Noten que hay métodos que reciben self como primer parámetro, estos son
métodos propios del objeto, de este modo podemos hacer:

```rust
        my_heap.insert(tree);
```

Notarán que para ordenar los elementos del Heap usamos la función freq,
esta es su implementación:

```rust
fn freq(t:&Option<Tree>) -> usize {
     match *t {
          None => 0,
          Some(ref t) => freq_tree(t)
     }
}

fn freq_tree(t:&Tree) -> usize {
     match *t {
          Tree::Leaf(f, _) => f,
          Tree::Node(f, _, _)=> f
     }
}
```

Para entender por qué hay tantos & y \* en nuestro código, y por qué
aparece esas palabras raras como mut y ref en el código vamos a tener
que explicar un poco del concepto de Ownership, que es fundamental en
Rust.

## Préstame tu auto tio

> *My uncle preserved for me*\
> *An old machine*\
> *For fifty-odd years*\
> *To keep it as new*\
> *Has been his dearest dream*

Rust hace dos promesas:

1. Tú, como programador, decides el tiempo de vida de cada valor en tu
    programa. Rust libera memoria y otros recursos que pertenezcan a un
    valor inmediatamente en un punto bajo tu control.
2. Aún así, tu programa nunca usará un puntero a un objeto que ha sido
    liberado. Esto se conoce como "dangling pointer" y es un error
    común en C y C++. Si tienes suerte, tu programa se cae, sino tu
    programa tiene un agujero de seguridad. Rust atrapa este tipo de

En C y C++ se cumple la primera promesa, pero a cambio el programador es
responsable de asegurar la segunda promesa. Varios lenguajes intentan
asegurar la segunda promesa usando Garbage Collection, que se asegura de
liberar la memoria sólo cuando ningún puntero apunta al objeto. Pero
ocurre que los recolectores de basura nos sorprenden bastante seguido
con el hecho de que la memoria no es liberada cuando esperamos, y tratar
de entender por qué es bastante complicado.

Para garantizar estas dos promesas Rust establece 3 reglas[^2]:

1. Cada variable en Rust tiene una variable que se denomina el
    propietario (owner).
2. Sólo puede haber uno propietario a la vez.
3. Cuando el propietario sale de alcance, el valor se libera.

Veamos un ejemplo:

```rust
let x = String::from("hello");
let y = x;
println!("x = {}", x);
```

Esto no compila, porque x ha perdido la propiedad del string.

Una forma de resolver el problema es creando una copia:

```rust
let x = String::from("hello");
let y = x.clone();
println!("x = {}", x);
println!("y = {}", y);
```

Pero esto duplica memoria, entonces otra alternativa es que y sea una
referencia a x:

```rust
let x = String::from("hello");
let ref y = x;
println!("x = {}", x);
println!("y = {}", y);
```

Esto también se puede hacer así:

```rust
let x = String::from("hello");
let y = &x;
println!("x = {}", x);
println!("y = {}", y);
```

Acá el operado & crea una referencia a x.

¿Qué pasa si queremos modificar el valor de x?

```rust
let x = String::from("hello");
x.push_str(", world!"); // <- error x es inmutable
println!("{}", x);
```

No podemos, porque x es inmutable, entonces debemos hacer:

```rust
let mut x = String::from("hello");
x.push_str(", world!");
println!("{}", x);
```

¿Y qué ocurre con las referencias?

```rust
let mut x = String::from("hello");
let y = &x; // <- error
y.push_str(", world!");
println!("{}", x);
```

tampoco funciona, debemos usar una referencia mutable también:

```rust
let mut x = String::from("hello");
let mut y = &mut x; 
y.push_str(", world!");
println!("{}", y);
```

Pero ojo, que no podemos hacer println!() pasando x (¿por qué?).

Las 3 reglas generan una serie de situaciones que son explicadas mejor
en la documentación oficial de Rust, en particular todo lo relacionado
con Ownership acá:
<https://doc.rust-lang.org/book/second-edition/ch04-01-what-is-ownership.html>.

Lo último que falta explicar es el \*, basicamente y permite obtener el
valor apuntado por una referencia (igual que en C o C++), pero con las
consideraciones que imponen las reglas de ownership de Rust.

## Tipos de datos algebraicos y pattern matching

Rust tiene una característica bien interesante, que el tipo enum, que
nos permite implementar tipos algebraicos:

Así nuestro tipo básico, el árbol de huffman se implementó así:

```rust
#[derive(Clone)]
enum Tree {
     Leaf(usize, u8),
     Node(usize, Box<Tree>, Box<Tree>)
}
```

La directiva ```\#\[derive(Clone)\]`` le indica a Rust que queremos que este
tipo implemente la operación clone() un requisito para poder usarlo en
combinación con Vec y Option.

En este caso nuestro tipo dice que un Tree puede ser una tupla
Leaf(usize, u8) que contiene la frecuencia y el símbolo, y Node es un
Tree que tiene la frecuencia (que es la suma de los sub árboles
izquierdo y derecho) y dos árboles.

El tipo Box\<Tree\> es un smart pointer, que permite definir estructuras
recursivas como Tree (en Rust el tamaño de las estructuras debe
conocerse al momento de declararlas, como estamos definiendo Tree,
usamos punteros, por eso usamos Box\<Tree\>).

¿Cómo usamos este tipo? Veamos un ejemplo, con la función write\_tree,
que escribe el árbol en un archivo:

```rust
fn write_tree(tree:&Tree, writer:&mut BitOutputStream) {
     match *tree {
          Tree::Leaf(_, sym) => {
               writer.write_bit(1);
               writer.write_byte(sym as u16);
          }
          Tree::Node(_, ref left, ref right) => {
               writer.write_bit(0);
               write_tree(left, writer);
               write_tree(right, writer);
          }
     }
}
```

Acá podemos ver que recibimos una referencia a Tree como primer
argumento, por eso que usamos el \* antes de usarlo en la sentencia
match.

En match tenemos dos caso, que sea un Tree::Leaf o un Tree::Node. Notar
que en este caso ignoramos el campo que almacena la frecuencia usando.

Con esto ya podemos entender la función freq():

```rust
fn freq(t:&Option<Tree>) -> usize {
     match *t {
          None => 0,
          Some(ref t) => freq_tree(t)
     }
}

fn freq_tree(t:&Tree) -> usize {
     match *t {
          Tree::Leaf(f, _) => f,
          Tree::Node(f, _, _)=> f
     }
}
```

La función freq simplemente trata el caso del Option para llamar a
```freq_tree()```, que noten sólo se ocupa del primer elemento de las tuplas
(f).

Todo el resto del código está, como siempre, en mi repositorio GitHub:
<https://github.com/lnds/9d9l/tree/master/desafio4/rust>]

## Cierre

> *I strip away the old debris*\
> *That hides a shining car*\
> *A brilliant Red Barchetta*\
> *From a better vanished time*\
> *We'll fire up the willing engine*\
> *Responding with a roar*\
> *Tires spitting gravel*\
> *I commit my weekly crime*

Rust es un lenguaje desafiante, por mucho rato traté de resolver esto
mediante un enfoque orientado al objeto tratando de usar Traits, pero no
era el camino, porque la clave es que en Rust todo el tamaño de las
estructuras debe ser conocida en tiempo de compilación, los Trait son un
contrato, no una estructura que ocupe espacio en memoria. Tampoco hay
herencia de structs, así que el camino no iba por ahí. No implica esto
que en Rust no puedes hacer orientación a objetos, lo que estoy diciendo
es que para este caso, no era la manera adecuada.

Queda pendiente una solución de esto usando Traits, que se puede, pero
mis conocimientos en Rust aún no están maduros para escribirla, les dejo
el código para que lo analicen y se den una idea de cómo es Rust, una
pista, se parece mucho a la solución Scala, así que eso ayuda mucho.

Para finalizar, escuchemos a Rush, con Red Barchetta:

{{<youtube 13HoZKcJ5Hk>}}

Código fuente de los desafíos: <https://github.com/lnds/9d9l>

### Referencias


[^2]: The Rust Programming Language: <https://doc.rust-lang.org/book/>


[^4]: Programming Rust, O'Reilly Media: <http://shop.oreilly.com/product/0636920040385.do>

[^5]: The Drummer, the Private Eye, and Me (Rush Fans Take Note), <http://www.bmwbmw.org/forums/viewtopic.php?f=22&t=8693>
