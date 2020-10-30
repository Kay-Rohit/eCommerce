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