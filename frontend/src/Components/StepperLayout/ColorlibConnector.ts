import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

export const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: 'linear-gradient(95deg,#6a11cb 0%,#2575fc 50%,#6a11cb 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: 'linear-gradient(95deg,#6a11cb 0%,#2575fc 50%,#6a11cb 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.mode === 'dark' ? '#444' : '#ccc',
    borderRadius: 1,
  },
}));
