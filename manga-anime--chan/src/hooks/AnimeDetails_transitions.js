import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AnimeDetails_transitions = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const container = document.getElementById("page-container");
    if (!container) return;

    container.style.opacity = 0;
    container.style.transition = "opacity 0.6s ease";
    requestAnimationFrame(() => {
      container.style.opacity = 1;
    });
  }, []);

  const handleTransitionClick = (path) => {
    const container = document.getElementById("page-container");
    if (!container) {
      navigate(path);
      return;
    }

    container.style.opacity = 0;
    setTimeout(() => {
      navigate(path);
    }, 600);
  };

  return handleTransitionClick;
};
