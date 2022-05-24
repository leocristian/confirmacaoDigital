<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
            <ion-back-button default-href="/home" ></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large"></ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="info-container">
        <h2>Como Funciona</h2>
        <h3>Um método simples e rápido de validação pelo celular</h3>
          <p class="info-description">&emsp; Para validar sua identidade, usaremos um método chamado assinatura digital. 
            Uma forma mais simples de garantir que suas informações são verdadeiras sem a necessidade de 
            você comparecer fisicamente à loja, usando apenas seu celular. 
            <a 
              href="https://www.in.gov.br/en/web/dou/-/lei-n-14.063-de-23-de-setembro-de-2020-279185931"
              target="_blank">
              Clique aqui para mais informações.
						</a>
          </p>
					<p>&emsp; Para isso, só precisaremos de algumas fotos suas, sendo elas: </p>
					<ul>
						<li>Um a foto do seu rosto segurando seu RG ou CNH;</li>
						<li>Uma foto apenas do seu RG ou CNG frente e verso;</li>
						<li>Seu número de CPF.</li>
					</ul>
					<p>&emsp; Mas antes disso, você precisa autorizar o envio dessas fotos concordando com um termo de uso.
						Clique no botão abaixo para visualizar o termo.
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
         IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MoreInfoPage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonButtons, 
    IonBackButton
  },
  methods: {
    confirmBtn(){
      this.$router.push('license')
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
