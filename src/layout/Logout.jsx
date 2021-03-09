import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../state/actions/types";

const Logout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: LOGOUT });
  }, []);

  return <div> Logout</div>;
};

export default Logout;
