---
title: "Don't compromise your site's security"
authors: [admin]
date: 2005-08-10T18:25:11-03:00
slug: "dont-compromise-your-sites-security"
tags: ["security", "internet"]
draft: false
image:
  placement: 3
---

This image is real, from a site heavily visited by java developers
around the world:

![badlogin.JPG](https://www.lnds.net/archives/badlogin.JPG)

Not only that: when I asked it to send me my password, it sent me the
original one.

Basic security principles:

1.- Never give hints. Whether the username is wrong or the password is
wrong, return the same error message. This is no place to be too
friendly, because it compromises the site's security.

2.- Don't store the password in clear text on your site. No matter how
hard you try, there is no such thing as a perfect security system. The
best thing is to hash the password.

3.- Require long passwords, 8 characters or more. Ideally the password
has letters, numbers and other symbols. Mix upper and lower case in
passwords.

4.- Require passwords to be changed often.

5.- Lock the site's login after a certain number of retries.

6.- In extreme cases you can lock the account and send a notification
email to the user.

7.- Don't use the email address as the login ID. That is very bad,
because email is public, and easy to guess.

8.- When someone asks to recover a password, generate a new password
with random characters.

9.- Don't use Turing tests, or captchas, because they hurt your site's
usability and give a false sense of security. Captchas were created for
something else. The same applies to password generators, which can be
intercepted or stolen.

10.- Use biometrics, it is the most secure option today.

