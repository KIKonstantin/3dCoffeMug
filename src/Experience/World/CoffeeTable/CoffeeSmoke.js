import * as THREE from 'three';
import Experience from '../../Experience';
import vertexShader from '../../Shaders/coffeeSmoke/vertex.glsl';
import fragmentShader from '../../Shaders/coffeeSmoke/fragment.glsl';

export default class CoffeeSmoke {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.vertexShader = vertexShader;
        this.fragmentShader = fragmentShader;
        this.setGeometry();
        this.setTextures();
        this.setMaterial();
        this.setMesh();
    }
    setGeometry() {
        this.geometry = new THREE.PlaneGeometry(1, 1, 16, 64);
        this.geometry.translate(0, 0.5, 0);
        this.geometry.scale(1.5, 6.0, 1.5);

    }
    setTextures() {
        this.textures = {};
        this.textures.perlinNoise = this.resources.items.perlinNoise;
        this.textures.perlinNoise.wrapS = THREE.RepeatWrapping;
        this.textures.perlinNoise.wrapT = THREE.RepeatWrapping;
    }
    setMaterial() {
        this.material = new THREE.ShaderMaterial({
            vertexShader: this.vertexShader,
            fragmentShader: this.fragmentShader,
            uniforms: {
                uTime: new THREE.Uniform(0),
                uPerlinTexture: new THREE.Uniform(this.textures.perlinNoise)
            },
            side: THREE.DoubleSide,
            transparent: true,
            depthWrite: false,
            // wireframe: true,
        });
    }
    setMesh() {
        this.smoke = new THREE.Mesh(this.geometry, this.material);
        this.smoke.position.y = 1.83;
        this.scene.add(this.smoke);
    }

    update() {
        
        this.smoke.material.uniforms.uTime.value = this.time.elapsed;
    }

}