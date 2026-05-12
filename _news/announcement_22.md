---
layout: post
date: 2026-05-04 15:59:00-0400
inline: true
related_posts: false
---

I’m excited to share our ICML 2026 work **StableI2I**, a fidelity-oriented evaluation framework for image-to-image generation. Rather than only asking whether an edited/restored image looks good or follows the instruction, StableI2I focuses on **what has been unintentionally changed**. It jointly considers the input image, output image, and I2I instruction to diagnose content drift across **semantic consistency**, **structural fidelity**, and **low-level appearance**, covering errors such as object addition/removal/replacement, repainting, misalignment, noise, blur, and color cast. We release **StableI2I-Bench**, together with **StableI2I** and **StableI2I-PLUS** models, to support fine-grained I2I fidelity diagnosis and scoring for more faithful and controllable image editing/restoration systems. [[Homepage]](https://henry-lee-real.github.io/StableI2I_Page/) [[GitHub]](https://github.com/Henry-Lee-real/StableI2I) [[StableI2I-Bench]](https://huggingface.co/datasets/lijiayangCS/StableI2I_Bench) [[StableI2I Model]](https://huggingface.co/lijiayangCS/StableI2I) [[StableI2I-PLUS]](https://huggingface.co/lijiayangCS/StableI2I_PLUS) [[Paper]](https://arxiv.org/abs/2605.04453).
