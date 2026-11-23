// Maher Athar Ilyas · site behavior. No dependencies.
(function () {
  'use strict';

  var EMAIL = 'maheratharilyas@gmail.com';
  var root = document.documentElement;
  var status = document.querySelector('[data-status]');

  function announce(msg) {
    if (!status) return;
    status.textContent = '';
    // Re-set on the next frame so repeated messages are announced again.
    requestAnimationFrame(function () { status.textContent = msg; });
  }

  // Theme: the inline head script applies the saved choice before first paint.
  var themeToggle = document.querySelector('[data-theme-toggle]');
  var themeColor = document.querySelector('meta[name="theme-color"]');

  function syncTheme() {
    var dark = root.getAttribute('data-theme') === 'dark';
    if (themeToggle) themeToggle.setAttribute('aria-pressed', String(dark));
    if (themeColor) themeColor.setAttribute('content', dark ? '#14130F' : '#F7F5EF');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      syncTheme();
    });
  }
  syncTheme();

  // Agent view: both views stay in the DOM; only one is shown.
  var viewToggle = document.querySelector('[data-view-toggle]');
  var viewBack = document.querySelector('[data-view-back]');
  var agentView = document.getElementById('agent-view');
  var humanParts = document.querySelectorAll('[data-human]');

  function setAgentView(on) {
    humanParts.forEach(function (el) { el.hidden = on; });
    agentView.hidden = !on;
    viewToggle.setAttribute('aria-checked', String(on));
    if (on) pauseAllVideos();
  }

  if (viewToggle && agentView) {
    viewToggle.addEventListener('click', function () {
      setAgentView(viewToggle.getAttribute('aria-checked') !== 'true');
    });
    if (viewBack) {
      viewBack.addEventListener('click', function () {
        setAgentView(false);
        viewToggle.focus();
      });
    }
  }

  // Disclosures: project cards and the archive list. Open by default in the HTML so it works without JS.
  function disclosure(button, panel, onChange) {
    function set(open) {
      button.setAttribute('aria-expanded', String(open));
      panel.hidden = !open;
      if (onChange) onChange(open);
    }
    button.addEventListener('click', function () {
      set(button.getAttribute('aria-expanded') !== 'true');
    });
    set(false);
  }

  document.querySelectorAll('.card-toggle').forEach(function (button) {
    var panel = document.getElementById(button.getAttribute('aria-controls'));
    var hint = button.closest('.card').querySelector('.card__hint');
    if (!panel) return;
    disclosure(button, panel, function (open) {
      if (hint) hint.textContent = open ? '− Less' : '+ Details';
    });
  });

  var archiveToggle = document.querySelector('[data-archive-toggle]');
  if (archiveToggle) {
    var archive = document.getElementById(archiveToggle.getAttribute('aria-controls'));
    var archiveLabel = archiveToggle.querySelector('[data-archive-label]');
    var archiveSign = archiveToggle.querySelector('[data-archive-sign]');
    if (archive) {
      var extra = archive.querySelectorAll('.card, .archive__row').length;
      disclosure(archiveToggle, archive, function (open) {
        archiveLabel.textContent = open ? 'Hide extra projects' : 'Show all projects (' + extra + ' more)';
        archiveSign.textContent = open ? '−' : '+';
      });
    }
  }

  root.classList.add('is-ready');

  // Copy email. The address is also shown as text next to each button.
  var copyButtons = document.querySelectorAll('[data-copy-email]');
  var copyTimer;

  function setCopyLabels(text) {
    copyButtons.forEach(function (b) {
      var label = b.querySelector('[data-copy-label]');
      if (label) label.textContent = text;
    });
  }

  function copied(ok) {
    clearTimeout(copyTimer);
    if (ok) {
      setCopyLabels('Email copied');
      announce('Email address copied to clipboard.');
    } else {
      announce('Copy failed. The address is ' + EMAIL);
    }
    copyTimer = setTimeout(function () {
      setCopyLabels('Copy email');
      if (status) status.textContent = '';
    }, 2400);
  }

  copyButtons.forEach(function (b) {
    b.addEventListener('click', function () {
      try {
        navigator.clipboard.writeText(EMAIL).then(function () { copied(true); }, function () { copied(false); });
      } catch (e) {
        copied(false);
      }
    });
  });

  // Media: muted loops play only in view and never under prefers-reduced-motion.
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var players = [];

  function pauseAllVideos() {
    players.forEach(function (stop) { stop(); });
  }

  document.querySelectorAll('.media__video').forEach(function (video) {
    // The browser's own controls stay on (play, pause, seek, fullscreen).
    // A pause the visitor makes is remembered, so scrolling back does not restart the video.
    var userPaused = false;
    var autoPausing = false;
    var inView = false;

    function play() {
      var p = video.play();
      if (p && p.catch) p.catch(function () {});
    }
    function pause() {
      if (video.paused) return;
      autoPausing = true;
      video.pause();
    }
    function update() {
      if (inView && !userPaused && !reduceMotion.matches && !video.closest('[hidden]')) play();
      else pause();
    }

    video.addEventListener('pause', function () {
      if (!autoPausing) userPaused = true;
      autoPausing = false;
    });
    video.addEventListener('play', function () { userPaused = false; });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        inView = entries[0].isIntersecting;
        update();
      }, { threshold: 0.25 }).observe(video);
    }

    if (reduceMotion.addEventListener) reduceMotion.addEventListener('change', update);
    else if (reduceMotion.addListener) reduceMotion.addListener(update);

    players.push(pause);
  });
})();
