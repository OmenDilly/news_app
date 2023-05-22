import PostList from "./components/posts/PostList";
import { Post } from "./models/Post";
import cover from './assets/IMG_9166.jpg';
import catImage from './assets/IMG_4634.jpg'
import NavBar from "./components/ui/navbar/NavBar";
import { useState } from "react";

const defailtPosts: Post[] = [
  new Post(
    'В Красноярске появился новый крутой фотограф!',
    'Дорогие Красноярцы! Не так давно в нашем любимом городе, полном замечательных и захватывающих видов, началось потепление после долгой зимы и пасмурной весны. А с наступлением лета на улицы города выходят люди, чтобы погулять и насладиться погодой. Вот и мы заметили одного такого человечка, который выкладывает фотографии своих прогулок в соцсети. Наша редакция выбрала несколько лучших картинок этого фотографа, вот посмотрите',
    cover
  ),
  new Post(
    'Смотрите за обновлениями сайта. Скоро будут невероятные изменения!',
    'С сегодняшнего дня мы начинаем разработку новых возможностей сайта. Следите за обновлениями, скоро появятся новый крутые фишки!',
    catImage
  )
]

function App() {

  const [posts, setPosts] = useState(defailtPosts)

  return (
    <div className="app">
      <NavBar setPosts={setPosts}/>
      <PostList
        posts={posts}
      />
    </div>
  );
}

export default App;
