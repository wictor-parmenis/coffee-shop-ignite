import React from 'react';
import { ErrorMessageText } from './styles';

type IErrorMessage = React.HTMLAttributes<HTMLParagraphElement>;
const ErrorMessage: React.FC<IErrorMessage> = ({ ...allAtributes }) => (
  <ErrorMessageText {...allAtributes} />
);

export default ErrorMessage;
