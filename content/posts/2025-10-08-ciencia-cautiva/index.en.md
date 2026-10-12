+++
date = '2025-10-07T22:06:55-03:00'
draft = false
title = 'Captive science: the Timnit Gebru case and censorship in Big Tech'
slug = 'captive-science'
tags = ['AI', 'ethics', 'big tech', 'research']
+++

> "Have you ever heard of someone getting 'feedback' on a paper through a privileged and confidential document to HR? Or does it just happen to people like me who are constantly dehumanized?"
>
> — Timnit Gebru, in an internal email to Google Brain, November 2020

On December 2, 2020, while the tech industry was celebrating the advances of GPT-3 and the boom in massive language models, a tweet set off a crisis that revealed just how far Big Tech had come to control AI research. Timnit Gebru, an Ethiopian researcher out of Stanford and co-lead of Google's ethical AI team, announced she had been fired. The reason: daring to question the headlong race toward ever-larger models.

Gebru's story is not an isolated workplace dispute. It is the symptom of a deep transformation in how AI research gets done: from open academia to closed corporate labs, from scientific criticism to commercial complacency.

{{<figure src="TimnitGebru.jpg" caption="Timnit Gebru in 2018 (image taken from Wikipedia)" >}}

This story, told in detail in chapter 7 of Karen Hao's book ["Empire of AI"](https://amzn.to/3KCK2Mh), is very revealing.

## The paper that bothered Google

It all started with a paper called "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big? 🦜". Gebru and her coauthors, among them Emily Bender, professor of computational linguistics at the University of Washington, had documented four fundamental problems with massive language models:

1. **Environmental impact**: Training these models generates large carbon emissions. On a planet in climate crisis, that is no minor detail.

2. **Toxic garbage at scale**: By training on everything available on the internet, including Reddit, 4chan and forums that Gebru, as a Black woman, avoided precisely because of the systematic harassment, these models amplified racist and sexist biases and hate speech.

3. **Total opacity**: The datasets are so massive that auditing them is impossible. Nobody really knows what they contain.

4. **The illusion of meaning**: The outputs are so good that people mistake statistical patterns for real understanding, turning these systems into supposed "trusted advisors".

None of this was particularly controversial in academic terms. In fact, it cited well-established prior research. But there was a problem: Google had invented the Transformer, the technology underlying GPT-3, and used it in its most lucrative product: Google Search.

Criticizing massive language models meant criticizing the future of the business.

## The Kafkaesque process

What happened next shows us how modern corporate censorship operates. A week before Thanksgiving 2020, Gebru received a calendar invite with no explanation: a meeting with Megan Kacholia, VP of engineering at Google Research, in three hours.

The meeting lasted 30 minutes. Kacholia was direct: Gebru had to retract the paper.

It wasn't a request for revisions. It wasn't a request for clarifications. It was an order for full retraction.

Gebru asked the obvious: Who had objected? Could she talk to them? Could she revise specific sections? Could she publish it under a different affiliation?

No, no and no.

She had until the day after the holiday to retract it. Gebru cried at the end of the call.

Instead of enjoying time with her family, Gebru spent Thanksgiving writing a document rebutting every objection. Google's response was icy: retract the paper or remove the names of the Google authors.

Gebru replied that she would do so on two conditions: that they tell her who had given the feedback, and that they establish a transparent process for reviewing future research. Otherwise, she would resign after helping her team through the transition.

Google read this as an immediate resignation and fired her that same night, while she was driving in the middle of a road trip through Texas.

## The normalization of censorship

What is truly revealing about the Gebru case is not just that Google censored the paper. It's that it did so in a context where OpenAI had already legitimized corporate secrecy.

With GPT-2, OpenAI argued that the model was "too dangerous" to release. With GPT-3, they published a "sanitized" paper with almost zero information about how it was trained, something that used to be considered the academic bare minimum.

The message to the industry was clear: you no longer need to be transparent. And Google learned that lesson very well.

After ChatGPT, opacity became the norm. In 2023, Stanford researchers created a transparency tracker to assess whether AI companies disclosed basic information about their models: number of parameters, training data, independent verification.

All ten companies evaluated, OpenAI, Google and Anthropic included, got an F. The highest score was 54%.

## Big AI = Big Tobacco

For Karen Hao, Gebru's firing is a symbol of a bigger problem: Big AI is following the path of Big Tobacco. Concentration of resources, distortion of research, censorship of critical studies.

