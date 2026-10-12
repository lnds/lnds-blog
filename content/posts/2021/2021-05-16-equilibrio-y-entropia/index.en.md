---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Equilibrium and software entropy"
slug: "equilibrium-and-software-entropy"
authors: [admin]
subtitle: "Let's talk about software entropy (part 2)"
summary: ""
tags: [evolution, software, "software development", "software engineering", programs, systems]
categories: ["software entropy"]
date: 2021-05-16T10:49:02-04:00
lastmod: 2021-05-16T10:49:02-04:00
featured: false
draft: false
math: true
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

This is the second article in [this series](/en/category/software-entropy/), where I'm digging into the concept of software entropy.

To keep going I picked a very simple exercise, taken from [Project Euler](https://projecteuler.net). That site has a list of problems meant to be solved in any programming language you like. We'll take number one, which says:

> "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
>
> Find the sum of all the multiples of 3 or 5 below 1000."

Let's generalize the problem and define our specification like this:

> "Find the sum of all the multiples of 3 or 5 below the natural number n."

The following program skeleton, in Python, lets us solve the problem:

```python
def main(n: int) -> int:
  pass

if __name__ == "__main__":
  try:
    n = int(input("ingrese n: "), 0)
    print('el resultado es',  main(n))
  except ValueError:
    print("debe ingresar un número")
```

We can define a set of tests to validate our main function (whose implementation is still pending), using `unittest`:

```python
import unittest
from main import *

class Euler1Test(unittest.TestCase):

  def test_euler(self):
    self.assertEqual(main(0), 0)
    self.assertEqual(main(4), 3)
    self.assertEqual(main(6), 8)
    self.assertEqual(main(10), 23)
    self.assertEqual(main(100), 2318)
    self.assertEqual(main(1000), 233168)
```

If you remember our discussion in [the previous article](/en/blog/lnds/2021/05/08/lets-talk-about-software-entropy/), what we have here is an S-type program, or `s-program`. The specification is formal and we can define the expected output for every input. We express that with a few test cases in our unit test.

We'll solve the problem by writing the `main` function like this:

```python
def main(n: int) -> int:
  if n <= 0: return 0
  sum = 0
  for i in range(n):
    if i % 3 == 0 or i % 5 == 0:
      sum += i
  return sum
```

You can try this solution in the following Replit: <https://replit.com/@lnds/lndssoftwareentropy1>.

Let's use GIT to track the changes to this program:

```bash
% git commit -m "initial commit"
[main (root-commit) 47f88eb] initial commit
 1 file changed, 15 insertions(+)
```

The output of this operation tells us that creating our solution took 15 insertions into our program.
So our program has 15 lines of code (not counting the tests).

## Final solutions

We have a solution, but can we call it done?

We'll say a program is **final** if it meets its specification and the code no longer changes. Provided the requirements stay immutable.

If we analyze the algorithm we'll see this solution runs `n` iterations.

Can we do better? Of course. In fact, we can cut the number of iterations by taking advantage of the fact that we don't need to check every number; counting by threes and by fives is enough.
That solution has a problem, though: the number 15, for example, gets counted twice, so we have to subtract the sum of counting by fifteens.

With that in mind we get the following solution:

```python
def main(n: int) -> int:
  if n <= 0: return 0

  def sum_step(step):
    sum = 0
    for i in range(step, n, step):
        sum += i
    return sum
    
  return sum_step(3) + sum_step(5) - sum_step(3*5)
```

It can be shown that this solution runs on the order of $0,6 \times  n$ iterations, that is, for n = 1000 it runs about 600 iterations.
That's a 40% optimization, not bad.

If we use GIT to commit this new version, the tool tells us we inserted 7 lines of code and deleted 5 lines of code to get to this new, more optimal version:

```bash
  % git commit -m "optimiza loops"
  [main 629ee77] main.py
  1 file changed, 7 insertions(+), 5 deletions(-)
```

The new program has 17 lines of code.

## Reversibility

Now, the interesting part is that we can revert these changes by running this GIT command:

```bash
% git reset --hard HEAD@{1}
HEAD is now at 47f88eb initial commit
% head main.py
def main(n: int) -> int:
  if n <= 0: return 0
  sum = 0
  for i in range(n):
    if i % 3 == 0 or i % 5 == 0:
      sum += i
  return sum


if __name__ == "__main__":
```

And if we repeat the command we can go back to the optimized version:

```bash
% git reset --hard HEAD@{1}
HEAD is now at 629ee77 optimiza loops
% head main.py
def main(n: int) -> int:
  if n <= 0: return 0

  def sum_step(step):
    sum = 0
    for i in range(step, n, step):
        sum += i
    return sum

  return sum_step(3) + sum_step(5) - sum_step(3*5)
```

Let's do one last optimization:

```python
def main(n: int) -> int:
  if n <= 0: return n
    
  def sum_step(step):
    p = (n-1) // step
    return step * p * (p+1) // 2
    
  return sum_step(3) + sum_step(5) - sum_step(3*5)
```

This solution uses [Gauss's formula](https://francis.naukas.com/2010/04/15/iii-carnaval-de-matematicas-toda-la-verdad-sobre-la-anecdota-de-gauss-el-nino-prodigio-su-profesor-y-la-suma-de-1-a-100/) for the sum of the first n numbers[^1]. And it has the nice property of getting rid of loops altogether.

If we record the state of the program using GIT:

```bash
% git commit -m "solución final"
[master bb6855a] solución final
 1 file changed, 2 insertions(+), 4 deletions(-)
```

We see that this time we made 2 insertions and deleted 4 lines of code. That leaves the program at 15 lines of code again.

The tests are still valid. And of course this change is reversible too.

But the program doesn't work the same way. This solution doesn't run a single iteration; everything is resolved in one expression that calls a function three times. For n = 1000 this program is a thousand times faster than the one we started with.

## Elegant programs

Can we keep optimizing and tidying up our code? Have we finally reached the final solution?

There's a result by [Gregory Chaitin](https://es.wikipedia.org/wiki/Gregory_Chaitin) that is relevant here. Chaitin defines the concept of an **"elegant program"** as the shortest program that produces a given output, meaning there is no smaller program that generates that same output.

This philosopher and mathematician proves that, beyond a certain threshold, it is not possible to know whether we have found an elegant program[^2].

Without switching programming languages there is very little left for us to do, and I think we've hit the threshold Chaitin talks about, so for all practical purposes we'll say this is the final solution.

But several interesting concepts have shown up in this exercise, and we'll formalize them next.

# Reversibility and equilibrium

In this section we'll use some mathematical notation, and we'll try to be as formal as we can. This is not a scientific paper, though, so the formality doesn't aim to be complete. Even so, any comment that improves these models is welcome.

For a program $P$ we'll define the possible states it evolves through as the set: $$S = \\{ s_1, s_2, ..., s_i, s_{i+1},... s_n | i, n \\in \\mathbb{N}  \\} $$

You can think of these states as each commit we made with GIT. In our example we have the states `47f88eb`, `629ee77` and `bb6855a`, which are the last hexadecimal digits of the hash GIT uses to identify commits.

On the other hand we'll have a set of changes: $$C = \\{ c_1, c_2, ..., c_i, c_{i+1},... c_n | i, n \\in \\mathbb{N} \\} $$ which are applied to the program using the following function: $$ \\delta : S \times C \rightarrow P $$

We say a program is in state $s_i$, and we denote this $P(s_i)$.

In our case we have $C_{47f88eb} = (+15, -0)$, $C_{629ee77} = (+7, -5)$ and $C_{bb6855a} = (+2, -4)$. Here I've summarized each change as a tuple holding the number of insertions (+) and deletions (-), without spelling them out, to keep the notation simple.

In GIT we can get the changes to apply by producing, for example, a patch:

```bash
% git diff  629ee77..bb6855a
diff --git a/main.py b/main.py
index 6222402..84985c7 100644
--- a/main.py
+++ b/main.py
@@ -2,10 +2,8 @@ def main(n: int) -> int:
   if n <= 0: return 0

   def sum_step(step):
-    sum = 0
-    for i in range(step, n, step):
-        sum += i
-    return sum
+    p = (n - 1) // step
+    return step * p * (p + 1) // 2

   return sum_step(3) + sum_step(5) - sum_step(3*5)
```

So our function $\\delta$ takes this patch and applies the specified changes; in our case $delta = $ `git apply`.

## Deriving a new state

When we apply a change $c_i$ to software that is in state $s_i$ we get a new state $s'_i$:

$$ \\delta(s_i, c_i) = s'_i $$

We'll say this function $\\delta$, exactly as we've defined it, is *partially reversible*, because although applying an inverse patch (which you get by swapping the order of the commits) takes us back to an earlier state of the program, that may not be desirable, because the requirements have changed or the previous state contained a bug.

What we want, in order to have **strict reversibility**, or simply **reversibility**, is that after applying the function $\\delta$ the program's requirements are still met.

To solve this we'll define a verification function $$V(s, R) \rightarrow \\{ false, true \\} $$ that applies to a program in state $s$. For this function there is a set $$ R = \\{ r_1, r_2,...r_i, r_{i+1},... r_n | i, n \\in \\mathbb{N} \\}$$ that corresponds to all the requirements the program must satisfy. The function $V$ is defined like this:

$$ V_i(s_j, r_i) = \begin{cases}true && \text{if}\\,  P(s_j) \ \text{"satisfies"} \\, r_i, \\\\ false && \text{otherwise} \end{cases} $$

$$ V(s_j, R) = \begin{cases}true && V_i(s_j, r_i) = true, \\, \\forall r_i \\in R \\\\ false && \text{otherwise} \end{cases} $$

Put another way, we'll say a program in a state $s_j$ meets the specification $R$ if $V(s_j, R) = true$.

Building a verification function is a very hard task. Somehow you have to formalize every requirement so that it can be verified. The expression "satisfies" is the weakest point of our model. One approximation we have at hand is our test suite, but we have to keep in mind that it is probably incomplete. Then there are mechanisms for formally proving programs, but they tend to be of little use in practice. Remember Knuth's famous line:

> "Beware of bugs in the above code; I have only proved it correct, not tried it."

But let's keep defining things. We'll say a change $c_i$ is reversible when the program $P$ is in a state $s_i$ such that $V(s_i, R) = true$ and we apply the change $c_i$ so that:

$$ V(\\delta(s_i, c_i), R)  \\land  V(\\delta(s'_i, c_i^{-1}))  = true$$

Here $c_i^{-1}$ is the inverse change, that is, we replace the insertions with deletions and the deletions with insertions.

What we've said here is that a change is reversible (or strictly reversible) if, after applying the change function $\\delta$, the program is still valid, that is, it still meets the requirements.

To get the inverse change using GIT, all you have to do is swap the order of the commits when producing the patch:

```bash
% git diff   bb6855a..629ee77
diff --git a/main.py b/main.py
index 8e35a13..d3b7ed7 100644
--- a/main.py
+++ b/main.py
@@ -1,13 +1,15 @@
 def main(n: int) -> int:
   if n <= 0: return n
-
+
   def sum_step(step):
-    p = (n-1) // step
-    return step * p * (p+1) // 2
+    sum = 0
+    for i in range(step, n, step):
+        sum += i
+    return sum
```

Before we had 4 deletions and two insertions; now we have two deletions and 4 insertions.

## Equilibrium

We'll say a program is in **equilibrium** for a specification $R$ if:

  $$ V(s_j, R) = V(\\delta(s_j, c_i), R) \\, \\, \\, {\\forall c_i \\in C \land s_j \\in S } $$

In other words, if we keep applying changes to our program and it remains valid for the requirements, the program is in equilibrium.

As in the case we analyzed, where we have:

$$C = \\{C_{47f88eb}, C_{629ee77}, C_{bb6855a}\\} $$

$$ V = \text{class Euler1Test} $$

$$ \\delta = \text{git apply} $$

It turns out `s-programs` have an interesting property: they are in equilibrium. That follows from the way Lehman defined them[^3].

What happens is that if the specification doesn't change, then the set $R$ doesn't "change" either. So we can rewrite our `s-program` to make improvements or optimizations without any trouble.

This equilibrium property matters a lot because it is what makes "refactoring" possible. It also demands that interfaces be immutable, and it lets us apply Lehman's idea of subdividing complex programs into a series of s-programs (other problems that add complexity come up here, such as coupling, which we'll deal with later).

By our definition the program is in equilibrium, and on top of that the changes are reversible. If this were thermodynamics we'd say the entropy of this system is constant. But this is not thermodynamics, so let's clear that up.

## Equilibrium and reversibility in P and E programs

We've analyzed the case of an s-program, but in the other cases the specifications change continuously, given the nature of the problems they solve.

There we have a more complex verification function, one that varies with every change in the specification.
What's more, there is also a function $\\delta'$, similar to the change function over a program, but applied to changes in the specification. We can assume the function $\\delta'$ for a `p-program` is simpler than for an `e-program`.

All of this shows that the analysis and the model built so far are too simple. But they let us get an intuition for what happens in reality, and they explain a relevant fact: the entropy of a `p-program` and of an `e-program` is always increasing, and equilibrium is reached when the program stops evolving. If that happens it's because the program is no longer relevant, has become obsolete, or has reached an application niche so specific that it needs no further changes (like certain utilities in some operating systems).

## So what would software entropy be?

With all that, do we now have a way to measure software entropy?

There are several things we've spotted in the program we analyzed. Let's list them:

1. The program's total lines of code have varied like this: 15, 17, 15.
2. The algorithmic complexity has gone from $O(n)$ to $O({3 \over 5} n)$ and finally to $O(1)$.
4. The changes made were: {+15, 0}, {+7, -5}, {+2, -4}

On the other hand, we've found that the program is in equilibrium, and we've even found a final solution; that is, in thermodynamic terms its entropy is at its maximum.

There is a way to measure entropy that Claude Shannon gave us: [information entropy](https://es.wikipedia.org/wiki/Entrop%C3%ADa_(información)).

Shannon's definition of entropy is a formula that involves computing the probabilities of all the configurations of the possible states of a system. Fortunately we have a practical application of Shannon's theory in the [Huffman coding](https://es.wikipedia.org/wiki/Codificación_Huffman) algorithm. The entropy, in bits, of a text $A$ containing the symbols $a_i$ with "weights" $w_i$ respectively would be given by the formula:

$$ H(A) = - \\sum_{w_i > 0} w_i \\log_2 w_i $$

We can compute that with this program:

```python
import sys
import collections
import math

def shannon(file_name):
  with open(file_name, "r") as file:
    source = file.read()
    w = collections.Counter(source)
    total = len(source)
    for k in w.keys():
       w[k] /= total
    h = -sum([w_i * math.log2(w_i) for w_i in w.values()])
    print(h)

if __name__ == '__main__' and len(sys.argv) == 2:
  shannon(sys.argv[1])
```

If we apply this function to the three versions of the program we get the values (4.2970074650902, 4.344081081107001, 4.484216162332524); the file sizes are (310, 375, 348).

What I'm about to say is purely anecdotal, and we can't generalize anything from it, but we do see that entropy is highest with the final solution.

Shannon entropy tells us we can compress our program and that, on average, we'll use between 4 and 5 bits to represent the symbols in it. That tells us we need about 32 distinct symbols to represent the program we wrote. This value can drop if we modify our program to treat certain keywords and operators specially; for example, `for` and `if` can be considered single symbols. In that case the entropy goes down. For this particular case I ran a trial with this program and got values around 3.7, which lets us say the program can be represented with a 16-character alphabet.

This has been used with n-gram based models to determine the "naturalness" of buggy programs, in particular in the paper ["On the “Naturalness” of Buggy Code"](https://web.cs.ucdavis.edu/~devanbu/odd-bugs.pdf), where they use Shannon entropy, but reduced to an alphabet of n-grams according to certain specific models, to show that programs with more bugs tend to have higher entropy.

Alternatively, we can turn to the definition of entropy that relates it to the probability of each state. We could ask which of our program's three states is the most likely. To find out we could run an experiment and ask several programmers to write a solution to this problem. Most likely the first version of our program would be the most common. We could assign a value to each state (solution) based on how often each solution shows up. As it happens, I've done exactly that: I've used this exercise as a test and in interviews. Unfortunately I don't have the data on how often each solution comes up, but I'd venture a result along the lines of (95%, 4%, 1%). If we apply this formula: $$S = -\\sum_{i} p_i \\log_2 {p_i} $$

We get the value 0.931. We could read that as confirmation that we're far more likely to get solution 1 than the other solutions. Personally I find this result unsatisfying.

There is another way to measure entropy, and here we turn again to Chaitin and to Kolmogorov's work on complexity. The Kolmogorov complexity of a given piece of information is the length of the shortest program that can represent it[^4]. Here we're looking for the shortest representations of the sequences of numbers that are the sums of 3 and 5 below n.

Kolmogorov would say the complexity in this case is 310 * 8, or 2480, because Kolmogorov complexity is expressed in bits, and that is the size of the shortest program we've found to represent this sequence of numbers. It is said that the entropy of the source (in this case the numbers that satisfy the property represented by our programs) converges to the Kolmogorov complexity. That tells us about the entropy of our program's output, not about the entropy of the programs themselves. So this doesn't look like a satisfying solution either, although it sets us up to understand, and maybe accept, our last proposal.

## Entropy and the size of a program

The change in entropy could be a function of the size of the program. In particular, I like to think that the entropy of a program is proportional to its size in lines of code.

Astrophysics uses a similar result for black holes. The first observation is that the area of a black hole cannot decrease, and the second is that the entropy of a black hole has been determined to be proportional to its area. The entropy of a black hole is given by this simple formula[^5]: $$ S = {A \over 4 } $$

Well, the area of a program can be its number of lines of code, or the bytes it takes up on disk. Let's define the entropy of a codebase by saying it is proportional to the number of lines of code it contains, as simple as that. That is:

$$H(\text{Codebase}) = k \times LoC$$

Where $LoC$ is the number of lines of code.

The exact value may not matter that much; what matters is the notion that entropy increases with every line of code introduced.

This may seem obvious to you, and maybe we didn't need to go around in all these circles; intuition has been telling us this for a while. But what matters are some of the concepts we introduced along the way.

One of the things I care about most is that you see GIT as a machine, or a function, that lets you apply changes to code to mutate it from one state to another. That may be the most important result of this article, because we'll apply it in what follows.

Finally, I want to quote the Nobel laureate in Chemistry Ilya Prigogine, who said:

> "the production of entropy always contains two dialectical elements: an element that creates disorder, but also an element that creates order. And the two are always linked"."

In general it is a mistake to see entropy only as disorder, but I'd better leave you with this video by Javier Santaolalla, which does a great job of clarifying the concept:

{{<youtube ttjM-dMPddY >}}

## Code

You can check out the three versions of this program in the following Replits:

- Initial version: <https://replit.com/@lnds/lndssoftwareentropy1>

- Improved loop: <https://replit.com/@lnds/lndssoftwareentropy2>

- Using Gauss's formula: <https://replit.com/@lnds/lndssoftwareentropy3>

The repository with the code shown here is at: <https://github.com/lnds/entropia_software>

[^1]: The sum of the first $n$ digits is $sum(n) = n * (n + 1) / 2$. So to compute the sum of the multiples of 3 below n we do $p = n / 3 \land sum_3(n) = p * (p + 1) / 2$ and for the multiples of 5: $p = n / 5 \land sum_5(n) = p * (p + 1) / 2$

[^2]: See <https://es.wikibooks.org/wiki/Chaitin,_Omega_y_otras_curiosidades_matemáticas>

[^3]: Note that I've left the so-called "non-functional requirements" out of this discussion, for example, "the solution must be fast". I suspect Lehman did the same, given the way he defined *s-programs*.

[^4]: I've discussed Kolmogorov complexity on this blog before, in this piece: <https://lnds.net/blog/lnds/2010/06/02/lo-simple-lo-complejo-y-lo-complicado/>

[^5]: <https://cuentos-cuanticos.com/2011/08/05/principio-holografico/>
