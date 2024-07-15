import {BannerSlider, CategorySlider, Title} from "../../components/common";
import {pattern_one} from "../../utils/images.ts";
import {dishTypeData} from "../../data.ts";
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <main className="home-page custom-min-h pt-[4px]">
            <BannerSlider/>
            <section className='categories' style={{
                background: `url:('${pattern_one}') center-cover no-repeat`
            }}>
                <div className="container">
                    <Title subTitle='Choose a Category' mainTitle='Recipe Categories'/>
                </div>
                <CategorySlider/>
            </section>
            <section className='showcase-recipes'>
                <div className="container">
                    <Title subTitle='Some Recipies' mainTitle='Chicken Recipies'/>
                </div>
            </section>
            <section className='dishes'>
                <div className="container">
                    <Title subTitle='Find Dishes you love' mainTitle='Recipe Dishes'/>
                    <div className="dishes-list">
                        {
                            dishTypeData?.map((dish, index) => (
                                <Link to={`recipies/dish/${dish?.type}`}
                                      key={index}
                                      className='dishes-item'
                                >
                                    <img src={dish.image} alt={dish?.type}/>
                                    <p className='dishes-item-name'>
                                        {dish?.type}    
                                    </p>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomePage;