/* Маски для полей (в работе) */

// Подключение списка активных модулей
import { mvsModules } from "../modules.js";

// Подключение модуля
import "inputmask/dist/inputmask.min.js";

const inputMasks = document.querySelectorAll('input');
if (inputMasks.length) {
	mvsModules.inputmask = Inputmask().mask(inputMasks);
}