const recipes = [
  {
    id: 1,
    title: "Arroz Soltinho Perfeito",
    category: "rapida",
    categoryLabel: "⚡ Até 30 min",
    time: "20 min",
    servings: 4,
    image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80",
    description: "O segredo do arroz soltinho está no refogado e na proporção exata de água fervente.",
    ingredients: [
      { name: "xícara (chá) de arroz branco", baseQty: 2 },
      { name: "xícaras (chá) de água fervente", baseQty: 4 },
      { name: "dentes de alho picados", baseQty: 2 },
      { name: "colher (sopa) de azeite", baseQty: 1 },
      { name: "colher (chá) de sal", baseQty: 1 }
    ],
    steps: [
      "Ferva a água em uma chaleira antes de começar.",
      "Em uma panela média, aqueça o azeite e refogue o alho picado até dourar levemente.",
      "Adicione o arroz e refogue bem por 2 minutos. Esse passo sela os grãos para não empapar.",
      "Regue com a água fervente e adicione o sal. Misture apenas uma vez.",
      "Cozinhe em fogo médio com a tampa semiaberta até a água secar na superfície.",
      "Abaixe o fogo, tampe totalmente e cozinhe por mais 5 minutos.",
      "Desligue o fogo e deixe descansar tampado por 5 minutos antes de soltar com um garfo."
    ],
    tip: "Não mexa no arroz enquanto ele cozinha, para não liberar amido excessivo."
  },
  {
    id: 2,
    title: "Risoto Clássico de Cogumelos",
    category: "almoco",
    categoryLabel: "🥘 Almoço de Domingo",
    time: "40 min",
    servings: 2,
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80",
    description: "Cremoso, elegante e reconfortante. Aprenda a técnica correta de adicionar o caldo aos poucos.",
    ingredients: [
      { name: "xícara (chá) de arroz arbóreo", baseQty: 1 },
      { name: "gramas de cogumelos fatiados", baseQty: 200 },
      { name: "xícara (chá) de vinho branco seco", baseQty: 0.5 },
      { name: "litro de caldo de legumes caseiro fervente", baseQty: 1 },
      { name: "colheres (sopa) de manteiga gelada", baseQty: 2 },
      { name: "xícara (chá) de queijo parmesão ralado", baseQty: 0.5 }
    ],
    steps: [
      "Em uma frigideira com azeite, doure os cogumelos e reserve.",
      "Na panela do risoto, refogue a cebola na manteiga até ficar transparente.",
      "Junte o arroz arbóreo e tostie por 1 minuto.",
      "Adicione o vinho branco e mexa até evaporar completamente.",
      "Vá adicionando o caldo fervente, uma concha por vez, mexendo sempre até o arroz ficar al dente.",
      "Desligue o fogo, junte a manteiga gelada e o parmesão. Tampe por 2 minutos e sirva imediatamente."
    ],
    tip: "A manteiga precisa estar bem gelada no final para criar a emulsão cremosa (mantecatura)."
  },
  {
    id: 3,
    title: "Bolo de Cenoura com Vulcão de Brigadeiro",
    category: "doce",
    categoryLabel: "🍰 Sobremesas",
    time: "50 min",
    servings: 8,
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80",
    description: "Massa fofinha e cor vibrante, coberta com um brigadeiro cremoso ao ponto de colher.",
    ingredients: [
      { name: "cenouras médias descascadas e picadas", baseQty: 3 },
      { name: "xícaras (chá) de farinha de trigo", baseQty: 2 },
      { name: "xícaras (chá) de açúcar", baseQty: 1.5 },
      { name: "xícara (chá) de óleo vegetal", baseQty: 1 },
      { name: "ovos", baseQty: 4 },
      { name: "colher (sopa) de fermento em pó", baseQty: 1 }
    ],
    steps: [
      "No liquidificador, bata as cenouras, os ovos e o óleo até obter um creme liso.",
      "Em uma tigela grande, peneire a farinha e o açúcar.",
      "Despeje o líquido do liquidificador na tigela e misture delicadamente com um fouet.",
      "Adicione o fermento e misture suavemente apenas para incorporar.",
      "Asse em forno preaquecido a 180°C por cerca de 40 minutos."
    ],
    tip: "Não exagere na quantidade de cenoura para a massa não solarem."
  },
  {
    id: 4,
    title: "Salada Caprese com Molho Pesto",
    category: "leve",
    categoryLabel: "🥗 Leve & Prático",
    time: "15 min",
    servings: 2,
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb23659?auto=format&fit=crop&w=800&q=80",
    description: "A clássica combinação italiana de tomate, muçarela de búfala e manjericão fresco.",
    ingredients: [
      { name: "tomates maduros fatiados", baseQty: 2 },
      { name: "bolas de muçarela de búfala fatiadas", baseQty: 2 },
      { name: "maço de manjericão fresco", baseQty: 1 },
      { name: "colheres (sopa) de azeite extra-virgem", baseQty: 3 },
      { name: "Pitada de sal e pimenta-do-reino", baseQty: 1 }
    ],
    steps: [
      "Fatie os tomates e a muçarela em rodelas de espessura média.",
      "Intercale as rodelas de tomate e muçarela em uma travessa rasa.",
      "Decore com as folhas frescas de manjericão.",
      "Regue generosamente com o azeite e tempere com sal e pimenta moída na hora."
    ],
    tip: "Sirva com pão rústico ou torrada artesanal."
  }
];

// ESTADO DA APLICAÇÃO
let favorites = JSON.parse(localStorage.getItem('cozinha_favs')) || [];
let activeFilter = 'all';

