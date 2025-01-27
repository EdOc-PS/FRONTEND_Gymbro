import DietRadio from "../../cards/card-ratio/diet_radio";
import style from "../group_diet.module.sass";

interface GroupProps {
  onChange: (value: string) => void;
}

const GroupObejective: React.FC<GroupProps> = ({ onChange }) => {
  const objective = [
    { id: "ENDURANCE", name: "endurance" },
    { id: "HYPERTROPHY", name: "hypertrophy" },
    { id: "POWERLIFTING", name: "powerlifting" },
    { id: "WEIGHT_LOSS", name: "weight loss" },
    { id: "WELL_BEING", name: "well being" },
  ];

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={style.group_diet}>
      {objective.map((objective) => (
        <DietRadio
          key={objective.id}
          name={objective.name}
          id={objective.id}
          onChange={handleRadioChange}
          checked={objective.id === "ENDURANCE"}
          type={"objective"}
        />
      ))}
    </div>
  );
};

export default GroupObejective;
