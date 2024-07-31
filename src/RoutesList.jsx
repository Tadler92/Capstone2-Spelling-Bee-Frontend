import { Routes, Route, Navigate, redirect } from "react-router-dom";

import Home from "./Home";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import NewWordForm from "./NewWordForm";
import PrivateAdminRoutes from "./PrivateAdminRoutes";
import PrivateRoutes from "./PrivateRoutes";
import RankedUsers from "./RankedUsers";
import ChallengeOptions from "./ChallengeOptions";
import ChallengePage from "./ChallengePage";
// import AdminPage from "./AdminPage";
// import About from './About'
// import Contact from './Contact'
// import NotFound from "./NotFound";
// import AdminDashboard from "./AdminDashboard";


function RoutesList({login, signup, addWord}) {
  return (
    <Routes>
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
      {/* <Route path="/users/:username" element={<AdminPage />} /> */}
      {/* <Route path="/admin" element={<AdminDashboard />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignupForm signup={signup} />} />
      <Route path="/login" element={<LoginForm login={login} />} />

      <Route element={<PrivateAdminRoutes />}>
        <Route path="/add-new-word" element={<NewWordForm addWord={addWord} />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/user-rankings" element={<RankedUsers />} />
        <Route path="/challenges" element={<ChallengeOptions />} />
        <Route path="/challenges/easy" element={<ChallengePage mode='easy' />} />
        <Route path="/challenges/medium" element={<ChallengePage mode='medium' />} />
        <Route path="/challenges/hard" element={<ChallengePage mode='hard' />} />
      </Route>

      {/* <Route path="/*" element={<Navigate to='/login' replace />} /> */}
      <Route path="*" element={<Navigate to='/' replace />} />

      {/* Below is the more common way of redirecting to not found urls (aka 404s) */}
      {/* <Route path="*" element={<NotFound />} /> */}

      {/* <Redirect to='/' /> */}
      {/* Above doesn't work anymore!! this is where the "useNavigate" would come into play!! */}

      {/* <Navigate to='/' replace /> */}

    </Routes>
  )
};


export default RoutesList;