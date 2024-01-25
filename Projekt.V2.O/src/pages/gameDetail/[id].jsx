import React, { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import GameDetailLists from "./GameDetailLists";
import Link from "next/link";
import { PageContext } from "../PageContextProvider";
const GameDetailComponent = () => {
  const { games } = useContext(PageContext);
  const router = useRouter();
  const gameDetail = games.find(
    (game) => game.id === parseInt(router.query.id)
  );
  console.log("zmieniam gre");
  console.log(gameDetail);

  return (
    <div>
      <Link href="/Home" replace={false}>
        <div>POWROT NA STRONE GLOWNA</div>
      </Link>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum hic,
        sunt aut neque cumque nisi soluta quis nihil at veniam ducimus provident
        corrupti doloremque placeat architecto adipisci laudantium enim. Ut
        asperiores neque ea debitis iusto rerum nihil dolor deserunt, excepturi
        a voluptatum voluptatibus porro dicta veritatis voluptates, alias aut!
        Voluptate, eveniet. Quaerat soluta excepturi porro numquam, dolore
        quibusdam a consectetur? Neque optio numquam dolor dolores officiis
        blanditiis, quasi reiciendis, ab natus dolore, illo nobis. Quo dolorum,
        aperiam incidunt magni blanditiis distinctio ipsum necessitatibus
        cupiditate suscipit, labore itaque aspernatur neque unde nostrum quod
        dolores autem? Libero rem ipsum obcaecati, fuga, architecto velit ullam
        possimus vero molestias facere praesentium assumenda pariatur
        voluptatem, magnam nihil reiciendis. Blanditiis tenetur harum deleniti
        quam consequatur aliquam iusto magnam quaerat. Consectetur nulla velit
        pariatur tempora nesciunt fuga repellendus, soluta earum totam dolores
        adipisci ratione expedita accusamus corporis asperiores, ipsum
        repudiandae quae odit aliquid! Est eaque voluptatibus beatae distinctio
        maiores vitae modi aspernatur ipsam facere eligendi nihil similique
        quae, commodi, optio deleniti blanditiis tempora repudiandae ab fugit
        facilis nulla id maxime rerum recusandae. Debitis numquam sequi soluta,
        neque voluptatum vel eligendi aut maxime reiciendis, velit accusamus
        enim repudiandae ducimus voluptas, libero quo impedit rem delectus
        animi? Minima totam magnam quas consequatur soluta numquam ea itaque
        voluptatibus iste sunt distinctio adipisci corrupti ad, tenetur quam
        repudiandae tempore, sapiente quo dolor nisi, aliquam alias cupiditate?
        Tempora mollitia unde iure laborum, accusamus illum, itaque illo fuga ad
        cum repellat doloribus nulla, nisi incidunt temporibus fugit sint nam
        quod nobis reiciendis non facilis? Minus suscipit, harum labore, sunt
        expedita aut ut autem quibusdam fugit praesentium ipsam impedit dolorum
        laudantium optio inventore voluptatum! Facere adipisci, illo
        reprehenderit dicta in esse animi sapiente sunt nostrum eveniet quod
        veritatis dolor eaque minus. Corporis suscipit quae explicabo mollitia
        iste unde exercitationem quia tenetur deserunt voluptates fuga quasi,
        dolorem earum pariatur in vel quo ipsum esse, fugit reprehenderit! Porro
        ab facere reprehenderit, laudantium voluptatem aspernatur earum
        accusamus tenetur alias voluptas quisquam distinctio nostrum ipsam
        voluptatum sed, placeat odit vel sequi saepe aliquid. Ea nihil error
        fugiat repellat nisi in aperiam commodi, id veritatis modi nobis veniam
        laudantium nostrum, doloremque delectus consequatur labore expedita cum
        eveniet. Assumenda sit quae eligendi, unde reiciendis eum suscipit
        excepturi! Quidem cumque rem consequatur alias illo repudiandae deserunt
        nemo nulla voluptatibus sit ad libero assumenda cupiditate mollitia
        provident quisquam magnam quos, dolore atque! Numquam illo quae
        necessitatibus quam odio sit consectetur, esse quo dolor quasi dolore
        eligendi hic cumque vitae, ullam corrupti suscipit? Dicta quia vero at
        laudantium temporibus repudiandae optio earum? Consectetur illo porro
        earum eius excepturi, pariatur aut incidunt recusandae consequatur
        magnam deserunt velit obcaecati minima perspiciatis. Ipsum,
        exercitationem. Quos quidem, minus doloremque soluta rerum aliquid cum
        non cupiditate quibusdam ipsa. Atque laudantium tempora quaerat soluta,
        vel molestiae laborum nam at expedita ipsum obcaecati numquam maxime
        fugit. Quod dicta iure eaque praesentium odit dolorem tempora blanditiis
        delectus, nulla placeat asperiores magni ullam sit excepturi dolor, quo
        eveniet eius magnam assumenda, libero exercitationem ipsum ducimus?
        Officiis provident qui aliquid accusantium quas nam.
      </h4>
    </div>
  );
};

export default GameDetailComponent;
