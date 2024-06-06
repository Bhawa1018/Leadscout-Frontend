import Results from './components/employee/quizresults.jsx';
import Layout from './layouts/EPLayout.jsx';
import CustomizedProgressBars from './components/common/ProgressBar.jsx';
import BasicTabs from './components/common/tab.jsx';
import PersonalityPage from './pages/employee/employee_Personality.jsx';
import AssessmentPage from './pages/employee/Assessment.jsx';
import HomePage from './pages/employee/employee_Home.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App(){
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route  path="/employee_Personality" element={<PersonalityPage />} /> 
          <Route path="/Assessment" element={<AssessmentPage />} />
          <Route path="/employee_Home" element={<HomePage />} />
        </Routes>
      </div> 
    </BrowserRouter>
  );

  //return <Results Openness={75} Consciousness={80} Extraversion={65} Agreeableness={90} Neuroticism={50} />

}


export default App;