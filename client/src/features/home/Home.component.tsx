import { AdBanner } from "./AdBanner.component";
import { Categories } from "./Categories.component";
import { Products } from "./products.component";

type Props = {};

export const Home = (props: Props) => {
  return (
    <div className="container">
      <AdBanner />
      <Categories />
      <Products
        title="New Arrival"
        subtitle="Unveil the Latest Trends, Shop Our New Arrivals Today!"
      />
    </div>
  );
};
