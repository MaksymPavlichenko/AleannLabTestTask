import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { ReactComponent as IconLocation } from '../../images/location.svg';
import { ReactComponent as IconBookmark } from '../../images/bookmark.svg';

import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import {
  CardWraper,
  CardInfo,
  CardLogo,
  CardDescription,
  CardTitle,
  CardDepartment,
  CardAddress,
  CardFeature,
  WrapRaiting,
  CardNote,
  CardPost,
} from './JobCard.styled';

const JobCard = ({ job }) => {
  const { pictures, title, name, address, updatedAt } = job;
  const location = useLocation();
  const [rating, setRating] = useState(0);

  const handleWrap = e => {
    e.stopPropagation();
  };

  const handleRating = rate => {
    setRating(rate);
  };
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() =>
          navigate('/details', { state: { from: location, job: job } })
        }
      >
        <CardWraper>
          <CardInfo>
            <CardLogo src={pictures[0]} alt={name} loading="lazy" />
            <CardDescription>
              <CardTitle>{title}</CardTitle>
              <CardDepartment>Deparment name • {name}</CardDepartment>
              <CardAddress>
                <IconLocation width={13} height={18} />
                <p>{address}</p>
              </CardAddress>
            </CardDescription>
          </CardInfo>
          <CardFeature>
            <WrapRaiting onClick={handleWrap}>
              <Rating 
                initialValue={rating}
                onClick={handleRating}
                size={10}
                fillColor={'#38415D'} 
              />
            </WrapRaiting>  
            <CardNote>
              <IconBookmark />
              <CardPost>Posted {moment(updatedAt).fromNow()} </CardPost>
            </CardNote>
          </CardFeature>
        </CardWraper>
      </div>
    </>
  );
};

export default JobCard;