import Component from "./component.js";

class FormView extends Component {
  getTemplate() {
    return `
      <div class="workout-form">
        <h2>Добавить тренировку</h2>
        <form class="form">
          <select class="form__sport">
            <option value="">Выберите вид спорта</option>
            <option value="running">Бег</option>
            <option value="cycling">Велосипед</option>
            <option value="swimming">Плавание</option>
            <option value="gym">Тренажерный зал</option>
          </select>
          <input
            type="number"
            class="form__duration"
            placeholder="Длительность (мин)"
            required
            min="1"
            max="240"
          />
          <select class="form__intensity">
            <option value="">Интенсивность</option>
            <option value="low">Низкая</option>
            <option value="medium">Средняя</option>
            <option value="high">Высокая</option>
          </select>
          <input type="date" class="form__date" />
          <button type="submit" class="form__submit">Добавить тренировку</button>
        </form>
      </div>
    `;
  }
}

export default FormView;