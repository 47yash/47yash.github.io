import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem; /* Default for larger screens */
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem; /* Reduced padding for tablets and smaller */
  }

  @media (max-width: 480px) {
    padding: 0.5rem; /* Even smaller padding for mobile phones */
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  text-align: left;
`;

export const MainContent = styled.main`
  margin-top: 6rem; /* Default for smaller screens */

  @media (min-width: 768px) {
    margin-top: 8rem; /* Larger margin for tablets and up */
  }

  @media (max-width: 480px) {
    margin-top: 4rem; /* Even smaller margin for mobile phones */
  }
`;
