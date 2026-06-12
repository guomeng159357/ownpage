const USER = {
    name: '郭猛 Ammon',
};

const CONTENT = {
    // 导航
    brandName: '郭猛 Ammon',
    navHome: '主页',
    navAPI: 'API 聚合导航',
    navAI: 'AI 探索',
    navArticles: '文章分享',

    // Hero
    heroTitle: ['探索 AI', '分享所知'],
    heroSummary: '关注 AI 技术与应用，收藏并分享优质资源，记录学习与思考。',
    heroTags: ['AI', 'LLM', 'Open Source', 'Learning'],
    briefLabel1: 'AI 探索',
    briefValue1: '大模型、Agent、RAG 与开源工具',
    briefLabel2: '技术栈',
    briefValue2: 'LLM / Prompt Engineering / Full-stack',
    briefLabel3: '关注方向',
    briefValue3: 'AI 应用落地、知识分享与开源协作',
    signalRole: '探索方向',
    signalTitle: 'AI 与开源技术',
    signalStack: 'LLM / Agent / RAG / Open Source',

    // AI 探索
    aiKicker: 'AI Explore',
    aiTitle: 'AI 探索与资源推荐',
    filterAll: '全部',
    showMore: '显示更多',

    // AI 资源数据
    aiResources: [
        {
            title: 'API 聚合导航',
            description: '收录 AI 模型 API 中转/聚合服务、官方平台及工具资源，涵盖 OpenAI、Claude、Gemini、Qwen、DeepSeek 等主流模型，方便快速对比和选用。',
            tags: ['API', '中转站', '模型'],
            link: 'api-hub.html',
            category: '大模型'
        },
        {
            title: 'Claude Code 官方文档',
            description: 'Anthropic 推出的 AI 编程助手，深度理解代码库，支持终端、IDE 等多种环境。',
            tags: ['AI 编程', 'Claude'],
            link: 'https://docs.anthropic.com/en/docs/claude-code',
            category: 'AI工具'
        },
        {
            title: 'easy-openclaw — OpenClaw 配置向导',
            description: '面向 OpenClaw 的对话式配置向导 Skill，4 轮对话完成基础优化、渠道增强、Skills 扩展和新渠道接入，不用手改 JSON。',
            tags: ['OpenClaw', '配置', 'Skill'],
            link: 'articles/easy-openclaw.html',
            category: 'AI工具'
        },
        {
            title: 'OpenAI GPT 最佳实践指南',
            description: 'OpenAI 官方发布的提示词工程指南，涵盖六大策略，帮助更好地使用大模型。',
            tags: ['提示词', 'GPT'],
            link: 'https://platform.openai.com/docs/guides/prompt-engineering',
            category: '提示词'
        },
        {
            title: '思想伙伴 v3.5 — AI 对话提示词',
            description: '精心设计的 AI 思想伙伴系统提示词，融合真诚、倾听、共情、平等、指出盲区、长期主义等原则，适用于深度对话与思维整理。附一键复制功能。',
            tags: ['提示词', '思想伙伴', '深度对话'],
            link: 'articles/thought-partner-prompt.html',
            category: '提示词'
        },
        {
            title: 'AI 生成读书笔记 — 学术级提示词',
            description: '学术级读书笔记生成助手提示词，支持逐章产出结构化 Markdown 笔记，精准提炼主题、论点、证据链与术语。附输出模板与合规规范。',
            tags: ['提示词', '读书笔记', '学术'],
            link: 'articles/reading-notes-prompt.html',
            category: '提示词'
        },
        {
            title: 'LangChain 框架文档',
            description: '构建 LLM 应用的主流框架，支持链式调用、Agent、RAG 等核心模式。',
            tags: ['框架', 'Agent', 'RAG'],
            link: 'https://python.langchain.com/',
            category: '大模型'
        },
        {
            title: 'Anthropic 提示词工程指南',
            description: 'Anthropic 官方的提示词工程文档，涵盖 Claude 模型的最佳使用实践和技巧。',
            tags: ['提示词', 'Claude'],
            link: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering',
            category: '提示词'
        },
        {
            title: 'Hugging Face 模型库',
            description: '全球最大的开源 AI 模型社区，涵盖 NLP、CV、语音等领域的预训练模型。',
            tags: ['开源', '模型'],
            link: 'https://huggingface.co/',
            category: '开源'
        },
        {
            title: 'Cursor AI 编辑器',
            description: '基于 AI 的代码编辑器，集成 GPT/Claude 模型，支持智能代码补全和对话式编程。',
            tags: ['AI 编程', '编辑器'],
            link: 'https://cursor.sh/',
            category: 'AI工具'
        },
        {
            title: 'Ollama 本地大模型运行',
            description: '在本地运行 Llama、Mistral 等开源大模型，无需云端 API，保护数据隐私。',
            tags: ['开源', '本地部署'],
            link: 'https://ollama.ai/',
            category: '开源'
        },
        {
            title: 'RAG 检索增强生成综述',
            description: '深入理解 RAG 技术原理、架构设计与实际应用场景的全面指南。',
            tags: ['RAG', '大模型'],
            link: 'https://www.promptingguide.ai/zh/techniques/rag',
            category: '大模型'
        },
        {
            title: 'MCP 模型上下文协议',
            description: 'Anthropic 推出的开放协议，让 AI 模型安全地访问外部工具和数据源。',
            tags: ['协议', 'Agent', 'Claude'],
            link: 'https://modelcontextprotocol.io/',
            category: '大模型'
        }
    ],

    // 文章分享
    articlesKicker: 'Articles',
    articlesTitle: '文章分享',
    articleExpandLabel: '展开阅读',
    articleExternalLabel: '查看链接',

    articles: [
        {
            date: '2026.06',
            title: 'Codex + Obsidian + LLM Wiki：搭建本地 AI 知识库',
            summary: '保姆级教程：手把手教你用 Codex + Obsidian + LLM Wiki 把电脑搭成一个本地 AI 知识库，实现知识管理与 AI 深度融合，含 15 张详细截图。',
            content: [],
            link: 'articles/codex-obsidian-wiki.html',
            external: true
        },
        {
            date: '2026.06',
            title: '将 Codex 融入日常办公：从入门到精通',
            summary: '从零开始，逐步把 Codex 变成你的得力办公助手。涵盖晨间简报、文件整理、PPT 生成、数据分析等实战场景，附完整学习路径。',
            content: [],
            link: 'articles/codex-office-guide.html',
            external: true
        },
        {
            date: '2025.06',
            title: 'Codex Desktop 安装与 DeepSeek 接入手册',
            summary: '详细介绍 Codex Desktop 的下载安装、配置流程，以及如何接入 DeepSeek 大模型 API，包含完整的图文步骤说明，适合初次配置的用户参考。',
            content: [],
            link: 'articles/codex-desktop-setup.html',
            external: true
        },
        {
            date: '2026.06',
            title: 'Claude Code 安装与 DeepSeek 接入手册',
            summary: '详细介绍 Claude Code CLI 的安装配置流程，以及如何通过 CC Switch 图形化工具接入 DeepSeek API，附完整的常见问题排查指南。',
            content: [],
            link: 'articles/claude-code-deepseek-guide.html',
            external: true
        },
        {
            date: '2026.06',
            title: 'Codex++：让你的 Codex 更强大的神器',
            summary: 'Codex++ 是一款增强 Codex 编程助手能力的工具，提供多模型支持、一键配置切换和高级功能扩展，让 AI 编程体验更上一层楼。',
            content: [],
            link: 'articles/codex-plus-guide.html',
            external: true
        },
        {
            date: '2025.06',
            title: '如何高效使用 AI 编程助手',
            summary: '分享日常使用 AI 编程工具的经验与技巧，包括提示词编写、代码审查流程和常见问题的处理方式。',
            content: [
                '这是一篇示例文章的正文内容，你可以在这里撰写详细的内容。',
                '支持多个段落，每个段落作为列表中的一项。',
                '如果你有外部链接（如 Notion、飞书文档），也可以使用"查看链接"模式直接跳转。'
            ],
            link: '',
            external: false
        }
    ],

    // Footer
    footerName: '郭猛 Ammon',
    footerTop: '回到顶部'
};

