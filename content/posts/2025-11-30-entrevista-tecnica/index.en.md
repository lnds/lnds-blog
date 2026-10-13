+++
date = '2025-11-30T11:00:00-03:00'
draft = false 
title = 'The technical interview in the AI era'
slug = 'technical-interview-ai-era'
tags = ['AI', 'hiring', 'interviews', 'software engineering']
+++

The Argentine rock band Los Enanitos Verdes have a song that says "adding up time isn't adding up love", and the same applies to work experience. Having worked for many years doesn't make you "senior".

What makes you a senior developer is gaining relevant experiences, ones that have made you grow as a professional. I know plenty of people who have accumulated time, but not experience.

That's why a job interview shouldn't consist only of going over the résumé and asking questions. You have to see whether a ["juggler knows how to juggle"](/en/blog/lnds/2010/12/26/how-to-hire-jugglers/), as I wrote in 2010.

In that article I quoted DeMarco and Lister, authors of "Peopleware": "you wouldn't hire a juggler without seeing him juggle, but we hire engineers without seeing them program".

Back then I noticed that the custom in the Chilean industry was not to do much technical testing, trusting more in what the résumé and the references said. There were some technical questions, something on the whiteboard, but nothing very sophisticated.

Yet we could see that the processes elsewhere, mainly in the US, were long and complex, with real marathons of interviews and tests, including brain teasers. Google emerged as the model.

{{<figure src="interview.jpg" caption="Interview. (Photo by Charlesdeluvio, from Unsplash)">}}

I had been giving technical tests since at least 2000, but they were more a set of questions in the style of a university exam. Then, suddenly, we got more sophisticated. Some drifted toward the LeetCode style, with complicated questions about how to invert binary trees or implement a dynamic programming algorithm.

Others, like me and the teams I worked on, preferred a technical challenge closer to the reality of our work: build an application with such and such features, something that could take several hours, with the result usually delivered as a pull request. And afterwards a whiteboard interview on design or architecture.

## My return to the trenches

Then, during the pandemic, I decided to stop being a manager, go back to being a humble software engineer, return to my roots and do what I like most. Finding opportunities wasn't hard, but I started getting battle-hardened on American-style technical tests.

I solved piles of problems on Exercism and LeetCode. I went through tests worthy of a good hacker. I remember once sitting across from a seasoned sysadmin who opened the interview by asking for my public key so he could let me ssh into a server. That machine was maxed out, the CPUs were boiling, and my mission was to find out why and fix it.

I applied to a couple of American companies, but in the end I went to the unicorn that was the hot thing at the time, Cornershop, where they hired me more for my experience and because they knew me than for surviving technical marathons.

Until the leveling came, when we were acquired by Uber. We all had to pass that company's technical tests, which have a reputation for being among the hardest in the industry, and I can confirm it: they are. And very few people were happy with the results. I felt let down, and that's when all the doubt about these processes hits you.

Because technical interviews **are unfair**.

## The interview process is unfair

I'll say it again: **the interview process is inherently unfair**.

A friend put it well: "there's no way to get to know someone in one, two or ten interviews. Only time will tell whether it was a hit or a mistake. You can optimize the process, reduce the noise, set criteria, but in the end you're still placing a bet".

You have to accept this, and accepting it is the first step toward improving.

In 2010 I said I preferred good communicators over self-absorbed geniuses, and that I couldn't stand code copy-pasted from Google. That's true, but that was *my* bias. Today I no longer think about that, and I look at other things.
One important thing is to bring more people into the interview process, because they will almost certainly have a different view of the candidate. But it's crucial that hiring teams establish common ground. Individual biases don't go away, but at least you can make them explicit and counterbalance them.

### The trivia interview syndrome

A colleague told me about the case of an acquaintance, a senior developer with close to thirty years of experience. He took part in a selection process for a company and got a technical interview run by a relatively young interviewer, and it went badly.

The reason? The interviewer expected him to know by heart the exact names of products from Google Cloud, AWS and the rest. He wasn't evaluating real knowledge or the ability to solve problems. He was evaluating trivia.

This is an endemic problem. We confuse knowing facts with understanding. We confuse memory with competence. And now, with AI, this confusion becomes even more absurd.

## FizzBuzz in 2025

In that 2010 post I defended the FizzBuzz test as a basic filter. The logic was simple: if someone can't write a loop with a couple of ifs, they shouldn't be working as a software engineer. In my experience, 40% of candidates failed this test.

Today, anyone with access to ChatGPT, Claude or Copilot can solve FizzBuzz in seconds. The filter stopped working as we knew it.

