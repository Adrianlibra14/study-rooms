<template>
  <div class="info">
    <div class="info__container">
      <div class="info__content content">
        <div class="info__contact-form">
          <img
            src="@/assets/img/Footer/logo.svg"
            alt=""
            class="info__contact-logo"
          />
          <p class="info__contact-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, nulla
            delectus! Nisi adipisci nam obcaecati.
          </p>
          <div class="info__contact-email">
            <input
              type="text"
              class="info__input-email"
              placeholder="Ingrese su email"
            />
            <input type="submit" value="" class="info__send-input" />
          </div>
          <div class="info__contact-check">
            <h4 class="info__contact-check-text">
              <input
                type="checkbox"
                name=""
                id=""
                class="info__input-checkbox"
              />
              Términos y condiciones
            </h4>
          </div>
        </div>
        <div class="info__us-contact">
          <div class="info__us">
            <h3 class="info__us-main-text">Nosotros</h3>
            <h4 class="info__us-text">Nuestros valores</h4>
            <h4 class="info__us-text">Nuestros aliados</h4>
            <h4 class="info__us-text">Ser un alidado</h4>
            <h4 class="info__us-text">Trabaja con nosotros</h4>
            <h4 class="info__us-text">Blog</h4>
          </div>
          <div class="info__contact">
            <h3 class="info__contact-main-text">Contacto</h3>
            <div class="info__contact-items">
              <div class="info__contact-item">
                <h4 class="info__item-title">
                  <i class="fas fa-phone info__item-icon"></i>Teléfono
                </h4>
                <h5 class="info__item-text">444 777 0000</h5>
              </div>
              <div class="info__contact-item">
                <h4 class="info__item-title">
                  <i class="fas fa-map-marker-alt info__item-icon"></i>Dirección
                </h4>
                <h5 class="info__item-text">Colombia - Bogotá</h5>
              </div>
              <div class="info__contact-item info__contact-item-responsive">
                <h4 class="info__item-title">
                  <i class="fas fa-envelope info__item-icon"></i>Email
                </h4>
                <h5 class="info__item-text">contacto@mail.com</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="info__footer">
        <p class="info__copyright">2021 StudyRooms All rigths reserved.</p>
        <div class="info__social-media">
          <i class="fab fa-facebook-f info__social-media-item"></i
          ><i class="fab fa-instagram info__social-media-item"></i
          ><i class="fab fa-linkedin info__social-media-item"></i
          ><i class="fab fa-twitter info__social-media-item"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
};
</script>

<style scoped>
@media (max-width: 767px) {
  .info__content {
    padding: 92px 20px 20px 20px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    align-items: center;
  }

  .info__contact-form {
    /* width: 450px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .info__contact-logo {
    width: 120px;
  }

  .info__contact-text {
    color: #fff;
    font-size: 24px;
    margin-top: 14px;
  }

  .info__contact-email {
    margin-top: 21px;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }

  .info__input-email {
    padding: 15px 5%;
    border: none;
    border-radius: 34px;
    background-color: #fff;
  }

  .info__send-input {
    color: #fff;
    padding: 10px 30px;
    border: none;
    border-radius: 34px;
    background-color: #fbad49;
    margin-left: -40px;
  }

  .info__contact-check {
    margin-top: 21px;
  }

  .info__contact-check-text {
    color: #fff;
    font-weight: 500;
    /* margin-left: 12px; */
  }

  .info__input-checkbox {
    margin-right: 6px;
  }

  .info__us-contact {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    justify-items: center;
    text-align: center;
  }

  .info__us-main-text {
    color: #fbad49;
    font-size: 36px;
  }

  .info__us-text {
    color: #fff;
    margin-top: 36px;
    font-size: 18px;
  }

  .info__contact-main-text {
    color: #fbad49;
    font-size: 36px;
  }

  .info__contact-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    margin-top: 20px;
  }

  .info__contact-item {
    padding: 14px;
  }

  .info__contact-item-responsive {
    grid-column: 1/3;
  }

  .info__item-title {
    color: #c4c4c4;
    font-size: 18px;
    position: relative;
    display: flex;
    flex-direction: column;
    /* align-items: center;
  justify-content: center; */
  }

  .info__item-icon {
    font-size: 16px;
    margin-bottom: 8px;
    /* left: -16px;
  position: absolute; */
    color: #fbad49;
  }

  .info__item-text {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
  }

  .info__footer {
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    background-color: #201e2e;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 22px;
    text-align: center;
  }

  .info__copyright {
    color: #fbad49;
    font-size: 21px;
  }

  .info__social-media-item {
    color: #fbad49;
    font-size: 28px;
    margin: 0px 14px;
  }
}

