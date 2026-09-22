/* Conserje widget -- https://github.com/carlosrendonduque/conserje -- MIT */
/**
 * Conserje chat widget.
 *
 * Embedded with one script tag. Everything renders inside a shadow root, so
 * the widget cannot inherit or leak styles, and it adds exactly one element to
 * the host page.
 *
 * It holds no credentials and knows no model: it posts a message plus an
 * opaque session id to the backend and renders whatever comes back.
 *
 *   <script src="conserje.js"
 *           data-endpoint="https://api.example.com/chat"
 *           data-site="carlos-portfolio"
 *           data-greeting="Hola, ¿en qué estás trabajando?"
 *           data-title="Carlos Rendon"
 *           data-accent="#2f6f4f"
 *           defer></script>
 */
(function () {
  'use strict';

  var STYLES = ":host{--cj-accent:#2f6f4f;--cj-accent-text:#ffffff;--cj-surface:#ffffff;--cj-surface-alt:#f3f4f6;--cj-text:#14181f;--cj-text-muted:#5b6472;--cj-border:#e2e5ea;--cj-radius:14px;--cj-shadow:0 12px 32px rgba(15,20,30,0.18);--cj-font:system-ui,-apple-system,\"Segoe UI\",Roboto,sans-serif;position:fixed;right:20px;bottom:20px;z-index:2147483000;font-family:var(--cj-font);color-scheme:light dark}@media (prefers-color-scheme:dark){:host(:not([data-theme=\"light\"])){--cj-surface:#171a20;--cj-surface-alt:#22262e;--cj-text:#eef1f5;--cj-text-muted:#9aa3b1;--cj-border:#2d323b;--cj-shadow:0 12px 32px rgba(0,0,0,0.5)}}:host([data-theme=\"dark\"]){--cj-surface:#171a20;--cj-surface-alt:#22262e;--cj-text:#eef1f5;--cj-text-muted:#9aa3b1;--cj-border:#2d323b;--cj-shadow:0 12px 32px rgba(0,0,0,0.5)}*,*::before,*::after{box-sizing:border-box}.launcher{display:flex;align-items:center;gap:8px;padding:12px 18px;border:0;border-radius:999px;background:var(--cj-accent);color:var(--cj-accent-text);font:inherit;font-weight:600;font-size:15px;cursor:pointer;box-shadow:var(--cj-shadow);transition:transform 0.15s ease}.launcher:hover{transform:translateY(-2px)}.launcher:focus-visible{outline:3px solid var(--cj-accent);outline-offset:3px}.launcher[hidden]{display:none}.panel{display:flex;flex-direction:column;width:380px;height:560px;max-height:calc(100vh - 40px);background:var(--cj-surface);border:1px solid var(--cj-border);border-radius:var(--cj-radius);box-shadow:var(--cj-shadow);overflow:hidden}.panel[hidden]{display:none}.header{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:14px 16px;background:var(--cj-accent);color:var(--cj-accent-text)}.header h2{margin:0;font-size:15px;font-weight:600}.header p{margin:2px 0 0;font-size:12px;opacity:0.85}.close{border:0;background:transparent;color:inherit;font-size:22px;line-height:1;padding:4px 8px;border-radius:8px;cursor:pointer}.close:hover{background:rgba(255,255,255,0.18)}.close:focus-visible{outline:2px solid var(--cj-accent-text);outline-offset:2px}.log{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;background:var(--cj-surface)}.msg{max-width:85%;padding:10px 13px;border-radius:var(--cj-radius);font-size:14.5px;line-height:1.45;white-space:pre-wrap;overflow-wrap:anywhere}.msg.bot{align-self:flex-start;background:var(--cj-surface-alt);color:var(--cj-text);border-bottom-left-radius:4px}.msg.user{align-self:flex-end;background:var(--cj-accent);color:var(--cj-accent-text);border-bottom-right-radius:4px}.msg.error{align-self:stretch;max-width:100%;background:transparent;border:1px dashed var(--cj-border);color:var(--cj-text-muted);font-size:13px;text-align:center}.retry{margin-left:6px;border:0;background:none;color:var(--cj-accent);font:inherit;font-size:13px;font-weight:600;text-decoration:underline;cursor:pointer}.typing{align-self:flex-start;display:flex;gap:4px;padding:12px 14px;background:var(--cj-surface-alt);border-radius:var(--cj-radius);border-bottom-left-radius:4px}.typing span{width:7px;height:7px;border-radius:50%;background:var(--cj-text-muted);animation:cj-bounce 1.2s infinite ease-in-out}.typing span:nth-child(2){animation-delay:0.15s}.typing span:nth-child(3){animation-delay:0.3s}@keyframes cj-bounce{0%,60%,100%{transform:translateY(0);opacity:0.5}30%{transform:translateY(-5px);opacity:1}}@media (prefers-reduced-motion:reduce){.launcher,.typing span{transition:none;animation:none}}.composer{display:flex;gap:8px;padding:12px;border-top:1px solid var(--cj-border);background:var(--cj-surface)}.composer textarea{flex:1;resize:none;min-height:42px;max-height:120px;padding:11px 12px;border:1px solid var(--cj-border);border-radius:10px;background:var(--cj-surface);color:var(--cj-text);font:inherit;font-size:14.5px;line-height:1.4}.composer textarea:focus-visible{outline:2px solid var(--cj-accent);outline-offset:-1px}.composer textarea:disabled{background:var(--cj-surface-alt);cursor:not-allowed}.send{align-self:flex-end;padding:11px 16px;border:0;border-radius:10px;background:var(--cj-accent);color:var(--cj-accent-text);font:inherit;font-weight:600;font-size:14px;cursor:pointer}.send:disabled{opacity:0.45;cursor:not-allowed}.send:focus-visible{outline:3px solid var(--cj-accent);outline-offset:2px}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}@media (max-width:480px){:host{right:0;bottom:0;left:0}.launcher{position:fixed;right:16px;bottom:16px}.panel{width:100vw;height:100dvh;max-height:100dvh;border:0;border-radius:0}}";

  var COPY = {
    en: {
      launcher: 'Chat with us',
      subtitle: 'Usually replies in a moment',
      close: 'Close chat',
      placeholder: 'Type your message',
      send: 'Send',
      sending: 'Sending',
      offline: 'Could not reach the assistant.',
      retry: 'Retry',
      failed: 'Something went wrong. Please try again later.',
      ended: 'This conversation is finished. Thanks.',
      log: 'Conversation'
    },
    es: {
      launcher: 'Hablemos',
      subtitle: 'Normalmente responde en un momento',
      close: 'Cerrar chat',
      placeholder: 'Escribe tu mensaje',
      send: 'Enviar',
      sending: 'Enviando',
      offline: 'No pudimos contactar al asistente.',
      retry: 'Reintentar',
      failed: 'Algo salió mal. Inténtalo más tarde.',
      ended: 'Esta conversación terminó. Gracias.',
      log: 'Conversación'
    }
  };

  var script = document.currentScript;

  if (!script) {
    return;
  }

  var config = {
    endpoint: script.getAttribute('data-endpoint') || '',
    site: script.getAttribute('data-site') || '',
    greeting: script.getAttribute('data-greeting') || '',
    title: script.getAttribute('data-title') || '',
    accent: script.getAttribute('data-accent') || '',
    theme: script.getAttribute('data-theme') || '',
    locale: (script.getAttribute('data-locale') || document.documentElement.lang || 'en')
      .slice(0, 2)
      .toLowerCase()
  };

  if (!config.endpoint || !config.site) {
    // Misconfiguration is a developer problem, not a visitor problem: say so
    // in the console and render nothing.
    console.error('[conserje] data-endpoint and data-site are both required.');
    return;
  }

  var t = COPY[config.locale] || COPY.en;
  var storageKey = 'conserje:' + config.site;

  /** sessionStorage is a convenience, not state we depend on. */
  var store = {
    read: function () {
      try {
        var raw = window.sessionStorage.getItem(storageKey);
        return raw ? JSON.parse(raw) : null;
      } catch (e) {
        return null;
      }
    },
    write: function (value) {
      try {
        window.sessionStorage.setItem(storageKey, JSON.stringify(value));
      } catch (e) {
        /* private browsing, blocked storage, quota: all survivable */
      }
    },
    clear: function () {
      try {
        window.sessionStorage.removeItem(storageKey);
      } catch (e) {
        /* ignore */
      }
    }
  };

  var saved = store.read() || {};
  var state = {
    session: typeof saved.session === 'string' ? saved.session : null,
    history: Array.isArray(saved.history) ? saved.history : [],
    done: saved.done === true,
    open: false,
    busy: false,
    lastMessage: null
  };

  var host = document.createElement('div');
  host.setAttribute('data-conserje', '');

  if (config.theme) {
    host.setAttribute('data-theme', config.theme);
  }

  var root = host.attachShadow({ mode: 'open' });
  var style = document.createElement('style');
  style.textContent = STYLES;
  root.appendChild(style);

  if (config.accent) {
    host.style.setProperty('--cj-accent', config.accent);
  }

  var launcher = el('button', 'launcher', { type: 'button', 'aria-haspopup': 'dialog' });
  launcher.textContent = t.launcher;

  var panel = el('div', 'panel', {
    role: 'dialog',
    'aria-modal': 'false',
    'aria-label': config.title || t.launcher
  });
  panel.hidden = true;

  var header = el('div', 'header');
  var headings = el('div');
  var title = el('h2');
  title.textContent = config.title || t.launcher;
  var subtitle = el('p');
  subtitle.textContent = t.subtitle;
  headings.appendChild(title);
  headings.appendChild(subtitle);

  var closeButton = el('button', 'close', { type: 'button', 'aria-label': t.close });
  closeButton.textContent = '×';

  header.appendChild(headings);
  header.appendChild(closeButton);

  // role=log + aria-live=polite means a screen reader announces each new
  // message without stealing focus from the textarea mid-typing.
  var log = el('div', 'log', {
    role: 'log',
    'aria-live': 'polite',
    'aria-relevant': 'additions',
    'aria-label': t.log
  });

  var composer = el('form', 'composer');
  var input = el('textarea', null, {
    rows: '1',
    placeholder: t.placeholder,
    'aria-label': t.placeholder,
    maxlength: '1200'
  });
  var send = el('button', 'send', { type: 'submit' });
  send.textContent = t.send;

  composer.appendChild(input);
  composer.appendChild(send);

  panel.appendChild(header);
  panel.appendChild(log);
  panel.appendChild(composer);
  root.appendChild(launcher);
  root.appendChild(panel);

  function el(tag, className, attrs) {
    var node = document.createElement(tag);

    if (className) {
      node.className = className;
    }

    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        node.setAttribute(key, attrs[key]);
      });
    }

    return node;
  }

  /** Always via textContent: nothing the backend returns is ever parsed as HTML. */
  function renderMessage(role, text) {
    var node = el('div', 'msg ' + (role === 'user' ? 'user' : 'bot'));
    node.textContent = text;
    log.appendChild(node);
    scrollToEnd();
    return node;
  }

  function renderError(message, canRetry) {
    var node = el('div', 'msg error');
    node.textContent = message;

    if (canRetry && state.lastMessage) {
      var button = el('button', 'retry', { type: 'button' });
      button.textContent = t.retry;
      button.addEventListener('click', function () {
        var pending = state.lastMessage;
        node.remove();
        state.lastMessage = null;
        submit(pending);
      });
      node.appendChild(button);
    }

    log.appendChild(node);
    scrollToEnd();
  }

  function showTyping() {
    var node = el('div', 'typing', { 'aria-hidden': 'true' });
    node.appendChild(el('span'));
    node.appendChild(el('span'));
    node.appendChild(el('span'));
    log.appendChild(node);
    scrollToEnd();
    return node;
  }

  function scrollToEnd() {
    log.scrollTop = log.scrollHeight;
  }

  function persist() {
    store.write({ session: state.session, history: state.history, done: state.done });
  }

  function setBusy(busy) {
    state.busy = busy;
    send.disabled = busy || state.done;
    input.disabled = busy || state.done;
    send.textContent = busy ? t.sending : t.send;
  }

  function finish() {
    state.done = true;
    setBusy(false);
    input.placeholder = t.ended;
    persist();
  }

  function restore() {
    log.textContent = '';

    if (state.history.length === 0 && config.greeting) {
      state.history.push({ role: 'bot', text: config.greeting });
    }

    state.history.forEach(function (entry) {
      renderMessage(entry.role, entry.text);
    });

    if (state.done) {
      input.placeholder = t.ended;
      send.disabled = true;
      input.disabled = true;
    }
  }

  function submit(text) {
    state.lastMessage = text;
    state.history.push({ role: 'user', text: text });
    renderMessage('user', text);
    persist();
    setBusy(true);

    var typing = showTyping();
    var body = { message: text };

    if (state.session) {
      body.session = state.session;
    }

    var url = config.endpoint
      + (config.endpoint.indexOf('?') === -1 ? '?' : '&')
      + 'site=' + encodeURIComponent(config.site);

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
      .then(function (response) {
        return response.json().then(function (data) {
          return { ok: response.ok, data: data };
        });
      })
      .then(function (result) {
        typing.remove();
        setBusy(false);

        if (!result.ok) {
          var error = (result.data && result.data.error) || {};
          renderError(error.message || t.failed, error.retryable === true);

          if (error.code === 'session_closed') {
            finish();
          }

          return;
        }

        state.lastMessage = null;

        if (typeof result.data.session === 'string') {
          state.session = result.data.session;
        }

        var reply = typeof result.data.reply === 'string' ? result.data.reply : '';

        if (reply) {
          state.history.push({ role: 'bot', text: reply });
          renderMessage('bot', reply);
        }

        if (result.data.done === true) {
          finish();
        } else {
          persist();
          input.focus();
        }
      })
      .catch(function () {
        typing.remove();
        setBusy(false);
        // Network-level failure: the message never reached the server, so
        // retrying it is always safe.
        renderError(t.offline, true);
      });
  }

  function open() {
    state.open = true;
    panel.hidden = false;
    launcher.hidden = true;

    if (!state.done) {
      input.focus();
    }

    scrollToEnd();
  }

  function close() {
    state.open = false;
    panel.hidden = true;
    launcher.hidden = false;
    launcher.focus();
  }

  launcher.addEventListener('click', open);
  closeButton.addEventListener('click', close);

  composer.addEventListener('submit', function (event) {
    event.preventDefault();

    var text = input.value.trim();

    if (!text || state.busy || state.done) {
      return;
    }

    input.value = '';
    input.style.height = 'auto';
    submit(text);
  });

  // Enter sends, Shift+Enter breaks the line -- the convention every chat UI
  // has trained people to expect.
  input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      composer.requestSubmit();
    }
  });

  input.addEventListener('input', function () {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 120) + 'px';
  });

  root.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && state.open) {
      close();
    }
  });

  restore();
  document.body.appendChild(host);

  // Minimal programmatic surface, so a host page can wire the widget to its
  // own call-to-action buttons.
  window.Conserje = {
    open: open,
    close: close,
    reset: function () {
      store.clear();
      state.session = null;
      state.history = [];
      state.done = false;
      state.lastMessage = null;
      input.disabled = false;
      send.disabled = false;
      input.placeholder = t.placeholder;
      restore();
    }
  };
})();
