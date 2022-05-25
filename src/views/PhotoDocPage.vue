<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
         <ion-back-button default-href="/photoInfo"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
    
      <div id="info-container">
        <h2>Foto apenas do documento</h2>
          <p>&emsp;Agora vamos precisar tirar uma foto apenas do seu documento frente e verso.
            Certifique-se de que seu RG ou CNH está legível e siga os passos abaixo.</p>
          <ul>
              <li>Coloque o documento uma superfície plana;</li>
              <li>Esteja em um ambiende claro;</li>
              <li>Câmera traseira do celular está ativada.</li>
          </ul>
      </div>
      <div v-if="photos.length === 1">
        <p class="photo-text">Posicione o documento ao centro da câmera como mostra a imagem abaixo.</p>
        <img class="img-example" src="../../public/assets/ilustrations/foto-rg.jpg">
      <div class="button">
        <ion-button expand="block" @click="takePhoto()">
          <ion-icon class="camera-icon" :icon="camera"></ion-icon>
          Tirar foto
        </ion-button>
      </div>
      </div>
      <div v-else>
        <p class="photo-text">Certifique-se de que sua foto ficou boa e aperte em continuar. 
          Ou clique no X do canto superior direito para apagar a foto.
        </p>
        <div class="photo-card">
          <ion-fab horizontal="end" @click="deletePhoto()">
            <ion-icon class="icon-close" :icon="closeOutline"></ion-icon>
          </ion-fab>
						<ion-img class="photo"  :src="photos[1].webviewPath">
            </ion-img>
						<ion-button color="success" @click="confirmBtn()">Continuar</ion-button>
				</div>
        <div class="btns-container">
          <ion-button color="success" @click="confirmBtn()">Continuar</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonToolbar,
         IonBackButton, IonButtons, IonButton, IonIcon, 
					alertController, IonImg, IonFab
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { camera, closeOutline } from 'ionicons/icons';
import { usePhotoGallery } from '@/composables/userPhotoGalery';

export default defineComponent({
  name: 'PhotoInfoPage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonButton,
    IonIcon,
		IonImg,
		IonFab
  },
  setup() {
    const { photos, takePhoto } = usePhotoGallery();

    return {
      camera,
      photos,
      takePhoto,
      closeOutline
    }
  },
  data(){
    return { check: false }
  },
  methods: {
    deletePhoto(){
			return alertController.create({
				header: 'Apagar foto?',
				message: 'Deseja apagar a foto tirada? Você precisará tirar uma foto nova.',
				buttons: [
					{
						text: 'Não',
						role: 'cancel',
						cssClass: 'secondary'
					},
					{
						text: 'Sim',
						handler: () => {
							this.photos.pop();
						},
					},
				],
			})
			.then(a => a.present())
    },
    setCheckBtn(){
      this.check = !this.check
    },
    confirmBtn(){
      this.$router.push('confirmInfo')
    }
  }
});
</script>

<style scoped>
.icon-close {
  width: 40px;
	height: 40px;
  margin-right: 10px;
	color: #a10000;
}
.photo-text {
  margin-top: -50px;
  margin-left: 20px;
  margin-bottom: 30px;
}
.camera-icon {
  margin-right: 10px;
}
#info-container {
  margin: 20px;
  margin-bottom: 60px;;
}
.button{
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 95%;
  transform: translateY(-90%);
  margin: 10px;
}
.img-example {
	margin-left: 10px;
}
.photo-card {
  margin: 20px;
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
