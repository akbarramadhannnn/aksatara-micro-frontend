import { mount } from 'region/RegionApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Index = () => {
  const ref = useRef(null);
  let history = useHistory();

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
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};

export default Index;
