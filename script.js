const apartments = [
  { id: 1, title: 'Тихая квартира у Патриарших', district: 'Пресненский район', address: 'Большой Патриарший переулок, 8', price: 78000, rooms: 1, area: 42, floor: '4 из 8', rating: 4.98, reviews: 24, badge: 'Выбор недели', image: 'photo-1600210492486-724fe5c67fb0', balcony: true, pets: false, isNew: false, furnished: true, description: 'Светлая квартира с высокими потолками и видом на тихий переулок. Вся мебель и техника уже на месте: можно заехать хоть завтра. До метро «Маяковская» — 8 минут пешком.', amenities: ['Балкон', 'Посудомоечная машина', 'Кондиционер', 'Можно с детьми'] },
  { id: 2, title: 'Светлая двушка на Остоженке', district: 'Хамовники', address: 'Коробейников переулок, 18', price: 112000, rooms: 2, area: 64, floor: '6 из 9', rating: 4.96, reviews: 18, badge: 'С мебелью', image: 'photo-1600607687939-ce8a6c25118c', balcony: true, pets: true, isNew: true, furnished: true, description: 'Продуманная планировка, отдельная спальня и просторная кухня-гостиная. В доме есть консьерж и закрытый двор. Рядом набережная и всё необходимое для жизни.', amenities: ['Балкон', 'Можно с питомцем', 'Консьерж', 'Тёплый пол'] },
  { id: 3, title: 'Минимализм и свет у метро', district: 'Якиманка', address: 'Коровий Вал, 3', price: 95000, rooms: 2, area: 58, floor: '9 из 14', rating: 4.91, reviews: 31, badge: 'Новинка', image: 'photo-1600566753086-00f18fb6b3ea', balcony: false, pets: true, isNew: true, furnished: true, description: 'Свежий ремонт в спокойных натуральных оттенках. Много света, вместительные системы хранения и отдельная рабочая зона. До парка Горького — 10 минут.', amenities: ['Рабочее место', 'Можно с питомцем', 'Лифт', 'Кондиционер'] },
  { id: 4, title: 'Дом с террасой и видом на город', district: 'Тверской район', address: '1-я Тверская-Ямская, 21', price: 145000, rooms: 3, area: 91, floor: '12 из 16', rating: 4.99, reviews: 12, badge: 'Особенная', image: 'photo-1600607687920-4e2a09cf159d', balcony: true, pets: false, isNew: false, furnished: true, description: 'Просторная квартира для тех, кому важно личное пространство. Панорамные окна, уютная терраса и полностью оборудованная кухня. Метро буквально за углом.', amenities: ['Терраса', 'Панорамные окна', 'Паркинг', 'Кондиционер'] },
  { id: 5, title: 'Уютная студия в тихом центре', district: 'Басманный район', address: 'Покровка, 14', price: 89000, rooms: 1, area: 39, floor: '3 из 5', rating: 4.89, reviews: 27, badge: 'Можно с питомцем', image: 'photo-1600210491369-e753d80a41f3', balcony: false, pets: true, isNew: false, furnished: true, description: 'Камерный дом, тихий зелёный двор и любимые кофейни в двух шагах. В студии грамотно зонировано пространство: полноценная кухня, место для отдыха и работы.', amenities: ['Можно с питомцем', 'Рабочее место', 'Стиральная машина', 'Кладовая'] },
  { id: 6, title: 'Двушка у набережной', district: 'Дорогомилово', address: 'Кутузовский проспект, 12', price: 105000, rooms: 2, area: 67, floor: '7 из 12', rating: 4.94, reviews: 16, badge: 'После ремонта', image: 'photo-1600607687644-c7171b42498f', balcony: true, pets: false, isNew: true, furnished: true, description: 'Квартира с отдельной кухней и большим балконом. Свежий ремонт, новая техника, удобная транспортная доступность. Прогулочная набережная начинается у дома.', amenities: ['Балкон', 'Новая техника', 'Закрытый двор', 'Лифт'] },
  { id: 7, title: 'Семейная квартира в зелёном дворе', district: 'Сокольники', address: 'Русаковская улица, 25', price: 72000, rooms: 3, area: 76, floor: '5 из 9', rating: 4.87, reviews: 21, badge: 'Для семьи', image: 'photo-1600566753190-17f0baa2a6c3', balcony: true, pets: true, isNew: false, furnished: true, description: 'Три изолированные комнаты, спокойный двор и парк в пешей доступности. Хозяева бережно подготовили квартиру и готовы обсудить проживание с питомцами.', amenities: ['Балкон', 'Можно с питомцем', 'Парк рядом', 'Можно с детьми'] },
  { id: 8, title: 'Лофт с большими окнами', district: 'Даниловский район', address: 'Дербеневская набережная, 7', price: 118000, rooms: 2, area: 71, floor: '4 из 6', rating: 4.95, reviews: 9, badge: 'Лофт', image: 'photo-1600607687939-ce8a6c25118c', balcony: false, pets: true, isNew: true, furnished: true, description: 'Высокие потолки, кирпичная стена и много воздуха. Закрытая территория бывшей фабрики стала уютным кварталом с кафе и студиями. Идеально для работы из дома.', amenities: ['Высокие потолки', 'Можно с питомцем', 'Коворкинг', 'Охрана'] },
  { id: 9, title: 'Квартира с видом на бульвар', district: 'Мещанский район', address: 'Цветной бульвар, 19', price: 128000, rooms: 2, area: 62, floor: '8 из 10', rating: 4.93, reviews: 14, badge: 'Редкая находка', image: 'photo-1600607687920-4e2a09cf159d', balcony: true, pets: false, isNew: false, furnished: true, description: 'Большие окна выходят на зелёный бульвар. Внутри — спокойный интерьер, удобное хранение и полностью оборудованная кухня. Центр города, но дома тихо.', amenities: ['Балкон', 'Вид на бульвар', 'Кондиционер', 'Консьерж'] },
  { id: 10, title: 'Компактная однушка у парка', district: 'Проспект Вернадского', address: 'Ленинский проспект, 105', price: 64000, rooms: 1, area: 38, floor: '2 из 12', rating: 4.84, reviews: 33, badge: 'Выгодная цена', image: 'photo-1600210492486-724fe5c67fb0', balcony: true, pets: true, isNew: false, furnished: true, description: 'Ухоженная квартира рядом с парком и метро. Есть балкон, мебель и бытовая техника. Собственник открыт к долгосрочной аренде и проживанию с животными.', amenities: ['Балкон', 'Можно с питомцем', 'Парк рядом', 'Лифт'] }
];

