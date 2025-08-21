//* IMPORT MODULES
import { isSocialLinksOpen, fadeOutSocialLinks } from "./share.js";

//* UI.JS SCRIPT
const shareButton = document.querySelector(".card__share-button");

export function changeShareButtonColorToActive() {
  shareButton.classList.add("active");
}

export function changeShareButtonColorToInactive() {
  shareButton.classList.remove("active");
}

export function updateShareButtonAttributes() {
  if (isSocialLinksOpen()) {
    shareButton.setAttribute("aria-label", "Close share links");
    shareButton.setAttribute("aria-expanded", "true");
  } else {
    shareButton.setAttribute("aria-label", "Click to see share links");
    shareButton.setAttribute("aria-expanded", "false");
  }
}

export function initEscapeKeyToCloseShareLink() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isSocialLinksOpen()) {
      fadeOutSocialLinks();
    }
  });
}
