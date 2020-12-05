// ==UserScript==
// @name     Linguee downloader
// @version  1
// @grant    none
// @match https://www.linguee.com/*
// @require https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js 
// ==/UserScript==
// 	<a id="ES_ES/dc/dc8c73942348480def7a4e5d9d937402-106" class="audio" onclick="playSound(this,&quot;ES_ES/dc/dc8c73942348480def7a4e5d9d937402-106&quot;,&quot;Spanish&quot;);"></a>
// https://www.linguee.com/mp3/ES_ES/dc/dc8c73942348480def7a4e5d9d937402-106.mp3
$('.audio').each((i,v)=>{
		var download_url = "https://www.linguee.com/mp3/"+v.id+".mp3";
		$(v).after(`<a href="${download_url}">
				<img style="display:inline;" src="https://d1wigddrwdtsce.cloudfront.net/img5/favicon-16x16.png" >
				</a>`)
		})
