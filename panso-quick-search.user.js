// ==UserScript==
// @name         盘搜一键查网盘 (豆瓣/IMDb/B站/Bangumi直达百度与夸克网盘)
// @namespace    https://panso.xin/
// @version      1.0.0
// @description  逛豆瓣电影、IMDb、B站番剧或Bangumi条目页时，自动添加「盘搜查网盘」按钮，并支持全局划词按 Alt+P 一键检索百度网盘与夸克网盘公开资源（免费免注册无广告）
// @author       盘搜 · 云搜 (panso.xin)
// @homepageURL  https://panso.xin/
// @supportURL   https://github.com/hah049580-art/panso-quick-search/issues
// @match        https://movie.douban.com/subject/*
// @match        https://www.imdb.com/title/*
// @match        https://www.bilibili.com/bangumi/*
// @match        https://bgm.tv/subject/*
// @match        https://bangumi.tv/subject/*
// @match        *://*/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function () {
  'use strict';

  function openPanso(kw) {
    var clean = String(kw || '').replace(/[《》【】()（）]/g, ' ').replace(/\s+/g, ' ').trim();
    if (!clean) return;
    window.open('https://panso.xin/?k=' + encodeURIComponent(clean), '_blank', 'noopener');
  }

  function makeBtn(kw, label) {
    var a = document.createElement('a');
    a.href = 'https://panso.xin/?k=' + encodeURIComponent(kw);
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = label || '🔍 盘搜查网盘 (百度/夸克)';
    a.style.cssText = 'display:inline-flex;align-items:center;gap:4px;margin-left:10px;padding:4px 12px;' +
      'background:linear-gradient(135deg,#4f46e5,#2563eb);color:#fff !important;border-radius:999px;' +
      'font-size:13px;font-weight:600;text-decoration:none !important;vertical-align:middle;' +
      'box-shadow:0 2px 8px rgba(79,70,229,0.28);line-height:1.4;';
    return a;
  }

  function mountOnSubjectPage() {
    var host = location.hostname;
    if (host === 'movie.douban.com') {
      var h1 = document.querySelector('#content h1');
      var sp = h1 && h1.querySelector('span[property="v:itemreviewed"]');
      if (h1 && sp && !document.getElementById('panso-qs-btn')) {
        var title = sp.textContent.trim().split(' ')[0];
        var btn = makeBtn(title);
        btn.id = 'panso-qs-btn';
        h1.appendChild(btn);
      }
    } else if (host === 'www.imdb.com') {
      var ih = document.querySelector('h1');
      if (ih && !document.getElementById('panso-qs-btn')) {
        var btn2 = makeBtn(ih.textContent.trim(), '🔍 PanSo Cloud Search');
        btn2.id = 'panso-qs-btn';
        ih.parentNode.insertBefore(btn2, ih.nextSibling);
      }
    } else if (host === 'bgm.tv' || host === 'bangumi.tv') {
      var bh = document.querySelector('h1.nameSingle a');
      if (bh && !document.getElementById('panso-qs-btn')) {
        var btn3 = makeBtn(bh.textContent.trim());
        btn3.id = 'panso-qs-btn';
        bh.parentNode.appendChild(btn3);
      }
    }
  }

  // Global Alt+P shortcut: search selected text on panso.xin
  document.addEventListener('keydown', function (e) {
    if (e.altKey && (e.key === 'p' || e.key === 'P')) {
      var sel = (window.getSelection && window.getSelection().toString() || '').trim();
      if (sel) {
        e.preventDefault();
        openPanso(sel);
      }
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountOnSubjectPage);
  } else {
    mountOnSubjectPage();
  }
})();
