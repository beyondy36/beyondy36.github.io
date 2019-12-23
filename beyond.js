// ==UserScript==
// @include      *cnki.net*
// @include      *kns.cnki.net*
// @include      *wanfangdata.com.cn*
// @include      *cqvip.com*
// @include      https://wenku.baidu.com/view/*
// @name         beyond
// @namespace    http://tampermonkey.net/
// @version      1.03
// @author       beyond.y
// @grant        none

// @description beyond.y
// ==/UserScript==

(function() {
    'use strict';

    if (location.host.indexOf("kns.cnki.net") > -1) {
        window.down=function(){
          var t=location.href
        window.location.href = 'https://beyondy.now.sh/zw.html';
          window.open(t);
    };
    var button = document.createElement("input"); //创建一个input对象（提示框按钮）
    button.setAttribute("type", "button");
    button.setAttribute("value", "自动登陆");
    button.style.width = "100px";
    button.style.align = "left";

    button.style.marginLeft = "10px";
    button.style.marginBottom = "10px";
    button.style.background = "#b46300";
    button.style.border = "10px solid " + "#b46300";//52
    button.style.color = "white";
    button.onclick=window.down;
    var x = document.getElementById("DownLoadParts");
    x.appendChild(button);
    }
  
  else if(location.host.indexOf("www.cqvip.com") > -1)
  {window.down=function(){
        var t=location.href
        var t1
        t1=t.replace("http","https://ifish.fun/paper/search?key=http");
        window.open(t1);
    };
    var button = document.createElement("input"); //创建一个input对象（提示框按钮）
    button.setAttribute("type", "button");
    button.setAttribute("value", "下载该文献");
    button.style.width = "80px";
    button.style.align = "left";
    button.style.marginLeft = "10px";
    button.style.marginBottom = "10px";
    button.style.background = "#b46300";
    button.style.border = "1px solid " + "#b46300";//52
    button.style.color = "white";
    button.onclick=window.down;
    var x = document.getElementById("diggproduct");                                                
    x.appendChild(button);
    }
    else if(location.host.indexOf("wanfangdata.com.cn") > -1)
  {window.down=function(){
        var t=location.href
        window.location.href = 'https://beyondy.now.sh/wf.html';
        window.open(t);
    };
    var button = document.createElement("input"); //创建一个input对象（提示框按钮）
    button.setAttribute("type", "button");
    button.setAttribute("value", "自动登录");
    button.style.width = "100px";
    button.style.align = "left";
    button.style.marginLeft = "10px";
    button.style.marginBottom = "10px";
    button.style.background = "#b46300";
    button.style.border = "5px solid " + "#b46300";//52
    button.style.color = "white";
    button.onclick=window.down;
    var x = document.getElementById("showOrhidde");                                                
    x.appendChild(button);
    }
    // Your code here...
})();
 (function() {
    window.down=function(){
        var t=location.href
        var t1
        var t2
        t1=t.replace("?from=search","");
        t2=t1.replace("https://wenku.baidu.com/view/","http://219.140.69.154/view.html?docid=");
        window.open(t2);
    };
    var button = document.createElement("input"); //创建一个input对象（提示框按钮）
    button.setAttribute("type", "button");
    button.setAttribute("value", "下载该文档");
    button.style.width = "80px";
    button.style.align = "center";
    button.style.marginLeft = "80px";
    button.style.marginBottom = "10px";
    button.style.background = "#b46300";
    button.style.border = "1px solid " + "#b46300";//52
    button.style.color = "white";
    button.onclick=window.down;
    var x = document.getElementById("doc-header-test");
    x.appendChild(button);
})();
