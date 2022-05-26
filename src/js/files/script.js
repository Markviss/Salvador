import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { mvsModules } from "./modules.js";
//================================================//

document.addEventListener('DOMContentLoaded', () => {

    const forms = document.querySelectorAll('form');
    const inputFile = document.querySelectorAll('.upload-file');

    /////////// Кнопка «Прикрепить файл» ///////////
    inputFile.forEach(function(el) {
        let textSelector = document.querySelector('.offer__btn-text');
        let fileList;

        // Событие выбора файла(ов)
        el.addEventListener('change', function (e) {

            // создаём массив файлов
            fileList = [];
            for (let i = 0; i < el.files.length; i++) {
                fileList.push(el.files[i]);
            }

            // вызов функции для каждого файла
            fileList.forEach(file => {
                uploadFile(file);
            });
        });

        // Проверяем размер файлов и выводим название
        const uploadFile = (file) => {

            // файла <5 Мб
            if (file.size > 5 * 1024 * 1024) {
                alert('Файл должен быть не более 5 МБ.');
                return;
            }

            // Показ загружаемых файлов
            if (fileList && fileList.length > 1) {
                if ( fileList.length <= 4 ) {
                    textSelector.textContent = `Выбрано ${fileList.length} файла`;
                }
                if ( fileList.length > 4 ) {
                    textSelector.textContent = `Выбрано ${fileList.length} файлов`;
                }
            } else {
                textSelector.textContent = file.name;
            }
        }

    });
});