Two researchers put it bluntly: the AI industry is acting exactly like the tobacco companies of the 60s and 70s, suppressing research that threatens its commercial interests.

The case illustrates three pathologies of the current ecosystem:

**1. Total concentration of research power**: Only Big Tech has the computational resources to train massive models. That gives it absolute control over what gets researched and what gets published.

**2. Nonexistent diversity in positions of power**: Gebru had co-founded "Black in AI", an organization that gave visibility to research relevant to marginalized communities. Her ethical AI team was one of the most diverse at Google. Her firing eliminated that critical voice.

**3. Zero protection for whistleblowers**: Three months later, Google also fired Meg Mitchell, co-lead of the ethical AI team, for downloading emails related to the Gebru case. The message: whoever talks is out.

## Jeff Dean's obsession

There's an interesting detail in this whole story: [Jeff Dean](https://es.wikipedia.org/wiki/Jeff_Dean), the legendary Google engineer, one of its first employees and a revered figure in the AI community, could never get over the "Stochastic Parrots" paper.

Years after Gebru's firing, Dean was still obsessed with one specific section: the calculation of the carbon footprint of the Evolved Transformer model, based on research by [Emma Strubell](https://arxiv.org/abs/1906.02243).

Dean argued that Strubell had overestimated Google's emissions by a factor of 88 by using standard GPUs in the calculations, when Google used more efficient TPUs. Google employees joked in private that this objection would be engraved on his tombstone.

The problem: Strubell never claimed to be calculating Google's actual emissions. Google had never published that data. Strubell made an estimate based on industry-standard hardware, precisely because Google wasn't transparent.

So Google blamed Gebru for citing public estimates instead of internal data the company had never disclosed and which, on top of that, they forbade her from looking for before firing her.

A perfect [catch-22](https://en.wikipedia.org/wiki/Catch-22_(logic)) whose only possible outcome was censorship.

Dean later invited Strubell to take part in a paper "correcting" the supposed errors. Although the researcher enthusiastically accepted the invitation, it all fell apart because of Google's steamrolling attitude. Dave Patterson, a senior researcher at the company, made it clear, in a tense meeting, that it would be best for Strubell's career to participate.

Strubell took the words as a veiled threat and withdrew from the collaboration.

![](./empire_of_ai.jpg)

## The collapse of scientific integrity

Growing opacity has a devastating consequence: the erosion of scientific integrity.

The foundation of deep learning research is simple: training data must be different from test data. Without the ability to audit the training data, that paradigm collapses.

How do we know a model is really "getting more intelligent" when it scores better on benchmarks? We don't. It could simply be reciting memorized answers.

By the time OpenAI finally agreed to share technical details of GPT-3, and only so that Google researchers could calculate its carbon footprint and compare it with Strubell's, more than a year had passed since its launch.

This level of secrecy is incompatible with the scientific method.

## What future are we building?

The "Stochastic Parrots" paper ended with a central question: What kind of future are we building with AI? By and for whom?

The Gebru case answers that question brutally: a future where Big Tech controls not only the technology, but also what can be said about it. Where scientific criticism is subordinated to commercial interests. Where talented researchers are pushed out for asking the uncomfortable but necessary questions.

Gebru had been hired precisely to lead critical research in ethical AI. Google used her presence to polish its public image as a "responsible company". But when that research threatened the corporate narrative about LLMs, just when OpenAI had made them fashionable, Google got rid of her without a second thought.

An open letter in solidarity with Gebru gathered almost 7,000 signatures, including 2,700 Google employees. CEO Sundar Pichai issued a lukewarm apology. A new "center of expertise on responsible AI" was created.

But nothing fundamental changed.

After ChatGPT, censorship and secrecy accelerated. OpenAI stopped publishing at academic conferences. The rest of the industry sealed off access to the technical details of commercial models.

AI research, born in open universities where knowledge was shared freely, is now held captive in corporations that treat it as classified intellectual property.

It's no accident. It's strategy. As long as you and I can't audit these systems, as long as independent researchers can't verify their claims, as long as scientific criticism is silenced through firings and veiled threats, Big Tech can sell whatever it wants about its AI models.

And all we can do is take their word for it.

---

*This article is based on chapter 7, "Science in Captivity", of Karen Hao's book ["Empire of AI"](https://amzn.to/46JUBWE), which documents in detail the Timnit Gebru case and its implications for the future of AI research.*

*If you'd like to get analysis like this straight to your inbox, subscribe to my [newsletter](https://newsletter.lnds.net/) (in Spanish).*
