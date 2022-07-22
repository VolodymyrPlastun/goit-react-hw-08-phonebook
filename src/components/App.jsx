import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes, Navigate} from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import NavBar from 'NavBar';
import Section from '../Section';
import Loader from 'Loader';
import PrivateRoutes from 'Routes/PrivateRoutes';
import PublicRoutes from 'Routes/PublicRoutes';
import { getCurrentUser } from '../redux/auth/authOperations';
import { getIsLoading } from 'redux/auth/authSelectors';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('Pages/HomePage'));
const ContactsPage = lazy(() => import('Pages/ContactsPage'));
const Register = lazy(() => import('Pages/Register'));
const LoginPage = lazy(() => import('Pages/LoginPage'));

export const App = () => {
const isLoading = useSelector(getIsLoading);

const dispatch = useDispatch();

useEffect(() => {

    dispatch(getCurrentUser())
}, [dispatch])

  return (
    <div>
      {isLoading ? <Loader /> : <Section>
        <NavBar/>
        
<Suspense fallback={<p>Loading</p>}>
        <Routes>
       
          <Route exact path="/" element={
          <PublicRoutes>
          <HomePage/>
          </PublicRoutes>}>
          </Route>

          <Route path="/register" element={
          <PublicRoutes restricted>
          <Register/>
          </PublicRoutes>}>
          </Route>

          <Route  path="/login" element={
          <PublicRoutes restricted>
          <LoginPage/>
          </PublicRoutes>}>
          </Route>

          <Route path="/contacts" element={
          <PrivateRoutes>
          <ContactsPage/>
          </PrivateRoutes>}>
          </Route>

          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Toaster position="top-right"/>
        </Suspense>
      </Section>}
    </div>
  );
};
