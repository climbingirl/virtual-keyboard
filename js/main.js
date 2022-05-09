"use strict";

const KEYS_EN_ARR = [
    [
        {"code": "Backquote", "caseDown": "`", "caseUp": "~", "caps": "`", "shiftCaps": "~"},
        {"code": "Digit1", "caseDown": "1", "caseUp": "!", "caps": "1", "shiftCaps": "!"},
        {"code": "Digit2", "caseDown": "2", "caseUp": "@", "caps": "2", "shiftCaps": "@"},
        {"code": "Digit3", "caseDown": "3", "caseUp": "#", "caps": "3", "shiftCaps": "#"},
        {"code": "Digit4", "caseDown": "4", "caseUp": "$", "caps": "4", "shiftCaps": "$"},
        {"code": "Digit5", "caseDown": "5", "caseUp": "%", "caps": "5", "shiftCaps": "%"},
        {"code": "Digit6", "caseDown": "6", "caseUp": "^", "caps": "6", "shiftCaps": "^"},
        {"code": "Digit7", "caseDown": "7", "caseUp": "&", "caps": "7", "shiftCaps": "&"},
        {"code": "Digit8", "caseDown": "8", "caseUp": "*", "caps": "8", "shiftCaps": "*"},
        {"code": "Digit9", "caseDown": "9", "caseUp": "(", "caps": "9", "shiftCaps": "("},
        {"code": "Digit0", "caseDown": "0", "caseUp": ")", "caps": "0", "shiftCaps": ")"},
        {"code": "Minus", "caseDown": "-", "caseUp": "_", "caps": "-", "shiftCaps": "_"},
        {"code": "Equal", "caseDown": "=", "caseUp": "+", "caps": "=", "shiftCaps": "+"},
        {"code": "Backspace", "caseDown": "Backspace", "caseUp": "Backspace", "caps": "Backspace", "shiftCaps": "Backspace"}
    ],
    [
        {"code": "Tab", "caseDown": "Tab", "caseUp": "Tab", "caps": "Tab", "shiftCaps": "Tab"},
        {"code": "KeyQ", "caseDown": "q", "caseUp": "Q", "caps": "Q", "shiftCaps": "q"},
        {"code": "KeyW", "caseDown": "w", "caseUp": "W", "caps": "W", "shiftCaps": "w"},
        {"code": "KeyE", "caseDown": "e", "caseUp": "E", "caps": "E", "shiftCaps": "e"},
        {"code": "KeyR", "caseDown": "r", "caseUp": "R", "caps": "R", "shiftCaps": "r"},
        {"code": "KeyT", "caseDown": "t", "caseUp": "T", "caps": "T", "shiftCaps": "t"},
        {"code": "KeyY", "caseDown": "y", "caseUp": "Y", "caps": "Y", "shiftCaps": "y"},
        {"code": "KeyU", "caseDown": "u", "caseUp": "U", "caps": "U", "shiftCaps": "u"},
        {"code": "KeyI", "caseDown": "i", "caseUp": "I", "caps": "I", "shiftCaps": "i"},
        {"code": "KeyO", "caseDown": "o", "caseUp": "O", "caps": "O", "shiftCaps": "o"},
        {"code": "KeyP", "caseDown": "p", "caseUp": "P", "caps": "P", "shiftCaps": "p"},
        {"code": "BracketLeft", "caseDown": "[", "caseUp": "{", "caps": "[", "shiftCaps": "{"},
        {"code": "BracketRight", "caseDown": "]", "caseUp": "}", "caps": "]", "shiftCaps": "}"},
        {"code": "Backslash", "caseDown": "\\", "caseUp": "|", "caps": "\\", "shiftCaps": "|"},
        {"code": "Delete", "caseDown": "Delete", "caseUp": "Delete", "caps": "Delete", "shiftCaps": "Delete"}
    ],
    [
        {"code": "CapsLock", "caseDown": "CapsLock", "caseUp": "CapsLock", "caps": "CapsLock", "shiftCaps": "CapsLock"},
        {"code": "KeyA", "caseDown": "a", "caseUp": "A", "caps": "A", "shiftCaps": "a"},
        {"code": "KeyS", "caseDown": "s", "caseUp": "S", "caps": "S", "shiftCaps": "s"},
        {"code": "KeyD", "caseDown": "d", "caseUp": "D", "caps": "D", "shiftCaps": "d"},
        {"code": "KeyF", "caseDown": "f", "caseUp": "F", "caps": "F", "shiftCaps": "f"},
        {"code": "KeyG", "caseDown": "g", "caseUp": "G", "caps": "G", "shiftCaps": "g"},
        {"code": "KeyH", "caseDown": "h", "caseUp": "H", "caps": "H", "shiftCaps": "h"},
        {"code": "KeyJ", "caseDown": "j", "caseUp": "J", "caps": "J", "shiftCaps": "j"},
        {"code": "KeyK", "caseDown": "k", "caseUp": "K", "caps": "K", "shiftCaps": "k"},
        {"code": "KeyL", "caseDown": "l", "caseUp": "L", "caps": "L", "shiftCaps": "l"},
        {"code": "Semicolon", "caseDown": ";", "caseUp": ":", "caps": ";", "shiftCaps": ":"},
        {"code": "Quote", "caseDown": "\'", "caseUp": "\"", "caps": "\'", "shiftCaps": "\""},
        {"code": "Enter", "caseDown": "Enter", "caseUp": "Enter", "caps": "Enter", "shiftCaps": "Enter"}
    ],
    [
        {"code": "ShiftLeft", "caseDown": "Shift", "caseUp": "Shift", "caps": "Shift", "shiftCaps": "Shift"},
        {"code": "KeyZ", "caseDown": "z", "caseUp": "Z", "caps": "Z", "shiftCaps": "z"},
        {"code": "KeyX", "caseDown": "x", "caseUp": "X", "caps": "X", "shiftCaps": "x"},
        {"code": "KeyC", "caseDown": "c", "caseUp": "C", "caps": "C", "shiftCaps": "c"},
        {"code": "KeyV", "caseDown": "v", "caseUp": "V", "caps": "V", "shiftCaps": "v"},
        {"code": "KeyB", "caseDown": "b", "caseUp": "B", "caps": "B", "shiftCaps": "b"},
        {"code": "KeyN", "caseDown": "n", "caseUp": "N", "caps": "N", "shiftCaps": "n"},
        {"code": "KeyM", "caseDown": "m", "caseUp": "M", "caps": "M", "shiftCaps": "m"},
        {"code": "Comma", "caseDown": ",", "caseUp": "<", "caps": ",", "shiftCaps": "<"},
        {"code": "Period", "caseDown": ".", "caseUp": ">", "caps": ".", "shiftCaps": ">"},
        {"code": "Slash", "caseDown": "/", "caseUp": "?", "caps": "/", "shiftCaps": "?"},
        {"code": "ArrowUp", "caseDown": "&#9650;", "caseUp": "&#9650;", "caps": "&#9650;", "shiftCaps": "&#9650;"},
        {"code": "ShiftRight", "caseDown": "Shift", "caseUp": "Shift", "caps": "Shift", "shiftCaps": "Shift"}
    ],
    [
        {"code": "ControlLeft", "caseDown": "Ctrl", "caseUp": "Ctrl", "caps": "Ctrl", "shiftCaps": "Ctrl"},
        {"code": "MetaLeft", "caseDown": "Win", "caseUp": "Win", "caps": "Win", "shiftCaps": "Win"},
        {"code": "AltLeft", "caseDown": "Alt", "caseUp": "Alt", "caps": "Alt", "shiftCaps": "Alt"},
        {"code": "Space", "caseDown": "", "caseUp": "", "caps": "", "shiftCaps": ""},
        {"code": "AltRight", "caseDown": "Alt", "caseUp": "Alt", "caps": "Alt", "shiftCaps": "Alt"},
        {"code": "ArrowLeft", "caseDown": "&#9668;", "caseUp": "&#9668;", "caps": "&#9668;", "shiftCaps": "&#9668;"},
        {"code": "ArrowDown", "caseDown": "&#9660;", "caseUp": "&#9660;", "caps": "&#9660;", "shiftCaps": "&#9660;"},
        {"code": "ArrowRight", "caseDown": "&#9658;", "caseUp": "&#9658;", "caps": "&#9658;", "shiftCaps": "&#9658;"},
        {"code": "ControlRight", "caseDown": "Ctrl", "caseUp": "Ctrl", "caps": "Ctrl", "shiftCaps": "Ctrl"}
    ]
];

