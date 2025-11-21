import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SearchResultPage = () => {
  const { title } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(`/api/item/${title}`)
      .then(res => setItem(res.data))
      .catch(() => setError(true));
  }, [title]);

  if (error) return <h1>Ошибка: тайтл не найден</h1>;
  if (!item) return <h1>Загрузка...</h1>;

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.image} alt={item.title} />
      <p>Тип: {item.type}</p>
    </div>
  );
};

export default SearchResultPage;
