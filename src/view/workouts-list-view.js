import Component from "./component.js";

class WorkoutsListView extends Component {
  getTemplate() {
    return `
      <div class="workouts-list">
        <h2>Мои тренировки</h2>
        <div class="workouts-list__container"></div>
      </div>
    `;
  }
}

export default WorkoutsListView;