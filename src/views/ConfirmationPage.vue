<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
            <ion-back-button default-href="/photoDocPage" ></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <div id="info-container">
        <h2>Pronto!</h2>
        <h5>Obrigado por contribuir com suas informações, boas compras!</h5>
        <img class="logo-png" src="../../public/assets/logo-unillar.png" alt="">
      </div>
    </ion-content>
    <ion-button expand="block" @click="terminate()">Finalizar</ion-button>
  </ion-page>
</template>

<script lang="ts">
import { getUserData } from '@/composables/userData';
import { IonContent, IonHeader, IonPage, 
         IonToolbar, IonButton, IonBackButton, IonButtons
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent, IonHeader, IonPage,
    IonToolbar, IonButton,
    IonBackButton, IonButtons
  },
  data() {
    return {
      userInfo: {
        position: {
          latitude: 0,
          longitude: 0
        },
        datetime: 0
      }
    }
  },
  methods: {
    terminate(){
      window.location.replace('http://www.google.com');
    }
  }
});
</script>

<style scoped>
#info-container {
  margin: 20px;
}
.logo-png {
  margin-top: 80px;
}
.button{
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 90%;
  transform: translateY(-90%);
  margin: 10px;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
