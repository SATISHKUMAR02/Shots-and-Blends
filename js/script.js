let navbar=document.querySelector('.navbar')
document.querySelector('#menu-btn').onclick= () =>
    {
        navbar.classList.toggle('active')
    }   

    var swiper = new Swiper(".product-slider", {
        loop:true,
        spaceBetween: 20,
        autoplay:{
            delay:5000,
            disableOnInteraction:false,
        },
        
        breakpoints: {
          640: {
            slidesPerView: 2,
            
          },
          768: {
            slidesPerView: 2,
            
          },
          1020: {
            slidesPerView: 3,
            
          },
        },
      });    

      document.querySelector('#menu-btn').onclick= () =>
        {
            navbar.classList.toggle('active')
        }   
    
        var swiper = new Swiper(".product-slider", {
            loop:true,
            spaceBetween: 20,
            autoplay:{
                delay:5000,
                disableOnInteraction:false,
            },
            
            breakpoints: {
              640: {
                slidesPerView: 2,
                
              },
              768: {
                slidesPerView: 2,
                
              },
              1020: {
                slidesPerView: 3,
                
              },
            },
          });    