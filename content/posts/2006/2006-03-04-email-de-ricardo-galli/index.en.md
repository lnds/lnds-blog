---
comments: true
date: 2006-03-04 12:14:25
layout: post
slug: email-from-ricardo-galli
title: An email from Ricardo Galli
authors: [admin]
wordpress_id: 1357
categories:
- uncategorized
---

I got this email from Ricardo Galli.
You be the judge.

-----Original Message-----

From: Ricardo Galli [-- removed --]

Sent: Saturday, March 04, 2006 10:16 AM

To: -- removed --

Subject: Security problems in Blogmemes

Hi Eduardo,
I see that on blogmemes they keep finding ever more "pleasant" words for me. Especially on the subject of the attack on menéame, where they haven't held back one bit.

Well, I wasted 15 minutes looking at the Blogmemes code (version
0.4.2.21) and found very serious security problems and bugs (many more than menéame had). Above all SQL injection, due to the lack of validation of the GET or POST variables.

For example in profile_edit.php
if ($bm_users->update_profile($_POST))
which calls:
function update_profile($data)
{
$sql = ' update users set ';
$sql .= ' email = \''.$data['email'].'\',';
$sql .= ' fullname= \''.$data['fullname'].'\',';
$sql .= ' website = \''.$data['website'].'\',';
$sql .= ' blog = \''.$data['blog'].'\' ';
$sql .= ' where ID = '.$data['user_id'];
$this->db->execute($sql);

or in memes.php
function do_login($user, $pass)
{
$user = $this->db->fetch_object("select ID, username, password, email,join_date,admin,website,blog,fullname from users where
lower(username)='".strtolower($user)."'")

It's riddled with this kind of error; at no point do you sanitize or check those variables, and then you use them directly to build the SQL.
I could have modified your database, or changed the passwords with injection methods far simpler than the ones used against menéame (I don't even need to know them, it's enough to "copy" the ones used against menéame).

On top of that I get the impression you must have "register global variables"
turned on in the server's PHP. I hope not, because otherwise the problem is even more serious.

I suppose this will serve as an example to make you aware of the problems.
Although I'm really ticked off about how I've been treated on Blogmemes for no reason at all, I won't publish these problems or this message. At least not for now, but it's urgent that you fix it; if they tried it with Menéame, before long they'll do it with Blogmemes, there are angry people on both "sides".

But I expect you to fix it and to post an article on blogmemes about the problems solved and _who_ reported them to you and _how_.

If you need more help fixing them, I'd be glad to (although I'd have to study Smarty, which I don't know), but first I expect to see a public reply making "amends", since there have been too many of the opposite kind already.

Best regards.

--
ricardo galli GPG id C8114D34
http://mnm.uib.es/gallir/
