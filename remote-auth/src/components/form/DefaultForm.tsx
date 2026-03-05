import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, Button, Container, Paper, Typography } from "@mui/material";
import { LoginFormData, loginSchema } from "../../schema/loginSchema";
import {useLoginUserMutation} from "../../store/query/userApi";

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      login: "",
      password: "",
    },
  });

  const [loginUser, { isLoading, isError, error, isSuccess, data }] = useLoginUserMutation();
  async function onSubmit(data: LoginFormData) {
  
    try {
      // Используем unwrap() для обработки ошибки
      const result = await loginUser(data).unwrap();
      console.log('Успех:', result);
    } catch (err: any) {
      // Ошибка обработана, React не будет показывать overlay
      console.log('Обработанная ошибка:', err);
    
    }
  }


  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
        <Typography variant="h5" gutterBottom>
          Простая форма
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="login"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Логин"
                fullWidth
                margin="normal"
                error={!!errors.login}
                helperText={error?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Пароль"
                fullWidth
                type="password"
                error={!!errors.password}
                margin="normal"
                helperText={error?.message}
              />
            )}
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Отправить
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
