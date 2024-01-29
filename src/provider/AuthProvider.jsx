import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const emailRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(true);
            setUser(currentUser);
            //JWT Adding
            if (currentUser) {
                fetch(`http://localhost:5000/jwt/${currentUser.email}`)
                .then(res => res.json())
                .then(data => {
                    const token = data.token;
                    console.log(token);
                    localStorage.setItem('tastyFood-user-token', token);
                    setLoading(false);
                })
                .catch(error => {
                    console.log(error);
                })
            }
            else {
                setLoading(false);
            }
            // User Creation
            if (currentUser?.displayName) {
                const user = {
                    name: currentUser.displayName,
                    email: currentUser.email,
                    image: currentUser.photoURL,
                    role: "user"
                }
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(error => {
                        console.log(error);
                    })
            }
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        logout,
        emailLogin,
        googleLogin,
        emailRegister,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;