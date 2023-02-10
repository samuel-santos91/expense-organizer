import { useState } from "react";
import EditContext from "./edit-context";
import React from "react";

const EditProvider = ({ children }) => {
  const [expand, setExpand] = useState(false);
  const [editItem, setEditItem] = useState("");
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [removeHighlight, setRemoveHighlight] = useState(false);
  const [deleteEdit, setDeleteEdit] = useState("");
  const [removeEdited, setRemoveEdited] = useState(false);

  return (
    <EditContext.Provider
      value={{
        expand,
        setExpand,
        editItem,
        setEditItem,
        text,
        setText,
        amount,
        setAmount,
        date,
        setDate,
        removeHighlight,
        setRemoveHighlight,
        deleteEdit,
        setDeleteEdit,
        removeEdited,
        setRemoveEdited,
      }}
    >
      {children}
    </EditContext.Provider>
  );
};

export default EditProvider;
