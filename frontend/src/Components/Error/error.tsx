import { useSelector } from "react-redux";
import { selectHasRequestError, selectRequestErrorMessage } from "../../State/Selectors/errorSelectors";
import { Box, Typography } from "@mui/material";
import "./style.css";

const Error = ({ requestId }: { requestId: string }) => {
  const hasError = useSelector(selectHasRequestError(requestId));
  const errorMessage = useSelector(selectRequestErrorMessage(requestId));

  if (!hasError || !errorMessage) return null;
  return (
    <Box className="error-container">
      <Typography variant="h6" color="error">
        Error: {errorMessage}
      </Typography>
    </Box>
  );
};

export default Error;
