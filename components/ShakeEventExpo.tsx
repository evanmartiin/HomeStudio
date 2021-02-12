import { Accelerometer } from 'expo-sensors';

const THRESHOLD = 150; // Définition de la sensibilité de la détection de mouvement du téléphone, plus c'est bas, plus c'est sensible
class ShakeEventExpo {
    static addListener(handler: any) {
        let last_x: any, last_y: any, last_z: any; // Définition des 3 variables des 3 axes 3D
        let lastUpdate = 0;
        Accelerometer.addListener(accelerometerData => {
            let { x, y, z } = accelerometerData;
            let currTime = Date.now();
            if ((currTime - lastUpdate) > 100) { // Vérification qui se réalise 10 fois par secondes
                let diffTime = (currTime - lastUpdate);
                lastUpdate = currTime;
                let speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000; // Calcul de la vitesse de 'secouage' du téléphone
                if (speed > THRESHOLD) { // Si le 'secouage' est plus intense que la limite de sensibilité définie précédemment, alors on réalise la fonction liée
                    handler();
                }
                last_x = x;
                last_y = y;
                last_z = z;
            }
        });
    }
    static removeListener() {
        Accelerometer.removeAllListeners()
    }
};

export default ShakeEventExpo