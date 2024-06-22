import { Link } from "react-router-dom";
import { Container } from "./styles.jsx";

export const Carousel = () => {
  const courses = [
    "Python",
    "Data Science",
    "Scientific Writing", 
    "OverLeaf",
    "Machine Learning",
  ];

  return (
    <Container>
      {courses.map((courses) => (
        <Link key={courses} to={`/cursos/${courses}`} >
            <p>Curso {courses}</p>
        </Link>
      ))}
    </Container>
  );
};
