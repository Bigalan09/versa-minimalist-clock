import clock from "clock";
import {
  display
} from "display";
import * as activity from "activity";
import * as battery from "battery";
import * as date from "date";
import * as heartRate from "heartrate";
import * as time from "time";

import * as util from "../common/utils";

// Update the clock every second.
clock.granularity = "seconds";

clock.ontick = (evt) => {
  if (display.on) {
    heartRate.update();
    battery.update();

    const todayDate = evt.date;
    date.update(todayDate);
    time.update(todayDate);

    activity.update();
  } else {
    heartRate.update();    
  }
}