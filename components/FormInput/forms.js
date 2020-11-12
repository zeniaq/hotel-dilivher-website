const date = new Date();
const dateStart = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
const dateEnd = `${date.getFullYear() + 1}-${date.getMonth() + 1}-${date.getDate()}`;
export const dataForms = [
    {
        titleText: "Name",
        typeInput: "text",
        nameField: "name",
    },
    {
        titleText: "Email",
        typeInput: "email",
        nameField: "email",
    },
    {
        titleText: "Message",
        nameField: "message",
    },
];
export default dataForms;

export const dataSelect = [
    {
        typeInput: "select",
        titleText: "Tipo Habitacion",
        nameField: "select",
        typeForm: "app",
    },
    {
        typeInput: "number",
        titleText: "No. Personas",
        min: "1",
        max: "4",
        defaultValue: "1",
        typeForm: "app",
    },
    {
        typeInput: "date",
        titleText: "Fecha Disponible",
        defaultValue: dateStart,
        min: dateStart,
        max: dateEnd,
        typeForm: "app",
    },
];

export const SignInForms = [
    {
        titleText: "Usuario",
        typeInput: "text",
        nameField: "user",
    },
    {
        titleText: "Nombre Completo",
        typeInput: "text",
        nameField: "fullname",
    },
    {
        titleText: "Email",
        typeInput: "email",
        nameField: "email",
    },
    {
        titleText: "Contraseña",
        typeInput: "password",
        nameField: "password",
    },
];

export const SignUpForms = [
    {
        titleText: "Nombre",
        typeInput: "text",
        nameField: "name",
    },
    {
        titleText: "Apellidos",
        typeInput: "text",
        nameField: "lastname",
    },
    {
        titleText: "Usuario",
        typeInput: "text",
        nameField: "user",
    },
    {
        titleText: "Email",
        typeInput: "email",
        nameField: "email",
    },
    {
        titleText: "Telefono fijo",
        typeInput: "tel",
        nameField: "landline",
    },
    {
        titleText: "Telefono movil",
        typeInput: "tel",
        nameField: "mobilephone",
    },
    {
        titleText: "Contraseña",
        typeInput: "password",
        nameField: "password",
    },
    {
        titleText: "Confirmar Contraseña",
        typeInput: "password",
        nameField: "confirmpassword",
    },
];

export const RegisterUserForms = [
    {
        titleText: "Usuario",
        typeInput: "text",
        nameField: "user",
    },
    {
        titleText: "Nombre Completo",
        typeInput: "text",
        nameField: "fullname",
    },
    {
        titleText: "Email",
        typeInput: "email",
        nameField: "email",
    },
    {
        titleText: "Contraseña",
        typeInput: "password",
        nameField: "password",
    },
    {
        titleText: "Administrador",
        typeInput: "radio",
        nameField: "radio_administrador",
    },
    {
        titleText: "Empleado",
        typeInput: "radio",
        nameField: "radio_empleado",
    },
];
