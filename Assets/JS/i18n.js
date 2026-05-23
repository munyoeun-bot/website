(function() {
  const LANG_KEY = 'lang';
  const CACHE_KEY = 'i18n-cache';
  const DEFAULT_LANG = 'km';

  let currentLang = null;
  let translations = {};
  let langPathResolved = false;
  let LANG_PATH = './Assets/lang';
  let currentRequest = 0;

  // Detect correct path based on page location
  function resolveLangPath() {
    if (langPathResolved) return LANG_PATH;

    const currentPath = window.location.pathname;
    const depth = (currentPath.match(/\//g) || []).length - 1;

    if (depth > 1) {
      LANG_PATH = '../'.repeat(depth - 1) + 'Assets/lang';
    } else {
      LANG_PATH = './Assets/lang';
    }

    langPathResolved = true;
    return LANG_PATH;
  }

  function resolveLangAlias(lang) {
    return lang === 'km' ? 'kh' : lang;
  }

  function normalizeLang(lang) {
    if (lang === 'km' || lang === 'en') return lang;
    if (lang === 'kh') return 'km';
    return DEFAULT_LANG;
  }

  async function fetchTranslations(lang) {
    try {
      const path = resolveLangPath();
      const fileLang = resolveLangAlias(lang);
      const response = await fetch(`${path}/${fileLang}.json`);
      if (!response.ok) throw new Error(`Failed to load ${fileLang}.json`);
      return await response.json();
    } catch (error) {
      console.error('i18n: Translation load failed', error);
      if (lang !== DEFAULT_LANG) {
        return fetchTranslations(DEFAULT_LANG);
      }
      return {};
    }
  }

  function getTranslation(key) {
    const keys = key.split('.');
    let value = translations;

    for (let k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        return null;
      }
    }

    return typeof value === 'string' ? value : null;
  }

  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const text = getTranslation(key);
      if (text) {
        element.textContent = text;
      }
    });
  }

  function updateLanguageUI() {
    const langText = document.getElementById('langText');
    const langFlag = document.getElementById('langFlag');

    if (langText) {
      langText.textContent = currentLang === 'km' ? 'KH' : 'EN';
    }
    if (langFlag) {
      langFlag.src = currentLang === 'km'
        ? 'https://flagcdn.com/w40/kh.png'
        : 'https://flagcdn.com/w40/us.png';
    }
  }

  async function setLanguage(lang) {
    lang = normalizeLang(lang);
    const requestId = ++currentRequest;
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);

    const cache = localStorage.getItem(CACHE_KEY);
    if (cache) {
      try {
        const cachedData = JSON.parse(cache);
        if (cachedData && cachedData[lang]) {
          if (requestId !== currentRequest) return;
          translations = cachedData[lang];
          applyTranslations();
          updateLanguageUI();
          return;
        }
      } catch (e) {
        console.error('i18n: Cache parse error', e);
      }
    }

    const newTranslations = await fetchTranslations(lang);
    if (requestId !== currentRequest) return;
    if (Object.keys(newTranslations).length > 0) {
      translations = newTranslations;

      try {
        const cacheData = JSON.parse(localStorage.getItem(CACHE_KEY) || '{}');
        cacheData[lang] = translations;
        localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
      } catch (e) {
        console.error('i18n: Cache save error', e);
      }
    }

    applyTranslations();
    updateLanguageUI();
  }

  function initializeLanguage() {
    const savedLang = normalizeLang(localStorage.getItem(LANG_KEY) || DEFAULT_LANG);
    currentLang = savedLang;
    setLanguage(savedLang);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.hasAttribute && node.hasAttribute('data-i18n')) {
              const key = node.getAttribute('data-i18n');
              const text = getTranslation(key);
              if (text) node.textContent = text;
            }
            if (node.querySelectorAll) {
              node.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                const text = getTranslation(key);
                if (text) el.textContent = text;
              });
            }
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    updateLanguageUI();
  }

  window.i18n = {
    setLanguage,
    getTranslation,
    getCurrentLang: () => currentLang,
    applyTranslations
  };

  window.setLang = setLanguage;
  window.changeLang = function(lang) {
    if (currentLang !== lang) {
      setLanguage(lang);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLanguage);
  } else {
    initializeLanguage();
  }
})();
