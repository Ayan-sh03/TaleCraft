import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateOwnTale = () => {
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  return (
    <div className="own-tale">
      <h1>Have a Tale of Your Own</h1>
      <p>
        Unleash your inner storyteller and share your tales with the world! Join
        the Tale Craft community and showcase your own captivating stories on
        our website. Inspire, entertain, and make your voice heard. Start
        sharing your stories today!
      </p>
      <div class="join">
        <button
          class="btn-join btn"
          onClick={() => {
            setSignUp(!signUp);
            setLogin(false);
          }}
        >
          <Link to="/signup">Join TaleCraft</Link>
        </button>
        <button class="btn-login btn">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default CreateOwnTale;
