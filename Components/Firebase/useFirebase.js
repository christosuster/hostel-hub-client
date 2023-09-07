import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import swal from "sweetalert";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  getIdToken,
} from "firebase/auth";
import { useRouter } from "next/router";

// initialize firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState();
  const router = useRouter();

  const auth = getAuth();

  // Signup user with Email Password
  const createUser = (email, password, userData) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        fetch("http://localhost:5000/users-data", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              console.log("insertedId: ", data.insertedId);
              return data;
            }
          })
          .then((data) => {
            console.log(data);
            const paymentData = {
              email: email,
              name: userData?.displayName,
              phone: userData?.phone,
              uid: data?.insertedId,
              due: 0,
              rent: 0,
              advance: 0,
              paymentHistory: [],
            };
            fetch("http://localhost:5000/payment", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(paymentData),
            });
          })
          .then((res) => res.json())
          .then((data) => console.log("Payment created", data))
          .catch((error) => console.error(error));
        swal("Create Account Successful!", {
          icon: "success",
        });
        setIsLoading(false);
        // router.replace("/");
      })
      .catch((error) => {
        setAuthError(error.message);
        swal(`${error.message}`, {
          icon: "error",
        });
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // Login user with Email Password
  const loginUser = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        swal("Login Successful!", {
          icon: "success",
        });
        setIsLoading(false);
        router.replace("/dashboard");
      })
      .catch((error) => {
        setAuthError(error.message);
        swal(`${error.message}`, {
          icon: "error",
        });
        console.log(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // user observation
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
      if (user?.email) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });
      } else {
        setUser(null);
        console.log("Please login");
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  useEffect(() => {
    fetch(`http://localhost:5000/users-data/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data))
      .catch((error) => {
        console.log(error.message);
      });
  }, [!userInfo, user?.email, auth, router]);

  // For Logout
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  // console.log(user);
  return {
    user,
    isLoading,
    userInfo,
    authError,
    loginUser,
    logout,
    token,
    createUser,
  };
};

export default useFirebase;
