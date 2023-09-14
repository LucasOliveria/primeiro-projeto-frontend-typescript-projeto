import Header from "../../components/Header";
import LittleCard from "../../components/LittleCard";
import { Teacher } from "../../types/types";
import './styles.css';

function Main({ teachers }: { teachers: Teacher[] }) {
  return (
    <div className="generic-container">
      <Header />
      <div className="container-cards">
        {teachers && teachers.map((teacher) => (
          <LittleCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
}

export default Main;