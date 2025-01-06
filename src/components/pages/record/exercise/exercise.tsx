import PopUpExercice from "../popup-menu/popup_menu";
import style from "./exercise.module.sass";

interface ExerciseProps {
  name: string;
  sets: number;
  reps: number;
  load: number;
  equipment: string;
  muscle: string;
}

const Exercise: React.FC<ExerciseProps> = ({ name, sets, reps, load, equipment, muscle}) => {
  return (
    <>
      <div className={style.body_exercise}>
        <div className={style.info_exercise}>

          <div className={style.text_exercise}>
            <h1>{name}</h1>
            <div className={style.subtext_exercise}>
              <p>{muscle}</p>
              <p>{sets}x{reps} reps</p>
              <p>{equipment}</p>
            </div>
          </div>

          <PopUpExercice />

        </div>
        <div className={style.current_exercise}>
          <p>Carga: <strong>{load} KG</strong></p>
        </div>
      </div>
    </>
  );
} 

export default Exercise;