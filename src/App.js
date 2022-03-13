import { useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "./context/appcontext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/registrations/User/Login";
import Signup from "./components/registrations/User/Signup";
import Home from "./components/Home";
import LogMood from "./components/LogMood/User/LogMood";
import Logout from "./components/Home/Logout/Logout";
import PatientLogin from "./components/registrations/Patient/PatientLogin";
import PatientSignup from "./components/registrations/Patient/PatientSignup";
import PatientLogMood from "./components/LogMood/Patient/PatientLogMood";
import TherapistLogin from "./components/registrations/Therapist/TherapistLogin";
import TherapistSignup from "./components/registrations/Therapist/TherapistSignup";
import RecordMessage from "./components/Shared/RecordMessage";
import Message from "./components/Shared/Patient/RecordMessage";
import UserAnalysis from "./components/MoodsAnalysis/User/UserAnalysis";
import PatientAnalysis from "./components/MoodsAnalysis/Patient/PatientAnalysis";
import UserLog from "./components/Moods/User/UserLog";
import PatientLog from "./components/Moods/Patient/PatientLog";
import TherapistDash from "./components/Dashboards/Therapist/TherapistDash";
import PatientDash from "./components/Dashboards/Patient/PatientDash";
import PatientProfile from "./components/Profile/Patient/PatientProfile";
import Feedback from "./components/Feedback/Therapist/TherapistFeedback";
import TherapistFeedback from "./components/Feedback/Patient/FeedbackFrmTherapist";
import AdminLogin from "./components/registrations/Admin/AdminLogin";
import AdminSignup from "./components/registrations/Admin/AdminSignup";
import Report from "./components/Reports/Report";
import MedicationLog from "./components/Medication/Patient/MedicationLog";
import MedicationDash from "./components/Medication/Therapist/MedicationDash";
import TherapistProfile from "./components/Profile/Therapist/TherapistProfile";
import UserProfile from "./components/Profile/User/UserProfile";

const App = () => {
  //user
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const handleLogin = (data) => {
    console.log(data);
    setIsLoggedIn(true);
    setUser(data.user);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({});
  };

  const loginStatus = () => {
    axios
      .get("http://localhost:3001/user/logged_in", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          handleLogin(response);
        } else {
          handleLogout();
        }
      })
      .catch((error) => console.log("api errors:", error));
  };

  //patient
  const [isLoggedInPatient, setIsLoggedInPatient] = useState(false);
  const [patient, setPatient] = useState({});

  const handleLoginPatient = (data) => {
    console.log("logging data", data);
    setIsLoggedInPatient(true);
    setPatient(data.patient);
  };
  console.log("patient in loggin page", patient);

  const handleLogoutPatient = () => {
    setIsLoggedInPatient(false);
    setPatient({});
  };

  const loginStatusPatient = () => {
    axios
      .get("http://localhost:3001/patient/logged_in", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.logged_in) {
          handleLoginPatient(response);
        } else {
          handleLogoutPatient();
        }
      })
      .catch((error) => console.log("api errors:", error));
  };

  //Therapist

  const [isLoggedInTherapist, setIsLoggedInTherapist] = useState(false);
  const [therapist, setTherapist] = useState({});

  const handleLoginTherapist = (data) => {
    console.log(data);
    setIsLoggedInTherapist(true);
    setTherapist(data.therapist);
  };

  const handleLogoutTherapist = () => {
    setIsLoggedInTherapist(false);
    setTherapist({});
  };

  const loginStatusTherapist = () => {
    axios
      .get("http://localhost:3001/therapist/logged_in", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.logged_in) {
          handleLoginTherapist(response);
        } else {
          handleLogoutTherapist();
        }
      })
      .catch((error) => console.log("api errors:", error));
  };

  // Admin

  const [isLoggedInAdmin, setIsLoggedInAdmin] = useState(false);
  const [admin, setAdmin] = useState({});

  const handleLoginAdmin = (data) => {
    console.log(data);
    setIsLoggedInAdmin(true);
    setAdmin(data.therapist);
  };

  const handleLogoutAdmin = () => {
    setIsLoggedInAdmin(false);
    setAdmin({});
  };

  const loginStatusAdmin = () => {
    axios
      .get("http://localhost:3001/admin/logged_in", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.logged_in) {
          handleLoginAdmin(response);
        } else {
          handleLogoutAdmin();
        }
      })
      .catch((error) => console.log("api errors:", error));
  };

  //general
  useEffect(() => {
    loginStatus();
    loginStatusPatient();
    loginStatusTherapist();
    loginStatusAdmin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <AppContext.Provider
        value={{
          isLoggedIn,
          handleLogout,
          handleLogin,
          user,
          isLoggedInPatient,
          handleLogoutPatient,
          handleLoginPatient,
          patient,
          isLoggedInTherapist,
          handleLoginTherapist,
          handleLogoutTherapist,
          therapist,
          isLoggedInAdmin,
          handleLoginAdmin,
          handleLogoutAdmin,
          admin,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/mood/record" element={<LogMood />} />
            <Route exact path="/moods" element={<UserLog />} />
            <Route exact path="/logout/:currentlogged" element={<Logout />} />
            <Route exact path="/moods/dashboard" element={<UserAnalysis />} />
            <Route exact path="/patient/login" element={<PatientLogin />} />
            <Route exact path="/patient/signup" element={<PatientSignup />} />
            <Route exact path="/therapist/login" element={<TherapistLogin />} />
            <Route exact path="/record/message" element={<RecordMessage />} />
            <Route exact path="/patient/record/message" element={<Message />} />
            <Route
              exact
              path="/therapist/signup"
              element={<TherapistSignup />}
            />
            <Route
              exact
              path="/patient/mood/record"
              element={<PatientLogMood />}
            />
            <Route exact path="/patient/moods" element={<PatientLog />} />
            <Route
              exact
              path="/patient/moods/dashboard"
              element={<PatientAnalysis />}
            />
            <Route
              exact
              path="/therapist/dashboard"
              element={<TherapistDash />}
            />
            <Route
              exact
              path="/patient/analysis/:id"
              element={<PatientDash />}
            />
            <Route exact path="/patient/profile" element={<PatientProfile />} />
            <Route
              exact
              path="/therapist/feedback/:id"
              element={<Feedback />}
            />
            <Route
              exact
              path="/therapist/feedback"
              element={<TherapistFeedback />}
            />

            <Route exact path="/admin/login" element={<AdminLogin />} />
            <Route exact path="/admin/signup" element={<AdminSignup />} />
            <Route exact path="/reports" element={<Report />} />
            <Route
              exact
              path="/patient/medication"
              element={<MedicationLog />}
            />
            <Route
              exact
              path="/therapist/medication/:id"
              element={<MedicationDash />}
            />
            <Route
              exact
              path="/therapist/profile"
              element={<TherapistProfile />}
            />
            <Route exact path="/user/profile" element={<UserProfile />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
};
export default App;
