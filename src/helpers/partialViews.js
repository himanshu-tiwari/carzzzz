import React from 'react';

export const optionsList = (array) => array.map(
    (option, i) => <option value={option} key={i}>{option}</option>
);