const grid = document.querySelector('#listing-grid');
const resultCount = document.querySelector('#result-count');
const savedCount = document.querySelector('#saved-count');
const filterButtons = [...document.querySelectorAll('.filter-chip')];
const clearButton = document.querySelector('#clear-filters');
const loadMoreButton = document.querySelector('#load-more');
const listingLayout = document.querySelector('#listing-layout');
let activeFilter = 'all';
let searchTerm = '';
let visibleCount = 6;
let showingSaved = false;
let favorites = new Set(readFavorites());

function readFavorites() {
  try { return JSON.parse(localStorage.getItem('kluch-favorites') || '[]'); }
  catch { return []; }
}

function formatPrice(price) {
  return new Intl.NumberFormat('ru-RU').format(price);
}

function icon(name, size = 14) {
  const paths = {
    heart: '<path d="M20.8 8.7c0 4.1-8.8 10-8.8 10s-8.8-5.9-8.8-10A4.7 4.7 0 0 1 12 6.4a4.7 4.7 0 0 1 8.8 2.3Z"/>',
    pin: '<path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.3"/>',
    star: '<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/>',
    bed: '<path d="M3 18v-7h18v7M3 14h18M6 11V7h5v4m2 0V9h5v2M3 18v2m18-2v2"/>',
    area: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 4v4m3-4v2m3-2v4m-6 12v-4m3 4v-2m3 2v-4M4 9h4M4 12h2m-2 3h4m12-6h-4m4 3h-2m2 3h-4"/>',
    arrow: '<path d="M5 12h14m-7-7 7 7-7 7"/>',
    photo: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9" r="1.5"/><path d="m21 15-5-5L5 20"/>',
    check: '<path d="m5 12 4 4L19 6"/>'
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || ''}</svg>`;
}

function getFilteredApartments() {
  let result = apartments.filter((apartment) => {
    const query = searchTerm.toLocaleLowerCase('ru');
    const matchesSearch = !query || `${apartment.title} ${apartment.district} ${apartment.address}`.toLocaleLowerCase('ru').includes(query);
    const matchesFilter = activeFilter === 'all' ||
      (activeFilter === 'balcony' && apartment.balcony) ||
      (activeFilter === 'pets' && apartment.pets) ||
      (activeFilter === 'new' && apartment.isNew) ||
      (activeFilter === 'furnished' && apartment.furnished) ||
      (activeFilter === 'saved' && favorites.has(apartment.id));
    const matchesRooms = document.querySelector('#rooms-select').value === 'any' || apartment.rooms === Number(document.querySelector('#rooms-select').value);
    const budget = document.querySelector('#budget-select').value;
    return matchesSearch && matchesFilter && matchesRooms && (budget === 'any' || apartment.price <= Number(budget));
  });

  const sort = document.querySelector('#sort-select').value;
  if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
  if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);
  return result;
}

function cardMarkup(apartment, index) {
  const favorite = favorites.has(apartment.id);
  return `<article class="listing-card" style="animation-delay:${Math.min(index * 45, 270)}ms" data-apartment="${apartment.id}">
    <div class="listing-photo"><img src="https://images.unsplash.com/${apartment.image}?auto=format&fit=crop&w=900&q=82" alt="Интерьер: ${apartment.title}" loading="lazy"><span class="photo-shade"></span><span class="photo-badge ${apartment.id === 1 ? 'featured' : ''}">${apartment.badge}</span>
      <button class="favorite-btn ${favorite ? 'is-favorite' : ''}" data-favorite="${apartment.id}" type="button" aria-label="${favorite ? 'Убрать из избранного' : 'Добавить в избранное'}" aria-pressed="${favorite}">${icon('heart', 17)}</button>
      <span class="photo-counter">${icon('photo', 13)} 1 / 6</span>
    </div>
    <div class="listing-info"><div class="listing-overline"><span>${apartment.rooms === 1 ? '1-комнатная' : `${apartment.rooms}-комнатная`} · ${apartment.area} м²</span><span class="rating">${icon('star', 12)} ${apartment.rating} <span style="font-weight:400;color:#879088">(${apartment.reviews})</span></span></div>
      <h3 class="listing-title">${apartment.title}</h3><div class="listing-location">${icon('pin', 12)}<span>${apartment.district}, ${apartment.address}</span></div>
      <div class="listing-details"><span class="detail-item">${icon('bed', 14)} ${apartment.rooms} ${apartment.rooms === 1 ? 'комната' : 'комнаты'}</span><span class="detail-item">${icon('area', 13)} ${apartment.area} м²</span><span class="detail-item">этаж ${apartment.floor}</span></div>
      <div class="listing-bottom"><div class="price">${formatPrice(apartment.price)} ₽ <small>/ месяц</small></div><button class="card-link" type="button" data-details="${apartment.id}">Подробнее ${icon('arrow', 14)}</button></div>
    </div>
  </article>`;
}

function render() {
  const filtered = getFilteredApartments();
  const shown = filtered.slice(0, visibleCount);
  resultCount.textContent = `${filtered.length} ${pluralize(filtered.length, ['квартира', 'квартиры', 'квартир'])} · объявления проверены`;
  savedCount.textContent = favorites.size;
  clearButton.hidden = activeFilter === 'all' && !searchTerm && document.querySelector('#rooms-select').value === 'any' && document.querySelector('#budget-select').value === 'any';
  loadMoreButton.parentElement.hidden = shown.length >= filtered.length || filtered.length === 0;
  if (!shown.length) {
    grid.innerHTML = `<div class="empty-state"><span class="empty-icon">${icon('pin', 20)}</span><h3>Пока ничего не нашлось</h3><p>Попробуйте изменить район или ослабить фильтры.</p><button class="empty-reset" type="button" data-reset>Сбросить параметры поиска</button></div>`;
    return;
  }
  grid.innerHTML = shown.map(cardMarkup).join('');
}

function pluralize(number, forms) {
  const mod100 = number % 100;
  if (mod100 >= 11 && mod100 <= 14) return forms[2];
  const mod10 = number % 10;
  if (mod10 === 1) return forms[0];
  if (mod10 >= 2 && mod10 <= 4) return forms[1];
  return forms[2];
}

function setFilter(filter) {
  activeFilter = filter;
  showingSaved = filter === 'saved';
  filterButtons.forEach((button) => button.classList.toggle('active', button.dataset.filter === filter));
  visibleCount = 6;
  render();
}

function showToast(message) {
  const root = document.querySelector('#toast-root');
  root.innerHTML = `<div class="toast">${icon('check', 16)}<span>${message}</span></div>`;
  window.setTimeout(() => {
    const toast = root.querySelector('.toast');
    if (!toast) return;
    toast.classList.add('is-leaving');
    window.setTimeout(() => root.replaceChildren(), 260);
  }, 2500);
}

function toggleFavorite(id) {
  if (favorites.has(id)) {
    favorites.delete(id);
    showToast('Убрали из избранного');
  } else {
    favorites.add(id);
    showToast('Сохранили в избранное');
  }
  localStorage.setItem('kluch-favorites', JSON.stringify([...favorites]));
  render();
}

function openDetails(id) {
  const apartment = apartments.find((item) => item.id === id);
  if (!apartment) return;
  const root = document.querySelector('#modal-root');
  root.innerHTML = `<div class="modal-backdrop" data-backdrop><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <button class="modal-close" type="button" aria-label="Закрыть окно" data-close><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button>
    <img class="modal-cover" src="https://images.unsplash.com/${apartment.image}?auto=format&fit=crop&w=1400&q=88" alt="Интерьер: ${apartment.title}">
    <div class="modal-content"><div class="modal-topline"><span>${apartment.rooms === 1 ? '1-комнатная квартира' : `${apartment.rooms}-комнатная квартира`} · ${apartment.area} м²</span><span class="rating">${icon('star', 13)} ${apartment.rating} (${apartment.reviews} отзывов)</span></div>
      <h2 class="modal-title" id="modal-title">${apartment.title}</h2><div class="modal-location">${icon('pin', 13)}${apartment.district}, ${apartment.address}</div>
      <p class="modal-description">${apartment.description}</p><div class="modal-amenities">${apartment.amenities.map((amenity) => `<span class="amenity">${amenity}</span>`).join('')}</div>
      <div class="modal-booking"><div class="modal-price">${formatPrice(apartment.price)} ₽ <small>/ месяц</small></div><button class="book-button" type="button" data-book="${apartment.id}">Записаться на просмотр ${icon('arrow', 15)}</button></div>
    </div></section></div>`;
  document.body.classList.add('modal-open');
  root.querySelector('[data-close]').focus();
}

function closeModal() {
  document.querySelector('#modal-root').replaceChildren();
  document.body.classList.remove('modal-open');
}

grid.addEventListener('click', (event) => {
  const favoriteButton = event.target.closest('[data-favorite]');
  const detailsButton = event.target.closest('[data-details]');
  const resetButton = event.target.closest('[data-reset]');
  if (favoriteButton) toggleFavorite(Number(favoriteButton.dataset.favorite));
  if (detailsButton) openDetails(Number(detailsButton.dataset.details));
  if (resetButton) resetSearch();
});

filterButtons.forEach((button) => button.addEventListener('click', () => setFilter(button.dataset.filter)));
document.querySelector('#saved-filter').addEventListener('click', () => setFilter(showingSaved ? 'all' : 'saved'));
document.querySelector('#sort-select').addEventListener('change', render);
document.querySelector('#rooms-select').addEventListener('change', render);
document.querySelector('#budget-select').addEventListener('change', render);
document.querySelector('#search-form').addEventListener('submit', (event) => {
  event.preventDefault();
  searchTerm = document.querySelector('#city-search').value.trim();
  visibleCount = 6;
  render();
  document.querySelector('#catalog').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('#city-search').addEventListener('input', (event) => {
  if (!event.target.value) { searchTerm = ''; render(); }
});
clearButton.addEventListener('click', resetSearch);
function resetSearch() {
  searchTerm = '';
  activeFilter = 'all';
  showingSaved = false;
  visibleCount = 6;
  document.querySelector('#city-search').value = '';
  document.querySelector('#rooms-select').value = 'any';
  document.querySelector('#budget-select').value = 'any';
  filterButtons.forEach((button) => button.classList.toggle('active', button.dataset.filter === 'all'));
  render();
}

loadMoreButton.addEventListener('click', () => { visibleCount += 4; render(); });
document.querySelector('#map-toggle').addEventListener('click', (event) => {
  const button = event.currentTarget;
  const active = listingLayout.classList.toggle('with-map');
  button.classList.toggle('active', active);
  button.setAttribute('aria-pressed', String(active));
});
document.querySelector('.map-panel').addEventListener('click', (event) => {
  const marker = event.target.closest('[data-map-index]');
  if (marker) openDetails(apartments[Number(marker.dataset.mapIndex)].id);
});
document.querySelector('#modal-root').addEventListener('click', (event) => {
  if (event.target.matches('[data-backdrop]') || event.target.closest('[data-close]')) closeModal();
  const bookButton = event.target.closest('[data-book]');
  if (bookButton) {
    const apartment = apartments.find((item) => item.id === Number(bookButton.dataset.book));
    closeModal();
    showToast(`Заявка на просмотр отправлена. Скоро позвоним!`);
  }
});
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); });
document.querySelector('#mobile-menu').addEventListener('click', (event) => {
  const button = event.currentTarget;
  const nav = document.querySelector('#main-nav');
  const open = nav.classList.toggle('is-open');
  button.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('#main-nav a').forEach((link) => link.addEventListener('click', () => {
  document.querySelector('#main-nav').classList.remove('is-open');
  document.querySelector('#mobile-menu').setAttribute('aria-expanded', 'false');
}));

render();