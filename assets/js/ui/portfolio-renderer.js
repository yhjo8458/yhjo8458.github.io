(function () {
  "use strict";

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function attr(value) {
    return escapeHtml(value);
  }

  function getSection(data, key) {
    return data.sections[key] || {};
  }

  function sectionHeading(section) {
    return [
      '<div class="shell section-heading">',
      section.eyebrow ? '<p class="eyebrow">' + escapeHtml(section.eyebrow) + "</p>" : "",
      section.title ? '<h2 class="section-title">' + escapeHtml(section.title) + "</h2>" : "",
      section.description ? '<p class="section-description">' + escapeHtml(section.description) + "</p>" : "",
      "</div>"
    ].join("");
  }

  function renderNavigation(data) {
    var nav = document.querySelector("[data-nav]");
    var brand = document.querySelector("[data-brand]");

    if (brand) {
      brand.textContent = data.profile.name;
    }

    if (!nav) {
      return;
    }

    nav.innerHTML = data.navigation.map(function (item) {
      if (!item.id || !item.label) {
        return "";
      }

      return '<a href="#' + attr(item.id) + '" data-nav-link="' + attr(item.id) + '">' + escapeHtml(item.label) + "</a>";
    }).join("");
  }

  function renderHero(data) {
    var target = document.querySelector('[data-section="hero"]');
    if (!target) {
      return;
    }

    var ctas = data.profile.ctas.map(function (cta) {
      if (!cta.label || !cta.href) {
        return "";
      }

      var variant = cta.variant === "secondary" ? " secondary" : "";
      return '<a class="button' + variant + '" href="' + attr(cta.href) + '">' + escapeHtml(cta.label) + "</a>";
    }).join("");

    var panelRows = data.heroPanel.map(function (item) {
      if (!item.label && !item.value) {
        return "";
      }

      return [
        '<div class="panel-row">',
        '<span class="panel-label">' + escapeHtml(item.label) + "</span>",
        '<span class="panel-value">' + escapeHtml(item.value) + "</span>",
        "</div>"
      ].join("");
    }).join("");

    target.innerHTML = [
      '<div class="shell hero-grid">',
      "<div>",
      '<p class="eyebrow">' + escapeHtml(data.profile.role) + "</p>",
      "<h1>" + escapeHtml(data.profile.name) + "</h1>",
      '<p class="lead">' + escapeHtml(data.profile.tagline) + "</p>",
      data.profile.intro ? '<p class="section-description">' + escapeHtml(data.profile.intro) + "</p>" : "",
      ctas ? '<div class="cta-row">' + ctas + "</div>" : "",
      "</div>",
      panelRows ? '<aside class="hero-panel" aria-label="학습 기록 요약">' + panelRows + "</aside>" : "",
      "</div>"
    ].join("");
  }

  function renderAbout(data) {
    var target = document.querySelector('[data-section="about"]');
    if (!target) {
      return;
    }

    var highlights = data.highlights.map(function (item) {
      return [
        '<article class="highlight">',
        "<h3>" + escapeHtml(item.title || "") + "</h3>",
        "<p>" + escapeHtml(item.text || "") + "</p>",
        "</article>"
      ].join("");
    }).join("");

    var services = data.services.map(function (item) {
      return [
        '<article class="card">',
        "<h3>" + escapeHtml(item.title || "") + "</h3>",
        "<p>" + escapeHtml(item.text || "") + "</p>",
        "</article>"
      ].join("");
    }).join("");

    target.innerHTML = [
      sectionHeading(getSection(data, "about")),
      '<div class="shell">',
      highlights ? '<div class="highlight-list">' + highlights + "</div>" : "",
      services ? '<div class="grid auto-grid" style="margin-top: 18px;">' + services + "</div>" : "",
      "</div>"
    ].join("");
  }

  function renderProjects(data) {
    var target = document.querySelector('[data-section="projects"]');
    if (!target) {
      return;
    }

    var projects = data.projects.map(function (project) {
      var tags = Array.isArray(project.tech) ? project.tech.map(function (tech) {
        return '<li class="tag">' + escapeHtml(tech) + "</li>";
      }).join("") : "";

      var link = project.link
        ? '<a class="project-link" href="' + attr(project.link) + '" target="_blank" rel="noreferrer">' + escapeHtml(data.labels.projectLink || "실습 결과 보기") + "</a>"
        : "";

      return [
        '<article class="card project-card">',
        "<h3>" + escapeHtml(project.name) + "</h3>",
        '<div class="meta">',
        renderProjectField(data.labels.projectProblem || "학습 주제", project.problem),
        renderProjectField(data.labels.projectSolution || "구현 정리", project.solution),
        renderProjectField(data.labels.projectResult || "기억할 점", project.result),
        "</div>",
        tags ? '<ul class="tag-list">' + tags + "</ul>" : "",
        link,
        "</article>"
      ].join("");
    }).join("");

    target.innerHTML = [
      sectionHeading(getSection(data, "projects")),
      '<div class="shell">',
      projects ? '<div class="grid auto-grid">' + projects + "</div>" : '<div class="empty-state">' + escapeHtml(data.emptyMessages.projects || "표시할 학습 기록이 없습니다.") + "</div>",
      "</div>"
    ].join("");
  }

  function renderProjectField(label, value) {
    if (!value) {
      return "";
    }

    return [
      '<div class="project-field">',
      '<span class="field-label">' + escapeHtml(label) + "</span>",
      "<p>" + escapeHtml(value) + "</p>",
      "</div>"
    ].join("");
  }

  function renderProcess(data) {
    var target = document.querySelector('[data-section="process"]');
    if (!target) {
      return;
    }

    var items = data.process.map(function (item) {
      return [
        '<article class="timeline-item">',
        "<h3>" + escapeHtml(item.title || "") + "</h3>",
        "<p>" + escapeHtml(item.text || "") + "</p>",
        "</article>"
      ].join("");
    }).join("");

    target.innerHTML = [
      sectionHeading(getSection(data, "process")),
      '<div class="shell">',
      items ? '<div class="timeline">' + items + "</div>" : "",
      "</div>"
    ].join("");
  }

  function renderTech(data) {
    var target = document.querySelector('[data-section="tech"]');
    if (!target) {
      return;
    }

    var groups = data.techStack.map(function (group) {
      var tags = Array.isArray(group.items) ? group.items.map(function (item) {
        return '<li class="tag">' + escapeHtml(item) + "</li>";
      }).join("") : "";

      return [
        '<article class="card tech-group">',
        "<h3>" + escapeHtml(group.category || "") + "</h3>",
        tags ? '<ul class="tag-list">' + tags + "</ul>" : "",
        "</article>"
      ].join("");
    }).join("");

    target.innerHTML = [
      sectionHeading(getSection(data, "tech")),
      '<div class="shell">',
      groups ? '<div class="grid auto-grid">' + groups + "</div>" : "",
      "</div>"
    ].join("");
  }

  function renderContact(data) {
    var target = document.querySelector('[data-section="contact"]');
    if (!target) {
      return;
    }

    var links = [];
    if (data.contact.email) {
      links.push('<a href="mailto:' + attr(data.contact.email) + '">' + escapeHtml(data.contact.email) + "</a>");
    }

    data.contact.links.forEach(function (link) {
      links.push('<a href="' + attr(link.href) + '" target="_blank" rel="noreferrer">' + escapeHtml(link.label) + "</a>");
    });

    var section = getSection(data, "contact");
    target.innerHTML = [
      '<div class="shell">',
      '<div class="contact-card">',
      section.eyebrow ? '<p class="eyebrow">' + escapeHtml(section.eyebrow) + "</p>" : "",
      section.title ? '<h2 class="section-title">' + escapeHtml(section.title) + "</h2>" : "",
      section.description ? "<p>" + escapeHtml(section.description) + "</p>" : "",
      links.length ? '<div class="contact-links">' + links.join("") + "</div>" : '<div class="empty-state">' + escapeHtml(data.emptyMessages.links || "표시할 링크가 없습니다.") + "</div>",
      "</div>",
      "</div>"
    ].join("");
  }

  function renderMeta(data) {
    document.documentElement.lang = data.language;
    document.title = data.meta.title || data.profile.name || "학습 실습 기록";

    var metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && data.meta.description) {
      metaDescription.setAttribute("content", data.meta.description);
    }
  }

  function render(data) {
    renderMeta(data);
    renderNavigation(data);
    renderHero(data);
    renderAbout(data);
    renderProjects(data);
    renderProcess(data);
    renderTech(data);
    renderContact(data);
  }

  window.PortfolioRenderer = {
    render: render
  };
})();
