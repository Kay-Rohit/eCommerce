
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

export const handleRemoveCartItem = ({
    prevCartItems,
    cartItemToRemove
}) => {
    return prevCartItems.filter(item => item.documentID !== cartItemToRemove.documentID);
};

export const handleReduceCartItem = ({
    prevCartItems,
    cartItemToReduce
}) => {
    const existingCartItem = prevCartItems.find(cartItem => cartItem.documentID === cartItemToReduce.documentID);
    if(existingCartItem.quantity === 1) {
        return prevCartItems.filter(
            cartItem => cartItem.documentID !== existingCartItem.documentID
        );
    }

    return prevCartItems.map(cartItem => cartItem.documentID === existingCartItem.documentID ? 
        {
        ...cartItem,
        quantity: cartItem.quantity - 1
        }
        : cartItem )
};