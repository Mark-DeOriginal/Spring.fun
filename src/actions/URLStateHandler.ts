import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDrawerState, setModalState } from "../redux-states/uiSlice";

const URLStateHandler: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const viewName = searchParams.get("view");

    if (searchParams.has("top-menu") && viewName) {
      // Open modal and drawer
      dispatch(setModalState({ open: true, viewName }));
      dispatch(setDrawerState({ open: true, viewName }));
    } else {
      // Close modal and drawer
      dispatch(setModalState({ open: false, viewName: "" }));
      dispatch(setDrawerState({ open: false, viewName: "" }));
    }
  }, [location.search, dispatch]);

  return null;
};

export default URLStateHandler;
