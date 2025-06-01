import React from "react";
import clssses from "./Tree.module.css";
import { useParams } from "react-router-dom";
import PreorderTraversal from "./Preorder/PreorderTraversal";
import PostorderTraversal from "./Postorder/PostorderTraversal";
import InorderTraversal from "./Inorder/InorderTraversal";

const Tree = () => {
  const { page } = useParams();
  return (
    <div className={clssses.Big_container}>
      {page == "preordertraversal" && <PreorderTraversal />}
      {page == "postordertraversal" && <PostorderTraversal />}
      {page == "inordertranversal" && <InorderTraversal />}
    </div>
  );
};

export default Tree;