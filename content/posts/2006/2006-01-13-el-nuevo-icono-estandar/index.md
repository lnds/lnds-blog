---
comments: true
date: 2006-01-13 08:54:24
layout: post
slug: el-nuevo-icono-estandar
title: El nuevo ícono estándar
authors: [admin]
wordpress_id: 2048
categories:
- Internet
- Sin categoría
- Tecnología
tags:
- rss
---

![](logo.jpg)

Trabajando con las APIs de Feedburner: [http://www.feedburner.com/fb/a/developers](http://web.archive.org/web/20090426080926/http://www.feedburner.com/fb/a/developers) descubrí que el ícono que usa firefox se ha convertido en [un estándar](http://web.archive.org/web/20090426080926/http://feedicons.com/).

Esto es bueno, porque ahora todos sabremos donde se encuentran los feeds.
Aprovecho de darles un regalo, si quieren que este icono cool aparezca en la barra de firefox deben agregar
este código:


```
<link rel="alternate" type="application/rss+xml" title="RSS 2.0" href="{#url_feeds#}" />
```

donde deben reemplazar {#url_feed#} por la dirección de donde proviene vuestro feed.


