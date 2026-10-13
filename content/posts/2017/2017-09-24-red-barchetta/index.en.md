---
title: "Red Barchetta"
authors: [admin]
sub_title: "9 challenges in 9 languages (4 of 9) part 4"
date: 2017-09-24T08:25:11-03:00
slug: "red-barchetta"
draft: false
tags: ['challenges', 'new languages', 'languages', 'programming languages', 'programming', 'rock', 'rust', 'functional programming']
image:
  placement: 3
---

> *My uncle has a country place*\
> *That no one knows about*\
> *He says it used to be a farm*\
> *Before the Motor Law*

Red Barchetta is the second song on the 1981 album "Moving
Pictures" by the Canadian band Rush. It tells a science
fiction story, set in a future world where cars are apparently
banned.

Legend has it that Neil Peart simply adapted a short story by the
writer Richard S. Foster titled "A Nice Morning Drive", published
in [Road and Track](http://www.roadandtrack.com/) magazine in 1973.
Peart tried to contact the author, but Road and Track no longer had
Foster's contact details, so he added this line at the end of the lyrics on the
album: "Inspired by 'A Nice Morning Drive' by Richard S.
Foster".

In 1996, once there was an internet, Richard S. Foster found a copy
of his work on a Rush fan page. Only then did Foster make the
connection between the song and his story, despite having heard it
many times on the radio.

The funny thing is that Richard S. Foster was a motorcycle fan, and
at a convention in 2006 a friend told him about Neil Peart's book
"Ghost Rider", a work that recounts the drummer's healing journey after
the dramatic loss of his wife and daughter, a ride of more than 150,000
kilometers by motorcycle. It is a road diary in which we see
how, little by little, kilometer by kilometer, Neil Peart heals from the
pain, the rage and the grief of having lost the most important women
in his life ([we've talked about this before](/en/blog/lnds/2012/01/14/concept-album/)).

Foster read the book and found it very moving, so in December
2006 he decided to write Peart a letter, explaining that he was the
author of 'Nice Morning Drive'. The writer didn't have much hope
that the letter would reach the famous rocker's hands, given the amount of
mail the band received, but in January he received a package
with an inscribed copy of Peart's next book,
"RoadShow", plus a long letter.

Besides sharing a love of motorcycles and being
proud owners of the same model, there were many similarities
between the two personalities.

That started an e-mail friendship, until he received an invitation
to join a "ride" during the 2007 "Snakes and Arrows"
tour. When they finally met in person Foster handed the
drummer an autographed copy of the November 1973 issue of Road and
Track[^5].

{{<figure caption="Foster and Peart" src="https://d2dspjyoh5c79p.cloudfront.net/363da275-a16f-11e7-a030-2b5831f8ecb5-aa9f18b7" >}}

## Rust

> *Wind In my hair*\
> *Shifting and drifting*\
> *Mechanical music*\

This is the fourth part of the fourth challenge in this series on those
"weird new languages". It's Rust's turn, the language closest
to the machine of the nine official languages that make up this
challenge.

Rust is a systems programming language.

I love systems programming languages.

When I started my professional career I wrote interfaces for PLCs
(Programmable Logic Controllers) and modules for SCADA applications
(Supervisory Control An Data Acquisition). Sensors for temperature and
pollutants, logic circuits that triggered alarms, opened doors or
activated cement-bagging robots.

We wrote everything in C or C++. I remember one occasion in particular when
I built a real-time database replication system, a
highly concurrent system in C++, and a debugging story I've
told before: <https://www.lnds.net/blog/lnds/2010/08/21/historias-de-depuracion>

If I had to do something like that these days, I would no doubt choose Rust (over
Go, but I'll get to Go).

In chapter 1 of "Programming Rust"[^4], by Jim Blandy and Jason
Orendorff, the authors explain why Rust:

> "Systems programming languages have come a long
> way in the 50 years since we started using high-level
> languages to write operating systems, but two problems in
> particular have proven difficult to crack:
>
> \- It's difficult to write secure code. It's especially difficult to manage
> memory correctly in C and C++. Users have been suffering the
> consequences for decades, in the form of security holes
> dating back at least as far as the 1988 Morris worm.
>
> \- It's very difficult to write multithreaded code, which is the only
> way to exploit the abilities of modern machines. Even
> experienced programmers approach threaded code with
> caution: concurrency can introduce broad new classes of
> bugs and make ordinary bugs much harder to
> reproduce."

Rust's goal is to be a safe language for memory management and
concurrent programming, with the performance of C and C++.

## Rust is Rush

> Ride like the wind\
> Straining the limits\
> Of machine and man\
> Laughing out loud with fear and hop

Rust is a systems programming language, close to the machine,
but it is also a complex language. Complex like *"La Villa
Strangiato", Jacob's Ladder or Natural Science*. In other words,
taking on *"Tom Sawyer"* or *"The Trees"* is a major challenge
for any amateur drummer. Never mind the bass lines
in YYZ.

Learning to program in Rust is a major challenge for anyone; if you
haven't programmed anything in C++ or Java, in my opinion you're going to
struggle.

Rust is also a language that amalgamates several paradigms and
modern techniques from compiler and language theory. I have always
thought of Rush as a great anthologist of the different eras of
rock. That is, the Rush of the 70s is heavily influenced by The Who and Led
Zepellin, the Rush of the 80s by Yes, Genesis and New Wave, and so on.

Don't get me wrong, Rush is a very influential band, but it also
picks the best of what is playing in each era, adapts it and in
some cases improves it, to deliver an original and powerful product.

Rust has the following features of modern languages:

> - There is no null in Rust \\o/
> - Functional programming elements (monads, such as maps and
> option)
> - Strong typing and, above all, type safety
> - Algebraic data types and tuples
> - Pattern matching on types
> - Traits and polymorphism, but without inheritance or
> classes
> - Variables are immutable by default
> - Smart pointer types
> - An unsafe mode for writing code straight to the machine, with
> us programmers taking on the risk
> - There is no garbage collection, but you don't have to worry about
> allocating or freeing memory either (there are no memory leaks)

The most interesting one for me is the last: it is a language where you don't
worry about allocating or freeing memory, which seems almost miraculous.
This is a very powerful peculiarity of Rust, but it comes at a price:
complexity and more verbose code, plus the need to
really understand the concept of ownership.

This limits the language's expressiveness from the perspective of someone
used to object-oriented programming, but in exchange
we get safer and more
robust code.

When you start learning Rust you discover that you spend a lot of time fighting the
compiler, which fortunately is very good and guides you very well.
For many programmers who have put in the hours with Rust, this
fight with the compiler means that debugging time has
dropped drastically, and I believe them (see:
<https://www.quora.com/What-do-C-C++-systems-programmers-think-of-Rust/answer/Mitchell-Nordine>).

## Huffman in Rust

Remember that in this challenge we don't want to use the data structures
the language already has. So let's look at how we deal with the Heap
(priority queue).

First we declare our ADT:

```rust
struct Heap {
     data: Vec<Option<Tree>>,
     last: usize
}
```

In Rust the members of a struct are all private, so while
the client can create a Heap, it cannot access its elements.
To operate on our ADT we use some methods that we define
through impl.

Notice that data is a vector of ```Option\<Tree\>```, that is, it has
elements that may or may not hold a Tree.

Option is an algebraic type that in Rust looks more or less like this:

```rust
enum Option<T> {
     None,
     Some(T)
}
```

This makes it possible to implement the Option monad, which exists in other languages
such as Scala, Swift or Haskell. It avoids using null pointers to indicate
a missing element in our vector.

The implementation of Heap's methods is declared here:

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

Note that we have a method called new(), which takes a size: the
size our data array will have.

Rust follows the functional model in the sense that the last expression of
a function is the value it returns. Let's look at new again in detail:

```rust
         pub fn new(size:usize) -> Heap {
              Heap { data : vec![None;size+1], last : 0 }
         }
```

This function returns a struct of type Heap, in which we initialize
each of its elements. The expression ```vec!\[None;size+1\]``` is a
macro invocation, which creates a vector full of None (empty
elements).

So if we want to create a Heap we do:

```rust
let my_heap = Heap::new(100);
```

And with that we create a heap of size 100.

Rust is an object-oriented language, but without classes. The methods
defined in the impl section let us add behavior to a
struct, formally turning it into an object. The new method is not
a constructor, it is a static method; there are no constructors in Rust.
It is enough to write a method that returns the initialized struct.

Notice that some methods take self as their first parameter; these are
methods of the object itself, so we can do:

```rust
        my_heap.insert(tree);
```

You will notice that to order the elements of the Heap we use the freq function.
This is its implementation:

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

To understand why there are so many & and \* in our code, and why
strange words like mut and ref show up in it, we are going to have
to explain a bit about the concept of ownership, which is fundamental in
Rust.

## Lend me your car, uncle

> *My uncle preserved for me*\
> *An old machine*\
> *For fifty-odd years*\
> *To keep it as new*\
> *Has been his dearest dream*

Rust makes two promises:

1. You, the programmer, decide the lifetime of each value in your
    program. Rust frees memory and other resources belonging to a
    value promptly, at a point under your control.
2. Even so, your program will never use a pointer to an object that has been
    freed. This is known as a "dangling pointer" and is a common
    mistake in C and C++. If you're lucky, your program crashes; if not, your
    program has a security hole. Rust catches this kind of error.

In C and C++ the first promise holds, but in exchange the programmer is
responsible for ensuring the second one. Several languages try to
guarantee the second promise using garbage collection, which makes sure
memory is freed only when no pointer points to the object. But
it turns out garbage collectors surprise us quite often
with memory not being freed when we expect, and trying
to understand why is fairly complicated.

To guarantee these two promises Rust sets out 3 rules[^2]:

1. Each value in Rust has a variable that's called its
    owner.
2. There can only be one owner at a time.
3. When the owner goes out of scope, the value will be dropped.

Let's look at an example:

```rust
let x = String::from("hello");
let y = x;
println!("x = {}", x);
```

This doesn't compile, because x has lost ownership of the string.

One way to solve the problem is to create a copy:

```rust
let x = String::from("hello");
let y = x.clone();
println!("x = {}", x);
println!("y = {}", y);
```

But this duplicates memory, so another alternative is for y to be a
reference to x:

```rust
let x = String::from("hello");
let ref y = x;
println!("x = {}", x);
println!("y = {}", y);
```

This can also be done like this:

```rust
let x = String::from("hello");
let y = &x;
println!("x = {}", x);
println!("y = {}", y);
```

Here the & operator creates a reference to x.

What happens if we want to modify the value of x?

```rust
let x = String::from("hello");
x.push_str(", world!"); // <- error x is immutable
println!("{}", x);
```

We can't, because x is immutable, so we have to do:

```rust
let mut x = String::from("hello");
x.push_str(", world!");
println!("{}", x);
```

And what about references?

```rust
let mut x = String::from("hello");
let y = &x; // <- error
y.push_str(", world!");
println!("{}", x);
```

That doesn't work either; we have to use a mutable reference as well:

```rust
let mut x = String::from("hello");
let mut y = &mut x; 
y.push_str(", world!");
println!("{}", y);
```

But watch out: we can't call println!() passing x (why?).

The 3 rules produce a series of situations that are better explained
in Rust's official documentation, in particular everything related
to ownership here:
<https://doc.rust-lang.org/book/second-edition/ch04-01-what-is-ownership.html>.

The last thing left to explain is the \*. Basically it lets you get the
value a reference points to (just like in C or C++), but with the
considerations imposed by Rust's ownership rules.

## Algebraic data types and pattern matching

Rust has a very interesting feature, the enum type, which
lets us implement algebraic types:

So our basic type, the Huffman tree, was implemented like this:

```rust
#[derive(Clone)]
enum Tree {
     Leaf(usize, u8),
     Node(usize, Box<Tree>, Box<Tree>)
}
```

The ```\#\[derive(Clone)\]`` directive tells Rust that we want this
type to implement the clone() operation, a requirement for using it in
combination with Vec and Option.

In this case our type says that a Tree can be a
Leaf(usize, u8) tuple holding the frequency and the symbol, and Node is a
Tree that has the frequency (which is the sum of the left and right
subtrees) and two trees.

The type Box\<Tree\> is a smart pointer, which makes it possible to define recursive
structures like Tree (in Rust the size of structures must be
known at the moment they are declared; since we are defining Tree,
we use pointers, which is why we use Box\<Tree\>).

How do we use this type? Let's look at an example, the write\_tree function,
which writes the tree to a file:

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

Here we can see that we receive a reference to Tree as the first
argument, which is why we use the \* before using it in the match
statement.

In match we have two cases: it is either a Tree::Leaf or a Tree::Node. Note
that in this case we ignore the field that stores the frequency by using _.

With this we can now understand the freq() function:

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

The freq function simply handles the Option case in order to call
```freq_tree()```, which, notice, only cares about the first element of the tuples
(f).

All the rest of the code is, as always, in my GitHub repository:
<https://github.com/lnds/9d9l/tree/master/desafio4/rust>]

## Wrapping up

> *I strip away the old debris*\
> *That hides a shining car*\
> *A brilliant Red Barchetta*\
> *From a better vanished time*\
> *We'll fire up the willing engine*\
> *Responding with a roar*\
> *Tires spitting gravel*\
> *I commit my weekly crime*

Rust is a challenging language. For a long while I tried to solve this
with an object-oriented approach, trying to use traits, but that wasn't
the way, because the key is that in Rust the size of every
structure must be known at compile time, and a trait is a
contract, not a structure that takes up space in memory. There is no
struct inheritance either, so that wasn't the path. This doesn't mean
you can't do object orientation in Rust; what I'm saying
is that for this case it wasn't the right way.

A solution using traits is still pending. It can be done, but
my Rust knowledge isn't mature enough yet to write it. I leave you
the code so you can go through it and get an idea of what Rust is like. One
hint: it looks a lot like the Scala solution, so that helps a lot.

To finish, let's listen to Rush, with Red Barchetta:

{{<youtube 13HoZKcJ5Hk>}}

Source code for the challenges: <https://github.com/lnds/9d9l>

### References


[^2]: The Rust Programming Language: <https://doc.rust-lang.org/book/>


[^4]: Programming Rust, O'Reilly Media: <http://shop.oreilly.com/product/0636920040385.do>

[^5]: The Drummer, the Private Eye, and Me (Rush Fans Take Note), <http://www.bmwbmw.org/forums/viewtopic.php?f=22&t=8693>