const KEYS_RU_ARR = [
    [
        {"code": "Backquote", "caseDown": "ё", "caseUp": "Ё", "caps": "Ё", "shiftCaps": "ё"},
        {"code": "Digit1", "caseDown": "1", "caseUp": "!", "caps": "1", "shiftCaps": "!"},
        {"code": "Digit2", "caseDown": "2", "caseUp": "\"", "caps": "2", "shiftCaps": "\""},
        {"code": "Digit3", "caseDown": "3", "caseUp": "№", "caps": "3", "shiftCaps": "№"},
        {"code": "Digit4", "caseDown": "4", "caseUp": ";", "caps": "4", "shiftCaps": ";"},
        {"code": "Digit5", "caseDown": "5", "caseUp": "%", "caps": "5", "shiftCaps": "%"},
        {"code": "Digit6", "caseDown": "6", "caseUp": ":", "caps": "6", "shiftCaps": ":"},
        {"code": "Digit7", "caseDown": "7", "caseUp": "?", "caps": "7", "shiftCaps": "?"},
        {"code": "Digit8", "caseDown": "8", "caseUp": "*", "caps": "8", "shiftCaps": "*"},
        {"code": "Digit9", "caseDown": "9", "caseUp": "(", "caps": "9", "shiftCaps": "("},
        {"code": "Digit0", "caseDown": "0", "caseUp": ")", "caps": "0", "shiftCaps": ")"},
        {"code": "Minus", "caseDown": "-", "caseUp": "_", "caps": "-", "shiftCaps": "_"},
        {"code": "Equal", "caseDown": "=", "caseUp": "+", "caps": "=", "shiftCaps": "+"},
        {"code": "Backspace", "caseDown": "Backspace", "caseUp": "Backspace", "caps": "Backspace", "shiftCaps": "Backspace"}
    ],
    [
        {"code": "Tab", "caseDown": "Tab", "caseUp": "Tab", "caps": "Tab", "shiftCaps": "Tab"},
        {"code": "KeyQ", "caseDown": "й", "caseUp": "Й", "caps": "й", "shiftCaps": "Й"},
        {"code": "KeyW", "caseDown": "ц", "caseUp": "Ц", "caps": "ц", "shiftCaps": "Ц"},
        {"code": "KeyE", "caseDown": "у", "caseUp": "У", "caps": "у", "shiftCaps": "У"},
        {"code": "KeyR", "caseDown": "к", "caseUp": "К", "caps": "к", "shiftCaps": "К"},
        {"code": "KeyT", "caseDown": "е", "caseUp": "Е", "caps": "е", "shiftCaps": "Е"},
        {"code": "KeyY", "caseDown": "н", "caseUp": "Н", "caps": "н", "shiftCaps": "Н"},
        {"code": "KeyU", "caseDown": "г", "caseUp": "Г", "caps": "г", "shiftCaps": "Г"},
        {"code": "KeyI", "caseDown": "ш", "caseUp": "Ш", "caps": "ш", "shiftCaps": "Ш"},
        {"code": "KeyO", "caseDown": "щ", "caseUp": "Щ", "caps": "щ", "shiftCaps": "Щ"},
        {"code": "KeyP", "caseDown": "з", "caseUp": "З", "caps": "з", "shiftCaps": "З"},
        {"code": "BracketLeft", "caseDown": "х", "caseUp": "Х", "caps": "х", "shiftCaps": "Х"},
        {"code": "BracketRight", "caseDown": "ъ", "caseUp": "Ъ", "caps": "ъ", "shiftCaps": "Ъ"},
        {"code": "Backslash", "caseDown": "\\", "caseUp": "/", "caps": "\\", "shiftCaps": "/"},
        {"code": "Delete", "caseDown": "Delete", "caseUp": "Delete", "caps": "Delete", "shiftCaps": "Delete"}
    ],
    [
        {"code": "CapsLock", "caseDown": "CapsLock", "caseUp": "CapsLock", "caps": "CapsLock", "shiftCaps": "CapsLock"},
        {"code": "KeyA", "caseDown": "ф", "caseUp": "Ф", "caps": "ф", "shiftCaps": "Ф"},
        {"code": "KeyS", "caseDown": "ы", "caseUp": "Ы", "caps": "ы", "shiftCaps": "Ы"},
        {"code": "KeyD", "caseDown": "в", "caseUp": "В", "caps": "в", "shiftCaps": "В"},
        {"code": "KeyF", "caseDown": "а", "caseUp": "А", "caps": "а", "shiftCaps": "А"},
        {"code": "KeyG", "caseDown": "п", "caseUp": "П", "caps": "п", "shiftCaps": "П"},
        {"code": "KeyH", "caseDown": "р", "caseUp": "Р", "caps": "р", "shiftCaps": "Р"},
        {"code": "KeyJ", "caseDown": "о", "caseUp": "О", "caps": "о", "shiftCaps": "О"},
        {"code": "KeyK", "caseDown": "л", "caseUp": "Л", "caps": "л", "shiftCaps": "Л"},
        {"code": "KeyL", "caseDown": "д", "caseUp": "Д", "caps": "д", "shiftCaps": "Д"},
        {"code": "Semicolon", "caseDown": "ж", "caseUp": "Ж", "caps": "ж", "shiftCaps": "Ж"},
        {"code": "Quote", "caseDown": "э", "caseUp": "Э", "caps": "э", "shiftCaps": "Э"},
        {"code": "Enter", "caseDown": "Enter", "caseUp": "Enter", "caps": "Enter", "shiftCaps": "Enter"}
    ],
    [
        {"code": "ShiftLeft", "caseDown": "Shift", "caseUp": "Shift", "caps": "Shift", "shiftCaps": "Shift"},
        {"code": "KeyZ", "caseDown": "я", "caseUp": "Я", "caps": "я", "shiftCaps": "Я"},
        {"code": "KeyX", "caseDown": "ч", "caseUp": "Ч", "caps": "ч", "shiftCaps": "Ч"},
        {"code": "KeyC", "caseDown": "с", "caseUp": "С", "caps": "с", "shiftCaps": "С"},
        {"code": "KeyV", "caseDown": "м", "caseUp": "М", "caps": "м", "shiftCaps": "М"},
        {"code": "KeyB", "caseDown": "и", "caseUp": "И", "caps": "и", "shiftCaps": "И"},
        {"code": "KeyN", "caseDown": "т", "caseUp": "Т", "caps": "т", "shiftCaps": "Т"},
        {"code": "KeyM", "caseDown": "ь", "caseUp": "Ь", "caps": "ь", "shiftCaps": "Ь"},
        {"code": "Comma", "caseDown": "б", "caseUp": "Б", "caps": "б", "shiftCaps": "Б"},
        {"code": "Period", "caseDown": "ю", "caseUp": "Ю", "caps": "ю", "shiftCaps": "Ю"},
        {"code": "Slash", "caseDown": ".", "caseUp": ",", "caps": ".", "shiftCaps": ","},
        {"code": "ArrowUp", "caseDown": "&#9650;", "caseUp": "&#9650;", "caps": "&#9650;", "shiftCaps": "&#9650;"},
        {"code": "ShiftRight", "caseDown": "Shift", "caseUp": "Shift", "caps": "Shift", "shiftCaps": "Shift"}
    ],
    [
        {"code": "ControlLeft", "caseDown": "Ctrl", "caseUp": "Ctrl", "caps": "Ctrl", "shiftCaps": "Ctrl"},
        {"code": "AltLeft", "caseDown": "Alt", "caseUp": "Alt", "caps": "Alt", "shiftCaps": "Alt"},
        {"code": "MetaLeft", "caseDown": "Win", "caseUp": "Win", "caps": "Win", "shiftCaps": "Win"},
        {"code": "Space", "caseDown": "", "caseUp": "", "caps": "", "shiftCaps": ""},
        {"code": "AltRight", "caseDown": "Alt", "caseUp": "Alt", "caps": "Alt", "shiftCaps": "Alt"},
        {"code": "ArrowLeft", "caseDown": "&#9668;", "caseUp": "&#9668;", "caps": "&#9668;", "shiftCaps": "&#9668;"},
        {"code": "ArrowDown", "caseDown": "&#9660;", "caseUp": "&#9660;", "caps": "&#9660;", "shiftCaps": "&#9660;"},
        {"code": "ArrowRight", "caseDown": "&#9658;", "caseUp": "&#9658;", "caps": "&#9658;", "shiftCaps": "&#9658;"},
        {"code": "ControlRight", "caseDown": "Ctrl", "caseUp": "Ctrl", "caps": "Ctrl", "shiftCaps": "Ctrl"}
    ]
];

