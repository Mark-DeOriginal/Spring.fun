import { useNavigate, useLocation } from "react-router-dom";

export default function useUpdateUrl() {
  const navigate = useNavigate();
  const location = useLocation();

  const updateUrlParams = (params: { [key: string]: string | null }) => {
    const searchParams = new URLSearchParams(location.search);

    Object.keys(params).forEach((key) => {
      if (params[key] === null) {
        searchParams.delete(key);
      } else {
        searchParams.set(key, params[key]!);
      }
    });

    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return updateUrlParams;
}
