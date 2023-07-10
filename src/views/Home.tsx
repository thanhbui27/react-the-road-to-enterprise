import Ingredients from "@/components/components/ingredients/Ingredients";
import IngredientsInfoHelper from "@/components/components/ingredients/IngredientsInfoHelper";

const Home = () => {
  return (
    <div>
      <h4>Home</h4>
      <Ingredients ingredientsInfoHelper={<IngredientsInfoHelper />} />
    </div>
  );
};
export default Home;
