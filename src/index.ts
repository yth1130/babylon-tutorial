// import * as BABYLON from 'babylonjs'
import { ArcRotateCamera, HemisphericLight, MeshBuilder } from "@babylonjs/core";
import { Engine } from "@babylonjs/core/Engines/engine";
import { Vector3 } from "@babylonjs/core/Maths/math";
import { Scene } from "@babylonjs/core/scene";
// type Engine = import("@babylonjs/core/Engines/engine").Engine;
// type Scene = import("@babylonjs/core/scene").Scene;

function initBabylon() {
    const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement; // Get the canvas element
    const engine = new Engine(canvas, true); // Generate the BABYLON 3D engine
    
    const createScene = () => {
        const scene = new Scene(engine);
    
        const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 0), scene);
        camera.attachControl(canvas, true);
    
        const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
    
        const box = MeshBuilder.CreateBox("box", {}, scene);
    
        return scene;
    }
    // Add your code here matching the playground format
    const scene = createScene(); //Call the createScene function
    
    // Register a render loop to repeatedly render the scene
    engine.runRenderLoop(function () {
        scene.render();
    });
    // Watch for browser/canvas resize events
    window.addEventListener("resize", function () {
        engine.resize();
    });
}

window.onload = () => {
    initBabylon();
}