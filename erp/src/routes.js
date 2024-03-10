import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Order from './components/Order/Order';
import Product from './components/Product/Product';


const AppRoutes = () => {
    return (
        <Routes>
            
                <Route exact path="/" element={<Dashboard />} />
                <Route path="/order" element={<Order />} />
                <Route path="/product" element={<Product />} />
                </Routes>    

    );
};

export default AppRoutes;
