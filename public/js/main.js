

      function openNav() {
        document.getElementById("myNav").classList.toggle("menu_width");
        document
          .querySelector(".custom_menu-btn")
          .classList.toggle("menu_btn-style");
      }

    


      AOS.init();


      window.onscroll = function () {
        var navbar = document.getElementById("navbar");
        if (window.scrollY > 0) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      };

      // window.onscroll = function () {
      //   var navbar = document.getElementById("navbar");
      //   var mainContent = document.getElementById("main-content");
      //   var mainPosition = mainContent.offsetTop;

      //   if (window.scrollY > mainPosition - navbar.offsetHeight) {
      //     navbar.classList.add("sticky");
      //   } else {
      //     navbar.classList.remove("sticky");
      //   }
      // };
