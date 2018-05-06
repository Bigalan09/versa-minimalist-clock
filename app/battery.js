import document from "document";
import {
    battery,
    charger 
} from "power";
import * as util from "../common/utils";

const batteryLabel = document.getElementById("batteryLabel");
const batteryIcon = document.getElementById("batteryIcon");

export function update() {
    if (charger.connected) {
        batteryIcon.style.visibility = 'hidden';
    } else {
        batteryIcon.style.visibility = 'visible';
    }
    batteryLabel.text = util.monoDigits(battery.chargeLevel) + '%';
}