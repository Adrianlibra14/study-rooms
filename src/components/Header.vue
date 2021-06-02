<template>
  <header class="header">
    <div class="header__logo">
      <img
        class="header__img"
        src="@/assets/img/Header/logo-nav.svg"
        alt=""
        srcset=""
      />
    </div>
    <div class="header__menu-wrapper">
      <input type="checkbox" class="header__toggler" />
      <div class="header__hamburger">
        <div class="header__hamburger-line"></div>
      </div>
      <div class="header__menu">
        <ul class="header__menu-list">
          <li class="header__list-item">
            <router-link to="/" class="header__router"
              >Inicio
            </router-link>
          </li>
          <li class="header__list-item">
            <router-link to="/Nosotros" class="header__router"
              >Nosotros
            </router-link>
          </li>
          <li class="header__list-item">
            <router-link to="/Academia" class="header__router"
              >Academia
            </router-link>
          </li>
          <li class="header__list-item">
            <router-link to="/Cursos" class="header__router"
              >Cursos
            </router-link>
          </li>
          <li class="header__list-item">
            <router-link to="/Datos" class="header__router">Datos </router-link>
          </li>
          <li class="header__list-item">
            <router-link to="/Comentarios" class="header__router"
              >Comentarios
            </router-link>
          </li>
          <li class="header__list-item">
            <router-link to="/Pie-de-pagina" class="header__router"
              >Footer
            </router-link>
          </li>
        </ul>
        <div class="header__menu-circle"></div>
      </div>
    </div>
    <div class="header__elements">
      <div class="header__item">
        <h4 class="header__size">
          <router-link to="/" class="header__text">Inicio</router-link>
        </h4>
      </div>

      <div class="header__item">
        <h4 class="header__size">
          <router-link to="/Nosotros" class="header__text"
            >Nosotros</router-link
          >
        </h4>
      </div>

      <div class="header__item">
        <h4 class="header__size">
          <router-link to="/Academia" class="header__text"
            >Academia</router-link
          >
        </h4>
      </div>

      <div class="header__item">
        <h4 class="header__size">
          <router-link to="/Cursos" class="header__text">Cursos</router-link>
        </h4>
      </div>

      <div class="header__item">
        <h4 class="header__size">
          <router-link to="/Datos" class="header__text">Datos</router-link>
        </h4>
      </div>

      <div class="header__item">
        <h4 class="header__size">
          <router-link to="/Comentarios" class="header__text"
            >Comentarios</router-link
          >
        </h4>
      </div>

      <div class="header__item">
        <h4 class="header__size">
          <router-link to="/Pie-de-pagina" class="header__text"
            >Pie de página</router-link
          >
        </h4>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
