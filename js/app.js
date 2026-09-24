/* =============================================
   STAR BOWLING CENTER — Digital Menu
   Application Logic
   ============================================= */

// ==================== DATA ====================
const cocktails = [
  {
    id: 'cosmopolitan',
    name: 'Cosmopolitan',
    description: 'Elegante y sofisticado. Vodka cítrico con un toque de arándano que deslumbra en cada sorbo.',
    image: 'images/cocktails/cosmopolitan.png',
    category: 'clasicos',
    ingredients: ['Vodka', 'Triple Sec', 'Jugo de Arándano', 'Jugo de Limón'],
    tags: ['vodka', 'cítrico', 'frutal']
  },
  {
    id: 'daiquiri-clasico',
    name: 'Daiquiri Clásico',
    description: 'La frescura del Caribe en su forma más pura. Ron blanco, limón y el toque justo de dulzor.',
    image: 'images/cocktails/daiquiri-clasico.png',
    category: 'clasicos',
    ingredients: ['Ron Blanco', 'Jugo de Limón', 'Jarabe Simple'],
    tags: ['ron', 'cítrico', 'clásico']
  },
  {
    id: 'fresa-colada',
    name: 'Fresa Colada',
    description: 'Tropical y cremosa. Fresas frescas fusionadas con coco y piña para un escape al paraíso.',
    image: 'images/cocktails/fresa-colada.jpg',
    category: 'tropicales',
    ingredients: ['Ron', 'Crema de Coco', 'Piña', 'Fresas'],
    tags: ['ron', 'cremoso', 'frutal']
  },
  {
    id: 'gintonic',
    name: 'Gin Tonic',
    description: 'El clásico reinventado. Gin premium con tónica burbujeante, lima fresca y hierbas aromáticas.',
    image: 'images/cocktails/gintonic.jpg',
    category: 'refrescantes',
    ingredients: ['Gin', 'Agua Tónica', 'Limón', 'Hierbas'],
    tags: ['gin', 'refrescante', 'herbal']
  },
  {
    id: 'maitai',
    name: 'Mai Tai',
    description: 'Exótico y potente. Una mezcla de rones con curaçao y orgeat que te transporta a la Polinesia.',
    image: 'images/cocktails/maitai.png',
    category: 'tropicales',
    ingredients: ['Ron Oscuro', 'Ron Blanco', 'Curaçao', 'Orgeat', 'Limón'],
    tags: ['ron', 'exótico', 'tropical']
  },
  {
    id: 'margarita',
    name: 'Margarita',
    description: 'Inconfundible y vibrante. Tequila, triple sec y limón con el icónico borde de sal.',
    image: 'images/cocktails/margarita.jpg',
    category: 'clasicos',
    ingredients: ['Tequila', 'Triple Sec', 'Jugo de Limón', 'Sal'],
    tags: ['tequila', 'cítrico', 'clásico']
  },
  {
    id: 'margarita-blue',
    name: 'Margarita Blue',
    description: 'Hipnótica y llamativa. La margarita clásica reinventada con blue curaçao y borde de azúcar.',
    image: 'images/cocktails/margarita-blue.jpg',
    category: 'especiales',
    ingredients: ['Tequila', 'Blue Curaçao', 'Jugo de Limón', 'Azúcar'],
    tags: ['tequila', 'visual', 'dulce']
  },
  {
    id: 'mojito',
    name: 'Mojito',
    description: 'Fresco, mentolado y adictivo. Ron cubano con hierba buena, limón y soda burbujeante.',
    image: 'images/cocktails/mojito.jpg',
    category: 'clasicos',
    ingredients: ['Ron Blanco', 'Hierba Buena', 'Limón', 'Azúcar', 'Soda'],
    tags: ['ron', 'refrescante', 'menta']
  },
  {
    id: 'moscow-mule',
    name: 'Moscow Mule',
    description: 'Servido en su icónica taza de cobre. Vodka con ginger beer picante y un squeeze de limón.',
    image: 'images/cocktails/moscow-mule.jpg',
    category: 'clasicos',
    ingredients: ['Vodka Smirnoff', 'Ginger Beer', 'Limón'],
    tags: ['vodka', 'jengibre', 'clásico']
  },
  {
    id: 'paloma',
    name: 'Paloma',
    description: '100% mexicana. Tequila refrescado con toronja, limón y un toque de sal que despierta los sentidos.',
    image: 'images/cocktails/paloma.png',
    category: 'refrescantes',
    ingredients: ['Tequila', 'Toronja', 'Limón', 'Sal'],
    tags: ['tequila', 'cítrico', 'mexicano']
  },
  {
    id: 'pina-colada',
    name: 'Piña Colada',
    description: 'Cremosa y tropical. Ron, crema de coco y piña fresca batidos hasta la perfección absoluta.',
    image: 'images/cocktails/pina-colada.jpg',
    category: 'tropicales',
    ingredients: ['Ron', 'Crema de Coco', 'Jugo de Piña'],
    tags: ['ron', 'cremoso', 'tropical']
  },
  {
    id: 'spicy-mule',
    name: 'Spicy Mule',
    description: 'El Moscow Mule con actitud. Vodka de tamarindo picante con ginger beer y borde de chamoy.',
    image: 'images/cocktails/spicy-mule.jpg',
    category: 'especiales',
    ingredients: ['Vodka Smirnoff Spicy Tamarind', 'Ginger Beer', 'Limón', 'Chamoy'],
    tags: ['vodka', 'picante', 'tamarindo']
  },
  {
    id: 'tequila-sunrise',
    name: 'Tequila Sunrise',
    description: 'Un amanecer en tu copa. Tequila con jugo de naranja y granadina creando un degradado espectacular.',
    image: 'images/cocktails/tequila-sunrise.jpg',
    category: 'tropicales',
    ingredients: ['Tequila', 'Jugo de Naranja', 'Granadina'],
    tags: ['tequila', 'frutal', 'visual']
  },
  {
    id: 'tom-collins',
    name: 'Tom Collins',
    description: 'Ligero y efervescente. Gin con limón fresco, jarabe simple y soda que refresca al instante.',
    image: 'images/cocktails/tom-collins.png',
    category: 'refrescantes',
    ingredients: ['Gin', 'Jugo de Limón', 'Jarabe Simple', 'Soda'],
    tags: ['gin', 'refrescante', 'clásico']
  }
];

