<template>
  <div class="usersList">
    <div
      class="userItem card-hover"
      v-for="user in users"
      :key="user.id"
      @click="navigateToUser(user.id)"
    >
      <div class="card-hover__content">
        <h3 class="card-hover__title">
          {{ user.name }}
        </h3>
        <h6>@{{ user.username }}</h6>
        <p class="card-hover__text">
          email: <br/>
          {{ user.email }}
        </p>
       
      </div>

      <img src="https://tramitador.org/img/user.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      required: true
    }
  },
  methods: {
    navigateToUser(userId) {
      this.$router.push(`/user/${userId}`);
        }
  }
};
</script>

<style lang="scss" scoped>
.usersList {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  align-items: center;
}

.card-hover {
  width: 300px;
  height: 428px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 32px -10px rgba(0, 0, 0, 0.08);

  &:hover {
    .card-hover__content {
      background-color: #dee8c2;
      transform: translateY(100%);
      transition: all 0.35s cubic-bezier(0.1, 0.72, 0.4, 0.97);
    }

    .card-hover__link {
      opacity: 1;
      transform: translate(-50%, 0%);
      transition: all 0.3s 0.35s cubic-bezier(0.1, 0.72, 0.4, 0.97);
    }
  }

  .card-hover__content {
    width: 100%;
    text-align: center;
    background-color: #86b971;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(0);
    transition: all 0.35s 0.35s cubic-bezier(0.1, 0.72, 0.4, 0.97);
    will-change: bottom, background-color, transform, padding;
    z-index: 1;

    &::before,
    &::after {
      content: '';
      width: 100%;
      height: 120px;
      background-color: inherit;
      position: absolute;
      left: 0;
      z-index: -1;
    }
  }

  .card-hover__title {
    font-size: 1.5rem;
    margin-bottom: 1em;
  }

  .card-hover__text {
    font-size: 0.75rem;
  }

  .card-hover__link {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translate(-50%, 10%);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-decoration: none;
    color: #2d7f0b;
    opacity: 0;
    padding: 10px;
    transition: all 0.35s;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: -1;
    transform: scale(1.2);
    transition: 0.35s 0.35s transform cubic-bezier(0.1, 0.72, 0.4, 0.97);
  }
}
</style>