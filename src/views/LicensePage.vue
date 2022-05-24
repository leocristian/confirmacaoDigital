<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
            <ion-back-button default-href="/moreinfo" ></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content>
      <div id="info-container">
          <h2>Termo de Uso</h2>
          <ion-card>
              <ion-content id="term-content">
                  <div id="term-text">
                    AUTORIZO o uso de minha imagem em todo e qualquer material entre imagens de vídeo, 
                    fotos e documentos, para ser utilizada pela Unillar. A presente autorização é concedida a 
                    título gratuito, abrangendo o uso da imagem acima mencionada em todo território nacional, das
                    seguintes formas: Para garantir a integridade do contrato e para declarar de forma unívoca para todos 
                    os fins que concedo e concordo com todos os termos e concordo também com a assinatura na forma digital 
                    e declaro ter consciência que a mesma é regida pela lei 14.063 de 2020.   
                    Fica ainda autorizada, de livre e espontânea vontade, para os mesmos fins, a cessão de direitos 
                    da veiculação das imagens não recebendo para tanto qualquer tipo de remuneração.
                    Por esta ser a expressão da minha vontade declaro que autorizo o uso acima descrito sem que nada haja a ser 
                    reclamado a título de direitos conexos à minha imagem.
                </div>
              </ion-content>
        </ion-card>
      </div>
      <div class="check-container">
           <ion-checkbox @click="setCheck()"></ion-checkbox>
           <span class="check-text">Estou de acordo e quero continuar.</span>
      </div>
    </ion-content>
    <ion-button expand="block" @click="confirmBtn()">Continuar</ion-button>
  </ion-page>
</template>

<script lang="ts">

import { IonContent, IonHeader, IonPage, 
         IonToolbar, IonButton, 
         IonCheckbox, IonCard, 
         IonBackButton, IonButtons,
         alertController
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
    IonCheckbox,
    IonCard,
    IonBackButton,
    IonButtons
  },
  data(){
    return { check: false }
  },
  methods: {
    setCheck(){
      this.check = !this.check
    },
    async confirmBtn(){
      if(!this.check){
				const alert = await alertController.create({
          header: 'Aviso',
          message: 'Você deve aceitar o termo de uso para continuar!',
          buttons: ['OK'],
        });
          await alert.present();
      } else {
        this.$router.push('documentInfo')
      }
    }
  }
});
</script>

<style scoped>
#info-container {
  margin: 20px;
}
#term-content{
    height: 450px;
    margin: 20px;
}
#term-text {
    margin: 20px;
}
.check-container {
    margin-top: 20px;
    margin-left: 30px;
    width: 300px;
}
.check-text {
    margin-left: 10px;
    color: #727171;
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
