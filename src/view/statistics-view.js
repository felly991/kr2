import Component from "./component.js";

class StatisticsView extends Component {
  getTemplate() {
    return `
    <div><h1>Мой Фитнес Трекер</h1>
      <div class="statistics">
        <h2>Статистика</h2>
        <div class="stats-block">
          <p>Всего тренировок: <span class="statistics__total">0</span></p>
        </div>
      </div><div/>
    `;
  }
}

export default StatisticsView;