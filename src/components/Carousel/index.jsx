import { Link } from "react-router-dom";

export const Carousel = () => {
  const courses = [
    "Python",
    "Data Science",
    "Scientific Writing",
    "OverLeaf",
    "Machine Learning",
  ];

  return (
    <div>
      {courses.map((courses) => (
        <Link key={courses} to={`/cursos/${courses}`} >
            Cursros {courses}
        </Link>
      ))}
    </div>
  );
};
