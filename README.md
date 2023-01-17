# React App (Online Shopping for Bridal dresses)

`npx create-react-app REDUX2`

## Installation dependancy
`npm install semantic-ui-react semantic-ui-css`
`npm install react-router-dom`
`npm install axios`
`npm install redux react-redux`

## Folder structure
1. Component 
    It contains all the component
2. Redux
    - Actions (Can b more than one action)
        * ACTION: What to do 
        * Action name: registerUsers
        * Action always return the Javascript object containing type and payload
        * REGISTER_USER is action type and payload contain the data
    - reducer
        * index.js
                /**
                * This is the file where all the reducers will combine through the COMBINEREDUCERS. 
                * REDUCERS can be multiple
                */
        * reducer1 
            /**
            * This files describe HOW to perform the actions
            * IMPORTANT:
            *  It takes two arguments : Initial state and actions(JAVASCRRIPT object {type, payload})
            */
        * reducer2
        * reducer3
              .
              .
              .

    - store
                /**
        * HERE we can create a store and add the reducers to the stores
        * 1 argument is reducers 
        * 2 argument is empty state
        * 3 argument is 
        */
        `export const store = createStore( reducers,{},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );`

## How can access the Store 
    provide the store to the index.js e.g., 
        ``ReactDom.render( 
            <Provider store={store} >
                <App />
            </Provider>


