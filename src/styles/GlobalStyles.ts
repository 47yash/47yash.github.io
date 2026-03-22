import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
      scroll-behavior: smooth;
  }

  body {
      color: ${({ theme }) => theme.colors.gray300};
      font-family: ${({ theme }) => theme.fonts.sans};
      font-weight: 400; /* Primary text weight */
      line-height: 1.6; /* Generous line height */
      margin: 0;
      padding: 0;
      box-sizing: border-box; /* Ensure consistent box model */
  }

  /* Basic reset for headings if needed */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.serif}, 'Playfair Display', serif;
    margin-top: 0;
    margin-bottom: 0;
    font-weight: 600;
  }

  /* Royal Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.ink};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.charcoal};
    border-radius: 5px;
    border: 1px solid rgba(212, 175, 55, 0.3);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.metal};
  }
`;

export default GlobalStyle;
