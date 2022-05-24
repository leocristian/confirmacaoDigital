<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
            <ion-back-button default-href="/takePhoto" ></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <div id="info-container">
        <h2>Tudo Pronto</h2>
        <h3>Agora é só clicar no botão abaixo para confirmar o envio dos seus dados.</h3>
      </div>
    </ion-content>
    <ion-button expand="block" @click="downloadDoc()">Visualizar Minuta</ion-button>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, 
         IonToolbar, IonButton, IonBackButton, IonButtons
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButton,
    IonBackButton,
    IonButtons
  },
  methods: {
    downloadDoc(){
      window.open('src/kk.pdf') //to open in new tab
    }
  }
});
</script>

<style scoped>
#info-container {
  margin: 20px;
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
