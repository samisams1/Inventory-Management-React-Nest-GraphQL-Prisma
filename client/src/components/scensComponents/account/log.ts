import { useState } from "react"
import { useQuery } from "@apollo/client"
import { useNavigate } from "react-router-dom"
import { ME_QUERY } from "../../../graphql/Profile"

export default function Logout() {
    const navigate = useNavigate();
    const { loading, error, data } = useQuery(ME_QUERY)
    if (loading) return "Loading..."
    if (error) return "sams"
    localStorage.removeItem("token")
    navigate("/login")
}