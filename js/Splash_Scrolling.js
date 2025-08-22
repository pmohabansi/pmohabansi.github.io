/* Play background video */
var BV;
$(function() {
    var userAgent = window.navigator.userAgent.toLowerCase(),
        ios = /iphone|ipod|ipad/.test( userAgent );
    //if (!Modernizr.touch) {
    if (!ios) {
        $(".backgroundImage").hide();
        BV = new $.BigVideo();
        BV.init();
        BV.show('./BigVideo.js-gh-pages/vids/summer.mp4',{doLoop:true});
    }
});

function playVideo(){
    $(".backgroundImage").hide();
    BV = new $.BigVideo();
    BV.init();
    BV.show('./BigVideo.js-gh-pages/vids/summer.mp4',{doLoop:true});
}

/* Shine Text Start */
var textshineInterval = setInterval(function () { textshine() }, 5000);
function textshine() {
    $(".title").shineText();
};

function linegradient() { 
    $(".linegradientII").addClass("animate");
    setTimeout(title, 1000);
}

(function ($, window, undefined) {
    $.fn.shineText = function (options) {
        var settings = $.extend({
            speed: 150,
            shineClass: "shine",
            complete: null
        }, options);
        return this.each(function () {
            var text = $(this).text();
            var doAnimate = function (el) {
                el.find('span').each(function () {
                    var that = $(this);
                    setTimeout(function () {
                        that.toggleClass(settings.shineClass);
                        that.prev().toggleClass(settings.shineClass);
                    }, that.index() * settings.speed);
                });
            }
            if (!$(this).hasClass('shineApplied')) {
                $(this).addClass('shineApplied').html('');
                for (i = 0; i < text.length; i++) {
                    $(this).append('<span>' + text[i] + '</span>');
                }
                $(this).append('<span></span>');
            }
            doAnimate($(this));

            // ON COMPLETE:
            if ($.isFunction(settings.complete)) {
                settings.complete.call(this);
            }
        });
    }
})(jQuery, window);

function ShineImg(img) {
    this.imgToCanvas = function (img) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = img.width;
        this.canvas.height = img.height;
        if (img.className != '') { this.canvas.className = img.className; }
        this.context = this.canvas.getContext('2d');
        this.image = img;
        this.context.drawImage(img, 0, 0);
        img.parentNode.replaceChild(this.canvas, img);
    }

    this.imgToCanvas(img);
    this.placeGradient = function (x, y) {
        this.context.save();
        this.gradient = this.context.createLinearGradient(x, 40 * Math.sin(15 * Math.PI / 180), x + 40, 40 * Math.sin(15 * Math.PI / 180));
        gradient.addColorStop(0, 'rgba(0,224,252,0)');
        gradient.addColorStop(0.5, 'rgba(0,224,252,0.5)');
        gradient.addColorStop(1, 'rgba(0,224,252,0)');
        this.context.rotate(15 * Math.PI / 180);
        this.context.fillStyle = gradient;
        this.context.globalCompositeOperation = 'source-atop';
        this.context.fillRect(x, y - x * Math.sin(15 * Math.PI / 180), 40, this.canvas.height / Math.cos(15 * Math.PI / 180) + 40 * Math.sin(15 * Math.PI / 180));
        this.context.restore();
    }

    var x = -(this.canvas.width + this.canvas.height * Math.sin(15 * Math.PI / 180));
    this.animateGradient = function () {
        this.animation = setInterval(function () {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.context.drawImage(img, 0, 0);
            this.placeGradient(x, -40 * Math.sin(15 * Math.PI / 180));
            x += 4;
            if (x > this.canvas.width + this.canvas.height * Math.sin(15 * Math.PI / 180)) {
                x = -(this.canvas.width + this.canvas.height * Math.sin(15 * Math.PI / 180));
                clearInterval(this.animation);
            }
        }, 1);
    }

    this.shine = setInterval(this.animateGradient, 7000);
    window.addEventListener('blur', function () { clearInterval(this.shine); }, false);
    return this;
};
/* Shine Text End */

/* Glow The Text (Start) */
var glow = $('.confirm_selection');
setInterval(function () {
    glow.hasClass('glow') ? glow.removeClass('glow') : glow.addClass('glow');
}, 5000);
/* Glow The Text (End) */

