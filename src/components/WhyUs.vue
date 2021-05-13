<template>
  <div class="why-us">
    <div class="why-us__container">
      <div class="why-us__left-img">
        <img class="why-us__img" src="@/assets/img/Nosotros/foto.png" alt="" />
      </div>
      <div class="why-us__content">
        <div class="why-us__title">
          <h2 class="why-us__main-text">
            <span class="why-us__main-text why-us__main-text-active">
              ¿Por qué aprender
            </span>
            con nosotros?
          </h2>
        </div>
        <div class="why-us__text">
          <p class="why-us__paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
            doloribus. Laudantium cumque rerum, harum voluptates iusto odio a.
            Placeat a nesciunt asperiores eum veritatis aperiam animi quia alias
            tenetur dignissimos.
          </p>
        </div>
      </div>
      <div class="why-us__icons">
        <div class="why-us__icon-item">
          <img
            src="@/assets/img/Nosotros/icon-1.svg"
            alt=""
            class="why-us__icon-img"
          />
          <p class="why-us__icon-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="why-us__icon-item">
          <img
            src="@/assets/img/Nosotros/icon-2.svg"
            alt=""
            class="why-us__icon-img"
          />
          <p class="why-us__icon-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="why-us__icon-item why-us__icon-item-responsive">
          <img
            src="@/assets/img/Nosotros/icon-3.svg"
            alt=""
            class="why-us__icon-img"
          />
          <p class="why-us__icon-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhyUs",
};
</script>

<style scoped>
@media (max-width: 767px) {
  .why-us {
    background-color: #ffffff;
  }

  .why-us__container {
    text-align: center;
    padding: 92px 20px 20px 20px;
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(1, 1fr);
  }

  .why-us__left-img {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .why-us__img {
    width: 220px;
    /* margin-right: 20px; */
    object-fit: contain;
    align-self: flex-start;
  }

  .why-us__content {
    /* margin-left: 20px; */
  }

  .why-us__main-text {
    display: flex;
    flex-direction: column;
    font-size: 30px;
    color: #1d1f36;
  }

  .why-us__main-text-active {
    background-color: #ff7573;
    color: #ffffff;
    padding: 4px;
  }

  .why-us__paragraph {
    font-size: 18px;
    margin-top: 24px;
  }

  .why-us__icons {
    margin-top: 34px;
    display: grid;
    gap: 22px;
    grid-template-columns: repeat(2, 1fr);
  }

  .why-us__icon-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .why-us__icon-item-responsive {
    grid-column: 1/3;
  }

  .why-us__icon-img {
    width: 72px;
  }

  .why-us__icon-text {
    text-align: center;
    margin-top: 10px;
    width: 80%;
  }
}

@media (min-width: 768px) {
  .why-us {
    background-color: #ffffff;
  }

  .why-us__container {
    text-align: left;
    padding: 92px 20px 20px 20px;
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(2, 1fr);
  }

  .why-us__left-img {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .why-us__img {
    width: 300px;
    /* margin-right: 20px; */
    object-fit: contain;
    align-self: flex-start;
  }

  .why-us__content {
    /* margin-left: 20px; */
  }

  .why-us__main-text {
    display: flex;
    flex-direction: column;
    font-size: 30px;
    color: #1d1f36;
  }

  .why-us__main-text-active {
    background-color: #ff7573;
    color: #ffffff;
    width: 80%;
    padding: 4px;
  }

  .why-us__paragraph {
    font-size: 18px;
    margin-top: 24px;
  }

  .why-us__icons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column: 1/3;
  }

  .why-us__icon-img {
    width: 72px;
  }

  .why-us__icon-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
  }

  .why-us__icon-item-responsive {
    grid-column: auto;
  }

  .why-us__icon-text {
    text-align: center;
    margin-top: 10px;
  }
}

@media (min-width: 992px) {
  .why-us {
    background-color: #ffffff;
  }

  .why-us__container {
    text-align: left;
    padding: 92px 20px 20px 20px;
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(2, 1fr);
  }

  .why-us__left-img {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .why-us__img {
    width: 300px;
    /* margin-right: 20px; */
    object-fit: contain;
    align-self: flex-start;
  }

  .why-us__content {
    /* margin-left: 20px; */
    align-self: center;
  }

  .why-us__main-text {
    display: flex;
    flex-direction: column;
    font-size: 30px;
    color: #1d1f36;
  }

  .why-us__main-text-active {
    background-color: #ff7573;
    color: #ffffff;
    width: 80%;
    padding: 4px;
  }

  .why-us__paragraph {
    font-size: 18px;
    margin-top: 24px;
  }

  .why-us__icons {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column: 1/3;
  }

  .why-us__icon-img {
    width: 72px;
  }

  .why-us__icon-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
  }

  .why-us__icon-item-responsive {
    grid-column: auto;
  }

  .why-us__icon-text {
    text-align: center;
    margin-top: 10px;
  }
}

@media (min-width: 1200px) {
  .why-us {
    background-color: #ffffff;
  }

  .why-us__container {
    text-align: left;
    padding: 92px 20px 20px 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .why-us__left-img {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .why-us__img {
    width: 90%;
    margin-right: 20px;
    object-fit: contain;
    align-self: flex-start;
  }

  .why-us__content {
    margin-left: 20px;
  }

  .why-us__main-text {
    display: flex;
    flex-direction: column;
    font-size: 52px;
    color: #1d1f36;
  }

  .why-us__main-text-active {
    background-color: #ff7573;
    color: #ffffff;
    width: 80%;
    padding: 4px;
  }

  .why-us__paragraph {
    font-size: 26px;
    margin-top: 24px;
  }

  .why-us__icons {
    margin-top: 34px;
    display: none;
    grid-template-columns: repeat(3, 1fr);
  }

  .why-us__icon-img {
    width: 72px;
  }

  .why-us__icon-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
  }

  .why-us__icon-text {
    text-align: center;
    margin-top: 10px;
  }
}
</style>