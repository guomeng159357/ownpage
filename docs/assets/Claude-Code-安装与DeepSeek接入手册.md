# Claude Code 下载安装 & 接入 DeepSeek API 手册

> **版本**：v1.1  
> **最后更新**：2026年6月  
> **适用平台**：macOS / Windows / Linux  
> **目标用户**：有基本命令行使用经验的开发者  

---

## 目录

- [第一章：概述](#第一章概述)
  - [1.1 什么是 Claude Code](#11-什么是-claude-code)
  - [1.2 为什么要接入 DeepSeek](#12-为什么要接入-deepseek)
  - [1.3 本手册的技术路线](#13-本手册的技术路线)
- [第二章：环境准备](#第二章环境准备)
  - [2.1 系统要求](#21-系统要求)
  - [2.2 安装 Node.js 18+](#22-安装-nodejs-18)
  - [2.3 安装 Git 2.38+](#23-安装-git-238)
  - [2.4 注册 DeepSeek 并获取 API Key](#24-注册-deepseek-并获取-api-key)
  - [2.5 环境准备检查清单](#25-环境准备检查清单)
- [第三章：安装 Claude Code](#第三章安装-claude-code)
  - [3.1 通过 npm 全局安装](#31-通过-npm-全局安装)
  - [3.2 验证安装](#32-验证安装)
  - [3.3 跳过新手引导](#33-跳过新手引导)
- [第四章：安装并配置 CC Switch](#第四章安装并配置-cc-switch)
  - [4.1 CC Switch 简介](#41-cc-switch-简介)
  - [4.2 安装 CC Switch](#42-安装-cc-switch)
  - [4.3 添加 DeepSeek 提供商](#43-添加-deepseek-提供商)
  - [4.4 选择 DeepSeek 为当前活跃提供商](#44-选择-deepseek-为当前活跃提供商)
  - [4.5 关键注意事项](#45-关键注意事项)
- [第五章：验证一切正常](#第五章验证一切正常)
  - [5.1 启动 Claude Code](#51-启动-claude-code)
  - [5.2 简单对话测试](#52-简单对话测试)
  - [5.3 如何确认当前走的是 DeepSeek](#53-如何确认当前走的是-deepseek)
- [第六章：进阶配置](#第六章进阶配置)
  - [6.1 VS Code 扩展版 Claude Code 的配置](#61-vs-code-扩展版-claude-code-的配置)
  - [6.2 多供应商切换](#62-多供应商切换)
  - [6.3 MCP 服务器管理](#63-mcp-服务器管理)
- [附录 A：备选方案](#附录-a备选方案)
  - [A.1 手动环境变量配置（不用 CC Switch）](#a1-手动环境变量配置不用-cc-switch)
  - [A.2 CLI 版切换工具](#a2-cli-版切换工具)
  - [A.3 代理方案（高级 / 特殊场景）](#a3-代理方案高级--特殊场景)
- [附录 B：常见问题排查](#附录-b常见问题排查)

---

## 第一章：概述

### 1.1 什么是 Claude Code

Claude Code 是 Anthropic 官方推出的**终端 AI 编程助手**，它可以直接在命令行中理解你的整个代码库、执行操作、编辑文件、运行命令，并与 GitHub 等工具深度集成。你可以把它理解为一位驻扎在你项目目录里的资深开发者——它能读代码、写代码、调试、甚至帮你管理 Git 工作流。

Claude Code 同时提供以下形态：

| 形态 | 说明 |
|------|------|
| **CLI 命令行** | 终端中直接运行 `claude`，功能最完整 |
| **VS Code 扩展** | 在 IDE 侧边栏中使用 |
| **桌面应用** | Mac/Windows 原生应用（JetBrains 插件也可用） |
| **Web 版** | claude.ai/code，无需安装 |

本手册以 **CLI 命令行版本** 为主要安装目标。

### 1.2 为什么要接入 DeepSeek

Claude Code 默认对接 Anthropic 官方 API（Claude 系列模型）。但如果你在中国大陆使用，可能会面临以下痛点：

- **网络访问困难**：Anthropic API 在国内可能无法直连
- **付费门槛**：Claude Pro 订阅 $20/月（约 ¥140/月），对于个人开发者不便宜
- **按量付费更灵活**：DeepSeek 提供按 token 计费，日常开发可能不到 ¥20/月

DeepSeek V4 系列模型的能力已经非常出色，而且——关键点——**DeepSeek 提供了原生的 Anthropic 兼容 API 端点**，这意味着无需任何中间代理即可直接替换。

**成本参考**：

| 方案 | 费用 |
|------|------|
| Claude Pro 订阅 | $20/月（约 ¥140/月） |
| DeepSeek V4 按量付费 | ¥1-3 / 百万 token，日常使用约 ¥10-30/月 |
| DeepSeek 缓存命中 | ¥0.02 / 百万 token（命中率可达 98%+） |

### 1.3 本手册的技术路线

经过社区大量验证，当前最简洁、最稳定的方案是：

```
Claude Code CLI  →  CC Switch（配置管理）  →  DeepSeek Anthropic 兼容端点
```

**为什么不需要代理层？**

过去有人推荐 LiteLLM、one-api 等中间代理来做 API 格式转换（Anthropic Messages API → OpenAI Chat Completions API），但 DeepSeek 现在已经原生提供 `https://api.deepseek.com/anthropic` 端点，直接支持 Anthropic 协议。CC Switch 的作用仅仅是帮你**图形化管理环境变量配置**，不引入额外的网络跳转和故障点。

---

## 第二章：环境准备

### 2.1 系统要求

| 操作系统 | 最低版本 |
|----------|----------|
| macOS | macOS 12 (Monterey) 及以上 |
| Windows | Windows 10 及以上 |
| Linux | 主流发行版（Ubuntu 20.04+、Debian 11+、CentOS 7+） |

**硬件要求**：无特殊要求，Claude Code 本身不运行本地模型，计算在云端完成。

**前置依赖总览**：

| 依赖 | 最低版本 | 说明 |
|------|----------|------|
| **Node.js** | 18.0+（推荐 20 LTS 或 22 LTS） | Claude Code 的运行环境 |
| **npm** | 9.0+ | 随 Node.js 一起安装，用于安装 Claude Code 包 |
| **Git** | 2.38+（最低 2.23） | Claude Code 用于仓库分析、变更追踪、提交管理等 |

> **⚠️ 重要**：以上三个依赖缺一不可。尤其是 Git——Claude Code 深度依赖 Git 来理解代码历史、追踪文件变更、生成 commit message 等。Windows 用户必须安装 **Git for Windows**，即使你使用 PowerShell 或 CMD，Claude Code 内部也会调用 Git Bash。

### 2.2 安装 Node.js 18+

Claude Code 基于 Node.js 运行，需要 **Node.js 18 或更高版本**。

#### 推荐方式：使用 nvm 安装

[nvm](https://github.com/nvm-sh/nvm)（Node Version Manager）可以让你灵活管理多个 Node.js 版本。

**macOS / Linux**：

```bash
# 安装 nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# 重启终端或执行
source ~/.bashrc  # 或 source ~/.zshrc

# 安装 Node.js 20 LTS（推荐）
nvm install 20

# 验证版本
node --version   # 应输出 v20.x.x
npm --version    # 应输出 10.x.x
```

**Windows**：

推荐使用 [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)：

```powershell
# 下载安装 nvm-windows 后
nvm install 20
nvm use 20

# 验证
node --version
```

> **💡 提示**：如果你已经安装了 Node.js，请先确认版本 `node --version`。如果是 v18+ 即可继续。

#### 备选方式：直接安装

也可以从 [nodejs.org](https://nodejs.org/) 下载 LTS 版本安装包直接安装。

### 2.3 安装 Git 2.38+

Claude Code 深度依赖 Git 来理解代码仓库的变更历史、追踪文件修改、生成 commit 等。**即使你的项目不使用 Git 做版本控制，Claude Code 也需要 Git 来运行。**

> **版本要求**：官方文档建议 Git 2.38+，最低可接受 2.23（部分功能可能受限）。推荐使用 2.47 及以上版本以获得完整体验。

#### macOS

**方式一：Xcode Command Line Tools（推荐）**

```bash
# 如果尚未安装，运行以下命令会自动安装 Git（包含在 Xcode Command Line Tools 中）
xcode-select --install
```

在弹出的对话框中点击"安装"，等待完成即可。

**方式二：Homebrew 安装最新版**

```bash
# 安装 Homebrew（如果尚未安装）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 安装 Git
brew install git

# 验证版本
git --version   # 应输出 git version 2.47.x 或更高
```

> **💡 推荐使用 Homebrew 安装**，因为 macOS 自带的 Git 版本可能较老，Homebrew 能确保你获得最新稳定版。

#### Windows

下载并安装 [**Git for Windows**](https://git-scm.com/downloads/win)：

1. 打开 [git-scm.com](https://git-scm.com/downloads/win)，下载安装包（`.exe`）
2. 运行安装向导，以下选项建议配置：

| 安装步骤 | 推荐选择 |
|----------|----------|
| 默认编辑器 | **Use VSCode as Git's default editor**（如果你用 VS Code），否则选 Nano |
| 调整 PATH 环境 | **Git from the command line and also from 3rd-party software**（推荐） |
| HTTPS 传输后端 | **Use the OpenSSL library** |
| 行结束符转换 | **Checkout as-is, commit Unix-style**（推荐给开发者） |
| 终端模拟器 | **Use MinTTY**（推荐） |
| `git pull` 默认行为 | **Fast-forward or merge**（默认） |

3. 安装完成后，打开 PowerShell 或 CMD 验证：

```powershell
git --version   # 应输出 git version 2.47.x.windows.x 或类似
```

> **⚠️ Windows 用户特别提醒**：Claude Code 在 Windows 上运行时，内部会使用 Git Bash 执行命令。即使你日常使用 PowerShell 或 CMD，也**必须安装 Git for Windows**。

#### Linux

**Ubuntu / Debian**：

```bash
sudo apt update
sudo apt install git

# 验证
git --version
```

如果 apt 仓库中的 Git 版本过低，可以通过 PPA 安装最新版：

```bash
sudo add-apt-repository ppa:git-core/ppa
sudo apt update
sudo apt install git
```

**CentOS / RHEL / Fedora**：

```bash
# CentOS / RHEL
sudo yum install git

# Fedora
sudo dnf install git

# 验证
git --version
```

**Arch Linux**：

```bash
sudo pacman -S git
```

#### 安装后：基础配置（强烈建议）

安装 Git 后，配置你的用户名和邮箱——Claude Code 在生成 commit 时会用到这些信息：

```bash
git config --global user.name "你的姓名"
git config --global user.email "你的邮箱@example.com"
```

验证配置：

```bash
git config --global --list
```

> **💡 提示**：`user.name` 和 `user.email` 会出现在你项目的 Git commit 记录中。如果是公司项目，请使用公司邮箱。

### 2.4 注册 DeepSeek 并获取 API Key

1. **访问 DeepSeek 开放平台**：打开 [platform.deepseek.com](https://platform.deepseek.com/)
2. **注册账号**：支持手机号注册
3. **进入 API Keys 页面**：登录后，在左侧菜单找到 "API Keys"
4. **创建新的 API Key**：点击"创建新的 API Key"，输入名称（如 `claude-code`），点击创建
5. **复制并保存**：**立即复制 API Key！** 它只显示一次，离开页面后将无法再次查看
6. **充值（建议）**：在"用量管理"页面充值 ¥10-50 用于测试，按量计费，不充值也能用但余额不足时会报错

> **⚠️ 安全提示**：API Key 相当于你的账户密码，请勿泄露给他人或提交到公开仓库。

### 2.5 环境准备检查清单

在进入下一章之前，请逐项确认以下内容均已就绪：

```bash
# 逐条在终端中执行，确认每项都输出了预期的版本号
node --version   # 应 ≥ v18.0.0（推荐 v20.x 或 v22.x）
npm --version    # 应 ≥ 9.0.0（推荐 10.x）
git --version    # 应 ≥ 2.38.0（推荐 2.47+）
```

| 检查项 | 预期结果 | 如未通过，前往 |
|--------|----------|----------------|
| `node --version` | v18.0.0 及以上 | [2.2 安装 Node.js 18+](#22-安装-nodejs-18) |
| `npm --version` | 9.0.0 及以上 | 随 Node.js 安装，如版本不符，升级 Node.js |
| `git --version` | 2.38.0 及以上 | [2.3 安装 Git 2.38+](#23-安装-git-238) |
| DeepSeek API Key | 已创建并复制保存 | [2.4 注册 DeepSeek](#24-注册-deepseek-并获取-api-key) |
| DeepSeek 余额 | ≥ ¥10（建议） | [platform.deepseek.com](https://platform.deepseek.com/) 充值 |

> **✅ 全部通过？** 恭喜，环境准备完成！继续进入下一章。

---

## 第三章：安装 Claude Code

### 3.1 通过 npm 全局安装

打开终端，执行以下命令：

```bash
npm install -g @anthropic-ai/claude-code
```

**国内用户加速**：如果遇到下载缓慢的问题，可以使用淘宝 npm 镜像：

```bash
npm install -g @anthropic-ai/claude-code --registry=https://registry.npmmirror.com
```

安装过程通常持续 1-2 分钟，取决于网络速度。

### 3.2 验证安装

安装完成后，验证 Claude Code 是否安装成功：

```bash
claude --version
```

如果正确输出版本号（如 `v1.0.x`），说明安装成功。

你还可以查看帮助信息：

```bash
claude --help
```

### 3.3 跳过新手引导

Claude Code 首次启动时默认会引导你登录 Anthropic 账号。由于我们使用 DeepSeek，需要跳过这一步。

在用户主目录下创建配置文件 `~/.claude.json`：

**macOS / Linux**：

```bash
echo '{"hasCompletedOnboarding": true}' > ~/.claude.json
```

**Windows (PowerShell)**：

```powershell
echo '{"hasCompletedOnboarding": true}' > $env:USERPROFILE\.claude.json
```

也可以手动创建文件，内容为：

```json
{
  "hasCompletedOnboarding": true
}
```

> **💡 说明**：这个配置文件告诉 Claude Code "你已经完成了初始设置"，从而跳过 Anthropic 官方登录流程。后续 CC Switch 会自动管理 API 配置，不会用到 Anthropic 官方账号。

---

## 第四章：安装并配置 CC Switch

### 4.1 CC Switch 简介

[CC Switch](https://github.com/farion1231/cc-switch) 是一款**跨平台桌面应用**，专为 Claude Code、Codex、OpenCode、Gemini CLI 等 AI 编程工具提供可视化的供应商配置管理。

它能做什么：

| 功能 | 说明 |
|------|------|
| **一键切换模型供应商** | DeepSeek、GLM、Kimi、MiniMax 等，图形化点选 |
| **MCP 管理** | 管理 MCP 服务器配置 |
| **Skills / Prompts 管理** | 同步和管理自定义技能与提示词 |
| **WebDAV 同步** | 多设备间同步配置 |
| **内置 WebUI** | 提供 `http://127.0.0.1:15722/` 本地管理页面 |

CC Switch 的核心原理是**管理 Claude Code 的环境变量配置**。它并不在你的请求路径上增加代理跳转——它只是帮你把正确的配置写入系统，Claude Code 启动时直接读取，然后直连 DeepSeek 的 Anthropic 兼容端点。

### 4.2 安装 CC Switch

#### macOS

**方式一：Homebrew 安装（推荐）**

```bash
brew install --cask cc-switch
```

**方式二：手动下载**

从 [GitHub Releases](https://github.com/farion1231/cc-switch/releases) 下载 `.dmg` 文件，双击安装。

> 首次打开时，macOS 可能会提示"无法验证开发者"，前往 **系统设置 → 隐私与安全性**，点击"仍要打开"即可。

#### Windows

从 [GitHub Releases](https://github.com/farion1231/cc-switch/releases) 下载 `.msi` 安装包，双击运行安装向导。

#### Linux

```bash
# Arch Linux (AUR)
paru -S cc-switch-bin

# 其他发行版
# 从 GitHub Releases 下载 .AppImage 文件
chmod +x CC-Switch-*.AppImage
./CC-Switch-*.AppImage
```

安装完成后启动 CC Switch，你应该看到一个图形界面。

### 4.3 添加 DeepSeek 提供商

在 CC Switch 主界面中：

1. **点击左侧"Providers"（提供商）菜单**
2. **点击"添加提供商"按钮**
3. **填写以下配置**：

| 配置项 | 填写内容 | 说明 |
|--------|----------|------|
| **Provider Name** | `DeepSeek` | 自定义名称，随意填 |
| **Base URL** | `https://api.deepseek.com/anthropic` | ⚠️ 注意是 `/anthropic` 结尾，不是 `/v1` |
| **API Key** | `sk-xxxxxxxxxxxxxxxx` | 你在 DeepSeek 平台创建的 API Key |
| **主模型 (Opus)** | `deepseek-v4-pro` | 用于复杂任务的主力模型 |
| **主模型 (Sonnet)** | `deepseek-v4-pro` | 日常对话使用的模型 |
| **轻量模型 (Haiku)** | `deepseek-v4-flash` | 用于简单、高频任务的轻量模型 |

4. **点击"保存"**

> **💡 模型选择说明**：
> - `deepseek-v4-pro`：DeepSeek V4 旗舰模型，推理能力最强，适合复杂代码生成和分析
> - `deepseek-v4-flash`：轻量快速版，适合简单的文件读取、代码补全等高频低复杂度任务
> - 将 Opus 和 Sonnet 都指向同一个模型是可行的——CC Switch 遵循 Claude Code 的三层模型映射机制，你可以在后续根据实际效果调整

#### 等效环境变量（供参考）

CC Switch 保存配置后，本质上是在管理以下环境变量。了解它们有助于调试：

```bash
ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
ANTHROPIC_AUTH_TOKEN=sk-你的API-Key
ANTHROPIC_MODEL=deepseek-v4-pro
ANTHROPIC_DEFAULT_OPUS_MODEL=deepseek-v4-pro
ANTHROPIC_DEFAULT_SONNET_MODEL=deepseek-v4-pro
ANTHROPIC_DEFAULT_HAIKU_MODEL=deepseek-v4-flash
CLAUDE_CODE_SUBAGENT_MODEL=deepseek-v4-flash
```

### 4.4 选择 DeepSeek 为当前活跃提供商

1. 在 CC Switch 主界面的**提供商列表**中，找到你刚创建的 `DeepSeek`
2. 点击其右侧的**"启用/切换"按钮**（或勾选为默认）
3. CC Switch 会提示"已切换"，此时配置已生效

> **💡 提示**：CC Switch 的设置是持久化的，不需要每次启动都重新配置。只要不切换回其他提供商，后续 Claude Code 都会自动使用 DeepSeek。

### 4.5 关键注意事项

#### ⚠️ 模型名不要带 `[1m]` 后缀

CC Switch 的**本地路由模式**下，模型名会被原样转发给 DeepSeek。如果你在模型名里写了 `deepseek-v4-pro[1m]`，CC Switch 会将 `[1m]` 当成模型名的一部分发送，导致 DeepSeek 无法识别，可能**回退到 flash 模型**。

**正确写法**：`deepseek-v4-pro`

> 如果你确实需要启用 100 万 token 上下文，请参考 DeepSeek 官方文档中关于 `[1m]` 的正确使用方式——通常是在请求参数中指定而非写在模型名里。

#### 路由模式 vs 代理模式

CC Switch 提供两种工作模式：

| 模式 | 原理 | 适用场景 |
|------|------|----------|
| **本地路由** | 直接修改 Claude Code 环境变量，直连 DeepSeek | 日常使用，推荐 |
| **代理模式** | 启动本地代理服务，在中间转发请求 | 需要额外处理（日志/缓存）时 |

日常使用推荐**本地路由模式**，性能最佳，无额外延迟。

---

## 第五章：验证一切正常

### 5.1 启动 Claude Code

打开终端，进入你的项目目录，执行：

```bash
cd 你的项目目录
claude
```

首次启动时，Claude Code 可能会问你几个初始设置问题（如是否同意数据收集等），如实回答即可。顺利进入对话界面后，就可以开始使用了。

### 5.2 简单对话测试

在 Claude Code 的交互提示符下，输入一个简单的测试问题：

```
> 你好，请用中文介绍一下你自己，并告诉我你是什么模型
```

如果你看到类似以下的回复，说明一切正常：

> 你好！我是 DeepSeek V4 Pro，由深度求索公司开发的大型语言模型。我目前正在通过 Claude Code 的框架为你服务……

你也可以测试一下代码理解能力：

```
> 请读取当前目录的文件结构，并简要总结这个项目是做什么的
```

如果 Claude Code 能正确读取文件并给出合理回答，说明配置完全正确。

### 5.3 如何确认当前走的是 DeepSeek

有几种方式可以确认请求确实发往了 DeepSeek：

**方式一：查看 DeepSeek 后台用量**

登录 [platform.deepseek.com](https://platform.deepseek.com/)，进入"用量管理"，刷新页面。如果刚发过对话请求，你应该能看到 token 消耗量在增长。

**方式二：检查 CC Switch 日志**

CC Switch 提供了日志查看功能，可以在界面中查看最近的请求记录，确认请求的 Base URL 和模型名称。

**方式三：设置环境变量开启调试日志**

```bash
# 开启 Claude Code 调试日志
export ANTHROPIC_LOG=debug
claude
```

在调试日志中可以查看到实际的请求 URL 和模型信息。

---

## 第六章：进阶配置

### 6.1 VS Code 扩展版 Claude Code 的配置

如果你更习惯在 VS Code 中使用 Claude Code：

1. 在 VS Code 扩展市场搜索 **"Claude Code"** 并安装
2. 确保 CC Switch 已配置并启用了 DeepSeek（CC Switch 配置对 CLI 和扩展版同时生效）
3. 在 VS Code 中使用 `Cmd+Shift+P`（macOS）或 `Ctrl+Shift+P`（Windows），搜索 "Claude Code" 打开对话面板
4. 扩展版会自动读取系统环境变量，直接使用 DeepSeek

> **💡 提示**：如果你在 VS Code 中设置了独立的环境变量，确保它们不会覆盖 CC Switch 的配置。

### 6.2 多供应商切换

CC Switch 支持添加多个供应商，按需一键切换，互不干扰：

**典型场景**：

| 场景 | 推荐供应商 | 推荐模型 |
|------|-----------|----------|
| 日常开发（主力） | DeepSeek | deepseek-v4-pro |
| 简单任务 / 高频调用 | DeepSeek | deepseek-v4-flash |
| 特殊需求（免费额度） | GLM | glm-4-plus |
| 超长上下文任务 | Kimi | moonshot-v1-128k |
| 追求最强推理（偶尔） | Anthropic 官方 | claude-sonnet-4-6 |

**切换方法**：在 CC Switch 主界面，点击要切换的供应商旁边的"启用"按钮即可，无需重启终端。

### 6.3 MCP 服务器管理

CC Switch 也内置了 MCP（Model Context Protocol）服务器管理功能。MCP 可以让 Claude Code 连接外部工具和数据源（如数据库、浏览器、文件系统等）。

在 CC Switch 的 **"MCP"** 面板中，你可以：
- 添加社区提供的 MCP 服务器
- 配置服务器参数
- 一键启用/禁用
- 同步配置到多台设备（通过 WebDAV）

---

## 附录 A：备选方案

如果你不想使用 CC Switch（例如在 CI/CD 环境、无 GUI 的服务器上），以下替代方案同样可用。

### A.1 手动环境变量配置（不用 CC Switch）

直接在终端中设置环境变量即可，效果与 CC Switch 完全一致：

**临时设置（仅当前终端会话有效）**：

```bash
export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_AUTH_TOKEN=sk-你的DeepSeek-API-Key
export ANTHROPIC_MODEL=deepseek-v4-pro
export ANTHROPIC_DEFAULT_OPUS_MODEL=deepseek-v4-pro
export ANTHROPIC_DEFAULT_SONNET_MODEL=deepseek-v4-pro
export ANTHROPIC_DEFAULT_HAIKU_MODEL=deepseek-v4-flash
export CLAUDE_CODE_SUBAGENT_MODEL=deepseek-v4-flash
```

**永久设置（推荐）**：

将上述 `export` 语句追加到你的 shell 配置文件中：

```bash
# macOS / Linux — 追加到 ~/.zshrc 或 ~/.bashrc
cat >> ~/.zshrc << 'EOF'

# Claude Code — 使用 DeepSeek
export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_AUTH_TOKEN=sk-你的DeepSeek-API-Key
export ANTHROPIC_MODEL=deepseek-v4-pro
export ANTHROPIC_DEFAULT_OPUS_MODEL=deepseek-v4-pro
export ANTHROPIC_DEFAULT_SONNET_MODEL=deepseek-v4-pro
export ANTHROPIC_DEFAULT_HAIKU_MODEL=deepseek-v4-flash
export CLAUDE_CODE_SUBAGENT_MODEL=deepseek-v4-flash
EOF

# 重新加载配置
source ~/.zshrc
```

**Windows (PowerShell 永久设置)**：

```powershell
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_BASE_URL', 'https://api.deepseek.com/anthropic', 'User')
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_AUTH_TOKEN', 'sk-你的DeepSeek-API-Key', 'User')
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_MODEL', 'deepseek-v4-pro', 'User')
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_DEFAULT_OPUS_MODEL', 'deepseek-v4-pro', 'User')
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_DEFAULT_SONNET_MODEL', 'deepseek-v4-pro', 'User')
[System.Environment]::SetEnvironmentVariable('ANTHROPIC_DEFAULT_HAIKU_MODEL', 'deepseek-v4-flash', 'User')
[System.Environment]::SetEnvironmentVariable('CLAUDE_CODE_SUBAGENT_MODEL', 'deepseek-v4-flash', 'User')
```

设置后重启终端即可生效。

### A.2 CLI 版切换工具

如果你更喜欢命令行操作，以下 CLI 工具可以替代 CC Switch 的图形界面：

#### cswitch-tui（TUI 交互界面）

```bash
npm install -g ccswitch-tui
ccswitch
```

启动后会显示一个终端交互菜单，用键盘方向键选择供应商、切换模型。

#### @bainiu/ccswitch（零安装使用）

```bash
npx @bainiu/ccswitch
```

无需安装，运行后直接进入交互式模型选择界面，输入数字即可切换。

#### Go 版 ccswitch（huangdijia/ccswitch）

```bash
curl -sSL https://raw.githubusercontent.com/huangdijia/ccswitch/main/install.sh | bash
ccswitch
```

Go 编译的单二进制文件，启动快，资源占用极小，适合服务器场景。内置预配置供应商（DeepSeek、GLM、Kimi 等）。

### A.3 代理方案（高级 / 特殊场景）

对于以下场景，你可能需要一个中间代理层：

- 企业统一 AI 网关：多个团队成员共享，需要统一管理 API Key 和用量
- 审计日志：需要记录所有 AI 请求的详细日志
- 请求缓存：减少重复请求的成本
- 多模型路由：根据请求复杂度自动分配不同模型

#### LiteLLM 代理

[LiteLLM](https://github.com/BerriAI/litellm) 是一个开源的 LLM 代理，支持将 Anthropic 格式请求翻译为 OpenAI 格式。

```bash
# 安装
pip install litellm

# 启动代理（将 DeepSeek 暴露为 Anthropic 兼容端点）
litellm --model deepseek/deepseek-chat \
  --api_base https://api.deepseek.com/v1 \
  --api_key sk-你的API-Key \
  --port 4000
```

然后配置 Claude Code 指向这个代理：

```bash
export ANTHROPIC_BASE_URL=http://localhost:4000
```

#### one-api 代理

[one-api](https://github.com/songquanpeng/one-api) 在国内社区流行度很高，提供 Web 管理界面，支持多种模型的统一管理和分发。

```bash
# Docker 部署（推荐）
docker run -d \
  --name one-api \
  -p 3000:3000 \
  -v /path/to/data:/data \
  justsong/one-api
```

部署后访问 `http://localhost:3000` 进入管理后台，添加 DeepSeek 渠道，创建 API Key，然后配置 Claude Code：

```bash
export ANTHROPIC_BASE_URL=http://localhost:3000/v1
export ANTHROPIC_AUTH_TOKEN=one-api-中创建的令牌
```

> **⚠️ 注意**：代理方案引入了额外的网络跳转和故障点，**个人开发者一般不需要**。仅在确实有统一管理需求时考虑。

---

## 附录 B：常见问题排查

### B.1 npm 安装速度慢 / 失败

**现象**：执行 `npm install -g @anthropic-ai/claude-code` 后长时间无响应或报网络错误。

**解决方案**：

```bash
# 方案一：使用淘宝 npm 镜像
npm install -g @anthropic-ai/claude-code --registry=https://registry.npmmirror.com

# 方案二：永久切换 npm 源
npm config set registry https://registry.npmmirror.com
npm install -g @anthropic-ai/claude-code

# 方案三：使用 nrm 管理镜像源
npm install -g nrm
nrm use taobao
npm install -g @anthropic-ai/claude-code
```

### B.2 CC Switch 无法启动

**macOS**：

- **提示"无法验证开发者"**：前往 **系统设置 → 隐私与安全性**，找到被阻止的应用，点击"仍要打开"
- **打开后闪退**：尝试从 GitHub Releases 重新下载最新版本

**Windows**：

- **杀毒软件拦截**：将 CC Switch 添加为信任应用，或在安装/运行时暂时关闭杀毒软件
- **缺少运行库**：确保已安装 [Visual C++ Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist)

**Linux**：

- **AppImage 无法运行**：确保已安装 `fuse`：`sudo apt install fuse`（Ubuntu/Debian）

### B.3 对话报错 / 无响应

**现象**：启动 `claude` 后，输入任何问题都报错或长时间无响应。

**排查步骤**：

1. **检查 API Key 是否正确**：确认 `ANTHROPIC_AUTH_TOKEN` 的值是完整的 `sk-` 开头的密钥
2. **检查 Base URL**：确认是 `https://api.deepseek.com/anthropic`（注意结尾是 `/anthropic` 不是 `/v1`）
3. **检查 DeepSeek 账户余额**：登录 [platform.deepseek.com](https://platform.deepseek.com/) 查看用量和余额，欠费会导致 API 拒绝请求
4. **检查网络**：
   ```bash
   curl -H "Authorization: Bearer sk-你的API-Key" \
        https://api.deepseek.com/anthropic/v1/messages \
        -d '{"model":"deepseek-v4-pro","max_tokens":10,"messages":[{"role":"user","content":"hi"}]}'
   ```
   如果 curl 也失败，说明是网络或 API Key 的问题，而非 Claude Code 配置问题。

### B.4 模型能力感觉不对

**现象**：回答质量明显不如预期，或者感觉"变笨了"。

**排查步骤**：

1. **确认没有回退到 flash 模型**：检查模型名是否正确拼写为 `deepseek-v4-pro`（不是 `deepseek-v4-flash`）
2. **确认模型名没有多余后缀**：确保模型名不包含 `[1m]` 等后缀（见 [4.5 关键注意事项](#45-关键注意事项)）
3. **检查 CC Switch 当前启用的供应商**：确认确实是 DeepSeek 而不是其他测试用供应商
4. **检查是否有环境变量覆盖**：如果你同时设置了 shell 环境变量和 CC Switch，可能会冲突。建议只用一种方式管理配置

### B.5 DeepSeek 余额 / 充值

**查看余额**：登录 [platform.deepseek.com](https://platform.deepseek.com/)，在"用量管理"页面查看剩余余额和消费明细。

**充值**：
1. 在"用量管理"页面点击"充值"
2. 选择充值金额（建议首次充值 ¥10-50 测试）
3. 支持微信支付 / 支付宝

**设置余额告警**：在 DeepSeek 平台设置中，可以配置余额告警阈值，余额低于设定值时自动短信/邮件通知，避免突然欠费导致服务中断。

### B.6 Git 相关问题

**现象**：`claude` 启动后提示 "git not found" 或 Git 版本过低。

**解决方案**：

1. 确认 Git 已安装：`git --version`
2. 如未安装，参考 [2.3 安装 Git 2.38+](#23-安装-git-238)
3. Windows 用户确保已安装 Git for Windows（不是只有 `git` 命令就行，还需要 Git Bash 环境）
4. 确认 Git 在系统 PATH 中：在终端输入 `git --version`，如果"找不到命令"，说明 PATH 未配置正确

**现象**：`claude` 在非 Git 仓库目录中运行报错。

**解决方案**：Claude Code 需要在 Git 仓库中运行。如果你还没有初始化 Git：

```bash
cd 你的项目目录
git init
git add .
git commit -m "初始提交"
```

> **💡 提示**：即使你不想用 Git 做版本控制，也需要至少执行一次 `git init` 和 `git commit`，让 Claude Code 能正常分析你的项目。

### B.7 其他问题

| 问题 | 可能原因 | 解决方案 |
|------|----------|----------|
| `claude` 命令找不到 | npm 全局安装路径未加入 PATH | 检查 `npm list -g --depth=0`，确认安装路径在 PATH 中 |
| `git` 命令找不到 | 未安装 Git 或 PATH 未配置 | 参考 [2.3 安装 Git](#23-安装-git-238)；Windows 用户需安装 Git for Windows |
| 提示 "git version too old" | Git 版本低于 2.23 | 升级 Git 到 2.38+，参考 [2.3 安装 Git](#23-安装-git-238) |
| 非 Git 仓库中运行报错 | 当前目录未初始化 Git | 执行 `git init && git add . && git commit -m "init"` |
| CC Switch 配置保存后不生效 | 需要重启终端 | 关闭当前终端窗口，重新打开后再试 |
| VS Code 扩展找不到 Claude Code | 扩展未读取到系统环境变量 | 从终端启动 VS Code：`code .` 而非从 Dock/开始菜单启动 |
| 报错 "model not found" | 模型名拼写错误 | 确认模型名为 `deepseek-v4-pro` 或 `deepseek-v4-flash` |

---

> **📧 反馈与更新**  
> 本手册会持续更新。如果你在使用过程中遇到问题或有改进建议，欢迎在内部文档平台留言。

