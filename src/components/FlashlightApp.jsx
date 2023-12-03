import React, { useState } from "react";
import "./App.css"; // Import your Tailwind CSS file

const FlashlightApp = () => {
  const [isFollowingMouse, setFollowingMouse] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleSwitchToggle = () => {
    setFollowingMouse(!isFollowingMouse);
  };

  return (
    <div
      className="relative h-screen bg-black text-white"
      onMouseMove={handleMouseMove}
    >
      <div
        className={`follower ${isFollowingMouse ? "visible" : "hidden"}`}
        style={{ top: `${mousePosition.y}px`, left: `${mousePosition.x}px` }}
      ></div>

      <div className="zoneswitch bg-transparent" onClick={handleSwitchToggle}>
        <h3>want to read me?</h3>
        <p
          className={`text-white ${
            isFollowingMouse ? "visible-text" : "hidden-text"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          repellendus esse, quo, quaerat ad aut tenetur facilis, magni vero
          iusto voluptatum ipsam porro magnam quam. Maxime quaerat non eligendi
          natus excepturi? Non voluptas fuga, reiciendis omnis necessitatibus
          dolorem deserunt odit ab quos maiores illum blanditiis soluta amet
          libero aperiam, sit minima laborum vitae. Aperiam quidem aliquam,
          libero mollitia magnam dolorum. At deserunt autem nesciunt rem
          dolores, omnis error non repellat dolor ab eaque laudantium. Provident
          temporibus vero dolorum inventore, eaque veritatis accusantium illum
          mollitia fuga a dicta impedit obcaecati sapiente enim, dolor earum
          possimus? Consequuntur voluptatibus, sapiente ipsam at cum quisquam
          corporis facilis expedita voluptas placeat commodi ex obcaecati
          quaerat modi facere a atque quam porro illum cupiditate esse! Eligendi
          totam aliquid quibusdam maxime tempora nobis, ab voluptatibus ipsam,
          provident est sit labore nam, blanditiis architecto suscipit facilis
          soluta corporis odio illum similique dicta excepturi? Nulla magnam,
          voluptatem impedit animi, assumenda eius perspiciatis consectetur
          labore molestias suscipit error tenetur corrupti recusandae rerum
          dolorem mollitia, amet illum incidunt cupiditate minus distinctio.
          Aperiam cupiditate explicabo nulla rerum similique! Rem error ad
          impedit, deleniti magnam blanditiis reiciendis itaque recusandae dicta
          odit maxime obcaecati atque vero sapiente quod sequi officia. Aut
          libero illum nam!
        </p>
      </div>
    </div>
  );
};

export default FlashlightApp;
