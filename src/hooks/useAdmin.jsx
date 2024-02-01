import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {

    const { user, loading } = useContext(AuthContext);

    const { data: admin = false, isLoading: adminLoading } = useQuery({
        queryKey: ['users', 'admin', user, user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("tastyFood-user-token")}`
                }
            });
            return res.json();
        },
    })
    return [admin, adminLoading];
};

export default useAdmin;