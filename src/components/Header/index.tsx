import { ClipboardList } from "lucide-react";
import React from "react";
import * as C from "./styles";

export const Header: React.FC = () => {
  return (
    <C.Header>
      <ClipboardList size={30} />
    </C.Header>
  );
};
