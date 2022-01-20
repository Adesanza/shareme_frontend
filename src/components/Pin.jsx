import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { urlFor } from '../client';

const Pin = ({ pin: { postedBy, image, _id, destination } }) => {
  return (
    <div>
      <img
        className="rounded-lg w-full"
        src={urlFor(image).width(250).url()}
        alt="user-post"
      />
    </div>
  );
};

export default Pin;
