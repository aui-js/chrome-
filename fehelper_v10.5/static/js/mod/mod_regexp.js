var baidu=function(){this.version="1.3.5"};baidu.namespace=new Object();baidu.namespace.register=function(e){var c=/^[_$a-z]+[_$a-z0-9]*/i;var d=e.split(".");var g="";var f="";var a=[window];for(var b=0;b<d.length;b++){if(!c.test(d[b])){throw new Error("Invalid namespace:"+d[b]+"");return}a[b+1]=a[b][d[b]];if(typeof a[b+1]=="undefined"){a[b+1]=new Object()}}};String.prototype.trim=function(){return this.replace(/^\s*|\s*$/g,"")};String.prototype.format=function(){var b=arguments.length,a=this;while(b--){a=a.replace(new RegExp("\\{"+b+"\\}","g"),arguments[b])}return a};Date.prototype.format=function(e){var a=function(m,l){var n="",k=(m<0),j=String(Math.abs(m));if(j.length<l){n=(new Array(l-j.length+1)).join("0")}return(k?"-":"")+n+j};if("string"!=typeof e){return this.toString()}var b=function(k,j){e=e.replace(k,j)};var f=this.getFullYear(),d=this.getMonth()+1,i=this.getDate(),g=this.getHours(),c=this.getMinutes(),h=this.getSeconds();b(/yyyy/g,a(f,4));b(/yy/g,a(parseInt(f.toString().slice(2),10),2));b(/MM/g,a(d,2));b(/M/g,d);b(/dd/g,a(i,2));b(/d/g,i);b(/HH/g,a(g,2));b(/H/g,g);b(/hh/g,a(g%12,2));b(/h/g,g%12);b(/mm/g,a(c,2));b(/m/g,c);b(/ss/g,a(h,2));b(/s/g,h);return e};String.prototype.getBytes=function(){var b=this.replace(/\n/g,"xx").replace(/\t/g,"x");var a=encodeURIComponent(b);return a.replace(/%[A-Z0-9][A-Z0-9]/g,"x").length};var getOuterHtmlEllipsis=function(d){var b=/(<[^>]+>)/g;var a=b.exec(d.outerHTML);var c=a?a[1]:d.outerHTML;c=c.length>40?c.substr(0,40)+"...":c;return c.replace(/</g,"&lt;").replace(/>/g,"&gt;")};var getOuterAndInnerHtmlEllipsis=function(b){var a=jQuery("<div></div>").append(b).html()};(function(){baidu.i18n={};baidu.i18n.getMessage=function(d,b){if(b){for(var c=0,a=b.length;c<a;c++){b[c]=""+b[c]}return chrome.i18n.getMessage(d,b)}else{return chrome.i18n.getMessage(d)}}})();const MSG_TYPE={BROWSER_CLICKED:"browser-clicked",GET_CSS:"get-css",GET_JS:"get-js",GET_HTML:"get-html",GET_COOKIE:"get-cookie",REMOVE_COOKIE:"remove-cookie",SET_COOKIE:"set-cookie",GET_OPTIONS:"get_options",SET_OPTIONS:"set_options",FCP_HELPER_INIT:"fcp_helper_init",CSS_READY:"css-ready",JS_READY:"js-ready",HTML_READY:"html-ready",ALL_READY:"all-ready",START_OPTION:"start-option",OPT_START_FCP:"opt-item-fcp",OPT_START_GRID:"opt-item-grid",CALC_PAGE_LOAD_TIME:"calc-page-load-time",GET_PAGE_WPO_INFO:"get_page_wpo_info",SHOW_PAGE_LOAD_TIME:"show-page-load-time",FCP_HELPER_DETECT:"fcp-helper-detect",GRID_DETECT:"grid-detect",JS_TRACKER:"js_tracker",CODE_COMPRESS:"code_compress",FROM_POPUP:"from_popup_action",TAB_CREATED_OR_UPDATED:"tab_created_or_updated",REGEXP_TOOL:"regexp",EN_DECODE:"endecode",JSON_FORMAT:"jsonformat",QR_CODE:"qrcode",CODE_BEAUTIFY:"codebeautify",TIME_STAMP:"timestamp",IMAGE_BASE64:"imagebase64",QR_DECODE:"qr_decode",AUTO_FORMART_PAGE_JSON:"opt_item_autojson",COLOR_PICKER:"color-picker:newImage",AJAX_DEBUGGER:"ajax-debugger",AJAX_DEBUGGER_CONSOLE:"ajax-debugger-console",AJAX_DEBUGGER_SWITCH:"ajax-debugger-switch"};const FILE={STYLE:"style",LINK:"link",SCRIPT:"script-block"};const PUBLIC_ID_WHITE_LIST={"":{systemIds:{"":true}},"-//W3C//DTD HTML 3.2 Final//EN":{systemIds:{"":true}},"-//W3C//DTD HTML 4.0//EN":{systemIds:{"":true,"http://www.w3.org/TR/html4/strict.dtd":true}},"-//W3C//DTD HTML 4.01//EN":{systemIds:{"":true,"http://www.w3.org/TR/html4/strict.dtd":true}},"-//W3C//DTD HTML 4.0 Transitional//EN":{systemIds:{"":true,"http://www.w3.org/TR/html4/loose.dtd":true}},"-//W3C//DTD HTML 4.01 Transitional//EN":{systemIds:{"":true,"http://www.w3.org/TR/html4/loose.dtd":true,"http://www.w3.org/TR/1999/REC-html401-19991224/loose.dtd":true}},"-//W3C//DTD XHTML 1.1//EN":{systemIds:{"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd":true}},"-//W3C//DTD XHTML Basic 1.0//EN":{systemIds:{"http://www.w3.org/TR/xhtml-basic/xhtml-basic10.dtd":true}},"-//W3C//DTD XHTML 1.0 Strict//EN":{systemIds:{"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd":true}},"-//W3C//DTD XHTML 1.0 Transitional//EN":{systemIds:{"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd":true}},"ISO/IEC 15445:1999//DTD HyperText Markup Language//EN":{systemIds:{"":true}},"ISO/IEC 15445:2000//DTD HTML//EN":{systemIds:{"":true}},"ISO/IEC 15445:1999//DTD HTML//EN":{systemIds:{"":true}}};const COMPAT_MODE_DIFF_PUBLIC_ID_MAP={"-//W3C//DTD HTML 4.0 Transitional//EN":{systemIds:{"http://www.w3.org/TR/html4/loose.dtd":{IE:"S",WebKit:"Q"}}},"ISO/IEC 15445:2000//DTD HTML//EN":{systemIds:{"":{IE:"Q",WebKit:"S"}}},"ISO/IEC 15445:1999//DTD HTML//EN":{systemIds:{"":{IE:"Q",WebKit:"S"}}}};const HTML_DEPRECATED_TAGS={acronym:"定义首字母缩写",applet:"定义Java Applet",basefont:"定义Font定义",big:"定义大号文本",center:"定义居中的文本",dir:"定义目录列表",font:"定义文字相关",frame:"定义框架",frameset:"定义框架集",isindex:"定义单行的输入域",noframes:"定义noframe 部分",s:"定义加删除线的文本",strike:"定义加删除线的文本",tt:"定义打字机文本",u:"定义下划线文本",xmp:"定义预格式文本",layer:"定义层"};const HTML_DEPRECATED_ATTRIBUTES={align:{iframe:true,img:true,object:true,table:true},color:{font:true},height:{td:true,th:true},language:{script:true},noshade:{hr:true},nowrap:{td:true,th:true},size:{hr:true,font:true,basefont:true}};const BLOCK_HTML_ELEMENT=["address","blockquote","center","dir","div","dl","fieldset","form","h1","h2","h3","h4","h5","h6","hr","isindex","menu","noframes","noscript","ol","p","pre","table","ul"];const INLINE_HTML_ELEMENT=["a","acronym","b","bdo","big","br","cite","code","dfn","em","font","i","img","input","kbd","label","q","s","samp","select","small","span","strike","strong","sub","sup","textarea","tt","u","var"];const CHANGE_ABLE_HTML_ELEMENT=["applet","button","del","iframe","ins","map","object","script"];const CONDITIONAL_COMMENT_REGEXP=/\[\s*if\s+[^\]][\s\w]*\]/i;const NOT_IE_REVEALED_OPENING_CONDITIONAL_COMMENT_REGEXP=/^\[if\s+(!IE|false)\]$/i;const REVEALED_CLOSING_CONDITIONAL_COMMENT_REGEXP=/^\[endif\s*\]$/i;const NOT_IE_HIDDEN_CONDITIONAL_COMMENT_REGEXP=/^\[if\s+(!IE|false)\]>.*<!\[endif\]$/i;const REG={SCRIPT:/<script[^>]*>[\s\S]*?<\/[^>]*script>/gi,COMMENT:/<!--[\s\S]*?--\>/g,CSS_EXPRESSION:/expression[\s\r\n ]?\(/gi,TEXTAREA:/<textarea[^>]*>[\s\S]*?<\/[^>]*textarea>/gi,INVALID_TAG:/<\W+>/gi};const SELF_CLOSING_TAGS=["meta","link","area","base","col","input","img","br","hr","param","embed"];baidu.namespace.register("baidu.regexp");$.fn.extend({textareaAutoHeight:function(a){this._options={minHeight:0,maxHeight:100000};this.init=function(){for(var b in a){this._options[b]=a[b]}if(this._options.minHeight==0){this._options.minHeight=parseFloat($(this).height())}for(var b in this._options){if($(this).attr(b)==null){$(this).attr(b,this._options[b])}}$(this).keyup(this.resetHeight).change(this.resetHeight).focus(this.resetHeight)};this.resetHeight=function(){var d=parseFloat($(this).attr("minHeight"));var c=parseFloat($(this).attr("maxHeight"));if(!$.browser.msie){$(this).height(0)}var b=parseFloat(this.scrollHeight);b=b<d?d:b>c?c:b;$(this).height(b).scrollTop(b);if(b>=c){$(this).css("overflow-y","scroll")}else{$(this).css("overflow-y","hidden")}};this.init()}});baidu.regexp=(function(){var e,q,r,g,j,h,k;var d="tmp_id_";var b="b";var s="i";var n="tr_"+d;var m=function(t){try{return new Function("return "+t)()}catch(u){return null}};var l=function(u){var t=["<table class='table table-bordered table-striped table-condensed table-hover'>"];t.push('<tr class="active"><th class="num">序号</th><th>匹配结果</th><th>在原字符串中的位置</th></tr>');$.each(u,function(v,w){t.push('<tr id="'+n+w.index+'" data-index="'+w.index+'">');t.push('<td class="num">'+(v+1)+'</td><td class="content">'+w.text+'</td><td class="index">'+w.index+"</td>");t.push("</tr>")});t.push("</table>");return t.join("")};var c=function(w,x){var u=[];for(var v=0,t=x.text.length;v<t;v++){u.push("<"+w+' data-id="'+d+x.index+'">'+x.text.charAt(v)+"</"+w+">")}return u.join("")};var p=function(){$("tr[id^="+n+"]").click(function(v){var u=$(this).attr("data-index");var t=$(b+"[data-id="+d+u+"]");t.animate({opacity:0},200).delay().animate({opacity:1},200).delay().animate({opacity:0},200).delay().animate({opacity:1},200)})};var o=function(u,w){if(!u){j.html("");return}var t=[];var v=0;$.each(w,function(x,y){if(x==0){if(y.index==0){t.push(c(b,y))}else{t.push(c(s,{index:0,text:u.substring(0,y.index)}));t.push(c(b,y))}}else{v=w[x-1].index+w[x-1].text.length;t.push(c(s,{index:v,text:u.substring(v,y.index)}));t.push(c(b,y))}});j.html(t.join(""));p()};var a=function(t){var u=["<table class='table table-bordered table-striped table-condensed table-hover'>"];u.push('<tr class="active"><th class="num">序号</th><th>匹配结果</th></tr>');u.push('<tr><td colspan="2">'+t+"</td></tr>");u.push("</table>");return u.join("")};var f=function(w){h.height(q.height()+24);var u=e.val().trim();var v=q.val().trim();if(!u||!v){r.html(a("不能匹配"));g.html("0个");o()}else{var t=m(u);if(!t||!t instanceof RegExp){r.html(a("正则表达式错误！"));g.html("0个");o();return}var x=[];v.replace(t,function(){var z=arguments[0];var y=arguments[arguments.length-2];x.push({text:z,index:y})});if(!x||!x.length){r.html(a("不能匹配"));g.html("0个");o()}else{r.html(l(x));g.html(x.length+"个");o(q.val(),x)}}};var i=function(){$(function(){e=$("#regText");q=$("#srcCode");j=$("#srcBackground");h=$("#srcWrapper");r=$("#rstCode").html(a("暂无输入"));g=$("#rstCount");k=$("#regList");e.textareaAutoHeight({minHeight:34});q.textareaAutoHeight({minHeight:50});j.textareaAutoHeight({minHeight:50});$("#regText,#srcCode").keyup(f).change(f).bind("paste",f);k.change(function(v){var t=$(this).val();var u=$("#regTip");e.val(t);if(!t){u.hide()}else{u.show()}})})};return{init:i}})();baidu.regexp.init();