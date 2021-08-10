import React, { useEffect, useState } from 'react';
import { Heading, Card, LoadingCard } from '../components';
import { URL_GET_PROVINCE } from '../constant/url';
import axios from 'axios';

const Region = ({ location }) => {
  const [region, setRegion] = useState({
    heading: {
      title: '',
      link: '',
    },
    data: [],
    isLoading: true,
    size: 0,
  });

  useEffect(() => {
    axios.get(`${URL_GET_PROVINCE}?skip=0&limit=10`).then((response) => {
      let heading = {
        title: '',
        link: '',
      };
      let resultData = [];

      if (location.pathname === '/') {
        heading = {
          title: 'Province in Indonesia',
          link: '/province',
        };
      } else if (location.pathname === '/province') {
        heading = {
          title: 'Province in Indonesia',
          link: '',
        };
      }

      if (response.data.status === 200) {
        resultData = response.data.result.data;
      }

      setRegion((oldState) => ({
        ...oldState,
        heading,
        data: resultData,
        isLoading: false,
        size: resultData.length,
      }));
    });
  }, [location]);

  return (
    <div className="region-app-wrapper">
      {region.isLoading && <LoadingCard />}

      <Heading heading={region.heading} />
      <Card data={region.data} size={region.size} location={location} />
    </div>
  );
};

export default Region;
