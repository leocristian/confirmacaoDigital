<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
         <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
    
      <div id="info-container">
        <h2>Foto com documento</h2>
          <p>&emsp;Certifique-se de verificar todos os itens abaixo para tirar suas fotos.</p>
          <ul>
              <li>Documento de RG ou CNH em mãos;</li>
              <li>Esteja em um ambiende claro;</li>
              <li>Câmera frontal do celular está ativada.</li>
          </ul>
          <p>Siga o exemplo abaixo para tirar a foto.</p>
      </div>
      <img class="img-example" src="../../public/assets/ilustrations/selfie-documento.png">
      <div class="button">
        <ion-button expand="block" @click="confirmBtn()">Tirar fotos</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonToolbar, IonBackButton, IonButtons, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'PhotoInfoPage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonButton
  },
  data(){
    return { check: false }
  },
  methods: {
    setCheckBtn(){
      this.check = !this.check
    },
    confirmBtn(){
      this.$router.push('takePhoto')
    }
  }
});
</script>

<style scoped>
#info-container {
  margin: 20px;
  margin-bottom: 60px;;
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
.img-example {
  display: block;
  margin: 0px auto;
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
