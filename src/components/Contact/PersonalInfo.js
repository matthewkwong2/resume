import { Box } from '@material-ui/core';
import { ReactComponent as Email } from 'assets/icon/mbri-letter.svg';
import PersonalInfoItem from './PersonalInfoItem';
import { ReactComponent as Place } from 'assets/icon/mbri-pin.svg';
import React from 'react';
import { ReactComponent as Smartphone } from 'assets/icon/mbri-mobile2.svg';
import contact from 'constants/contact';
import data from 'constants/data';

const PersonalInfo = () => (
  <Box px={4} py={1} my='auto'>
    <PersonalInfoItem
      Icon={Smartphone}
      title={contact.personalInfoTitle.phone}
      value={data.contact.phone}
    />
    <PersonalInfoItem
      Icon={Email}
      title={contact.personalInfoTitle.email}
      value={data.contact.email}
    />
    <PersonalInfoItem
      Icon={Place}
      title={contact.personalInfoTitle.address}
      value={data.contact.address}
    />
  </Box>
);

export default PersonalInfo;