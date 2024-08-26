import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import {
  connectSocket,
  disconnectSocket,
} from "@/store/middleware/socketThunks";
import { Routes, Route } from "react-router-dom";
import AnimationLayout from "./layouts/AnimationLayout";

const ProductsPage = lazy(() => import("@/views/ProductsPage"));
const GroupsPage = lazy(() => import("@/views/GroupsPage"));
const SettingsPage = lazy(() => import("@/views/SettingsPage"));
const UsersPage = lazy(() => import("@/views/UsersPage"));
const IncomingPage = lazy(() => import("@/views/IncomingPage"));

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(connectSocket());
    return () => {
      dispatch(disconnectSocket());
    };
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<AnimationLayout />}>
          <Route index element={<IncomingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/groups" element={<GroupsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
