<template>
  <Header />
  <div class="hero">
    <h1 class="hero-title">Contact</h1>
    <p class="hero-desc paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur enim
      illum quis magni, dolor quam assumenda!
    </p>
    <div class="hero-mail">
      <span> tommynguyen.pc99@gmail.com </span>
      <img src="@/assets/icon-mail.svg" alt="" class="mail-icon" />
    </div>
  </div>
  <section class="contact-form border-gray">
    <div class="form">
      <div class="form-row">
        <div class="form-input">
          <span>Name</span>
          <input type="text" placeholder="Cuong Nguyen" />
        </div>
        <div class="form-input">
          <span>Email</span>
          <input type="text" placeholder="What's your email" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-input">
          <span>Phone</span>
          <input type="text" placeholder="What's your number" />
        </div>
        <div class="form-input">
          <span>Subject</span>
          <input type="text" placeholder="How can I help" />
        </div>
      </div>
      <div class="form-message">
        <span>Message</span>
      </div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Hi there! I would like to get in touch with you to inquiry about a project."
      >
      </textarea>
      <div class="contact send-btn">
        <span>Send Message</span>
        <img
          src="@/assets/icon-arrow-contact.svg"
          alt=""
          class="contact-icon"
        />
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Contact",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.hero {
  width: 50%;
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

.hero-desc {
  width: 60%;
}

.hero-mail {
  display: flex;
  gap: 10px;
  align-items: center;
}

.hero-mail span {
  font-weight: 500;
  font-size: var(--fontsize-heading5);
}

.hero-mail .mail-icon {
  width: 26px;
  height: 26px;
}

.contact-form {
  margin: 0 auto;
  width: 50%;
  padding-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  width: 100%;
  border-radius: 20px;
  background: var(--neutral-color-3);
  display: flex;
  flex-direction: column;
  padding: 60px 50px;
  gap: 40px;
}

.form .form-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.form .form-row .form-input {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.form .form-row .form-input span,
.form-message span {
  font-size: var(--fontsize-heading5);
  font-weight: 700;
}

.form .form-row .form-input input,
.form textarea {
  outline: none;
  width: 100%;
  border: 1px solid var(--neutral-color-6);
  border-width: 0 0 2px 0;
  color: var(--neutral-color-6);
  background: none;
  padding-bottom: 15px;
  font-size: var(--fontsize-heading5);
}

.form textarea {
  height: 150px;
}

.send-btn {
  margin-top: 15px;
}

.send-btn .contact-icon {
  width: 20px;
  height: 20px;
}

.send-btn:hover .contact-icon {
  transform: translate(6px, -6px);
}

.send-btn span {
  font-size: var(--fontsize-heading3);
}
</style>
