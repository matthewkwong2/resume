import { useMemo } from "react";

const useSx = props => useMemo(() => ({
  text: {
    fontFamily: 'Azonix'
  }
}), []);

export default useSx;