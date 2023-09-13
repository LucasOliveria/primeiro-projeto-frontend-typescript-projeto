import { useEffect } from "react";
import Header from "../../components/Header";
import LittleCard from "../../components/LittleCard";
import api from "../../services/api";
import { StateTeachers } from "../../types/types";
import './styles.css';

function Main({ teachers, setTeachers }: StateTeachers) {
  async function getTeachers() {
    try {
      const response = await api.get('/teachers');

      setTeachers && setTeachers(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getTeachers();
  }, []);

  return (
    <div className="generic-container">
      <Header />
      <div className="container-cards">
        {teachers.map((teacher) => (
          <LittleCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
}

export default Main;