<script>
  let menu = [
    {
      link: '/#',
      label: 'О компании',
    },
    {
      link: '/#',
      label: 'Сервис',
    },
    {
      link: '/#',
      label: 'Услуги',
    },
    {
      link: '/#',
      label: 'Фотогалерея',
    },
    {
      link: '/#',
      label: 'Контакты',
    },
  ];
</script>

<ul class="menu">
  {#each menu as { link, label }}
    <li class="item">
      <a href={link}>
        <span>{label}</span>
      </a>
    </li>
  {/each}
</ul>

<style lang="scss">
  .menu {
    position: relative;
    display: flex;
    width: 730px;
    height: 50px;
    justify-content: center;
    align-items: center;

    &:after,
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 7px;
      left: 0;
      top: 0;
      z-index: 1;
    }
    &:after {
      background-color: #f4f4f4;
    }
    &:before {
      background: #c9c9c9;
      opacity: 0.6;
      box-shadow: 0px 13.3472px 24.4699px rgba(0, 0, 0, 0.15);
      border-radius: 7.22975px;
      top: 3px;
      left: 9px;
      width: calc(100% - 18px);
    }
  }
  .item {
    height: 100%;
    position: relative;
    z-index: 2;
    font-size: 16px;
    font-weight: 400;
    color: #333333;
    a {
      display: block;
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      text-align: center;
      padding: 0 25px;
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: #c9c9c9;
        opacity: 0;
        z-index: 1;
        transition: opacity ease 0.3s;
      }
      &:hover {
        &:after {
          opacity: 0.3;
        }
      }
      span {
        position: relative;
        z-index: 2;
      }
    }
  }
</style>
