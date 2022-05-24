<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
         <ion-back-button default-href="/photoInfo"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content>
      <div id="info-container">
        <h2>Captura de fotos</h2>
					<p>
						&emsp;Agora precisamos que você tire algumas fotos para validar sua identidade. 
						Estas fotos servirão apenas para certificarmos que é você mesmo o autor da compra.
					</p>
      </div>
			<div class="photos-info-container">
				<h4 class="photos-title">Suas fotos</h4>
				<span class="qtdphotos">{{ photos.length }}/2</span>
				<br>
				<span>{{ photoDescriptionArr[photos.length] }}</span>
			</div>
			<div v-if="photos.length===0">
      <div class="noPhotoInfo">
        <h3 class="noPhotoTitle">Nenhuma foto tirada!</h3>
        <p class="noPhotoDescription">
          Clique no ícone <ion-icon :icon="camera" /> para adicionar uma nova foto.
        </p>
      </div>
    </div>
    <div v-else>
			<ion-content id="card-photos">
					<ion-card>
						<ion-grid>
						<ion-row class="ion-justify-content-center">
							<ion-col size="5" :key="photo" v-for="photo in photos">
								<div class="photo-card">
									<ion-img :src="photo.webviewPath"></ion-img>
								</div>
							</ion-col>
						</ion-row>
					</ion-grid>
					</ion-card>
				<ion-icon class="remove-photos" :icon="closeOutline" @click="deletePhotos()"></ion-icon>
			</ion-content>
			
		</div>
			<div v-if="photos.length === 2">
				<ion-button expand="block" @click="continueBtn()">Pronto</ion-button>
			</div>
			<div v-else>
				<ion-fab vertical="bottom" horizontal="end" slot="fixed">
					<ion-fab-button @click="takePhoto()">
						<ion-icon :icon="camera"></ion-icon>
					</ion-fab-button>
				</ion-fab>
			</div>
    </ion-content>
		
  </ion-page>
</template>

<script lang="ts">

import {
	IonContent, IonHeader, IonPage, 
  IonToolbar, IonBackButton, IonButtons, 
  IonButton, IonFab, IonIcon, IonFabButton,
  IonCard, IonGrid, IonRow,
	IonCol, alertController
} from '@ionic/vue';

import { defineComponent } from 'vue';

import { camera, trash, closeOutline } from 'ionicons/icons';
import { usePhotoGallery } from '@/composables/userPhotoGalery';

export default defineComponent({
  name: 'PhotoInfoPage',
  components: {
    IonContent, IonHeader, IonPage, IonToolbar, IonBackButton, IonButtons, IonButton, IonFab, 
		IonIcon, IonFabButton, IonCard, IonGrid, IonRow, IonCol
  },
	data() {
		return { 
			qtdPhotos: 0,
			photoDescriptionArr: [
				"Tire uma selfie segurando seu documento ao lado do seu rosto.",
				"Agora tire uma foto apenas do seu RG frente e verso"
			]
		}
	},
	methods: {
		continueBtn(){
			this.$router.push('confirmInfo')
		},
		deletePhotos() {
			return alertController.create({
          header: 'Apagar fotos?',
          message: 'Deseja apagar as fotos tiradas? Você precisará tirar novas fotos.',
          buttons: [
            {
              text: 'Não',
              role: 'cancel',
              cssClass: 'secondary'
            },
            {
              text: 'Sim',
              handler: () => {
								for (let i = this.photos.length; i > 0; i--){
									this.photos.pop()
								}
              },
            },
          ],
        })
        .then(a => a.present())
		}
	},
  setup() {
    const { photos, takePhoto } = usePhotoGallery();
    return {
      photos,
      takePhoto,
      camera,
			trash,
			closeOutline
    };
  }
});
</script>

<style scoped>
.remove-photos {
	display: block;
  margin: 0px auto;
	width: 30px;
	height: 30px;
	color: #a10000;
}
.noPhotoInfo {
  margin-top: 100px;
  margin-left: 10%;
  width: 300px;
  align-items: center;
  text-align: center;
	color: #727070;
}
.photos-info-container {
	margin: 20px;
}
.qtdphotos {
	color: red;
}
#info-container {
  margin: 20px;
}
#card-photos {
	height: 400px;
}
.photo-card {
	width: 110px;
	height: 110px;
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
