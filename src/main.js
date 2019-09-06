import {
  DoubleSide,
  Mesh,
  MeshLambertMaterial,
  TorusBufferGeometry,
  IcosahedronBufferGeometry,
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  MeshPhongMaterial,
  PointLight
} from 'three';

// set up scene
const scene = new Scene();

// set up camera
const camera = new PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  1,
  1000
);
camera.position.z = 10;
camera.position.x = 5;
camera.position.y = 15;

// set up renderer
const renderer = new WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// here comes some light
const light = new PointLight(0xffffff);
light.position.set(10, 0, 25);
scene.add(light);

// let's add the sphere
const sphere = new Mesh(
  new IcosahedronBufferGeometry(25, 3),
  new MeshLambertMaterial({ color: 0xf5f5f5 })
);
sphere.position.z = -100;
scene.add(sphere);

// yellow ring
const yellowRing = new Mesh(
  new TorusBufferGeometry(37, 1.5, 32, 100, 0, Math.PI * 2),
  new MeshPhongMaterial({ color: 0xffff00, side: DoubleSide })
);
yellowRing.position.z = -100;
yellowRing.rotateX(Math.PI / 2);
scene.add(yellowRing);

// purple ring
const purpleRing = new Mesh(
  new TorusBufferGeometry(35, 1.5, 32, 100, 0, Math.PI * 2),
  new MeshPhongMaterial({ color: 0xce93d8, side: DoubleSide })
);
purpleRing.position.z = -100;
purpleRing.rotateZ(Math.PI / 6);
purpleRing.rotateY(Math.PI / 2);
scene.add(purpleRing);

// blue ring
const blueRing = new Mesh(
  new TorusBufferGeometry(39, 1.5, 32, 100, 0, Math.PI * 2),
  new MeshPhongMaterial({ color: 0x64b5f6, side: DoubleSide })
);
blueRing.position.z = -100;
blueRing.rotateZ((Math.PI / 6) * 11);
blueRing.rotateY((Math.PI / 2) * 3);
scene.add(blueRing);

function animate() {
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;

  yellowRing.rotation.x += 0.01;
  yellowRing.rotation.y -= 0.01;

  purpleRing.rotation.x += 0.01;
  purpleRing.rotation.y += 0.01;

  blueRing.rotation.x += 0.01;
  blueRing.rotation.y += 0.01;

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

// let's animate it
animate();
