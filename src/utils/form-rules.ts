export const formRules = {
  required: {
    value: true,
    message: "Field ini Harus diisi",
  },
  email: {
    value: /\S+@\S+\.\S+/,
    message: "Field ini harus berformat email",
  },
};

export function getVariant(dirty: boolean, error: boolean) {
  if (error) {
    return "primary";
  }
  return !dirty ? "default" : "green";
}
