import React from "react";

const Interests = () => {
  return (
    <ul className="w-full h-full gap-3 flex flex-col">
      <li>
        <h3 className="font-medium text-lg text-favtext dark:text-darkt1">Music</h3>
        <p className="italic dark:text-darkt3">
          Listning to music is something I can never comprimise with, I get
          pleasure from music
        </p>
      </li>
      <li>
        <h3 className="font-medium text-lg text-favtext dark:text-darkt1">Reading</h3>
        <p className="italic dark:text-darkt3">
          As all say reading improves knowledge, I personally believe this, and
          read books in free time
        </p>
      </li>
      <li>
        <h3 className="font-medium text-lg text-favtext dark:text-darkt1">Playing Outside</h3>
        <p className="italic  dark:text-darkt3">
          Being in the vicinity of mother nature is always great, so when I am
          at my hometown I always prefer to play outside with my friends
        </p>
      </li>
      <li>
        <h3 className="font-medium text-lg text-favtext dark:text-darkt1">Technology</h3>
        <p className="italic  dark:text-darkt3  ">
          Technology plays an important role in today's life and it touches
          every age form child to grands, and I love Technology as it simplifies
          human life
        </p>
      </li>
    </ul>
  );
};

export default Interests;
