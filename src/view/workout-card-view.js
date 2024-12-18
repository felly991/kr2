import Component from "./component.js";

class WorkoutCardView extends Component {
  constructor({ id, sport, duration, intensity, date, onDelete }) {
    super();
    this.id = id;
    this.sport = sport;
    this.duration = duration;
    this.intensity = intensity;
    this.date = date;
    this.onDelete = onDelete;

    this.handleDelete = this.handleDelete.bind(this);
  }

  getTemplate() {
    return `
      <div class="workout-card" data-id="${this.id}">
        <p>Вид спорта: ${this.sport}</p>
        <p>Длительность: ${this.duration} мин.</p>
        <p>Интенсивность: ${this.intensity}</p>
        <p>Дата: ${this.date}</p>
        <button class="workout-card__delete">Удалить</button>
      </div>
    `;
  }

  handleDelete(evt) {
    evt.preventDefault();
    if (this.onDelete) {
      this.onDelete(this.id);
    }
  }

  setDeleteHandler() {
    this.getElement()
      .querySelector(".workout-card__delete")
      .addEventListener("click", this.handleDelete);
  }
}

export default WorkoutCardView;
