<template>
  <div class="courses">
    <div class="courses__title">
      <h2 class="courses__main-text">Cursos recientes</h2>
      <h3 class="courses__main-subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quo!
      </h3>
    </div>
    <div class="courses__container">
      <div class="courses__items">
        <div class="courses__item">
          <div class="courses__item-header">
            <img
              src="@/assets/img/Cursos/img.png"
              alt=""
              class="courses__item-img"
            />
            <span class="courses__item-cta">DISEÑO</span>
          </div>
          <div class="courses__item-content">
            <div class="courses__item-autor">
              <img
                src="@/assets/img/Cursos/avatar.jpg"
                alt=""
                class="courses__item-autor-img"
              />
              <p class="courses__item-autor-text">Por Adrián Aguilar</p>
            </div>
            <h3 class="courses__item-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              corrupti?
            </h3>
            <div class="courses__stars">
              <i class="fas fa-star courses__star"></i>
              <i class="fas fa-star courses__star"></i>
              <i class="fas fa-star courses__star"></i>
              <i class="fas fa-star courses__star"></i>
              <i class="fas fa-star courses__star"></i>
              <p class="courses__rate">5.0</p>
            </div>
            <hr class="courses__item-border" />
            <div class="courses__description">
              <p class="courses__description-item">
                <i class="far fa-clock courses__description-icon-color"></i>
                5 Horas
              </p>
              <p class="courses__description-item">
                <i
                  class="far fa-sticky-note courses__description-icon-color"
                ></i>
                8 Sesiones
              </p>
              <div class="courses__prices">
                <p class="courses__description-price">80.000</p>
                <p
                  class="courses__description-price courses__description-price-dicount"
                >
                  100.000
                </p>
              </div>
            </div>
          </div>
          <div class="courses__item-footer">
            <div class="courses__button">
              <h3 class="courses__button-text">Ver curso</h3>
            </div>
          </div>
        </div>
        <div class="courses__item">
          <div class="courses__item-header">
            <img
              src="@/assets/img/Cursos/img.png"
              alt=""
              class="courses__item-img"
            />
            <span class="courses__item-cta">DISEÑO</span>
          </div>
          <div class="courses__item-content">
            <div class="courses__item-autor">
              <img
                src="@/assets/img/Cursos/avatar.jpg"
                alt=""
                class="courses__item-autor-img"
              />
              <p class="courses__item-autor-text">Por Adrián Aguilar</p>
            </div>
            <h3 class="courses__item-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              corrupti?
            </h3>
            <div class="courses__stars">
              <i class="fas fa-star courses__star"></i>
              <i class="fas fa-star courses__star"></i>
              <i class="fas fa-star courses__star"></i>
              <i class="fas fa-star courses__star"></i>
              <i class="fas fa-star courses__star"></i>
              <p class="courses__rate">5.0</p>
            </div>
            <hr class="courses__item-border" />
            <div class="courses__description">
              <p class="courses__description-item">
                <i class="far fa-clock courses__description-icon-color"></i>
                5 Horas
              </p>
              <p class="courses__description-item">
                <i
                  class="far fa-sticky-note courses__description-icon-color"
                ></i>
                8 Sesiones
              </p>
              <div class="courses__prices">
                <p class="courses__description-price">80.000</p>
                <p
                  class="courses__description-price courses__description-price-dicount"
                >
                  100.000
                </p>
              </div>
            </div>
          </div>
          <div class="courses__item-footer">
            <div class="courses__button">
              <h3 class="courses__button-text">Ver curso</h3>
            </div>
          </div>
        </div>
        <div class="courses__item">
          <div class="courses__item-header">
            <img
              src="@/assets/img/Cursos/img.png"
              alt=""
              class="courses__item-img"
            />
            <span class="courses__item-cta">DISEÑO</span>
          </div>
          <div class="courses__item-content">
            <div class="courses__item-autor">
              <img
                src="@/assets/img/Cursos/avatar.jpg"
                alt=""
                class="courses__item-autor-img"
              />
              <p class="courses__item-autor-text">Por Adrián Aguilar</p>
            </div>
            <h3 class="courses__item-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              corrupti?
            </h3>
            <div class="courses__stars">
              <i class="fas fa-star courses__star"></i>
              <i class="fas fa-star courses__star"></i>
              <i class="fas fa-star courses__star"></i>
              <i class="fas fa-star courses__star"></i>
              <i class="fas fa-star courses__star"></i>
              <p class="courses__rate">5.0</p>
            </div>
            <hr class="courses__item-border" />
            <div class="courses__description">
              <p class="courses__description-item">
                <i class="far fa-clock courses__description-icon-color"></i>
                5 Horas
              </p>
              <p class="courses__description-item">
                <i
                  class="far fa-sticky-note courses__description-icon-color"
                ></i>
                8 Sesiones
              </p>
              <div class="courses__prices">
                <p class="courses__description-price">80.000</p>
                <p
                  class="courses__description-price courses__description-price-dicount"
                >
                  100.000
                </p>
              </div>
            </div>
          </div>
          <div class="courses__item-footer">
            <div class="courses__button">
              <h3 class="courses__button-text">Ver curso</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Courses",
};
</script>

