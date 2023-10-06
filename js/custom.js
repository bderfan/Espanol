$(function(){
    
//back to top    
  var backtotop = $(".top");
  var html_body= $('html,body');
    
  backtotop.on('click',function(){
     html_body.animate({scrollTop:0},4500); 
   });
    
    
    
    
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); 
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};
	  
    
 

    
// Slick slider
        $('.myservices').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        centerMode:true,
        speed:1500,
        centerPadding:false,
});    
    
    

// back to top fade in/out
$(window).on('scroll', function(){
var scrolling = $(this).scrollTop();
var back2top = $(".top");
if(scrolling > 270){
back2top.fadeIn(1000);	
}
else {
	back2top.fadeOut(1000);
}	
});	
    
// Counter
$('.counter-value').counterUp({
    delay: 10,
    time: 1000
});    
    

//isotope filter
// external js: isotope.pkgd.js

$(function(){
// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
    
});




// Circle Progressbar progress


let options = {
    startAngle: -1.55,
    size: 140,
    value: 0.90,
    fill: {gradient: ['#000', '#464444']}
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
  $(".react .bar").circleProgress({
    value: 0.50
  });
  $(".js .bar").circleProgress({
    value: 0.15
  });
  $(".bool .bar").circleProgress({
    value: 0.35
  });



    
    
// Word type effect
    var words = ['Erfan Alam Emon'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 100;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});
        
});




const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Designer", "Developer"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});










// preloader

 $(window).on('load', function(){
        $(".preloader").delay(500).fadeOut(500);
    });


/* Demo purposes only */
$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);



const typedtextspan = document.querySelector(".TYPEDTEXT");
const cursorspan = document.querySelector(".CURSOR");

const textarray = ["I am Erfan Alam Emon. I am a Web designer & Graphics Designer since 2018. I have a good knowledge of responsive Web Design. I am also an android and web developer."];
const typingdelay = 15;
const erasingdelay = 15;
const newtextdelay = 25; // Delay between current and next text
let textarrayindex = 0;
let charindex = 0;

function Type() {
  if (charindex < textarray[textarrayindex].length) {
    if(!cursorspan.classList.contains("typing")) cursorspan.classList.add("typing");
    typedtextspan.textContent += textarray[textarrayindex].charAt(charindex);
    charindex++;
    setTimeout(Type, typingdelay);
  } 
  else {
    cursorspan.classList.remove("typing");
  	setTimeout(Erase, newtextdelay);
  }
}

function Erase() {
	if (charindex > 0) {
    if(!cursorspan.classList.contains("typing")) cursorspan.classList.add("typing");
    typedtextspan.textContent = textarray[textarrayindex].substring(0, charindex-1);
    charindex--;
    setTimeout(Erase, erasingdelay);
  } 
  else {
    cursorspan.classList.remove("typing");
    textarrayindex++;
    if(textarrayindex>=textarray.length) textarrayindex=0;
    setTimeout(Type, typingdelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textarray.length) setTimeout(Type, newtextdelay + 250);
});