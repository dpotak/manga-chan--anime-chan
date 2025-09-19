import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useHomePagesTransition = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Плавное появление страницы
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = 1;

  }, []);

  const handleTransitionClick = (path) => {
    document.body.style.opacity = 0;
    setTimeout(() => navigate(path), 500);
  };

  return handleTransitionClick;
};
