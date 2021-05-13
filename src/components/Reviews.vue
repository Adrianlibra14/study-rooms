<template>
  <div class="reviews">
    <div class="reviews__container">
      <div class="reviews__title">
        <h2 class="reviews__main-text">
          Lo que nuestros usuarios piensan de nostros
        </h2>
      </div>
      <div class="reviews__cards">
        <div class="reviews__card">
          <img
            src="@/assets/img/Comentarios/icon.svg"
            alt=""
            class="reviews__card-icon"
          />
          <div class="reviews__card-body">
            <p class="reviews__card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              eius officiis amet illum, cumque temporibus quibusdam optio
              dolores.
            </p>
          </div>
          <hr class="reviews__card-border" />
          <img
            src="@/assets/img/Comentarios/avatar.jpg"
            alt=""
            class="reviews__card-avatar"
          />
          <h4 class="reviews__card-avatar-name">Pepe Aguirre</h4>
          <h4 class="reviews__card-avatar-profession">Desarrollador web</h4>
        </div>
        <div class="reviews__card">
          <img
            src="@/assets/img/Comentarios/icon.svg"
            alt=""
            class="reviews__card-icon"
          />
          <div class="reviews__card-body">
            <p class="reviews__card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              eius officiis amet illum, cumque temporibus quibusdam optio
              dolores.
            </p>
          </div>
          <hr class="reviews__card-border" />
          <img
            src="@/assets/img/Comentarios/avatar.jpg"
            alt=""
            class="reviews__card-avatar"
          />
          <h4 class="reviews__card-avatar-name">Pepe Aguirre</h4>
          <h4 class="reviews__card-avatar-profession">Desarrollador web</h4>
        </div>
        <div class="reviews__card">
          <img
            src="@/assets/img/Comentarios/icon.svg"
            alt=""
            class="reviews__card-icon"
          />
          <div class="reviews__card-body">
            <p class="reviews__card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              eius officiis amet illum, cumque temporibus quibusdam optio
              dolores.
            </p>
          </div>
          <hr class="reviews__card-border" />
          <img
            src="@/assets/img/Comentarios/avatar.jpg"
            alt=""
            class="reviews__card-avatar"
          />
          <h4 class="reviews__card-avatar-name">Pepe Aguirre</h4>
          <h4 class="reviews__card-avatar-profession">Desarrollador web</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reviews",
};
</script>

<style scoped>
@media (max-width: 767px) {
  .reviews {
    background-color: #fff;
  }

  .reviews__container {
    padding: 92px 20px 20px 20px;
  }

  .reviews__title {
    text-align: center;
    margin: auto;
    margin-top: 24px;
    font-size: 28px;
    /* width: 90%; */
  }

  .reviews__cards {
    margin-top: 54px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    gap: 30px;
  }

  .reviews__card {
    padding: 32px 27px;
    background-color: #1d1f36;
    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  .reviews__card-icon {
    width: 54px;
    margin: auto;
  }

  .reviews__card-avatar {
    width: 68px;
    height: 68px;
    border-radius: 50%;
    object-fit: cover;
  }

  .reviews__card-body {
    margin-top: 34px;
    font-size: 18px;
  }

  .reviews__card-border {
    background-color: #fff;
    border-width: 0;
    height: 2px;
    margin-top: 34px;
  }

  .reviews__card-avatar {
    margin-top: 34px;
    margin: 24px auto;
  }

  .reviews__card-avatar-name {
    font-weight: 500;
  }

  .reviews__card-avatar-profession {
    margin-top: 10px;
    color: #ff7573;
    font-weight: 500;
  }
}

@media (min-width: 768px) {
  .reviews {
    background-color: #fff;
  }

  .reviews__container {
    padding: 92px 20px 20px 20px;
  }

  .reviews__title {
    text-align: center;
    margin: auto;
    margin-top: 24px;
    font-size: 28px;
    /* width: 90%; */
  }

  .reviews__cards {
    padding: 0px 140px;
    margin-top: 54px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    gap: 30px;
  }

  .reviews__card {
    padding: 32px 27px;
    background-color: #1d1f36;
    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  .reviews__card-icon {
    width: 54px;
    margin: auto;
  }

  .reviews__card-avatar {
    width: 68px;
    height: 68px;
    border-radius: 50%;
    object-fit: cover;
  }

  .reviews__card-body {
    margin-top: 34px;
    font-size: 18px;
  }

  .reviews__card-border {
    background-color: #fff;
    border-width: 0;
    height: 2px;
    margin-top: 34px;
  }

  .reviews__card-avatar {
    margin-top: 34px;
    margin: 24px auto;
  }

  .reviews__card-avatar-name {
    font-weight: 500;
  }

  .reviews__card-avatar-profession {
    margin-top: 10px;
    color: #ff7573;
    font-weight: 500;
  }
}

@media (min-width: 992px) {
  .reviews {
    background-color: #fff;
  }

  .reviews__container {
    padding: 92px 20px 20px 20px;
  }

  .reviews__title {
    text-align: center;
    margin: auto;
    margin-top: 24px;
    font-size: 38px;
    width: 60%;
  }

  .reviews__cards {
    padding: 0;
    margin-top: 54px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 30px;
  }

  .reviews__card {
    padding: 32px 27px;
    background-color: #1d1f36;
    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  .reviews__card-icon {
    width: 54px;
    margin: auto;
  }

  .reviews__card-avatar {
    width: 68px;
    height: 68px;
    border-radius: 50%;
    object-fit: cover;
  }

  .reviews__card-body {
    margin-top: 34px;
    font-size: 18px;
  }

  .reviews__card-border {
    background-color: #fff;
    border-width: 0;
    height: 2px;
    margin-top: 34px;
  }

  .reviews__card-avatar {
    margin-top: 34px;
    margin: 24px auto;
  }

  .reviews__card-avatar-name {
    font-weight: 500;
  }

  .reviews__card-avatar-profession {
    margin-top: 10px;
    color: #ff7573;
    font-weight: 500;
  }
}

@media (min-width: 1200px) {
  .reviews {
    background-color: #fff;
  }

  .reviews__container {
    padding: 92px 20px 20px 20px;
  }

  .reviews__title {
    text-align: center;
    margin: auto;
    margin-top: 24px;
    font-size: 38px;
    width: 60%;
  }

  .reviews__cards {
    margin-top: 54px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    gap: 30px;
  }

  .reviews__card {
    padding: 32px 27px;
    background-color: #1d1f36;
    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  .reviews__card-icon {
    width: 54px;
    margin: auto;
  }

  .reviews__card-avatar {
    width: 68px;
    height: 68px;
    border-radius: 50%;
    object-fit: cover;
  }

  .reviews__card-body {
    margin-top: 34px;
    font-size: 18px;
  }

  .reviews__card-border {
    background-color: #fff;
    border-width: 0;
    height: 2px;
    margin-top: 34px;
  }

  .reviews__card-avatar {
    margin-top: 34px;
    margin: 24px auto;
  }

  .reviews__card-avatar-name {
    font-weight: 500;
  }

  .reviews__card-avatar-profession {
    margin-top: 10px;
    color: #ff7573;
    font-weight: 500;
  }
}
</style>