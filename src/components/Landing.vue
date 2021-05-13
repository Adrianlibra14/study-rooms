<template>
  <div class="landing">
    <div class="landing__container">
      <div class="landing__title">
        <h1 class="landing__main-text">
          Formación online para
          <span class="landing__main-text landing__main-text-active"
            >Profesionales TIC
          </span>
        </h1>
        <h2 class="landing__subtitle">
          Sea dueño de su futuro aprendiendo nuevas habilidades en línea
        </h2>
        <div class="landing__search">
          <input
            class="landing__search-input"
            type="text"
            placeholder="¿Que quieres aprender hoy?"
          />
        </div>
        <ul class="landing__list">
          <li class="list__item">Más de dos millones de estudiantes</li>
          <li class="list__item">Más de 30.000 cursos</li>
          <li class="list__item">Aprende cualquier cosa en línea</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
};
</script>

<style scoped>
@media (max-width: 767px) {
  .landing {
    background-image: url("../assets/img/Inicio/Grupo.png");
    background-size: cover;
  }

  .landing__container {
    padding: 92px 20px 20px 20px;
  }

  .landing__title {
    text-align: center;
  }

  .landing__main-text {
    display: flex;
    flex-direction: column;
    font-size: 42px;
    color: #ffffff;
  }

  .landing__main-text-active {
    color: #fbad49;
  }

  .landing__subtitle {
    color: #ffffff;
    font-size: 26px;
    padding: 24px 0px;
    font-weight: 300;
  }

  .landing__search {
    display: block;
  }

  .landing__search-input {
    width: 100%;
    font-size: 16px;
    text-align: center;
    font-style: italic;
    padding: 20px;
    border: none;
    border-radius: 34px;
    position: relative;
  }

  .landing__list {
    padding: 30px 0px;
    list-style: none;
  }

  .list__item {
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
  }
}

@media (min-width: 768px) {
  .landing {
    background-image: url("../assets/img/Inicio/Grupo.png");
    background-size: cover;
  }

  .landing__container {
    padding: 92px 20px 20px 20px;
  }

  .landing__title {
    text-align: left;
  }

  .landing__main-text {
    display: flex;
    flex-direction: column;
    font-size: 62px;
    color: #ffffff;
  }

  .landing__main-text-active {
    color: #fbad49;
  }

  .landing__subtitle {
    color: #ffffff;
    font-size: 26px;
    width: 410px;
    padding: 24px 0px;
    font-weight: 300;
  }

  .landing__search {
    display: inline-block;
  }

  .landing__search-input {
    width: 410px;
    font-size: 16px;
    text-align: center;
    font-style: italic;
    padding: 20px;
    border: none;
    border-radius: 34px;
    position: relative;
  }

  .landing__list {
    padding: 30px 0px;
    list-style: none;
  }

  .list__item {
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
  }
}

@media (min-width: 992px) {
  .landing {
    background-image: url("../assets/img/Inicio/Grupo.png");
    background-size: cover;
  }

  .landing__container {
    padding: 92px 20px 20px 20px;
  }

  .landing__title {
    text-align: left;
  }

  .landing__main-text {
    display: flex;
    flex-direction: column;
    font-size: 62px;
    color: #ffffff;
  }

  .landing__main-text-active {
    color: #fbad49;
  }

  .landing__subtitle {
    color: #ffffff;
    font-size: 26px;
    width: 410px;
    padding: 24px 0px;
    font-weight: 300;
  }

  .landing__search {
    display: inline-block;
  }

  .landing__search-input {
    width: 410px;
    font-size: 16px;
    text-align: center;
    font-style: italic;
    padding: 20px;
    border: none;
    border-radius: 34px;
    position: relative;
  }

  .landing__list {
    padding: 30px 0px;
    list-style: none;
  }

  .list__item {
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
  }
}

@media (min-width: 1200px) {
  .landing {
    background-image: url("../assets/img/Inicio/Grupo.png");
    background-size: cover;
  }

  .landing__container {
    padding: 92px 20px 20px 20px;
  }

  .landing__title {
    text-align: left;
  }

  .landing__main-text {
    display: flex;
    flex-direction: column;
    font-size: 62px;
    color: #ffffff;
  }

  .landing__main-text-active {
    color: #fbad49;
  }

  .landing__subtitle {
    color: #ffffff;
    font-size: 26px;
    width: 410px;
    padding: 24px 0px;
    font-weight: 300;
  }

  .landing__search {
    display: inline-block;
  }

  .landing__search-input {
    width: 410px;
    font-size: 16px;
    text-align: center;
    font-style: italic;
    padding: 20px;
    border: none;
    border-radius: 34px;
    position: relative;
  }

  .landing__list {
    padding: 30px 0px;
    list-style: none;
  }

  .list__item {
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
  }
}
</style>