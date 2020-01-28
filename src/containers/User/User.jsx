import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Spinner from "../../components/Spinner/Spinner";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";
import { useApolloClient } from "@apollo/react-hooks";

const User = ({ match }) => {
  console.log(match.params.userId);
  const GET_USER_DETAILS = gql`
    mutation userId($userId: ID!) {
      userId(userId: $userId) {
        id
        name
        username
        email
        phone
        website
        company {
          name
        }
      }
    }
  `;
  //   console.log(getquerybyid);
  // .filter(item => Number(item.id) == Number(match.params.postId));
  const { data, error, loading } = useQuery(GET_USER_DETAILS, {
    variables: { userId: Number(match.params.userId) }
  });

  if (loading) return <Spinner />;
  if (error) {
    console.log(error);
  }




  console.log(data);
  return (
    <div>

        
      <p className="text-center p-3 bg-success my-2 mx-5 rounded text-white">
        Single Post
      </p>
      <Card className="my-2 mx-5">
        <div className="d-flex">
          <p className="h6 text-muted">Title: </p>
          <p className="h6">{data.post.title}</p>
        </div>
        <div className="d-flex">
          <p className="h6 text-muted">Description: </p>
          <p>{data.post.body}</p>
        </div>
        <div className="d-flex">
          <p className="h6 text-muted">Author: </p>
          <Link to={`user/${data.post.author.id}`}>
            {data.post.author.name}
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default User;
