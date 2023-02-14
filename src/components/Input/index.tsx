import { Container, InputField } from './styles';

interface InputContainerProps {
  children: React.ReactNode;
}

export function Root({ children }: InputContainerProps) {
  return <Container>{children}</Container>;
}

type FormFieldProps = React.InputHTMLAttributes<HTMLInputElement>;

export function FormField({ ...rest }: FormFieldProps) {
  return <InputField {...rest} />;
}
