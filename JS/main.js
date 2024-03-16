import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js';

// Scene setup
const scene = new THREE.Scene();

// Create camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5); // Adjusted camera position

// Create renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lights
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0x00008B, 3);
directionalLight.position.set(1, 1, 1).normalize(); // Normalize directional light position
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xffffff, 0.8);
pointLight.position.set(0, 3, 0);
scene.add(pointLight);

// Create textures
// Create textures
const floorTexture = new THREE.TextureLoader().load('Texture/floor.png');
const wallTexture = new THREE.TextureLoader().load('Texture/mid.png');
const barrelTexture = new THREE.TextureLoader().load('Texture/barrel.jpg');
const boxTexture = new THREE.TextureLoader().load('Texture/box.jpg');
const screenTexture = new THREE.TextureLoader().load('Texture/loading_Screen.jpg');
const tvScreenTexture = new THREE.TextureLoader().load('Texture/Kingdom_hearts.jpg');

//GEOMETRIES
// Create floor
const floorGeometry = new THREE.PlaneGeometry(20, 15);
const floorMaterial = new THREE.MeshStandardMaterial({ map: floorTexture });
const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
floorMesh.rotation.x = -Math.PI / 2; // Rotate to lay flat
scene.add(floorMesh);

// Create walls
const wallMaterial = new THREE.MeshStandardMaterial({ map: wallTexture });

// Right wall
const rightWallGeometry = new THREE.PlaneGeometry(15, 6);
const rightWallMesh = new THREE.Mesh(rightWallGeometry, wallMaterial);
rightWallMesh.position.set(10, 3, 0);
rightWallMesh.rotation.y = -Math.PI / 2;
scene.add(rightWallMesh);

// Left wall
const leftWallGeometry = new THREE.PlaneGeometry(15, 6);
const leftWallMesh = new THREE.Mesh(leftWallGeometry, wallMaterial);
leftWallMesh.position.set(-10, 3, 0);
leftWallMesh.rotation.y = Math.PI / 2;
scene.add(leftWallMesh);

// Middle wall
const middleWallGeometry = new THREE.PlaneGeometry(20, 6);
const middleWallMesh = new THREE.Mesh(middleWallGeometry, wallMaterial);
middleWallMesh.position.set(0, 3, -7.5);
scene.add(middleWallMesh);

// Create cylinder
const cylinderGeometry = new THREE.CylinderGeometry(1, 1, 4, 32); 
const cylinderMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 }); 
const cylinderMesh = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
cylinderMesh.position.set(8, 2, 6); 
const cylinderMaterialWithTexture = new THREE.MeshStandardMaterial({ map: barrelTexture });
cylinderMesh.material = cylinderMaterialWithTexture;

const smallerCylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 3, 50); // Adjust radiusTop, radiusBottom, and height as needed
const smallerCylinderMesh = new THREE.Mesh(smallerCylinderGeometry, cylinderMaterialWithTexture); // Reusing the material with texture
smallerCylinderMesh.position.set(-8, 1.5, 6);
scene.add(smallerCylinderMesh);
scene.add(cylinderMesh);

//box
const boxMaterialWithTexture = new THREE.MeshStandardMaterial({ map: boxTexture });
const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterialWithTexture);
boxMesh.position.set(-10, 1, 6);
scene.add(boxMesh);

const secondBoxTexture = new THREE.TextureLoader().load('Texture/box.jpg');
const secondBoxMaterialWithTexture = new THREE.MeshStandardMaterial({ map: secondBoxTexture });
const secondBoxGeometry = new THREE.BoxGeometry(2, 2, 2);
const secondBoxMesh = new THREE.Mesh(secondBoxGeometry, secondBoxMaterialWithTexture);
secondBoxMesh.position.set(-8, .9, -6); 
scene.add(secondBoxMesh);

const thirdBoxTexture = new THREE.TextureLoader().load('Texture/box.jpg');
const thirdBoxMaterialWithTexture = new THREE.MeshStandardMaterial({ map: thirdBoxTexture });
const thirdBoxGeometry = new THREE.BoxGeometry(2, 2, 2);
const thirdBoxMesh = new THREE.Mesh(thirdBoxGeometry, thirdBoxMaterialWithTexture);
thirdBoxMesh.position.set(-5.5, 0.9, -6); 
scene.add(thirdBoxMesh);

const fourthBoxTexture = new THREE.TextureLoader().load('Texture/box.jpg');
const fourthBoxMaterialWithTexture = new THREE.MeshStandardMaterial({ map: fourthBoxTexture });
const fourthBoxGeometry = new THREE.BoxGeometry(2, 2, 2);
const fourthBoxMesh = new THREE.Mesh(fourthBoxGeometry, fourthBoxMaterialWithTexture);
fourthBoxMesh.position.set(-6, .2, -3.7); 
scene.add(fourthBoxMesh);

const shinyMaterial = new THREE.MeshPhongMaterial({ color: 0xffd700, shininess: 100 });
const rectangleGeometry = new THREE.BoxGeometry(1, .5, 1);
const rectangleMesh = new THREE.Mesh(rectangleGeometry, shinyMaterial);
rectangleMesh.position.set(-5.5, 1.9, -6);
scene.add(rectangleMesh);

const fifthBoxTexture = new THREE.TextureLoader().load('Texture/box.jpg');
const fifthBoxMaterialWithTexture = new THREE.MeshStandardMaterial({ map: fifthBoxTexture });
const fifthBoxGeometry = new THREE.BoxGeometry(2, 2, 2);
const fifthBoxMesh = new THREE.Mesh(fifthBoxGeometry, fifthBoxMaterialWithTexture);
fifthBoxMesh.position.set(5, 1, -6); // Adjust position as needed
scene.add(fifthBoxMesh);

// worn box
const wornTexture = new THREE.TextureLoader().load('Texture/worn.jpg');
const wornMaterial = new THREE.MeshStandardMaterial({ map: wornTexture });
const newBoxGeometry = new THREE.BoxGeometry(2, 2, 2); // Adjust size as needed
const newBoxMesh = new THREE.Mesh(newBoxGeometry, wornMaterial);
newBoxMesh.position.set(8, 1, -6); // Adjust position as needed
scene.add(newBoxMesh);

//sphere light
const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32); 
const yellowMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, emissive: 0xffff00 });
const sphereMesh = new THREE.Mesh(sphereGeometry, yellowMaterial);
sphereMesh.position.set(8, 3, -6); 
scene.add(sphereMesh);

//light on the sphere
const yellowLight = new THREE.PointLight(0xffff00, 20, 100); 
yellowLight.position.set(8, 3, -6); 
scene.add(yellowLight);


// Add orbital camera control
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
controls.maxPolarAngle = Math.PI / 2;

// Render loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();