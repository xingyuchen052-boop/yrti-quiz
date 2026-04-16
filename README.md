# YRTI - 音乐记忆测试

这是一个基于 React + TypeScript + Vite 开发的音乐记忆测试应用，旨在帮助用户发现与自己情感共鸣的音乐。

## 项目介绍

YRTI 是一个互动式音乐测试应用，用户通过回答一系列问题，最终会得到一首与自己情感状态相匹配的歌曲推荐。应用的设计风格简约现代，带有一丝感性的艺术气息。

## 技术栈

- React 19.2.4
- TypeScript
- Vite 8.0.4
- React Router 7.14.1
- Tailwind CSS 4.2.2

## 安装和运行

### 安装依赖

```bash
npm install
```

### 开发模式运行

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 项目结构

```
├── public/              # 静态资源
├── src/
│   ├── assets/          # 图片和其他静态资源
│   ├── data/            # 数据文件
│   │   ├── calculator.ts  # 结果计算逻辑
│   │   ├── questions.ts   # 测试问题
│   │   └── songs.ts       # 歌曲数据
│   ├── pages/           # 页面组件
│   │   ├── Home.tsx      # 首页
│   │   ├── Quiz.tsx      # 测试页面
│   │   └── Result.tsx    # 结果页面
│   ├── App.tsx          # 应用主组件
│   ├── main.tsx         # 应用入口
│   └── index.css        # 全局样式
├── .gitignore          # Git 忽略文件
├── package.json        # 项目配置
├── tsconfig.json       # TypeScript 配置
└── vite.config.ts      # Vite 配置
```

## 功能说明

1. **首页**：展示应用标题和开始测试按钮
2. **测试页面**：用户回答一系列与情感相关的问题
3. **结果页面**：根据用户的回答推荐一首匹配的歌曲，并显示相关分析和歌词

## 特色

- 简约现代的UI设计
- 流畅的动画效果
- 个性化的音乐推荐
- 响应式布局，适配不同设备

## 贡献

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目！

## 许可证

MIT
