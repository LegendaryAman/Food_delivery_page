import { Link } from 'react-router-dom'
function SignIn(){
    return(
        <div className="auth_container">
            <form>
                <input type="email" placeholder="Email"/>
                <input type="password" name="password" id="pass" />
                <Link to='/'>Singin</Link>
            </form>
        </div>
    )
}
export default SignIn;