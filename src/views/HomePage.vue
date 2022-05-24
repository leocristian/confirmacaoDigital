<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Seja Bem-Vindo</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">   
      <div id="info-container">
        <h2>Olá</h2>
        <h3>Bem-Vindo ao assistente de assinatura digital da Unillar.</h3>
          <p class="info-description">&emsp; Precisaremos que você tire algumas fotos para validar sua identidade na compra.
            Clique no botão abaixo para seguir para o próximo passo.
          </p>
      </div>
      <div class="button">
        <ion-button expand="block" @click="confirmBtn()">Continuar</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, 
         IonTitle, IonToolbar, IonButton
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton
  },
  methods: {
    confirmBtn(){
      this.$router.push('moreInfo')
    }
  }
});
</script>

<style scoped>
#info-container {
  margin: 20px;
  color: #505050;
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
