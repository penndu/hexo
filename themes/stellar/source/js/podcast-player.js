/* ============================================================
 * Stellar 播客播放器（版本4 · 章节时间戳）
 * 原生 JS，无依赖。查找页面中所有 .podcast-player 并初始化。
 * 由 podcast_player.ejs 渲染结构，此脚本驱动交互。
 * ============================================================ */
(function () {
  'use strict';

  function fmt(sec) {
    sec = Math.max(0, Math.round(Number(sec) || 0));
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return (m < 10 ? '0' + m : '' + m) + ':' + (s < 10 ? '0' + s : '' + s);
  }

  function init(player) {
    var audio = player.querySelector('.podcast-audio');
    var playBtn = player.querySelector('.podcast-play');
    var fill = player.querySelector('.podcast-fill');
    var knob = player.querySelector('.podcast-knob');
    var nowEl = player.querySelector('.podcast-now');
    var totalEl = player.querySelector('.podcast-total');
    var progress = player.querySelector('.podcast-progress');
    var speedBtns = player.querySelectorAll('.podcast-speed button');
    var notes = player.querySelectorAll('.podcast-note');
    var dots = player.querySelectorAll('.podcast-chapter-dot');

    var total = parseFloat(player.getAttribute('data-duration')) || 0;
    var chapters = [];
    notes.forEach(function (n) {
      chapters.push({ start: parseFloat(n.getAttribute('data-seek')) || 0 });
    });

    function setTotal() {
      if (audio && !isNaN(audio.duration) && audio.duration > 0 && audio.duration !== Infinity) {
        total = audio.duration;
        if (totalEl) totalEl.textContent = fmt(audio.duration);
      }
    }

    function highlightChapter(t) {
      var idx = 0;
      for (var i = 0; i < chapters.length; i++) {
        if (t >= chapters[i].start) idx = i;
      }
      notes.forEach(function (n, i) {
        n.classList.toggle('active', i === idx);
      });
    }

    function render() {
      var t = audio ? audio.currentTime : 0;
      var pct = total > 0 ? Math.min(100, (t / total) * 100) : 0;
      if (fill) fill.style.width = pct + '%';
      if (knob) knob.style.left = pct + '%';
      if (nowEl) nowEl.textContent = fmt(t);
      highlightChapter(t);
    }

    function seekTo(sec) {
      if (!audio) return;
      if (!isNaN(audio.duration) && audio.duration > 0 && audio.duration !== Infinity) {
        audio.currentTime = Math.min(sec, audio.duration - 0.05);
        if (audio.paused) audio.play().catch(function () {});
      }
    }

    function togglePlay() {
      if (!audio) return;
      if (audio.paused) {
        audio.play().catch(function () {});
      } else {
        audio.pause();
      }
    }

    if (audio) {
      audio.addEventListener('play', function () { player.classList.add('playing'); });
      audio.addEventListener('pause', function () { player.classList.remove('playing'); });
      audio.addEventListener('ended', function () {
        player.classList.remove('playing');
        audio.currentTime = 0;
        render();
      });
      audio.addEventListener('timeupdate', render);
      audio.addEventListener('loadedmetadata', function () { setTotal(); render(); });
      audio.addEventListener('durationchange', setTotal);
    }

    if (playBtn) playBtn.addEventListener('click', togglePlay);

    if (progress) {
      progress.addEventListener('click', function (e) {
        var r = progress.getBoundingClientRect();
        var ratio = r.width > 0 ? (e.clientX - r.left) / r.width : 0;
        if (total > 0) seekTo(ratio * total);
      });
    }

    dots.forEach(function (d) {
      d.addEventListener('click', function (e) {
        e.stopPropagation();
        seekTo(parseFloat(d.getAttribute('data-seek')) || 0);
      });
    });

    notes.forEach(function (n) {
      n.addEventListener('click', function () {
        seekTo(parseFloat(n.getAttribute('data-seek')) || 0);
      });
    });

    speedBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        var rate = parseFloat(b.getAttribute('data-rate')) || 1;
        if (audio) audio.playbackRate = rate;
        speedBtns.forEach(function (x) { x.classList.toggle('on', x === b); });
      });
    });

    render();
  }

  function onReady() {
    var players = document.querySelectorAll('.podcast-player');
    players.forEach(init);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }
})();
