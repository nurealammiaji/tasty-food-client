import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useCart = () => {

    const { user } = useContext(AuthContext);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user, user?.email, localStorage],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('tastyFood-user-token')}`
                }
            })
            return res.json()
        },
    })
    return [cart, refetch];
};

export default useCart;