
export const existingItem = ({
    prevCartItems,
    nextCartItem
}) => {
    return prevCartItems.find(
        cartItem => cartItem.documentID === nextCartItem.documentID
    );
};

export const handleAddToCart = ({
    prevCartItems,
    nextCartItem
}) => {

    const count = 1;
    const exist = existingItem({prevCartItems, nextCartItem});

    if (exist) {
        return prevCartItems.map(cartItem => 
            cartItem.documentID == nextCartItem.documentID
                ? {
                    ...cartItem,
                    quantity: cartItem.quantity + count
                } : cartItem
        );
    }

    return [
        ...prevCartItems,
        {
            ...nextCartItem,
            quantity: count
        }
    ];
};