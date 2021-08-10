import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components';
import CardWrapper, { Card, ContentCard, TittleWrapper } from './CardStyles';
import { URL_GET_PROVINCE_IMAGE } from '../../constant/url';

const Index = ({ data, location, size }) => {
  const [isButtonSeeMore, setIsButtonSeeMore] = useState(false);

  useEffect(() => {
    if (data.length > 0) {
      if (data.length === size) {
        setIsButtonSeeMore(true);
      }
    }
  }, [data, size]);

  return (
    <Fragment>
      <CardWrapper>
        {data.map((d, i) => {
          return (
            <Card key={i}>
              <Link to={`/province/detail/${d.slug}`}>
                {/* <img src="https://picsum.photos/600/180/?random" alt="Province" /> */}
                <img
                  src={`${URL_GET_PROVINCE_IMAGE}/${d.gambar}`}
                  alt="Province"
                />
                <ContentCard>
                  <TittleWrapper>
                    <h1>{d.nama}</h1>
                  </TittleWrapper>
                </ContentCard>
              </Link>
            </Card>
          );
        })}
      </CardWrapper>

      {data.length > 0 &&
        location.pathname === '/province' &&
        isButtonSeeMore && <Button>Lihat Selengkapnya</Button>}
    </Fragment>
  );
};

export default Index;
