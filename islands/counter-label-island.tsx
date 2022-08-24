/** @jsx h */
import { h } from 'preact'
import Label from '../components/label.tsx';
import StoreProvider from '../store/provider.tsx';


const CounterLabelIsland = () => (
  <StoreProvider>
    <Label />
  </StoreProvider>
)

export default CounterLabelIsland;