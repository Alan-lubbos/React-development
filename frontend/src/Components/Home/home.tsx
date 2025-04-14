import StepperLayout from "../StepperLayout/StepperLayout";
import TestForm from "../Test/test";
import TestFormPage from "../Test/test2";
import ThemeToggle from "../ThemeToggle/themeToggle";

const Home = () => {
  return <div>
    <ThemeToggle/>
    <StepperLayout/>
    <TestForm/>
    <TestFormPage/>
    
    

  </div>;
};

export default Home;