But here's the interesting part: **it's not that FizzBuzz is irrelevant, it's that what it measured no longer matters in the same way**.

In the era of vibe coding, anyone can generate code. The question is no longer "can you write a loop?" but "can you tell when the code you generated is wrong? Can you maintain it? Can you explain why it does what it does?"

## New skills, new interview processes

In recent posts I've talked about [plotters vs pantsers](/en/blog/lnds/2025/10/31/maps-or-compasses/), about how [agentic programming makes the plotter style more efficient](/en/blog/lnds/2025/11/20/agentic-programming-plotter-style/), about how we're living through [the end of artisanal software](/en/blog/lnds/2025/08/27/the-end-of-artisanal-software/).

If code can be generated automatically, what distinguishes a good software engineer from someone who only knows how to write prompts?

Here are some ideas:

1. **Critical judgment**: Knows when the generated code is wrong, insecure, or unmaintainable.
2. **Architecture**: Understands how the pieces fit into a larger system.
3. **Communication**: Explains technical problems to non-technical stakeholders, and translates vague requirements into clear specifications.
4. **Debugging**: When the AI fails (and it does), somebody has to find the problem.
5. **Process**: Knows when to use AI and when not to. When to be a plotter and when to be a pantser.

All of these points make up what I call **understanding**. If you don't understand, you can't solve, and we must measure understanding; observing the points above lets you measure it.

The interview process today looks very different from the one in 2010.

**What isn't much use anymore:**

- **Coding tests on a whiteboard or on paper**: Without tools, you're evaluating memory, not competence.
- **Technical trivia questions**: The exact name of the AWS service for this? Google exists, and so does AI.
- **Textbook algorithms**: Unless the position specifically requires algorithmic optimization, reversing a linked list says nothing about the ability to deliver software.

**What matters now:**

- **Code review**: Show them code with subtle bugs, security problems, or bad practices. Do they catch them? Can they explain why they're problems?
- **System design**: Given an ambiguous problem, how do they approach it? Do they ask questions? Do they consider trade-offs?
- **Live debugging**: Give them a system that fails in a non-obvious way. How do they diagnose it? Do they use tools? Do they have a method?
- **Real pair programming**: Work with the candidate on a small but real problem. Don't evaluate whether they "know" the answer; evaluate how they think, how they collaborate, how they handle uncertainty.
- **References**: Talk to past employers and colleagues. It sounds old-fashioned, but it's still one of the most reliable signals.

**Should the candidate use AI?**

My answer: **yes, if that's how they'll be working**.

If the developers at your company use Copilot or Claude Code every day, it makes sense to evaluate how the candidate works *with* those tools. Do they blindly accept what it generates? Do they review it critically? Do they know when the AI is hallucinating?

Banning AI in the interview and then expecting them to use it on the job is absurd.

Back to the case of the senior rejected for not knowing the names of cloud products: this is expert bias in reverse. The young interviewer probably lives immersed in that ecosystem and finds it obvious that "everybody" should know those names.

But deep knowledge is transferable. Someone who understands distributed systems can learn the names of the AWS services in a week. Someone who only knows the names but doesn't understand the underlying concepts can't make the trip in the other direction.

Interviews should evaluate deep knowledge, not surface.

## Admitting uncertainty

In the end, every selection process is an exercise in reducing uncertainty. You don't eliminate it, you reduce it.

You can have the most elaborate process in the world and still get it wrong. The star candidate can be a disaster on the actual team. The nervous candidate who barely passed can become your best engineer.

The honest thing is to admit it. Set up a reasonable process, make it consistent, document the biases, and accept that you're going to make mistakes.

The difference between a good process and a bad one isn't the hit rate. It's the speed with which you detect and correct the mistakes.

## What I'm keeping from 2010

Some things haven't changed:

- I still believe software engineers should know how to program, even if that now includes knowing how to program *with* AI.
- I still prefer good communicators over antisocial geniuses.
- I still think the résumé lies and that you have to see people in action.

But I no longer believe FizzBuzz is the magic filter I thought it was, and I'm more aware of my biases. The world changed, and our evaluation methods have to change with it.

---

*How do you handle technical interviews at your companies? Have you adapted the process to the AI era? I'm interested in hearing experiences, from interviewers and interviewees alike.*

*If this topic interests you, subscribe to my [Patreon](https://www.patreon.com/cw/lnds). Your support matters: you'll get access to extra content I'm preparing, and a say in choosing the topics I develop on this blog.*
