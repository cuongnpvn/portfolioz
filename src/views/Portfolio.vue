<template>
  <Header />
  <section class="portfolio border-gray">
    <h2 class="portfolio-tag">Portfolio</h2>
    <div class="wrapper">
      <p class="portfolio-desc paragraph">
        Lorem ipsum dolor sit, amet consectetur adipisicing.
      </p>
    </div>
    <div class="portfolio-content">
      <div
        v-for="(card, index) in portfolios"
        :key="index"
        class="content-card"
      >
        <img :src="card.logo" alt="" class="card-logo" />
        <div class="card-company">{{ card.company }}</div>
        <div class="card-role">{{ card.role }}</div>
        <div class="card-desc">
          {{ card.desc }}
        </div>
      </div>
    </div>
  </section>
  <section class="invite border-gray">
    <h1>Let's get in touch</h1>
    <p class="paragraph">
      If you want to leave me a message or set up a meeting, <br />
      let me know about it right away!
    </p>
    <router-link :to="{ name: 'Contact' }" class="contact">
      <span>Contact me</span>
      <img src="@/assets/icon-arrow-contact.svg" alt="" class="contact-icon" />
    </router-link>
  </section>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Portfolio",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      portfolios: this.$store.state.portfolios,
    };
  },
};
</script>

<style scoped>
.portfolio {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.portfolio-tag {
  font-size: var(--fontsize-heading1);
  font-weight: 600;
  color: var(--neutral-color-9);
}

.portfolio .wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.portfolio .wrapper .portfolio-desc {
  font-size: var(--fontsize-heading5);
}

.portfolio-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 35px 30px;
}

.portfolio-content .content-card {
  border-radius: 25px;
  background: var(--neutral-color-3);
  padding: 35px 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: 400ms ease all;
}

.portfolio-content .content-card:hover {
  background: var(--neutral-color-4);
}

.portfolio-content .content-card .card-logo {
  width: 60px;
  height: 60px;
  border-radius: 13px;
  margin-bottom: 10px;
}

.portfolio-content .content-card .card-company {
  font-size: var(--fontsize-heading5);
  color: var(--neutral-color-6);
}

.portfolio-content .content-card .card-role {
  font-size: var(--fontsize-heading3);
  font-weight: 500;
  color: var(--neutral-color-9);
}

.portfolio-content .content-card .card-desc {
  font-size: var(--fontsize-heading5);
  color: var(--neutral-color-6);
  line-height: 30px;
}

.invite {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.invite h1 {
  font-size: var(--fontsize-heading2);
  font-weight: 500;
}

.invite p {
  margin-bottom: 30px;
  text-align: center;
}
</style>
