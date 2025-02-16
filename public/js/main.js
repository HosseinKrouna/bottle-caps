

      function openNav() {
        document.getElementById("myNav").classList.toggle("menu_width");
        document
          .querySelector(".custom_menu-btn")
          .classList.toggle("menu_btn-style");
      }

    


      AOS.init();


      document.addEventListener('DOMContentLoaded', function () {
        window.onscroll = function () {
          var navbar = document.getElementById("navbar");
          if (window.scrollY > 0) {
            navbar.classList.add("sticky");
          } else {
            navbar.classList.remove("sticky");
          }
        };
      });
      


        
          const observer = new IntersectionObserver(
            (entries, observer) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
               
                  entry.target.classList.add("visible"); 
                  entry.target.classList.add("animate__fadeInLeft"); 
                  observer.unobserve(entry.target); 
                }
              });
            },
            { threshold: 0.5 }
          );
    
         
          document.querySelectorAll(".card-sl").forEach((card) => {
            observer.observe(card); 
          });

      
