import * as THREE from "three";
import {Render} from "./components/Renderer";
import {Camera} from "./components/Camera";
import {player} from "./components/Player";
import {map, initializeMap} from "./components/Map";
import './style.css';


const scene = new THREE.Scene();
scene.add(player);
scene.add(map);

const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

const dirlight = new THREE.DirectionalLight();
dirlight.position.set(-100, -100, 200);
scene.add(dirlight);


const camera = Camera();
scene.add(camera);

initializeGame();

function initializeGame(){
    initializeMap();
}

const renderer = Render();
renderer.render(scene, camera);