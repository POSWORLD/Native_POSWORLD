import { customAxios } from "../http/CustomAxios";

export const postPCommentApi = async (pComment) => {
  try {
    const response = await customAxios("pComment/", "post", pComment);
    return response;
  } catch (error) {
    throw error;
  }
};

export const selectPCommentApi = async (pid) => {
  try {
    const response = await customAxios(`pComment/${Number(pid)}`, "get");
    return response;
  } catch (error) {
    throw error;
  }
};

export const deletePCommentApi = async (action) => {
  try {
    const id = action.id;
    const userid = action.userid;
    const comments = action.comments;

    const response = await customAxios(
      `pComment/${Number(id)}/${Number(userid)}`,
      "delete"
    );

    if (response == 1) {
      const delComment = await comments.filter((comment) => comment.id !== id);
      return delComment;
    }
    return comments;
  } catch (error) {
    throw error;
  }
};
