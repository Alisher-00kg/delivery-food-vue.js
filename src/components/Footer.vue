<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-box">
        <router-link href="/" class="footer-logo logo">
          <img src="../assets/images/logo.png" alt="logo" />
        </router-link>
        <div class="footer-nav">
          <ul>
            <li>Ресторанам</li>
            <li>Курьерам</li>
            <li>Пресс-центр</li>
            <li>Контакты</li>
          </ul>
        </div>
        <div class="footer-social">
          <img src="../assets/icons/button/socials/insta.png" alt="instagram" />
          <img src="../assets/icons/button/socials/fc.png" alt="facebook" />
          <img src="../assets/icons/button/socials/vk.png" alt="vk" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  min-height: 156px;
  padding-top: 60px;
  padding: 60px 0;
}
.footer-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  gap: 36px;
  flex-wrap: wrap;
}
.footer-nav {
  flex-grow: 1;
}
.footer-nav ul {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 15px;
}
.footer-nav ul li {
  color: #595959;
  font-size: 18px;
  font-weight: 400;
}
.footer-social {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
}
</style>
