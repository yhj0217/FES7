import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        {/* Outlet은 라우트에서 자식으로 있는 컴포넌트를 꺼내서 보여주는 컴포넌트! */}
        <Route path="/users/*" element={<Outlet />}>
          {/* 이 안에 중첩할 라우트들이 들어갑니다!*/}
          {/* 여기 주소는 /users/ */}
          <Route path="" element={<Users />} />
          {/* /users/coupon */}
          <Route path="coupon" element={<CouponPage />} />
          {/* /users/question */}
          <Route path="question" element={<QuestionPage />} />
          {/* /users/notice */}
          <Route path="notice" element={<NoticePage />} />
        </Route>
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route
          path="/products/:id/notice"
          element={<ProductDetailNoticePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

function ProductDetailNoticePage() {
  const { id } = useParams();
  return <h1>{id}번 상품 상세 알림? 페이지</h1>;
}

function CouponPage() {
  return <h1>쿠폰</h1>;
}

function NoticePage() {
  return <h1>알림</h1>;
}

function QuestionPage() {
  return <h1>?</h1>;
}

function ProductDetailPage() {
  const { id } = useParams();
  return <h1>{id}번 상품 입니다~!</h1>;
}

function Cart() {
  return <h1>카트</h1>;
}

function Users() {
  return <h1>유저들</h1>;
}

function HomePage() {
  return <h1>홈페이지</h1>;
}

export default App;
