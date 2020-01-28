import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import Spinner from "../../components/Spinner/Spinner";
import { Card, Button, Input } from "antd";
import { Link } from "react-router-dom";
import GET_POST from "./query"
const Home = () => {
  const [state, setstate] = useState({ Title: null, Description: null });
  const { data, error, loading } = useQuery(GET_POST);
  // []=useMutation()
  if (loading) return <Spinner />;
  if (error) {
    console.log(error);
  }
  console.log(data);

  return (
    <div>
      <p className="text-center p-3 bg-success my-2 mx-5 rounded text-white">
        Posts
      </p>
      <Card className="mx-5">
        <div>
          <p className="mb-0">Title: </p>
          <p>
            <Input
              value={state.Title}
              onChange={e => setstate({ Title: e.target.value })}
            />
          </p>
        </div>
        <div>
          <p className="mb-0">Description: </p>
          <p>
            <Input
              value={state.Description}
              onChange={e => setstate({ Description: e.target.value })}
            />
          </p>
        </div>
        <Button type="primary" className="d-block mx-auto">
          Send Post
        </Button>
      </Card>
      {data.posts.map(item => (
        <Card key={item.id} className="my-2 mx-5">
          <div className="d-flex">
            <p className="h6 text-muted">Title: </p>
            <p className="h6">{item.title}</p>
          </div>
          <div className="d-flex">
            <p className="h6 text-muted">Description: </p>
            <p>{item.body}</p>
          </div>
          <div className="d-flex">
            <p className="h6 text-muted">Author: </p>
            <Link to={`user/${item.author.id}`}>{item.author.name}</Link>
          </div>
          <div className="mx-auto">
            <Button type="primary">
              <Link to={`post/${item.id}`}>Details</Link>
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Home;
