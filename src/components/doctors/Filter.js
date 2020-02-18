import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Filter = ({ setParams, setIsFilterHidden }) => {
  const [input, setInput] = useState({ name: null, speciality: null });
  const doctorSpecialities = [
    'General Doctor',
    'Skin & Hair',
    'Child Care',
    "Women's Health",
    'Dentist',
    'ENT',
    'Homeopathy',
    'Ayurveda',
    'Cardiac',
    'Psychiatry'
  ];

  const handleFilter = () => {
    setIsFilterHidden(true);
    setParams(input);
  };

  return (
    <div className="fixed right-0 top-0 bg-smoke-light w-full h-full flex justify-center items-center">
      <div className="p-8 bg-gray-100 max-w-md rounded flex flex-col justify-between w-4/5">
        <div className="my-4">
          <input
            type="text"
            value={input.name}
            placeholder="Doctor Name"
            onChange={(e) => setInput({ ...input, name: e.target.value })}
            className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="my-4">
          <select
            value={input.speciality}
            onChange={(e) => setInput({ ...input, speciality: e.target.value })}
            className="w-full block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="default" hidden="hidden">
              Choose Category
            </option>
            {doctorSpecialities.map((speciality) => (
              <option key={speciality} value={speciality}>
                {speciality}
              </option>
            ))}
          </select>
        </div>
        <div className="my-4">
          <button
            type="button"
            onClick={handleFilter}
            className="w-full text-sm px-3 py-2 uppercase bg-gradient font-bold text-gray-100 rounded-full focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

Filter.propTypes = {
  params: PropTypes.shape({
    name: PropTypes.string,
    speciality: PropTypes.string
  }).isRequired,
  setParams: PropTypes.func.isRequired,
  setIsFilterHidden: PropTypes.func.isRequired
};

export default Filter;
