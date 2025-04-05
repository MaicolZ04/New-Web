//menu toggle para moviles

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const body = document.body;
  
  menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      body.classList.toggle('menu-open');
      document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  });
  
  // Cerrar menú al hacer clic en un enlace (menu toggle para moviles)
  document.querySelectorAll('.nav a, .nav .btn-empezar').forEach(item => {
      item.addEventListener('click', () => {
          nav.classList.remove('active');
          body.classList.remove('menu-open');
          document.body.style.overflow = '';
      });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('.modal'); // Selecciona el modal
  const openModalButton = document.querySelector('#openVideoBtn'); // Botón para abrir el modal
  const closeModalButton = document.querySelector('.close-modal'); // Botón para cerrar el modal
  const videoFrame = document.querySelector('.video-frame'); // Selecciona el iframe del video

  // Función para cargar el src del video desde el archivo JSON
  async function loadVideoSrc() {
    try {
      const response = await fetch('videos.json'); // Carga el archivo JSON
      const data = await response.json(); // Convierte la respuesta a JSON
      return data.videoSrc; // Devuelve la URL del video
    } catch (error) {
      console.error('Error al cargar el archivo JSON:', error);
      return null;
    }
  }

  // Abrir modal
  openModalButton.addEventListener('click', async () => {
    const videoSrc = await loadVideoSrc(); // Carga la URL del video
    if (videoSrc) {
      videoFrame.setAttribute('src', videoSrc); // Establece el atributo src del iframe
      modal.classList.add('show'); // Muestra el modal
      document.body.style.overflow = 'hidden'; // Desactiva el scroll de la página
    } else {
      alert('No se pudo cargar el video.');
    }
  });

  // Cerrar modal
  closeModalButton.addEventListener('click', () => {
    modal.classList.remove('show'); // Oculta el modal
    videoFrame.setAttribute('src', ''); // Limpia el atributo src para detener el video
    document.body.style.overflow = ''; // Reactiva el scroll de la página
  });

  // Cerrar modal al hacer clic fuera del contenido
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show'); // Oculta el modal
      videoFrame.setAttribute('src', ''); // Limpia el atributo src para detener el video
      document.body.style.overflow = ''; // Reactiva el scroll de la página
    }
  });
});
  
// Animación de entrada para la sección principal

window.addEventListener('load', () => {
  const videoSection = document.querySelector('.video-section');
  videoSection.classList.add('fade-in');
});

// Animación de entrada para la sección de preProductos

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

//Servicios js de la seccion de servicios

// Asegúrate de incluir AOS en tu proyecto
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa AOS para las animaciones
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Efecto hover para dispositivos táctiles
    if ('ontouchstart' in window) {
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('click', function() {
                this.classList.toggle('active');
                
                if (this.classList.contains('active')) {
                    this.style.transform = 'translateY(-10px)';
                    this.querySelector('.service-icon i').style.color = 'white';
                    this.querySelector('h3').style.color = 'white';
                    this.querySelector('p').style.color = 'rgba(255, 255, 255, 0.8)';
                    this.querySelector('.service-link').style.color = 'white';
                } else {
                    this.style.transform = '';
                    this.querySelector('.service-icon i').style.color = '#2563eb';
                    this.querySelector('h3').style.color = '#1f2937';
                    this.querySelector('p').style.color = '#6b7280';
                    this.querySelector('.service-link').style.color = '#2563eb';
                }
            });
        });
    }
});

//licencias js de la seccion de licencias

// JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // Efecto hover para dispositivos con mouse
  const licenciasCards = document.querySelectorAll('.licencia-card');
  
  licenciasCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
          if (!card.classList.contains('destacada')) {
              card.style.transform = 'translateY(-5px)';
          }
      });
      
      card.addEventListener('mouseleave', () => {
          if (!card.classList.contains('destacada')) {
              card.style.transform = 'translateY(0)';
          }
      });
  });

  // Efecto click para dispositivos táctiles
  if ('ontouchstart' in window) {
      licenciasCards.forEach(card => {
          card.addEventListener('click', function() {
              licenciasCards.forEach(c => c.classList.remove('active'));
              this.classList.add('active');
              this.style.transform = 'translateY(-5px)';
          });
      });
  }

  // Manejo de clic en botones
  document.querySelectorAll('.btn-licencia').forEach(btn => {
      btn.addEventListener('click', (e) => {
          e.preventDefault();
          const licencia = e.target.closest('.licencia-card').querySelector('h3').textContent;
          console.log(`Licencia seleccionada: ${licencia}`);
          // Aquí puedes agregar tu lógica de selección
          alert(`¡Has seleccionado la licencia ${licencia}!`);
      });
  });

  // Animación al aparecer
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = 1;
              entry.target.style.transform = 'translateY(0)';
          }
      });
  }, { threshold: 0.1 });

  licenciasCards.forEach((card, index) => {
      card.style.opacity = 0;
      card.style.transform = 'translateY(30px)';
      card.style.transition = `all 0.5s ease ${index * 0.1}s`;
      observer.observe(card);
  });
});

// Scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: 'smooth'
          });
      }
  });
});

// Scroll suave para enlaces externos
document.querySelectorAll('a[href^="http"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetUrl = this.getAttribute('href');
      window.open(targetUrl, '_blank');
  });
});

// modal para servicios

document.addEventListener('DOMContentLoaded', () => {
  const serviceModal = document.getElementById('serviceCardModal'); // Selecciona el modal
  const serviceModalTitle = document.getElementById('service-modal-title'); // Título del modal
  const serviceModalDescription = document.getElementById('service-modal-description'); // Descripción del modal
  const closeServiceModalButton = serviceModal.querySelector('.close-service-modal'); // Botón para cerrar el modal

  // Información de cada tarjeta
  const services = [
    {
      title: 'Flujos que funcionan',
      description: 'Optimizamos tus procesos con flujos de trabajo eficientes que aumentan la productividad y reducen costos.',
    },
    {
      title: 'Solución integral',
      description: 'Ofrecemos paquetes completos que cubren todas las necesidades tecnológicas de tu empresa en un solo lugar.',
    },
    {
      title: 'Asistencia integral al cliente',
      description: 'Soporte técnico 24/7 con soluciones rápidas y efectivas para minimizar tiempos de inactividad.',
    },
    {
      title: 'Redes de automatización',
      description: 'Implementamos sistemas inteligentes que automatizan tareas repetitivas para mayor eficiencia.',
    },
  ];

  // Selecciona todos los enlaces "Más información"
  const serviceLinks = document.querySelectorAll('.service-link');

  // Agrega un evento de clic a cada enlace
  serviceLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Evita el comportamiento predeterminado del enlace
      const service = services[index]; // Obtén la información del servicio correspondiente
      serviceModalTitle.textContent = service.title; // Actualiza el título del modal
      serviceModalDescription.textContent = service.description; // Actualiza la descripción del modal
      serviceModal.classList.add('show'); // Muestra el modal
      document.body.style.overflow = 'hidden'; // Desactiva el scroll de la página
    });
  });

  // Cierra el modal al hacer clic en el botón de cerrar
  closeServiceModalButton.addEventListener('click', () => {
    serviceModal.classList.remove('show'); // Oculta el modal
    document.body.style.overflow = ''; // Reactiva el scroll de la página
  });

  // Cierra el modal al hacer clic fuera del contenido
  serviceModal.addEventListener('click', (e) => {
    if (e.target === serviceModal) {
      serviceModal.classList.remove('show'); // Oculta el modal
      document.body.style.overflow = ''; // Reactiva el scroll de la página
    }
  });
});


//particulas js del fondo

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
