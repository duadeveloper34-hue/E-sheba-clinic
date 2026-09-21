import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProtectedRoute({ children }) {
    const [loading, setLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await axios.get(
                    "https://backendworking-production.up.railway.app/api/v1/auth/getme",
                    { withCredentials: true }
                );
                if (res.data.success) {
                    setIsAuth(true);
                }
            } catch (error) {
                console.log("Auth check error:", error);
                setIsAuth(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return isAuth ? children : <Navigate to="/login" />;
}