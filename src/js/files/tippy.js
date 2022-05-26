import { isMobile, FLS } from "./functions.js";
// Подключение списка активных модулей
import { mvsModules } from "./modules.js";

// Подключение из node_modules
import tippy from 'tippy.js';

// Подключение cтилей из src/scss/libs
import "../../scss/libs/tippy.scss";
// Подключение cтилей из node_modules
//import 'tippy.js/dist/tippy.css';

// Запускаем и добавляем в объект модулей
mvsModules.tippy = tippy('[data-tippy-content]', {

});