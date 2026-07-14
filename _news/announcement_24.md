---
layout: post
date: 2026-07-10 15:59:00-0400
inline: true
related_posts: false
---

One paper accepted by **ACM MM'26**. **MIGM-Shortcut** accelerates masked image generation by learning latent controlled dynamics: instead of running the heavy base model at every sampling step, it uses a lightweight shortcut model to predict feature evolution from previous features and newly sampled tokens. Applied to MaskGIT and Lumina-DiMOO, MIGM-Shortcut greatly improves the quality-speed trade-off and achieves over 4x acceleration on Lumina-DiMOO while maintaining generation quality. [[Homepage]](https://kaiwen-zhu.github.io/research/migm-shortcut) [[Paper]](https://arxiv.org/abs/2602.23996).
