import {
  AmbientLight,
  Fog,
  SphereGeometry,
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  RingGeometry,
  MeshPhysicalMaterial,
  MeshNormalMaterial,
  IcosahedronBufferGeometry,
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  MeshPhongMaterial,
} from 'three';

// const fog = new Fog(0x3f7b9d);

const scene = new Scene();

const camera = new PerspectiveCamera(
  60, window.innerWidth / window.innerHeight, 1, 1000
);

const renderer = new WebGLRenderer();
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// const geometry = new SphereGeometry(1, 32, 16);
const geometry = new IcosahedronBufferGeometry( 25, 3 )
const material = new MeshBasicMaterial({
  color: 0xF5F5F5,
});
// const material = new MeshPhongMaterial({
//   color: 0xFF0000,
//   flatShading: true,
// });
// const material = new MeshNormalMaterial();
// const material = new MeshPhysicalMaterial({
//   color: 0xF5F5F5,
//   emissive: 0x0,
//   roughness: 0.5,
//   metalness: 0.5,
//   reflectivity: 0.5,
//   clearcoat: 0,
//   clearcoatRoughness: 0,
// });
const light = new AmbientLight(0x0); // soft white light

const sphere = new Mesh(geometry, material);
// sphere.position.x = -1;
// sphere.position.y = -1;
sphere.position.z = -100;
// scene.add(light);

scene.add(sphere);

const yellowRing = new Mesh( new RingGeometry( 32, 35, 32 ), new MeshBasicMaterial( { color: 0xffff00, side: DoubleSide } ) );
const purpleRing = new Mesh( new RingGeometry( 32, 35, 32 ), new MeshBasicMaterial( { color: 0xce93d8, side: DoubleSide } ) );
const blueRing = new Mesh( new RingGeometry( 32, 35, 32 ), new MeshBasicMaterial( { color: 0x64b5f6, side: DoubleSide } ) );

// const ring = new Mesh( new RingGeometry( 32, 35, 32 ), new MeshBasicMaterial( { color: 0xffff00, side: DoubleSide } ) );
yellowRing.position.z = -100;
purpleRing.position.z = -100;
blueRing.position.z = -100;
yellowRing.rotateX(1.8);
// purpleRing.rotateY(90);
// purpleRing.rotateZ(90);
purpleRing.rotateY(1.1);
purpleRing.rotateX(2.2);
blueRing.rotateX(1.9);
blueRing.rotateY(0.9);
scene.add(yellowRing);
scene.add(purpleRing);
scene.add(blueRing);

camera.position.z = 5;

function animate() {
  // sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  // yellowRing.rotation.x += 0.01;
  yellowRing.rotation.z += 0.01;

  // purpleRing.rotation.x += 0.01;
  // purpleRing.rotation.y += 0.01;

  // blueRing.rotation.z += 0.01;
  // blueRing.rotation.y += 0.01;
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
// renderer.render(scene, camera);
animate();