@media (max-width: 991px) {
  .header {
    position: fixed;
    width: 100%;
    z-index: 1;
    background-color: #fbad49;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 10px;
  }

  .header__logo {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
  }

  .header__img {
    width: 140px;
    z-index: 2;
  }

  .header__elements {
    display: none;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding: 7px;
  }

  .header__item {
    padding: 5px;
    margin: 0 16px;
  }

  .header__text {
    color: #ffffff;
  }

  .header__text-active {
    color: #1d1f36;
    position: relative;
  }

  .header__text-active::before {
    content: "";
    position: absolute;
    bottom: -10px;
    width: 18px;
    height: 3px;
    opacity: 1;
    background-color: #1d1f36;
  }

  /* HAMBURGER MENU */

  .header__menu-wrapper {
    position: relative;
  }

  .header__toggler {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 35px;
    cursor: pointer;
    opacity: 0;
    z-index: 3;
  }

  .header__hamburger {
    width: 50px;
    height: 45px;
    padding: 13px;
    background: #fbad49;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header__hamburger-line {
    position: relative;
    width: 100%;
    height: 2px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
    z-index: 2;
  }

  .header__hamburger-line::before,
  .header__hamburger-line::after {
    content: "";
    position: absolute;
    top: -10px;
    width: 100%;
    height: 2px;
    background-color: inherit;
  }

  .header__hamburger-line::after {
    top: 10px;
  }

  .header__toggler:checked + .header__hamburger > .header__hamburger-line {
    transform: rotate(135deg);
  }

  .header__toggler:checked
    + .header__hamburger
    > .header__hamburger-line::before,
  .header__toggler:checked
    + .header__hamburger
    > .header__hamburger-line::after {
    top: 0;
    transform: rotate(90deg);
  }

  .header__toggler:checked:hover
    + .header__hamburger
    > .header__hamburger-line {
    transform: rotate(225deg);
  }

  .header__menu {
    position: fixed;
    top: 65px;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header__list-item {
    padding: 4px 20px;
    cursor: pointer;
  }

  .header__router {
    text-decoration: none;
    color: #fff;
  }

  .header__menu-list {
    z-index: 2;
    list-style: none;
    opacity: 0;
    transition: all 0.5s ease;
  }

  .header__toggler:checked ~ .header__menu > .header__menu-list {
    opacity: 1;
  }

  .header__menu-circle {
    transform: scale(0);
    position: fixed;
    width: 267px;
    height: 500px;
    top: -190px;
    right: -89px;
    border-radius: 50%;
    background-color: #fbad49;
    transition: all 0.5s ease;
  }

  .header__toggler:checked ~ .header__menu > .header__menu-circle {
    transform: scale(1);
  }
}

@media (min-width: 992px) {
  .header {
    position: fixed;
    width: 100%;
    z-index: 1;
    background-color: #fbad49;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 10px;
  }

  .header__logo {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
  }

  .header__img {
    width: 140px;
  }

  .header__elements {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding: 7px;
  }

  .header__item {
    padding: 5px;
    margin: 0 16px;
  }

  .header__text {
    color: #ffffff;
    text-decoration: none;
    position: relative;
    transition: all 0.2s ease;
  }

  .header__text::before {
    content: "";
    position: absolute;
    bottom: -10px;
    width: 0px;
    height: 3px;
    opacity: 0;
    background-color: #1d1f36;
    transition: all 0.5s ease;
  }

  .header__text:hover {
    color: #1d1f36;
  }

  .header__text:hover::before {
    width: 18px;
    opacity: 1;
  }

  .header__menu-wrapper {
    position: relative;
    display: none;
  }

  .header__toggler {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 35px;
    cursor: pointer;
    opacity: 0;
    z-index: 3;
  }

  .header__hamburger {
    width: 50px;
    height: 45px;
    padding: 13px;
    background: #fbad49;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header__hamburger-line {
    position: relative;
    width: 100%;
    height: 2px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
    z-index: 2;
  }

  .header__hamburger-line::before,
  .header__hamburger-line::after {
    content: "";
    position: absolute;
    top: -10px;
    width: 100%;
    height: 2px;
    background-color: inherit;
  }

  .header__hamburger-line::after {
    top: 10px;
  }

  .header__toggler:checked + .header__hamburger > .header__hamburger-line {
    transform: rotate(135deg);
  }

  .header__toggler:checked
    + .header__hamburger
    > .header__hamburger-line::before,
  .header__toggler:checked
    + .header__hamburger
    > .header__hamburger-line::after {
    top: 0;
    transform: rotate(90deg);
  }

  .header__toggler:checked:hover
    + .header__hamburger
    > .header__hamburger-line {
    transform: rotate(225deg);
  }

  .header__menu {
    position: fixed;
    opacity: 0;
    top: 65px;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
  }

  .header__list-item {
    padding: 4px 20px;
    cursor: pointer;
    transition: all 0.5s ease;
  }

  .header__router {
    text-decoration: none;
    color: #fff;
  }

  .header__menu-list {
    z-index: 2;
    list-style: none;
  }

  .header__toggler:checked ~ .header__menu {
    opacity: 1;
  }

  .header__menu-circle {
    transform: scale(0);
    position: fixed;
    width: 267px;
    height: 500px;
    top: -190px;
    right: -89px;
    border-radius: 50%;
    background-color: #fbad49;
    transition: all 0.5s ease;
  }

  .header__toggler:checked ~ .header__menu > .header__menu-circle {
    transform: scale(1);
  }
}

@media (min-width: 1200px) {
  .header {
    position: fixed;
    width: 100%;
    z-index: 1;
    background-color: #fbad49;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 50px;
  }

  .header__logo {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
  }

  .header__img {
    width: 140px;
  }

  .header__elements {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    padding: 7px;
  }

  .header__item {
    padding: 5px;
    margin: 0 16px;
  }

  .header__text {
    color: #ffffff;
    text-decoration: none;
    position: relative;
    transition: all 0.2s ease;
  }

  .header__text::before {
    content: "";
    position: absolute;
    bottom: -10px;
    width: 0px;
    height: 3px;
    opacity: 0;
    background-color: #1d1f36;
    transition: all 0.5s ease;
  }

  .header__text:hover {
    color: #1d1f36;
  }

  .header__text:hover::before {
    width: 18px;
    opacity: 1;
  }

  .header__menu-wrapper {
    position: relative;
    display: none;
  }

  .header__toggler {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 35px;
    cursor: pointer;
    opacity: 0;
    z-index: 3;
  }

  .header__hamburger {
    width: 50px;
    height: 45px;
    padding: 13px;
    background: #fbad49;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header__hamburger-line {
    position: relative;
    width: 100%;
    height: 2px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
    z-index: 2;
  }

  .header__hamburger-line::before,
  .header__hamburger-line::after {
    content: "";
    position: absolute;
    top: -10px;
    width: 100%;
    height: 2px;
    background-color: inherit;
  }

  .header__hamburger-line::after {
    top: 10px;
  }

  .header__toggler:checked + .header__hamburger > .header__hamburger-line {
    transform: rotate(135deg);
  }

  .header__toggler:checked
    + .header__hamburger
    > .header__hamburger-line::before,
  .header__toggler:checked
    + .header__hamburger
    > .header__hamburger-line::after {
    top: 0;
    transform: rotate(90deg);
  }

  .header__toggler:checked:hover
    + .header__hamburger
    > .header__hamburger-line {
    transform: rotate(225deg);
  }

  .header__menu {
    position: fixed;
    opacity: 0;
    top: 65px;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
  }

  .header__list-item {
    padding: 4px 20px;
    cursor: pointer;
    transition: all 0.5s ease;
  }

  .header__router {
    text-decoration: none;
    color: #fff;
  }

  .header__menu-list {
    z-index: 2;
    list-style: none;
  }

  .header__toggler:checked ~ .header__menu {
    opacity: 1;
  }

  .header__menu-circle {
    transform: scale(0);
    position: fixed;
    width: 267px;
    height: 500px;
    top: -190px;
    right: -89px;
    border-radius: 50%;
    background-color: #fbad49;
    transition: all 0.5s ease;
  }

  .header__toggler:checked ~ .header__menu > .header__menu-circle {
    transform: scale(1);
  }
}
</style>
