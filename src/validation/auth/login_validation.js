import { create, enforce, only, test } from "vest";

const loginSuite = create((data = {}, fieldName) => {

    only(fieldName);

    test("email", "email is required", () => {
        enforce(data.email).isNotBlank();
    });

    test("email", "email must valid", () => {
        enforce(data.email).matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    });

    test("password", "password is required", () => {
        enforce(data.password).isNotBlank();
    });

});

export default loginSuite;