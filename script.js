const textContainer = document.querySelector('.text-container');
let easeFactor = 0.02;
let scene, camera, renderer, planeMesh;
let mousePosition = {x: 0.5, y: 0.5};
let targetMousePositon = {x: 0.5, y: 0.5};
let prevPosition = {x: 0.5, y: 0.5};

const vetexShader = `
    varying vec2 vUv;
    void main(){
        VUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(positiomn, 1.0);
    }

`;

