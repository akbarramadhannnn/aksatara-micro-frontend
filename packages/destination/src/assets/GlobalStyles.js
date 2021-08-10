import React from 'react';
import { Global, css } from '@emotion/react';

const GlobalStyles = (props) => {
  return (
    <Global
      {...props}
      styles={css`
        ::selection {
          background: #007fff;
          color: #ffffff;
        }

        html {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
          color: rgba(49, 53, 59, 0.96);
          margin: 0;
        }

        p {
          margin: 0;
          color: rgba(49, 53, 59, 0.96);
        }

        ul {
          margin: 0;
          padding: 0;
        }

        li {
          list-style-type: none;
        }

        a {
          text-decoration: none;
          color: rgba(49, 53, 59, 0.96);
        }

        .destination-app-wrapper {
          position: relative;
          padding: 30px 30px;
          height: 100%;
          width: 100%;
          box-sizing: border-box;

          .fallback {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .splash-spinner {
            animation: rotate 2s linear infinite;
            margin-left: calc(100vw - 100%);
            width: 50px;
            height: 50px;
          }

          .splash-spinner .path {
            stroke: #007fff;
            stroke-linecap: round;
            animation: dash 1.5s ease-in-out infinite;
          }

          @keyframes rotate {
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes dash {
            0% {
              stroke-dasharray: 1, 150;
              stroke-dashoffset: 0;
            }
            50% {
              stroke-dasharray: 90, 150;
              stroke-dashoffset: -35;
            }
            100% {
              stroke-dasharray: 90, 150;
              stroke-dashoffset: -124;
            }
          }
        }
      `}
    />
  );
};

export default GlobalStyles;
