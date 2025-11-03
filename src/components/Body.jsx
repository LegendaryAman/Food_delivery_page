import backgroundImage from '../assets/images/fooddeliverydriverimg.png'
function Body() {
    return (
        <div className="content">
        <div className="hero-text">
          <h1>Deliver <span className="content_span">Your Food</span></h1>
          <h1>Easy and Fast</h1>
          <p className="content_alice">Fresh, hot, and at your door in 30 minutes — because hunger shouldn’t wait</p>
          <form>
            <input type="text" placeholder='Enter your delivery' />
            <button type='submit' className='btn_sec'>Search</button>
        </form>
        </div>
       
        <div className="hero_image">
            <img src={backgroundImage} alt="image not found" className="image" />
        </div>
        </div>
    )
}
export default Body;