import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Search from '../pages/Search';
import Ranking from '../pages/Ranking';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import QrCamera from '../pages/QrCamera';
import MyPage from '../pages/MyPage/MyPage';
import AddPopUp from '../musterd-ui/PopUpStyled/AddPopUp';

// 라우트명은 kebab-case 로 작성합니다

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/search" element={<Search />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/scan" element={<QrCamera />} />
      <Route path="mypage" element={<MyPage />} />
      <Route path="/popup" element={<AddPopUp />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
