<template>
  <footer>
    <span class="logo">npCuong</span>
    <nav>
      <router-link :to="{ name: 'Home' }" class="nav-item">Home</router-link>
      <router-link :to="{ name: 'About' }" class="nav-item">About</router-link>
      <router-link :to="{ name: 'Portfolio' }" class="nav-item"
        >Portfolio</router-link
      >
      <router-link :to="{ name: 'Blog' }" class="nav-item">Blog</router-link>
    </nav>
    <router-link :to="{ name: 'Contact' }" class="contact">
      <span>Contact Me</span>
      <img src="@/assets/icon-arrow-contact.svg" alt="" class="contact-icon" />
    </router-link>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  margin: 0 auto;
  width: 60%;
  height: 25vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  flex-basis: 10%;
  font-size: var(--fontsize-heading2);
  font-weight: 600;
  color: var(--neutral-color-9);
  padding-bottom: 6px;
}

nav {
  display: flex;
  gap: 25px;
  align-items: center;
}

.nav-item {
  padding: 8px 12px;
  font-weight: 500;
  color: var(--neutral-color-6);
  transition: 400ms ease all;
  cursor: pointer;
  text-decoration: none;
}

.nav-item:hover {
  background: var(--neutral-color-4);
  border-radius: 8px;
  color: var(--neutral-color-9);
}
</style>
