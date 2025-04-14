import React from 'react';
import { styled } from '@mui/material/styles';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import { StepIconProps } from '@mui/material';

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: ownerState.active ? '#6a11cb' : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.completed && {
    backgroundImage: 'linear-gradient(136deg, #6a11cb 0%, #2575fc 100%)',
  }),
}));

const icons: { [index: string]: React.ReactElement } = {
  1: <SettingsIcon />,
  2: <GroupAddIcon />,
  3: <VideoLabelIcon />,
};

export const ColorlibStepIcon: React.FC<StepIconProps> = (props) => {
  const { active, completed, className, icon } = props;

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {completed ? <Check /> : icons[String(icon)]}
    </ColorlibStepIconRoot>
  );
};
