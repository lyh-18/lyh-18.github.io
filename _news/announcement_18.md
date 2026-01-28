---
layout: post
date: 2025-12-30 15:59:00-0400
inline: true
related_posts: false
---

I’m happy to share our new work **UniPercept**, which tackles a key blind spot of today’s multimodal LLMs: perceptual-level image understanding — how images look and feel to humans — covering aesthetics, visual quality, structure, and texture. Unlike semantic understanding (what is in the image), perceptual understanding focuses on human visual judgments, which are increasingly important as modern generative and restoration systems often produce images that are semantically plausible but perceptually flawed.

Our release includes **UniPercept-Bench**, a unified benchmark spanning IAA/IQA/ISTA and supporting both Visual Rating (VR) and Visual Question Answering (VQA) evaluations. We also introduce the **UniPercept** baseline model, trained with domain-adaptive pre-training and task-aligned RL (GRPO-based) to generalize across VR and VQA settings.

Beyond benchmarking, UniPercept can be used as a reward model for post-training text-to-image systems and as a perceptual diagnostic tool for analyzing model outputs and datasets.


[[Homepage]](https://thunderbolt215.github.io/Unipercept-project/) [[GitHub]](https://github.com/thunderbolt215/UniPercept) [[
UniPercept-Bench]](https://huggingface.co/datasets/Thunderbolt215215/UniPercept-Bench) [[
UniPercept Model]](https://huggingface.co/Thunderbolt215215/UniPercept) [[Paper]](https://arxiv.org/abs/2512.21675).