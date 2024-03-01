
import Experience from "../Experience";
import CoffeeTable from "./CoffeeTable/CoffeeTable";
export default class World{
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.resources.on('ready', () => {
            // Setup
            this.coffeeTable = new CoffeeTable();
        })
    }
    
    update() {
        if (this.coffeeTable) this.coffeeTable.update();
    }

}