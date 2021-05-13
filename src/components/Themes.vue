<template>
  <div class="themes">
    <div class="themes__container">
      <div class="themes__title">
        <h2 class="themes__main-text">Explora los temas principales</h2>
        <h3 class="themes__subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          iste odit illo molestiae quas minima?
        </h3>
      </div>
      <div class="themes__cards">
        <!-- <img
          class="themes__cards-arrow-left"
          src="@/assets/img/Academia/icon-arrow2.svg"
          alt=""
        /> -->
        <div class="themes__card">
          <img
            class="themes__card-img"
            src="@/assets/img/Academia/icon.svg"
            alt=""
          />
          <h4 class="themes__card-text">Diseño</h4>
          <p class="themes__card-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            aliquid!
          </p>
          <img
            class="themes__card-enter-arrow"
            src="@/assets/img/Academia/icon-arrow.svg"
            alt=""
          />
        </div>
        <div class="themes__card">
          <img
            class="themes__card-img"
            src="@/assets/img/Academia/icon.svg"
            alt=""
          />
          <h4 class="themes__card-text">Diseño</h4>
          <p class="themes__card-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            aliquid!
          </p>
          <img
            class="themes__card-enter-arrow"
            src="@/assets/img/Academia/icon-arrow.svg"
            alt=""
          />
        </div>
        <div class="themes__card">
          <img
            class="themes__card-img"
            src="@/assets/img/Academia/icon.svg"
            alt=""
          />
          <h4 class="themes__card-text">Diseño</h4>
          <p class="themes__card-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            aliquid!
          </p>
          <img
            class="themes__card-enter-arrow"
            src="@/assets/img/Academia/icon-arrow.svg"
            alt=""
          />
        </div>
        <!-- <img
          class="themes__cards-arrow-right"
          src="@/assets/img/Academia/icon-arrow2.svg"
          alt=""
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Themes",
};
</script>

<style scoped>
@media (max-width: 767px) {
  .themes {
    background-color: #fbad49;
    background-image: url("../assets/img/Academia/Grupo1526.png");
    background-size: cover;
  }

  .themes__container {
    padding: 92px 20px 20px 20px;
  }

  .themes__title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8px;
    text-align: center;
    color: #ffffff;
  }

  .themes__main-text {
    font-size: 32px;
  }

  .themes__subtitle {
    /* width: 80%; */
    margin-top: 13px;
    font-weight: 500;
  }

  .themes__cards {
    position: relative;
    padding: 28px 20px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 52px;
  }

  .themes__card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    border-radius: 10px;
    border-bottom: 10px solid #1d1f36;
    padding: 35px 30px;
  }

  .themes__card-img {
    width: 100px;
  }

  .themes__card-text {
    color: #ff7573;
    margin-top: 20px;
    font-size: 28px;
  }

  .themes__card-paragraph {
    text-align: center;
    margin-top: 20px;
    font-size: 22px;
  }

  .themes__card-enter-arrow {
    position: absolute;
    bottom: -40px;
  }

  .themes__cards-arrow-left {
    position: absolute;
    align-self: center;
    margin-left: 48px;
  }

  .themes__cards-arrow-right {
    position: absolute;
    align-self: center;
    justify-self: end;
    margin-right: 48px;
    transform: scaleX(-1);
  }
}

@media (min-width: 768px) {
  .themes {
    background-color: #fbad49;
    background-image: url("../assets/img/Academia/Grupo1526.png");
    background-size: cover;
  }

  .themes__container {
    padding: 92px 20px 20px 20px;
  }

  .themes__title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8px;
    text-align: center;
    color: #ffffff;
  }

  .themes__main-text {
    font-size: 32px;
  }

  .themes__subtitle {
    /* width: 80%; */
    margin-top: 13px;
    font-weight: 500;
  }

  .themes__cards {
    position: relative;
    padding: 28px 140px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 52px;
  }

  .themes__card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    border-radius: 10px;
    border-bottom: 10px solid #1d1f36;
    padding: 35px 30px;
  }

  .themes__card-img {
    width: 100px;
  }

  .themes__card-text {
    color: #ff7573;
    margin-top: 20px;
    font-size: 28px;
  }

  .themes__card-paragraph {
    text-align: center;
    margin-top: 20px;
    font-size: 22px;
  }

  .themes__card-enter-arrow {
    position: absolute;
    bottom: -40px;
  }

  .themes__cards-arrow-left {
    position: absolute;
    align-self: center;
    margin-left: 48px;
  }

  .themes__cards-arrow-right {
    position: absolute;
    align-self: center;
    justify-self: end;
    margin-right: 48px;
    transform: scaleX(-1);
  }
}

@media (min-width: 992px) {
  .themes {
    background-color: #fbad49;
    background-image: url("../assets/img/Academia/Grupo1526.png");
    background-size: cover;
  }

  .themes__container {
    padding: 92px 20px 20px 20px;
  }

  .themes__title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8px;
    text-align: center;
    color: #ffffff;
  }

  .themes__main-text {
    font-size: 42px;
  }

  .themes__subtitle {
    width: 620px;
    margin-top: 13px;
    font-weight: 500;
  }

  .themes__cards {
    position: relative;
    padding: 28px 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 52px;
  }

  .themes__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    border-radius: 10px;
    border-bottom: 10px solid #1d1f36;
    padding: 35px 30px;
  }

  .themes__card-img {
    width: 100px;
  }

  .themes__card-text {
    color: #ff7573;
    margin-top: 20px;
    font-size: 28px;
  }

  .themes__card-paragraph {
    text-align: center;
    margin-top: 20px;
    font-size: 22px;
  }

  .themes__card-enter-arrow {
    position: absolute;
    bottom: -40px;
  }

  .themes__cards-arrow-left {
    position: absolute;
    align-self: center;
    margin-left: 48px;
  }

  .themes__cards-arrow-right {
    position: absolute;
    align-self: center;
    justify-self: end;
    margin-right: 48px;
    transform: scaleX(-1);
  }
}

@media (min-width: 1200px) {
  .themes {
    background-color: #fbad49;
    background-image: url("../assets/img/Academia/Grupo1526.png");
    background-size: cover;
  }

  .themes__container {
    padding: 92px 20px 20px 20px;
  }

  .themes__title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8px;
    text-align: center;
    color: #ffffff;
  }

  .themes__main-text {
    font-size: 42px;
  }

  .themes__subtitle {
    width: 620px;
    margin-top: 13px;
    font-weight: 500;
  }

  .themes__cards {
    position: relative;
    padding: 28px 90px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 52px;
  }

  .themes__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    border-radius: 10px;
    border-bottom: 10px solid #1d1f36;
    padding: 35px 30px;
  }

  .themes__card-img {
    width: 100px;
  }

  .themes__card-text {
    color: #ff7573;
    margin-top: 20px;
    font-size: 28px;
  }

  .themes__card-paragraph {
    text-align: center;
    margin-top: 20px;
    font-size: 22px;
  }

  .themes__card-enter-arrow {
    position: absolute;
    bottom: -40px;
  }

  .themes__cards-arrow-left {
    position: absolute;
    align-self: center;
    margin-left: 48px;
  }

  .themes__cards-arrow-right {
    position: absolute;
    align-self: center;
    justify-self: end;
    margin-right: 48px;
    transform: scaleX(-1);
  }
}
</style>