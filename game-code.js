

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer();
var finalCameraPosition = 10;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.domElement.id = "3d-dom";
renderer.domElement.classList.add("off");

document.getElementById("shoe-div").appendChild(renderer.domElement);

window.addEventListener("resize", function () {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});




//adjust camera-zoom
if (window.innerWidth <= 767) {
  var Start = function () {
    camera.position.set(0, 0, 30);

    //  scene.background = new THREE.Color(0x88888);
  };

  // alert("This is a mobile device.");
} else {
  var Start = function () {
    camera.position.set(0, 0, 15);
  };

  // alert("This is a tablet or desktop.");
}

// const cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
// const cubeMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
// const cubeMesh = new THREE.Mesh( cubeGeometry, cubeMaterial );
// cubeMesh.position.set(0,0,0)
// scene.add( cubeMesh );

var ambiantLight = new THREE.AmbientLight(0xffffff, 1);

scene.add(ambiantLight);
scene.background = new THREE.Color(0xffffff);

controls = new THREE.OrbitControls(camera, renderer.domElement);

var loader = new THREE.GLTFLoader();

loader.load("model/ascis-nimbus-20/scene.gltf", function (gltf) {
  gltf.scene.position.set(5, -15, 7);
  //gltf.scene.position.set(0, 0, 7);

  scene.add(gltf.scene);
});

//  var material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});

//  var cube = new THREE.Mesh(geometry, material);

//called once at the beginning of the game

let frame = 0;
var Update = function () {
  if (frame == 0) {
    Start();
    frame += 1;
  }
};

var Render = function () {
  renderer.render(scene, camera);
};

var GameLoop = function () {
  requestAnimationFrame(GameLoop);

  Update();
  Render();
};

GameLoop();
