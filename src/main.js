import * as THREE from "three";
import {Render} from "./components/Renderer";
import {Camera} from "./components/Camera";
import {player} from "./components/player";
import './style.css';


const scene = new THREE.Scene();
scene.add(player);

const camera = Camera();
scene.add(camera);

const renderer = Render();
renderer.render(scene, camera);