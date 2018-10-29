### 目录结构
# 个人小程序

## 目录结构
>

```
├── app.js
├── app.json
├── app.wxss
├── components    组件
├── config.js
├── images        图片
│   └── tab
│       ├── book.png
│       ├── book@highlight.png
│       ├── classic.png
│       ├── classic@highlight.png
│       ├── my.png
│       └── my@highlight.png
├── modules       请求数据的封装
├── pages         页面
│   ├── book
│   │   ├── book.js
│   │   ├── book.json
│   │   ├── book.wxml
│   │   └── book.wxss
│   ├── index
│   │   ├── index.js
│   │   ├── index.json
│   │   ├── index.wxml
│   │   └── index.wxss
│   └── my
│       ├── my.js
│       ├── my.json
│       ├── my.wxml
│       └── my.wxss
├── project.config.json
└── utils
    └── http.js  统一请求接口封装
```

## 单元测试


### commit规范
[Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

```
<type>(<scope>): <subject>
// 空一行
<body>
// 空一行
<footer>
```

type（必需）、scope（可选）和subject（必需）

- type：（枚举）
    - feat：新功能（feature）
    - fix：修补bug
    - docs：文档（documentation）
    - style： 格式（不影响代码运行的变动）
    - refactor：重构（即不是新增功能，也不是修改bug的代码变动）
    - test：增加测试
    - chore：构建过程或辅助工具的变动
- scope：scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。
- subject：commit 目的的简短描述，不超过50个字符。

### ESLint代码规范
基于：[AlloyTeam ESLint 规则](https://alloyteam.github.io/eslint-config-alloy/)
完整规则：[ESLint Rules](https://eslint.org/docs/rules/)
- 通过./node_modules/.bin/eslint --fix fulishe/pages/index/indexjs 自动修复可修复的问题
