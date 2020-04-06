import React, { Component } from 'react'
import DataList from '../dataList'
import { get, map } from 'lodash'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

class ListItem extends Component {
  constructor(props) {
    super(props)
    this.state = { clicked: false }
  }
  // handler(){this.setState({
  //   clicked: !this.state.clicked
  // })

  // }
  render() {

    const { item, plan } = this.props
    return (
        // <div>
      //   <DataList expand={this.handler} clicked={this.state.clicked}>
      //     {this.props.item.title}   
      //     </DataList>

      //         { plan.children && this.state.clicked && 
      //         <DataList plan={{...plan.children,params:{[plan.children.filterKey]:item.id}}} /> }
      //         </div>) }}
     <>
      <a
        onClick={() => this.setState({ clicked: !this.state.clicked })}
        style={{ color: this.state.clicked ? 'red' : 'blue' }}
      >
        <div className="list">
        <li >{item.title} <button className="edit">Edit</button></li>
        </div>
      </a>

            {
      plan.children && this.state.clicked &&
        <DataList plan={{ ...plan.children, params: { [plan.children.filterKey]: item.id } }} />
    }
        </>
           
          
          )

  }
}
export default ListItem