<template>
  <div class="data">
    <div class="data__numbers">
      <h2 class="data__number">5000</h2>
      <h4 class="data__text">Aprendices</h4>
    </div>
    <hr class="data__v-border" />
    <div class="data__numbers">
      <h2 class="data__number">7000</h2>
      <h4 class="data__text">Graduados</h4>
    </div>
    <hr class="data__v-border" />
    <div class="data__numbers">
      <h2 class="data__number">2000</h2>
      <h4 class="data__text">Cursos publicados</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Data",
};
</script>

<style scoped>
@media (max-width: 767px) {
  .data {
    padding: 92px 20px 20px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
    background-image: url("../assets/img/Datos/contador.png");
    background-size: cover;
    background-position: center;
  }

  .data__v-border {
    background-color: #ffffff;
    width: 2px;
    border-width: 0;
    display: none;
  }

  .data__numbers {
    margin: 20px 0px;
    width: 307px;
    text-align: center;
  }

  .data__number {
    font-size: 92px;
    color: #ffffff;
  }

  .data__text {
    font-size: 36px;
  }
}

@media (min-width: 768px) {
  .data {
    padding: 92px 20px 20px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
    background-image: url("../assets/img/Datos/contador.png");
    background-size: cover;
    background-position: center;
  }

  .data__v-border {
    background-color: #ffffff;
    width: 2px;
    border-width: 0;
    display: none;
  }

  .data__numbers {
    margin: 20px 0px;
    width: 307px;
    text-align: center;
  }

  .data__number {
    font-size: 92px;
    color: #ffffff;
  }

  .data__text {
    font-size: 36px;
  }
}

@media (min-width: 992px) {
  .data {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
    background-image: url("../assets/img/Datos/contador.png");
    background-size: cover;
    background-position: center;
  }

  .data__v-border {
    background-color: #ffffff;
    width: 2px;
    border-width: 0;
  }

  .data__numbers {
    width: 307px;
    text-align: center;
  }

  .data__number {
    font-size: 92px;
    color: #ffffff;
  }

  .data__text {
    font-size: 36px;
  }
}

@media (min-width: 1200px) {
  .data {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
    background-image: url("../assets/img/Datos/contador.png");
    background-size: cover;
    background-position: center;
  }

  .data__v-border {
    background-color: #ffffff;
    width: 2px;
    border-width: 0;
    display: block;
  }

  .data__numbers {
    width: 307px;
    text-align: center;
  }

  .data__number {
    font-size: 92px;
    color: #ffffff;
  }

  .data__text {
    font-size: 36px;
  }
}
</style>