let mapsConfig = [
  { id: "map", center: [51.674114, 36.145359] }, // Первая карта
];

if (mapsConfig.some(map => document.getElementById(map.id))) {
  ymaps.ready(initMaps);
}

function initMaps() {
  mapsConfig.forEach(({ id, center }) => {
    const mapElement = document.getElementById(id);

    if (mapElement) {
      const map = new ymaps.Map(id, {
        center: center,
        zoom: 16,
      });

      configureMap(map);
      addPlacemark(map, center);
      ensureMapVisibility(map);
    }
  });
}

// Настройки для карт
function configureMap(map) {
  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим

  map.controls.remove('rulerControl'); // удаляем контрол правил
}

// Добавление метки
function addPlacemark(map, center) {
  let placemark = new ymaps.Placemark(center, {});
  map.geoObjects.add(placemark);
}

// Проверка видимости карты
function ensureMapVisibility(map) {
  setTimeout(() => {
    map.container.fitToViewport(); // Корректировка размеров карты
  }, 100); // Небольшая задержка для обеспечения доступности контейнера
}
