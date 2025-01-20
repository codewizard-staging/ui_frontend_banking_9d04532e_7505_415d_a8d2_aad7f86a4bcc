import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "screens/landing_page";
import {
CustomerTiles, 
CustomerCreate, CustomerEdit, CustomerView, 
Products, 
ProductCreate, ProductEdit, ProductView
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                                                <Route path="/frontend_banking/html" element={<LandingPage {...props} title={'LandingPage'} nolistbar={true} />} />
                                                        <Route path="Customers/view/:id" element={<CustomerView {...props} title={'View Customer'} />} />
                        <Route path="Customers/edit/:id" element={<CustomerEdit {...props} title={'Edit Customer'} />} />
                        <Route path="Customers/create" element={<CustomerCreate {...props} title={'Create Customer'} />} />
                                                <Route path="/" element={<Products {...props} title={'Product Table'} nolistbar={true} />} />
                                                                    <Route path="Products/view/:id" element={<ProductView {...props} title={'View Product'} />} />
                        <Route path="Products/edit/:id" element={<ProductEdit {...props} title={'Edit Product'} />} />
                        <Route path="Products/create" element={<ProductCreate {...props} title={'Create Product'} />} />

                <Route path="/prds1" element={<Products {...props} title={'Product Table'} />} />
                <Route path="/customers1/tiles" element={<CustomerTiles {...props} title={'Customers'} />} />
        </Routes>
    )

};

export default Component;
