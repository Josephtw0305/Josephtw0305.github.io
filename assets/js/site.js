// Loaded in <head> without defer so the saved theme is applied before the
// page paints. Everything that touches page elements waits for the DOM.
(function () {
  var root = document.documentElement;

  function readTheme() {
    try {
      return localStorage.getItem("theme");
    } catch (e) {
      return null;
    }
  }

  function saveTheme(value) {
    try {
      localStorage.setItem("theme", value);
    } catch (e) {
      // Storage can be blocked (private mode); the toggle still works for this visit.
    }
  }

  function systemTheme() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  root.setAttribute("data-theme", readTheme() || systemTheme());

  document.addEventListener("DOMContentLoaded", function () {
    var themeButton = document.getElementById("theme-toggle");
    if (themeButton) {
      themeButton.addEventListener("click", function () {
        var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        saveTheme(next);
      });
    }

    // "abstract" and "bibtex" buttons reveal the block named in data-toggle-target.
    document.querySelectorAll("[data-toggle-target]").forEach(function (button) {
      button.addEventListener("click", function () {
        var block = document.getElementById(button.getAttribute("data-toggle-target"));
        if (!block) return;
        var open = block.classList.toggle("open");
        button.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });

    // Publication filters: each paper carries data-type="peer" or "preprint".
    var filterButtons = document.querySelectorAll("[data-filter]");
    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var wanted = button.getAttribute("data-filter");
        filterButtons.forEach(function (b) {
          b.setAttribute("aria-pressed", b === button ? "true" : "false");
        });
        document.querySelectorAll(".pub[data-type]").forEach(function (pub) {
          pub.hidden = wanted !== "all" && pub.getAttribute("data-type") !== wanted;
        });
        document.querySelectorAll(".year-group").forEach(function (group) {
          group.hidden = !group.querySelector(".pub:not([hidden])");
        });
      });
    });
  });
})();
