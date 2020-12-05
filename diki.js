// ==UserScript==
// @name     Diki downloader
// @version  1
// @grant    none
// @match https://diki.pl/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js 
// ==/UserScript==

$('.audioIcon').each((i,v)=>{
	var download_url = "https://diki.pl"+$(v).data("audio-url");
	$(v).after(`<a href="${download_url}">
		<img 
			src="/images/miniicons/dictionary.svg"
			class="absmiddle"
			alt="download"
			style="max-width: 15px;
			width: 100%; max-height: 15px;
			height: auto;"
		>
		</a> `)

