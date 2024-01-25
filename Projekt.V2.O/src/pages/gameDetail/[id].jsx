import React, { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import GameDetailLists from "./GameDetailLists";
import { PageContext } from "../PageContextProvider";
const GameDetail = () => {
  const { games } = useContext(PageContext);
  const router = useRouter();
  const gameDetail = games.find(
    (game) => game.id === parseInt(router.query.id)
  );

  return (
    <div style={{ marginLeft: "40px" }}>
      <h1>{gameDetail?.name}</h1>
      <Image
        src={gameDetail?.background_image}
        alt={gameDetail?.name}
        width={800}
        height={400}
      ></Image>
      <h3>{gameDetail?.tba ? "TBA " : `Released: ${gameDetail?.released}`}</h3>
      <h2>Metacritic Score: {gameDetail?.metacritic}</h2>
      <GameDetailLists gameDetail={gameDetail}></GameDetailLists>
      <h2>Description</h2>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic
        impedit similique facilis accusamus eum. Praesentium tempore maxime
        delectus omnis in, exercitationem sint atque possimus iste voluptatem
        necessitatibus. Iure, impedit voluptatem! Veritatis tempora nisi hic
        deserunt aperiam, voluptas ratione laudantium possimus quo, iure quos
        doloremque suscipit eveniet magni praesentium voluptatibus consequatur
        culpa inventore. Autem explicabo quo qui, maiores esse sunt quod
        officiis beatae culpa recusandae, facilis error mollitia numquam
        corrupti magni rerum, tempore tenetur et fugiat. Aut dolor nulla eaque
        mollitia voluptates natus eos! Aliquam mollitia esse dolorem? Atque
        omnis illum at quia amet, aut similique nostrum id itaque voluptas nemo
        beatae vero, dolorem laudantium. Corporis voluptatem neque dignissimos
        dolore debitis veniam iure. Obcaecati quos voluptates possimus, delectus
        voluptatem culpa minima sed totam quam dolores corrupti nulla nostrum
        dignissimos pariatur iure ea, soluta tempora eaque. In, animi odio dicta
        accusantium dolores debitis sed vero optio! Autem dicta libero culpa
        rem, quia fugiat dignissimos distinctio minima, quisquam inventore ipsum
        ad cum pariatur vitae fuga eum. Quos quo odio saepe nesciunt dolorum
        iste in nemo tempore amet distinctio iure, id omnis porro quia sequi
        veniam! Veniam, ipsa atque consequatur ducimus similique voluptatibus
        minima exercitationem suscipit quaerat nemo amet quisquam ex dolore iure
        enim laboriosam doloremque itaque dolorem aperiam accusantium! Libero
        unde eius magnam nemo eaque qui repudiandae vel laboriosam, vitae natus
        similique quia enim, perferendis sapiente debitis. Reprehenderit cumque
        sapiente, consequatur nisi obcaecati voluptas temporibus quis ullam nemo
        molestias iusto? Atque tempora consectetur reiciendis laudantium,
        mollitia dolorem corrupti veniam esse rem asperiores placeat adipisci
        molestias voluptas unde maiores consequuntur recusandae reprehenderit!
        Dolor quisquam in odio vero laborum culpa rerum ea adipisci officia
        magni ratione, assumenda aspernatur tempora!
      </h4>
    </div>
  );
};

export default GameDetail;
