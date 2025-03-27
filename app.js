// Datos del menú (simulando una base de datos o API)
const menuData = [
    { name: 'INICIO', url: 'https://www.americankpo.com/' },
    { name: 'NOSOTROS', url: 'https://www.americankpo.com/nosotros/' },
    { 
        name: 'SERVICIOS', 
        url: 'https://www.americankpo.com/servicios/',
        submenu: [
            { name: 'Auditoría Médica', url: 'https://www.americankpo.com/auditoria-medica/' },
            { name: 'Cuentas Médicas', url: 'https://www.americankpo.com/cuentas-medica/' },
            { name: 'Gestión Recobros', url: 'https://www.americankpo.com/gestion-recobros/' },
        ]
    },
    { name: 'CLIENTES', url: 'https://www.americankpo.com/clientes/' },
    { name: 'CONTACTO', url: 'https://www.americankpo.com/contacto/' }
];

// Datos de redes sociales (simulando una base de datos o API)
const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/AmericanKPOLatam/', icon: 'facebook' },
    { name: 'Twitter', url: 'https://twitter.com/american_kpo', icon: 'twitter' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/american-kpo/', icon: 'linkedin' }
];

// Cargar el menú dinámicamente
const menuList = document.getElementById('menuList');
menuData.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('nav-item');
    
    const a = document.createElement('a');
    a.href = item.url;
    a.classList.add('nav-link');
    a.textContent = item.name;
    
    if (item.submenu && item.submenu.length > 0) {
        const submenu = document.createElement('ul');
        submenu.classList.add('submenu-list');
        
        item.submenu.forEach(sub => {
            const submenuItem = document.createElement('li');
            submenuItem.classList.add('submenu-item');
            const submenuLink = document.createElement('a');
            submenuLink.href = sub.url;
            submenuLink.classList.add('submenu-link');
            submenuLink.textContent = sub.name;
            submenuItem.appendChild(submenuLink);
            submenu.appendChild(submenuItem);
        });
        
        li.appendChild(submenu);
    }
    
    li.appendChild(a);
    menuList.appendChild(li);
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
