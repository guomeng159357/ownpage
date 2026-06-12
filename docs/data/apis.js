window.API_DATA = {
  "updatedAt": "2026-06-12",
  "categories": [
    {
      "id": "official",
      "icon": "🏢",
      "title": "官方平台",
      "desc": "模型厂商直供，最稳定可靠，价格按官网标准。",
      "groups": [
        {
          "title": "🌍 海外厂商",
          "items": [
            { "name": "OpenAI", "url": "https://platform.openai.com", "desc": "GPT系列模型的官方API平台", "logo": "O", "tags": ["官方平台"], "tagType": "official", "active": true },
            { "name": "Google AI Studio", "url": "https://ai.google.dev", "desc": "Gemini官方API平台", "logo": "G", "tags": ["官方平台"], "tagType": "official", "active": true },
            { "name": "Anthropic", "url": "https://console.anthropic.com", "desc": "Claude系列模型官方API", "logo": "A", "tags": ["官方平台"], "tagType": "official", "active": true },
            { "name": "Cohere", "url": "https://cohere.com", "desc": "Cohere官方API平台", "logo": "C", "tags": ["官方平台"], "tagType": "official", "active": true },
            { "name": "Grok (xAI)", "url": "https://x.ai", "desc": "xAI公司出品，设计为具有幽默感并能访问实时信息", "logo": "G", "tags": ["官方平台"], "tagType": "official", "active": true },
            { "name": "Perplexity AI", "url": "https://www.perplexity.ai", "desc": "对话式AI搜索引擎，提供带引用来源的准确答案", "logo": "P", "tags": ["官方平台"], "tagType": "official", "active": true },
            { "name": "Groq Cloud", "url": "https://groq.com/groqcloud", "desc": "主打极高速LLM推理", "logo": "G", "tags": ["官方平台"], "tagType": "official", "active": true },
            { "name": "Cerebras", "url": "https://inference.cerebras.ai", "desc": "按token免费/限额LLM推理", "logo": "C", "tags": ["官方平台"], "tagType": "official", "active": true },
            { "name": "Hugging Face", "url": "https://huggingface.co/inference-api", "desc": "聚合多开源模型的Inference API", "logo": "H", "tags": ["官方平台"], "tagType": "official", "active": true },
            { "name": "GitHub Models", "url": "https://docs.github.com/github-models", "desc": "Azure托管的一批模型API", "logo": "G", "tags": ["官方平台"], "tagType": "official", "active": true }
          ]
        },
        {
          "title": "🇨🇳 国内厂商",
          "items": [
            { "name": "DeepSeek 官方API", "url": "https://platform.deepseek.com", "desc": "DeepSeek官方API平台，输入¥4/M Tokens，输出¥16/M Tokens", "logo": "D", "tags": ["官方平台"], "tagType": "official", "active": true },
            { "name": "阿里云百炼", "url": "https://www.aliyun.com/product/bailian", "desc": "阿里云百炼平台，主要调用Qwen模型系列", "logo": "阿", "tags": ["官方平台"], "tagType": "official", "active": true },
            { "name": "火山引擎 Ark", "url": "https://www.volcengine.com/product/ark", "desc": "字节跳动大模型服务平台", "logo": "火", "tags": ["官方平台"], "tagType": "official", "active": true },
            { "name": "智谱 GLM", "url": "https://open.bigmodel.cn", "desc": "智谱BigModel，提供GLM-4等模型", "logo": "智", "tags": ["官方平台"], "tagType": "official", "active": true },
            { "name": "百度智能云", "url": "https://console.bce.baidu.com", "desc": "百度智能云API平台，主要调用文心一言，价格实惠", "logo": "百", "tags": ["官方平台"], "tagType": "official", "active": true },
            { "name": "腾讯云混元", "url": "https://cloud.tencent.com/product/hunyuan", "desc": "腾讯云混元大模型API平台，支持DeepSeek等多模型", "logo": "腾", "tags": ["官方平台"], "tagType": "official", "active": true },
            { "name": "讯飞星火", "url": "https://xinghuo.xfyun.cn", "desc": "讯飞星火大模型API", "logo": "讯", "tags": ["官方平台"], "tagType": "official", "active": true },
            { "name": "Kimi（月之暗面）", "url": "https://kimi.moonshot.cn", "desc": "支持超长上下文，擅长长文本处理", "logo": "K", "tags": ["官方平台"], "tagType": "official", "active": true },
            { "name": "百川智能", "url": "https://www.baichuan-ai.com", "desc": "百川智能开源大语言模型，专注中文领域", "logo": "百", "tags": ["官方平台"], "tagType": "official", "active": true },
            { "name": "魔搭 ModelScope", "url": "https://modelscope.cn", "desc": "阿里魔搭，聚合Qwen/DeepSeek等开源模型", "logo": "魔", "tags": ["官方平台"], "tagType": "official", "active": true },
            { "name": "MiniMax", "url": "https://platform.minimaxi.com", "desc": "MiniMax官方API平台，提供abab系列模型", "logo": "M", "tags": ["官方平台"], "tagType": "official", "active": true },
            { "name": "商汤商量", "url": "https://techday.sensetime.com", "desc": "商汤大模型API", "logo": "商", "tags": ["官方平台"], "tagType": "official", "active": true },
            { "name": "昆仑天工", "url": "https://tiangong.kunlun.com", "desc": "昆仑万维天工大模型API", "logo": "昆", "tags": ["官方平台"], "tagType": "official", "active": true },
            { "name": "超算互联网", "url": "https://www.scnet.cn", "desc": "国家级大模型API平台，提供多种开源模型免费额度", "logo": "超", "tags": ["官方平台"], "tagType": "official", "active": true },
            { "name": "讯飞星辰 MaaS", "url": "https://training.xfyun.cn", "desc": "支持Spark、Qwen、DeepSeek等模型", "logo": "讯", "tags": ["官方平台"], "tagType": "official", "active": true }
          ]
        }
      ]
    },
    {
      "id": "relay",
      "icon": "🔄",
      "title": "第三方中转站",
      "desc": "非官方渠道，价格通常更便宜，但稳定性和安全性需自行评估。建议小额试用后再大规模接入。",
      "groups": [
        {
          "title": "🏆 贵且稳定类",
          "items": [
            { "name": "V-API", "url": "https://api.gpt.ge", "desc": "API老牌大站，支持的模型很多", "logo": "V", "tags": ["第三方"], "active": true },
            { "name": "AICodeMirror", "url": "https://www.aicodemirror.com", "desc": "国内第一批老牌CC/CX/Gemini编程工具中转站，官方纯血渠道（有点小贵），第三方逆向渠道同步开放", "logo": "A", "tags": ["第三方"], "active": true },
            { "name": "AIcodewith", "url": "https://aicodewith.com", "desc": "群友推荐比较稳定，能用Claude、OpenAI、Google的模型", "logo": "A", "tags": ["第三方"], "active": true },
            { "name": "OpenRouter", "url": "https://openrouter.ai", "desc": "老牌多模型网关，模型上新速度最快，稳定性也最好，价格同价多收充值手续费算是最贵", "logo": "O", "tags": ["官方聚合"], "tagType": "official", "active": true },
            { "name": "Poixe AI", "url": "https://poixe.com", "desc": "从2024年开始运营，较老的中转站。风格独特，支持多模型。价格偏高但质量很好，完全不注水，速度快。可开票，适合企业用户。", "logo": "P", "tags": ["第三方"], "active": true },
            { "name": "code0.ai", "url": "https://code0.ai", "desc": "企业级大模型API聚合平台，一个Key全覆盖。直连Claude/GPT/Gemini，支持人民币结算，按量计费无月租。", "logo": "C", "tags": ["第三方"], "active": true },
            { "name": "302.AI", "url": "https://302.ai", "desc": "按用量付费的企业级AI资源平台，提供最新最全面的海内外模型API，一个Key切换任意模型，官方原价效果稳定。", "logo": "3", "tags": ["第三方"], "active": true },
            { "name": "API2D", "url": "https://api2d.com", "desc": "运营时间较长的国内中转站，用户基数大，支持OpenAI全模型。价格中等，稳定性良好，有专属客服。", "logo": "A", "tags": ["第三方"], "active": true }
          ]
        },
        {
          "title": "💰 极致便宜类",
          "items": [
            { "name": "AnyAIGC中转站", "url": "https://anyaigc.com", "desc": "全网最稳定的官方企业级渠道，触达8个地区20万+客户，36个月稳定运营，承诺永久运营", "logo": "A", "tags": ["第三方"], "active": true },
            { "name": "小米API", "url": "https://vip.123everything.com", "desc": "除了文本模型，有特色的是视频和图片模型也比较全", "logo": "小", "tags": ["第三方"], "active": true },
            { "name": "deepkey", "url": "https://deepkey.top", "desc": "超高性价比，超低定价倍率0.1，提供Claude/GPT/Gemini源头货源，小白友好", "logo": "D", "tags": ["第三方"], "active": true },
            { "name": "Butcodex", "url": "https://api.butcodex.com", "desc": "专注GPT-5.4/5.5模型，价格0.1-0.8，随时可退款，成立时间：2026年2月", "logo": "B", "tags": ["第三方"], "active": true },
            { "name": "UoCode", "url": "https://www.uocode.com", "desc": "主打Claude和Codex系列模型", "logo": "U", "tags": ["第三方"], "active": true },
            { "name": "星链API", "url": "https://sub.chancexj.com", "desc": "主打GPT模型，满血不掺水，按量付费0.2倍率，充值1:1，可开个人工作室发票", "logo": "星", "tags": ["第三方"], "active": true },
            { "name": "云雾AI", "url": "https://yunwu.ai", "desc": "老牌中转站，覆盖Claude/GPT/Gemini/DeepSeek/国产模型。上新模型快，面向企业，稳定性好，可开票。", "logo": "云", "tags": ["第三方"], "active": true },
            { "name": "foxcode", "url": "https://foxcode.rjj.cc", "desc": "主打Claude的低价通道，写代码好用但部分是逆向接口，token消耗量比较快", "logo": "F", "tags": ["源头第三方"], "tagType": "source", "active": true },
            { "name": "E2 API", "url": "https://api.e2ez.com", "desc": "1元=10刀，你就说偏不便宜吧", "logo": "E", "tags": ["第三方"], "active": true },
            { "name": "Ekan8", "url": "https://api.ekan8.com", "desc": "只支持Claude Opus和Gemini。按次收费每次0.15元。是「酒馆」类站点里质量价格比最高的。", "logo": "E", "tags": ["第三方"], "active": true },
            { "name": "AI派", "url": "https://api.aipaibox.com", "desc": "较新的网站，只支持Claude、GPT、Gemini。自营号池价格极低，质量不错。", "logo": "A", "tags": ["第三方"], "active": true }
          ]
        },
        {
          "title": "✨ 小有特色类",
          "items": [
            { "name": "aiberm", "url": "https://aiberm.com", "desc": "运行几个月比较稳定，Claude系列模型统统1.9折", "logo": "A", "tags": ["第三方"], "active": true },
            { "name": "X-aio", "url": "https://dashboard.x-aio.com", "desc": "自己建的服务器节点，跑的小参数开源模型比较多，最近也上了coding套餐", "logo": "X", "tags": ["第三方"], "active": true },
            { "name": "Alsa", "url": "https://marketplace.aisa.one", "desc": "不止AI的API，同时支持YouTube、推特、财经数据类API，非常之全", "logo": "A", "tags": ["第三方"], "active": true },
            { "name": "WenModel", "url": "http://ai.wenmodel.com", "desc": "阿里出身团队，阿里云头部代理商，Qwen官方直连5折起，海外+国产模型覆盖6大厂商", "logo": "W", "tags": ["第三方"], "active": true },
            { "name": "RightCode", "url": "https://www.right.codes", "desc": "CODEX中最低价的中转站，只专注于Codex，适合预算有限的开发者", "logo": "R", "tags": ["源头第三方"], "tagType": "source", "active": true },
            { "name": "DGrid AI", "url": "https://dgrid.ai", "desc": "去中心化的AI智能网络，为开发者提供低成本、可验证的模型与智能体调用服务", "logo": "D", "tags": ["第三方"], "active": true },
            { "name": "MNAPI", "url": "https://www.mnapi.com", "desc": "聚合多家中转站的二道中转，主打代挑高性价比渠道和质量监测", "logo": "M", "tags": ["第三方"], "active": true },
            { "name": "claudeapi.com", "url": "https://console.claudeapi.com", "desc": "Claude API专属中转，稳定直连Anthropic官方模型，国内直连、人民币充值，Claude Code一键接入", "logo": "C", "tags": ["第三方"], "active": true }
          ]
        },
        {
          "title": "📦 其他优质中转站",
          "items": [
            { "name": "OhMyGpt", "url": "https://www.ohmygpt.com", "desc": "社区认可的"正经中转"，接入体验好效果也超级稳，收费就是原价", "logo": "O", "tags": ["官方聚合"], "tagType": "official", "active": true },
            { "name": "接口AI", "url": "https://jiekou.ai", "desc": "主打官方API，具备99.9%可用性，全天候运行支持。同时支持逆向渠道（明确标注）", "logo": "接", "tags": ["第三方"], "active": true },
            { "name": "NEXUS AI", "url": "https://nexus-xi.com", "desc": "一站式AI API中转服务平台，已接入DeepSeek V4系列模型，国内可用，无需海外信用卡", "logo": "N", "tags": ["第三方"], "active": true },
            { "name": "QQQRouter", "url": "https://www.qqqrouter.ai", "desc": "小白和个人用户有性价比超高的套餐；企业和开发者则有高性能高稳定性的专业API", "logo": "Q", "tags": ["第三方"], "active": true },
            { "name": "猫叔API", "url": "https://ms.ll9e.cn", "desc": "支持模型很多，覆盖Claude/GPT/Gemini。上新模型快，面向企业，稳定性好，可开票", "logo": "猫", "tags": ["第三方"], "active": true },
            { "name": "鸡哥API", "url": "https://api.yousebaby.com", "desc": "酒馆用户中较常见。支持Claude/Gemini/DeepSeek/Minimax。按次计费，质量不错不注水", "logo": "鸡", "tags": ["第三方"], "active": true },
            { "name": "ChatAnywhere", "url": "https://chatanywhere.tech", "desc": "价格竞争力强，GPT-4o mini和DeepSeek V3价格较低。支持国内支付宝付款", "logo": "C", "tags": ["第三方"], "active": true },
            { "name": "LAST API", "url": "https://www.last-api.ai", "desc": "提供企业级API调用，SLA长期稳定，主推Claude Code/Codex AI编程模型，可定制号池", "logo": "L", "tags": ["第三方"], "active": true },
            { "name": "毫秒API", "url": "https://api.holdai.top", "desc": "官key直连，支持高并发。运行了快一年了", "logo": "毫", "tags": ["第三方"], "active": true },
            { "name": "墨信AI", "url": "https://www.moxin.studio", "desc": "实体企业运行有淘宝旗舰店，可开发票，主做国外模型Gemini/Claude等", "logo": "墨", "tags": ["第三方"], "active": true },
            { "name": "AIHUBMIX", "url": "https://aihubmix.com", "desc": "美国公司背景、有云服务商授权，模型全价格接近官网，也支持了Claude Code", "logo": "A", "tags": ["第三方"], "active": true },
            { "name": "兔子API", "url": "https://api.tu-zi.com", "desc": "推荐的人很多，推特很活跃，有自己的技术开发，选择也比较多样", "logo": "兔", "tags": ["第三方"], "active": true },
            { "name": "老张API", "url": "https://api.laozhang.ai", "desc": "国内热门中转，折扣价有吸引力，主要稳定的是Claude", "logo": "老", "tags": ["第三方"], "active": true },
            { "name": "bltcy", "url": "https://api.bltcy.ai", "desc": "AZ+官转双路线，成功率九成左右稳定性不错，适合扛部分主力流量", "logo": "B", "tags": ["第三方"], "active": true },
            { "name": "v3", "url": "https://api.v3.cm", "desc": "模型超全的一站式中转，选择多上手简单，适合喜欢折腾多模型的开发者", "logo": "V", "tags": ["第三方"], "active": true },
            { "name": "chatfire", "url": "https://api.chatfire.cn", "desc": "源头服务商定位，支持多模态，Claude可用性高", "logo": "C", "tags": ["第三方"], "active": true },
            { "name": "柏拉图AI", "url": "https://www.hvoy.ai", "desc": "比较老的API站，支持市面上几乎所有模型，含MJ/可灵/豆包等。多地区节点，可开票", "logo": "柏", "tags": ["第三方"], "active": true },
            { "name": "ocoolAPI", "url": "https://one.ooo.cool", "desc": "文档详细适合小白，模型覆盖全", "logo": "O", "tags": ["第三方"], "active": true },
            { "name": "gptgod", "url": "https://gptgod.cloud", "desc": "官方+逆向混合路由，性价比高，适合当主力之一", "logo": "G", "tags": ["第三方"], "active": true },
            { "name": "TimiCC", "url": "https://timicc.com", "desc": "2026年1月成立，为编程准备。GPT team号基本免费，注册送1元", "logo": "T", "tags": ["第三方"], "active": true },
            { "name": "UIUIAPI", "url": "https://sg.uiuiapi.com", "desc": "国内用户友好的聚合平台，支付方式方便", "logo": "U", "tags": ["第三方"], "active": true },
            { "name": "ZetaTechs API", "url": "https://api.zetatechs.com", "desc": "Grok接口，速度挺快", "logo": "Z", "tags": ["第三方"], "active": true },
            { "name": "IkunCode", "url": "https://api.ikuncode.cc", "desc": "编程专用API中转平台，提供稳定的模型接入", "logo": "I", "tags": ["第三方"], "active": true },
            { "name": "AIspeed", "url": "https://aispeed.ai", "desc": "只卖Codex的中转站", "logo": "A", "tags": ["第三方"], "active": true },
            { "name": "硅基流动", "url": "https://cloud.siliconflow.cn", "desc": "偏企业级的大模型推理与API平台，强调稳定性与高可用", "logo": "硅", "tags": ["第三方"], "active": true },
            { "name": "071129", "url": "https://ai.071129.xyz", "desc": "公益站，GitHub登录即可使用", "logo": "0", "tags": ["第三方"], "active": true }
          ]
        }
      ]
    },
    {
      "id": "tools",
      "icon": "🛠️",
      "title": "开源工具",
      "desc": "可自行部署的API管理/中转工具。",
      "groups": [
        {
          "title": "核心工具",
          "items": [
            { "name": "New API", "url": "https://github.com/QuantumNous/new-api", "desc": "🔥 基于One API二次开发的新一代AI模型聚合管理系统，支持在线充值、多语言、现代化UI，7.5K+ Star", "logo": "N", "tags": ["开源项目"], "tagType": "tool", "active": true },
            { "name": "One API", "url": "https://github.com/songquanpeng/one-api", "desc": "LLM API管理&分发系统，支持多种主流模型统一API适配，24.2K+ Star，被大量中转站用作底层", "logo": "O", "tags": ["开源项目"], "tagType": "tool", "active": true },
            { "name": "v-api", "url": "https://github.com/popjane/v-api", "desc": "基于One-API二开的功能强大的中转平台，增强了后台管理功能", "logo": "V", "tags": ["开源项目"], "tagType": "tool", "active": true },
            { "name": "One API Hub", "url": "https://github.com/fxaxg/one-api-hub", "desc": "开源浏览器插件，聚合管理基于One-API和New-API的中转站账号余额、模型和密钥", "logo": "O", "tags": ["开源项目"], "tagType": "tool", "active": true },
            { "name": "claude-code-switch", "url": "https://github.com/gcloudream/claude-code-switch", "desc": "Claude Code中转站服务端，实现密钥管理、用量统计和转发功能", "logo": "C", "tags": ["开源项目"], "tagType": "tool", "active": true },
            { "name": "claudewarp", "url": "https://github.com/belingud/claudewarp", "desc": "Claude中转站管理工具(CLI+GUI)，一键切换环境变量", "logo": "C", "tags": ["开源项目"], "tagType": "tool", "active": true },
            { "name": "cc-switch", "url": "https://github.com/farion1231/cc-switch", "desc": "针对Claude Code的API供应商切换软件，不用手动修改配置文件", "logo": "C", "tags": ["开源项目"], "tagType": "tool", "active": true }
          ]
        }
      ]
    },
    {
      "id": "clients",
      "icon": "💻",
      "title": "客户端工具",
      "desc": "兼容各种API的桌面/网页客户端。",
      "groups": [
        {
          "title": "推荐客户端",
          "items": [
            { "name": "Ollama", "url": "https://ollama.com", "desc": "本地大模型运行工具，支持Llama/Qwen/DeepSeek等开源模型一键部署，无需联网，适合开发调试", "logo": "O", "tags": ["客户端"], "tagType": "tool", "active": true },
            { "name": "ChatBox", "url": "https://chatboxai.app/zh", "desc": "支持Windows、Android、macOS、网页版，免费使用，兼容各种API", "logo": "C", "tags": ["客户端"], "tagType": "tool", "active": true },
            { "name": "WorkBuddy", "url": "https://workbuddy.tencent.com", "desc": "腾讯云出品的AI桌面智能体，支持自定义API Key接入，可操控电脑自主执行任务，与企业微信深度集成", "logo": "W", "tags": ["客户端"], "tagType": "tool", "active": true },
            { "name": "NextChat", "url": "https://github.com/ChatGPTNextWeb/NextChat", "desc": "在线网页端开源WebUI，支持各种API接口，55.6K+ Star", "logo": "N", "tags": ["客户端"], "tagType": "tool", "active": true },
            { "name": "LibreChat", "url": "https://www.librechat.ai", "desc": "在线网页端开源WebUI，支持各种API接口", "logo": "L", "tags": ["客户端"], "tagType": "tool", "active": true },
            { "name": "Cherry Studio", "url": "https://cherry-ai.com", "desc": "主打桌面端，兼容各种API，界面美观易用", "logo": "C", "tags": ["客户端"], "tagType": "tool", "active": true },
            { "name": "LobeChat", "url": "https://github.com/lobehub/lobe-chat", "desc": "开源高性能聊天机器人框架，支持语音合成、多模态、插件系统", "logo": "L", "tags": ["客户端"], "tagType": "tool", "active": true },
            { "name": "EnConvo", "url": "https://www.enconvo.com", "desc": "专为macOS设计的AI客户端", "logo": "E", "tags": ["客户端"], "tagType": "tool", "active": true },
            { "name": "DeepChat", "url": "https://github.com/ThinkInAIXYZ/deepchat", "desc": "飞速发展，界面酷炫，开源免费", "logo": "D", "tags": ["客户端"], "tagType": "tool", "active": true }
          ]
        }
      ]
    }
  ]
}
