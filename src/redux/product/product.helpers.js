import {firestore} from '../../firebase/utils';

export const handlefetchProducts = () => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('products')
            .get()
            .then(snapshot => {
                const productsArray = snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        documentID: doc.id
                    }
                });
                resolve(productsArray);
            })
            .catch(err => {
                reject(err);
            })
    })
}

export const handlefetchProduct = productID => {
    return new Promise((resolve, reject) => {
        firestore
            .collection('products')
            .doc(productID)
            .get()
            .then(snapshot => {
                if(snapshot.exists) {
                    resolve(
                        snapshot.data()
                    );
                }
            })
            .catch(err => {
                reject(err);
            })
    })
}