const categories = [
  { id: 'todos', label: 'Todos', icon: '✨' },
  { id: 'clasicos', label: 'Clásicos', icon: '🍸' },
  { id: 'tropicales', label: 'Tropicales', icon: '🌴' },
  { id: 'especiales', label: 'Especiales', icon: '🔥' },
  { id: 'refrescantes', label: 'Refrescantes', icon: '💎' }
];

// ==================== STATE ====================
let activeCategory = 'todos';
let isModalOpen = false;

// ==================== DOM ELEMENTS ====================
const navScroll = document.getElementById('navScroll');
const menuGrid = document.getElementById('menuGrid');
const nav = document.getElementById('nav');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalDescription = document.getElementById('modalDescription');
const modalIngredients = document.getElementById('modalIngredients');
const scrollProgress = document.getElementById('scrollProgress');
const starsContainer = document.getElementById('stars');

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
  generateStars();
  renderNav();
  renderMenu();
  setupScrollEffects();
  setupModal();
});

// ==================== STARS BACKGROUND ====================
function generateStars() {
  const count = 60;
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.setProperty('--duration', (2 + Math.random() * 4) + 's');
    star.style.setProperty('--max-opacity', (0.2 + Math.random() * 0.5).toString());
    star.style.animationDelay = Math.random() * 4 + 's';

    if (Math.random() > 0.7) {
      star.style.width = '3px';
      star.style.height = '3px';
      star.style.boxShadow = '0 0 6px rgba(0, 229, 255, 0.3)';
    }

    starsContainer.appendChild(star);
  }
}