<style scoped>
@media (max-width: 767px) {
  .courses {
    padding-top: 72px;
  }

  .courses__title {
    position: relative;
    padding: 24px;
    text-align: center;
    background-image: url("../assets/img/Cursos/separador.png");
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    height: 250px;
    color: #ffffff;
  }

  .courses__main-text {
    font-size: 32px;
  }

  .courses__main-subtitle {
    font-size: 20px;
    font-weight: 500;
    margin-top: 12px;
  }

  .courses__container {
    padding: 92px 20px 20px 20px;
    background-image: url("../assets/img/Cursos/bg.svg");
    background-size: cover;
    margin-top: -62px;
  }

  .courses__items {
    display: grid;
    /* padding: 28px 20px; */
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
  }

  .courses__item {
    flex-direction: column;
    background-color: #ffffff;
  }

  .courses__item-header {
    position: relative;
  }

  .courses__item-img {
    width: 100%;
  }

  .courses__item-cta {
    position: absolute;
    background-color: #ff7573;
    font-weight: bold;
    color: #ffffff;
    padding: 10px 60px;
    border-radius: 26px;
    bottom: -17px;
    left: 35px;
  }

  .courses__item-content {
    padding: 10px 20px;
  }

  .courses__item-autor {
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .courses__item-autor-img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 12px;
  }

  .courses__item-autor-text {
    margin-left: 12px;
  }

  .courses__item-title {
    margin-top: 12px;
  }

  .courses__stars {
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .courses__star {
    margin-left: 2px;
    color: #ff7573;
  }

  .courses__rate {
    margin-left: 5px;
  }

  .courses__item-border {
    margin: 24px 0px;
    background-color: #ff7573;
    height: 2px;
    border-width: 0;
  }

  .courses__description {
    display: flex;
    flex-direction: row;
  }

  .courses__description-item {
    margin-left: 6px;
  }

  .courses__prices {
    display: flex;
    margin-left: auto;
    margin-right: 6px;
  }

  .courses__description-price {
    margin-right: 6px;
    font-weight: bold;
  }

  .courses__description-price-dicount {
    font-weight: normal;
    text-decoration: line-through;
  }

  .courses__description-icon-color {
    color: #ff7573;
  }

  .courses__item-footer {
    margin: 24px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .courses__button {
    background-color: #f4f4f4;
    padding: 10px 60px;
    border-radius: 26px;
    color: gray;
  }
}

@media (min-width: 768px) {
  .courses {
    padding-top: 72px;
  }

  .courses__title {
    position: relative;
    padding: 24px;
    text-align: center;
    background-image: url("../assets/img/Cursos/separador.png");
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    height: 250px;
    color: #ffffff;
  }

  .courses__main-text {
    font-size: 32px;
  }

  .courses__main-subtitle {
    font-size: 20px;
    font-weight: 500;
    margin-top: 12px;
  }

  .courses__container {
    padding: 92px 20px 20px 20px;
    background-image: url("../assets/img/Cursos/bg.svg");
    background-size: cover;
    margin-top: -62px;
  }

  .courses__items {
    display: grid;
    padding: 20px 140px;
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
  }

  .courses__item {
    flex-direction: column;
    background-color: #ffffff;
  }

  .courses__item-header {
    position: relative;
  }

  .courses__item-img {
    width: 100%;
  }

  .courses__item-cta {
    position: absolute;
    background-color: #ff7573;
    font-weight: bold;
    color: #ffffff;
    padding: 10px 60px;
    border-radius: 26px;
    bottom: -17px;
    left: 35px;
  }

  .courses__item-content {
    padding: 10px 20px;
  }

  .courses__item-autor {
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .courses__item-autor-img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 12px;
  }

  .courses__item-autor-text {
    margin-left: 12px;
  }

  .courses__item-title {
    margin-top: 12px;
  }

  .courses__stars {
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .courses__star {
    margin-left: 2px;
    color: #ff7573;
  }

  .courses__rate {
    margin-left: 5px;
  }

  .courses__item-border {
    margin: 24px 0px;
    background-color: #ff7573;
    height: 2px;
    border-width: 0;
  }

  .courses__description {
    display: flex;
    flex-direction: row;
  }

  .courses__description-item {
    margin-left: 6px;
  }

  .courses__prices {
    display: flex;
    margin-left: auto;
    margin-right: 6px;
  }

  .courses__description-price {
    margin-right: 6px;
    font-weight: bold;
  }

  .courses__description-price-dicount {
    font-weight: normal;
    text-decoration: line-through;
  }

  .courses__description-icon-color {
    color: #ff7573;
  }

  .courses__item-footer {
    margin: 24px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .courses__button {
    background-color: #f4f4f4;
    padding: 10px 60px;
    border-radius: 26px;
    color: gray;
  }
}

@media (min-width: 992px) {
  .courses {
    padding-top: 72px;
  }

  .courses__title {
    position: relative;
    padding: 24px;
    text-align: center;
    background-image: url("../assets/img/Cursos/separador.png");
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    height: 250px;
    color: #ffffff;
  }

  .courses__main-text {
    font-size: 52px;
  }

  .courses__main-subtitle {
    font-size: 26px;
    font-weight: 500;
    margin-top: 12px;
  }

  .courses__container {
    padding: 92px 20px 20px 20px;
    background-image: url("../assets/img/Cursos/bg.svg");
    background-size: cover;
    margin-top: -70px;
  }

  .courses__items {
    display: grid;
    padding: 20px 0px;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  .courses__item {
    flex-direction: column;
    background-color: #ffffff;
  }

  .courses__item-header {
    position: relative;
  }

  .courses__item-img {
    width: 100%;
  }

  .courses__item-cta {
    position: absolute;
    background-color: #ff7573;
    font-weight: bold;
    color: #ffffff;
    padding: 10px 60px;
    border-radius: 26px;
    bottom: -17px;
    left: 35px;
  }

  .courses__item-content {
    padding: 10px 20px;
  }

  .courses__item-autor {
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .courses__item-autor-img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 12px;
  }

  .courses__item-autor-text {
    margin-left: 12px;
  }

  .courses__item-title {
    margin-top: 12px;
  }

  .courses__stars {
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .courses__star {
    margin-left: 2px;
    color: #ff7573;
  }

  .courses__rate {
    margin-left: 5px;
  }

  .courses__item-border {
    margin: 24px 0px;
    background-color: #ff7573;
    height: 2px;
    border-width: 0;
  }

  .courses__description {
    display: flex;
    flex-direction: row;
  }

  .courses__description-item {
    margin-left: 6px;
  }

  .courses__prices {
    display: flex;
    margin-left: auto;
    margin-right: 6px;
  }

  .courses__description-price {
    margin-right: 6px;
    font-weight: bold;
  }

  .courses__description-price-dicount {
    font-weight: normal;
    text-decoration: line-through;
  }

  .courses__description-icon-color {
    color: #ff7573;
  }

  .courses__item-footer {
    margin: 24px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .courses__button {
    background-color: #f4f4f4;
    padding: 10px 60px;
    border-radius: 26px;
    color: gray;
  }
}

@media (min-width: 1200px) {
  .courses {
    padding-top: 72px;
  }

  .courses__title {
    position: relative;
    padding: 24px;
    text-align: center;
    background-image: url("../assets/img/Cursos/separador.png");
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    height: 250px;
    color: #ffffff;
  }

  .courses__main-text {
    font-size: 52px;
  }

  .courses__main-subtitle {
    font-size: 26px;
    font-weight: 500;
    margin-top: 12px;
  }

  .courses__container {
    padding: 92px 20px 20px 20px;
    background-image: url("../assets/img/Cursos/bg.svg");
    background-size: cover;
    margin-top: -70px;
  }

  .courses__items {
    display: grid;
    padding: 28px 20px;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }

  .courses__item {
    flex-direction: column;
    background-color: #ffffff;
  }

  .courses__item-header {
    position: relative;
  }

  .courses__item-img {
    width: 100%;
  }

  .courses__item-cta {
    position: absolute;
    background-color: #ff7573;
    font-weight: bold;
    color: #ffffff;
    padding: 10px 60px;
    border-radius: 26px;
    bottom: -17px;
    left: 35px;
  }

  .courses__item-content {
    padding: 10px 20px;
  }

  .courses__item-autor {
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .courses__item-autor-img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 12px;
  }

  .courses__item-autor-text {
    margin-left: 12px;
  }

  .courses__item-title {
    margin-top: 12px;
  }

  .courses__stars {
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .courses__star {
    margin-left: 2px;
    color: #ff7573;
  }

  .courses__rate {
    margin-left: 5px;
  }

  .courses__item-border {
    margin: 24px 0px;
    background-color: #ff7573;
    height: 2px;
    border-width: 0;
  }

  .courses__description {
    display: flex;
    flex-direction: row;
  }

  .courses__description-item {
    margin-left: 6px;
  }

  .courses__prices {
    display: flex;
    margin-left: auto;
    margin-right: 6px;
  }

  .courses__description-price {
    margin-right: 6px;
    font-weight: bold;
  }

  .courses__description-price-dicount {
    font-weight: normal;
    text-decoration: line-through;
  }

  .courses__description-icon-color {
    color: #ff7573;
  }

  .courses__item-footer {
    margin: 24px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .courses__button {
    background-color: #f4f4f4;
    padding: 10px 60px;
    border-radius: 26px;
    color: gray;
  }
}
</style>