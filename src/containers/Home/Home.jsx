import React from "react";
import { gql } from "apollo-boost";
import {useQuery} from "@apollo/react-hooks"
import Spinner from "../../components/Spinner/Spinner";
const Home = () => {
  const GET_POST = gql`
    query {
      posts {
        id
        title
        body
      }
    }
  `;
  const {data,error,loading}=useQuery(GET_POST)
if(loading)return <Spinner/>
if(error){ console.log(error)}
console.log(data)
  return <div>
    
  </div>;
};

export default Home;
