import * as THREE from 'three';
export function Camera() {
    const size = 300;
    const viewRation = window.innerWidth / window.innerHeight;
    const width = viewRation < 1 ? size : size * viewRation;
    const height = viewRation < 1 ? size : viewRation * size;

    const camera = new THREE.OrthographicCamera(
        width / -2,
        width / 2,
        height / 2,
        height / -2,
        100,
        900
    );
    camera.up.set(0, 0, 1);
    camera.position.set(300, -300, 300);
    camera.lookAt(0, 0, 0);
    return camera;
}