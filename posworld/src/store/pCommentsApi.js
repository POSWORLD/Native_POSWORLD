import { customAxios } from "../http/CustomAxios";
export const postPCommentApi = async (pComment) => {
  try {
    console.log("pComment", pComment);
    const response = await customAxios("pComment/", "post", pComment);
    console.log("해?");
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};
