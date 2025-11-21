// hooks/Anime_Pages_Transition.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Anime_Pages_Transition = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // эффект плавного появления при загрузке
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = 1;

    const handleLinkClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href && href !== "#") {
        e.preventDefault();
        document.body.style.opacity = 0;
        setTimeout(() => {
          if (href.startsWith("/")) {
            navigate(href); // внутренний маршрут
          } else {
            window.location.href = href; // внешний
          }
        }, 500);
      }
    };

    const links = document.querySelectorAll('a[href]');
    links.forEach(link => link.addEventListener("click", handleLinkClick));

    return () => {
      links.forEach(link => link.removeEventListener("click", handleLinkClick));
    };
  }, [navigate]);
};
