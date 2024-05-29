import React, { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase_config";

function Temp_login() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState(null);

    const register = async (event) => {
        event.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            setUser(userCredential.user);
            console.log(userCredential.user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const login = async (event) => {
        event.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            setUser(userCredential.user);
            console.log(userCredential.user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            console.log("User signed out");
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <div>
                <div>
                    <form>
                        <div>
                            <h2 className="text-center">Register</h2>
                            <input
                                type="text"
                                placeholder="email"
                                value={registerEmail}
                                onChange={(event) => setRegisterEmail(event.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="password"
                                value={registerPassword}
                                onChange={(event) => setRegisterPassword(event.target.value)}
                            />
                            <button onClick={register}>Create User</button>
                        </div>
                        <div>
                            <h2 className="text-center mt-5">Login</h2>
                            <input
                                type="text"
                                placeholder="email"
                                value={loginEmail}
                                onChange={(event) => setLoginEmail(event.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="password"
                                value={loginPassword}
                                onChange={(event) => setLoginPassword(event.target.value)}
                            />
                            <button onClick={login}>Login</button>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h2 className="text-center mt-5">User Logged In:</h2>
                            {user ? (
                                <>
                                    <p>{user.email}</p>
                                    <button onClick={logout}>Sign Out</button>
                                </>
                            ) : (
                                <p>No user logged in</p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Temp_login;
