/** @jsx h */
import { h } from 'preact';
import { Provider } from 'react-redux'
import store from './store.ts'

const StoreProvider = (props: any) => (
    <Provider store={store}>
        {props.chidren}
    </Provider>
)

export default StoreProvider;