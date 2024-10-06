import * as Yup from "yup";

const loginSchemaValidation = Yup.object().shape({
  email: Yup.string()
    .email("L'email doit être valide")
    .max(100)
    .required("L'email est obligatoire"),
  password: Yup.string().max(100).required("Mot de passe obligatoire"),
});

const registerSchemaValidation = Yup.object().shape({
  email: Yup.string()
    .email("L'email doit être valide")
    .max(100)
    .required("L'email est obligatoire"),
  name: Yup.string().max(25).required("Le nom est obligatoire"),
  prenom: Yup.string().max(25).required("Le prénom est obligatoire"),
  phone: Yup.string().max(10).required("Le téléphone est obligatoire"),
  password: Yup.string()
    .required("Le mot de passe est obligatoire")
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .matches(/(?=.*[0-9])/, "Le mot de passe doit contenir un chiffre")
    .matches(
      /(?=.*[a-z])/,
      "Le mot de passe doit contenir une lettre minuscule"
    )
    .matches(
      /(?=.*[A-Z])/,
      "Le mot de passe doit contenir une lettre majuscule"
    )
    .matches(
      /(?=.*[!@#$%^&*])/,
      "Le mot de passe doit contenir un caractère spécial"
    )
    .notOneOf(
      [Yup.ref("currentPassword")],
      "Le nouveau mot de passe doit être différent de l'ancien"
    ),
  confirmPassword: Yup.string()
    .required("Veuillez confirmer votre mot de passe")
    .oneOf([Yup.ref("password"), ""], "Les mots de passe doivent correspondre"),
});

export { loginSchemaValidation, registerSchemaValidation };
