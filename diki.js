// ==UserScript==
// @name     Diki downloader
// @version  1
// @grant    none
// @match https://diki.pl/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js 
// ==/UserScript==

document.querySelectorAll('.audioIcon').forEach((el) => {
    const downloadUrl = "https://diki.pl" + el.dataset.audioUrl;

    const link = document.createElement('a');
    link.href = downloadUrl;

    const img = document.createElement('img');
    img.src = "/images/miniicons/dictionary.svg";
    img.alt = "download";
    img.className = "absmiddle";
    img.style.maxWidth = "15px";
    img.style.width = "100%";
    img.style.maxHeight = "15px";
    img.style.height = "auto";

    link.appendChild(img);
    el.insertAdjacentElement('afterend', link);
});
