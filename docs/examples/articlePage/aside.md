---
layout: false
permalink: /iframe/articlePage/aside
article: false
---

<script setup lang="ts">
import { TkArticlePage } from "vitepress-theme-teek";
</script>

```vue
<TkArticlePage doc aside class="demo-article-page-aside">
  <h1>一级标题</h1>
  <h2>二级标题</h2>
  <p>Teek 是一个轻量、简洁高效、灵活配置的 VitePress 主题</p>
  <h3>三级标题</h3>
  <p>Teek 是一个轻量、简洁高效、灵活配置的 VitePress 主题</p>
</TkArticlePage>
```

<style>
.demo-article-page-aside {
  margin: 0;
}

.demo-article-page-aside .tk-article-page__aside {
  display: block;
}
</style>
