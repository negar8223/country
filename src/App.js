import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { client } from './components/Client';
import Countries from './components/Countries';
import { Country } from './components/Country';

function App() {
  return (
    <ApolloProvider client={client}>
       <BrowserRouter>
        <Routes>
          
        <Route path="/" element={<Countries />}></Route>
        <Route path="/country/:code" element={<Country />}></Route>
      </Routes>
      </BrowserRouter>
   </ApolloProvider>
  );
}

export default App;
