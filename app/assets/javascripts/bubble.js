(function(a){a.fn.IsBubblePopupOpen=function(){var b=null;return a(this).each(function(c,d){var e=a(d).data("private_jquerybubblepopup_options");return null==e||"object"!=typeof e||a.isArray(e)||a.isEmptyObject(e)||null==e.privateVars||"object"!=typeof e.privateVars||a.isArray(e.privateVars)||a.isEmptyObject(e.privateVars)||void 0===e.privateVars.is_open||(b=e.privateVars.is_open?!0:!1),!1}),b},a.fn.GetBubblePopupLastDisplayDateTime=function(){function c(a){return new Date(1e3*a)}var b=null;return a(this).each(function(d,e){var f=a(e).data("private_jquerybubblepopup_options");return null==f||"object"!=typeof f||a.isArray(f)||a.isEmptyObject(f)||null==f.privateVars||"object"!=typeof f.privateVars||a.isArray(f.privateVars)||a.isEmptyObject(f.privateVars)||void 0===f.privateVars.last_display_datetime||null==f.privateVars.last_display_datetime||(b=c(f.privateVars.last_display_datetime)),!1}),b},a.fn.GetBubblePopupLastModifiedDateTime=function(){function c(a){return new Date(1e3*a)}var b=null;return a(this).each(function(d,e){var f=a(e).data("private_jquerybubblepopup_options");return null==f||"object"!=typeof f||a.isArray(f)||a.isEmptyObject(f)||null==f.privateVars||"object"!=typeof f.privateVars||a.isArray(f.privateVars)||a.isEmptyObject(f.privateVars)||void 0===f.privateVars.last_modified_datetime||null==f.privateVars.last_modified_datetime||(b=c(f.privateVars.last_modified_datetime)),!1}),b},a.fn.GetBubblePopupCreationDateTime=function(){function c(a){return new Date(1e3*a)}var b=null;return a(this).each(function(d,e){var f=a(e).data("private_jquerybubblepopup_options");return null==f||"object"!=typeof f||a.isArray(f)||a.isEmptyObject(f)||null==f.privateVars||"object"!=typeof f.privateVars||a.isArray(f.privateVars)||a.isEmptyObject(f.privateVars)||void 0===f.privateVars.creation_datetime||null==f.privateVars.creation_datetime||(b=c(f.privateVars.creation_datetime)),!1}),b},a.fn.GetBubblePopupMarkup=function(){var b=null;return a(this).each(function(c,d){var e=a(d).data("private_jquerybubblepopup_options");return null==e||"object"!=typeof e||a.isArray(e)||a.isEmptyObject(e)||null==e.privateVars||"object"!=typeof e.privateVars||a.isArray(e.privateVars)||a.isEmptyObject(e.privateVars)||void 0===e.privateVars.id||(b=a("#"+e.privateVars.id).length>0?a("#"+e.privateVars.id).html():null),!1}),b},a.fn.GetBubblePopupID=function(){var b=null;return a(this).each(function(c,d){var e=a(d).data("private_jquerybubblepopup_options");return null==e||"object"!=typeof e||a.isArray(e)||a.isEmptyObject(e)||null==e.privateVars||"object"!=typeof e.privateVars||a.isArray(e.privateVars)||a.isEmptyObject(e.privateVars)||void 0===e.privateVars.id||(b=e.privateVars.id),!1}),b},a.fn.RemoveBubblePopup=function(){var b=0;return a(this).each(function(c,d){var e=a(d).data("private_jquerybubblepopup_options");null==e||"object"!=typeof e||a.isArray(e)||a.isEmptyObject(e)||null==e.privateVars||"object"!=typeof e.privateVars||a.isArray(e.privateVars)||a.isEmptyObject(e.privateVars)||void 0===e.privateVars.id||(a(d).unbind("managebubblepopup"),a(d).unbind("setbubblepopupinnerhtml"),a(d).unbind("setbubblepopupoptions"),a(d).unbind("positionbubblepopup"),a(d).unbind("freezebubblepopup"),a(d).unbind("unfreezebubblepopup"),a(d).unbind("showbubblepopup"),a(d).unbind("hidebubblepopup"),a(d).data("private_jquerybubblepopup_options",{}),a("#"+e.privateVars.id).length>0&&a("#"+e.privateVars.id).remove(),b++)}),b},a.fn.HasBubblePopup=function(){var b=!1;return a(this).each(function(c,d){var e=a(d).data("private_jquerybubblepopup_options");return null==e||"object"!=typeof e||a.isArray(e)||a.isEmptyObject(e)||null==e.privateVars||"object"!=typeof e.privateVars||a.isArray(e.privateVars)||a.isEmptyObject(e.privateVars)||void 0===e.privateVars.id||(b=!0),!1}),b},a.fn.GetBubblePopupOptions=function(){var b={};return a(this).each(function(c,d){return b=a(d).data("private_jquerybubblepopup_options"),null==b||"object"!=typeof b||a.isArray(b)||a.isEmptyObject(b)||null==b.privateVars||"object"!=typeof b.privateVars||a.isArray(b.privateVars)||a.isEmptyObject(b.privateVars)?b=null:delete b.privateVars,!1}),a.isEmptyObject(b)&&(b=null),b},a.fn.SetBubblePopupInnerHtml=function(b,c){a(this).each(function(d,e){"boolean"!=typeof c&&(c=!0),a(e).trigger("setbubblepopupinnerhtml",[b,c])})},a.fn.SetBubblePopupOptions=function(b){a(this).each(function(c,d){a(d).trigger("setbubblepopupoptions",[b])})},a.fn.ShowBubblePopup=function(b,c){a(this).each(function(d,e){return a(e).trigger("showbubblepopup",[b,c,!0]),!1})},a.fn.ShowAllBubblePopups=function(b,c){a(this).each(function(d,e){a(e).trigger("showbubblepopup",[b,c,!0])})},a.fn.HideBubblePopup=function(){a(this).each(function(b,c){return a(c).trigger("hidebubblepopup",[!0]),!1})},a.fn.HideAllBubblePopups=function(){a(this).each(function(b,c){a(c).trigger("hidebubblepopup",[!0])})},a.fn.FreezeBubblePopup=function(){a(this).each(function(b,c){return a(c).trigger("freezebubblepopup"),!1})},a.fn.FreezeAllBubblePopups=function(){a(this).each(function(b,c){a(c).trigger("freezebubblepopup")})},a.fn.UnfreezeBubblePopup=function(){a(this).each(function(b,c){return a(c).trigger("unfreezebubblepopup"),!1})},a.fn.UnfreezeAllBubblePopups=function(){a(this).each(function(b,c){a(c).trigger("unfreezebubblepopup")})},a.fn.CreateBubblePopup=function(b){function d(b){var d={privateVars:{},width:c.width,height:c.height,divStyle:c.divStyle,tableStyle:c.tableStyle,position:c.position,align:c.align,distance:c.distance,openingSpeed:c.openingSpeed,closingSpeed:c.closingSpeed,openingDelay:c.openingDelay,closingDelay:c.closingDelay,mouseOver:c.mouseOver,mouseOut:c.mouseOut,tail:c.tail,innerHtml:c.innerHtml,innerHtmlStyle:c.innerHtmlStyle,baseClass:c.baseClass,themeName:c.themeName,themePath:c.themePath,themeMargins:c.themeMargins,dropShadow:c.dropShadow,manageMouseEvents:c.manageMouseEvents,alwaysVisible:c.alwaysVisible,selectable:c.selectable,afterShown:c.afterShown,afterHidden:c.afterHidden,hideElementId:c.hideElementId},e=a.extend(!1,d,"object"!=typeof b||a.isArray(b)||a.isEmptyObject(b)||null==b?{}:b);e.privateVars.id=c.privateVars.id,e.privateVars.creation_datetime=c.privateVars.creation_datetime,e.privateVars.last_modified_datetime=c.privateVars.last_modified_datetime,e.privateVars.last_display_datetime=c.privateVars.last_display_datetime,e.privateVars.is_open=c.privateVars.is_open,e.privateVars.is_freezed=c.privateVars.is_freezed,e.privateVars.is_animating=c.privateVars.is_animating,e.privateVars.is_animation_complete=c.privateVars.is_animation_complete,e.privateVars.is_mouse_over=c.privateVars.is_mouse_over,e.privateVars.is_position_changed=c.privateVars.is_position_changed,e.privateVars.last_options=c.privateVars.last_options,e.width=("string"==typeof e.width||"number"==typeof e.width)&&parseInt(e.width)>0?parseInt(e.width):c.width,e.height=("string"==typeof e.height||"number"==typeof e.height)&&parseInt(e.height)>0?parseInt(e.height):c.height,e.divStyle=null==e.divStyle||"object"!=typeof e.divStyle||a.isArray(e.divStyle)||a.isEmptyObject(e.divStyle)?c.divStyle:e.divStyle,e.tableStyle=null==e.tableStyle||"object"!=typeof e.tableStyle||a.isArray(e.tableStyle)||a.isEmptyObject(e.tableStyle)?c.tableStyle:e.tableStyle,e.position="string"==typeof e.position&&f(e.position.toLowerCase(),c.positionValues)?e.position.toLowerCase():c.position,e.align="string"==typeof e.align&&f(e.align.toLowerCase(),c.alignValues)?e.align.toLowerCase():c.align,e.distance=("string"==typeof e.distance||"number"==typeof e.distance)&&parseInt(e.distance)>=0?parseInt(e.distance):c.distance,e.openingSpeed="number"==typeof e.openingSpeed&&parseInt(e.openingSpeed)>0?parseInt(e.openingSpeed):c.openingSpeed,e.closingSpeed="number"==typeof e.closingSpeed&&parseInt(e.closingSpeed)>0?parseInt(e.closingSpeed):c.closingSpeed,e.openingDelay="number"==typeof e.openingDelay&&e.openingDelay>=0?e.openingDelay:c.openingDelay,e.closingDelay="number"==typeof e.closingDelay&&e.closingDelay>=0?e.closingDelay:c.closingDelay,e.mouseOver="string"==typeof e.mouseOver&&f(e.mouseOver.toLowerCase(),c.mouseOverValues)?e.mouseOver.toLowerCase():c.mouseOver,e.mouseOut="string"==typeof e.mouseOut&&f(e.mouseOut.toLowerCase(),c.mouseOutValues)?e.mouseOut.toLowerCase():c.mouseOut,e.tail=null==e.tail||"object"!=typeof e.tail||a.isArray(e.tail)||a.isEmptyObject(e.tail)?c.tail:e.tail,e.tail.align=e.tail.align!==void 0?e.tail.align:c.tail.align,e.tail.hidden=e.tail.hidden!==void 0?e.tail.hidden:c.tail.hidden,e.innerHtml="string"==typeof e.innerHtml&&e.innerHtml.length>0?e.innerHtml:c.innerHtml,e.innerHtmlStyle=null==e.innerHtmlStyle||"object"!=typeof e.innerHtmlStyle||a.isArray(e.innerHtmlStyle)||a.isEmptyObject(e.innerHtmlStyle)?c.innerHtmlStyle:e.innerHtmlStyle,e.baseClass=k("string"==typeof e.baseClass&&e.baseClass.length>0?e.baseClass:c.baseClass),e.themeName="string"==typeof e.themeName&&e.themeName.length>0?a.trim(e.themeName):c.themeName,e.themePath="string"==typeof e.themePath&&e.themePath.length>0?a.trim(e.themePath):c.themePath,e.themeMargins=null==e.themeMargins||"object"!=typeof e.themeMargins||a.isArray(e.themeMargins)||a.isEmptyObject(e.themeMargins)||"number"!=typeof parseInt(e.themeMargins.total)||"number"!=typeof parseInt(e.themeMargins.difference)?c.themeMargins:e.themeMargins,e.dropShadow="boolean"==typeof e.dropShadow&&1==e.dropShadow?!0:!1,e.manageMouseEvents="boolean"==typeof e.manageMouseEvents&&1==e.manageMouseEvents?!0:!1,e.alwaysVisible="boolean"==typeof e.alwaysVisible&&1==e.alwaysVisible?!0:!1,e.selectable="boolean"==typeof e.selectable&&1==e.selectable?!0:!1,e.afterShown="function"==typeof e.afterShown?e.afterShown:c.afterShown,e.afterHidden="function"==typeof e.afterHidden?e.afterHidden:c.afterHidden,e.hideElementId=a.isArray(e.hideElementId)?e.hideElementId:c.hideElementId,e.align="left"==e.position||"right"==e.position?f(e.align,c.alignVerticalValues)?e.align:"middle":f(e.align,c.alignHorizontalValues)?e.align:"center";for(var g in e.tail)switch(g){case"align":e.tail.align="string"==typeof e.tail.align&&f(e.tail.align.toLowerCase(),c.alignValues)?e.tail.align.toLowerCase():c.tail.align,e.tail.align="left"==e.position||"right"==e.position?f(e.tail.align,c.alignVerticalValues)?e.tail.align:"middle":f(e.tail.align,c.alignHorizontalValues)?e.tail.align:"center";break;case"hidden":e.tail.hidden=1==e.tail.hidden?!0:!1}return e}function e(a){return 0==a?0:a>0?-Math.abs(a):Math.abs(a)}function f(a,b){var c=!1;for(var d in b)if(b[d]==a){c=!0;break}return c}function g(b){a(b).each(function(){a("<img/>")[0].src=this})}function h(b){if(b.hideElementId&&b.hideElementId.length>0)for(var c=0;b.hideElementId.length>c;c++){var d="#"!=b.hideElementId[c].charAt(0)?"#"+b.hideElementId[c]:b.hideElementId[c];a(d).css({visibility:"hidden"})}}function i(b){if(b.hideElementId&&b.hideElementId.length>0)for(var c=0;b.hideElementId.length>c;c++){var d="#"!=b.hideElementId[c].charAt(0)?"#"+b.hideElementId[c]:b.hideElementId[c];a(d).css({visibility:"visible"});for(var e=a(d).length,f=0;e.length>f;f++)a(e[f]).css({visibility:"visible"})}}function j(b){var c=b.themePath,d=b.themeName,e="/"==c.substring(c.length-1)||"\\"==c.substring(c.length-1)?c.substring(0,c.length-1)+"/"+d+"/":c+"/"+d+"/";return e+(1==b.dropShadow?a.browser.msie?"ie/":"":"ie/")}function k(a){var b="."==a.substring(0,1)?a.substring(1,a.length):a;return b}function l(b){if(a("#"+b.privateVars.id).length>0){var d="bottom-middle";switch(b.position){case"left":d="middle-right";break;case"top":d="bottom-middle";break;case"right":d="middle-left";break;case"bottom":d="top-middle"}f(b.tail.align,c.alignHorizontalValues)?a("#"+b.privateVars.id).find("td."+b.baseClass+"-"+d).css("text-align",b.tail.align):a("#"+b.privateVars.id).find("td."+b.baseClass+"-"+d).css("vertical-align",b.tail.align)}}function m(b){var d=c.model_markup,e=j(b),f="",h="",i="";if(!b.tail.hidden){switch(b.position){case"left":h="right",i="{MIDDLE-RIGHT}";break;case"top":h="bottom",i="{BOTTOM-MIDDLE}";break;case"right":h="left",i="{MIDDLE-LEFT}";break;case"bottom":h="top",i="{TOP-MIDDLE}"}f='<img src="'+e+"tail-"+h+"."+(1==b.dropShadow?a.browser.msie?"gif":"png":"gif")+'" alt="" class="'+b.baseClass+'-tail" />'}var m,n,o,p,k=c.model_tr,l=c.model_td,q="",r="",s=Array();for(n in k){o="",p="";for(m in l)o=k[n]+"-"+l[m],o=o.toUpperCase(),p="{"+o+"_STYLE}",o="{"+o+"}",o==i?(d=d.replace(o,f),q=""):(d=d.replace(o,""),q=""),"middle-middle"!=k[n]+"-"+l[m]&&(r=e+k[n]+"-"+l[m]+"."+(1==b.dropShadow?a.browser.msie?"gif":"png":"gif"),s.push(r),d=d.replace(p,' style="'+q+"background-image:url("+r+');"'))}s.length>0&&g(s);var t="";if(null!=b.tableStyle&&"object"==typeof b.tableStyle&&!a.isArray(b.tableStyle)&&!a.isEmptyObject(b.tableStyle))for(var u in b.tableStyle)t+=u+":"+b.tableStyle[u]+";";t+=null!=b.width||null!=b.height?(null!=b.width?"width:"+b.width+"px;":"")+(null!=b.height?"height:"+b.height+"px;":""):"",d=t.length>0?d.replace("{TABLE_STYLE}",' style="'+t+'"'):d.replace("{TABLE_STYLE}","");var v="";if(null!=b.divStyle&&"object"==typeof b.divStyle&&!a.isArray(b.divStyle)&&!a.isEmptyObject(b.divStyle))for(var u in b.divStyle)v+=u+":"+b.divStyle[u]+";";for(d=v.length>0?d.replace("{DIV_STYLE}",' style="'+v+'"'):d.replace("{DIV_STYLE}",""),d=d.replace("{TEMPLATE_CLASS}",b.baseClass+"-"+b.themeName),d=null!=b.privateVars.id?d.replace("{DIV_ID}",b.privateVars.id):d.replace("{DIV_ID}","");d.indexOf("{BASE_CLASS}")>-1;)d=d.replace("{BASE_CLASS}",b.baseClass);d=null!=b.innerHtml?d.replace("{INNERHTML}",b.innerHtml):d.replace("{INNERHTML}",""),p="";for(var u in b.innerHtmlStyle)p+=u+":"+b.innerHtmlStyle[u]+";";return d=p.length>0?d.replace("{INNERHTML_STYLE}",' style="'+p+'"'):d.replace("{INNERHTML_STYLE}","")}function n(){return(new Date).getTime()}function o(b,c,d){var f=d.position,g=d.align,h=d.distance,i=d.themeMargins,k=Array(),m=c.offset(),n=parseInt(m.top),o=parseInt(m.left),p=parseInt(c.outerWidth(!1)),q=parseInt(c.outerHeight(!1)),r=parseInt(b.outerWidth(!1)),s=parseInt(b.outerHeight(!1));i.difference=Math.abs(parseInt(i.difference)),i.total=Math.abs(parseInt(i.total));var t=e(i.difference),u=e(i.difference),v=e(i.total),w=j(d);switch(g){case"left":k.top="top"==f?n-s-h+e(t):n+q+h+t,k.left=o+v;break;case"center":var x=Math.abs(r-p)/2;k.top="top"==f?n-s-h+e(t):n+q+h+t,k.left=r>=p?o-x:o+x;break;case"right":var x=Math.abs(r-p);k.top="top"==f?n-s-h+e(t):n+q+h+t,k.left=r>=p?o-x+e(v):o+x+e(v);break;case"top":k.top=n+v,k.left="left"==f?o-r-h+e(u):o+p+h+u;break;case"middle":var x=Math.abs(s-q)/2;k.top=s>=q?n-x:n+x,k.left="left"==f?o-r-h+e(u):o+p+h+u;break;case"bottom":var x=Math.abs(s-q);k.top=s>=q?n-x+e(v):n+x+e(v),k.left="left"==f?o-r-h+e(u):o+p+h+u}if(k.position=f,a("#"+d.privateVars.id).length>0&&a("#"+d.privateVars.id).find("img."+d.baseClass+"-tail").length>0){a("#"+d.privateVars.id).find("img."+d.baseClass+"-tail").remove();var y="bottom",z="bottom-middle";switch(f){case"left":y="right",z="middle-right";break;case"top":y="bottom",z="bottom-middle";break;case"right":y="left",z="middle-left";break;case"bottom":y="top",z="top-middle"}a("#"+d.privateVars.id).find("td."+d.baseClass+"-"+z).empty(),a("#"+d.privateVars.id).find("td."+d.baseClass+"-"+z).html('<img src="'+w+"tail-"+y+"."+(1==d.dropShadow?a.browser.msie?"gif":"png":"gif")+'" alt="" class="'+d.baseClass+'-tail" />'),l(d)}if(1==d.alwaysVisible)if(k.top<a(window).scrollTop()||k.top+s>a(window).scrollTop()+a(window).height()){a("#"+d.privateVars.id).length>0&&a("#"+d.privateVars.id).find("img."+d.baseClass+"-tail").length>0&&a("#"+d.privateVars.id).find("img."+d.baseClass+"-tail").remove();var A="";k.top<a(window).scrollTop()?(k.position="bottom",k.top=n+q+h+t,a("#"+d.privateVars.id).length>0&&!d.tail.hidden&&(a("#"+d.privateVars.id).find("td."+d.baseClass+"-top-middle").empty(),a("#"+d.privateVars.id).find("td."+d.baseClass+"-top-middle").html('<img src="'+w+"tail-top."+(1==d.dropShadow?a.browser.msie?"gif":"png":"gif")+'" alt="" class="'+d.baseClass+'-tail" />'),A="top-middle")):k.top+s>a(window).scrollTop()+a(window).height()&&(k.position="top",k.top=n-s-h+e(t),a("#"+d.privateVars.id).length>0&&!d.tail.hidden&&(a("#"+d.privateVars.id).find("td."+d.baseClass+"-bottom-middle").empty(),a("#"+d.privateVars.id).find("td."+d.baseClass+"-bottom-middle").html('<img src="'+w+"tail-bottom."+(1==d.dropShadow?a.browser.msie?"gif":"png":"gif")+'" alt="" class="'+d.baseClass+'-tail" />'),A="bottom-middle")),0>k.left?(k.left=0,A.length>0&&a("#"+d.privateVars.id).find("td."+d.baseClass+"-"+A).css("text-align","center")):k.left+r>a(window).width()&&(k.left=a(window).width()-r,A.length>0&&a("#"+d.privateVars.id).find("td."+d.baseClass+"-"+A).css("text-align","center"))}else if(0>k.left||k.left+r>a(window).width()){a("#"+d.privateVars.id).length>0&&a("#"+d.privateVars.id).find("img."+d.baseClass+"-tail").length>0&&a("#"+d.privateVars.id).find("img."+d.baseClass+"-tail").remove();var A="";0>k.left?(k.position="right",k.left=o+p+h+u,a("#"+d.privateVars.id).length>0&&!d.tail.hidden&&(a("#"+d.privateVars.id).find("td."+d.baseClass+"-middle-left").empty(),a("#"+d.privateVars.id).find("td."+d.baseClass+"-middle-left").html('<img src="'+w+"tail-left."+(1==d.dropShadow?a.browser.msie?"gif":"png":"gif")+'" alt="" class="'+d.baseClass+'-tail" />'),A="middle-left")):k.left+r>a(window).width()&&(k.position="left",k.left=o-r-h+e(u),a("#"+d.privateVars.id).length>0&&!d.tail.hidden&&(a("#"+d.privateVars.id).find("td."+d.baseClass+"-middle-right").empty(),a("#"+d.privateVars.id).find("td."+d.baseClass+"-middle-right").html('<img src="'+w+"tail-right."+(1==d.dropShadow?a.browser.msie?"gif":"png":"gif")+'" alt="" class="'+d.baseClass+'-tail" />'),A="middle-right")),k.top<a(window).scrollTop()?(k.top=a(window).scrollTop(),A.length>0&&a("#"+d.privateVars.id).find("td."+d.baseClass+"-"+A).css("vertical-align","middle")):k.top+s>a(window).scrollTop()+a(window).height()&&(k.top=a(window).scrollTop()+a(window).height()-s,A.length>0&&a("#"+d.privateVars.id).find("td."+d.baseClass+"-"+A).css("vertical-align","middle"))}return k}function p(b,d){a(b).data(c.options_key,d)}function q(b){return a(b).data(c.options_key)}function r(b){var c=null==b||"object"!=typeof b||a.isArray(b)||a.isEmptyObject(b)?!1:!0;return c}function s(b){a(window).resize(function(){a(c.me).each(function(b,c){a(c).trigger("positionbubblepopup")})}),a(document).mousemove(function(b){a(c.me).each(function(c,d){a(d).trigger("managebubblepopup",[b.pageX,b.pageY])})}),a(c.me).each(function(c,e){var f=d(b);f.privateVars.creation_datetime=n(),f.privateVars.id=f.baseClass+"-"+f.privateVars.creation_datetime+"-"+c,p(e,f),a(e).bind("managebubblepopup",function(b,c,d){var e=q(this);if(r(e)&&r(e.privateVars)&&c!==void 0&&d!==void 0&&e.manageMouseEvents){var f=a(this),g=f.offset(),h=parseInt(g.top),i=parseInt(g.left),j=parseInt(f.outerWidth(!1)),k=parseInt(f.outerHeight(!1)),l=!1;if(l=c>=i&&j+i>=c&&d>=h&&k+h>=d?!0:!1,l&&!e.privateVars.is_mouse_over)if(e.privateVars.is_mouse_over=!0,p(this,e),"show"==e.mouseOver)a(this).trigger("showbubblepopup");else if(e.selectable&&a("#"+e.privateVars.id).length>0){var m=a("#"+e.privateVars.id),n=m.offset(),o=parseInt(n.top),s=parseInt(n.left),t=parseInt(m.outerWidth(!1)),u=parseInt(m.outerHeight(!1));c>=s&&t+s>=c&&d>=o&&u+o>=d||a(this).trigger("hidebubblepopup")}else a(this).trigger("hidebubblepopup");else if(!l&&e.privateVars.is_mouse_over)if(e.privateVars.is_mouse_over=!1,p(this,e),"show"==e.mouseOut)a(this).trigger("showbubblepopup");else if(e.selectable&&a("#"+e.privateVars.id).length>0){var m=a("#"+e.privateVars.id),n=m.offset(),o=parseInt(n.top),s=parseInt(n.left),t=parseInt(m.outerWidth(!1)),u=parseInt(m.outerHeight(!1));c>=s&&t+s>=c&&d>=o&&u+o>=d||a(this).trigger("hidebubblepopup")}else a(this).trigger("hidebubblepopup");else if(!l&&!e.privateVars.is_mouse_over&&e.selectable&&a("#"+e.privateVars.id).length>0&&!e.privateVars.is_animating){var m=a("#"+e.privateVars.id),n=m.offset(),o=parseInt(n.top),s=parseInt(n.left),t=parseInt(m.outerWidth(!1)),u=parseInt(m.outerHeight(!1));c>=s&&t+s>=c&&d>=o&&u+o>=d||a(this).trigger("hidebubblepopup")}}}),a(e).bind("setbubblepopupinnerhtml",function(b,c,d){var e=q(this);r(e)&&r(e.privateVars)&&c!==void 0&&(e.privateVars.last_modified_datetime=n(),"boolean"==typeof d&&1==d&&(e.innerHtml=c),p(this,e),a("#"+e.privateVars.id).length>0&&(a("#"+e.privateVars.id).find("td."+e.baseClass+"-innerHtml").html(c),e.privateVars.is_animation_complete?a(this).trigger("positionbubblepopup",[!1]):a(this).trigger("positionbubblepopup",[!0])))}),a(e).bind("setbubblepopupoptions",function(a,b){var c=q(this);if(r(c)&&r(c.privateVars)){var e=c;c=d(b),c.privateVars.id=e.privateVars.id,c.privateVars.creation_datetime=e.privateVars.creation_datetime,c.privateVars.last_modified_datetime=n(),c.privateVars.last_display_datetime=e.privateVars.last_display_datetime,c.privateVars.is_open=e.privateVars.is_open,c.privateVars.is_freezed=e.privateVars.is_freezed,c.privateVars.last_options={},p(this,c)}}),a(e).bind("positionbubblepopup",function(b,c){var d=q(this);if(r(d)&&r(d.privateVars)&&a("#"+d.privateVars.id).length>0&&1==d.privateVars.is_open){var e=a("#"+d.privateVars.id),f=o(e,a(this),d),g=2;if("boolean"==typeof c&&1==c)e.css({top:f.top,left:f.left});else switch(d.position){case"left":e.css({top:f.top,left:f.position!=d.position?f.left-Math.abs(d.themeMargins.difference)*g:f.left+Math.abs(d.themeMargins.difference)*g});break;case"top":e.css({top:f.position!=d.position?f.top-Math.abs(d.themeMargins.difference)*g:f.top+Math.abs(d.themeMargins.difference)*g,left:f.left});break;case"right":e.css({top:f.top,left:f.position!=d.position?f.left+Math.abs(d.themeMargins.difference)*g:f.left-Math.abs(d.themeMargins.difference)*g});break;case"bottom":e.css({top:f.position!=d.position?f.top+Math.abs(d.themeMargins.difference)*g:f.top-Math.abs(d.themeMargins.difference)*g,left:f.left})}}}),a(e).bind("freezebubblepopup",function(){var a=q(this);r(a)&&r(a.privateVars)&&(a.privateVars.is_freezed=!0,p(this,a))}),a(e).bind("unfreezebubblepopup",function(){var a=q(this);r(a)&&r(a.privateVars)&&(a.privateVars.is_freezed=!1,p(this,a))}),a(e).bind("showbubblepopup",function(b,c,f,g){var i=q(this);if("boolean"==typeof g&&1==g&&r(i)&&r(i.privateVars)||g===void 0&&r(i)&&r(i.privateVars)&&!i.privateVars.is_freezed&&!i.privateVars.is_open){if("boolean"==typeof g&&1==g&&a(this).trigger("unfreezebubblepopup"),i.privateVars.is_open=!0,i.privateVars.is_freezed=!1,i.privateVars.is_animating=!1,i.privateVars.is_animation_complete=!1,r(i.privateVars.last_options)?i=i.privateVars.last_options:i.privateVars.last_options={},r(c)){var j=i,k=n();i=d(c),i.privateVars.id=j.privateVars.id,i.privateVars.creation_datetime=j.privateVars.creation_datetime,i.privateVars.last_modified_datetime=k,i.privateVars.last_display_datetime=k,i.privateVars.is_open=!0,i.privateVars.is_freezed=!1,i.privateVars.is_animating=!1,i.privateVars.is_animation_complete=!1,i.privateVars.is_mouse_over=j.privateVars.is_mouse_over,i.privateVars.is_position_changed=j.privateVars.is_position_changed,i.privateVars.last_options={},"boolean"==typeof f&&0==f&&(j.privateVars.last_modified_datetime=k,j.privateVars.last_display_datetime=k,i.privateVars.last_options=j)}p(this,i),h(i),a("#"+i.privateVars.id).length>0&&a("#"+i.privateVars.id).remove();var s={},t=m(i);s=a(t),s.appendTo("body"),s=a("#"+i.privateVars.id),s.css({opacity:0,top:"0px",left:"0px",position:"absolute",display:"block"}),1==i.dropShadow&&a.browser.msie&&9>parseInt(a.browser.version)&&a("#"+i.privateVars.id+" table").addClass(i.baseClass+"-ie"),l(i);var u=o(s,a(this),i);s.css({top:u.top,left:u.left}),i.privateVars.is_position_changed=u.position==i.position?!1:!0,p(this,i),setTimeout(function(){switch(i.privateVars.is_animating=!0,p(e,i),s.stop(),i.position){case"left":s.animate({opacity:1,left:(i.privateVars.is_position_changed?"-=":"+=")+i.distance+"px"},i.openingSpeed,"swing",function(){i.privateVars.is_animating=!1,i.privateVars.is_animation_complete=!0,p(e,i),1==i.dropShadow&&a.browser.msie&&parseInt(a.browser.version)>8&&s.addClass(i.baseClass+"-ie"),i.afterShown()});break;case"top":s.animate({opacity:1,top:(i.privateVars.is_position_changed?"-=":"+=")+i.distance+"px"},i.openingSpeed,"swing",function(){i.privateVars.is_animating=!1,i.privateVars.is_animation_complete=!0,p(e,i),1==i.dropShadow&&a.browser.msie&&parseInt(a.browser.version)>8&&s.addClass(i.baseClass+"-ie"),i.afterShown()});break;case"right":s.animate({opacity:1,left:(i.privateVars.is_position_changed?"+=":"-=")+i.distance+"px"},i.openingSpeed,"swing",function(){i.privateVars.is_animating=!1,i.privateVars.is_animation_complete=!0,p(e,i),1==i.dropShadow&&a.browser.msie&&parseInt(a.browser.version)>8&&s.addClass(i.baseClass+"-ie"),i.afterShown()});break;case"bottom":s.animate({opacity:1,top:(i.privateVars.is_position_changed?"+=":"-=")+i.distance+"px"},i.openingSpeed,"swing",function(){i.privateVars.is_animating=!1,i.privateVars.is_animation_complete=!0,p(e,i),1==i.dropShadow&&a.browser.msie&&parseInt(a.browser.version)>8&&s.addClass(i.baseClass+"-ie"),i.afterShown()})}},i.openingDelay)}}),a(e).bind("hidebubblepopup",function(b,c){var d=q(this);if("boolean"==typeof c&&1==c&&r(d)&&r(d.privateVars)&&a("#"+d.privateVars.id).length>0||c===void 0&&r(d)&&r(d.privateVars)&&a("#"+d.privateVars.id).length>0&&!d.privateVars.is_freezed&&d.privateVars.is_open){"boolean"==typeof c&&1==c&&a(this).trigger("unfreezebubblepopup"),d.privateVars.is_animating=!1,d.privateVars.is_animation_complete=!1,p(this,d);var f=a("#"+d.privateVars.id),g=c===void 0?d.closingDelay:0;setTimeout(function(){switch(d.privateVars.is_animating=!0,p(e,d),f.stop(),1==d.dropShadow&&a.browser.msie&&parseInt(a.browser.version)>8&&f.removeClass(d.baseClass+"-ie"),d.position){case"left":f.animate({opacity:0,left:(d.privateVars.is_position_changed?"+=":"-=")+d.distance+"px"},d.closingSpeed,"swing",function(){d.privateVars.is_open=!1,d.privateVars.is_animating=!1,d.privateVars.is_animation_complete=!0,p(e,d),f.css("display","none"),d.afterHidden()});break;case"top":f.animate({opacity:0,top:(d.privateVars.is_position_changed?"+=":"-=")+d.distance+"px"},d.closingSpeed,"swing",function(){d.privateVars.is_open=!1,d.privateVars.is_animating=!1,d.privateVars.is_animation_complete=!0,p(e,d),f.css("display","none"),d.afterHidden()});break;case"right":f.animate({opacity:0,left:(d.privateVars.is_position_changed?"-=":"+=")+d.distance+"px"},d.closingSpeed,"swing",function(){d.privateVars.is_open=!1,d.privateVars.is_animating=!1,d.privateVars.is_animation_complete=!0,p(e,d),f.css("display","none"),d.afterHidden()});break;case"bottom":f.animate({opacity:0,top:(d.privateVars.is_position_changed?"-=":"+=")+d.distance+"px"},d.closingSpeed,"swing",function(){d.privateVars.is_open=!1,d.privateVars.is_animating=!1,d.privateVars.is_animation_complete=!0,p(e,d),f.css("display","none"),d.afterHidden()})}},g),d.privateVars.last_display_datetime=n(),d.privateVars.is_freezed=!1,p(this,d),i(d)}})})}var c={me:this,cache:[],options_key:"private_jquerybubblepopup_options",model_tr:["top","middle","bottom"],model_td:["left","middle","right"],model_markup:'<div class="{BASE_CLASS} {TEMPLATE_CLASS}"{DIV_STYLE} id="{DIV_ID}">                                    <table{TABLE_STYLE}>                                    <tbody>                                     <tr>                                        <td class="{BASE_CLASS}-top-left"{TOP-LEFT_STYLE}>{TOP-LEFT}</td>                                       <td class="{BASE_CLASS}-top-middle"{TOP-MIDDLE_STYLE}>{TOP-MIDDLE}</td>                                         <td class="{BASE_CLASS}-top-right"{TOP-RIGHT_STYLE}>{TOP-RIGHT}</td>                                    </tr>                                   <tr>                                        <td class="{BASE_CLASS}-middle-left"{MIDDLE-LEFT_STYLE}>{MIDDLE-LEFT}</td>                                      <td class="{BASE_CLASS}-innerHtml"{INNERHTML_STYLE}>{INNERHTML}</td>                                        <td class="{BASE_CLASS}-middle-right"{MIDDLE-RIGHT_STYLE}>{MIDDLE-RIGHT}</td>                                   </tr>                                   <tr>                                        <td class="{BASE_CLASS}-bottom-left"{BOTTOM-LEFT_STYLE}>{BOTTOM-LEFT}</td>                                      <td class="{BASE_CLASS}-bottom-middle"{BOTTOM-MIDDLE_STYLE}>{BOTTOM-MIDDLE}</td>                                        <td class="{BASE_CLASS}-bottom-right"{BOTTOM-RIGHT_STYLE}>{BOTTOM-RIGHT}</td>                                   </tr>                                   </tbody>                                    </table>                                    </div>',privateVars:{id:null,creation_datetime:null,last_modified_datetime:null,last_display_datetime:null,is_open:!1,is_freezed:!1,is_animating:!1,is_animation_complete:!1,is_mouse_over:!1,is_position_changed:!1,last_options:{}},position:"top",positionValues:["left","top","right","bottom"],align:"center",alignValues:["left","center","right","top","middle","bottom"],alignHorizontalValues:["left","center","right"],alignVerticalValues:["top","middle","bottom"],distance:"20px",width:null,height:null,divStyle:{},tableStyle:{},innerHtml:null,innerHtmlStyle:{},tail:{align:"center",hidden:!1},dropShadow:!0,alwaysVisible:!0,selectable:!1,manageMouseEvents:!0,mouseOver:"show",mouseOverValues:["show","hide"],mouseOut:"hide",mouseOutValues:["show","hide"],openingSpeed:250,closingSpeed:250,openingDelay:0,closingDelay:0,baseClass:"jquerybubblepopup",themeName:"azure",themePath:"jquerybubblepopup-themes/",themeMargins:{total:"13px",difference:"10px"},afterShown:function(){},afterHidden:function(){},hideElementId:[]};return s(b),this}})(jQuery);