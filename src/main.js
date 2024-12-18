import MainPresenter from "./presenter/main-presenter.js";

const container = document.querySelector(".container");
const mainPresenter = new MainPresenter(container);

mainPresenter.init();
