import { format, parseISO } from "date-fns";
import "./style.css"
import UI from "./ui/appRenderer.js";

UI.startApp()


console.log(format(new Date(2024, 3, 4), 'MMM dd yyyy'))
console.log(format(parseISO('2026-03-06'), 'MMM dd yyyy'))