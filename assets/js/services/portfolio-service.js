(function () {
  "use strict";

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

    warn(fieldName + " 항목은 배열이어야 합니다. 빈 목록으로 대체합니다.");
    return [];
  }

  function getPortfolio() {
    var raw = window.PortfolioData || {};

    if (!isObject(raw) || Object.keys(raw).length === 0) {
      warn("포트폴리오 데이터가 없습니다. 기본값으로 렌더링합니다.");
      raw = {};
    }

    var profile = isObject(raw.profile) ? raw.profile : {};
    if (!profile.name || !profile.role || !profile.tagline) {
      warn("프로필의 이름, 역할, 한 줄 소개 중 누락된 값이 있습니다.", profile);
    }

    var contact = isObject(raw.contact) ? raw.contact : {};
    if (!contact.email) {
      warn("연락처 이메일이 비어 있습니다.");
    }

    return {
      language: "ko",
      meta: isObject(raw.meta) ? raw.meta : {},
      navigation: asArray(raw.navigation, "navigation"),
      profile: {
        name: profile.name || "YHJO",
        role: profile.role || "개발자",
        tagline: profile.tagline || "포트폴리오 내용을 준비하고 있습니다.",
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
          warn("프로젝트명이 없는 항목은 건너뜁니다.", project);
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
      labels: isObject(raw.labels) ? raw.labels : {},
      emptyMessages: isObject(raw.emptyMessages) ? raw.emptyMessages : {}
    };
  }

  window.PortfolioService = {
    getPortfolio: getPortfolio
  };
})();
