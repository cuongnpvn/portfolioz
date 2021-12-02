<template>
  <Header />
  <div class="hero">
    <h1 class="hero-title">Articles & Insights</h1>
    <p class="hero-desc paragraph">
      <i>
        "Almost all good writing begins with terrible first efforts. <br />
        You need to start somewhere." - Anne Lamott
      </i>
    </p>
  </div>
  <section class="blog border-gray">
    <div class="blog-filter">
      <h2>Categories</h2>
      <span
        @click="toggleFilter('All')"
        class="filter-item"
        :class="{ isSelected: filter === 'All' }"
        >All</span
      >
      <span
        @click="toggleFilter('Design')"
        class="filter-item"
        :class="{ isSelected: filter === 'Design' }"
        >Design</span
      >
      <span
        @click="toggleFilter('AI & ML')"
        class="filter-item"
        :class="{ isSelected: filter === 'AI & ML' }"
        >AI & ML</span
      >
      <span
        @click="toggleFilter('VueJS')"
        class="filter-item"
        :class="{ isSelected: filter === 'VueJS' }"
        >VueJS</span
      >
    </div>
    <div class="blog-content">
      <transition-group name="list">
        <div
          v-for="(blog, index) in getFilterdBlogs"
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
      </transition-group>
    </div>
  </section>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Blog",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      blogs: this.$store.state.blogs,
      filter: "All",
    };
  },
  methods: {
    toggleFilter(value) {
      this.filter = value;
    },
  },
  computed: {
    getFilterdBlogs() {
      if (this.filter === "All") {
        return this.blogs;
      } else {
        return this.blogs.filter((blog) => blog.category === this.filter);
      }
    },
  },
};
</script>

<style scoped>
.hero {
  width: 60%;
  margin: 0 auto;
  padding: 10vh 0;
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.hero-title {
  font-size: var(--fontsize-heading1);
  font-weight: 500;
}

.blog {
  display: flex;
  padding-top: 5vh;
  justify-content: space-between;
}

.blog-filter {
  position: sticky;
  height: 200px;
  top: 40px;
}

.blog-filter {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.blog-filter h2 {
  font-size: var(--fontsize-heading2);
  font-weight: 500;
}

.blog-filter .filter-item {
  font-size: var(--fontsize-heading5);
  color: var(--neutral-color-6);
  transition: 200ms ease all;
  cursor: pointer;
}

.blog-filter .filter-item:hover {
  color: var(--neutral-color-9);
}

.blog-filter .isSelected {
  color: var(--neutral-color-9);
  font-weight: 500;
}

.blog-content {
  width: 70%;
  display: flex;
  flex-direction: column;
}

.list-enter-active,
.list-leave-active {
  transition: all 400ms ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
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

.blog-content .blog-item:last-child {
  border: none;
}

.blog-content .blog-item .item-title {
  font-size: var(--fontsize-heading3);
  font-weight: 500;
  color: var(--neutral-color-9);
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
</style>
