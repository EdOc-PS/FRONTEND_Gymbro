import React, { useState, useEffect, useCallback } from "react";
import style from "./group_routine_create.module.sass";
import { GET } from "../../../../../core/services/get";
import RoutineRadioCreate from "../../cards/card-routine-create-radio/routine_radio";
import { POST } from "../../../../../core/services/post-auth";


interface GroupRoutineCreateProps {
  personId: string | unknown;
  onRoutineId: (id: string) => void;
}

const GroupRoutineCreate: React.FC<GroupRoutineCreateProps> = ({
  personId,
  onRoutineId,
}) => {
  const [routines, setRoutines] = useState<{ name: string; id: string }[]>([]);
  const [routineId, setRoutineId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
 
  const fetchRoutines = useCallback(async () => {
    try {
      const result = await GET(
        `http://localhost:8080/gymbro/daily/findbyperson/${personId}`
      );

      if (result.success) {
        const sortedRoutines = result.data.sort(
          (a: { name: string }, b: { name: string }) =>
            a.name.localeCompare(b.name)
        );
        setRoutines(sortedRoutines);

        if (result.data.length > 0 && !routineId) {
          setRoutineId(result.data[0].id);
          onRoutineId(result.data[0].id);
        }
      } else {
        console.error("Erro ao buscar rotinas:", result.message);
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
    } finally {
      setLoading(false);
    }
  }, [personId, onRoutineId]);

  const handleRoutine = (id: string) => {
    onRoutineId(id);
  };

  useEffect(() => {
    fetchRoutines();
  }, [fetchRoutines]);

  const handleClick = async () => {
    setLoading(true);
    try {
      const result = await POST(
        `http://localhost:8080/gymbro/daily/${localStorage.getItem(
          "userId"
        )}`,
        {},
        localStorage.getItem("token")
      );

      if (result.success) {
        fetchRoutines();
      } else {
        console.error("Erro ao buscar rotinas:", result.message);
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.group_routine_create}>
      {loading ? (
        <p>Carregando rotinas...</p>
      ) : routines.length > 0 ? (
        routines.map((routine) => (
          <RoutineRadioCreate
            key={routine.id}
            day={routine.name}
            id={routine.id}
            onClick={handleRoutine}
            checked={routineId === routine.id}

          />
        ))
      ) : (
        <p>Nenhuma rotina encontrada.</p>
      )}

      {routines.length < 5 && (
        <button
          className={style.createRoutine}
          onClick={handleClick}
          disabled={loading}
        >
          <i className="fi fi-rs-plus"></i>
        </button>
      )}
    </div>
  );
};

export default GroupRoutineCreate;
