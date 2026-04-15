function onload() {
    console.log('Страница полностью загружена, инициализируем игру...');
    if (typeof GameCore !== 'undefined' && GameCore) {
        GameCore.init();
    } else {
        console.error('GameCore не найден! Проверьте порядок загрузки скриптов.');
    }
};

onload();
