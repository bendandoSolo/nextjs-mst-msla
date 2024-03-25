import SampleComponent from "../components/SampleComponent";
import EnvVariablesDisplay from '../components/EnvVariablesDisplay';

export default function Home() {
  return (
  <>
  <EnvVariablesDisplay />
  <SampleComponent title="Index Page" linkTo="/other" /> 
  <p>fixed tenant</p>
  </>);
}
