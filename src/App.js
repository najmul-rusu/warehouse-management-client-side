import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog'
import Login from './Pages/Login/Login/Login'
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Register from './Pages/Login/Login/Register/Register'
import NotFound from './Pages/Shared/NotFound/NotFound';
import TopHeader from './Pages/Shared/Header/TopHeader/TopHeader';
import InventoryItems from './Pages/InventoryItems/InventoryItems';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import InventoryItem from './Pages/InventoryItem/InventoryItem';
import AddItem from './Pages/AddItem/AddItem';
import ManageItems from './Pages/ManageItems/ManageItems';
import MyItem from './Pages/MyItem/MyItem';

function App() {
  return (
    <div>
      <TopHeader></TopHeader>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <InventoryItem></InventoryItem>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/inventory-items' element={<InventoryItems></InventoryItems>}></Route>
        <Route path='/my-item' element={<MyItem></MyItem>}></Route>
        <Route path='/add-item' element={<AddItem></AddItem>}></Route>
        <Route path='/manage-items' element={<ManageItems></ManageItems>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