const BODY = document.querySelector("body");

function renderApp() {
    const CONTAINER = document.createElement("div");
    CONTAINER.classList.add("container");
    BODY.prepend(CONTAINER);

    const TEXTAREA = document.createElement("textarea");
    TEXTAREA.classList.add("textarea");
    CONTAINER.append(TEXTAREA);

    const KEYBOARD = document.createElement("div");
    KEYBOARD.classList.add("keyboard");
    KEYBOARD.append(createKeys(KEYS_EN_ARR))
    CONTAINER.append(KEYBOARD);
}

function createKeys(keys) {
    const KEYBOARD_INNER = document.createElement("div");
    KEYBOARD_INNER.classList.add("keyboard__inner");

    for (let i = 0; i < keys.length; i++) {
        const KEYBOARD_ROW = document.createElement("div");
        KEYBOARD_ROW.classList.add("keyboard__row");
        
        for (let j = 0; j < keys[i].length; j++) {
            const currentKey = keys[i][j];
            const KEY = document.createElement("div");
            KEY.classList.add("key");
            KEY.dataset.keyCode = currentKey.code;

            switch (currentKey.code) {
                case "Backspace":
                    KEY.classList.add("backspace_key")
                    break;
                case "CapsLock":
                    KEY.classList.add("caps_lock_key")
                    break;
                case "Enter":
                    KEY.classList.add("enter_key")
                    break;
                case "ShiftLeft":
                case "ShiftRight":
                    KEY.classList.add("shift_key")
                    break;
                case "Tab":
                    KEY.classList.add("tab_key")
                    break;
                case "Delete":
                    KEY.classList.add("delete_key")
                    break;
                case "ControlLeft":
                case "ControlRight":
                    KEY.classList.add("ctrl_key")
                    break;
                case "Space":
                    KEY.classList.add("space_key")
                    break;
                default:
                    break;
            }

            KEY.innerHTML = `
                <span class="key__language language__en">
                    <span class="caseDown">${currentKey.caseDown}</span>
                    <span class="caseUp hidden">${currentKey.caseUp}</span>
                    <span class="caps hidden">${currentKey.caps}</span>
                    <span class="shiftCaps hidden">${currentKey.shiftCaps}</span>
                </span>
                <span class="key__language language__ru hidden">
                    <span class="caseDown">${KEYS_RU_ARR[i][j].caseDown}</span>
                    <span class="caseUp hidden">${KEYS_RU_ARR[i][j].caseUp}</span>
                    <span class="caps hidden">${KEYS_RU_ARR[i][j].caps}</span>
                    <span class="shiftCaps hidden">${KEYS_RU_ARR[i][j].shiftCaps}</span>
                </span>
            `;
            
            KEYBOARD_ROW.append(KEY);
        }

        KEYBOARD_INNER.append(KEYBOARD_ROW);
    }

    return KEYBOARD_INNER;
}

