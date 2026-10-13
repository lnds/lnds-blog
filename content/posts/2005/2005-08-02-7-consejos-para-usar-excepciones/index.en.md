---
title: "7 tips for using exceptions"
authors: [admin]
date: '2005-08-02T08:25:11-03:00'
slug: '7-tips-for-using-exceptions'
tags: ["programming", "exceptions", "csharp"]
draft: false
---

Here are 7 tips for using exceptions in C\#

1) Don't use exceptions to control the flow of the application.
2) Use validation code to avoid unnecessary exceptions.
3) Use the finally block to make sure resources are released.
4) Don't catch exceptions you are not going to handle.
5) Keep in mind that rethrowing exceptions is expensive. Almost as
expensive as the exception that was thrown in the first place.
6) Preserve as much diagnostic information as possible in your
exception handlers. It is useful for debugging.
7) Use the Performance Monitor to monitor CLR exceptions.

Thanks to Juan Daria Tempesta (DCE instructor) for inspiring this
article.
