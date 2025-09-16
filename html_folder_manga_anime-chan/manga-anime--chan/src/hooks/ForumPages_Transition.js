import { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // если используешь react-router

export const ForumPages_Transition = () => {
  const navigate = useNavigate(); // для переходов внутри React

  useEffect(() => {
    // Плавное появление страницы при загрузке
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 0.5s ease";

    window.addEventListener("load", () => {
      document.body.style.opacity = 1;
    });

    // Обработчик для всех ссылок
    const handleLinkClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href && href !== "#") {
        e.preventDefault();
        document.body.style.opacity = 0;
        setTimeout(() => {
          // Если переход внутри React Router
          if (href.startsWith("/")) {
            navigate(href);
          } else {
            // Если внешний URL
            window.location.href = href;
          }
        }, 500);
      }
    };

    const links = document.querySelectorAll('a[href]');
    links.forEach(link => link.addEventListener("click", handleLinkClick));

    // Чистим обработчики при размонтировании
    return () => {
      links.forEach(link => link.removeEventListener("click", handleLinkClick));
    };
  }, [navigate]);
};
