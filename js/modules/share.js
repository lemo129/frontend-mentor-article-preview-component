//* IMPORT MODULES
import {
  changeShareButtonColorToActive,
  changeShareButtonColorToInactive,
  initEscapeKeyToCloseShareLink,
  updateShareButtonAttributes,
} from "./ui.js";

//* SHARE.JS SCRIPT
const shareButton = document.querySelector(".card__share-button");
const navWrapper = document.querySelector(".card__nav-wrapper");
const facebookLink = document.querySelector(".card__link--facebook");
const twitterLink = document.querySelector(".card__link--twitter");
const pinterestLink = document.querySelector(".card__link--pinterest");

function hideSocialLinksOnLoad() {
  navWrapper.style.maxHeight = "0px";
  navWrapper.style.overflow = "hidden";
}

export function isSocialLinksOpen() {
  return !(navWrapper.style.maxHeight === "0px");
}

function fadeInSocialLinks() {
  navWrapper.style.maxHeight = `${navWrapper.scrollHeight}px`;
  navWrapper.style.opacity = 1;
  shareButton.disabled = true;
  navWrapper.addEventListener(
    "transitionend",
    () => {
      navWrapper.style.overflow = "visible";
      shareButton.disabled = false;
    },
    { once: true }
  );
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    shareButton.disabled = false;
    navWrapper.style.overflow = "visible";
  }
}

export function fadeOutSocialLinks() {
  navWrapper.style.overflow = "hidden";
  navWrapper.style.maxHeight = 0;
  navWrapper.style.opacity = 0;
  shareButton.disabled = true;
  navWrapper.addEventListener("transitionend", () => {
    shareButton.disabled = false;
  });
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    shareButton.disabled = false;
  }
}

function handleClickFacebookShare() {
  const siteUrl = encodeURIComponent(
    "https://article-preview-component-fcc-jiro.netlify.app/"
  );

  facebookLink.href = `https://www.facebook.com/sharer/sharer.php?u=${siteUrl}`;
}

function initFacebookShare() {
  facebookLink.addEventListener("click", handleClickFacebookShare);
}

function handleClickTwitterShare() {
  const tweetContent = encodeURIComponent(
    `Shift the overall look and feel by adding these wonderful touches to furniture in your home\n\nhttps://article-preview-component-fcc-jiro.netlify.app/`
  );

  twitterLink.href = `https://twitter.com/intent/tweet?text=${tweetContent}`;
}

function initTwitterShare() {
  twitterLink.addEventListener("click", handleClickTwitterShare);
}

function handleClickPinterestShare() {
  const siteUrl = encodeURIComponent(
    "https://article-preview-component-fcc-jiro.netlify.app/"
  );
  const imageUrl = encodeURIComponent(
    "https://article-preview-component-fcc-jiro.netlify.app/assets/img/drawers_660x528.jpg"
  );
  const description = encodeURIComponent(
    "Shift the overall look and feel by adding these wonderful touches to furniture in your home"
  );

  pinterestLink.href = `https://pinterest.com/pin/create/button/?url=${siteUrl}&media=${imageUrl}&description=${description}`;
}

function initPinterestShare() {
  pinterestLink.addEventListener("click", handleClickPinterestShare);
}

function handleClickShare() {
  if (isSocialLinksOpen()) {
    fadeOutSocialLinks();
    changeShareButtonColorToInactive();
  } else {
    fadeInSocialLinks();
    changeShareButtonColorToActive();
  }

  updateShareButtonAttributes();
}

export function initShare() {
  shareButton.addEventListener("click", handleClickShare);
  hideSocialLinksOnLoad();
  initTwitterShare();
  initFacebookShare();
  initPinterestShare();
  initEscapeKeyToCloseShareLink();
}
