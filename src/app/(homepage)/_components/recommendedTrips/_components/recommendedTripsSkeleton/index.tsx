import cn from "classnames";
import styles from "./styles.module.scss";
import recommendedTripStyles from "../recommendedTrip/styles.module.scss";

interface Props {
  amount: number;
}

export const RecommendedTripsSkeleton: React.FC<Props> = ({ amount }) => {
  return Array.from({ length: amount }).map((_, index) => (
    <div
      className={cn(
        recommendedTripStyles.recommendedTrip,
        index === 0 && recommendedTripStyles.featured
      )}
      key={index}
    >
      <h4 className="title-2">{index + 1}</h4>
      <div className={recommendedTripStyles.recommendedTripField}>
        <p className="text-1 neutral-25">Amount</p>
        <div className={cn(styles.skeleton, styles.skeletonBox)}></div>
      </div>
      <div className={recommendedTripStyles.recommendedTripField}>
        <p className="text-1 neutral-25">Buy In</p>
        <div className={cn(styles.skeleton, styles.skeletonBox)}></div>
      </div>
      <div className={recommendedTripStyles.recommendedTripField}>
        <p className="text-1 neutral-25">Refine In</p>
        <div className={cn(styles.skeleton, styles.skeletonBox)}></div>
      </div>
      <div className={recommendedTripStyles.recommendedTripField}>
        <p className="text-1 neutral-25">Sell In</p>
        <div className={cn(styles.skeleton, styles.skeletonBox)}></div>
      </div>
      <div
        className={cn(
          recommendedTripStyles.recommendedTripField,
          recommendedTripStyles.recommendedTripFieldBalance
        )}
      >
        <div className={recommendedTripStyles.recommendedTripFieldBalanceField}>
          <span className="text-1 neutral-25">Cost:</span>
          <div
            className={cn(
              styles.skeleton,
              styles.skeletonInlineBox,
              styles.accent1
            )}
          ></div>
        </div>
        <div className={recommendedTripStyles.recommendedTripFieldBalanceField}>
          <span className="text-1 neutral-25">Profit:</span>
          <div
            className={cn(
              styles.skeleton,
              styles.skeletonInlineBox,
              styles.accent2
            )}
          ></div>
        </div>
      </div>
    </div>
  ));
};
