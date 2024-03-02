import { useState } from "react";

interface RatingProps {
    initialRating?: number;
    onRatingChange?: (newRating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ initialRating, onRatingChange }) => {
    const [rating, setRating] = useState<number>(initialRating || 4);

    const handleStarClick = (starValue: number) => {
        setRating(starValue);
        if (onRatingChange) {
            onRatingChange(starValue);
        }
    };

    return (
        <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    onClick={() => handleStarClick(star)}
                    className={`text-2xl cursor-pointer focus:outline-none ${star <= rating ? 'text-yellow-500' : 'text-gray-300'
                        }`}
                >
                    ★
                </button>
            ))}
        </div>
    );
};

export default Rating;
