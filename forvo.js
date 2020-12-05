 // ==UserScript==
 // @name     Forvo downloader
 // @version  1
 // @grant       none
 // @match https://forvo.com/*
 // @require https://code.jquery.com/jquery-3.5.1.slim.min.js
 // ==/UserScript==
//
var script = document.createElement('script'); 
script.type = "text/javascript"; 
script.innerHTML = ` 
	 function Download(id, path_mp3_raw, path_ogg, isMap, path_audio_mp3_raw, path_audio_ogg, quality) {
	 var path_mp3_r = defaultProtocol + '//' + _AUDIO_HTTP_HOST + '/mp3/' + base64_decode(path_mp3_raw.replace(/'/g, ''));
	 var path_audio_mp3_r = defaultProtocol + '//' + _AUDIO_HTTP_HOST + '/audios/mp3/' + base64_decode(path_audio_mp3_raw.replace(/'/g, ''));
	 return path_mp3_r
		}`;


$(function() {
	document.getElementsByTagName('head')[0].appendChild(script);
	$('.play').each( (i, e)=>{   
		unsafeWindow.params = e.getAttribute('onclick').match(/\(([^)]+)\)/)[1].split('\'')
	var par = e.getAttribute('onclick').match(/\(([^)]+)\)/)[1];


var link = unsafeWindow.Download(...par.split(','))

var d_button = $(` <a 
			href="${link}"
			title="Download it!"
			style="display:block;"
			>Download
		</a>`
		);

d_button.insertAfter(`#${e.id}`);
                 				  		      														      });

                 				  		      														      });
