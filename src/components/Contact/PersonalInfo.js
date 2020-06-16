import { Email, Location, Mobile } from 'components/icons';

import { Box } from '@material-ui/core';
import PersonalInfoItem from './PersonalInfoItem';
import React from 'react';
import contact from 'constants/contact';
import data from 'constants/data';

const PersonalInfo = () => (
  <Box px={4} py={1} my='auto'>
    <PersonalInfoItem
      Icon={Mobile}
      title={contact.personalInfoTitle.phone}
      value={data.contact.phone}
    />
    <PersonalInfoItem
      Icon={Email}
      title={contact.personalInfoTitle.email}
      value={data.contact.email}
    />
    <PersonalInfoItem
      Icon={Location}
      title={contact.personalInfoTitle.address}
      value={data.contact.address}
    />
  </Box>
);

export default PersonalInfo;