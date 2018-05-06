import document from "document";
import { locale } from "user-settings";
import * as util from "../common/utils";

const dateLabel = document.getElementById("dateLabel");

export function update(today) {
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getYear()-100+2000;

    dateLabel.text = `${util.toMonth(month)} ${date}, ${year}`;
}