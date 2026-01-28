// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "* indicates co-first authors",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "A brief introduction of me.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/12/04/photo-gallery.html";
        
      },
    },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
      
        title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/05/01/tabs.html";
        
      },
    },{id: "post-a-post-with-typograms",
      
        title: "a post with typograms",
      
      description: "this is what included typograms code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/04/29/typograms.html";
        
      },
    },{id: "post-a-post-that-can-be-cited",
      
        title: "a post that can be cited",
      
      description: "this is what a post that can be cited looks like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/04/28/post-citation.html";
        
      },
    },{id: "post-a-post-with-pseudo-code",
      
        title: "a post with pseudo code",
      
      description: "this is what included pseudo code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/04/15/pseudocode.html";
        
      },
    },{id: "post-a-post-with-code-diff",
      
        title: "a post with code diff",
      
      description: "this is how you can display code diffs",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/27/code-diff.html";
        
      },
    },{id: "post-a-post-with-advanced-image-components",
      
        title: "a post with advanced image components",
      
      description: "this is what advanced image components could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/27/advanced-images.html";
        
      },
    },{id: "post-a-post-with-vega-lite",
      
        title: "a post with vega lite",
      
      description: "this is what included vega lite code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/27/vega-lite.html";
        
      },
    },{id: "post-a-post-with-geojson",
      
        title: "a post with geojson",
      
      description: "this is what included geojson code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/26/geojson-map.html";
        
      },
    },{id: "post-a-post-with-echarts",
      
        title: "a post with echarts",
      
      description: "this is what included echarts code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/26/echarts.html";
        
      },
    },{id: "post-a-post-with-chart-js",
      
        title: "a post with chart.js",
      
      description: "this is what included chart.js code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2024/01/26/chartjs.html";
        
      },
    },{id: "post-a-post-with-tikzjax",
      
        title: "a post with TikZJax",
      
      description: "this is what included TikZ code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/12/12/tikzjax.html";
        
      },
    },{id: "post-a-post-with-bibliography",
      
        title: "a post with bibliography",
      
      description: "an example of a blog post with bibliography",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/07/12/post-bibliography.html";
        
      },
    },{id: "post-a-post-with-jupyter-notebook",
      
        title: "a post with jupyter notebook",
      
      description: "an example of a blog post with jupyter notebook",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/07/04/jupyter-notebook.html";
        
      },
    },{id: "post-a-post-with-custom-blockquotes",
      
        title: "a post with custom blockquotes",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/05/12/custom-blockquotes.html";
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/04/25/sidebar-table-of-contents.html";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/04/25/audios.html";
        
      },
    },{id: "post-a-post-with-videos",
      
        title: "a post with videos",
      
      description: "this is what included videos could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/04/24/videos.html";
        
      },
    },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
      
        title: "displaying beautiful tables with Bootstrap Tables",
      
      description: "an example of how to use Bootstrap Tables",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/03/20/tables.html";
        
      },
    },{id: "post-a-post-with-table-of-contents",
      
        title: "a post with table of contents",
      
      description: "an example of a blog post with table of contents",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2023/03/20/table-of-contents.html";
        
      },
    },{id: "post-a-post-with-giscus-comments",
      
        title: "a post with giscus comments",
      
      description: "an example of a blog post with giscus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/external-services/2022/12/10/giscus-comments.html";
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/example_pdf.pdf";
        
      },
    },{id: "post-a-post-with-diagrams",
      
        title: "a post with diagrams",
      
      description: "an example of a blog post with diagrams",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/2021/07/04/diagrams.html";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/2021/05/22/distill.html";
        
      },
    },{id: "post-a-post-with-twitter",
      
        title: "a post with twitter",
      
      description: "an example of a blog post with twitter",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/external-services/2020/09/28/twitter.html";
        
      },
    },{id: "post-a-post-with-disqus-comments",
      
        title: "a post with disqus comments",
      
      description: "an example of a blog post with disqus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/external-services/2015/10/20/disqus-comments.html";
        
      },
    },{id: "post-a-post-with-math",
      
        title: "a post with math",
      
      description: "an example of a blog post with some math",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2015/10/20/math.html";
        
      },
    },{id: "post-a-post-with-code",
      
        title: "a post with code",
      
      description: "an example of a blog post with some code",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2015/07/15/code.html";
        
      },
    },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2015/05/15/images.html";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/sample-posts/2015/03/15/formatting-and-links.html";
        
      },
    },{id: "news-our-proposed-lightweight-photo-retouching-method-csrnet-was-accepted-by-eccv2020",
          title: 'Our proposed lightweight photo retouching method CSRNet was accepted by ECCV2020.',
          description: "",
          section: "News",},{id: "news-we-have-won-the-1st-place-of-aim2020-video-temporal-super-resolution-challenge-in-conjunction-with-eccv2020-the-technique-report-of-the-proposed-eqvi-model-can-be-found-at-here-code-is-available-at-here-the-official-challenge-report-can-be-found-at-here",
          title: 'We have won the 1st place of AIM2020 Video Temporal Super-Resolution Challenge (in...',
          description: "",
          section: "News",},{id: "news-we-have-won-the-3rd-place-of-udc2020-challenge-on-image-restoration-of-under-display-camera-in-conjunction-with-eccv2020-the-technique-report-of-the-proposed-rdunet-model-can-be-found-at-here-the-official-challenge-report-can-be-found-at-here",
          title: 'We have won the 3rd place of UDC2020 Challenge on Image Restoration of...',
          description: "",
          section: "News",},{id: "news-the-extention-version-of-the-lightweight-photo-retouching-network-csrnet-has-been-accepted-by-tmm-paper-links-conference-version-journal-version",
          title: 'The extention version of the lightweight photo retouching network CSRNet has been accepted...',
          description: "",
          section: "News",},{id: "news-our-survey-on-blind-image-super-resolution-has-been-accepted-by-tpami-paper-link",
          title: 'Our survey on Blind Image Super-Resolution has been accepted by TPAMI. Paper Link...',
          description: "",
          section: "News",},{id: "news-our-video-colorization-method-tcvc-was-accepted-by-cvmj-code-is-available-at-here",
          title: 'Our video colorization method TCVC was accepted by CVMJ. Code is available at...',
          description: "",
          section: "News",},{id: "news-two-papers-were-accepted-by-cvpr2023-degae-is-a-new-pretraining-paradigm-for-low-level-vision-maskeddenoising-adopts-masked-training-to-enhance-the-generalization-performance-of-denoising-networks",
          title: 'Two papers were accepted by CVPR2023. DegAE is a new pretraining paradigm for...',
          description: "",
          section: "News",},{id: "news-one-paper-was-accepted-by-tpami-srga-is-the-first-quantitative-indicator-for-measuring-the-generalization-ability-of-blind-super-resolution-deep-models",
          title: 'One paper was accepted by TPAMI. SRGA is the first quantitative indicator for...',
          description: "",
          section: "News",},{id: "news-promptgip-was-accepted-by-icml2024-promptgip-is-a-universal-model-for-general-image-processing-that-covers-image-restoration-image-enhancement-image-feature-extraction-tasks-etc-code-is-available-at-here",
          title: 'PromptGIP was accepted by ICML2024. PromptGIP is a universal model for general image...',
          description: "",
          section: "News",},{id: "news-two-papers-were-accepted-by-eccv2024-by-analyzing-the-relationships-between-image-degradations-grids-propose-a-grouped-learning-method-to-deal-with-multiple-degradation-restoration-x-restormer-is-a-new-general-image-restoration-backbone-network-which-possesses-good-task-generality-and-achieves-competitive-performance-across-a-variety-of-restoration-tasks",
          title: 'Two papers were accepted by ECCV2024. By analyzing the relationships between image degradations,...',
          description: "",
          section: "News",},{id: "news-genlv-was-accepted-by-acm-mm2024-genlv-is-a-successive-work-of-promptgip-which-further-broadens-the-tasks-and-improves-performance-the-paper-can-be-found-at-here",
          title: 'GenLV was accepted by ACM MM2024. GenLV is a successive work of PromptGIP,...',
          description: "",
          section: "News",},{id: "news-we-present-lunima-omnilv-abbreviated-as-omnilv-a-universal-multimodal-multi-task-framework-for-low-level-vision-that-addresses-over-100-sub-tasks-across-four-major-categories-including-image-restoration-image-enhancement-weak-semantic-dense-prediction-and-stylization-paper-homepage",
          title: 'We present Lunima-OmniLV (abbreviated as OmniLV), a universal multimodal multi-task framework for low-level...',
          description: "",
          section: "News",},{id: "news-our-video-colorization-method-tcvc-has-won-the-cvmj-2025-best-paper-honorable-mention-award",
          title: 'Our video colorization method TCVC has won the CVMJ 2025 Best Paper Honorable...',
          description: "",
          section: "News",},{id: "news-our-video-restoration-method-diffvsr-was-accepted-by-iccv2025-paper-homepage",
          title: 'Our video restoration method DiffVSR was accepted by ICCV2025. [Paper] [Homepage]',
          description: "",
          section: "News",},{id: "news-we-introduce-artimuse-a-multimodal-large-language-model-mllm-for-professional-aesthetic-understanding-which-is-trained-on-artimuse-10k-a-meticulously-curated-expert-annotated-dataset-artimuse-10k-systematically-defines-eight-explainable-and-fine-grained-aesthetic-attributes-e-g-composition-amp-amp-design-visual-elements-amp-amp-structure-with-a-wide-coverage-of-diverse-visual-domains-including-graphic-design-3d-design-aigc-generated-images-photography-and-painting-amp-amp-calligraphy-paper-homepage-github-online-demo-v1-0-note-artimuse-was-officially-released-at-waic-2025-in-the-forum-evolving-with-ai-the-iteration-and-resilience-of-artistic-creativity",
          title: 'We introduce ArtiMuse, a multimodal large language model (MLLM) for professional aesthetic understanding,...',
          description: "",
          section: "News",},{id: "news-we-are-excited-to-announce-lumina-dimoo-our-latest-unified-multimodal-generation-and-understanding-model-built-upon-an-advanced-discrete-diffusion-architecture-this-framework-demonstrates-the-strong-potential-of-multimodal-diffusion-large-language-models-dllm-to-unify-diverse-tasks-within-a-single-streamlined-architecture-while-delivering-state-of-the-art-performance-that-surpasses-many-existing-unified-models-learn-more-and-explore-resources-homepage-github-huggingface",
          title: 'We are excited to announce Lumina-DiMOO, our latest unified multimodal generation and understanding...',
          description: "",
          section: "News",},{id: "news-we-present-picabench-a-new-benchmark-and-evaluation-protocol-for-assessing-physical-realism-in-image-editing-an-often-overlooked-dimension-in-current-generative-models-picabench-systematically-evaluates-the-physical-consequences-across-eight-sub-dimensions-spanning-optics-mechanics-and-state-transitions-with-a-reliable-picaeval-protocol-combining-vlm-as-a-judge-and-region-level-human-annotations-we-also-build-pica-100k-a-dataset-for-learning-physics-from-videos-evaluations-show-that-physical-realism-remains-a-major-challenge-picabench-aims-to-drive-the-next-wave-of-physics-aware-causally-consistent-image-editing-homepage-github-picabench-dataset-pica-100k-dataset-paper",
          title: 'We present PICABench, a new benchmark and evaluation protocol for assessing physical realism...',
          description: "",
          section: "News",},{id: "news-i-m-happy-to-share-our-new-work-unipercept-which-tackles-a-key-blind-spot-of-today-s-multimodal-llms-perceptual-level-image-understanding-how-images-look-and-feel-to-humans-covering-aesthetics-quality-structure-and-texture-our-release-includes-unipercept-bench-a-unified-benchmark-spanning-iaa-iqa-ista-and-supporting-both-visual-rating-vr-and-visual-question-answering-vqa-evaluations-we-also-introduce-the-unipercept-baseline-model-to-generalize-across-vr-and-vqa-settings-beyond-benchmarking-unipercept-can-be-used-as-a-reward-model-for-post-training-text-to-image-systems-and-as-a-perceptual-diagnostic-tool-for-analyzing-model-outputs-and-datasets-homepage-github-unipercept-bench-unipercept-model-paper",
          title: 'I’m happy to share our new work UniPercept, which tackles a key blind...',
          description: "",
          section: "News",},{id: "news-four-papers-accepted-by-iclr-26",
          title: 'Four papers accepted by ICLR’26.',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/200/6534-1.html", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%69%75%79%69%68%61%6F%31%34@%6D%61%69%6C%73.%75%63%61%73.%61%63.%63%6E", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=WRIYcNwAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
