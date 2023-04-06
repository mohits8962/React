import './App.css';
import { ErrorBoundary } from 'react-error-boundary'
// import Components from './Components/01_Component/00_Component';
// import Jsx from './Components/02_Jsx/Jsx';
// import Props from './Components/03_Props/00_Props';
// import States from './Components/04_States/00_States';
// import EventHandling from "./Components/05_EventHandling/00_EventHandling"
// import MethodAsProps from './Components/06_MethodAsProps/00_MethodAsProps';
// import ConditionalRendering from './Components/07_ConditionalRendering/ConditionalRendering';
// import ListRendering from './Components/08_ListRendering/ListRendering';
// import StylingAndCssBasics from './Components/09_StylingAndCssBasics/00_StylingAndCssBasics';
// import FormHanlding from './Components/10_FormHandling/FormHanlding';
// import LifeCycleMethods from './Components/11_LifeCycleMethods/00_LifeCycleMethods'
// import Fragments from './Components/12_Fragments/Fragments';
// import PureCompAll from "./Components/13_PureComponents/00_PureCompAll"
// import Ref from "./Components/14_Refs/Ref"
// import ParentForwardRefInput from './Components/15_ForwardRef/ParentForwardRefInput';
// import PortalDemo from './Components/16_Portals/PortalDemo';
// import ErrorBound from './Components/17_ErrorBoundary/ErrorBound';
// import HigherOrderComp from './Components/18_HigherOrderComponents/00_HigherOrderComp';
// import RenderProps from './Components/19_RenderProps/00_RenderProps';
// import Context from './Components/20_Context/00_Context';
import HTTPAndReact from './Components/21_HTTPAndReact/00_HTTPAndReact';


function ErrorHandler({ error }) {
  return (
    <div role="alert">
      <p>An error occurred:</p>
      <pre>{error.message}</pre>
    </div>
  )
}


function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorHandler}>
      <div>
        {/* <Components/> */}
        {/* <Jsx/> */}
        {/* <Props/> */}
        {/* <States/> */}
        {/* <EventHandling/> */}
        {/* <MethodAsProps/> */}
        {/* <ConditionalRendering/> */}
        {/* <ListRendering/> */}
        {/* <StylingAndCssBasics/> */}
        {/* <FormHanlding/> */}
        {/* <LifeCycleMethods/> */}
        {/* <Fragments/> */}
        {/* <PureCompAll/> */}
        {/* <Ref/> */}
        {/* <ParentForwardRefInput/> */}
        {/* <PortalDemo/> */}
        {/* <ErrorBound /> */}
        {/* <HigherOrderComp /> */}
        {/* <RenderProps/> */}
        {/* <Context/> */}
        <HTTPAndReact/>
      </div>
    </ErrorBoundary>
  );
}

export default App;
