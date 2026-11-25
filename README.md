# 盘搜一键查网盘 · PanSo Quick Search

> 开源、轻量、零广告的浏览器快捷检索工具 — 逛**豆瓣电影 / IMDb / Bangumi**条目页自动显示「**🔍 盘搜查网盘**」按钮，任意网页划词按 `Alt + P` 秒查**百度网盘与夸克网盘**公开资源。

- 🌐 盘搜官方网站（云搜）：[**https://panso.xin/**](https://panso.xin/)
- 🚀 在线安装页与免安装书签版（GitHub Pages）：[**https://hah049580-art.github.io/panso-quick-search/**](https://hah049580-art.github.io/panso-quick-search/)
- ⚡ 一键安装油猴脚本（Tampermonkey / Violentmonkey）：[**点击安装 panso-quick-search.user.js**](https://raw.githubusercontent.com/hah049580-art/panso-quick-search/main/panso-quick-search.user.js)

## 核心功能

1. **豆瓣电影 / IMDb / Bangumi 自动挂件**：打开影片或番剧详情页，标题旁自动出现「🔍 盘搜查网盘 (百度/夸克)」直达按钮。
2. **全局划词快捷键 `Alt + P`**：在任何网页选中剧名、片名、书名或考研资料名，按 `Alt + P` 一键在 [盘搜 (panso.xin)](https://panso.xin/) 检索有效线索。
3. **零安装浏览器书签版（Bookmarklet）**：不装插件也能用，直接将下方代码存为浏览器书签即可：

```javascript
javascript:(function(){var s=(window.getSelection?window.getSelection().toString():'').trim()||prompt('输入片名/剧名/资料关键词（盘搜 panso.xin）：','');if(s&&s.trim())window.open('https://panso.xin/?k='+encodeURIComponent(s.trim()),'_blank');})();
```

## 盘搜 · 云搜精选频道直达

| 频道 / 场景 | 直达入口 | 说明 |
| :--- | :--- | :--- |
| 盘搜首页 | [https://panso.xin/](https://panso.xin/) | 百度网盘 + 夸克网盘聚合搜索 |
| 云盘搜入口 | [https://panso.xin/landing/yunpansou.html](https://panso.xin/landing/yunpansou.html) | 百度云搜与夸克双核引擎介绍 |
| 百度云电影 | [https://panso.xin/landing/baiduyun-dianying.html](https://panso.xin/landing/baiduyun-dianying.html) | 4K蓝光/院线热映电影百度网盘 |
| 韩剧夸克网盘 | [https://panso.xin/landing/hanju-ziyuan.html](https://panso.xin/landing/hanju-ziyuan.html) | 2026最新中字韩剧全集专题 |
| 爆款短剧热榜 | [https://panso.xin/hot/duanju.html](https://panso.xin/hot/duanju.html) | 每2小时自动刷新微短剧合集 |
| 考研考公资料 | [https://panso.xin/hot/ziliao.html](https://panso.xin/hot/ziliao.html) | 考研/考公/CPA/编程AI教程 |
| 每日实时索引 | [https://github.com/hah049580-art/panso-hot-index](https://github.com/hah049580-art/panso-hot-index) | 每日2次同步热门专题榜单 |

## 开源许可

基于 MIT License 开源，仅提供公开搜索跳转快捷方式，不收集任何用户隐私，不含广告或追踪脚本。
