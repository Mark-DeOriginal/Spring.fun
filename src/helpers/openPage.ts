import { useNavigate } from "react-router-dom";

export default function openPage(pageName: string) {
  const navigate = useNavigate();

  const open = () => {
    navigate(pageName);
  };
  open();
}
