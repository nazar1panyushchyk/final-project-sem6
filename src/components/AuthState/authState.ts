export type User = {
    name: string;
    email: string;
    password: string;
};

export type AuthState = {
  users: User[];
  currentUser: User | null;
  error: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
};

export type LoginPayload = {
  email: string;
  password: string;
}