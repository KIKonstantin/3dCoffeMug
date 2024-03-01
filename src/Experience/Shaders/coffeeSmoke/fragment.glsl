let fragmentShader = `

uniform float uTime;
uniform sampler2D uPerlinTexture;

varying vec2 vUv;


void main(){
    // Scale and animate
    vec2 smokeUv = vUv;
    smokeUv.x *= 0.5;
    smokeUv.y *= 0.3;
    smokeUv.y -= (uTime * 0.05);

    // Smoke
    float smoke = texture(uPerlinTexture, smokeUv).r;
    // Remap
    smoke = smoothstep(0.4, 0.9, smoke);
    // Edges
    smoke *= smoothstep(0.0, 0.2, vUv.x);
    smoke *= smoothstep(1.0, 0.8, vUv.x);
    smoke *= smoothstep(0.0, 0.1, vUv.y);
    smoke *= smoothstep(1.0, 0.7, vUv.y);

    gl_FragColor = vec4(1.0, 0.9, 0.8, smoke);

}`


export default fragmentShader;