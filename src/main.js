import * as THREE from "three";
import {Render} from "./components/Renderer";
import {Camera} from "./components/Camera";
import {player} from "./components/Player";
import {map, initializeMap} from "./components/Map";
import './style.css';
import {DirectionalLight} from "./components/DirectionalLight.js";


const scene = new THREE.Scene();
scene.add(player);
scene.add(map);

const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

const dirlight = DirectionalLight();
scene.add(dirlight);


const camera = Camera();
scene.add(camera);

initializeGame();

function initializeGame(){
    initializeMap();
}

const renderer = Render();
renderer.render(scene, camera);