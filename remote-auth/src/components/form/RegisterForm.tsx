import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Container, Paper, Typography, Box } from "@mui/material";
import { useRegisterUserMutation } from "../../store/query/userApi";
import DefaultInput from "../input/DefaultInput";
import { RegisterFormData, registerSchema } from "../../schema/registerSchema";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      login: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const [loginUser, { isLoading, isError, error, isSuccess, data }] =
    useRegisterUserMutation();

  async function onSubmit(data: RegisterFormData) {
    try {
      const result = await loginUser(data).unwrap();
      console.log("Успех:", result);
      navigate("/");
    } catch (err: any) {
      console.log("Обработанная ошибка:", err);
    }
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mt: 8,
          minHeight: "600px",
          width: "500px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" gutterBottom align="center" sx={{ mt: 5 }}>
          Регистрация
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            mt: 10,
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <DefaultInput
            name="login"
            control={control}
            isError={!!errors.login}
            label="Логин"
            margin="normal"
          />
          <DefaultInput
            name="password"
            control={control}
            isError={!!errors.password}
            label="Пароль"
            type="password"
          />
          <DefaultInput
            name="passwordConfirm"
            control={control}
            isError={!!errors.passwordConfirm}
            label="Повторный пароль"
            type="password"
            sx={{ mt: "8px" }}
          />
          {isLoading && (
            <Typography variant="h5" gutterBottom sx={{ mt: 5 }}>
              ...Загрузка
            </Typography>
          )}

          {isError && (
            <Typography variant="h5" color="red" gutterBottom sx={{ mt: 5 }}>
              {(error as any)?.data?.message ||
                (error as any)?.message ||
                "Ошибка входа"}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: "auto",
              p: 2,
              fontSize: 16,
            }}
          >
            Зарегристрироваться
          </Button>
          <Button
            type="button"
            variant="outlined"
            fullWidth
            sx={{
              mt: "10px",
              p: 1,
              fontSize: 16,
            }}
            onClick={() => navigate("../login")}
          >
            Авторизация
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
