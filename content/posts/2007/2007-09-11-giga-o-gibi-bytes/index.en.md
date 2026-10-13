---
comments: true
date: 2007-09-11 23:56:12
layout: post
slug: 'giga-or-gibi-bytes'
title: Giga or gibi bytes?
authors: [admin]
wordpress_id: 708
categories:
- science
- culture
tags:
- storage
- computing
- mathematics
- memory
---

If I run the df command on my current notebook, it tells me I have 141+8.1 giga


> Filesystem Size Used Avail Use% Mounted on
c: 141G 62G 80G 44% /cygdrive/c
d: 8.1G 6.1G 2.0G 76% /cygdrive/d


That adds up to 149.1 gigabytes, quite a bit less than the 160GB stated in my machine's specs.

But the truth is that hard drive manufacturers use the prefix giga correctly: it means 10 to the 9th power, a billion, or in figures 1,000,000,000.

Hard drive manufacturers use the prefix notation defined by the [International Bureau of Weights and Measures](http://www.bipm.org/). The [International System of Units](http://es.wikipedia.org/wiki/Sistema_Internacional_de_Unidades) defines the prefixes for powers of 10:

```
  Factor  Prefix  Symbol  Factor  Prefix  Symbol
  10E24   yotta   Y       10E-24   yocto  y
  10E21   zetta   Z       10E-21   zepto  z
  10E18   exa     E       10E-18   atto   a
  10E15   peta    P       10E-15   femto  f
  10E12   tera    T       10E-12   pico   p
  10E9    giga    G       10E-9    nano   n
  10E6    mega    M       10E-6    micro  µ
  10E3    kilo    k       10E-3    milli  m
  10E2    hecto   h       10E-2    centi  c
  10E1    deca    da      10E-1    deci   d
```

So 160 gigabytes is 160E9 bytes, or 160,000,000,000 bytes.

But in computing tradition a gigabyte is 1024 megabytes, a megabyte is 1024 kilobytes, and those in turn are 1024 bytes each. Since everything is expressed in powers of 2, a kilobyte was 2 to the 10th, a mega 2 to the 20th, and a gigabyte 2 to the 30th.

Operating systems, and the tools that work with hard drives (like the df command), follow this custom: everything is expressed in powers of 2, but using the prefixes of the decimal system.

To avoid confusion the [IEEE](http://www.ieee.org/) defined the IEEE-1541 standard, which was included in IEC 60027, the International Electrotechnical Commission standard that defines the symbols and letters used in electronics.

This standard defines new prefixes for powers of 2:

```
  kibibyte  KiB   2e10
  mebibyte  MiB   2e20
  gibibyte  GiB   2e30
  tebibyte  TiB   2e40
  pebibyte  PiB   2e50
  exbibyte  EiB   2e60
  zebibyte  ZiB   2e70
  yobibyte  YiB   2e80
```
	
* Here I used the notation 2eXX to mean 2 to the power of XX.


Therefore my 160 gigabyte hard drive has a capacity of 149.1 gibibytes.

Although the abbreviations are used in some publications and software, adoption of this standard is low, and as [Jeff Atwood points out](http://www.codinghorror.com/blog/archives/000950.html), the reasons would be that the prefixes sound ridiculous, hard drive manufacturers don't use them, and tradition prevails.

This confusion over how to state hard drive sizes has led to [some rather notorious lawsuits](http://en.wikipedia.org/wiki/Binary_prefix#Legal_disputes), and many users get upset when they buy a hard drive, look at it from their operating system and notice they have "lost" a lot of megabytes. These days, with hard drives over 80 gigabytes, the difference between what the manufacturer states and what the operating system reports can reach 7%.
