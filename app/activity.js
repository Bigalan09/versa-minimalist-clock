import document from "document";
import {
    goals,
    today
} from "user-activity";
import * as util from "../common/utils";

const activityIcons = {
  left: document.getElementById("leftActivityIcon"),
  right: document.getElementById("rightActivityIcon"),
};
const activityLabels = {
  left: document.getElementById("leftActivityLabel"),
  right: document.getElementById("rightActivityLabel"),
}

var leftActivity = 'elevationGain';
var rightActivity = 'steps';

export function update() {
  updateActivity('left', leftActivity);
  updateActivity('right', rightActivity);
}

function updateActivity(position, activity) {
  activityIcons[position].href = `icons/stat_${activity}_solid_24px.png`;
  activityLabels[position].text = util.monoDigits(today.adjusted[activity]);
}