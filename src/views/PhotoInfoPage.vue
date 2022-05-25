<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
         <ion-back-button default-href="/documentInfo"></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <div id="info-container">
        <h2>Foto com documento</h2>
          <p>&emsp;Agora vamos precisar tirar uma foto sua segurando um documento.
            Certifique-se de verificar todos os itens abaixo para tirar suas fotos.</p>
          <ul>
            <li>Documento de RG ou CNH em mãos;</li>
            <li>Esteja em um ambiende claro;</li>
            <li>Câmera frontal do celular está ativada.</li>
          </ul>
      </div>
      <div v-if="photos.length === 0">
        <p class="photo-text">Siga o exemplo abaixo para tirar a foto.</p>
        <img class="img-example" src="../../public/assets/ilustrations/selfie-documento.png">
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
          <ion-img :src="photos[0].webviewPath"></ion-img>
				</div>
      </div>
    </ion-content>
    <div v-if="photos.length != 0">
      <div class="btns-container">
        <ion-button color="success" @click="confirmBtn()">Continuar</ion-button>
      </div>
    </div>
  </ion-page>
</template>

<script lang="ts">
import { 
  IonContent, IonHeader, IonPage, 
  IonToolbar, IonBackButton, IonButtons, 
  IonButton, IonIcon, IonFab, alertController, IonImg
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { camera, trash, closeOutline } from 'ionicons/icons';
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
    IonFab,
    IonImg
  },
  setup() {
    const { photos, takePhoto } = usePhotoGallery();

    return {
      camera,
      trash,
      photos,
      takePhoto,
      closeOutline
    }
  },
  data(){
    return { check: false }
  },
  methods: {
    deletePhoto() {
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
								this.photos.pop()
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
      this.$router.push('photoDocPage')
    }
  }
});
</script>

<style scoped>
.btns-container {
  display: flex;
}
.icon-close {
  width: 40px;
	height: 40px;
  margin-right: 10px;
	color: #a10000;
}
.camera-icon {
  margin-right: 10px;
}
#info-container {
  margin: 20px;
  margin-bottom: 60px;;
}
.photo-card {
  margin: 20px;
}
.photo-text {
  margin-top: -30px;
  margin-left: 20px;
  margin-bottom: 30px;
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
