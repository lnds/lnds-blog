+++
date = '2026-02-25T10:00:00-03:00'
title = 'Kimun: measuring the quality of AI-generated code'
slug = "kimun-measuring-ai-generated-code-quality"
tags = ["AI", "quality", "software development", "tools", "kimun", "Claude", "metrics"]
images = ["kimun.png"]
+++

> "You can't control what you can't measure." -- Tom DeMarco

There's an old fear in our profession. It isn't new, but AI amplified it: **how do I know the code I'm generating is any good?**

It's a legitimate question. When you ask an AI agent to write you a function, a complete module or even an entire project, you're delegating decisions you used to make line by line. And yes, the result may compile, pass the tests and even look elegant. But is it maintainable? Is it too complex? Does it have hidden duplication? Will you understand it in six months?

The answer can't be an act of faith. It has to be a measurement.

<!--more-->

Many developers blindly trust the code AI generates. Others reject it on principle. Both positions are comfortable, and both are wrong.

What we need are tools that let us **objectively evaluate** code quality, wherever the code comes from: a human, an LLM or a combination of the two.

There are commercial products for this. Codacy, SonarQube, CodeClimate, they all do a respectable job. But I wanted something different: a tool that was **fast, that ran in the terminal, that could integrate directly with AI agents**, and that was grounded in solid research, not in arbitrary rules invented by a committee.

That's how **Kimun** was born.

{{< figure src="kimun.png" >}}

## What is Kimun?

Kimun (from "kimün", a Mapudungun word meaning "knowledge" or "wisdom") is a command-line tool for code quality analysis. A single binary (`km`) that replaces a whole collection of tools: `cloc` for counting lines, SonarQube for complexity, and Adam Tornhill's ideas for temporal analysis.

It's written in Rust, it's fast, and it supports more than 16 languages for complexity analysis and more than 40 for simple code metrics.

## The science behind Kimun

I didn't invent anything new. Kimun implements metrics with decades of research behind them:

### Halstead metrics

In 1977, Maurice Halstead proposed measuring software as if it were a physical phenomenon. His metrics extract operators and operands from the source code to compute:

- **Volume**: the size of the program in bits of information
- **Difficulty**: the mental effort needed to understand it
- **Effort**: the total work required
- **Bug estimate**: defects predicted by the formula V/3000

Halstead was criticized in his day. But his metrics are still surprisingly useful as relative indicators: they tell you which files are denser, more error-prone, more expensive to maintain.

### Cyclomatic complexity

Thomas McCabe, in 1976, proposed counting the independent paths through the code. Every `if`, every `for`, every `while` adds a path. More paths, more possible states, harder to test and to understand.

### Tornhill's work

Adam Tornhill changed the way we think about code quality with his books *"Your Code as a Crime Scene"* and *"Software Design X-Rays"*. His key insight: **the most problematic code isn't the most complex code, it's the code that is complex AND changes frequently**.

Kimun implements three analyses inspired by Tornhill:

- **Hotspots**: combines the frequency of changes in git with code complexity. A complex file nobody touches is a minor risk. A complex file that gets modified every week is a time bomb.
- **Knowledge maps**: analyzes `git blame` to detect concentration of knowledge. If a single person owns more than 80% of a critical module, you have a *bus factor* problem.
- **Temporal coupling**: identifies files that always change together in commits, revealing hidden architectural dependencies.

### Indentation complexity

Also inspired by Tornhill, Kimun measures the variance of indentation depth. It's a simple but powerful heuristic: deeply nested code is code that's hard to follow. The standard deviation of indentation correlates well with the complexity developers perceive.

## The Score: a grade for your code

Kimun's flagship command is `km score`. It combines six dimensions into an aggregate grade, from A++ to F--:

| Dimension | Weight | What it measures |
|---|---|---|
| Maintainability Index | 30% | Overall maintainability (0-100) |
| Cyclomatic Complexity | 20% | Maximum complexity per file |
| Duplication | 15% | Percentage of duplicated code |
| Indentation Complexity | 15% | Variance of nesting depth |
| Halstead Effort | 15% | Mental effort per line of code |
| File Size | 5% | Optimal range: 50-300 LOC |

Running it is trivial:

```bash
km score .
```

And you get a table with your project's grade, plus a breakdown by dimension. If you want to see the most problematic files:

```bash
km score . --bottom 20
```

This shows you the 20 files that most need attention. It's perfect for prioritizing refactoring.

Need to integrate it into a CI/CD pipeline? Every command supports JSON output:

```bash
km score . --json
```

## Integrating it with Claude Code

This is where it gets interesting. Kimun integrates directly with Claude Code. A single command:

```bash
km ai skill claude
```

This installs a *skill* that teaches Claude Code all the available `km` commands. Once it's installed, you can ask for things like:

> "Analyze the code quality of this project"

> "Show me the hotspots from the last 6 months"

> "Which files have the worst maintainability?"

Claude Code will run the appropriate `km` commands, interpret the JSON results and give you a narrative analysis. It's like having a code auditor who speaks your language.

The beauty of this is that it **closes the loop**: you use AI to generate code, and then you use AI + objective metrics to evaluate that code. It's not blind faith. It's assisted verification.

## Installation

The easiest way is with Homebrew:

```bash
brew tap lnds/kimun && brew install kimun
```

If you already have the Rust toolchain installed, you can also use Cargo:

```bash
cargo install kimun
```

And if you'd rather download the compiled binary directly, there are builds available for macOS (Apple Silicon), Linux (x86_64 and ARM) and Windows on the [releases page](https://github.com/lnds/kimun/releases).

## Why I built this

I've been using AI agents to write code for months. And I realized the conversation about quality was dominated by two extremes: the evangelists who say AI writes perfect code, and the skeptics who say everything it generates is garbage.

The truth, as always, is in the data. Not in the opinions.

Kimun is my way of putting numbers on the table. Of saying: "this module has a cyclomatic complexity of 47 and a maintainability index of 23. It doesn't matter who wrote it, it has to be refactored."

Metrics don't replace human judgment. But they give you an objective basis for making decisions. And when you're generating hundreds of lines of code per hour with AI assistance, that objective basis is more necessary than ever.

## Try it

The code is on [GitHub](https://github.com/lnds/kimun). It's open source, it's actively maintained, and I accept contributions.

Run `km score .` on your project. Look at the grade. If it surprises you, good, that's what metrics are for: to show you what you didn't want to see.

---

If this kind of content interests you, subscribe to my [newsletter](https://newsletter.lnds.net/) (in Spanish). I write about software development, AI and the things that really matter in our profession.
