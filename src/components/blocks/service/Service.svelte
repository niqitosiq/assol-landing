<script>
  import Header from '../../ui/Header.svelte';
  import Image from 'svelte-image';

  const header = {
    name: 'СЕРВИС',
    header: 'Мы предлагаем ',
  };
</script>

<div id="service" class="container">
  <Header {...header} />
  <div class="services">
    <div class="service">
      <div class="service-wrapper">
        <div class="image">
          <Image src="/g/img/services/1.jpg" />
        </div>
        <div class="description">
          <h3>Упаковка</h3>
          <p>Мы уже X-лет на рынке. Используя этот опыт</p>
        </div>
      </div>
    </div>
    <div class="service">
      <div class="service-wrapper">
        <div class="image">
          <Image src="/g/img/services/2.jpg" />
        </div>
        <div class="description">
          <h3>Упаковка</h3>
          <p>Мы уже X-лет на рынке. Используя этот опыт</p>
        </div>
      </div>
    </div>
    <div class="service">
      <div class="service-wrapper">
        <div class="image">
          <Image src="/g/img/services/3.jpg" />
        </div>
        <div class="description">
          <h3>Упаковка</h3>
          <p>Мы уже X-лет на рынке. Используя этот опыт</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  #service {
    margin-top: 130px;
    margin-bottom: 150px;
  }
  .services {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    @media screen and (max-width: 1243px) {
      flex-direction: column;
      align-items: center;
    }
  }
  .service {
    max-width: 402px;
    height: 159px;
    padding: 5px;
    position: relative;
    @media screen and (max-width: 1243px) {
      margin-bottom: 10px;
    }
    &-wrapper {
      height: 147px;
      display: flex;
      position: relative;
      align-items: center;
      z-index: 2;
      transition: transform ease 0.7s;
      &:after {
        content: '';
        box-sizing: border-box;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        border: 1px solid #e3e3e3;
        border-radius: 4px;
        pointer-events: none;
      }
    }
    &:after,
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #fff;
      border-radius: 5px;
      border-radius: 5px;
      z-index: 1;
    }
    &:after {
      box-shadow: 0px 5.58354px 19.5424px rgba(0, 0, 0, 0.05);
      left: 0;
      top: 0;
      transition: transform ease 0.7s;
      transform: translateY(0px);
    }
    &:before {
      box-shadow: 0px 3.08491px 79.705px rgba(0, 0, 0, 0.1);
      top: 5px;
      left: 5px;
      width: calc(100% - 10px);
      transition: transform ease 1s;
      transform: translateY(0px);
      transform-origin: center bottom;
    }
    &:hover {
      &:after,
      .service-wrapper {
        transform: translateY(-5px);
      }
      &:before {
        transform: translateY(-4px);
      }
    }
  }
  .image {
    flex-shrink: 0;
    width: 170px;
    height: 100%;
    margin-right: 26px;
  }

  h3 {
    font-weight: 600;
    font-size: 25px;
    color: #de031c;
  }
  p {
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #292929;
    opacity: 0.7;
    margin-top: 10px;
  }
</style>
