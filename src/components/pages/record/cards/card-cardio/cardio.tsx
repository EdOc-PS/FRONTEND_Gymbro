import style from "../card-exercise/exercise.module.sass";
import PopUpExercice from "../../popups/popup-menu/popup_menu";

interface ExerciseProps {
  name: string;
  description: string;
  time: number;
  equipment: string;
  id: string;
  onLoading: (newLoading: boolean) => void;
}

const Cardio: React.FC<ExerciseProps> = ({
  id,
  name,
  description,
  time,
  equipment,
  onLoading,
}) => {
  return (
    <>
      <div className={style.body_exercise}>
        <div className={style.info_exercise}>
          <div className={style.content_exercise}>
            <img src={`/assets/group-muscle/${name}.png`} alt="" />
            <div className={style.text_exercise}>
              <h1>{name}</h1>
              <div className={style.subtext_exercise}>
                <p>{equipment}</p>
                <p>{time}</p>
              </div>
            </div>
          </div>
          <PopUpExercice
            exerciseId={id}
            exerciseType={"cardio"}
            onLoading={onLoading}
          />
        </div>
        <div className={style.current_exercise}>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Cardio;
