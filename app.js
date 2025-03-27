document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const body = document.body;
  
  menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      body.classList.toggle('menu-open');
      document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  });
  
  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll('.nav a, .nav .btn-empezar').forEach(item => {
      item.addEventListener('click', () => {
          nav.classList.remove('active');
          body.classList.remove('menu-open');
          document.body.style.overflow = '';
      });
  });
});
  
  window.addEventListener('load', () => {
    const videoSection = document.querySelector('.video-section');
    videoSection.classList.add('fade-in');
  });

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener('scroll', () => {
  const preProductosH1 = document.querySelector('.preProductos h1');
  const preProductosP = document.querySelector('.preProductos p');

  if (isElementInViewport(preProductosH1)) {
    preProductosH1.classList.add('fade-in');
  }

  if (isElementInViewport(preProductosP)) {
    preProductosP.classList.add('fade-in'); 
  }
});

particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#0056b3"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.5,
        "random": true
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#0056b3",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        }
      }
    }
  });