/* Liquid Particle 3D (Start) */
var myAnimationSetInterval;
(function(){
    function w(){
        h.globalCompositeOperation="source-over";
        h.fillStyle="rgba(8,8,12,"+v+")";
        h.fillRect(0,0,f,k);
        h.globalCompositeOperation="lighter";
        .75>v&&(v+=.05);
        D=s-x;
        E=t-y;
        x=s;
        y=t;

        for(var a=f/1.15,l=f/8,p=f/2,r=Math.random,F=Math.abs,w=Math.sqrt,A=Math.cos,B=Math.sin,C=Math.atan2,G=1350; G--;){
            var e=H[G],g=e.x,c=e.y,d=e.vX,b=e.vY,q=g-s,m=c-t,n=w(q*q+m*m),m=C(m,q),q=A(m),m=B(m),u=14*(1-n/p);

            if(z&&n<p) {
                u=14*(1-n/p);
                d=d+(q*u+.5-r());
                b=b+(m*u+.5-r());
            }

            n<a&&(u=(1-n/a)*f*.0014,d-=q*u,b-=m*u);
            n<l&&(n=(1-n/l)*f*2.2E-4,d+=D*n,b+=E*n);
            d*=.96;
            b*=.96;
            F(d);
            F(b);
            g+=d;
            c+=b;
            g>f?g-=f:0>g&&(g=f+g);
            c>k?c-=k:0>c&&(c=k+c);
            e.vX=d;
            e.vY=b;
            e.x=g;
            e.y=c;
            d=e;
            b=g/f*Math.PI*2;
            c=c/k*Math.PI;
            b={theta:b,phi:c,x:-100*Math.sin(c)*Math.sin(b),y:-100*Math.cos(c),z:-100*Math.sin(c)*Math.cos(b)};
            d.pos3D=b;e.pos3D.z-=200;
            -299>e.pos3D.z||(d=300/(300+e.pos3D.z),b=e.pos3D.x*d+f/2,c=e.pos3D.y*d+k/2,h.fillStyle=e.color,h.beginPath(),h.arc(b,c,d,0,I,!0),h.closePath(),h.fill());
        }
    }

    function r(a){
        f=document.documentElement.clientWidth;
        k=document.documentElement.clientHeight;
        p.width=f;p.height=k;
    }

    function A(a){
        a=a?a:window.event;
        s=x=a.pageX;
        t=y=a.pageY;
        document.onmousemove=B;
    }

    function B(a){
        a=a?a:window.event;
        s=a.pageX;
        t=a.pageY;
    }

    function C(a){
        z=!0;
        return!1;
    }

    function J(a){
        return z=!1;
    }

    function K(){
        this.color="rgb("+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+")";
        this.size=this.vY=this.vX=this.x=this.y=0;
        this.pos3D={x:0,y:0,z:100};
    }

    var p,h,f=1E3,k=560,H=[],I=2*Math.PI,v=0,s,t,D=0,E=0,x=0,y=0,z=!1;

    window.onload=function(){
        p=document.getElementById("mainCanvas");
        if(p.getContext){
            document.getElementById("outer");
            document.getElementById("canvasContainer");
            h=p.getContext("2d");
            //window.moveTo(0,0);
            //window.resizeTo(screen.width,screen.height);
            r(null);
            for(var a=1350;a--;){
                var l=new K;l.x=.5*f;l.y=.5*k;
                l.vX=Math.cos(a)*Math.random()*40;
                l.vY=Math.sin(a)*Math.random()*20;
                l.size=2;
                H[a]=l;
            }
            document.onmousedown=C;
            document.onmouseup=J;
            document.onmousemove=A;
            window.onresize=r;
            r(null);
            myAnimationSetInterval = setInterval(w,33);
        }
    }
})();
/* Liquid Particle 3D (End) */

/* Display the Splash Screen (Start) */
jQuery(document).ready(function ($) {
    //duration of the top scrolling animation (in ms)
    var scroll_top_duration = 700,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

    if ($(".splash").is(":visible")) {
        $(".wrapper").css({ "opacity": "0" });
    }
    $(".splash-arrow").click(function () {
        close_SplashScreen();
    });

    $("#close").click(function () {
        close_SplashScreen();
    });

    localStorage.IsSplashClose = 1;
    //hide or show the "back to top" link
    $(window).scroll(function () {
        red_scroll_button();
        //$(window).off("scroll");
        if (localStorage.IsSplashClose == 1) {
            $(".splash").slideUp("800", function () {
                $("html, body").animate({ "scrollTop": "0px" }, 100);
                $(".wrapper").delay(100).animate({ "opacity": "1.0" }, 800);
            });
            localStorage.IsSplashClose = localStorage.IsSplashClose + 1;
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration
        );
    });
});

function red_scroll_button() {
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,
    //grab the "back to top" link
    $back_to_top = $('.cd-top');

    ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
    if ($(this).scrollTop() > offset_opacity) {
        $back_to_top.addClass('cd-fade-out');
    }

    // Stop the Liquid Particle 3D animation...
    clearInterval(myAnimationSetInterval);
    // Stop the 'Shine Text' animation...
    clearInterval(textshineInterval);

    var sound=document.getElementById("MyMusic");
    if(sound != null){
        sound.pause();
        sound.currentTime = 0;
    }

    if(BV != null) {
        try {
            BV.getPlayer().pause();
            BV.remove();
        }
        catch(err) {
            message.innerHTML = "Error: " + err;
        }
    }
}

function close_SplashScreen() {
    $(".splash").slideUp("800", function () {
        $(".wrapper").delay(100).animate({ "opacity": "1.0" }, 800);
    });
    red_scroll_button();
}
/* Display the Splash Screen (End) */
