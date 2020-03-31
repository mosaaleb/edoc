import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DoctorLikeButton from './DoctorLikeButton';

const DoctorProfileHeader = ({ doctor }) => (
  <div className="bg-gradient flex flex-col justify-between text-gray-100 p-4 font-montserrat">
    <Link to="/doctors" className="w-8 h-8">
      <svg className="w-8 h-8 fill-current inline-block" viewBox="0 0 20 20">
        <path d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z" />
      </svg>
    </Link>
    <div className="flex flex-col items-center">
      <p className="my-2 font-bold">
        Dr.&nbsp;
        {doctor.fullName}
      </p>
      <div className="flex items-center">
        <div className="px-4 py-2 m-2">
          <svg className="w-6 h-6 fill-current inline-block" viewBox="0 0 20 20">
            <path d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z" />
          </svg>
        </div>
        <div className="w-20 h-20 mt-2 rounded-full overflow-hidden">
          <img
            src={doctor.avatarUrl}
            alt={`${doctor.fullName}'s avatar`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="px-4 py-2 m-2">
          <svg className="w-6 h-6 fill-current inline-block" viewBox="0 0 20 20">
            <path d="M10 15l-4 4v-4H2a2 2 0 0 1-2-2V3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8zM5 7v2h2V7H5zm4 0v2h2V7H9zm4 0v2h2V7h-2z" />
          </svg>
        </div>
      </div>
      <p className="my-2 text-lg">{doctor.speciality}</p>
    </div>
    <div className="flex justify-between mt-3 w-3/5 mx-auto font-bold">
      <p>{`$${doctor.fees}`}</p>
      <p>{`${doctor.yearsOfExperience} Years of exp.`}</p>
      <DoctorLikeButton
        id={doctor.id}
        isLiked={doctor.liked}
        strokeColor="white"
        likesCount={doctor.likesCount}
      />

    </div>
  </div>
);

DoctorProfileHeader.propTypes = {
  doctor: PropTypes.shape({
    id: PropTypes.number,
    liked: PropTypes.bool,
    fees: PropTypes.number,
    fullName: PropTypes.string,
    avatarUrl: PropTypes.string,
    speciality: PropTypes.string,
    likesCount: PropTypes.number,
    yearsOfExperience: PropTypes.number
  }).isRequired
};

export default DoctorProfileHeader;
