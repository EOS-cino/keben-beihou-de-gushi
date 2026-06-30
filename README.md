# 课文背后的故事

一个面向小学生的语文课文背景故事静态网站。当前已收录多篇小学语文常见课文，用原创导读、历史背景、作者故事、冷知识和思考问题帮助孩子把课文读得更有兴趣。

## 项目特点

- 不转载现行教材全文，只做课文摘要、背景故事和延伸阅读。
- 每篇文章包含年级、主题、作者、时代、思考题、知识卡片和资料来源。
- 支持课文搜索、年级筛选、主题筛选。
- 使用 Astro + Markdown，适合编程新手持续维护。
- 可通过 GitHub Pages 免费发布。

## 本地运行

```bash
npm install
npm run dev
```

浏览器打开终端提示的本地地址，一般是 `http://localhost:4321`。

## 构建检查

```bash
npm run build
npm run preview
```

## 添加新课文

在 `src/content/lessons/` 新建一个 Markdown 文件，复制已有文章的 frontmatter 字段并填写内容即可。建议每篇包含：

- 课文讲了什么
- 背后的故事
- 为什么值得读
- 延伸阅读提示
- 至少 3 条资料来源

## GitHub Pages 部署

本项目已包含 `.github/workflows/deploy.yml`。推送到 GitHub 后：

1. 进入仓库 `Settings`。
2. 打开 `Pages`。
3. 在 `Build and deployment` 中选择 `GitHub Actions`。
4. 推送到 `main` 分支后等待自动部署完成。

如果仓库是普通项目仓库，例如 `textbook-stories`，工作流会自动把 `BASE_PATH` 设置为 `/textbook-stories/`。如果仓库名是 `你的用户名.github.io`，则会发布到根路径。

## 内容与版权说明

本站以原创导读、背景知识和资料整理为主，不提供现行教材课文全文，不使用教材扫描图、教辅截图或出版社插图。古文、古典小说和历史材料优先参考公版资料与公开百科；现代作品仅做摘要、背景介绍和阅读提示。

本项目适合作为个人学习、教育兴趣探索和 AI/vibe coding 练习项目，不替代正式教材和课堂教学。
