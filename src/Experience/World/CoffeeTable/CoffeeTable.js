import Experience from "../../Experience";
import CoffeeSmoke from "./CoffeeSmoke";
export default class CoffeeTable{
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.smoke = new CoffeeSmoke();
        // Setup
        this.resource = this.resources.items.coffeeTable;
        this.setModel();
    }

    setModel() {
        this.model = this.resource.scene;
        this.model.getObjectByName('baked').material.map.anisotropy = 8;
        console.log(this.model)
        this.scene.add(this.model);
    }

    update() {
        this.smoke.update();
    }

}