
export interface IComponent extends React.Component {
  getLayout: (component: React.Component) => React.Component 
}  