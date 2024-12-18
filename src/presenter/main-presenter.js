import { render } from "../framework/render.js";
import { workouts } from "../mock/workouts.js";
import StatisticsView from "../view/statistics-view.js";
import FormView from "../view/form-view.js";
import FilterView from "../view/filter-view.js";
import WorkoutsListView from "../view/workouts-list-view.js";
import WorkoutCardView from "../view/workout-card-view.js";

class MainPresenter {
  constructor(container) {
    this.container = container;
    this.workouts = [...workouts];
    this.filteredWorkouts = [...workouts];
  }

  init() {
    this.statisticsComponent = new StatisticsView();
    this.formComponent = new FormView();
    this.filterComponent = new FilterView();
    this.workoutsListComponent = new WorkoutsListView();

    render(this.statisticsComponent, this.container);
    render(this.formComponent, this.container);
    render(this.filterComponent, this.container);
    render(this.workoutsListComponent, this.container);

    this.setFormSubmitHandler();
    this.setFilterChangeHandler();
    this.renderWorkouts();
  }

  renderWorkouts() {
    const container = this.workoutsListComponent
      .getElement()
      .querySelector(".workouts-list__container");
    container.innerHTML = "";

    this.filteredWorkouts.forEach((workout) => {
      const workoutCard = new WorkoutCardView({
        ...workout,
        onDelete: this.handleDeleteWorkout.bind(this),
      });
      workoutCard.setDeleteHandler();
      render(workoutCard, container);
    });

    this.updateTotalWorkouts();
  }

  updateTotalWorkouts() {
    const totalElement = this.statisticsComponent
      .getElement()
      .querySelector(".statistics__total");
    totalElement.textContent = this.filteredWorkouts.length;
  }

  setFormSubmitHandler() {
    const form = this.formComponent.getElement().querySelector(".form");
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();

      const sport = form.querySelector(".form__sport").value;
      const duration = parseInt(
        form.querySelector(".form__duration").value,
        10
      );
      const intensity = form.querySelector(".form__intensity").value;
      const date = form.querySelector(".form__date").value;

      if (sport && duration && intensity && date) {
        const newWorkout = {
          id: Date.now(),
          sport,
          duration,
          intensity,
          date,
        };

        this.workouts.push(newWorkout);

        this.filteredWorkouts = [...this.workouts];
        this.renderWorkouts();

        form.reset();
      }
    });
  }

  handleDeleteWorkout(id) {
    this.workouts = this.workouts.filter((workout) => workout.id !== id);

    this.filteredWorkouts = this.filteredWorkouts.filter(
      (workout) => workout.id !== id
    );
    this.renderWorkouts();
  }

  setFilterChangeHandler() {
    const sportFilter = this.filterComponent
      .getElement()
      .querySelector(".filters__sport");
    const dateFilter = this.filterComponent
      .getElement()
      .querySelector(".filters__date");

    const applyFilters = () => {
      let filteredWorkouts = [...this.workouts];

      const selectedSport = sportFilter.value;
      const selectedDate = dateFilter.value;

      if (selectedSport) {
        filteredWorkouts = filteredWorkouts.filter(
          (workout) => workout.sport === selectedSport
        );
      }

      if (selectedDate) {
        filteredWorkouts = filteredWorkouts.filter(
          (workout) => workout.date === selectedDate
        );
      }

      this.filteredWorkouts = filteredWorkouts;
      this.renderWorkouts();
    };

    sportFilter.addEventListener("change", applyFilters);
    dateFilter.addEventListener("change", applyFilters);
  }
}

export default MainPresenter;
