// source --> //www.virosacmagazine.it/wp-content/plugins/advanced-access-manager/media/js/aam-login.js?ver=5.1.1 
/**
 * ======================================================================
 * LICENSE: This file is subject to the terms and conditions defined in *
 * file 'license.txt', which is part of this source code package.       *
 * ======================================================================
 */

if (typeof jQuery !== 'undefined') {
    (function ($) {
        $('document').ready(function () {
            $('.login-input').bind('keyup', function(event) {
                if (event.which === 13) {
                    $('.aam-login-submit').trigger('click');
                }
            });

            $('.aam-login-submit').each(function () {
                $(this).bind('click', function () {
                    var button = $(this);
                    var prefix = $(this).data('prefix');
                    
                    var log = $.trim($('#' + prefix + 'log').val());
                    var pwd = $('#' + prefix + 'pwd').val();
                    
                    if (log && pwd) {
                        $('#' + prefix + 'error').css('display', 'none');
                        
                        $.ajax(aamLocal.ajaxurl, {
                            data: {
                                log: log,
                                pwd: pwd,
                                action: 'aamlogin',
                                redirect:  $('#' + prefix + 'redirect').val(),
                                rememberme:  ($('#' + prefix + 'rememberme').prop('checked') ? 1 : 0)
                            },
                            dataType: 'json',
                            type: 'POST',
                            beforeSend: function() {
                                button.attr({
                                    disabled: 'disabled',
                                    'data-original-label': button.val()
                                }).val('Wait...');
                            },
                            success: function(response) {
                                if (response.status === "success") {
                                    if (response.redirect) {
                                        location.href = response.redirect;
                                    }
                                } else {
                                    $('#' + prefix + 'error').html(
                                        response.reason
                                    ).css('display', 'block');
                                }
                            },
                            error: function() {
                                $('#' + prefix + 'error').html(
                                    '<strong>ERROR:</strong> Unexpected error.'
                                ).css('display', 'block');
                            },
                            complete: function() {
                                button.attr({
                                    disabled: null
                                }).val(button.attr('data-original-label'));
                            }
                        });
                    } else {
                        $('#' + prefix + 'error').html(
                            '<strong>ERROR:</strong> Username and password are required.'
                        ).css('display', 'block');
                    }
                });
            });
        });
    })(jQuery);
} else {
    console.log(
            'AAM requires jQuery library in order for login widget to work'
    );
};
// source --> https://www.virosacmagazine.it/wp-content/plugins/jetpack/_inc/build/spin.min.js?ver=1.3 
/* Do not modify this file directly. It is compiled from other files. */
//fgnass.github.com/spin.js#v1.3
/**
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */
!function(t,e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Spinner=e()}(this,function(){"use strict";var t,e=["webkit","Moz","ms","O"],i={};function o(t,e){var i,o=document.createElement(t||"div");for(i in e)o[i]=e[i];return o}function r(t){for(var e=1,i=arguments.length;e<i;e++)t.appendChild(arguments[e]);return t}var n,s=(n=o("style",{type:"text/css"}),r(document.getElementsByTagName("head")[0],n),n.sheet||n.styleSheet);function a(e,o,r,n){var a=["opacity",o,~~(100*e),r,n].join("-"),l=.01+r/n*100,f=Math.max(1-(1-e)/o*(100-l),e),p=t.substring(0,t.indexOf("Animation")).toLowerCase(),d=p&&"-"+p+"-"||"";return i[a]||(s.insertRule("@"+d+"keyframes "+a+"{0%{opacity:"+f+"}"+l+"%{opacity:"+e+"}"+(l+.01)+"%{opacity:1}"+(l+o)%100+"%{opacity:"+e+"}100%{opacity:"+f+"}}",s.cssRules.length),i[a]=1),a}function l(t,i){var o,r,n=t.style;if(void 0!==n[i])return i;for(i=i.charAt(0).toUpperCase()+i.slice(1),r=0;r<e.length;r++)if(void 0!==n[o=e[r]+i])return o}function f(t,e){for(var i in e)t.style[l(t,i)||i]=e[i];return t}function p(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)void 0===t[o]&&(t[o]=i[o])}return t}function d(t){for(var e={x:t.offsetLeft,y:t.offsetTop};t=t.offsetParent;)e.x+=t.offsetLeft,e.y+=t.offsetTop;return e}var c={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};function u(t){if(void 0===this)return new u(t);this.opts=p(t||{},u.defaults,c)}u.defaults={},p(u.prototype,{spin:function(e){this.stop();var i,r,n=this,s=n.opts,a=n.el=f(o(0,{className:s.className}),{position:s.position,width:0,zIndex:s.zIndex}),l=s.radius+s.length+s.width;if(e&&(e.insertBefore(a,e.firstChild||null),r=d(e),i=d(a),f(a,{left:("auto"==s.left?r.x-i.x+(e.offsetWidth>>1):parseInt(s.left,10)+l)+"px",top:("auto"==s.top?r.y-i.y+(e.offsetHeight>>1):parseInt(s.top,10)+l)+"px"})),a.setAttribute("role","progressbar"),n.lines(a,n.opts),!t){var p,c=0,u=(s.lines-1)*(1-s.direction)/2,h=s.fps,y=h/s.speed,m=(1-s.opacity)/(y*s.trail/100),v=y/s.lines;!function t(){c++;for(var e=0;e<s.lines;e++)p=Math.max(1-(c+(s.lines-e)*v)%y*m,s.opacity),n.opacity(a,e*s.direction+u,p,s);n.timeout=n.el&&setTimeout(t,~~(1e3/h))}()}return n},stop:function(){var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=void 0),this},lines:function(e,i){var n,s=0,l=(i.lines-1)*(1-i.direction)/2;function p(t,e){return f(o(),{position:"absolute",width:i.length+i.width+"px",height:i.width+"px",background:t,boxShadow:e,transformOrigin:"left",transform:"rotate("+~~(360/i.lines*s+i.rotate)+"deg) translate("+i.radius+"px,0)",borderRadius:(i.corners*i.width>>1)+"px"})}for(;s<i.lines;s++)n=f(o(),{position:"absolute",top:1+~(i.width/2)+"px",transform:i.hwaccel?"translate3d(0,0,0)":"",opacity:i.opacity,animation:t&&a(i.opacity,i.trail,l+s*i.direction,i.lines)+" "+1/i.speed+"s linear infinite"}),i.shadow&&r(n,f(p("#000","0 0 4px #000"),{top:"2px"})),r(e,r(n,p(i.color,"0 0 1px rgba(0,0,0,.1)")));return e},opacity:function(t,e,i){e<t.childNodes.length&&(t.childNodes[e].style.opacity=i)}});var h=f(o("group"),{behavior:"url(#default#VML)"});return!l(h,"transform")&&h.adj?function(){function t(t,e){return o("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',e)}s.addRule(".spin-vml","behavior:url(#default#VML)"),u.prototype.lines=function(e,i){var o=i.length+i.width,n=2*o;function s(){return f(t("group",{coordsize:n+" "+n,coordorigin:-o+" "+-o}),{width:n,height:n})}var a,l=2*-(i.width+i.length)+"px",p=f(s(),{position:"absolute",top:l,left:l});function d(e,n,a){r(p,r(f(s(),{rotation:360/i.lines*e+"deg",left:~~n}),r(f(t("roundrect",{arcsize:i.corners}),{width:o,height:i.width,left:i.radius,top:-i.width>>1,filter:a}),t("fill",{color:i.color,opacity:i.opacity}),t("stroke",{opacity:0}))))}if(i.shadow)for(a=1;a<=i.lines;a++)d(a,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(a=1;a<=i.lines;a++)d(a);return r(e,p)},u.prototype.opacity=function(t,e,i,o){var r=t.firstChild;o=o.shadow&&o.lines||0,r&&e+o<r.childNodes.length&&(r=(r=(r=r.childNodes[e+o])&&r.firstChild)&&r.firstChild)&&(r.opacity=i)}}():t=l(h,"animation"),u});
// source --> https://www.virosacmagazine.it/wp-content/plugins/jetpack/_inc/build/jquery.spin.min.js?ver=1.3 
/* Do not modify this file directly. It is compiled from other files. */
/**
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */
!function(e){if("object"==typeof exports)e(require("jquery"),require("spin"));else if("function"==typeof define&&define.amd)define(["jquery","spin"],e);else{if(!window.Spinner)throw new Error("Spin.js not present");e(window.jQuery,window.Spinner)}}(function(e,n){e.fn.spin=function(s,i){return this.each(function(){var t=e(this),r=t.data();if(r.spinner&&(r.spinner.stop(),delete r.spinner),!1!==s){if(void 0!==(s=e.extend({color:i||t.css("color")},e.fn.spin.presets[s]||s)).right&&void 0!==s.length&&void 0!==s.width&&void 0!==s.radius){var p=t.css("padding-left");p=void 0===p?0:parseInt(p,10),s.left=t.outerWidth()-2*(s.length+s.width+s.radius)-p-s.right,delete s.right}r.spinner=new n(s).spin(this)}})},e.fn.spin.presets={tiny:{lines:8,length:2,width:2,radius:3},small:{lines:8,length:4,width:3,radius:5},large:{lines:10,length:8,width:4,radius:8}}}),function(e){e.fn.spin.presets.wp={trail:60,speed:1.3},e.fn.spin.presets.small=e.extend({lines:8,length:2,width:2,radius:3},e.fn.spin.presets.wp),e.fn.spin.presets.medium=e.extend({lines:8,length:4,width:3,radius:5},e.fn.spin.presets.wp),e.fn.spin.presets.large=e.extend({lines:10,length:6,width:4,radius:7},e.fn.spin.presets.wp),e.fn.spin.presets["small-left"]=e.extend({left:5},e.fn.spin.presets.small),e.fn.spin.presets["small-right"]=e.extend({right:5},e.fn.spin.presets.small),e.fn.spin.presets["medium-left"]=e.extend({left:5},e.fn.spin.presets.medium),e.fn.spin.presets["medium-right"]=e.extend({right:5},e.fn.spin.presets.medium),e.fn.spin.presets["large-left"]=e.extend({left:5},e.fn.spin.presets.large),e.fn.spin.presets["large-right"]=e.extend({right:5},e.fn.spin.presets.large)}(jQuery);