import CraftItems from "../Arts/CraftItems"
import Categories from "../Categories/Categories"
import Event from "../Event/Event"
import Stats from "../Stats/Stats"
import Slider from "./Slider"

const Home =()=>{
    return(
        <div>
        <Slider></Slider>
        <CraftItems></CraftItems>
        <Stats></Stats>
        <Event></Event>
        <Categories></Categories>
        
        </div>
    )
}

export default Home