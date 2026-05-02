(function () {
  "use strict";

  function createController(service, renderer) {
    var observer = null;

    function init() {
      renderPage();
      bindSmoothAnchors();
      setupActiveNavigation();
    }

    function renderPage() {
      var data = service.getPortfolio();
      renderer.render(data);
    }

    function bindSmoothAnchors() {
      document.addEventListener("click", function (event) {
        var link = event.target.closest('a[href^="#"]');
        if (!link) {
          return;
        }

        var id = link.getAttribute("href").slice(1);
        var target = document.getElementById(id);
        if (!target) {
          return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", "#" + id);
      });
    }

    function setupActiveNavigation() {
      if (observer) {
        observer.disconnect();
      }

      var sections = Array.prototype.slice.call(document.querySelectorAll("[data-section]"));
      var links = Array.prototype.slice.call(document.querySelectorAll("[data-nav-link]"));

      if (!("IntersectionObserver" in window) || sections.length === 0 || links.length === 0) {
        return;
      }

      observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          links.forEach(function (link) {
            link.classList.toggle("is-active", link.getAttribute("data-nav-link") === entry.target.id);
          });
        });
      }, {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0.01
      });

      sections.forEach(function (section) {
        observer.observe(section);
      });
    }

    return {
      init: init
    };
  }

  window.PortfolioController = {
    create: createController
  };
})();
