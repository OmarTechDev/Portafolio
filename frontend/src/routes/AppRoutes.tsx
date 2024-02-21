import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage, AboutPage, Calculator, PhoneB, Multi, Pass, Rovers } from './Pages'

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage /> }></Route>
        <Route path="/calculator" element={<Calculator /> }></Route>
        <Route path="/rovers" element={<Rovers /> }></Route>
        <Route path="/multi" element={<Multi /> }></Route>
        <Route path="/multi/pass" element={<Pass /> }></Route>
        <Route path="/multi/pass/phonebook" element={<PhoneB /> }></Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes
