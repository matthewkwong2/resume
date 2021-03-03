import { useMemo } from "react";

const useSx = props => useMemo(() => ({
  text: {
    fontFamily: '"Azonix", sans-serif'
  }
}), []);

export default useSx;