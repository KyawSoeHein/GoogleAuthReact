import { styled } from "@mui/system";

const StyledInputElement = styled("input")`
  width: 300px;
  font-size: 1rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  font-color: green;
  line-height: 1.4375em;
  border: 1px solid green;
  border-radius: 16px;
  padding: 8px 10px;
  color: #20262d;
  transition: width 300ms ease;
  &:focus {
    outline: none;
    width: 350px;
    transition: width 200ms ease-out;
  }
`;

export default StyledInputElement;
