import { create, enforce, only, skipWhen, test } from "vest";
import { timeout } from "../../utils/utils";

async function valildateProjectName(name) {
    console.log("Call Api Here");
    await timeout(3000);
    console.log("Response Api Here");
    console.log(name.includes("123"));
    return name.includes("123");
}

const signupSuite = create((data = {}, fieldName) => {


    only(fieldName);

    test("email", "email is required", () => {
        enforce(data.email).isNotBlank();
    });

    test("email", "email must valid", () => {
        enforce(data.email).matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    });

    test("project_name", "project name is required", () => {
        enforce(data.project_name).isNotBlank();
    });

    skipWhen(signupSuite.get().hasErrors("project_name"), () => {
        test("project_name", "sorry this project name has taken", () => {
            return valildateProjectName(data.project_name);
        });
    });

    test("password", "password is required", () => {
        enforce(data.password).isNotBlank();
    });

});

export default signupSuite;