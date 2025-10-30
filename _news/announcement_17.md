---
layout: post
date: 2025-10-21 15:59:00-0400
inline: true
related_posts: false
---

We present **PICABench**, a new benchmark and evaluation protocol for assessing *physical realism* in image editing — an often overlooked dimension in current generative models. While modern editors can follow complex prompts like “remove a cup,” they often miss the physical consequences such as shadows, reflections, or object interactions. PICABench systematically evaluates these effects across eight sub-dimensions spanning optics, mechanics, and state transitions, with a reliable PICAEval protocol combining VLM-as-a-judge and region-level human annotations. We also build **PICA-100K**, a dataset for learning physics from videos. Evaluations show that physical realism remains a major challenge. PICABench aims to drive the next wave of physics-aware, causally consistent image editing. [[Homepage]](https://picabench.github.io/) [[GitHub]](https://github.com/Andrew0613/PICABench) [[
PICABench Dataset]](https://huggingface.co/datasets/Andrew613/PICABench) [[
PICA-100K Dataset]](https://huggingface.co/datasets/Andrew613/PICA-100K) [[Paper]](https://arxiv.org/abs/2510.17681).