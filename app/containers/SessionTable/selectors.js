import { createSelector } from 'reselect';

const selectSessionTable = (state) => state.get('sessionTable');

const selectGlobal = (state) => state.get('global');

const makeSelectSessionList = () => createSelector(
    [selectSessionTable, selectGlobal],
    (stateSessionTable, stateGlobal) => {
        const filterInput = stateSessionTable.get('filterInput')
        return stateGlobal
        .get('dataList')
        .get('content')
        .filter(value => {
            console.log(value)

            return value.get('userName').toLocaleLowerCase().indexOf(filterInput.toLocaleLowerCase()) > -1
        })
    }
)

export {
    makeSelectSessionList,
};
