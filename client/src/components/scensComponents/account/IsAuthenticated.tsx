import { gql, useQuery } from "@apollo/client";
import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Login/LoginUser";

export const IS_LOGGED_IN = gql`
  query {
    me {
      username
      firstName
    }
  }
`;

interface Props {
  children?: React.ReactNode;
}

function IsAuthenticated({ children }: Props) {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p></p>;
  if (!data.me) {
    navigate("/login");
    return null;
  }

  return <>{children}</>;
}

export default IsAuthenticated;