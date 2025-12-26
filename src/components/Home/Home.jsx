import { useNavigate } from "react-router";
import { ButtonComp } from "../index.js";

const Home = () => {
  const navigate = useNavigate();
  const goToRegister = () => {
    navigate("/login");
  };
  const goToLogin = () => {
    navigate("/register");
  };

  return (
    <>
      <section>
        <h1>Master Your Skills with Interactive Quizzes</h1>

        <p>
          QuizMaster helps you learn, practice, and test your knowledge through
          smart quizzes designed to challenge you.
        </p>

        <button>Start Quiz</button>
        <button>Go to Dashboard</button>
      </section>

      <section>
        <h2>Why QuizMaster?</h2>

        <ul>
          <li>🧠 Smart MCQ based quizzes</li>
          <li>📊 Real time score calculation</li>
          <li>✅ One time quiz attempt system</li>
          <li>📱 Fully responsive design</li>
        </ul>
      </section>

      <section>
        <h2>How It Works</h2>

        <ol>
          <li>
            <ButtonComp onClick={goToRegister} containedValue={"Login"} />
            <ButtonComp onClick={goToLogin} containedValue={"Register"} />
          </li>
          <li>Select a quiz</li>
          <li>Answer questions</li>
          <li>Get your result instantly</li>
        </ol>
      </section>

      <section>
        <h2>Ready to Test Your Knowledge?</h2>
        <ButtonComp containedValue={"Get Started"}></ButtonComp>
      </section>
    </>
  );
};

export default Home;
