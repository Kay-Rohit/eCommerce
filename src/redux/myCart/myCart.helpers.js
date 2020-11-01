import {firestore, auth} from '../../firebase/utils';

export const handleAddMyCart = (product) => {
    const {Price, createdDate, documentID, name, thumb} = product;
    const userID = auth.currentUser.uid;
    return new Promise((resolve, reject) => {
        firestore
            .collection('users').doc(`${userID}`).collection('cart')
            .doc(name)
            .set({
                Price,
                createdDate,
                documentID,
                name,
                thumb
            })
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err);
            })
    });
}

export const handleFetchCartItems = () => {
    const userID = auth.currentUser.uid;
    return new Promise((resolve, reject) => {
        firestore
            .collection('users').doc(`${userID}`).collection('cart')
            .get()
            .then(snapshot => {
                const cartItemsArray = snapshot.docs.map(doc => {
                    return {
                        ...doc.data()
                    }
                });
                resolve(cartItemsArray);
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const handleDeleteCartItem = name => {
    const userID = auth.currentUser.uid;
    return new Promise((resolve, reject) => {
        firestore
            .collection('users').doc(`${userID}`).collection('cart')
            .doc(name)
            .delete()
            .then(() => {
                resolve();
            })
            .catch(err => {
                reject(err);
            })
    });
}