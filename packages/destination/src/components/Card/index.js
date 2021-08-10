import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardWrapper, {
  Card,
  ImageWrapper,
  InfoWrapper,
  TitleWrapper,
  KeteranganWrapper,
} from './CardStyles';
import { Button } from '../../components';
import { URL_GET_WISATA_IMAGE } from '../../constant/url';

const Index = ({ data, size, pathname }) => {
  const [isLoadImage, setIsLoadImage] = useState(true);
  const [isButtonSeeMore, setIsButtonSeeMore] = useState(false);

  const onLoadImage = (e) => {
    setIsLoadImage(false);
  };

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
              <Link to={`/wisata/detail/${d.slug}`}>
                <ImageWrapper>
                  {isLoadImage && <div className="shine box-image"></div>}
                  <img
                    className={`smooth-image image-${
                      isLoadImage ? 'hidden' : 'visible'
                    }`}
                    src={`${URL_GET_WISATA_IMAGE}/${d.gambar}`}
                    alt="Destination"
                    onLoad={onLoadImage}
                  />
                </ImageWrapper>

                <InfoWrapper>
                  <TitleWrapper>
                    <h1>{d.nama}</h1>
                  </TitleWrapper>

                  <KeteranganWrapper>
                    <p>{d.provinsi.nama}</p>
                  </KeteranganWrapper>
                </InfoWrapper>
              </Link>
            </Card>
          );
        })}
      </CardWrapper>

      {data.length > 0 && pathname === '/wisata' && isButtonSeeMore && (
        <Button>Lihat Selengkapnya</Button>
      )}
    </Fragment>
  );
};

export default Index;
