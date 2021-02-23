import { Email, Location, Mobile } from 'components/icons';

import { Box } from '@material-ui/core';
import PersonalInfoItem from './PersonalInfoItem';
import constants from 'constants/app';
import data from 'constants/data';
import useSx from './usePersonalInfoSx';

const PersonalInfo = () => {
  const sx = useSx();
  return (
    <Box sx={sx.root}>
      <PersonalInfoItem
        Icon={Mobile}
        title={constants.callMe}
        value={data.contact.phone}
      />
      <PersonalInfoItem
        Icon={Email}
        title={constants.emailMe}
        value={data.contact.email}
      />
      <PersonalInfoItem
        Icon={Location}
        title={constants.findMe}
        value={data.contact.address}
      />
    </Box>
  );
};

export default PersonalInfo;