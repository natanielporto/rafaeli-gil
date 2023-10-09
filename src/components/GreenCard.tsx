import React from "react";

export const GreenCard = ({ description }: { description: string[] }) => {
  return (
    <div className="bg-lightGreen p-8 mb-4">
      <ul className="list-disc list-inside">
        {description.map((desc) => (
          <li className="list-disc" key={desc}>
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
};
