<template>
    <div class="albumsList">

            <div class="albumItem card-hover" v-for="album in albums" :key="album.id">
                <div class="card-hover__content">
                    <h3 class="card-hover__title">
                        {{ album.title }}
                    </h3>
                    
                </div>
                
                <img src="https://i.pinimg.com/originals/3c/4c/08/3c4c08a97a8fbeea6e6384a30551f533.jpg" alt="" />
            </div>
        </div>
  </template>
  
  <script>
  export default {
    props: {
      albums: {
        required: true,
      },
      user_name: {
        required: true,
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  
  .albumsList {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    align-items: center;
    margin: 20px 50px;
  
  }
  
  .card-hover {
    width: 200px;
    height: 285px;
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
        font-size: 16px;
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
  