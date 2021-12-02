<template>
  <Header />
  <section class="hero border-gray">
    <div class="hero-content">
      <h1 class="content-hello">
        Hello, I am Nguyen. <br />A front-end developer.
      </h1>
      <p class="content-desc paragraph">
        Most of my projects using VueJS but I'm willing to learn other
        frameworks if it fits your needs. I'm also interested in AI & ML.
      </p>
      <router-link :to="{ name: 'Contact' }" class="contact">
        <span>Contact Me</span>
        <img
          src="@/assets/icon-arrow-contact.svg"
          alt=""
          class="contact-icon"
        />
      </router-link>
    </div>
    <img src="@/assets/home.jpg" alt="" class="hero-ava" />
  </section>
  <section class="about border-gray">
    <h2 class="about-tag">About me</h2>
    <div class="about-content">
      <p class="content-col paragraph">
        I'm a ungraduate student from University of Information & Technology
        (UIT) in Ho Chi Minh city. I have worked in front-end developver since
        summer 2020 and currently I'm working as intern in YWmobile company.
      </p>
      <p class="content-col paragraph">
        At my University, I learn to build website through Class's projects and
        bootcamp event. I used VueJS a lot so this is the tool that I feel
        comfortable the most.
      </p>
    </div>
    <router-link :to="{ name: 'About' }" class="contact more">
      <span>More about me</span>
      <img src="@/assets/icon-arrow-contact.svg" alt="" class="contact-icon" />
    </router-link>
  </section>
  <section class="portfolio border-gray">
    <h2 class="portfolio-tag">Portfolio</h2>
    <div class="wrapper">
      <p class="porfolio-desc">
        Some of my works and projects that I've worked so far.
      </p>
      <router-link :to="{ name: 'Portfolio' }" class="contact">
        <span>View portfolio</span>
        <img
          src="@/assets/icon-arrow-contact.svg"
          alt=""
          class="contact-icon"
        />
      </router-link>
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
  <section class="blog border-gray">
    <h2 class="blog-tag">Blog</h2>
    <div class="blog-content">
      <div
        v-for="(blog, index) in blogs"
        :key="index"
        class="blog-item border-gray"
      >
        <h3 class="item-title">{{ blog.title }}</h3>
        <p class="item-desc paragraph">
          {{ blog.desc }}
        </p>
        <div class="item-info">
          <div class="info-wrap">
            <div class="info-date">{{ blog.date }}</div>
            <div class="wrap-hline"></div>
            <div class="info-category">{{ blog.category }}</div>
          </div>
          <div class="info-read">
            <img src="@/assets/icon-book.svg" alt="" class="read-icon" />
            <span>{{ blog.read }}</span>
          </div>
        </div>
      </div>
      <router-link :to="{ name: 'Blog' }" class="contact article">
        <span>Browse all articles</span>
        <img
          src="@/assets/icon-arrow-contact.svg"
          alt=""
          class="contact-icon"
        />
      </router-link>
    </div>
  </section>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      portfolios: this.$store.state.portfolios,
      blogs: this.$store.state.blogs,
    };
  },
};
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
}

.hero-content {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
}

.hero-content .content-hello {
  font-size: var(--fontsize-heading1);
  font-weight: 700;
  color: var(--neutral-color-9);
}

.hero-content .content-desc {
  margin-bottom: 20px;
  width: 80%;
  font-size: var(--fontsize-heading5);
}

.hero-ava {
  width: 330px;
  height: 330px;
  border-radius: 20px;
  object-fit: cover;
}

.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
}

.about-tag {
  font-size: var(--fontsize-heading2);
  font-weight: 600;
  color: var(--neutral-color-9);
}

.about-content {
  display: flex;
  gap: 25px;
}

.about-content .content-col {
  flex-basis: 50%;
}

.more {
  margin-top: 15px;
}

.portfolio {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.portfolio-tag {
  font-size: var(--fontsize-heading2);
  font-weight: 600;
  color: var(--neutral-color-9);
}

.portfolio .wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.portfolio .wrapper .portfolio-desc {
  color: var(--neutral-color-6);
  line-height: 30px;
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
  cursor: pointer;
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

.blog {
  display: flex;
}

.blog-tag {
  position: sticky;
  flex-basis: 50%;
  height: 50px;
  top: 40px;
  font-size: var(--fontsize-heading2);
  font-weight: 600;
  color: var(--neutral-color-9);
}

.blog-content {
  display: flex;
  flex-direction: column;
}

.blog-content .blog-item {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 70px 0;
}

.blog-content .blog-item:first-child {
  padding-top: 0;
}

.blog-content .blog-item .item-title {
  font-size: var(--fontsize-heading3);
  font-weight: 500;
  color: var(--neutral-color-9);
  cursor: pointer;
  transition: 300ms ease all;
}

.blog-content .blog-item .item-title:hover {
  color: var(--neutral-color-6);
}

.blog-content .blog-item .item-desc {
  font-size: var(--fontsize-heading5);
  margin-bottom: 20px;
}

.blog-content .blog-item .item-info {
  display: flex;
  justify-content: space-between;
}

.blog-content .blog-item .item-info .info-wrap {
  display: flex;
  gap: 15px;
  align-items: center;
}

.blog-content .blog-item .item-info .info-wrap .info-date,
.blog-content .blog-item .item-info .info-wrap .info-category,
.blog-content .blog-item .item-info .info-read span {
  color: var(--neutral-color-9);
}

.blog-content .blog-item .item-info .info-wrap .wrap-hline {
  width: 12px;
  height: 1px;
  background: var(--neutral-color-5);
}

.blog-content .blog-item .item-info .info-read {
  display: flex;
  align-items: center;
  gap: 20px;
}

.blog-content .blog-item .item-info .info-read .read-icon {
  width: 22px;
  height: 22px;
}

.blog-content .blog-item .item-info .info-read span {
  color: var(--neutral-color-7);
}

.blog-content .article {
  margin-top: 50px;
}
</style>
