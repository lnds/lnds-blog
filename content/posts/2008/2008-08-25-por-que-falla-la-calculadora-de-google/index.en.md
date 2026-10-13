---
comments: true
date: 2008-08-25 06:58:37
layout: post
slug: 'why-does-google-calculator-fail'
title: Why does Google's calculator fail?
authors: [admin]
wordpress_id: 1158
---

I have a suspicion about the possible cause of the [Google calculator failure](http://www.fayerwayer.com/2008/08/segun-google-500000000000002-500000000000001-0/). Try this C program:


```c
#include <stdio.h>
#include <math.h>

int main()
{
    char* a = "399999999999999";
    char* b = "399999999999998";
    float da = atof(a);
    float db = atof(b);

    printf("da = %f,  db = %f\n", da, db); // to see how the numbers are stored
    printf("%s - %s = %f\n", a, b, da-db);

    a = "500000000000002";
    b = "500000000000001";
    da = atof(a);
    db = atof(b);

    printf("da = %f,  db = %f\n", da, db);

    printf("%s - %s = %f\n", a, b, da-db);
}
```

When you run this program you'll get the following output:

399999999999999 - 399999999999998 = 0.000000
500000000000002 - 500000000000001 = 0.000000

It looks like Google is using single precision, that is, 32-bit floating point numbers.
Try changing float to double in the program above, and problem solved.

It's an ugly bug, though it's no great mystery, Mr. Chips....
