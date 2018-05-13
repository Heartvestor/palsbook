import database from '../firebase/firebaseConfig';

// add pal action

export const addPal = (pal) => ({
    type: 'ADD_PAL',
    pal
});

export const startAddPal = (palData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            firstName = '',
            lastName = '',
            pseudo = '',
            gender = '',
            birthday = '',
            knownSince = 0,
            likes = '',
            dislikes = '',
            description = '',
            palInput = '',
            yourInput = '',
            vision = '',
            pic = 'pic',
            contacts = '',
            rating = 0,
            createdAt = 0
        } = palData;

        const pal = { firstName, lastName, pseudo, gender, birthday, knownSince, likes, dislikes, 
        description, palInput, yourInput, vision, pic, contacts, rating, createdAt };
        
        return database.ref(`users/${uid}/pals`).push(pal).then((ref) => {
            dispatch(addPal({
                id: ref.key,
                ...pal
            }));
        })
        .catch((e) => console.log(e));
    };
};


// edit pal action

export const editPal = (id, updates) => ({
    type: 'EDIT_PAL',
    id,
    updates
});

export const startEditPal = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/pals/${id}`).update(updates).then(() => {
            dispatch(editPal(id, updates));
        });
    };
};


// remove pal action

export const removePal = ({ id } = {}) => ({
    type: 'REMOVE_PAL',
    id
});

export const startRemovePal = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/pals/${id}`).remove().then(() => {
            dispatch(removePal({ id }))
        });
    };
}; 


// get pals

export const setPals = (pals) => ({
    type: 'SET_PALS',
    pals
  });
  
  export const startSetPals = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/pals`).once('value').then((snapshot) => {
            const pals = [];

            snapshot.forEach((childSnapshot) => {
                pals.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
                });
            });

            dispatch(setPals(pals));
        });
    };
  };