import Component from "./component.js";

class FilterView extends Component {
  getTemplate() {
    return `
      <div class="filters">
        <h2>Фильтры</h2>
        <select class="filters__sport">
          <option value="">Все виды спорта</option>
          <option value="running">Бег</option>
          <option value="cycling">Велосипед</option>
          <option value="swimming">Плавание</option>
          <option value="gym">Тренажерный зал</option>
        </select>
        <input
          type="date"
          class="filters__date"
          placeholder="Фильтр по дате"
        />
      </div>
    `;
  }
}

export default FilterView;