renderApp();

const KEYS = document.querySelectorAll(".key");
const KEYS_EN = document.querySelectorAll(".language__en");
const KEYS_RU = document.querySelectorAll(".language__ru");
const KEYS_UP = document.querySelectorAll(".caseUp");
const KEYS_DOWN = document.querySelectorAll(".caseDown");
const KEYS_CAPS = document.querySelectorAll(".caps");
const KEYS_SHIFT_CAPS = document.querySelectorAll(".shiftCaps");
const KEY_CAPS_LOCK = document.querySelector(".caps_lock_key");

window.addEventListener("keydown", function (e) {
    if(e.code === "CapsLock") {
        KEY_CAPS_LOCK.classList.toggle("active");
    }

    for(let i = 0; i < KEYS.length; i++) {
        if(e.code === KEYS[i].dataset.keyCode && e.code !== "CapsLock") {
            KEYS[i].classList.add('active');
        }
        if(e.code === "CapsLock") {
            KEYS_DOWN[i].classList.toggle("hidden");
            KEYS_CAPS[i].classList.toggle("hidden");
        }
        if(e.key === "Shift") {
            KEYS_DOWN[i].classList.add("hidden");
            KEYS_UP[i].classList.remove("hidden");
        }

        if(e.ctrlKey && e.code == "AltLeft" ) {
            KEYS_EN[i].classList.toggle("hidden");
            KEYS_RU[i].classList.toggle("hidden");
        }
    }
});

window.addEventListener("keyup", function (e) {
    for(let i = 0; i < KEYS.length; i++) {
        if(e.code === KEYS[i].dataset.keyCode && e.code !== "CapsLock") {
            KEYS[i].classList.remove('active')
        }
        if(e.key === "Shift") {
            KEYS_DOWN[i].classList.remove("hidden");
            KEYS_UP[i].classList.add("hidden");
        }
    }
});