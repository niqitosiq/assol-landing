<script>
  import { onMount } from 'svelte';

  export let locations = [
    {
      latitude: 55.75361503443606,
      longitude: 37.620883000000006,
      name: 'Мы находимя тут!',
    },
  ];

  export let center = [55.75361503443606, 37.620883000000006];
  export let zoom = 17;

  function loadMap() {
    var myMap = new ymaps.Map('map', {
      center: center,
      zoom: zoom,
      controls: [],
    });
    const points = myMap.geoObjects;
    locations.forEach(location => {
      points.add(
        new ymaps.Placemark(
          [location.latitude, location.longitude],
          { balloonContent: location.name },
          {
            preset: 'islands#redDotIcon',
          },
        ),
      );
    });
  }

  onMount(() => {
    ymaps.ready(() => {
      loadMap();
    });
  });
</script>

<svelte:head>
  <script
    src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=cf1b8beb-bb0c-4563-9d28-c603002dd2ad"
    type="text/javascript">
  </script>
</svelte:head>

<div id="map" />

<style>
  #map {
    width: 100%;
    height: 100%;
  }
</style>
