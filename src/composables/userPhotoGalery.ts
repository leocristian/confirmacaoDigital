import { ref } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

const photos = ref<UserPhoto[]>([]);

export function usePhotoGallery() {
  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    const fileName = new Date().getTime() + '.jpeg';
    const savedFileImage = {
      filepath: fileName,
      webviewPath: photo.webPath,
    };

    photos.value = [savedFileImage, ...photos.value];
  };
  return {
    photos, 
    takePhoto
  };
}
export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}
