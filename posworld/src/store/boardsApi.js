import { customAxios } from "../http/CustomAxios";

export const insertBoard = async (board) => {
  try {
    const response = await customAxios(
      `/board/${board.homeId}/${board.userId}`,
      "post",
      board
    );
    return response;
  } catch (error) {
    throw error;
  }
};
export const getBoardByHomeId = async (homeId) => {
  try {
    const response = await customAxios(`/board/${homeId}`, "get");
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteBoardByNum = async (num, board) => {
  try {
    const boardnum = Number(num);
    const response = await customAxios(`/board/${boardnum}`, "delete");

    if (response.deleted == true) {
      const delBoards = await board.filter((board) => board.num !== num);
      return delBoards;
    }
  } catch (error) {
    throw error;
  }
};
