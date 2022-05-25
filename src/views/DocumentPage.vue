<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
            <ion-back-button default-href="/license" ></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <div id="info-container">
        <h2>Confirme os dados da sua compra.</h2>
				<ion-card>
					<ion-content class="minuta-content">
						<img class="minuta-img" src="../../public/assets/minuta.jpeg">
					</ion-content>
				</ion-card>
      </div>
      <div class="check-container" >
           <ion-checkbox @click="setCheck()"></ion-checkbox>
           <span class="check-text">Minha compra está correta.</span>
      </div>
    </ion-content>
    <ion-button expand="block" @click="continueBtn()">Continuar</ion-button>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, 
         IonToolbar, IonButton, IonBackButton, 
         IonButtons, alertController, IonCard,
         IonCheckbox
} from '@ionic/vue';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DocumentPage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButton,
    IonBackButton,
    IonButtons,
		IonCard,
    IonCheckbox
  },
  data(){
      return { check: false }
  },
  methods: {
      setCheck(){
      this.check = !this.check
    },
    async continueBtn(){
			if(!this.check){
				const alert = await alertController.create({
          header: 'Aviso',
          message: 'Você deve confirmar sua compra para continuar!',
          buttons: ['OK'],
        });
        await alert.present();
      } else {
        this.$router.push('photoInfo')
      }
    }
  }
});
</script>

<style scoped>
.check-container {
	margin-top: 20px;
	margin-left: 30px;
	width: 300px;
}
.minuta-content {
	height: 400px;
}
.check-text {
	margin-left: 10px;
	color: #727171;
}
.minuta-img {
	height: 700px;
	display: block;
  margin: 0px auto;
}
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
