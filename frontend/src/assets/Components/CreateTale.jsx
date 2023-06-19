// create Tale
import React from "react";
import Lottie from "lottie-react";
import animation from "../74821-blogging-writing-typing-development-activity.json";

const CreateTale = () => {
  return (
    <div className="tale-page">
      <h1>Create Tale</h1>

      <form className="create-tale">
        <label htmlFor="title">Title</label>
        <input name="title" id="title" />
        <label htmlFor="tale">Tale</label>
        <textarea name="tale" id="tale" />
        <button>Post Tale</button>
      </form>

      {/* <Lottie animationData={animation} /> */}
    </div>
  );
};

export default CreateTale;
