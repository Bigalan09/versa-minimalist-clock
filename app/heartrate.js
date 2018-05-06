import document from "document";
import {
    HeartRateSensor
} from "heart-rate";
import * as util from "../common/utils";

const heartRateLabel = document.getElementById("hrLabel");

const hrm = new HeartRateSensor();

hrm.onreading = function () {
    heartRateLabel.text = util.monoDigits(hrm.heartRate || 0);
    hrm.stop();
}

export function update() {
    hrm.start();
}