// ========== 渲染函数 ==========

function renderList(name, items) {
    document.querySelectorAll(`[data-list="${name}"]`).forEach((container) => {
        const isTag = name === 'heroTags';
        container.replaceChildren();
        items.forEach((item) => {
            const el = document.createElement(isTag ? 'span' : 'li');
            el.textContent = item;
            container.append(el);
        });
    });
}

const INITIAL_SHOW_COUNT = 6;
const INITIAL_ARTICLE_SHOW = 2;

/** 渲染 AI 资源卡片 */
function renderResources(resources, activeCategory) {
    const container = document.querySelector('[data-resources]');
    if (!container) return;

    const filtered = activeCategory === 'all'
        ? resources
        : resources.filter((r) => r.category === activeCategory);

    container.replaceChildren();

    if (filtered.length === 0) {
        const empty = document.createElement('p');
        empty.className = 'empty-msg';
        empty.textContent = '该分类暂无资源';
        container.append(empty);
        updateShowMoreButton(0, 0);
        return;
    }

    const showAll = window._showAllResources || false;
    const visibleItems = showAll ? filtered : filtered.slice(0, INITIAL_SHOW_COUNT);

    visibleItems.forEach((resource, index) => {
        const card = document.createElement('article');
        card.className = 'resource-card reveal';
        card.style.transitionDelay = `${index * 60}ms`;

        const header = document.createElement('div');
        header.className = 'resource-header';

        const title = document.createElement('h3');
        title.textContent = resource.title;

        const categoryTag = document.createElement('span');
        categoryTag.className = 'resource-category';
        categoryTag.textContent = resource.category;

        header.append(title, categoryTag);

        const desc = document.createElement('p');
        desc.textContent = resource.description;

        const footer = document.createElement('div');
        footer.className = 'resource-footer';

        const tags = document.createElement('div');
        tags.className = 'resource-tags';
        resource.tags.forEach((tag) => {
            const t = document.createElement('span');
            t.textContent = tag;
            tags.append(t);
        });

        const link = document.createElement('a');
        link.className = 'resource-link';
        link.href = resource.link;
        link.target = '_blank';
        link.rel = 'noreferrer';
        link.textContent = '→';
        link.setAttribute('aria-label', resource.title);
        link.setAttribute('tabindex', '-1');

        footer.append(tags, link);
        card.append(header, desc, footer);

        // 整张卡片可点击
        card.addEventListener('click', (e) => {
            if (e.target.closest('details, summary, button, input')) return;
            window.open(resource.link, '_blank', 'noreferrer');
        });
        card.style.cursor = 'pointer';

        container.append(card);
    });

    updateShowMoreButton(filtered.length, visibleItems.length);
    setupRevealObserver();
}

