import { noteify } from "./noteify.js";
let list = [];

const refs = {
    btnAddItem: document.querySelector("[data-add-item]"),
    list: document.querySelector("[data-list]"),
    btnSelectItem: document.querySelector("[data-select-item]"),
    btnClosedModal: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    btnModalAdd: document.querySelector("[data-selected-add]"),
    btnModalCancel: document.querySelector("[data-selected-cancel]"),
    input: document.querySelector("#name"),
};

const randomInteger = (max) => Math.floor(Math.random() * (max + 1));

const renderList = () => {
    refs.list.innerHTML = list
        .map((item) => ` <li class="item">${item}</li>`)
        .join("");
};

const chouseItem = (index) => {
    const items = refs.list.children;

    [...items].forEach((element) => {
        element.classList.remove("active");
    });

    items[index].classList.add("active");
};

const startSelect = () => {
    if (!list.length) {
        noteify("спочатку додайте елементи у список", "message");
        return;
    }
    const selectedTimes = randomInteger(100) + 10;
    const count = list.length;
    let i = 0;
    const interval = setInterval(() => {
        if (i == count) i = 0;
        chouseItem(i++);
    }, 200);

    setTimeout(() => {
        clearInterval(interval);
    }, 100 * selectedTimes);
};

const addItem = () => {
    if (refs.input.value.trim() === "") {
        noteify("Поле не може бути пустим", "error");
        return;
    }

    list.push(refs.input.value);
    refs.input.value = "";

    renderList();
    noteify("Текст успішно додано", "success");
};

const toggleModal = () => {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
};

refs.btnSelectItem.addEventListener("click", startSelect);
refs.btnAddItem.addEventListener("click", toggleModal);
refs.btnClosedModal.addEventListener("click", toggleModal);
refs.btnModalCancel.addEventListener("click", toggleModal);
refs.btnModalAdd.addEventListener("click", addItem);
