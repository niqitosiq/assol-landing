<script>
  import Icon from '../ui/Icon.svelte';
  import Link from '../ui/Link.svelte';
</script>

<header>
  <div class="top">
    <Link class="logo" href="/">
      <Icon name="logo" />
      <span>
        Фабрика стильной
        <br />
        мебели «Assoll’»
      </span>
    </Link>
    <Link class="map" href="/#">
      <img class="map-icon" src="/img/map-small.jpg" alt="" />
      <div class="city">
        <span class="city-name"> г. Волгоград </span>
        <span class="city-location"> Краснополянская 32а </span>
      </div>
    </Link>

    <div class="social">
      <span> Мы в соц. сетях: </span>
      <div class="social-icons">
        <Link class="icon instagram" href="#">
          <img src="/icons/instagram.svg" alt="" />
        </Link>
        <Link class="icon viber" href="#">
          <Icon name="viber" />
        </Link>
        <Link class="icon whatsapp" href="#">
          <Icon name="whatsapp" />
        </Link>
      </div>
    </div>
  </div>

  <div class="phone" />
</header>

<style lang="scss">
  .social {
    img {
      width: 21px;
    }
  }
</style>
