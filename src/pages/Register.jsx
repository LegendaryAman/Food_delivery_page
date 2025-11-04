import { Link } from 'react-router-dom'
function Register() {
    return(
        <div className="auth_container">
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="conform Password" />
                <button>Create Account</button>
                <h6>Alreay have an account <Link to="/signin">SignIn</Link></h6>
            </form>
        </div>
    )
}
export default Register;