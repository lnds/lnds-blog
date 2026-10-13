---
comments: true
date: 2007-08-22 09:20:42
layout: post
slug: standards-standards
title: Standards, standards...
authors: [admin]
wordpress_id: 1833
---

![](debate-thumb-240x175.jpg)

Right now there is an [intense debate](http://replay.web.archive.org/20071017000912/http://www.elfrancotirador.cl/2007/08/22/odf-vs-ooxml-en-chile-%c2%a1un-round-mas/) about how Chile [should vote](http://replay.web.archive.org/20071017000912/http://sushiknights.org/2007/08/presentacion_ooxml.html) on the adoption of OOXML as an ISO standard.

Yesterday there was a meeting at the [INN](http://replay.web.archive.org/20071017000912/http://www.inn.cl/) (Chile's national standards institute) where the [critics of adopting](http://replay.web.archive.org/20071017000912/http://sushiknights.org/2007/08/presentacion_ooxml.html) this standard were able to present their point of view.

Personally, I have become convinced that adopting OOXML as a standard would be terrible, for technical and commercial reasons. In the end it only perpetuates the lock-in to one specific vendor: Microsoft.

There are arguments with no basis, which try to confuse things ([as usual](http://replay.web.archive.org/20071017000912/http://www.lnds.net/2007/08/codigo-libre.html)), and which only make those who use them look bad.

Examples of these bad arguments can be found in the replies to readers on [José Antonio Barriga's blog](http://replay.web.archive.org/20071017000912/http://blogs.technet.com/joseantoniobarriga/default.aspx).

The [first argument](http://replay.web.archive.org/20071017000912/http://tinyurl.com/34gkcv) says:


> _I don't know if you are a programmer, or whether you know that ISO has countless programming languages (ISO FORTRAN, ISO PASCAL, ISO Eiffel, ISO CommonLISP, ISO C, ISO BASIC, ISO ADA, ISO C++, ISO C#, ISO EcmaScript, to name a few). How can that be, if in the end all of them generate binary code that is undertsood[sic] by the CPU? Why have so many languages? I remember the fights among my colleagues over whether C++ or Fortran was the real deal (yes, Fortran, believe it or not!)... in the end the point is that each language is "designed" to solve an algorithm in a particular way. That leads us to the fact that no language is better than another; rather, depending on what my set of information looks like, I'm going to use one or the other. (I remember having programmed a calculator in Cobol! Because the circumstances recomended[sic] it)._


Years ago Microsoft was asked those same questions about .Net: why support so many languages? Why not concentrate on a single language, the way Java does?

The reason is very simple. There are many languages because not all programming languages are general purpose, and what's more, even the self-styled general purpose languages aren't.

Specific languages exist because they have been defined for different solution domains. Languages are tools for programmers. We can use pliers to drive a nail, or a [screwdriver](http://replay.web.archive.org/20071017000912/http://es.wikipedia.org/wiki/Destornillador) as a [gouge](http://replay.web.archive.org/20071017000912/http://es.wikipedia.org/wiki/Gubia), but they weren't designed for those uses.

That is why, just as there are standards for each tool, it is obvious that there should be a standard for each programming language.

But that doesn't apply in this case. OOXML and ODF are two standards aimed at solving the same problem: representing a document, for its later transport, printing, storage, etc.

OOXML does the same thing as ODF, but adds unnecessary complexity. It also has many consistency errors, reinvents units of measurement, and imposes the use of formats patented by Microsoft, something that is not acceptable in an ISO standard.

A clarification is needed here. Those who argue that LaTeX is better than OOXML and ODF, or that PDF is a better standard than ODF, are really mixing things up. These formats solve problems at different stages in the life of a document (LaTeX for typesetting, OOXML and ODF for storing and sharing, and PDF for viewing at print quality).


## But it's XML...


The second argument is actually pretty bad, and it makes the same mistake the government made when it defined that the interoperability of electronic documents only requires that they be XML and that the respective [schemas](http://replay.web.archive.org/20071017000912/http://es.wikipedia.org/wiki/Schema) be available (what would you have thought if the government only required that an electronic document be made up of a set of bytes?).

The [second argument](http://replay.web.archive.org/20071017000912/http://tinyurl.com/2tec3q) goes like this:


> "...on Wikipedia the quantitiy[sic] of standards (more than 140) based on XML, and as far as I know, nothing has happened. Each one represents a different reality, and you will see that there are several on the same subject. What's more, the Contraloría General de la República, as a result of the electronic document decree, created its own "standard." One good thing is that that one can indeed be included within OXML since it is extensible by design."


[XML](http://replay.web.archive.org/20071017000912/http://es.wikipedia.org/wiki/XML) is a metalanguage. It is a way of organizing electronic documents freely, and its rules are really very simple, one of the reasons it has been successful (and also the cause of so much abuse of this format).

Anything built on XML is _extensible by design_; that is no great feat.

XML is like the Latin alphabet: you can write in French, English, Spanish, even in Chilean, using the same alphabet.

Just as you can say anything using the Latin alphabet, you can say anything with XML, but not everything is relevant, and not everything can be understood.

Saying that electronic documents must be in XML format is not enough. Because I can take any information in a proprietary format, convert it to [base64](http://replay.web.archive.org/20071017000912/http://es.wikipedia.org/wiki/Base64) and insert it as a [blob](http://replay.web.archive.org/20071017000912/http://es.wikipedia.org/wiki/BLOB) between two XML tags, like this:


```
 <?xml version="1.0" ?>
<DocumentoElectronico>
TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlz
IHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2Yg
dGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGlu
dWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRo
ZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=
</DocumentoElectrinico>
```

But what happens to whoever receives this "electronic document"?

This document complies with what our government has defined (the schema is quite simple, and it's enough to state that the decoded blob is a Word document, for example), so it will be the recipient's problem to figure out what to do with this "gibberish."

The problem is that many government projects do exactly this. There are agencies that don't have the software to interpret the decoded base64, so should they license the software (while waiting for a budget approval), or "pirate" it in order to read it? Is that acceptable? What about the private parties who receive these documents?

That is why saying "we're going to use XML" is not enough. You have to agree on how the XML document is structured.

ODF and OOXML are definitions that, based on XML, structure a representation of an electronic document, but these standards must guarantee interoperability. It is not acceptable for them to require buying licenses for some specific product, or paying for patents.

OOXML is bad because it is designed to prolong dependence on a single vendor: Microsoft.

## Standards make competition possible

Standards make competition possible, and for that very reason they must be neutral. Normally, when a standard comes out of private industry, it goes through a process of bringing in all the competitors. It already happened with SOAP, which is why it is strange that Microsoft is being so stubborn in this case.

But the truth is that they are defending, badly, the most successful of their products: Office.
Microsoft should understand that it is better to embrace an open standard and strengthen it, instead of carrying on with this arrogant attitude.

[Black and Decker](http://replay.web.archive.org/20071017000912/http://www.blackanddecker.com/) and [Stanley](http://replay.web.archive.org/20071017000912/http://www.stanleytools.com/) are two big companies that compete in the tool industry.

Both adopt standards, international and national, in order to compete. Everyone knows that wrenches have a standard shape and comply with norms for operation, dimensions, etc.
Without these standards the tool industry would probably be chaos.

That is what's missing in the software industry.

But we must not resist any longer.

Although we can program anything, and software allows an almost infinite degree of flexibility, users are asking us to stop, to start using interoperability standards once and for all.

This business of standards has to be seen as an opportunity to improve, one that will let us grow even more. It is better to follow the example of other industries and adopt standards that are simple and well thought out, not full of errors (as in OOXML).
