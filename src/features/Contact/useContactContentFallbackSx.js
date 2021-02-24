import { useMemo } from 'react';

const useSx = props => useMemo(() => ({
  personalInfoContainer: {
    p: 4
  },
  personalInfoItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&:not(:first-of-type):not(:last-of-type)': {
      my: 3
    }
  },
  icon: {
    width: 35,
    height: 35
  },
  personalInfoItemTitle: {
    mt: 2,
    width: 80
  },
  personalInfoItemValue: {
    width: 120
  },
  textField: {
    height: 56
  },
  textArea: {
    height: 240
  },
  submitButton: {
    float: 'right',
    width: 147,
    height: 42,
    mt: 2
  }
}), []);

export default useSx;