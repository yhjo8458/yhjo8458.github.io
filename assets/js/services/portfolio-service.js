(function () {
  "use strict";

  var STORAGE_KEY = "portfolio-language";
  var DEFAULT_LANGUAGE = "ko";
  var SUPPORTED_LANGUAGES = ["ko", "en"];

  function warn(message, details) {
    if (details) {
      console.warn("[PortfolioService] " + message, details);
      return;
    }

    console.warn("[PortfolioService] " + message);
  }

  function isObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
  }

  function asArray(value, fieldName) {
    if (Array.isArray(value)) {
      return value;
    }

    warn("Expected array for " + fieldName + ". Falling back to an empty list.");
    return [];
  }

  function normalizeLanguage(language) {
    return SUPPORTED_LANGUAGES.indexOf(language) >= 0 ? language : DEFAULT_LANGUAGE;
  }

  function getStoredLanguage() {
    try {
      return normalizeLanguage(window.localStorage.getItem(STORAGE_KEY));
    } catch (error) {
      warn("Unable to read language from localStorage.", error);
      return DEFAULT_LANGUAGE;
    }
  }

  function storeLanguage(language) {
    try {
      window.localStorage.setItem(STORAGE_KEY, normalizeLanguage(language));
    } catch (error) {
      warn("Unable to save language to localStorage.", error);
    }
  }

  function fallbackData(language) {
    var data = window.PortfolioData || {};
    return data[language] || data[DEFAULT_LANGUAGE] || {};
  }

  function normalizeData(language) {
    var requestedLanguage = normalizeLanguage(language);
    var raw = fallbackData(requestedLanguage);

    if (!isObject(raw) || Object.keys(raw).length === 0) {
      warn("Portfolio data is missing. Rendering with safe defaults.");
      raw = {};
    }

    var profile = isObject(raw.profile) ? raw.profile : {};
    if (!profile.name || !profile.role || !profile.tagline) {
      warn("Profile is missing name, role, or tagline.", profile);
    }

    var contact = isObject(raw.contact) ? raw.contact : {};
    if (!contact.email) {
      warn("Contact email is empty.");
    }

    return {
      language: requestedLanguage,
      meta: isObject(raw.meta) ? raw.meta : {},
      navigation: asArray(raw.navigation, "navigation"),
      profile: {
        name: profile.name || "Your Name",
        role: profile.role || "Developer",
        tagline: profile.tagline || "Portfolio content is ready to customize.",
        intro: profile.intro || "",
        availability: profile.availability || "",
        location: profile.location || "",
        ctas: asArray(profile.ctas, "profile.ctas")
      },
      heroPanel: asArray(raw.heroPanel, "heroPanel"),
      sections: isObject(raw.sections) ? raw.sections : {},
      highlights: asArray(raw.highlights, "highlights").filter(Boolean),
      projects: asArray(raw.projects, "projects").filter(function (project) {
        var isValid = isObject(project) && project.name;
        if (!isValid) {
          warn("Skipping project without a name.", project);
        }
        return isValid;
      }),
      services: asArray(raw.services, "services").filter(Boolean),
      process: asArray(raw.process, "process").filter(Boolean),
      techStack: asArray(raw.techStack, "techStack").filter(Boolean),
      contact: {
        email: contact.email || "",
        links: asArray(contact.links, "contact.links").filter(function (link) {
          return isObject(link) && link.label && link.href;
        })
      },
      emptyMessages: isObject(raw.emptyMessages) ? raw.emptyMessages : {}
    };
  }

  window.PortfolioService = {
    DEFAULT_LANGUAGE: DEFAULT_LANGUAGE,
    SUPPORTED_LANGUAGES: SUPPORTED_LANGUAGES,
    getStoredLanguage: getStoredLanguage,
    storeLanguage: storeLanguage,
    normalizeLanguage: normalizeLanguage,
    getPortfolio: normalizeData
  };
})();
