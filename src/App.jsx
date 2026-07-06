import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import socket from "./utils/socket"

function App() {

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    const url = window.location.href;

    if (
      url.includes("/api/user/googleAuthUrl") &&
      url.includes("code=")
    ) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  useEffect(() => {

  if(!user.user?._id) return;

  const registerUser = () => {
    socket.emit(
      "register-user",
      user.user?._id
    );
  };

  registerUser();

  socket.on(
    "connect",
    registerUser
  );

  return () => {
    socket.off(
      "connect",
      registerUser
    );
  };

}, [user]);

  return (<AppRoutes />);
}

export default App;