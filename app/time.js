import document from "document";
import * as util from "../common/utils";

const hourHand = document.getElementById("hours");
const minHand = document.getElementById("mins");
const secHand = document.getElementById("secs");

const timeLabel = document.getElementById("timeLabel");

export function update(today) {
    const hours = today.getHours();
    const mins = util.zeroPad(today.getMinutes());
    const secs = util.zeroPad(today.getSeconds());

    timeLabel.text = `${hours} ${mins}`;

    hourHand.groupTransform.rotate.angle = hoursToAngle(hours, mins);
    minHand.groupTransform.rotate.angle = minutesToAngle(mins);
    secHand.groupTransform.rotate.angle = secondsToAngle(secs);
}

// Returns an angle (0-360) for the current hour in the day, including minutes
function hoursToAngle(hours, minutes) {
    const hourAngle = (360 / 12) * hours;
    const minAngle = (360 / 12 / 60) * minutes;
    return hourAngle + minAngle;
}

// Returns an angle (0-360) for minutes
function minutesToAngle(minutes) {
    return (360 / 60) * minutes;
}

// Returns an angle (0-360) for seconds
function secondsToAngle(seconds) {
    return (360 / 60) * seconds;
}