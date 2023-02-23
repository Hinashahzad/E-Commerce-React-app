import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi( {
    reducerPath: 'productsApi', 
    baseQuery: fetchBaseQuery( {
        baseUrl:'https://fakestoreapi.com/' 
    } ),
    endpoints: ( builder ) => ( {
        getProducts: builder.query( {
            query: () => ( {
                url: 'products', // endpoint of the base URL 
                method:'Get', // By default the method is Get
            } )
            
        })
    })
} );
export const { useGetProductsQuery } = productsApi;