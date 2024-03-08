import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

function App() {
  const globalStyle = {
    a: {
      color: "unset",
      textDecoration: "none"
    }
  };

  return (
    <>
      {/* dashboard-chart */}
      <CssBaseline />
      <GlobalStyles styles={globalStyle} />
      <RouterProvider router={router} />

      {/* anh Tuất */}
      {/* <CssBaseline /> */}
      {/* <SigninPage /> */}

      {/* Deniel Truong - code khi có thể mở âm thanh youtube */}
      {/* <div className='App' >
        <header> Sign up</header>
        <FormikSignUp />
      </div> */}
    </>
  );
}

export default App;
