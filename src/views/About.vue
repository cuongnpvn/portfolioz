<template>
  <Header />
  <section class="hero border-gray">
    <h1 class="hero-tag">About me</h1>
    <p class="hero-desc paragraph">
      I'm a ungraduate student from University of Information & Technology (UIT)
      in Ho Chi Minh city. I have worked in front-end developver since summer
      2020 and currently I'm working as intern in YWmobile company.
    </p>
    <img src="@/assets/about.jpg" alt="" class="hero-img" />
    <div class="hero-info">
      <div class="info-col">
        <h2 class="info-name">My story</h2>
        <p class="info-content paragraph">
          I learn to build website through Class's projects and bootcamp event.
          I used VueJS a lot so this is the tool that I feel comfortable the
          most.
        </p>
      </div>
      <div class="info-col">
        <h2 class="info-name">My journey</h2>
        <p class="info-content paragraph">
          I'm currently a University's student planed to graduate next summer.
          I'm work as an intern at YWmobile.
        </p>
      </div>
    </div>
  </section>
  <section class="experience border-gray">
    <h2 class="experience-tag">My past experience</h2>
    <div class="experience-content">
      <div class="content-card border-gray">
        <div class="card-company">
          <h4 class="company-name">Not yet...</h4>
          <p class="company-desc paragraph">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur numquam saepe voluptatem aperiam soluta aut.
          </p>
          <div class="contact website">
            <span>View Website</span>
            <img
              src="@/assets/icon-arrow-contact.svg"
              alt=""
              class="contact-icon"
            />
          </div>
        </div>
        <div class="card-role">
          <h4 class="role-name">Front-end Developer</h4>
          <div class="role-time">
            <span>Jan 2022</span>
            <div class="time-hline"></div>
            <span> Present </span>
          </div>
          <ul class="role-desc paragraph">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsam
              sit autem.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsam
              sit autem.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsam
              sit autem.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section class="skill border-gray">
    <div class="skill-tag">My skills</div>
    <div class="skill-wrap">
      <div class="skill-card">
        <h4 class="card-name">UI Design</h4>
        <p class="card-desc paragraph">
          I have design couple of my project, just to understand the basic of
          Designing. I mostly use Figma for design tasks.
        </p>
      </div>
      <div class="skill-card">
        <h4 class="card-name">VueJS</h4>
        <p class="card-desc paragraph">
          Most of my projects I use VueJS, I also can work with other frameworks
        </p>
      </div>
      <div class="skill-card">
        <h4 class="card-name">Research & Analysis</h4>
        <p class="card-desc paragraph">
          I did research in University about Network Security and we got a
          published paper.
        </p>
      </div>
      <div class="skill-card">
        <h4 class="card-name">Not yet...</h4>
        <p class="card-desc paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fuga
          perferendis molestias, nihil delectus maxime! Corrupti, illo.
        </p>
      </div>
      <div class="skill-card">
        <h4 class="card-name">Not yet...</h4>
        <p class="card-desc paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fuga
          perferendis molestias, nihil delectus maxime! Corrupti, illo.
        </p>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "About",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.hero-tag {
  font-size: var(--fontsize-heading1);
  font-weight: 500;
  color: var(--neutral-color-9);
}

.hero-desc {
  width: 80%;
}

.hero-img {
  width: 100%;
  height: 50vh;
  border-radius: 15px;
  object-fit: cover;
  margin-bottom: 5vh;
}

.hero-info {
  display: flex;
  gap: 50px;
}

.hero-info .info-col {
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.hero-info .info-col .info-name {
  font-size: var(--fontsize-heading2);
  font-weight: 500;
}

.experience {
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.experience-tag {
  font-size: var(--fontsize-heading2);
  font-weight: 500;
  color: var(--neutral-color-9);
}

.experience-content {
  display: flex;
  flex-direction: column;
}

.experience-content .content-card {
  padding: 5vh 0;
  display: flex;
}

.experience-content .content-card:last-child {
  border: none;
  padding-bottom: 0;
}

.experience-content .content-card .card-company {
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.experience-content .content-card .card-company .company-name,
.experience-content .content-card .card-role .role-name {
  font-size: var(--fontsize-heading3);
}

.experience-content .content-card .card-company .company-desc {
  margin-bottom: 10px;
  width: 80%;
}

.experience-content .content-card .card-company .website {
  margin-top: 15px;
}

.experience-content .content-card .card-company .website span {
  font-size: 16px;
}

.experience-content .content-card .card-role {
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
}

.experience-content .content-card .card-role .role-name {
  margin-bottom: 13px;
}

.experience-content .content-card .card-role .role-time {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 15px;
}

.experience-content .content-card .card-role .role-time span {
  color: var(--neutral-color-5);
}

.experience-content .content-card .card-role .role-time .time-hline {
  width: 15px;
  height: 2px;
  background: var(--neutral-color-5);
}

.experience-content .content-card .card-role .role-desc li {
  margin-left: 20px;
  margin-bottom: 10px;
}

.skill {
  display: flex;
  flex-direction: column;
  gap: 70px;
}

.skill-tag {
  font-size: var(--fontsize-heading2);
  font-weight: 500;
  color: var(--neutral-color-9);
}

.skill-wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 45px 35px;
}

.skill-wrap .skill-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.skill-wrap .skill-card .card-name {
  font-size: var(--fontsize-heading3);
  font-size: 500;
}
</style>
