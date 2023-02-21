//alert("Welcome to Home page");
// navbar dropdown
function dropbutton() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// window.onclick = function(e) {
//   if (!e.target.matches('.dropbtn')) {
//   var myDropdown = document.getElementById("myDropdown");
//     if (myDropdown.classList.contains('show')) {
//       myDropdown.classList.remove('show');
//     }
//   }
// }

//  testi slider
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("testi");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
window.onload = function () {
  setInterval(function () {
    plusSlides(1);
  }, 2000);
};



// Get the modal more option show
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn = document.getElementById("moredetail");
var btn1 = document.getElementById("moredetail1");
var btn2 = document.getElementById("moredetail2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

btn1.onclick = function () {
  modal1.style.display = "block";
};
btn2.onclick = function () {
  modal2.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  else if(event.target == modal1){
    modal1.style.display = "none";
  }
  else if(event.target == modal2){
    modal2.style.display = "none";
  }
};


//tab animation
function member(evt, member) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");  //ceo,cmo,cso  == 3
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");  //button click
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(member).style.display = "block";
  evt.currentTarget.className += " active";
}


//hamburger
function hamburger() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// sticky header
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > header.offsetTop) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

//scroll effect
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    const targetPosition = document.querySelector(targetId).offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

//seachbar

const searchInput = document.getElementById('search-inp');
const searchButton = document.getElementById('search-button');
const posts = document.querySelectorAll('.post');

searchButton.addEventListener('click', function() {
  const keyword = searchInput.value.toLowerCase();

  // Hide all posts
  posts.forEach(post => {
    post.style.display = 'none';
  });

  // Show only the posts that match the keyword
  posts.forEach(post => {
    if (post.textContent.toLowerCase().includes(keyword)) {
      post.style.display = 'block';
    }
  });
});  


//Accordion
// ---------------------------------------------------------------------------------------------------
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', function() {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});

// -------------------------------------------------------------------------------------------------
//updated code
// -------------------------------------------------------------------------------------------------
let answers=document.querySelectorAll(".accordion");
answers.forEach((event)=>{
    event.addEventListener('click',()=>{
        if(event.classList.contains("active")){
                event.classList.remove("active");
        }
        else{
            event.classList.add("active");
        }
    })
})





//topbtn
let mybutton = document.getElementById("topbtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// carousal
const items = document.querySelectorAll('.carousel-item');
const prev = document.querySelector('.carousel-control-prev');
const next = document.querySelector('.carousel-control-next');

let currentIndex = 0;

items[currentIndex].classList.add('active');

prev.addEventListener('click', function() {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  items[currentIndex].classList.add('active');
});

next.addEventListener('click', function() {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % items.length;
  items[currentIndex].classList.add('active');
});


//heder and footer effect
const header1 = document.querySelector('.navbar');
const footer = document.querySelector('.footer');

header1.addEventListener('mouseover', function() {
  header1.style.backgroundColor = '#4a90e2';
});

header1.addEventListener('mouseout', function() {
  header1.style.backgroundColor = '#333';
});

footer.addEventListener('mouseover', function() {
  footer.style.backgroundColor = '#4a90e2';
});

footer.addEventListener('mouseout', function() {
  footer.style.backgroundColor = '#333';
});