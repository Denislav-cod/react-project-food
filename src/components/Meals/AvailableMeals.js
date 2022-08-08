import React, { useEffect, useState } from "react";

import classes from "./AvailableMeals.module.css";
// import DUMMY_MEALS from "../../assests/dummy-meals"
import axios from "axios";
import MealItem from "./MealItem"
import Card from "../UI/Card"
import Spinner from "../UI/Spinner";



const AvailableMeals = (props) => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getAvailableItems = async () => {
            setError(null);
            try {
                const response = await axios.get("https://react-foodsite-default-rtdb.europe-west1.firebasedatabase.app/meals.json");
                const data = await response.data;
                const loadedMeals = [];
                for (const key in data) {
                    loadedMeals.push({
                        id: key,
                        name: data[key].name,
                        description: data[key].description,
                        price: data[key].price
                    });
                }

                setMeals(loadedMeals);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
            }
        }
        getAvailableItems();
    }, []);

    if(isLoading || meals.length === 0) {
        return <section className={classes.mealsLoading}>
            <Spinner></Spinner>
            {error && <p>{error}</p>}
        </section>
    }

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {meals.map(meal =>
                        <MealItem
                            id={meal.id}
                            key={meal.id}
                            name={meal.name}
                            description={meal.description}
                            price={meal.price} />
                    )}
                </ul>
            </Card>
        </section>
    );
}

export default AvailableMeals;