@media (min-width: 768px) {
  .info__content {
    padding: 92px 20px 20px 20px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    align-items: center;
  }

  .info__contact-form {
    /* width: 450px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .info__contact-logo {
    width: 120px;
  }

  .info__contact-text {
    color: #fff;
    font-size: 24px;
    margin-top: 14px;
  }

  .info__contact-email {
    margin-top: 21px;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }

  .info__input-email {
    padding: 15px 5%;
    border: none;
    border-radius: 34px;
    background-color: #fff;
  }

  .info__send-input {
    color: #fff;
    padding: 10px 30px;
    border: none;
    border-radius: 34px;
    background-color: #fbad49;
    margin-left: -40px;
  }

  .info__contact-check {
    margin-top: 21px;
  }

  .info__contact-check-text {
    color: #fff;
    font-weight: 500;
    /* margin-left: 12px; */
  }

  .info__input-checkbox {
    margin-right: 6px;
  }

  .info__us-contact {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    justify-items: center;
    text-align: center;
  }

  .info__us-main-text {
    color: #fbad49;
    font-size: 36px;
  }

  .info__us-text {
    color: #fff;
    margin-top: 36px;
    font-size: 18px;
  }

  .info__contact-main-text {
    color: #fbad49;
    font-size: 36px;
  }

  .info__contact-items {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 14px;
    margin-top: 20px;
  }

  .info__contact-item {
    padding: 14px;
  }

  .info__contact-item-responsive {
    /* grid-column: 1/3; */
  }

  .info__item-title {
    color: #c4c4c4;
    font-size: 18px;
    position: relative;
    display: flex;
    flex-direction: column;
    /* align-items: center;
  justify-content: center; */
  }

  .info__item-icon {
    font-size: 16px;
    margin-bottom: 8px;
    /* left: -16px;
  position: absolute; */
    color: #fbad49;
  }

  .info__item-text {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
  }

  .info__footer {
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
    background-color: #201e2e;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
    text-align: center;
  }

  .info__copyright {
    color: #fbad49;
    font-size: 21px;
  }

  .info__social-media-item {
    color: #fbad49;
    font-size: 28px;
    margin: 0px 14px;
  }
}

@media (min-width: 992px) {
  .info__content {
    padding: 92px 20px 20px 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: start;
  }

  .info__contact-form {
    width: 450px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  .info__contact-logo {
    width: auto;
  }

  .info__contact-text {
    color: #fff;
    font-size: 24px;
    margin-top: 14px;
  }

  .info__contact-email {
    margin-top: 21px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  .info__input-email {
    padding: 15px 60px;
    border: none;
    border-radius: 34px;
    background-color: #fff;
  }

  .info__send-input {
    color: #fff;
    padding: 10px 30px;
    border: none;
    border-radius: 34px;
    background-color: #fbad49;
    position: relative;
    right: 40px;
  }

  .info__contact-check {
    margin-top: 21px;
  }

  .info__contact-check-text {
    color: #fff;
    font-weight: 500;
    margin-left: 12px;
  }

  .info__input-checkbox {
    margin-right: 6px;
  }

  .info__us-contact {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: left;
  }

  .info__us-main-text {
    color: #fbad49;
    font-size: 36px;
  }

  .info__us-text {
    color: #fff;
    margin-top: 36px;
    font-size: 18px;
  }

  .info__contact-main-text {
    color: #fbad49;
    font-size: 36px;
  }

  .info__contact-item {
    margin-top: 16px;
  }

  .info__item-title {
    color: #c4c4c4;
    font-size: 18px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .info__item-icon {
    font-size: 16px;
    left: -26px;
    margin-bottom: 0;
    position: absolute;
    color: #fbad49;
  }

  .info__item-text {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
  }

  .info__footer {
    display: flex;
    justify-content: space-between;
    padding: 40px 100px;
    background-color: #201e2e;
  }

  .info__copyright {
    color: #fbad49;
    font-size: 21px;
  }

  .info__social-media-item {
    color: #fbad49;
    font-size: 28px;
    margin-right: 26px;
  }
}

@media (min-width: 1200px) {
  .info__content {
    padding: 92px 60px 20px 60px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  .info__contact-form {
    width: 450px;
  }

  .info__contact-logo {
  }

  .info__contact-text {
    color: #fff;
    font-size: 24px;
    margin-top: 14px;
  }

  .info__contact-email {
    margin-top: 21px;
    display: flex;
    flex-direction: row;
  }

  .info__input-email {
    padding: 15px 60px;
    border: none;
    border-radius: 34px;
    background-color: #fff;
  }

  .info__send-input {
    color: #fff;
    padding: 10px 30px;
    border: none;
    border-radius: 34px;
    background-color: #fbad49;
    position: relative;
    right: 40px;
  }

  .info__contact-check {
    margin-top: 21px;
  }

  .info__contact-check-text {
    color: #fff;
    font-weight: 500;
    margin-left: 12px;
  }

  .info__input-checkbox {
    margin-right: 6px;
  }

  .info__us-contact {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }

  .info__us-main-text {
    color: #fbad49;
    font-size: 36px;
  }

  .info__us-text {
    color: #fff;
    margin-top: 36px;
    font-size: 18px;
  }

  .info__contact-main-text {
    color: #fbad49;
    font-size: 36px;
  }

  .info__contact-item {
    margin-top: 36px;
  }

  .info__item-title {
    color: #c4c4c4;
    font-size: 18px;
    position: relative;
    display: flex;
    align-items: center;
  }

  .info__item-icon {
    font-size: 16px;
    left: -26px;
    position: absolute;
    color: #fbad49;
  }

  .info__item-text {
    color: #fff;
    font-size: 16px;
    font-weight: 400;
  }

  .info__footer {
    display: flex;
    justify-content: space-between;
    padding: 40px 100px;
    background-color: #201e2e;
  }

  .info__copyright {
    color: #fbad49;
    font-size: 21px;
  }

  .info__social-media-item {
    color: #fbad49;
    font-size: 28px;
    margin-right: 26px;
  }
}
</style>