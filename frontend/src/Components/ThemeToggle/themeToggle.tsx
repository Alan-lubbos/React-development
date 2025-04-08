import { useDispatch, useSelector } from 'react-redux';
import { Switch, FormControlLabel } from '@mui/material';
import { RootState } from '../../State/Store/store';
import { toggleTheme } from '../../State/reducers/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <FormControlLabel
      control={
        <Switch
          checked={mode === 'dark'}
          onChange={() => dispatch(toggleTheme())}
        />
      }
      label={mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
    />
  );
};

export default ThemeToggle;
