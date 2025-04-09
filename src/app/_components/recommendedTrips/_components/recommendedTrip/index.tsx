import { Trip } from "@/types/trip";
import styles from "./styles.module.scss";
import cn from "classnames";
import { formattedDestination } from "@/utils/formattedDestination";
import { addNumberSeparator } from "@/utils/addNumberSeparator";

interface Props {
  position: number;
  trip: Trip;
}

export const RecommendedTrip: React.FC<Props> = ({ position, trip }) => {
  return (
    <div
      className={cn(styles.recommendedTrip, position === 1 && styles.featured)}
    >
      <h4 className="title-2">{position}</h4>
      <div className={styles.recommendedTripField}>
        <p className="text-1 neutral-25">Amount</p>
        <p className="title-1">{addNumberSeparator(trip.amount)}</p>
      </div>
      <div className={styles.recommendedTripField}>
        <p className="text-1 neutral-25">Buy In</p>
        <p className="title-1">{formattedDestination[trip.buy_in]}</p>
      </div>
      <div className={styles.recommendedTripField}>
        <p className="text-1 neutral-25">Refine In</p>
        <p className="title-1">{formattedDestination[trip.refine_in]}</p>
      </div>
      <div className={styles.recommendedTripField}>
        <p className="text-1 neutral-25">Sell In</p>
        <p className="title-1">{formattedDestination[trip.sell_in]}</p>
      </div>
      <div
        className={cn(
          styles.recommendedTripField,
          styles.recommendedTripFieldBalance
        )}
      >
        <p className={styles.recommendedTripFieldBalanceField}>
          <span className="text-1 neutral-25">Cost:</span>
          <span
            className={cn(
              "text-2 accent-1",
              styles.recommendedTripFieldBalanceValue
            )}
          >
            {addNumberSeparator(trip.cost)}
          </span>
        </p>
        <p className={styles.recommendedTripFieldBalanceField}>
          <span className="text-1 neutral-25">Profit:</span>
          <span
            className={cn(
              "text-2 accent-2",
              styles.recommendedTripFieldBalanceValue
            )}
          >
            {addNumberSeparator(trip.profit)}
          </span>
        </p>
      </div>
    </div>
  );
};