/** 更新"显示更多"按钮状态 */
function updateShowMoreButton(total, visible) {
    const wrap = document.querySelector('[data-show-more-wrap]');
    const btn = document.querySelector('[data-show-more]');
    if (!wrap || !btn) return;

    if (total <= INITIAL_SHOW_COUNT) {
        wrap.style.display = 'none';
        window._showAllResources = false;
        return;
    }

    wrap.style.display = 'flex';
    if (visible < total) {
        btn.textContent = `显示更多 (${total - visible})`;
        window._showAllResources = false;
    } else {
        btn.textContent = '收起';
        window._showAllResources = true;
    }
}

/** 切换显示更多/收起 */
function toggleShowMore() {
    window._showAllResources = !window._showAllResources;
    renderResources(CONTENT.aiResources, currentFilter);
}

/** 渲染分类筛选标签 */
function renderFilterTabs(categories, activeCategory) {
    const container = document.querySelector('[data-filter-tabs]');
    if (!container) return;

    container.replaceChildren();

    const allBtn = document.createElement('button');
    allBtn.className = 'filter-tab' + (activeCategory === 'all' ? ' active' : '');
    allBtn.textContent = CONTENT.filterAll;
    allBtn.addEventListener('click', () => {
        setActiveFilter('all');
    });
    container.append(allBtn);

    categories.forEach((cat) => {
        const btn = document.createElement('button');
        btn.className = 'filter-tab' + (activeCategory === cat ? ' active' : '');
        btn.textContent = cat;
        btn.addEventListener('click', () => {
            setActiveFilter(cat);
        });
        container.append(btn);
    });
}

let currentFilter = 'all';

function setActiveFilter(category) {
    currentFilter = category;
    window._showAllResources = false;
    const categories = [...new Set(CONTENT.aiResources.map((r) => r.category))];
    renderFilterTabs(categories, category);
    renderResources(CONTENT.aiResources, category);
}

