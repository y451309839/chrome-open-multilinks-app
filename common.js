/**
 * Power by 一曲 451309839@qq.com
 */

function paste() {
	window.setTimeout(function(){
		var v = document.getElementById('p').value.match(/[^\s]+\.[a-zA-Z]+/ig);
		if(v && v.length) {
			for (var i = 0; i < v.length; i++) {
                if (v[i].substring(0,4).toLowerCase() != 'http') {
                    v[i] = 'http://' + v[i];
                }
				chrome.tabs.create({url:v[i]});
			}
			window.close();
		} else {
			document.body.innerHTML = '<nobr>URL not found from your clipboard data.</nobr>';
		}
	}, 0);
}

function init() {
	document.getElementById('p').focus();
	document.execCommand('paste');
}

window.onload = function(){
    document.addEventListener('onload', init());
    document.addEventListener('onpaste', paste());
}

