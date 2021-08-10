import React, { useEffect, useState } from 'react';
import { Card, Heading, LoadingCard } from '../components';
import queryString from 'query-string';
import axios from 'axios';
import { URL_GET_WISATA } from '../constant/url';
import {
  ReplaceToStartUpperCase,
  ReplaceSlugToKeyword,
} from '../utils/replace';

const Index = ({ location, params }) => {
  const [destination, setDestination] = useState({
    heading: {
      title: '',
      link: '',
    },
    data: [],
    isLoading: true,
    size: 0,
  });

  useEffect(() => {
    let titleHeading;
    let limit = 24;
    let paramsProvince = '';
    if (location) {
      if (!location.search) {
        if (location.pathname === '/') {
          limit = 12;
          titleHeading = 'Destination a Tour in Indonesia';
        } else if (location.pathname === '/wisata') {
          titleHeading = 'Destination a Tour in Indonesia';
        } else {
          titleHeading = '';
        }
      } else {
        const parse = queryString.parse(location.search);
        if (parse.province) {
          paramsProvince = parse.province;
        }
      }
    }

    if (params.slugProvince) {
      paramsProvince = ReplaceSlugToKeyword(params.slugProvince);
      titleHeading = `Destination a Tour in ${ReplaceToStartUpperCase(
        params.slugProvince
      )}`;
    }

    setDestination((oldState) => ({
      ...oldState,
      isLoading: true,
      size: 0,
    }));

    axios
      .get(
        `${URL_GET_WISATA}?page=${1}&limit=${limit}&provinsi=${paramsProvince}`
      )
      .then((response) => {
        if (response.data.status === 200) {
          const responseData = response.data.result.data;
          setDestination((oldState) => ({
            ...oldState,
            size: responseData.length,
          }));
          for (let i = 0; i < responseData.length; i++) {
            setTimeout(() => {
              setDestination((oldState) => ({
                ...oldState,
                data: [...oldState.data, responseData[i]],
              }));
            }, 100 * i);
          }
        } else if (response.data.status === 204) {
          setDestination((oldState) => ({
            ...oldState,
            data: [],
          }));
        }

        setDestination((oldState) => ({
          ...oldState,
          heading: {
            ...oldState.heading,
            title: titleHeading,
          },
          isLoading: false,
        }));
      });
  }, [location, params]);

  return (
    <div className="destination-app-wrapper">
      {destination.isLoading && <LoadingCard />}

      {/* {!destination.isLoading && ( */}
      <Heading heading={destination.heading} />
      <Card
        data={destination.data}
        pathname={location.pathname}
        size={destination.size}
      />
      {/* )} */}
    </div>
  );
};

export default Index;
