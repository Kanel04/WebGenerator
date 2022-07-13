import axios from "axios";
import React, { useState } from "react";
import { Button, Input, LinkButton } from "../../components/common/Buttons";
import { BASE_URL } from "../../constant/url";
import { motion } from "framer-motion";

const PasswordForgetPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        `${BASE_URL}/api/v1/auth/forgotpassword`,
        { email },
        config
      );

      setSuccess(data.data);
      console.log(data.data);
    } catch (error) {
      setError(error);
      //setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className=" bg-gray-300 w-full h-screen top-0 left-0">
        <form onSubmit={forgotPasswordHandler}>
          <div className=" shadow-lg max-w-lg mx-auto  w-5/6 h-screen   bg-slate-900 flex flex-col items-center justify-center ">
            <div className="mb-16 flex flex-col items-center justify-center">
              <motion.h1
                className="text-white font-sans text-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.5 }}
              >
                Mot de passe Oublier
              </motion.h1>
              <motion.h2
                className="text-white font-sans text-2xl mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1.5 }}
              >
                Entrer Votre Email
              </motion.h2>
              <motion.h1
                className="text-white font-sans text-xl mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 1.5 }}
              >
                Pour trouver Votre Compte
              </motion.h1>
              {error && (
                <span className="text-white  bg-red-700 h-12 rounded-xl w-96 mt-5 px-2">
                  Ce compte n'existe pas
                </span>
              )}
              {success && (
                <span className="text-white  bg-green-700 h-12 rounded-xl w-96 mt-5 px-2">
                  Verifier votre Email
                </span>
              )}
            </div>

            <Input
              type="email"
              required
              id="email"
              placeholder="Votre Adresse Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <motion.div whileHover={{ scale: 1.1 }}>
              <LinkButton page="/login">
                Cliquez ici si Vous voulez retourner.
              </LinkButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button type="submit">Envoyer l' Email</Button>
            </motion.div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default PasswordForgetPage;
