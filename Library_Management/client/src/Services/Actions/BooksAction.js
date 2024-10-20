import axios from "axios";
import generateUniqueId from "generate-unique-id";
export const SingleRecord = (data) => {
  return {
    type: "SingleRecord",
    payload: data,
  };
};
export const UpdateRecord = (data) => {
  return {
    type: "UpdateRecord",
    payload: data,
  };
};
export const GetData = (data) => {
  return {
    type: "GetData",
    payload: data,
  };
};
export const AddDataPostAsync = (data) => {
  return (dispatch) => {
    data.id = generateUniqueId({
      length: 4,
      useLetters: false,
    });

    axios
      .post("http://localhost:4001/Books", data)
      .then((res) => {
        console.log("res", res);

        dispatch(GetDataAsync(res.data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const GetDataAsync = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:4001/Books")
      .then((res) => {
        console.log("res", res);

        dispatch(GetData(res.data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const singledataAsync = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:4001/Books${id}`)
      .then((res) => {
        console.log("res", res);
        dispatch(SingleRecord(res.data));
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};

export const UpdateRecordAsync = (data) => {
  return (dispatch) => {
    axios
      .put(`http://localhost:4001/Books/${data.id}`, data)
      .then((res) => {
        console.log(res);
        dispatch(GetDataAsync());
      })
      .catch((err) => {
        console.log("Error updating record:", err);
      });
  };
};

export const DeleteAsync = (id) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:4001/Books/${id}`)
      .then((res) => {
        // console.log("res", res.data);
        dispatch(GetDataAsync());
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
};