/** 渲染文章列表 */
function renderArticles(articles) {
    const container = document.querySelector('[data-articles]');
    if (!container) return;

    container.replaceChildren();

    if (articles.length === 0) {
        const empty = document.createElement('p');
        empty.className = 'empty-msg';
        empty.textContent = '暂无文章';
        container.append(empty);
        updateArticlesShowMoreButton(0, 0);
        return;
    }

    const showAll = window._showAllArticles || false;
    const visibleItems = showAll ? articles : articles.slice(0, INITIAL_ARTICLE_SHOW);

    visibleItems.forEach((article, index) => {
        const card = document.createElement('article');
        card.className = 'article-card reveal';

        const meta = document.createElement('div');
        meta.className = 'article-meta';

        const date = document.createElement('time');
        date.textContent = article.date;

        const badge = document.createElement('span');
        badge.className = 'article-badge';
        badge.textContent = article.external ? '外链' : '正文';

        meta.append(date, badge);

        const title = document.createElement('h3');
        title.textContent = article.title;

        const summary = document.createElement('p');
        summary.className = 'article-summary';
        summary.textContent = article.summary;

        card.append(meta, title, summary);

        if (article.external && article.link) {
            const link = document.createElement('a');
            link.className = 'article-link external-link';
            link.href = article.link;
            link.target = '_blank';
            link.rel = 'noreferrer';
            link.textContent = CONTENT.articleExternalLabel + ' →';
            card.append(link);
        } else if (article.content && article.content.length > 0) {
            const details = document.createElement('details');
            details.className = 'article-details';

            const summaryEl = document.createElement('summary');
            summaryEl.textContent = CONTENT.articleExpandLabel;

            const content = document.createElement('div');
            content.className = 'article-content';
            article.content.forEach((para) => {
                const p = document.createElement('p');
                p.textContent = para;
                content.append(p);
            });

            details.append(summaryEl, content);
            card.append(details);
        }

        container.append(card);
    });

    updateArticlesShowMoreButton(articles.length, visibleItems.length);
    setupRevealObserver();
}

/** 更新文章"显示更多"按钮状态 */
function updateArticlesShowMoreButton(total, visible) {
    const wrap = document.querySelector('[data-articles-show-more-wrap]');
    const btn = document.querySelector('[data-articles-show-more]');
    if (!wrap || !btn) return;

    if (total <= INITIAL_ARTICLE_SHOW) {
        wrap.style.display = 'none';
        window._showAllArticles = false;
        return;
    }

    wrap.style.display = 'flex';
    if (visible < total) {
        btn.textContent = `显示更多 (${total - visible})`;
        window._showAllArticles = false;
    } else {
        btn.textContent = '收起';
        window._showAllArticles = true;
    }
}

/** 切换文章显示更多/收起 */
function toggleArticlesShowMore() {
    window._showAllArticles = !window._showAllArticles;
    renderArticles(CONTENT.articles);
}

// ========== 滚动动画 ==========

let revealObserver;

function setupRevealObserver() {
    const items = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
        items.forEach((item) => item.classList.add('visible'));
        return;
    }

    revealObserver?.disconnect();
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    revealObserver = observer;

    items.forEach((item) => {
        item.classList.remove('visible');
        revealObserver.observe(item);
    });
}

// ========== 页面渲染 ==========

function applyContent() {
    document.documentElement.lang = 'zh-CN';
    document.title = '个人主页 | AI 探索与文章分享';

    // 普通文本
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (CONTENT[key]) el.textContent = CONTENT[key];
    });

    // 多行文本（Hero h1）
    document.querySelectorAll('[data-i18n-lines]').forEach((el) => {
        const key = el.getAttribute('data-i18n-lines');
        if (!Array.isArray(CONTENT[key])) return;
        el.replaceChildren();
        CONTENT[key].forEach((line) => {
            const span = document.createElement('span');
            span.textContent = line;
            el.append(span);
        });
    });

    // 列表渲染
    renderList('heroTags', CONTENT.heroTags);

    // AI 资源
    const categories = [...new Set(CONTENT.aiResources.map((r) => r.category))];
    renderFilterTabs(categories, currentFilter);
    renderResources(CONTENT.aiResources, currentFilter);

    // 文章
    renderArticles(CONTENT.articles);

    setupRevealObserver();
}

// ========== 移动端菜单 ==========

function closeMobileMenu() {
    document.body.classList.remove('menu-open');
    document.querySelector('[data-mobile-menu]')?.classList.remove('active');
    const button = document.querySelector('[data-menu-toggle]');
    if (button) {
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', '打开菜单');
    }
}

function setupInteractions() {
    // 移动菜单切换
    document.querySelector('[data-menu-toggle]')?.addEventListener('click', (event) => {
        const open = document.body.classList.toggle('menu-open');
        document.querySelector('[data-mobile-menu]')?.classList.toggle('active', open);
        event.currentTarget.setAttribute('aria-expanded', String(open));
        event.currentTarget.setAttribute('aria-label', open ? '关闭菜单' : '打开菜单');
    });

    // 显示更多按钮（AI 资源）
    document.querySelector('[data-show-more]')?.addEventListener('click', toggleShowMore);

    // 显示更多按钮（文章）
    document.querySelector('[data-articles-show-more]')?.addEventListener('click', toggleArticlesShowMore);

    // 点击导航链接关闭移动菜单
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', closeMobileMenu);
    });
}

// ========== 启动 ==========

document.addEventListener('DOMContentLoaded', () => {
    setupInteractions();
    applyContent();
});