// ==================== NAVIGATION ====================
function renderNav() {
  navScroll.innerHTML = categories.map(cat => `
    <button
      class="nav-pill${cat.id === activeCategory ? ' active' : ''}"
      data-category="${cat.id}"
      role="tab"
      aria-selected="${cat.id === activeCategory}"
      id="tab-${cat.id}"
    >
      <span>${cat.icon} ${cat.label}</span>
    </button>
  `).join('');

  // Add click listeners
  navScroll.querySelectorAll('.nav-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const category = pill.dataset.category;
      if (category === activeCategory) return;
      setActiveCategory(category);
    });
  });
}

function setActiveCategory(category) {
  activeCategory = category;

  // Update pills
  navScroll.querySelectorAll('.nav-pill').forEach(pill => {
    const isActive = pill.dataset.category === category;
    pill.classList.toggle('active', isActive);
    pill.setAttribute('aria-selected', isActive);
  });

  // Scroll active pill into view
  const activePill = navScroll.querySelector('.nav-pill.active');
  if (activePill) {
    activePill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  // Re-render menu with animation
  renderMenu(true);
}

// ==================== MENU RENDERING ====================
function renderMenu(animate = false) {
  const filtered = activeCategory === 'todos'
    ? cocktails
    : cocktails.filter(c => c.category === activeCategory);

  if (filtered.length === 0) {
    menuGrid.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🍹</div>
        <p class="no-results-text">No hay cócteles en esta categoría</p>
      </div>
    `;
    return;
  }

  menuGrid.innerHTML = filtered.map((cocktail, index) => `
    <article
      class="cocktail-card${animate ? '' : ' visible'}"
      data-id="${cocktail.id}"
      data-category="${cocktail.category}"
      style="--delay: ${index * 80}ms"
      tabindex="0"
      role="button"
      aria-label="Ver detalles de ${cocktail.name}"
    >
      <div class="card-image-wrapper">
        <img
          src="${cocktail.image}"
          alt="${cocktail.name}"
          loading="lazy"
          decoding="async"
        >
        <span class="card-badge ${cocktail.category}">
          ${getCategoryLabel(cocktail.category)}
        </span>
      </div>
      <div class="card-content">
        <h2 class="card-name">${cocktail.name}</h2>
        <p class="card-description">${cocktail.description}</p>
        <div class="card-tags">
          ${cocktail.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');

  // Add click listeners
  menuGrid.querySelectorAll('.cocktail-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.id));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card.dataset.id);
      }
    });
  });

  // Trigger entrance animations
  if (animate) {
    requestAnimationFrame(() => {
      const cards = menuGrid.querySelectorAll('.cocktail-card');
      cards.forEach((card, i) => {
        setTimeout(() => {
          card.classList.add('visible');
        }, i * 80);
      });
    });
  } else {
    // Use IntersectionObserver for initial load
    observeCards();
  }
}

function getCategoryLabel(category) {
  const cat = categories.find(c => c.id === category);
  return cat ? cat.label : category;
}

// ==================== INTERSECTION OBSERVER ====================
function observeCards() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = parseInt(entry.target.style.getPropertyValue('--delay')) || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  menuGrid.querySelectorAll('.cocktail-card:not(.visible)').forEach(card => {
    observer.observe(card);
  });
}

// ==================== MODAL ====================
function setupModal() {
  modalClose.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isModalOpen) closeModal();
  });
}

function openModal(cocktailId) {
  const cocktail = cocktails.find(c => c.id === cocktailId);
  if (!cocktail) return;

  modalImage.src = cocktail.image;
  modalImage.alt = cocktail.name;
  modalName.textContent = cocktail.name;
  modalDescription.textContent = cocktail.description;

  modalIngredients.innerHTML = cocktail.ingredients
    .map(ing => `<span class="modal-ingredient">${ing}</span>`)
    .join('');

  modal.classList.add('active');
  isModalOpen = true;
  document.body.style.overflow = 'hidden';

  // Focus trap
  modalClose.focus();
}

function closeModal() {
  modal.classList.remove('active');
  isModalOpen = false;
  document.body.style.overflow = '';
}

// ==================== SCROLL EFFECTS ====================
function setupScrollEffects() {
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateScrollProgress();
        updateNavShadow();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgress.style.width = progress + '%';
}

function updateNavShadow() {
  const scrolled = window.scrollY > 50;
  nav.classList.toggle('scrolled', scrolled);
}
