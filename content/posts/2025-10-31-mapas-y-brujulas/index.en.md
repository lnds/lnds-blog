+++
date = '2025-10-31T17:31:00-03:00'
title = 'Maps or compasses'
draft = false
slug = 'maps-or-compasses'
tags = ['AI', 'programming']
+++


When I posted on LinkedIn that I didn't believe in "prompt engineering", a debate broke out. One person even took it upon himself to explain to me the importance of the various branches of software engineering, because surely I considered those useless too. As if my skepticism about this neologism amounted to dismissing decades of accumulated knowledge in our discipline.

That's what happens on social media: from a single post, which may have its flaws, someone forms a mistaken idea of what you say and, worse, of who you are. So instead of continuing to argue with trolls and pedants, I'm going to try to explain myself better.

## Deer steps

The biblical metaphor[^1] tells us that the deer is able to reach great heights and stay safe from its adversaries. To do that, this mammal steps carefully, feeling out the terrain before rising above it, giving the impression of a sure stride. Yet there is a great deal of sensitivity and skill behind that climb.

The deer of the East, it seems, are agile animals with cloven hooves that let them move deftly over rocky, steep terrain. The ancients observed this and worked it into their prayers. And, as tends to happen in these literary pieces, there is an exaltation: you will reach great heights, just as the deer do, but you get to those lofty goals one small step at a time, with care, persistence, and of course will (your own or the divine kind).

{{<figure src="cierva.png" caption="Brown deer in the Rocky Mountains during the day, photograph by Oleg Avramenko, taken from Unsplash" >}}

There is wisdom here that we can use in our profession.

Curiously, and surely inspired by this ancient philosophy, Saint Thomas says in his
"Prayer for Ordering a Life Wisely":

> “Lord, my God, help me to be obedient without arguing, poor without complaining,
chaste without corruption, patient without grumbling, humble without pretense,
cheerful without excess, mature without being ponderous, **agile without being careless**,
fearful without despairing, truthful without duplicity; that when I do good
I not claim it as my own merit; that when I correct my neighbor I not do it
with superiority, but build him up by word and example, without pretending.”[^2]

Why so much prayer and so many biblical mentions, you may ask. Especially coming from a hardened atheist like me.

I quote this because, despite my position, I know how to appreciate wisdom where it exists. And because it helps explain my approach to AI-assisted programming.

## Alternatives to vibe coding

Vibe coding must be one of the most radical, most criticized, and shortest-lived proposals for building software we have ever seen. It will surely end up in the same place as No Code and every earlier attempt at programming without knowing how.

An engineer knows that any project calls for a systematic approach, one that mitigates risk.

When you talk about risk, most people think about nothing bad happening: the software not destroying something, not having vulnerabilities, and so on.

But in project management, risk also means anything that keeps us from reaching the objectives we set for our project. One of those risks being that we burn a lot of time and money.

Vibe coding is too risky to take seriously from an engineering perspective, except for prototyping, where it does add value.

"Entrepreneurs" love it, but many of these characters only think about making more and hate spending part of their money paying the professionals who actually know how to do things right (I don't understand how they expect to make more money if in the end we'll all be out of work, replaced by AI, and nobody will be able to buy their products).

So, what is the way to use this tool that is compatible with good software engineering?

{{<figure src="vibe-coder.png" caption="Programmer cat fixing the code created by a vibe coder. (Photo by Volodymyr Dobrovolskyy, taken from Unsplash)">}}

We know AIs "hallucinate", and we have to mitigate that risk. There are limits to the context window that coding agents can use.

Among the strategies that have been proposed I identify two, and they remind me of the kinds of novelists that exist. So I'll call them the school of Maps (Plotters) and the school of Compasses (Pantsers).

In fiction writing, people say there are two kinds of writers. The first kind are called "plotters": the ones who plan their whole novel in advance, outlining every scene and key plot point before writing the manuscript. In contrast we have the "pantsers", who improvise. They have no plan, just a general idea of what they want to express. There are also the "plantsers", who do a bit of both.

The term "pantser" comes from the phrase for people who write “by the seat of their pants”. It can be taken as pejorative, though several authors proudly identify with this way of writing.

Famous, self-declared plotters include J.K. Rowling, Brandon Sanderson, and John Grisham, who is said to write the last scene of every novel before he starts.

Famous pantsers are Stephen King, Isaac Asimov, and George R.R. Martin, the last of whom is incapable of finishing a saga and still has the nerve to sell it and turn it into a hit TV show. I identify with the pantsers, both in writing and in programming.

A plotter is someone who wants the map to be very clear before heading into unknown territory. The one who follows the process rigorously. In software, that would be someone from the more structured schools, with heavyweight processes like RUP or, if he considers himself agile (he isn't, in my opinion), SCRUM, where each sprint completes stages of a very well thought-out process.

Plotters, as I said, love maps. To use AI they will write PRDs, or use frameworks where they detail everything they need, and they will take pains to craft their prompts meticulously. They will embrace techniques like Spec-Driven Development. They will use tools like specify. If they use Claude, they will define tools and agents meticulously.

Pantsers, on the other hand, use the compass more than the map. They're clear on the direction, but the mystery of the territory fascinates them. To use AI they lean more on small iterations, taking "deer steps". They'll write a prompt to solve something small. Some will write tests before, others after, to avoid regressions. It's not that they have no process; their process is lighter.

Which approach is better? There's no way to settle it. You could say pantsers are more prolific, like Stephen King or Isaac Asimov, but then you have the case of R.R. Martin. And on the other side, Sanderson is the perfect counterexample: a very prolific plotter, capable of putting out several novels a year.

The same thing happens in AI-assisted programming. The plotters' heavyweight process doesn't seem to be inherently better. But, as usual in software engineering, we have few studies.

Vibe coding, in the long run, ends up producing unmaintainable, insecure code. The pantser or plotter approach, though, looks safer to us. It reduces risk, because it has a process (heavier or lighter) that cares about reducing risk.

Personally I lean toward the pantser style, because I prefer lighter processes. After all, lean software development is a school of software engineering as respected and effective as the more traditional or structured processes.

I don't think it makes sense to ask which process is better. You have to decide that yourself. I know colleagues who are super productive using a plotter model: they write highly detailed specifications (also with AI's help), they plan, and they have everything well defined before generating code with the agents.

Others of us are more like explorers, but with a method. We know what we want to achieve, and in my case I interact with the AI, keeping the limits of the context in mind, step by step. Do you get the deer reference now?

{{<figure src="mapa-con-brujula.png" caption="Map, compass, or both. Photograph by Denise Jans, taken from Unsplash">}}

I don't see one method being faster or better than the other. I think you have to decide for yourself what suits you, what gives you confidence. It's also not about being chaotic and dictating prompts and generating code willy-nilly. No, you need a method, a process, one you can adjust and optimize over time.

If you want me to tell you how I use AI day to day, what my process is, give this post a like and I'll write something more detailed.

And if you generally like the content of this blog, I invite you to share it. If you want to support me on [Patreon](https://www.patreon.com/cw/lnds), I've reactivated it and would appreciate your support as a patron. I'm preparing material that will be exclusive to those who sign up. You can also subscribe to my newsletter.

[^1]: See Psalm 18:33 and Habakkuk 3:19.
[^2]: There are phrases in this prayer we should consider before arguing on social media.
In my post [Anti-agile](https://lnds.net/blog/lnds/2018/07/01/anti-agil/) I also quote this
prayer to talk about agility. Source: <https://www.oblatos.com/oracion-de-santo-tomas-de-aquino-para-ordenar-la-propia-vida/>
