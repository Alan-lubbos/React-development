
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../State/Selectors/loadingSelectors"; 
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./style.css";

const Loading = () => {
  
  const isLoading = useSelector(selectIsLoading);  

  if (!isLoading) return null;  

  return (
    <Box className="loading-container">
      <CircularProgress />
    </Box>
  );
};

export default Loading;
