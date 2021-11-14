import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { InitalizeFirebaseAuth } from "../config/Firebase";
import swal from "sweetalert";
import axios from "axios";
import { domain } from "./useDomain";
InitalizeFirebaseAuth();
const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  const registerUser = (email, password, username, history) => {
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError("");
        const newUser = { email: email, displayName: username };
        setUser(newUser);

        //save user to backend database
        saveUser(email, username);
        //update  username to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: username,
        })
          .then((result) => {})
          .catch((error) => console.log(error.message));

        swal("Success!!", "Your Registration is successfull!!", "success");

        history.replace("/");
      })
      .catch((error) => swal("Error!", error.message, "error"))
      .finally(() => setIsloading(false));
  };

  const saveUser = (email, username) => {
    const user = { email, username };
    axios.post(`${domain}/users`, user).then((result) => {});
  };

  const loginUser = (email, password, history, location) => {
    setIsloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const destination = location?.state?.from?.pathname || "/dashboard";
        history.replace(destination);
        console.log(result);
        swal("Success!!", "Your have successfully logged In!!", "success");
      })
      .catch((error) => {
        swal("Fail!", error.message, "Error");
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  const logOut = (history) => {
    setIsloading(true);
    signOut(auth)
      .then(() => {
        //signout successsfull
        history.replace("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsloading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setIsloading(false);
    });
    return () => unsubscribe;
  }, []);

  // check is logged in user admin or not
  useEffect(() => {
    axios
      .get(`${domain}/users/${user?.email}`)
      .then((res) => setAdmin(res.data?.admin));
  }, [user]);

  console.log(admin);
  return {
    user,
    registerUser,
    logOut,
    isLoading,
    error,
    setError,
    loginUser,
    admin,
  };
};

export default useFirebase;
