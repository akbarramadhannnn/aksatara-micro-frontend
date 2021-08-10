import { mount } from 'destination/DestinationApp';
import React, { useRef, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const Index = () => {
  const ref = useRef(null);
  let history = useHistory();
  let params = useParams();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      location: history.location,
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      params: params,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};

export default Index;
