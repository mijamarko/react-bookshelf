import React from "react"

const LoginForm = ({ setLoggedIn }) => {
  const loginUser = () => {
    setLoggedIn(true)
  }

  return (
    <div className="login-form">
      <form action="">
        <h3>Login</h3>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" className="login-form-input" placeholder="Samo klikni na login" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" className="login-form-input" />

        <input
          type="submit"
          id="login-form-submit"
          value="Log In"
          className="login-form-submit"
          onClick={loginUser}
        />
      </form>
    </div>
  )
}

export default LoginForm
