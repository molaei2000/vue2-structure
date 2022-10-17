module.exports = {
  key: "authentication",

  authentication: {
    layout: {
      auth_layout: {
        title: "APP MAKER",
      },
    },
    components: {
      auth: {
        title: "Login",
        buttons: {
          submit_text: "Login",
          forgotten_password: "Forget Password",
        },
        copy_right: "© 2022 Appmaker – All rights reserved",
      },
      forget_password: {
        reset_password: "Reset Password",
        info: "If you have forgotten your password, you can reset it here",
        reset: "Send Link",
        success: "Reset link sent to your email.",
        toLogin: "Back to login",
        reset_success: "Your password successfully changed",
        change_password: "Change your password",
        change_password_btn: "Change Password",
      },
      login_footer: {
        copy_right: "Copyright &copy; 2021",
        company_name: "APP MAKER",
        developed_by: "Developed by Sepantech AB",
      },
    },
    router_title: {
      login: "Login",
      forgot_password: "Forgot Password",
      reset_password: "Reset Password",
    },
    views: {},
    route_titles: {
      login: "Login",
      forgot_password: "Forgot Password",
      reset_password: "Reset Password",
    },
  },
  attribute: {
    email: "Email",
    username: "Username",
    password: "Password",
    null: "",
    confirm: "Confirm password",
  },
  placeholder: {
    email: "email",
    password: "Password",
    null: "",
    default: "Type something...",
    confirm: "Confirm password",
  },
};
