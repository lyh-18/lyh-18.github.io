---
layout: page
title: 科普文章
permalink: /popular-science/
nav: true
nav_order: 3
description: 把硬核知识，讲成有趣的故事。
---

<div class="science-archive">
  <section class="science-hero" aria-labelledby="science-hero-title">
    <div class="science-hero-copy">
      <span class="science-kicker">YIHAO'S POP SCIENCE LAB</span>
      <h2 id="science-hero-title">一本正经地，<br><em>打开科学脑洞</em></h2>
      <p>从爱情里的物理定律，到葫芦娃的黑科技——用熟悉的生活切片，拆解那些好玩又硬核的科学原理。</p>
      <a class="science-start" href="#articles">开始探索 <span aria-hidden="true">↓</span></a>
    </div>
    <div class="science-orbit" aria-hidden="true">
      <div class="orbit-ring ring-one"></div><div class="orbit-ring ring-two"></div>
      <span class="orbit-core">科<br>学</span>
      <span class="orbit-icon icon-heart">♥</span><span class="orbit-icon icon-atom">⚛</span>
      <span class="orbit-icon icon-wave">⌁</span><span class="orbit-icon icon-flask">⚗</span>
      <span class="orbit-dot dot-one"></span><span class="orbit-dot dot-two"></span><span class="orbit-dot dot-three"></span>
    </div>
  </section>

  <div class="science-marquee" aria-hidden="true"><span>物理 × 爱情　·　动画 × 科技　·　生活 × 科学　·　通信 × 社交　·　</span></div>

  <section id="articles" class="science-list" aria-labelledby="article-list-title">
    <div class="science-section-head">
      <div><span class="science-kicker">SELECTED STORIES</span><h2 id="article-list-title">脑洞文章选集</h2></div>
      <p><strong>{{ site.data.popular_science | size | prepend: '0' | slice: -2, 2 }}</strong> 篇趣味科普</p>
    </div>

    {% for article in site.data.popular_science %}
      {% assign number = forloop.index | prepend: '0' | slice: -2, 2 %}
      <a class="science-card card-{{ article.theme }}{% if forloop.even %} reverse{% endif %}" href="{{ article.url }}" target="_blank" rel="noopener noreferrer">
        <div class="card-art art-{{ article.art }}" aria-hidden="true">
          <span class="art-number">{{ number }}</span>
          {% case article.art %}
            {% when 'gravity' %}<i class="planet planet-a">♥</i><i class="planet planet-b">♥</i><b class="gravity-line"></b>
            {% when 'truth' %}<i class="broken-heart">♥</i><b class="pulse pulse-a"></b><b class="pulse pulse-b"></b>
            {% when 'gourd' %}<i class="gourd-head"></i><i class="gourd-body"></i><b class="gourd-ray ray-a"></b><b class="gourd-ray ray-b"></b><b class="gourd-ray ray-c"></b>
            {% when 'soil' %}<i class="parcel">11.11</i><b class="soil-layer layer-a"></b><b class="soil-layer layer-b"></b><b class="soil-layer layer-c"></b><em class="sprout">♧</em>
            {% when '5g' %}<i class="phone phone-a">●</i><i class="phone phone-b">♥</i><b class="signal signal-a"></b><b class="signal signal-b"></b><strong>5G</strong>
            {% else %}<span class="art-fallback">✦</span>
          {% endcase %}
        </div>
        <div class="card-copy">
          <div class="card-tags">{% for tag in article.tags %}<span>{{ tag }}</span>{% endfor %}</div>
          <h3>{{ article.title }}</h3>
          <p>{{ article.summary }}</p>
          <span class="read-link">阅读原文 ↗</span>
        </div>
      </a>
    {% endfor %}
  </section>

  <footer class="science-footer"><span>KEEP CURIOUS</span><p>科学并不遥远，它就在每一次好奇和追问里。</p><span aria-hidden="true">✦</span></footer>
</div>
