import React, { useState } from "react";

const ReadMore = () => {
  const [toggle, setToggle] = useState(false);

  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem itaque facere culpa recusandae quis vitae laborum asperiores ad quasi sed error delectus in ratione quisquam, illo debitis voluptatum laboriosam sint dolor et nisi. In hic possimus fuga voluptate iure laboriosam iusto quos eos illo, itaque eligendi. Amet aliquid, magni et maxime aliquam recusandae distinctio impedit? Beatae laboriosam nemo distinctio officiis quis, voluptatibus, tenetur explicabo ducimus accusantium fuga nostrum sapiente deleniti repudiandae possimus quae itaque dolorum odio. Accusantium distinctio quam repellendus saepe quaerat dolores neque ut minima amet quod labore suscipit assumenda architecto asperiores facere autem dolorum, officiis quibusdam maiores deserunt laboriosam veniam blanditiis enim. Exercitationem in culpa, consequuntur magnam quibusdam amet totam commodi eum, deserunt eveniet ea aspernatur nisi deleniti iste corrupti. Dolore, tenetur placeat. Pariatur eum asperiores, possimus enim eveniet ipsam illum corporis, sit nemo, tempore illo quaerat laborum quis impedit ea ducimus eos assumenda! Illum necessitatibus fugiat, dolore exercitationem magni beatae veniam amet autem, sequi soluta debitis. Libero iste quibusdam maiores. Ipsam quas ut asperiores vitae esse, voluptate animi in facilis impedit consequatur. Voluptates laborum quasi quod amet, animi temporibus natus iusto fuga, quae dolor sit fugiat autem corrupti eum ipsa ducimus earum sequi nisi numquam molestias obcaecati.";

  const handleClick = () => {
    setToggle(!toggle);
  };

  const displayText = toggle ? text : text.slice(0, 100);

  return (
    <div className="m-10">
      <h2 className="text-3xl font-bold">Read More Functionality</h2>

      <p className="w-6xl">{displayText}</p>

      <button
        className="bg-blue-600 text-white p-2 rounded mt-3"
        onClick={handleClick}
      >
        {toggle ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReadMore;