// ELEMENTOS DOM
const recipesGrid = document.getElementById('recipesGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterChips = document.querySelectorAll('.filter-chip');
const favCountEl = document.getElementById('favCount');
const modal = document.getElementById('recipeModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalContent = document.getElementById('modalContent');
const openFavsBtn = document.getElementById('openFavsBtn');

// INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
  renderRecipes(recipes);
  updateFavBadge();

  // EVENTOS DE FILTRO E BUSCA
  filterChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      filterChips.forEach(c => c.classList.remove('active'));
      e.target.classList.add('active');
      activeFilter = e.target.dataset.filter;
      applyFilters();
    });
  });

  searchInput.addEventListener('input', applyFilters);
  searchBtn.addEventListener('click', applyFilters);

  closeModalBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  openFavsBtn.addEventListener('click', showFavorites);
});

// APLICAR FILTROS DE BUSCA E CATEGORIA
function applyFilters() {
  const query = searchInput.value.toLowerCase().trim();
  
  const filtered = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(query) ||
                          recipe.ingredients.some(i => i.name.toLowerCase().includes(query));
    
    const matchesCategory = activeFilter === 'all' || recipe.category === activeFilter;

    return matchesSearch && matchesCategory;
  });

  renderRecipes(filtered);
}

// RENDERIZAR CARDS DE RECEITA
function renderRecipes(list) {
  recipesGrid.innerHTML = '';

  if (list.length === 0) {
    recipesGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <h3>Nenhuma receita encontrada 🍳</h3>
        <p>Tente buscar por outro ingrediente ou termo.</p>
      </div>
    `;
    return;
  }

  list.forEach(recipe => {
    const isFav = favorites.includes(recipe.id);
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
      <div class="card-image-wrap">
        <img src="${recipe.image}" alt="${recipe.title}" loading="lazy" />
        <span class="card-tag">${recipe.categoryLabel}</span>
        <button class="btn-fav" onclick="toggleFavorite(event, ${recipe.id})">
          ${isFav ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="card-content" onclick="openRecipeModal(${recipe.id})">
        <h3 class="card-title">${recipe.title}</h3>
        <p class="card-desc">${recipe.description}</p>
        <div class="card-meta">
          <span>⏱️ ${recipe.time}</span>
          <span>🍽️ ${recipe.servings} porções</span>
        </div>
      </div>
    `;
    recipesGrid.appendChild(card);
  });
}

// GERENCIAR FAVORITOS
function toggleFavorite(event, id) {
  event.stopPropagation();
  if (favorites.includes(id)) {
    favorites = favorites.filter(favId => favId !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem('cozinha_favs', JSON.stringify(favorites));
  updateFavBadge();
  applyFilters();
}

function updateFavBadge() {
  favCountEl.textContent = favorites.length;
}

function showFavorites() {
  const favRecipes = recipes.filter(r => favorites.includes(r.id));
  renderRecipes(favRecipes);
}

// ABRIR MODAL COM DETALHES E CÁLCULO DE PORÇÃO
function openRecipeModal(id) {
  const recipe = recipes.find(r => r.id === id);
  if (!recipe) return;

  let currentServings = recipe.servings;

  function renderModalBody() {
    const scaleFactor = currentServings / recipe.servings;

    modalContent.innerHTML = `
      <div class="modal-hero">
        <img src="${recipe.image}" alt="${recipe.title}" />
      </div>
      <div class="modal-details">
        <h2 style="font-family: var(--font-heading); font-size: 2rem; color: var(--primary-dark);">${recipe.title}</h2>
        <p style="color: var(--text-muted); margin-top: 0.5rem;">${recipe.description}</p>

        <div class="modal-header-meta">
          <span>⏱️ Tempo: ${recipe.time}</span>
          <span>🏷️ ${recipe.categoryLabel}</span>
        </div>

        <!-- RECALCULADOR DE PORÇÕES -->
        <div class="portion-controls">
          <strong>Porções:</strong>
          <button class="portion-btn" id="decPortion">-</button>
          <span style="font-weight: bold; font-size: 1.1rem; padding: 0 0.5rem;">${currentServings}</span>
          <button class="portion-btn" id="incPortion">+</button>
        </div>

        <!-- LISTA DE INGREDIENTES -->
        <div class="ingredients-list">
          <h3 style="font-family: var(--font-heading); margin-bottom: 1rem; color: var(--primary-dark);">Ingredientes</h3>
          <ul>
            ${recipe.ingredients.map(ing => {
              const qty = (ing.baseQty * scaleFactor).toLocaleString('pt-BR', { maximumFractionDigits: 2 });
              return `
                <li>
                  <input type="checkbox" />
                  <span><strong>${qty}</strong> ${ing.name}</span>
                </li>
              `;
            }).join('')}
          </ul>
        </div>

        <!-- PASSO A PASSO -->
        <div class="steps-list">
          <h3 style="font-family: var(--font-heading); margin-bottom: 1rem; color: var(--primary-dark);">Modo de Preparo</h3>
          <ol>
            ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
          </ol>
        </div>

        <!-- DICA DA RITA -->
        ${recipe.tip ? `
          <div style="background: var(--accent-light); padding: 1rem; border-radius: 8px; border-left: 4px solid var(--primary-blue);">
            <strong>💡 Truque de Ouro:</strong> ${recipe.tip}
          </div>
        ` : ''}
      </div>
    `;

    // Eventos de alteração de porção
    document.getElementById('decPortion').addEventListener('click', () => {
      if (currentServings > 1) {
        currentServings--;
        renderModalBody();
      }
    });

    document.getElementById('incPortion').addEventListener('click', () => {
      currentServings++;
      renderModalBody();
    });
  }

  renderModalBody();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}
