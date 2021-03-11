import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LOGOUT } from "../state/actions/types";

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch({ type: LOGOUT });
    history.replace("/login");
  }, []);

  return <div> Logout</div>;
};

export default Logout;
