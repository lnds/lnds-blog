---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "The complexity your boss ignores"
slug: "the-complexity-your-boss-ignores"
authors: [admin]
subtitle: "Or prefers to ignore"
summary: ""
tags: [security, complexity, management]
categories: [complexity, management, "software engineering"]
date: 2020-10-04T09:48:32-03:00
lastmod: 2020-10-04T09:48:32-03:00
featured: false
draft: false

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
There is a very fitting metaphor for what happens in many companies when it comes to the view held by those who run them. People talk about the "Iceberg Effect".

We know that when we look at an iceberg we only see one part, the part above the surface, which is barely a tenth of the real size of the block of ice.

Ernest Hemingway, the famous American writer, coined the concept of the [Iceberg Theory](https://es.wikipedia.org/wiki/Teor%C3%ADa_del_iceberg), also known as the Theory of Omission[^1].

An interesting fact is that several critics of the work of the author of ["The Old Man and the Sea"](https://es.wikipedia.org/wiki/El_viejo_y_el_mar) observed that by using this technique, together with the clarity of his writing, Hemingway developed a means of distancing himself from the characters he created.

That is, the theory of omission works as a way of putting distance between the author and his characters. The analogy with the business world could not be clearer.

The iceberg effect is that cause-and-effect relationship found in companies, where the hidden elements of the company are the cause, and the results (successes, failures, profits or losses) are the effects of the interactions going on below the surface.

So, to understand successes or failures, executives or business owners need to dive into the depths of the company and take the trouble to understand and deal with the real causes that drive the results[^2].

This is organizational development theory. But there is another, technical dimension to this phenomenon that all of us who work in information technology need to bring to light.

# The real effort of developing software

Developing software has become an increasingly complex task.

Suppose we're asked to develop a "simple web form".

Maybe in 1995 this was very easy: a small application written on the LAMP stack[^3] on a small server, and done.

But that's no longer the reality. It turns out that today, to create a web form, you have to:

- Worry about usability. If you fail at this you can cause frustration, confusion, or you can even end up [losing millions](https://lnds.net/blog/lnds/2017/07/23/el-boton-de-los-300-millones-de-dolares/)[^4].

- Depending on the service, the form may be exposed to attacks by cybercriminals, or by vandals who will try to take down the site where you host your form. So you have to take measures to make sure the site withstands a series of attacks (from [Denial of Service](https://es.wikipedia.org/wiki/Ataque_de_denegaci%C3%B3n_de_servicio) to others like [SQL Injection](https://es.wikipedia.org/wiki/Inyecci%C3%B3n_SQL) or [Cross Site Scripting](https://es.wikipedia.org/wiki/Cross-site_scripting)). Just to name the most common ones (today we have hundreds of possible vulnerabilities[^5]).

- Security testing. To give you an idea, the OWASP Security Testing guide has some 300 chapters; you can look through them here: <https://github.com/OWASP/wstg/tree/master/document>. If we wanted to go live without a single security problem we'd have to work through this entire guide, which might take us several weeks.

- Functional testing. Testing an application end to end, even one as simple as a form, can mean an enormous effort. Every decision we put into our code generates one or more branches, which have to be tested. Just like the character Ts'ui Pên in Borges's ["The Garden of Forking Paths"](https://www.literatura.us/borges/jardin.html), the software tester walks into an endless labyrinth when testing a system, even a very small one.

- Social media. Today a simple form can get criticized on social media, especially if, as a result of all the above, we didn't pay attention to usability, or didn't measure the impact of how we run our service.

- Integrations. A simple form no longer lives in isolation. The applications in our companies proliferate to the point that in many organizations there is no clear map of all the ones that exist and how they interact. This new application, simple as it may be, has to answer a series of questions: will it use an existing database? Will it have its own database? Will it interact with other services? Using which mechanisms? Are there web services involved? What protocols will be used for the integration? Is there documentation for the APIs it will use? Is there support for the other applications it will interact with? Does any service need to be modified so that this new application can operate? I don't even want to get into the questions that come up when this "simple web form" has to integrate with external services we don't control.

- Operations. Will we have backups? How long must the data be kept online? Is there an agreed service level? At what times can we run backups or infrastructure maintenance? What infra will support this new application? How much storage is required? What are the IP addresses? Is there a special domain we need to publish? Digital certificates have to be acquired and configured. Who has access to this application? How do we manage passwords? What level of support do we have to provide?

And this whole list is not exhaustive.

## The Anti-Hamlet

There is a story told in the book [Secure By Design](https://www.manning.com/books/secure-by-design)[^6] that the authors call The Anti-Hamlet.

The story takes place at a site that sells books online, and as such it has the classic shopping cart.

A tester decides to run a test in production: in the shopping cart he enters the value -1 (minus one) in the quantity field of the order form. He clicks buy and nothing happens.
He files a ticket with a note about it and gets on with his work.

Days later someone in the company's accounting department raises the alarm, which sets the cybersecurity team in motion. They ask around the various areas of the company whether anyone has placed an order for -1 copies of Shakespeare's Hamlet (an Anti-Hamlet), which is priced at
$39.

The fact is that the accounting system has issued a check for 39 dollars to be refunded to someone whose address matches the company's own. The tester explains the situation and an investigation begins.

Let's look at the situation, the way the book's authors illustrate it:

{{<figure caption="Joe Tester orders -1 Hamlet (an anti-Hamlet) - taken from [6]" src="anti-hamlet.png" >}}

The purchase of the Anti-Hamlet doesn't just have an accounting impact; it also has an impact on inventory. A new unit magically appears in stock.

The investigation that follows reveals that this bug somehow became public, and several customers have used it to get discounts on their purchases (all it takes is putting a negative value in some of the quantities).

Why does this happen?

The big problem is the "let's just charge ahead" attitude that gets promoted in many companies. The underlying complexity of software development is ignored, and developers concentrate mostly on implementing the requirements they receive.

Surely an analyst stated that the quantity of units in a shopping cart is a number, and the developer said: fine, if it's a number then I'll model it as an integer (`int`), a data type that also allows negative numbers.

The model will probably end up being something like this:

```java
class Libro {
  String titulo;
  String isbn;
  double precio;
  ....
}

class Orden {
   void agregarItem(Libro libro, int cantidad) {
     ....
   }
}
```

Is this a proper way to model this business case?

Of course not. What's more, using an `int` for the quantity isn't inadequate only because the numbers can be negative.
An `int` can normally hold a value of several billion. Does a figure of 2,147,483,647 copies of Hamlet make any sense?
Of course not. Another mistake is using double to model a monetary value (there are rounding errors that this data type doesn't handle properly).

That's what domain primitives are for, a concept we can borrow from DDD ([Domain Driven Design](https://es.wikipedia.org/wiki/Dise%C3%B1o_guiado_por_el_dominio))[^7]

A better model would be this one:

```java
class Libro {
  Titulo titulo;
  ISBN isbn;
  Money precio;
  ....
}


class Cantidad {
  ...
  Cantidad(int cantidad) {
    isTrue(0 < cantidad, "cantidad debe ser positiva");
    isTrue(cantidad <= 240, "hay un limite de 240 unidades en el flujo de la tienda");
    ...
  }
}

class Orden {
   void agregarItem(Libro libro, Cantidad cantidad) {
     ....
   }
}
```

What we've done is add a series of classes that describe domain primitives fitted to the reality of the business. For example, the limit of 240 is determined after an analysis involving people who work in logistics and inventory, who recommend this figure based on their experience and on practical grounds.

## That underlying complexity

The Anti-Hamlet case shows us that even an operation as simple as determining the quantity of units in a shopping cart requires meticulous analysis and design.

Without that painstaking design we expose ourselves to a serious security vulnerability (yes, this case is a security bug, because it has to do with one of the elements of the security triad[^8]: integrity).

Software development today means we have to worry about many more factors than were considered before. We live in a time when we have an enormous number of services and microservices interacting to hold up our applications.

The mere act of deploying these applications to production environments is something very complex today, involving the coordination of the business areas, marketing, social media management, usability, project management, software development, data management, architecture, quality control, operations, security, networking, and so on.

The Iceberg keeps getting deeper, and more intricate. Nobody can have absolute clarity about everything that's going on anymore. But we have developed techniques and skills to keep this complexity under control effectively, through DevOps, for example.
But that requires cultural changes, an attitude of collaboration, transparency and openness.

But all of that has to start with those in charge humbly admitting that they can't understand what happens when they ask for a simple form to be built. And if they don't realize it, it is your professional duty to let them know. We have to make the iceberg visible. That is our duty, or we will crash into it and, like the Titanic, sink as an organization.

[^1]: Hemingway explained that his new theory of writing consists of omitting any part of the narrative, and that the omission strengthens the story. See <https://es.wikipedia.org/wiki/Teor%C3%ADa_del_iceberg>

[^2]: <https://spasesores.com/iceberg-empresarial/>

[^3]: An acronym for the technology stack based on Linux, Apache, MySQL and PHP. See: <https://es.wikipedia.org/wiki/LAMP>

[^4]: In this article <https://lnds.net/blog/lnds/2017/07/23/el-boton-de-los-300-millones-de-dolares/> I explain how a very simple usability mistake (the design of a button) cost a company 300 million dollars.

[^5]: For XSS alone there are three variants, which can also occur on the client or the server: <https://owasp.org/www-community/Types_of_Cross-Site_Scripting>.

[^6]: "Secure by Design", Dan Bergh Johnsson, Daniel Deogun, Daniel Sawano, Manning 2019. <https://www.manning.com/books/secure-by-design>

[^7]: DDD is an approach to developing complex systems that offers a mechanism for collaborative design between the business and development areas. If you haven't read it, I suggest you get yourself a copy of Eric Evans's book right now: [ 
Domain-Driven Design: Tackling Complexity in the Heart of Software](https://amzn.to/3ioWcoc).

[^8]: The security triad is: Confidentiality, Integrity and Availability, or CIA.
