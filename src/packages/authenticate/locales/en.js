module.exports = {
  key: "authentication",

  authentication: {
    components: {
      auth: {
        title: "login",
        buttons: {
          submit: "Submit",
        },
      },
      register: {
        title: "Register",
        buttons: {
          submit: "Submit",
        },
      }
    },
    router_title: {
      login: "Login",
      register: "Register",
      forget_password: "Forget Password",
    },
  },
  attribute: {
    userName: "Username",
    password: "Password",
    fullName: "Full name",
    nickName: "Nick name",
    permissions: "Permissions",
    confirm_password: "Confirm Password",
  },
  placeholder: {},
};
