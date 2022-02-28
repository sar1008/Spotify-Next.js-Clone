import api from "../../../api";

const getNewReleases = (token, country, limit) => async (dispatch) => {
  try {
    const res = await api.get("/browse/new-releases", {
      headers: {
        Authorization: `Bearer ${
          token || window.localStorage.getItem("token")
        }`,
      },
      params: {
        country: country || "EG",
        limit: limit || 5,
      },
    });
    dispatch({
      type: "GET_NEW_RELEASES",
      payload: res.data.albums.items,
    });
  } catch (error) {
    dispatch({
      type: "GET_NEW_RELEASES",
      payload: null,
    });
  }
};

export default getNewReleases;