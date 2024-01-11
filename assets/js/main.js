const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)
 
    toggle.addEventListener('click',() => {
 
        //add show-menu class to nav menu 
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
        // console.log(nav);
    })    
 }
 
 //gọi hàm & truyền giá trị
 showMenu('nav-toggle','nav-menu')
 


 const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 4000,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  

const stars = document.querySelectorAll('.ppmn__rate i')  ;
stars.forEach((st,index) => {
  st.addEventListener('click',() => {
    console.log(index)
  })
})
console.log(stars);

//  const sr = ScrollReveal({
//     origin:'top',
//     distance:'60px',
//     duration:2500,
//     delay:400,
//     reset:true //Animations repeat
// })
 
// sr.reveal('.home__data')
// sr.reveal('.home__img',{origin:'bottom'})// đổi hướng di chuyển từ dưới lên, mặc định là top
// // sr.reveal('.enjoy__card,.popular__card',{interval:100}) // chỉ lấy từ lớp có dữ liệu không lấy container
// sr.reveal('.aboutus__data',{origin:'right'})
// sr.reveal('.aboutus__img',{origin:'left'})

// sr.reveal('.ourfood__data',{origin:'bottom'})
// sr.reveal('.ourfood__img',{origin:'top'})

// sr.reveal('.img_gallery1',{origin:'top'})
// sr.reveal('.img_gallery2',{origin:'top'})
// sr.reveal('.img_gallery3',{origin:'top'})
// sr.reveal('.img_gallery4',{origin:'top'})
// sr.reveal('.img_gallery5',{origin:'top'})
// sr.reveal('.img_gallery6',{origin:'top'})
