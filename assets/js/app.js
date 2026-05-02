(function () {
  "use strict";

  function boot() {
    if (!window.PortfolioData || !window.PortfolioService || !window.PortfolioRenderer || !window.PortfolioController) {
      console.error("[PortfolioApp] Required portfolio scripts are missing.");
      return;
    }

    var controller = window.PortfolioController.create(window.PortfolioService, window.PortfolioRenderer);
    controller.init();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
