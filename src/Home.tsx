import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="hellopage">
      <h1>Welcome to QuizApp 😍 </h1>
      <Link to="quiz">Start Quiz</Link>
    </div>
  );
};
export default Home;
