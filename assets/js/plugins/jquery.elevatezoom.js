"function"!=typeof Object.create&&(Object.create=function(o){function e(){}return e.prototype=o,new e}),function(o,e,i,t){var n={init:function(e,i){var t=this;t.elem=i,t.$elem=o(i),t.imageSrc=t.$elem.data("zoom-image")?t.$elem.data("zoom-image"):t.$elem.attr("src"),t.options=o.extend({},o.fn.elevateZoom.options,e),t.options.tint&&(t.options.lensColour="none",t.options.lensOpacity="1"),"inner"==t.options.zoomType&&(t.options.showLens=!1),t.$elem.parent().removeAttr("title").removeAttr("alt"),t.zoomImage=t.imageSrc,t.refresh(1),o("#"+t.options.gallery+" a").click((function(e){return t.options.galleryActiveClass&&(o("#"+t.options.gallery+" a").removeClass(t.options.galleryActiveClass),o(this).addClass(t.options.galleryActiveClass)),e.preventDefault(),o(this).data("zoom-image")?t.zoomImagePre=o(this).data("zoom-image"):t.zoomImagePre=o(this).data("image"),t.swaptheimage(o(this).data("image"),t.zoomImagePre),!1}))},refresh:function(o){var e=this;setTimeout((function(){e.fetch(e.imageSrc)}),o||e.options.refresh)},fetch:function(o){var e=this,i=new Image;i.onload=function(){e.largeWidth=i.width,e.largeHeight=i.height,e.startZoom(),e.currentImage=e.imageSrc,e.options.onZoomedImageLoaded(e.$elem)},i.src=o},startZoom:function(){var e=this;if(e.nzWidth=e.$elem.width(),e.nzHeight=e.$elem.height(),e.isWindowActive=!1,e.isLensActive=!1,e.isTintActive=!1,e.overWindow=!1,e.options.imageCrossfade&&(e.zoomWrap=e.$elem.wrap('<div style="height:'+e.nzHeight+"px;width:"+e.nzWidth+'px;" class="zoomWrapper" />'),e.$elem.css("position","absolute")),e.zoomLock=1,e.scrollingLock=!1,e.changeBgSize=!1,e.currentZoomLevel=e.options.zoomLevel,e.nzOffset=e.$elem.offset(),e.widthRatio=e.largeWidth/e.currentZoomLevel/e.nzWidth,e.heightRatio=e.largeHeight/e.currentZoomLevel/e.nzHeight,"window"==e.options.zoomType&&(e.zoomWindowStyle="overflow: hidden;background-position: 0px 0px;text-align:center;background-color: "+String(e.options.zoomWindowBgColour)+";width: "+String(e.options.zoomWindowWidth)+"px;height: "+String(e.options.zoomWindowHeight)+"px;float: left;background-size: "+e.largeWidth/e.currentZoomLevel+"px "+e.largeHeight/e.currentZoomLevel+"px;display: none;z-index:100;border: "+String(e.options.borderSize)+"px solid "+e.options.borderColour+";background-repeat: no-repeat;position: absolute;"),"inner"==e.options.zoomType){var i=e.$elem.css("border-left-width");e.zoomWindowStyle="overflow: hidden;margin-left: "+String(i)+";margin-top: "+String(i)+";background-position: 0px 0px;width: "+String(e.nzWidth)+"px;height: "+String(e.nzHeight)+"px;px;float: left;display: none;cursor:"+e.options.cursor+";px solid "+e.options.borderColour+";background-repeat: no-repeat;position: absolute;"}"window"==e.options.zoomType&&(e.nzHeight<e.options.zoomWindowWidth/e.widthRatio?lensHeight=e.nzHeight:lensHeight=String(e.options.zoomWindowHeight/e.heightRatio),e.largeWidth<e.options.zoomWindowWidth?lensWidth=e.nzWidth:lensWidth=e.options.zoomWindowWidth/e.widthRatio,e.lensStyle="background-position: 0px 0px;width: "+String(e.options.zoomWindowWidth/e.widthRatio)+"px;height: "+String(e.options.zoomWindowHeight/e.heightRatio)+"px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:"+e.options.lensOpacity+";filter: alpha(opacity = "+100*e.options.lensOpacity+"); zoom:1;width:"+lensWidth+"px;height:"+lensHeight+"px;background-color:"+e.options.lensColour+";cursor:"+e.options.cursor+";border: "+e.options.lensBorderSize+"px solid "+e.options.lensBorderColour+";background-repeat: no-repeat;position: absolute;"),e.tintStyle="display: block;position: absolute;background-color: "+e.options.tintColour+";filter:alpha(opacity=0);opacity: 0;width: "+e.nzWidth+"px;height: "+e.nzHeight+"px;",e.lensRound="","lens"==e.options.zoomType&&(e.lensStyle="background-position: 0px 0px;float: left;display: none;border: "+String(e.options.borderSize)+"px solid "+e.options.borderColour+";width:"+String(e.options.lensSize)+"px;height:"+String(e.options.lensSize)+"px;background-repeat: no-repeat;position: absolute;"),"round"==e.options.lensShape&&(e.lensRound="border-top-left-radius: "+String(e.options.lensSize/2+e.options.borderSize)+"px;border-top-right-radius: "+String(e.options.lensSize/2+e.options.borderSize)+"px;border-bottom-left-radius: "+String(e.options.lensSize/2+e.options.borderSize)+"px;border-bottom-right-radius: "+String(e.options.lensSize/2+e.options.borderSize)+"px;"),e.zoomContainer=o('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:'+e.nzOffset.left+"px;top:"+e.nzOffset.top+"px;height:"+e.nzHeight+"px;width:"+e.nzWidth+'px;"></div>'),o("body").append(e.zoomContainer),e.options.containLensZoom&&"lens"==e.options.zoomType&&e.zoomContainer.css("overflow","hidden"),"inner"!=e.options.zoomType&&(e.zoomLens=o("<div class='zoomLens' style='"+e.lensStyle+e.lensRound+"'>&nbsp;</div>").appendTo(e.zoomContainer).click((function(){e.$elem.trigger("click")})),e.options.tint&&(e.tintContainer=o("<div/>").addClass("tintContainer"),e.zoomTint=o("<div class='zoomTint' style='"+e.tintStyle+"'></div>"),e.zoomLens.wrap(e.tintContainer),e.zoomTintcss=e.zoomLens.after(e.zoomTint),e.zoomTintImage=o('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: '+e.nzWidth+"px; height: "+e.nzHeight+'px;" src="'+e.imageSrc+'">').appendTo(e.zoomLens).click((function(){e.$elem.trigger("click")})))),isNaN(e.options.zoomWindowPosition)?e.zoomWindow=o("<div style='z-index:999;left:"+e.windowOffsetLeft+"px;top:"+e.windowOffsetTop+"px;"+e.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo("body").click((function(){e.$elem.trigger("click")})):e.zoomWindow=o("<div style='z-index:999;left:"+e.windowOffsetLeft+"px;top:"+e.windowOffsetTop+"px;"+e.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo(e.zoomContainer).click((function(){e.$elem.trigger("click")})),e.zoomWindowContainer=o("<div/>").addClass("zoomWindowContainer").css("width",e.options.zoomWindowWidth),e.zoomWindow.wrap(e.zoomWindowContainer),"lens"==e.options.zoomType&&e.zoomLens.css({backgroundImage:"url('"+e.imageSrc+"')"}),"window"==e.options.zoomType&&e.zoomWindow.css({backgroundImage:"url('"+e.imageSrc+"')"}),"inner"==e.options.zoomType&&e.zoomWindow.css({backgroundImage:"url('"+e.imageSrc+"')"}),e.$elem.bind("touchmove",(function(o){o.preventDefault();var i=o.originalEvent.touches[0]||o.originalEvent.changedTouches[0];e.setPosition(i)})),e.zoomContainer.bind("touchmove",(function(o){"inner"==e.options.zoomType&&e.showHideWindow("show"),o.preventDefault();var i=o.originalEvent.touches[0]||o.originalEvent.changedTouches[0];e.setPosition(i)})),e.zoomContainer.bind("touchend",(function(o){e.showHideWindow("hide"),e.options.showLens&&e.showHideLens("hide"),e.options.tint&&"inner"!=e.options.zoomType&&e.showHideTint("hide")})),e.$elem.bind("touchend",(function(o){e.showHideWindow("hide"),e.options.showLens&&e.showHideLens("hide"),e.options.tint&&"inner"!=e.options.zoomType&&e.showHideTint("hide")})),e.options.showLens&&(e.zoomLens.bind("touchmove",(function(o){o.preventDefault();var i=o.originalEvent.touches[0]||o.originalEvent.changedTouches[0];e.setPosition(i)})),e.zoomLens.bind("touchend",(function(o){e.showHideWindow("hide"),e.options.showLens&&e.showHideLens("hide"),e.options.tint&&"inner"!=e.options.zoomType&&e.showHideTint("hide")}))),e.$elem.bind("mousemove",(function(o){0==e.overWindow&&e.setElements("show"),e.lastX===o.clientX&&e.lastY===o.clientY||(e.setPosition(o),e.currentLoc=o),e.lastX=o.clientX,e.lastY=o.clientY})),e.zoomContainer.bind("mousemove",(function(o){0==e.overWindow&&e.setElements("show"),e.lastX===o.clientX&&e.lastY===o.clientY||(e.setPosition(o),e.currentLoc=o),e.lastX=o.clientX,e.lastY=o.clientY})),"inner"!=e.options.zoomType&&e.zoomLens.bind("mousemove",(function(o){e.lastX===o.clientX&&e.lastY===o.clientY||(e.setPosition(o),e.currentLoc=o),e.lastX=o.clientX,e.lastY=o.clientY})),e.options.tint&&"inner"!=e.options.zoomType&&e.zoomTint.bind("mousemove",(function(o){e.lastX===o.clientX&&e.lastY===o.clientY||(e.setPosition(o),e.currentLoc=o),e.lastX=o.clientX,e.lastY=o.clientY})),"inner"==e.options.zoomType&&e.zoomWindow.bind("mousemove",(function(o){e.lastX===o.clientX&&e.lastY===o.clientY||(e.setPosition(o),e.currentLoc=o),e.lastX=o.clientX,e.lastY=o.clientY})),e.zoomContainer.add(e.$elem).mouseenter((function(){0==e.overWindow&&e.setElements("show")})).mouseleave((function(){e.scrollLock||(e.setElements("hide"),e.options.onDestroy(e.$elem))})),"inner"!=e.options.zoomType&&e.zoomWindow.mouseenter((function(){e.overWindow=!0,e.setElements("hide")})).mouseleave((function(){e.overWindow=!1})),e.options.zoomLevel,e.options.minZoomLevel?e.minZoomLevel=e.options.minZoomLevel:e.minZoomLevel=2*e.options.scrollZoomIncrement,e.options.scrollZoom&&e.zoomContainer.add(e.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll",(function(i){e.scrollLock=!0,clearTimeout(o.data(this,"timer")),o.data(this,"timer",setTimeout((function(){e.scrollLock=!1}),250));var t=i.originalEvent.wheelDelta||-1*i.originalEvent.detail;return i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault(),t/120>0?e.currentZoomLevel>=e.minZoomLevel&&e.changeZoomLevel(e.currentZoomLevel-e.options.scrollZoomIncrement):e.options.maxZoomLevel?e.currentZoomLevel<=e.options.maxZoomLevel&&e.changeZoomLevel(parseFloat(e.currentZoomLevel)+e.options.scrollZoomIncrement):e.changeZoomLevel(parseFloat(e.currentZoomLevel)+e.options.scrollZoomIncrement),!1}))},setElements:function(o){var e=this;if(!e.options.zoomEnabled)return!1;"show"==o&&e.isWindowSet&&("inner"==e.options.zoomType&&e.showHideWindow("show"),"window"==e.options.zoomType&&e.showHideWindow("show"),e.options.showLens&&e.showHideLens("show"),e.options.tint&&"inner"!=e.options.zoomType&&e.showHideTint("show")),"hide"==o&&("window"==e.options.zoomType&&e.showHideWindow("hide"),e.options.tint||e.showHideWindow("hide"),e.options.showLens&&e.showHideLens("hide"),e.options.tint&&e.showHideTint("hide"))},setPosition:function(o){var e=this;if(!e.options.zoomEnabled)return!1;e.nzHeight=e.$elem.height(),e.nzWidth=e.$elem.width(),e.nzOffset=e.$elem.offset(),e.options.tint&&"inner"!=e.options.zoomType&&(e.zoomTint.css({top:0}),e.zoomTint.css({left:0})),e.options.responsive&&!e.options.scrollZoom&&e.options.showLens&&(e.nzHeight<e.options.zoomWindowWidth/e.widthRatio?lensHeight=e.nzHeight:lensHeight=String(e.options.zoomWindowHeight/e.heightRatio),e.largeWidth<e.options.zoomWindowWidth?lensWidth=e.nzWidth:lensWidth=e.options.zoomWindowWidth/e.widthRatio,e.widthRatio=e.largeWidth/e.nzWidth,e.heightRatio=e.largeHeight/e.nzHeight,"lens"!=e.options.zoomType&&(e.nzHeight<e.options.zoomWindowWidth/e.widthRatio?lensHeight=e.nzHeight:lensHeight=String(e.options.zoomWindowHeight/e.heightRatio),e.nzWidth<e.options.zoomWindowHeight/e.heightRatio?lensWidth=e.nzWidth:lensWidth=String(e.options.zoomWindowWidth/e.widthRatio),e.zoomLens.css("width",lensWidth),e.zoomLens.css("height",lensHeight),e.options.tint&&(e.zoomTintImage.css("width",e.nzWidth),e.zoomTintImage.css("height",e.nzHeight))),"lens"==e.options.zoomType&&e.zoomLens.css({width:String(e.options.lensSize)+"px",height:String(e.options.lensSize)+"px"})),e.zoomContainer.css({top:e.nzOffset.top}),e.zoomContainer.css({left:e.nzOffset.left}),e.mouseLeft=parseInt(o.pageX-e.nzOffset.left),e.mouseTop=parseInt(o.pageY-e.nzOffset.top),"window"==e.options.zoomType&&(e.Etoppos=e.mouseTop<e.zoomLens.height()/2,e.Eboppos=e.mouseTop>e.nzHeight-e.zoomLens.height()/2-2*e.options.lensBorderSize,e.Eloppos=e.mouseLeft<0+e.zoomLens.width()/2,e.Eroppos=e.mouseLeft>e.nzWidth-e.zoomLens.width()/2-2*e.options.lensBorderSize),"inner"==e.options.zoomType&&(e.Etoppos=e.mouseTop<e.nzHeight/2/e.heightRatio,e.Eboppos=e.mouseTop>e.nzHeight-e.nzHeight/2/e.heightRatio,e.Eloppos=e.mouseLeft<0+e.nzWidth/2/e.widthRatio,e.Eroppos=e.mouseLeft>e.nzWidth-e.nzWidth/2/e.widthRatio-2*e.options.lensBorderSize),e.mouseLeft<0||e.mouseTop<0||e.mouseLeft>e.nzWidth||e.mouseTop>e.nzHeight?e.setElements("hide"):(e.options.showLens&&(e.lensLeftPos=String(Math.floor(e.mouseLeft-e.zoomLens.width()/2)),e.lensTopPos=String(Math.floor(e.mouseTop-e.zoomLens.height()/2))),e.Etoppos&&(e.lensTopPos=0),e.Eloppos&&(e.windowLeftPos=0,e.lensLeftPos=0,e.tintpos=0),"window"==e.options.zoomType&&(e.Eboppos&&(e.lensTopPos=Math.max(e.nzHeight-e.zoomLens.height()-2*e.options.lensBorderSize,0)),e.Eroppos&&(e.lensLeftPos=e.nzWidth-e.zoomLens.width()-2*e.options.lensBorderSize)),"inner"==e.options.zoomType&&(e.Eboppos&&(e.lensTopPos=Math.max(e.nzHeight-2*e.options.lensBorderSize,0)),e.Eroppos&&(e.lensLeftPos=e.nzWidth-e.nzWidth-2*e.options.lensBorderSize)),"lens"==e.options.zoomType&&(e.windowLeftPos=String(-1*((o.pageX-e.nzOffset.left)*e.widthRatio-e.zoomLens.width()/2)),e.windowTopPos=String(-1*((o.pageY-e.nzOffset.top)*e.heightRatio-e.zoomLens.height()/2)),e.zoomLens.css({backgroundPosition:e.windowLeftPos+"px "+e.windowTopPos+"px"}),e.changeBgSize&&(e.nzHeight>e.nzWidth?("lens"==e.options.zoomType&&e.zoomLens.css({"background-size":e.largeWidth/e.newvalueheight+"px "+e.largeHeight/e.newvalueheight+"px"}),e.zoomWindow.css({"background-size":e.largeWidth/e.newvalueheight+"px "+e.largeHeight/e.newvalueheight+"px"})):("lens"==e.options.zoomType&&e.zoomLens.css({"background-size":e.largeWidth/e.newvaluewidth+"px "+e.largeHeight/e.newvaluewidth+"px"}),e.zoomWindow.css({"background-size":e.largeWidth/e.newvaluewidth+"px "+e.largeHeight/e.newvaluewidth+"px"})),e.changeBgSize=!1),e.setWindowPostition(o)),e.options.tint&&"inner"!=e.options.zoomType&&e.setTintPosition(o),"window"==e.options.zoomType&&e.setWindowPostition(o),"inner"==e.options.zoomType&&e.setWindowPostition(o),e.options.showLens&&(e.fullwidth&&"lens"!=e.options.zoomType&&(e.lensLeftPos=0),e.zoomLens.css({left:e.lensLeftPos+"px",top:e.lensTopPos+"px"})))},showHideWindow:function(o){var e=this;"show"==o&&(e.isWindowActive||(e.options.zoomWindowFadeIn?e.zoomWindow.stop(!0,!0,!1).fadeIn(e.options.zoomWindowFadeIn):e.zoomWindow.show(),e.isWindowActive=!0)),"hide"==o&&e.isWindowActive&&(e.options.zoomWindowFadeOut?e.zoomWindow.stop(!0,!0).fadeOut(e.options.zoomWindowFadeOut,(function(){e.loop&&(clearInterval(e.loop),e.loop=!1)})):e.zoomWindow.hide(),e.isWindowActive=!1)},showHideLens:function(o){var e=this;"show"==o&&(e.isLensActive||(e.options.lensFadeIn?e.zoomLens.stop(!0,!0,!1).fadeIn(e.options.lensFadeIn):e.zoomLens.show(),e.isLensActive=!0)),"hide"==o&&e.isLensActive&&(e.options.lensFadeOut?e.zoomLens.stop(!0,!0).fadeOut(e.options.lensFadeOut):e.zoomLens.hide(),e.isLensActive=!1)},showHideTint:function(o){var e=this;"show"==o&&(e.isTintActive||(e.options.zoomTintFadeIn?e.zoomTint.css({opacity:e.options.tintOpacity}).animate().stop(!0,!0).fadeIn("slow"):(e.zoomTint.css({opacity:e.options.tintOpacity}).animate(),e.zoomTint.show()),e.isTintActive=!0)),"hide"==o&&e.isTintActive&&(e.options.zoomTintFadeOut?e.zoomTint.stop(!0,!0).fadeOut(e.options.zoomTintFadeOut):e.zoomTint.hide(),e.isTintActive=!1)},setLensPostition:function(o){},setWindowPostition:function(e){var i=this;if(isNaN(i.options.zoomWindowPosition))i.externalContainer=o("#"+i.options.zoomWindowPosition),i.externalContainerWidth=i.externalContainer.width(),i.externalContainerHeight=i.externalContainer.height(),i.externalContainerOffset=i.externalContainer.offset(),i.windowOffsetTop=i.externalContainerOffset.top,i.windowOffsetLeft=i.externalContainerOffset.left;else switch(i.options.zoomWindowPosition){case 1:i.windowOffsetTop=i.options.zoomWindowOffety,i.windowOffsetLeft=+i.nzWidth;break;case 2:i.options.zoomWindowHeight>i.nzHeight&&(i.windowOffsetTop=-1*(i.options.zoomWindowHeight/2-i.nzHeight/2),i.windowOffsetLeft=i.nzWidth);break;case 3:i.windowOffsetTop=i.nzHeight-i.zoomWindow.height()-2*i.options.borderSize,i.windowOffsetLeft=i.nzWidth;break;case 4:i.windowOffsetTop=i.nzHeight,i.windowOffsetLeft=i.nzWidth;break;case 5:i.windowOffsetTop=i.nzHeight,i.windowOffsetLeft=i.nzWidth-i.zoomWindow.width()-2*i.options.borderSize;break;case 6:i.options.zoomWindowHeight>i.nzHeight&&(i.windowOffsetTop=i.nzHeight,i.windowOffsetLeft=-1*(i.options.zoomWindowWidth/2-i.nzWidth/2+2*i.options.borderSize));break;case 7:i.windowOffsetTop=i.nzHeight,i.windowOffsetLeft=0;break;case 8:i.windowOffsetTop=i.nzHeight,i.windowOffsetLeft=-1*(i.zoomWindow.width()+2*i.options.borderSize);break;case 9:i.windowOffsetTop=i.nzHeight-i.zoomWindow.height()-2*i.options.borderSize,i.windowOffsetLeft=-1*(i.zoomWindow.width()+2*i.options.borderSize);break;case 10:i.options.zoomWindowHeight>i.nzHeight&&(i.windowOffsetTop=-1*(i.options.zoomWindowHeight/2-i.nzHeight/2),i.windowOffsetLeft=-1*(i.zoomWindow.width()+2*i.options.borderSize));break;case 11:i.windowOffsetTop=i.options.zoomWindowOffety,i.windowOffsetLeft=-1*(i.zoomWindow.width()+2*i.options.borderSize);break;case 12:i.windowOffsetTop=-1*(i.zoomWindow.height()+2*i.options.borderSize),i.windowOffsetLeft=-1*(i.zoomWindow.width()+2*i.options.borderSize);break;case 13:i.windowOffsetTop=-1*(i.zoomWindow.height()+2*i.options.borderSize),i.windowOffsetLeft=0;break;case 14:i.options.zoomWindowHeight>i.nzHeight&&(i.windowOffsetTop=-1*(i.zoomWindow.height()+2*i.options.borderSize),i.windowOffsetLeft=-1*(i.options.zoomWindowWidth/2-i.nzWidth/2+2*i.options.borderSize));break;case 15:i.windowOffsetTop=-1*(i.zoomWindow.height()+2*i.options.borderSize),i.windowOffsetLeft=i.nzWidth-i.zoomWindow.width()-2*i.options.borderSize;break;case 16:i.windowOffsetTop=-1*(i.zoomWindow.height()+2*i.options.borderSize),i.windowOffsetLeft=i.nzWidth;break;default:i.windowOffsetTop=i.options.zoomWindowOffety,i.windowOffsetLeft=i.nzWidth}i.isWindowSet=!0,i.windowOffsetTop=i.windowOffsetTop+i.options.zoomWindowOffety,i.windowOffsetLeft=i.windowOffsetLeft+i.options.zoomWindowOffetx,i.zoomWindow.css({top:i.windowOffsetTop}),i.zoomWindow.css({left:i.windowOffsetLeft}),"inner"==i.options.zoomType&&(i.zoomWindow.css({top:0}),i.zoomWindow.css({left:0})),i.windowLeftPos=String(-1*((e.pageX-i.nzOffset.left)*i.widthRatio-i.zoomWindow.width()/2)),i.windowTopPos=String(-1*((e.pageY-i.nzOffset.top)*i.heightRatio-i.zoomWindow.height()/2)),i.Etoppos&&(i.windowTopPos=0),i.Eloppos&&(i.windowLeftPos=0),i.Eboppos&&(i.windowTopPos=-1*(i.largeHeight/i.currentZoomLevel-i.zoomWindow.height())),i.Eroppos&&(i.windowLeftPos=-1*(i.largeWidth/i.currentZoomLevel-i.zoomWindow.width())),i.fullheight&&(i.windowTopPos=0),i.fullwidth&&(i.windowLeftPos=0),"window"!=i.options.zoomType&&"inner"!=i.options.zoomType||(1==i.zoomLock&&(i.widthRatio<=1&&(i.windowLeftPos=0),i.heightRatio<=1&&(i.windowTopPos=0)),"window"==i.options.zoomType&&(i.largeHeight<i.options.zoomWindowHeight&&(i.windowTopPos=0),i.largeWidth<i.options.zoomWindowWidth&&(i.windowLeftPos=0)),i.options.easing?(i.xp||(i.xp=0),i.yp||(i.yp=0),i.loop||(i.loop=setInterval((function(){i.xp+=(i.windowLeftPos-i.xp)/i.options.easingAmount,i.yp+=(i.windowTopPos-i.yp)/i.options.easingAmount,i.scrollingLock?(clearInterval(i.loop),i.xp=i.windowLeftPos,i.yp=i.windowTopPos,i.xp=-1*((e.pageX-i.nzOffset.left)*i.widthRatio-i.zoomWindow.width()/2),i.yp=-1*((e.pageY-i.nzOffset.top)*i.heightRatio-i.zoomWindow.height()/2),i.changeBgSize&&(i.nzHeight>i.nzWidth?("lens"==i.options.zoomType&&i.zoomLens.css({"background-size":i.largeWidth/i.newvalueheight+"px "+i.largeHeight/i.newvalueheight+"px"}),i.zoomWindow.css({"background-size":i.largeWidth/i.newvalueheight+"px "+i.largeHeight/i.newvalueheight+"px"})):("lens"!=i.options.zoomType&&i.zoomLens.css({"background-size":i.largeWidth/i.newvaluewidth+"px "+i.largeHeight/i.newvalueheight+"px"}),i.zoomWindow.css({"background-size":i.largeWidth/i.newvaluewidth+"px "+i.largeHeight/i.newvaluewidth+"px"})),i.changeBgSize=!1),i.zoomWindow.css({backgroundPosition:i.windowLeftPos+"px "+i.windowTopPos+"px"}),i.scrollingLock=!1,i.loop=!1):Math.round(Math.abs(i.xp-i.windowLeftPos)+Math.abs(i.yp-i.windowTopPos))<1?(clearInterval(i.loop),i.zoomWindow.css({backgroundPosition:i.windowLeftPos+"px "+i.windowTopPos+"px"}),i.loop=!1):(i.changeBgSize&&(i.nzHeight>i.nzWidth?("lens"==i.options.zoomType&&i.zoomLens.css({"background-size":i.largeWidth/i.newvalueheight+"px "+i.largeHeight/i.newvalueheight+"px"}),i.zoomWindow.css({"background-size":i.largeWidth/i.newvalueheight+"px "+i.largeHeight/i.newvalueheight+"px"})):("lens"!=i.options.zoomType&&i.zoomLens.css({"background-size":i.largeWidth/i.newvaluewidth+"px "+i.largeHeight/i.newvaluewidth+"px"}),i.zoomWindow.css({"background-size":i.largeWidth/i.newvaluewidth+"px "+i.largeHeight/i.newvaluewidth+"px"})),i.changeBgSize=!1),i.zoomWindow.css({backgroundPosition:i.xp+"px "+i.yp+"px"}))}),16))):(i.changeBgSize&&(i.nzHeight>i.nzWidth?("lens"==i.options.zoomType&&i.zoomLens.css({"background-size":i.largeWidth/i.newvalueheight+"px "+i.largeHeight/i.newvalueheight+"px"}),i.zoomWindow.css({"background-size":i.largeWidth/i.newvalueheight+"px "+i.largeHeight/i.newvalueheight+"px"})):("lens"==i.options.zoomType&&i.zoomLens.css({"background-size":i.largeWidth/i.newvaluewidth+"px "+i.largeHeight/i.newvaluewidth+"px"}),i.largeHeight/i.newvaluewidth<i.options.zoomWindowHeight?i.zoomWindow.css({"background-size":i.largeWidth/i.newvaluewidth+"px "+i.largeHeight/i.newvaluewidth+"px"}):i.zoomWindow.css({"background-size":i.largeWidth/i.newvalueheight+"px "+i.largeHeight/i.newvalueheight+"px"})),i.changeBgSize=!1),i.zoomWindow.css({backgroundPosition:i.windowLeftPos+"px "+i.windowTopPos+"px"})))},setTintPosition:function(o){var e=this;e.nzOffset=e.$elem.offset(),e.tintpos=String(-1*(o.pageX-e.nzOffset.left-e.zoomLens.width()/2)),e.tintposy=String(-1*(o.pageY-e.nzOffset.top-e.zoomLens.height()/2)),e.Etoppos&&(e.tintposy=0),e.Eloppos&&(e.tintpos=0),e.Eboppos&&(e.tintposy=-1*(e.nzHeight-e.zoomLens.height()-2*e.options.lensBorderSize)),e.Eroppos&&(e.tintpos=-1*(e.nzWidth-e.zoomLens.width()-2*e.options.lensBorderSize)),e.options.tint&&(e.fullheight&&(e.tintposy=0),e.fullwidth&&(e.tintpos=0),e.zoomTintImage.css({left:e.tintpos+"px"}),e.zoomTintImage.css({top:e.tintposy+"px"}))},swaptheimage:function(e,i){var t=this,n=new Image;t.options.loadingIcon&&(t.spinner=o("<div style=\"background: url('"+t.options.loadingIcon+"') no-repeat center;height:"+t.nzHeight+"px;width:"+t.nzWidth+'px;z-index: 2000;position: absolute; background-position: center center;"></div>'),t.$elem.after(t.spinner)),t.options.onImageSwap(t.$elem),n.onload=function(){t.largeWidth=n.width,t.largeHeight=n.height,t.zoomImage=i,t.zoomWindow.css({"background-size":t.largeWidth+"px "+t.largeHeight+"px"}),t.swapAction(e,i)},n.src=i},swapAction:function(e,i){var t=this,n=new Image;if(n.onload=function(){t.nzHeight=n.height,t.nzWidth=n.width,t.options.onImageSwapComplete(t.$elem),t.doneCallback()},n.src=e,t.currentZoomLevel=t.options.zoomLevel,t.options.maxZoomLevel=!1,"lens"==t.options.zoomType&&t.zoomLens.css({backgroundImage:"url('"+i+"')"}),"window"==t.options.zoomType&&t.zoomWindow.css({backgroundImage:"url('"+i+"')"}),"inner"==t.options.zoomType&&t.zoomWindow.css({backgroundImage:"url('"+i+"')"}),t.currentImage=i,t.options.imageCrossfade){var s=t.$elem,h=s.clone();if(t.$elem.attr("src",e),t.$elem.after(h),h.stop(!0).fadeOut(t.options.imageCrossfade,(function(){o(this).remove()})),t.$elem.width("auto").removeAttr("width"),t.$elem.height("auto").removeAttr("height"),s.fadeIn(t.options.imageCrossfade),t.options.tint&&"inner"!=t.options.zoomType){var a=t.zoomTintImage,d=a.clone();t.zoomTintImage.attr("src",i),t.zoomTintImage.after(d),d.stop(!0).fadeOut(t.options.imageCrossfade,(function(){o(this).remove()})),a.fadeIn(t.options.imageCrossfade),t.zoomTint.css({height:t.$elem.height()}),t.zoomTint.css({width:t.$elem.width()})}t.zoomContainer.css("height",t.$elem.height()),t.zoomContainer.css("width",t.$elem.width()),"inner"==t.options.zoomType&&(t.options.constrainType||(t.zoomWrap.parent().css("height",t.$elem.height()),t.zoomWrap.parent().css("width",t.$elem.width()),t.zoomWindow.css("height",t.$elem.height()),t.zoomWindow.css("width",t.$elem.width()))),t.options.imageCrossfade&&(t.zoomWrap.css("height",t.$elem.height()),t.zoomWrap.css("width",t.$elem.width()))}else t.$elem.attr("src",e),t.options.tint&&(t.zoomTintImage.attr("src",i),t.zoomTintImage.attr("height",t.$elem.height()),t.zoomTintImage.css({height:t.$elem.height()}),t.zoomTint.css({height:t.$elem.height()})),t.zoomContainer.css("height",t.$elem.height()),t.zoomContainer.css("width",t.$elem.width()),t.options.imageCrossfade&&(t.zoomWrap.css("height",t.$elem.height()),t.zoomWrap.css("width",t.$elem.width()));t.options.constrainType&&("height"==t.options.constrainType&&(t.zoomContainer.css("height",t.options.constrainSize),t.zoomContainer.css("width","auto"),t.options.imageCrossfade?(t.zoomWrap.css("height",t.options.constrainSize),t.zoomWrap.css("width","auto"),t.constwidth=t.zoomWrap.width()):(t.$elem.css("height",t.options.constrainSize),t.$elem.css("width","auto"),t.constwidth=t.$elem.width()),"inner"==t.options.zoomType&&(t.zoomWrap.parent().css("height",t.options.constrainSize),t.zoomWrap.parent().css("width",t.constwidth),t.zoomWindow.css("height",t.options.constrainSize),t.zoomWindow.css("width",t.constwidth)),t.options.tint&&(t.tintContainer.css("height",t.options.constrainSize),t.tintContainer.css("width",t.constwidth),t.zoomTint.css("height",t.options.constrainSize),t.zoomTint.css("width",t.constwidth),t.zoomTintImage.css("height",t.options.constrainSize),t.zoomTintImage.css("width",t.constwidth))),"width"==t.options.constrainType&&(t.zoomContainer.css("height","auto"),t.zoomContainer.css("width",t.options.constrainSize),t.options.imageCrossfade?(t.zoomWrap.css("height","auto"),t.zoomWrap.css("width",t.options.constrainSize),t.constheight=t.zoomWrap.height()):(t.$elem.css("height","auto"),t.$elem.css("width",t.options.constrainSize),t.constheight=t.$elem.height()),"inner"==t.options.zoomType&&(t.zoomWrap.parent().css("height",t.constheight),t.zoomWrap.parent().css("width",t.options.constrainSize),t.zoomWindow.css("height",t.constheight),t.zoomWindow.css("width",t.options.constrainSize)),t.options.tint&&(t.tintContainer.css("height",t.constheight),t.tintContainer.css("width",t.options.constrainSize),t.zoomTint.css("height",t.constheight),t.zoomTint.css("width",t.options.constrainSize),t.zoomTintImage.css("height",t.constheight),t.zoomTintImage.css("width",t.options.constrainSize))))},doneCallback:function(){var o=this;o.options.loadingIcon&&o.spinner.hide(),o.nzOffset=o.$elem.offset(),o.nzWidth=o.$elem.width(),o.nzHeight=o.$elem.height(),o.currentZoomLevel=o.options.zoomLevel,o.widthRatio=o.largeWidth/o.nzWidth,o.heightRatio=o.largeHeight/o.nzHeight,"window"==o.options.zoomType&&(o.nzHeight<o.options.zoomWindowWidth/o.widthRatio?lensHeight=o.nzHeight:lensHeight=String(o.options.zoomWindowHeight/o.heightRatio),o.options.zoomWindowWidth<o.options.zoomWindowWidth?lensWidth=o.nzWidth:lensWidth=o.options.zoomWindowWidth/o.widthRatio,o.zoomLens&&(o.zoomLens.css("width",lensWidth),o.zoomLens.css("height",lensHeight)))},getCurrentImage:function(){return this.zoomImage},getGalleryList:function(){var e=this;return e.gallerylist=[],e.options.gallery?o("#"+e.options.gallery+" a").each((function(){var i="";o(this).data("zoom-image")?i=o(this).data("zoom-image"):o(this).data("image")&&(i=o(this).data("image")),i==e.zoomImage?e.gallerylist.unshift({href:""+i,title:o(this).find("img").attr("title")}):e.gallerylist.push({href:""+i,title:o(this).find("img").attr("title")})})):e.gallerylist.push({href:""+e.zoomImage,title:o(this).find("img").attr("title")}),e.gallerylist},changeZoomLevel:function(o){var e=this;e.scrollingLock=!0,e.newvalue=parseFloat(o).toFixed(2),newvalue=parseFloat(o).toFixed(2),maxheightnewvalue=e.largeHeight/(e.options.zoomWindowHeight/e.nzHeight*e.nzHeight),maxwidthtnewvalue=e.largeWidth/(e.options.zoomWindowWidth/e.nzWidth*e.nzWidth),"inner"!=e.options.zoomType&&(maxheightnewvalue<=newvalue?(e.heightRatio=e.largeHeight/maxheightnewvalue/e.nzHeight,e.newvalueheight=maxheightnewvalue,e.fullheight=!0):(e.heightRatio=e.largeHeight/newvalue/e.nzHeight,e.newvalueheight=newvalue,e.fullheight=!1),maxwidthtnewvalue<=newvalue?(e.widthRatio=e.largeWidth/maxwidthtnewvalue/e.nzWidth,e.newvaluewidth=maxwidthtnewvalue,e.fullwidth=!0):(e.widthRatio=e.largeWidth/newvalue/e.nzWidth,e.newvaluewidth=newvalue,e.fullwidth=!1),"lens"==e.options.zoomType&&(maxheightnewvalue<=newvalue?(e.fullwidth=!0,e.newvaluewidth=maxheightnewvalue):(e.widthRatio=e.largeWidth/newvalue/e.nzWidth,e.newvaluewidth=newvalue,e.fullwidth=!1))),"inner"==e.options.zoomType&&(maxheightnewvalue=parseFloat(e.largeHeight/e.nzHeight).toFixed(2),maxwidthtnewvalue=parseFloat(e.largeWidth/e.nzWidth).toFixed(2),newvalue>maxheightnewvalue&&(newvalue=maxheightnewvalue),newvalue>maxwidthtnewvalue&&(newvalue=maxwidthtnewvalue),maxheightnewvalue<=newvalue?(e.heightRatio=e.largeHeight/newvalue/e.nzHeight,newvalue>maxheightnewvalue?e.newvalueheight=maxheightnewvalue:e.newvalueheight=newvalue,e.fullheight=!0):(e.heightRatio=e.largeHeight/newvalue/e.nzHeight,newvalue>maxheightnewvalue?e.newvalueheight=maxheightnewvalue:e.newvalueheight=newvalue,e.fullheight=!1),maxwidthtnewvalue<=newvalue?(e.widthRatio=e.largeWidth/newvalue/e.nzWidth,newvalue>maxwidthtnewvalue?e.newvaluewidth=maxwidthtnewvalue:e.newvaluewidth=newvalue,e.fullwidth=!0):(e.widthRatio=e.largeWidth/newvalue/e.nzWidth,e.newvaluewidth=newvalue,e.fullwidth=!1)),scrcontinue=!1,"inner"==e.options.zoomType&&(e.nzWidth>=e.nzHeight&&(e.newvaluewidth<=maxwidthtnewvalue?scrcontinue=!0:(scrcontinue=!1,e.fullheight=!0,e.fullwidth=!0)),e.nzHeight>e.nzWidth&&(e.newvaluewidth<=maxwidthtnewvalue?scrcontinue=!0:(scrcontinue=!1,e.fullheight=!0,e.fullwidth=!0))),"inner"!=e.options.zoomType&&(scrcontinue=!0),scrcontinue&&(e.zoomLock=0,e.changeZoom=!0,e.options.zoomWindowHeight/e.heightRatio<=e.nzHeight&&(e.currentZoomLevel=e.newvalueheight,"lens"!=e.options.zoomType&&"inner"!=e.options.zoomType&&(e.changeBgSize=!0,e.zoomLens.css({height:String(e.options.zoomWindowHeight/e.heightRatio)+"px"})),"lens"!=e.options.zoomType&&"inner"!=e.options.zoomType||(e.changeBgSize=!0)),e.options.zoomWindowWidth/e.widthRatio<=e.nzWidth&&("inner"!=e.options.zoomType&&e.newvaluewidth>e.newvalueheight&&(e.currentZoomLevel=e.newvaluewidth),"lens"!=e.options.zoomType&&"inner"!=e.options.zoomType&&(e.changeBgSize=!0,e.zoomLens.css({width:String(e.options.zoomWindowWidth/e.widthRatio)+"px"})),"lens"!=e.options.zoomType&&"inner"!=e.options.zoomType||(e.changeBgSize=!0)),"inner"==e.options.zoomType&&(e.changeBgSize=!0,e.nzWidth>e.nzHeight&&(e.currentZoomLevel=e.newvaluewidth),e.nzHeight>e.nzWidth&&(e.currentZoomLevel=e.newvaluewidth))),e.setPosition(e.currentLoc)},closeAll:function(){self.zoomWindow&&self.zoomWindow.hide(),self.zoomLens&&self.zoomLens.hide(),self.zoomTint&&self.zoomTint.hide()},changeState:function(o){"enable"==o&&(this.options.zoomEnabled=!0),"disable"==o&&(this.options.zoomEnabled=!1)}};o.fn.elevateZoom=function(e){return this.each((function(){var i=Object.create(n);i.init(e,this),o.data(this,"elevateZoom",i)}))},o.fn.elevateZoom.options={zoomActivation:"hover",zoomEnabled:!0,preloading:1,zoomLevel:1,scrollZoom:!1,scrollZoomIncrement:.1,minZoomLevel:!1,maxZoomLevel:!1,easing:!1,easingAmount:12,lensSize:200,zoomWindowWidth:400,zoomWindowHeight:400,zoomWindowOffetx:0,zoomWindowOffety:0,zoomWindowPosition:1,zoomWindowBgColour:"#fff",lensFadeIn:!1,lensFadeOut:!1,debug:!1,zoomWindowFadeIn:!1,zoomWindowFadeOut:!1,zoomWindowAlwaysShow:!1,zoomTintFadeIn:!1,zoomTintFadeOut:!1,borderSize:4,showLens:!0,borderColour:"#888",lensBorderSize:1,lensBorderColour:"#000",lensShape:"square",zoomType:"window",containLensZoom:!1,lensColour:"white",lensOpacity:.4,lenszoom:!1,tint:!1,tintColour:"#333",tintOpacity:.4,gallery:!1,galleryActiveClass:"zoomGalleryActive",imageCrossfade:!1,constrainType:!1,constrainSize:!1,loadingIcon:!1,cursor:"default",responsive:!0,onComplete:o.noop,onDestroy:function(){},onZoomedImageLoaded:function(){},onImageSwap:o.noop,onImageSwapComplete:o.noop}}(jQuery,window,document);