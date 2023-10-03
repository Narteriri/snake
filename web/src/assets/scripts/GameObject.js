const GAME_OBJECTS = []

export class GameObject {
    constructor() {
        GAME_OBJECTS.push(this);
        this.timedelta = 0;
        this.has_called_start = false;  
    }

    start() {   //only execute for the first time

    }

    update() {  //execute per frame except the first time

    }

    on_destroy() {

    }

    destroy() {
        this.on_destroy();

        for (let i in GAME_OBJECTS) {

            const obj = GAME_OBJECTS[i];
            if (obj === this) {
                GAME_OBJECTS.splice(i);
                break;
            }
        }
    }
}

let last_timestamp; //the time of last execute
const step = timestamp => {

    for (let obj of GAME_OBJECTS) {
        if (!obj.has_called_start) {
            obj.has_called_start = true;
            obj.start();
        }else {
            obj.timedelta = timestamp - last_timestamp;
            obj.update();
        }
    }

    //update the last_timestamp
    last_timestamp = timestamp;
    requestAnimationFrame(step)
}

requestAnimationFrame(step)